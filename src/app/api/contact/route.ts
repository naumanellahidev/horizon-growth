import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Payload = Record<string, unknown>;

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

/**
 * Contact endpoint.
 *
 * Delivery is handled by Resend when RESEND_API_KEY and CONTACT_TO_EMAIL are
 * set. If no provider is configured the route responds with a clear error so
 * the front end can fall back to a prefilled mailto link — a lead is never
 * silently accepted and then dropped.
 */
export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill every field they can see.
  if (str(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = str(body.name);
  const email = str(body.email);
  const message = str(body.message);

  if (name.length < 2 || message.length < 10 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please check the required fields." },
      { status: 422 },
    );
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${str(body.phone) || "—"}`,
    `Company: ${str(body.company) || "—"}`,
    `Service: ${str(body.service) || "—"}`,
    `Budget: ${str(body.budget) || "—"}`,
    "",
    "Message:",
    message,
  ];

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    console.warn(
      "[contact] No email provider configured. Set RESEND_API_KEY and CONTACT_FROM_EMAIL. Enquiry received from:",
      email,
    );
    return NextResponse.json(
      { ok: false, error: "Our contact form is not connected yet." },
      { status: 503 },
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website enquiry from ${name}`,
        text: lines.join("\n"),
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] Provider rejected the message:", res.status, detail);
      return NextResponse.json(
        { ok: false, error: "We could not deliver your message." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Delivery failed:", error);
    return NextResponse.json(
      { ok: false, error: "We could not deliver your message." },
      { status: 502 },
    );
  }
}

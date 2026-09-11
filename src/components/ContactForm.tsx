"use client";

import { useEffect, useState, type FormEvent } from "react";
import { planById, planOptionLabel, plans } from "@/lib/pricing";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; message: string; mailto?: string };

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const budgets = [
  "Under $2,500 / month",
  "$2,500 – $5,000 / month",
  "$5,000 – $10,000 / month",
  "$10,000+ / month",
  "One-off project",
  "Not sure yet",
];

export default function ContactForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [errors, setErrors] = useState<Errors>({});
  const [service, setService] = useState(defaultService ?? "");

  // Plan buttons link to /contact?plan=<id>. Read it on the client so the
  // contact page itself can stay statically rendered.
  useEffect(() => {
    const plan = planById(new URLSearchParams(window.location.search).get("plan") ?? "");
    if (plan) setService(planOptionLabel(plan));
  }, []);

  function validate(data: FormData): Errors {
    const next: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      next.email = "Please enter a valid email address.";
    if (message.length < 10)
      next.message = "Please add a little detail so we can reply usefully.";

    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstKey = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }

    setStatus({ state: "sending" });

    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await res.json()) as { ok: boolean; error?: string };

      if (res.ok && body.ok) {
        setStatus({ state: "sent" });
        form.reset();
        setService("");
        return;
      }

      throw new Error(body.error ?? "Submission failed.");
    } catch (err) {
      // Never drop a lead silently: hand the visitor a prefilled email instead.
      const subject = encodeURIComponent(
        `Enquiry from ${String(payload.name ?? "website visitor")}`,
      );
      const bodyText = encodeURIComponent(
        [
          `Name: ${payload.name ?? ""}`,
          `Email: ${payload.email ?? ""}`,
          `Phone: ${payload.phone ?? ""}`,
          `Company: ${payload.company ?? ""}`,
          `Service: ${payload.service ?? ""}`,
          `Budget: ${payload.budget ?? ""}`,
          "",
          String(payload.message ?? ""),
        ].join("\n"),
      );

      setStatus({
        state: "error",
        message:
          err instanceof Error && err.message !== "Submission failed."
            ? err.message
            : "We could not submit the form just now.",
        mailto: `mailto:${site.email}?subject=${subject}&body=${bodyText}`,
      });
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <h2 style={{ fontSize: "var(--fs-large)" }}>Request your free consultation</h2>
      <p className="muted" style={{ fontSize: "var(--fs-small)" }}>
        Tell us a little about your business and what you are trying to grow. We reply
        within {site.responseTime.toLowerCase()}.
      </p>

      <div className="form__grid" style={{ marginTop: "var(--sp-50)" }}>
        <div className="field">
          <label htmlFor="cf-name">Your name *</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "cf-name-err" : undefined}
          />
          {errors.name && (
            <span className="field__error" id="cf-name-err">
              {errors.name}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="cf-email">Email address *</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "cf-email-err" : undefined}
          />
          {errors.email && (
            <span className="field__error" id="cf-email-err">
              {errors.email}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="cf-phone">Phone</label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" />
        </div>

        <div className="field">
          <label htmlFor="cf-company">Company</label>
          <input id="cf-company" name="company" type="text" autoComplete="organization" />
        </div>

        <div className="field">
          <label htmlFor="cf-service">What do you need help with?</label>
          <select
            id="cf-service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select a plan or service</option>
            <optgroup label="Monthly plans">
              {plans.map((p) => (
                <option key={p.id} value={planOptionLabel(p)}>
                  {planOptionLabel(p)}
                </option>
              ))}
            </optgroup>
            <optgroup label="Individual services">
              {services.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                </option>
              ))}
            </optgroup>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="cf-budget">Monthly budget</label>
          <select id="cf-budget" name="budget" defaultValue="">
            <option value="">Select a range</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div className="field field--full">
          <label htmlFor="cf-message">How can we help? *</label>
          <textarea
            id="cf-message"
            name="message"
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "cf-message-err" : undefined}
          />
          {errors.message && (
            <span className="field__error" id="cf-message-err">
              {errors.message}
            </span>
          )}
        </div>
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
        <label htmlFor="cf-website">Do not fill this in</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="btn-row" style={{ marginTop: "var(--sp-50)" }}>
        <button type="submit" className="btn btn--primary" disabled={status.state === "sending"}>
          {status.state === "sending" ? "Sending…" : "Send my request"}
        </button>
      </div>

      <div aria-live="polite">
        {status.state === "sent" && (
          <p className="form__status form__status--ok">
            Thanks — your message is with us. We will reply within{" "}
            {site.responseTime.toLowerCase()}.
          </p>
        )}
        {status.state === "error" && (
          <p className="form__status form__status--err">
            {status.message} Please email{" "}
            <a href={status.mailto ?? `mailto:${site.email}`}>{site.email}</a> or call{" "}
            <a href={site.phoneHref}>{site.phone}</a> and we will pick it up straight away.
          </p>
        )}
      </div>

      <p className="form__note">
        We use your details only to respond to this enquiry. See our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    </form>
  );
}

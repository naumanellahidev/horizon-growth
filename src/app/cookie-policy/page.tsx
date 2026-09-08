import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description:
    "How horizongrowth.us uses cookies and similar technologies, what each category does, and how to control them in your browser.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      path="/cookie-policy"
      updated="September 2026"
      intro="What cookies and similar technologies this website uses, why, and how you can control them."
    >
      <h2>What cookies are</h2>
      <p>
        Cookies are small text files a website stores on your device. They let a site
        remember things between page views — a preference you set, or whether you have
        visited before. Similar technologies such as local storage and pixels work in
        comparable ways, and this policy covers those too.
      </p>

      <h2>Categories we use</h2>

      <h3>Strictly necessary</h3>
      <p>
        Required for the site to function — routing, security, and remembering that you
        submitted the contact form. These cannot be switched off without breaking the site,
        and they do not track you across other websites.
      </p>

      <h3>Analytics and performance</h3>
      <p>
        Used to understand which pages people read, where they arrive from, and where they
        leave. This is aggregated, and we use it to improve the site rather than to build a
        profile of you. If you decline these, the site works exactly the same.
      </p>

      <h3>Advertising and remarketing</h3>
      <p>
        As a marketing agency we may run advertising campaigns that use platform tags —
        for example Google Ads or Meta — to measure whether a visit came from an ad and
        whether it resulted in an enquiry. Where these are active they are listed in your
        browser as third-party cookies set by those platforms.
      </p>

      <h2>Third-party services</h2>
      <p>
        Some cookies are set by services we rely on rather than by us directly. These may
        include our hosting provider, analytics tooling, embedded maps, and advertising
        platforms. Those providers operate under their own privacy and cookie policies, and
        we have no control over what they store beyond choosing whether to use them.
      </p>

      <h2>How to control cookies</h2>
      <p>
        Every major browser lets you view, block and delete cookies, usually under Settings
        followed by Privacy. You can block all cookies, block only third-party cookies, or
        clear what is already stored. Blocking strictly necessary cookies may cause parts of
        this site to stop working correctly; blocking the rest will not.
      </p>
      <p>
        You can also opt out of personalised Google advertising through Google Ad Settings,
        and out of much interest-based advertising through the Digital Advertising Alliance
        and Network Advertising Initiative opt-out tools.
      </p>

      <h2>Do Not Track</h2>
      <p>
        Browsers vary in how they implement Do Not Track and there is no agreed standard for
        responding to it, so we do not claim to honour a signal we cannot interpret
        consistently. Use your browser cookie controls instead — those work reliably.
      </p>

      <h2>Changes</h2>
      <p>
        If we add or remove services that set cookies we will update this page and the date
        above.
      </p>

      <h2>Questions</h2>
      <p>
        Email <a href={`mailto:${site.email}`}>{site.email}</a> or call {site.phone} and we
        will answer directly. See also our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    </LegalPage>
  );
}

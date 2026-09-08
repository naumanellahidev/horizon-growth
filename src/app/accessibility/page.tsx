import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Accessibility Statement",
  description:
    "Horizon Growth Inc's commitment to accessibility on horizongrowth.us — what we have implemented, known limitations, and how to report a barrier.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility Statement"
      path="/accessibility"
      updated="September 2026"
      intro="We want this site to be usable by everyone, including people using screen readers, keyboard navigation or magnification. Here is where we stand, honestly."
    >
      <h2>Our target</h2>
      <p>
        We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. We
        describe this as a target we work toward and test against, not a certification —
        no automated tool can confirm full conformance, and claiming otherwise would be
        misleading.
      </p>

      <h2>What we have implemented</h2>
      <ul>
        <li>A skip link so keyboard users can bypass the navigation.</li>
        <li>Visible focus indicators on every interactive element.</li>
        <li>
          Semantic HTML with a single H1 per page and a logical heading order, so screen
          reader users can navigate by structure.
        </li>
        <li>
          Descriptive alternative text on content images; decorative images are hidden
          from assistive technology rather than announced.
        </li>
        <li>
          A keyboard-operable FAQ accordion using proper <code>aria-expanded</code> and{" "}
          <code>aria-controls</code> relationships, with answers left in the document so
          they are readable without JavaScript.
        </li>
        <li>
          A mobile menu that traps nothing unexpectedly, closes on Escape, and restores
          page scrolling when dismissed.
        </li>
        <li>
          Form fields with real labels, <code>aria-invalid</code> on errors, error text tied
          to its field, and status messages announced through a live region.
        </li>
        <li>
          Colour contrast checked against WCAG AA for body text and interface elements.
        </li>
        <li>
          Full respect for <code>prefers-reduced-motion</code> — every animation and
          transition is disabled when that setting is on, and content is never hidden
          behind an animation.
        </li>
        <li>Responsive layouts that reflow without horizontal scrolling down to 320px.</li>
      </ul>

      <h2>Known limitations</h2>
      <p>
        We would rather list these than pretend they do not exist:
      </p>
      <ul>
        <li>
          The embedded Google Map on our contact page is a third-party component. Its
          internal accessibility is outside our control, so the full address, phone number
          and opening hours are always provided as plain text alongside it.
        </li>
        <li>
          Stock photography is described generically in alt text. Where an image is purely
          decorative it is marked as such rather than given a misleading description.
        </li>
        <li>
          We have not commissioned an independent third-party audit. Our testing is
          internal, using keyboard navigation, automated checks and screen reader spot
          checks.
        </li>
      </ul>

      <h2>Tell us about a barrier</h2>
      <p>
        If any part of this site is difficult or impossible for you to use, please tell us.
        Email <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
        <a href={site.phoneHref}>{site.phone}</a>. Describe the page and what happened, and
        we will respond within {site.responseTime.toLowerCase()}. If a fix will take longer
        than that, we will tell you when to expect it and offer the information another way
        in the meantime.
      </p>

      <h2>Client work</h2>
      <p>
        Accessibility is part of how we build websites for clients, not an upsell. Every
        site we develop goes through keyboard, contrast, structure and screen reader checks
        before launch. If accessibility compliance is a specific requirement for your
        project, raise it early and we will scope the testing properly.
      </p>
    </LegalPage>
  );
}

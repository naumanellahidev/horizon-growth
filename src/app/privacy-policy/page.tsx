import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { site, addressLine } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Horizon Growth Inc collects, uses and protects personal information submitted through horizongrowth.us.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy-policy"
      updated="September 2026"
      intro="This policy explains what information Horizon Growth Inc collects through this website, why we collect it, and the choices you have."
    >
      <h2>Who we are</h2>
      <p>
        {site.name} is a digital marketing agency registered in the United States and based
        at {addressLine}. For any question about this policy, contact us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Information you give us.</strong> When you submit our contact form we
          collect your name, email address, and any phone number, company name, budget
          range or message you choose to provide.
        </li>
        <li>
          <strong>Usage information.</strong> Like most websites we collect standard
          technical data such as pages visited, referring source, approximate location
          derived from IP address, browser and device type.
        </li>
        <li>
          <strong>Communications.</strong> If you email or call us, we keep a record of
          that correspondence so we can respond and maintain continuity.
        </li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To respond to your enquiry and provide the services you ask about.</li>
        <li>To operate, secure and improve this website.</li>
        <li>To send you information you have specifically requested.</li>
        <li>To meet our legal, tax and accounting obligations.</li>
      </ul>
      <p>
        We do not sell your personal information, and we do not share it with third parties
        for their own marketing purposes.
      </p>

      <h2>Legal basis</h2>
      <p>
        We process contact form data on the basis of your consent and our legitimate
        interest in responding to enquiries about our services. You may withdraw consent at
        any time by contacting us.
      </p>

      <h2>Service providers</h2>
      <p>
        We use third-party providers to run this website and our business, including
        hosting, analytics and email delivery services. These providers process data only
        on our instructions and under contract. We choose providers that offer appropriate
        security and data protection commitments.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        This site uses cookies and similar technologies to understand how visitors use our
        pages so we can improve them. You can block or delete cookies through your browser
        settings; core parts of the site will continue to work without them.
      </p>

      <h2>How long we keep information</h2>
      <p>
        Enquiry records are retained for as long as needed to respond and for a reasonable
        period afterwards for business records, then deleted. Client records are kept for
        the duration of the engagement and for the period required by applicable tax and
        accounting rules.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have the right to request access to the
        personal information we hold about you, to have it corrected or deleted, and to
        object to certain processing. Residents of some US states, including California,
        have specific rights regarding the collection and sharing of personal information.
        To exercise any of these rights, email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> and we will respond within the
        time frame required by law.
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable technical and organizational measures to protect the information
        we hold. No method of transmission over the internet is completely secure, so we
        cannot guarantee absolute security.
      </p>

      <h2>Children</h2>
      <p>
        This website is intended for business audiences and is not directed to children
        under 13. We do not knowingly collect information from children.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy as our practices or the law change. The date at the top
        of this page shows when it was last revised.
      </p>
    </LegalPage>
  );
}

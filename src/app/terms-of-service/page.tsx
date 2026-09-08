import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { site, addressLine } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "The terms that apply to your use of horizongrowth.us and to marketing services provided by Horizon Growth Inc.",
  path: "/terms-of-service",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      path="/terms-of-service"
      updated="September 2026"
      intro="These terms govern your use of this website. Client engagements are governed by a separate signed agreement, which takes precedence over anything on this page."
    >
      <h2>Agreement to these terms</h2>
      <p>
        By accessing horizongrowth.us you agree to these terms. If you do not agree, please
        do not use the site. {site.name} is based at {addressLine}.
      </p>

      <h2>Use of this website</h2>
      <p>
        You may view and print pages from this site for your own reference. You may not
        republish material from this site, sell or sublicense it, reproduce or duplicate it
        for commercial purposes, or use it in any way that damages the site or interferes
        with other users&apos; access.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Unless otherwise stated, {site.name} owns the intellectual property rights in the
        content and design of this website. Photography is licensed from third parties and
        remains subject to the terms of those licences.
      </p>

      <h2>Client services</h2>
      <p>
        Marketing services are provided under a separate written agreement covering scope,
        fees, term, deliverables and ownership. Nothing on this website constitutes an
        offer, a quotation or a contract for services. Where this page and a signed client
        agreement conflict, the signed agreement governs.
      </p>

      <h2>No guarantee of results</h2>
      <p>
        Search rankings, advertising performance and conversion rates depend on many factors
        outside our control, including search engine algorithms, advertising platform
        policies, competitor activity and market conditions. We commit to a defined standard
        of professional work and to transparent reporting. We do not guarantee specific
        rankings, traffic volumes, lead counts or revenue outcomes, and you should treat any
        agency that does with caution.
      </p>

      <h2>Third-party links and platforms</h2>
      <p>
        This site may link to third-party websites, and our services involve third-party
        platforms such as advertising networks and analytics tools. We are not responsible
        for the content, policies or availability of those third parties.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        The information on this website is provided in good faith and for general
        information only. To the fullest extent permitted by law, {site.name} excludes
        liability for any loss arising from reliance on the content of this website.
        Liability arising from client engagements is addressed in the applicable service
        agreement.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of New York, and any dispute will
        be subject to the exclusive jurisdiction of the courts located in the State of New
        York.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.
      </p>
    </LegalPage>
  );
}

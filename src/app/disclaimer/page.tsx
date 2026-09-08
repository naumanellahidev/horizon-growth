import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer",
  description:
    "Important information about the content published on horizongrowth.us, including engagement blueprints, performance expectations and third-party trademarks.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      path="/disclaimer"
      updated="September 2026"
      intro="What the content on this website is, what it is not, and how you should read the material we publish."
    >
      <h2>General information only</h2>
      <p>
        The content on this website is published for general information about{" "}
        {site.name} and digital marketing practice. It is not professional, legal,
        financial or tax advice, and it does not account for the specific circumstances of
        your business. You should not act on it without seeking advice appropriate to your
        situation.
      </p>

      <h2>Engagement blueprints are methodology, not client results</h2>
      <p>
        The pages published under &ldquo;Case Studies&rdquo; are engagement blueprints. They
        document the diagnosis, sequence of work and success measures we apply to a given
        type of business. They are not accounts of completed client engagements, and no
        figure shown on those pages is presented as an achieved result for any client. Where
        we publish an actual client outcome in future, it will be clearly identified as such
        and published with that client&apos;s permission.
      </p>

      <h2>No performance guarantees</h2>
      <p>
        Marketing outcomes vary by industry, market, budget, competition, website quality
        and factors outside any agency&apos;s control, including changes to search engine
        algorithms and advertising platform policies. Nothing on this website should be read
        as a promise or guarantee of particular rankings, traffic, leads, sales or revenue.
      </p>

      <h2>Third-party trademarks</h2>
      <p>
        Product and platform names referenced on this site — including Google, Google Ads,
        Google Analytics, Meta, Microsoft Advertising, Shopify, WordPress, HubSpot, Klaviyo
        and Semrush — are trademarks of their respective owners. We reference them to
        describe the platforms we work in. Their use does not imply any endorsement,
        affiliation, partnership or certification unless explicitly stated elsewhere on this
        site.
      </p>

      <h2>Photography</h2>
      <p>
        Photography on this website is licensed stock imagery used to illustrate the
        content. Unless a caption says otherwise, images do not depict {site.name}{" "}
        employees, clients, premises or completed work.
      </p>

      <h2>External links</h2>
      <p>
        Where we link to external websites we do so because we believe the material may be
        useful. We do not control that content and are not responsible for its accuracy or
        availability.
      </p>

      <h2>Contact</h2>
      <p>
        If anything on this site is unclear or appears inaccurate, please tell us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> and we will correct it.
      </p>
    </LegalPage>
  );
}

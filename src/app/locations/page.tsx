import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { SectionHead } from "@/components/ContentBlocks";
import { ArrowRight } from "@/components/Icons";
import { locations } from "@/lib/locations";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas | Digital Marketing Across New York City & Long Island",
  description:
    "Horizon Growth Inc serves Queens, Brooklyn, Manhattan, The Bronx and Long Island with local SEO, Google Ads and web design — plus clients across the United States.",
  path: "/locations",
});

export default function LocationsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Digital Marketing Across New York City And Long Island"
        subtitle="Based in Queens, working across the five boroughs and nationwide"
        text="Local search behaves differently in every one of these markets. These pages set out what we have learned about each, and where we would start if you operate there."
        image="building"
        crumbs={crumbs}
        priority
        primaryCta={{ label: "Get a Free Consultation", href: "/contact" }}
      />

      <section className="section">
        <div className="wide">
          <SectionHead
            eyebrow="Where We Work"
            title="Five New York Markets, Handled Differently"
            text="A Manhattan professional services firm and a Bronx home services company face almost nothing in common in search. We do not run the same playbook across them."
          />

          <div className="job-list">
            {locations.map((l, i) => (
              <Reveal key={l.slug} className="job" delay={i * 60}>
                <div>
                  <h3>
                    <Link href={`/locations/${l.slug}`} style={{ color: "inherit" }}>
                      {l.h1}
                    </Link>
                  </h3>
                  <p className="job__meta">
                    {l.county} &middot; {l.areas.slice(0, 5).join(", ")} and more
                  </p>
                  <p className="muted" style={{ fontSize: "var(--fs-small)", marginTop: "0.4rem", maxWidth: "60ch" }}>
                    {l.heroSub}
                  </p>
                </div>
                <Link href={`/locations/${l.slug}`} className="btn btn--outline">
                  View {l.name} <ArrowRight />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wide split">
          <div>
            <SectionHead
              eyebrow="Beyond New York"
              title="We Work With Clients Across The United States"
              text="Everything except the in-person meetings works identically remotely. Roughly half of what we do — technical SEO, paid media, conversion work, web builds — never required being in the same room."
            />
            <div className="btn-row">
              <Link href="/contact" className="btn btn--primary">
                Talk to us
              </Link>
              <Link href="/services" className="btn btn--outline">
                Browse services
              </Link>
            </div>
          </div>
          <div className="notice">
            <strong>Visiting us?</strong> We are at {site.address.street},{" "}
            {site.address.locality}, {site.address.region} {site.address.postalCode}.
            Appointments only, {site.hours}. Call{" "}
            <a href={site.phoneHref}>{site.phone}</a>.
          </div>
        </div>
      </section>

      <CtaBand image="clientMeeting" />

      <JsonLd schemas={[breadcrumbSchema(crumbs)]} />
    </>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { SectionHead, ServiceCard, ValueGrid } from "@/components/ContentBlocks";
import { MapPin } from "@/components/Icons";
import { locationBySlug, locations } from "@/lib/locations";
import { serviceBySlug, services } from "@/lib/services";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  localAreaServiceSchema,
} from "@/lib/seo";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const loc = locationBySlug(slug);
  if (!loc) return {};

  return buildMetadata({
    title: loc.metaTitle,
    description: loc.metaDescription,
    path: `/locations/${loc.slug}`,
  });
}

export default async function LocationPage({ params }: Params) {
  const { slug } = await params;
  const loc = locationBySlug(slug);
  if (!loc) notFound();

  const focus = loc.focusServices
    .map((s) => serviceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const others = locations.filter((l) => l.slug !== loc.slug);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
    { name: loc.label, path: `/locations/${loc.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow={`Serving ${loc.label}`}
        title={loc.h1}
        subtitle={loc.heroSub}
        text={loc.heroText}
        image={loc.image}
        crumbs={crumbs}
        priority
        primaryCta={{ label: "Get a Free Consultation", href: "/contact" }}
        secondaryCta={{ label: `Call ${site.phone}`, href: site.phoneHref }}
      />

      {/* ---------- Market context ---------- */}
      <section className="section">
        <div className="wide split">
          <div>
            <SectionHead
              eyebrow="The Market"
              title={`What Search Looks Like In ${loc.name}`}
            />
            <div className="prose">
              {loc.intro.map((p) => (
                <p key={p.slice(0, 40)} className="muted">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <Reveal>
            <h3 style={{ fontSize: "var(--fs-medium)" }}>
              <MapPin aria-hidden="true" style={{ display: "inline-block", verticalAlign: "-4px", marginRight: "0.4rem", width: 20, height: 20, color: "var(--brand)" }} />
              Areas we cover
            </h3>
            <ul className="pill-list">
              {loc.areas.map((a) => (
                <li key={a}>
                  <span className="pill">{a}</span>
                </li>
              ))}
            </ul>
            <div className="notice" style={{ marginTop: "var(--sp-50)" }}>
              <strong>{loc.county}.</strong> Our office is at {site.address.street},{" "}
              {site.address.locality}, {site.address.region} {site.address.postalCode} —
              call <a href={site.phoneHref}>{site.phone}</a> or email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Local priorities ---------- */}
      <section className="section section--tint">
        <div className="wide">
          <SectionHead
            eyebrow="How We Work Here"
            title={`Our Priorities For ${loc.name} Businesses`}
            text="These are the specific decisions this market rewards — not a generic checklist with the place name changed."
          />
          <ValueGrid items={loc.priorities} />
        </div>
      </section>

      {/* ---------- Focus services ---------- */}
      <section className="section">
        <div className="wide">
          <SectionHead
            eyebrow="Where We Start"
            title={`Services That Move Fastest In ${loc.name}`}
            text="We lead with the channels that historically produce the quickest, most durable gains for this market."
          />
          <div className="card-grid">
            {focus.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <ServiceCard
                  href={`/services/${s.slug}`}
                  name={s.name}
                  blurb={s.cardBlurb}
                  label={s.cardLabel}
                  icon={s.icon}
                />
              </Reveal>
            ))}
          </div>
          <div className="btn-row btn-row--center" style={{ marginTop: "var(--sp-60)" }}>
            <Link href="/services" className="btn btn--outline">
              See all {services.length} services
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section section--tint">
        <div className="wide">
          <div className="section-head">
            <p className="eyebrow">Local Questions</p>
            <h2>Digital Marketing In {loc.name}: FAQs</h2>
          </div>
          <Faq items={loc.faqs} />
        </div>
      </section>

      {/* ---------- Other locations ---------- */}
      <section className="section">
        <div className="wide">
          <SectionHead
            center
            eyebrow="Other Service Areas"
            title="We Also Work Across The Rest Of New York"
          />
          <ul className="pill-list" style={{ justifyContent: "center" }}>
            {others.map((l) => (
              <li key={l.slug}>
                <Link href={`/locations/${l.slug}`} className="pill">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={`Ready to grow your ${loc.name} business?`}
        text={`Book a free consultation. We will review how you currently show up in ${loc.name} search and tell you the two or three changes that would move it most.`}
        image="clientMeeting"
      />

      <JsonLd
        schemas={[
          localAreaServiceSchema({
            areaName: loc.label,
            path: `/locations/${loc.slug}`,
            description: loc.metaDescription,
          }),
          faqSchema(loc.faqs),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  );
}

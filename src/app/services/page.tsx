import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import OfficeSection from "@/components/OfficeSection";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { FeatureRows, SectionHead, ServiceCard } from "@/components/ContentBlocks";
import { services } from "@/lib/services";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Digital Marketing Services | SEO, PPC, Web Design & Social",
  description:
    "Explore Horizon Growth Inc's digital marketing services for US businesses: SEO, PPC and Google Ads, social media marketing, web design, CRO and e-commerce growth.",
  path: "/services",
});

const engagementModel = [
  {
    title: "Start With A Diagnosis, Not A Package",
    text: "Our plans and prices are published, but we never push a package before we understand the problem. The first conversation is about what your numbers say, where demand actually exists in your category and which constraint is holding growth back. Sometimes that means we recommend less work than you expected.",
    image: "strategySession" as const,
  },
  {
    title: "Build The Foundation Before Scaling Spend",
    text: "Tracking, site speed, conversion paths and message clarity get fixed first. Pouring budget into a funnel that leaks is the most common and most expensive mistake we are asked to unwind.",
    image: "analyticsScreen" as const,
  },
  {
    title: "Run Channels As One Program",
    text: "Your SEO content should inform your ad copy. Your paid search terms should shape your keyword strategy. Your conversion testing should improve both. We run these disciplines together rather than as separate line items.",
    image: "teamMeeting" as const,
  },
  {
    title: "Report On Revenue, Then Reforecast",
    text: "Monthly reporting ties activity to leads, pipeline and revenue, followed by a call where we decide together what changes next month. The plan adapts to what the data shows rather than to what was scoped in January.",
    image: "reportingMeeting" as const,
  },
];

export default function ServicesPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Digital Marketing Services Built Around Your Revenue Goals"
        subtitle="Seven disciplines, one accountable team"
        text="Whether you need to be found in search, convert more of the traffic you already have, or rebuild a website that is holding everything back — the work starts with what your numbers say, not with a package."
        image="officeModern"
        crumbs={crumbs}
        priority
        primaryCta={{ label: "Get a Free Consultation", href: "/contact" }}
      />

      <section className="section">
        <div className="wide">
          <SectionHead
            eyebrow="What We Do"
            title="Choose Where To Start"
            text="Most clients begin with one or two services and expand as results justify it. Each page below sets out the scope, the process and what it costs to find out more."
          />
          <div className="card-grid">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
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
        </div>
      </section>

      <section className="section section--tint">
        <div className="wide">
          <SectionHead
            eyebrow="How We Engage"
            title="The Same Four Principles On Every Account"
            text="Regardless of which services you buy, the way we work does not change."
          />
          <FeatureRows items={engagementModel} numbered />
        </div>
      </section>

      <section className="section">
        <div className="wide">
          <SectionHead
            center
            eyebrow="Not Sure Where To Start?"
            title="Tell Us The Problem, Not The Service"
            text="If you are not certain whether you need SEO, better ads or a new website, that is a normal place to be. Describe what is not working and we will tell you which of these is actually the bottleneck."
          />
          <div className="btn-row btn-row--center">
            <Link href="/contact" className="btn btn--primary">
              Book a free consultation
            </Link>
            <Link href="/pricing" className="btn btn--outline">
              View pricing &amp; plans
            </Link>
            <Link href="/case-studies" className="btn btn--outline">
              See our engagement blueprints
            </Link>
          </div>
        </div>
      </section>

      <OfficeSection />

      <CtaBand image="clientMeeting" />

      <JsonLd schemas={[breadcrumbSchema(crumbs)]} />
    </>
  );
}

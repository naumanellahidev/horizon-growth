import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import {
  BenefitGrid,
  Checklist,
  FeatureRows,
  SectionHead,
  ServiceCard,
} from "@/components/ContentBlocks";
import { serviceBySlug, services } from "@/lib/services";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  serviceSchema,
} from "@/lib/seo";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const related = service.related
    .map((s) => serviceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow={service.heroEyebrow}
        title={service.h1}
        subtitle={service.heroSub}
        text={service.heroText}
        image={service.heroImage}
        crumbs={crumbs}
        priority
        primaryCta={{ label: "Get a Free Consultation", href: "/contact" }}
        secondaryCta={{ label: `Call ${site.phone}`, href: site.phoneHref }}
      />

      {/* ---------- Benefits ---------- */}
      <section className="section">
        <div className="wide">
          <SectionHead
            eyebrow="The Outcome"
            title={service.benefitsTitle}
            text={service.benefitsIntro}
          />
          <BenefitGrid items={service.benefits} />
        </div>
      </section>

      {/* ---------- What's included ---------- */}
      <section className="section section--tint">
        <div className="wide split">
          <div>
            <SectionHead
              eyebrow="Scope Of Work"
              title={service.includesTitle}
              text={service.includesIntro}
            />
            <div className="btn-row">
              <Link href="/contact" className="btn btn--primary">
                Request a scoped proposal
              </Link>
            </div>
          </div>
          <Reveal>
            <Checklist items={service.includes} />
          </Reveal>
        </div>
      </section>

      {/* ---------- Detailed process ---------- */}
      <section className="section">
        <div className="wide">
          <SectionHead
            eyebrow="Our Process"
            title={service.detailsTitle}
            text={service.detailsIntro}
          />
          <FeatureRows items={service.details} numbered />
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section section--tint">
        <div className="wide">
          <div className="section-head">
            <p className="eyebrow">Questions</p>
            <h2>{service.name} FAQs</h2>
          </div>
          <Faq items={service.faqs} />
        </div>
      </section>

      {/* ---------- Case studies ---------- */}
      <section className="section">
        <div className="wide">
          <SectionHead
            eyebrow="Engagement Blueprints"
            title="How This Work Plays Out In Practice"
            text="Each blueprint documents the diagnosis, the order of work and the measures we commit to for that kind of business."
          />
          <CaseStudyGrid />
        </div>
      </section>

      {/* ---------- Related services ---------- */}
      {related.length > 0 && (
        <section className="section section--tint">
          <div className="wide">
            <SectionHead
              eyebrow="Works Well With"
              title="Services That Compound With This One"
              text="Channels rarely perform their best in isolation. These are the disciplines we most often pair with this service."
            />
            <div className="card-grid">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 70}>
                  <ServiceCard
                    href={`/services/${r.slug}`}
                    name={r.name}
                    blurb={r.cardBlurb}
                    label={r.cardLabel}
                    icon={r.icon}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand title={service.ctaTitle} text={service.ctaText} image="clientMeeting" />

      <JsonLd
        schemas={[
          serviceSchema({
            name: service.name,
            description: service.metaDescription,
            path: `/services/${service.slug}`,
          }),
          faqSchema(service.faqs),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  );
}

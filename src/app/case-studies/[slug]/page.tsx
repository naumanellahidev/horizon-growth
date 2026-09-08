import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { SectionHead } from "@/components/ContentBlocks";
import { ArrowRight } from "@/components/Icons";
import { caseStudies, caseStudyBySlug, disclosure } from "@/lib/caseStudies";
import { serviceBySlug } from "@/lib/services";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudyBySlug(slug);
  if (!study) return {};

  return buildMetadata({
    title: study.metaTitle,
    description: study.metaDescription,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = caseStudyBySlug(slug);
  if (!study) notFound();

  const linkedServices = study.serviceSlugs
    .map((s) => serviceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
    { name: study.sector, path: `/case-studies/${study.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow={study.tag}
        title={study.title}
        subtitle={study.sector}
        text={study.excerpt}
        image={study.heroImage}
        crumbs={crumbs}
        priority
        primaryCta={{ label: "Discuss a similar project", href: "/contact" }}
      />

      {/* ---------- Challenge ---------- */}
      <section className="section">
        <div className="wide split">
          <div>
            <SectionHead eyebrow="The Situation" title="What Usually Goes Wrong" />
            <div className="prose">
              {study.challenge.map((p) => (
                <p key={p.slice(0, 40)} className="muted">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <Reveal>
            <h3 style={{ fontSize: "var(--fs-medium)" }}>What we measure</h3>
            <div className="result-grid">
              {study.measures.map((m) => (
                <div className="result" key={m.label}>
                  <strong>{m.value}</strong>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>
            <p className="muted" style={{ fontSize: "var(--fs-x-small)", marginTop: "var(--sp-40)" }}>
              {study.measuresNote}
            </p>
            <p className="muted" style={{ fontSize: "var(--fs-x-small)" }}>
              <strong>Typical timeline:</strong> {study.timeline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Approach ---------- */}
      <section className="section section--tint">
        <div className="wide">
          <SectionHead
            eyebrow="The Approach"
            title="The Sequence We Follow"
            text="Order matters more than effort here. Doing these in the wrong sequence is how budgets get spent without moving the number."
          />
          <div className="job-list">
            {study.approach.map((step, i) => (
              <Reveal key={step.title} className="value" delay={i * 70}>
                <span className="feature-row__step">Step {String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Services applied ---------- */}
      <section className="section">
        <div className="wide">
          <SectionHead
            eyebrow="Services Applied"
            title="The Disciplines Behind This Blueprint"
          />
          <div className="job-list">
            {linkedServices.map((s) => (
              <div className="job" key={s.slug}>
                <div>
                  <h3>{s.name}</h3>
                  <p className="job__meta">{s.cardBlurb}</p>
                </div>
                <Link href={`/services/${s.slug}`} className="btn btn--outline">
                  View service <ArrowRight />
                </Link>
              </div>
            ))}
          </div>

          <div className="notice" style={{ marginTop: "var(--sp-60)" }}>
            <strong>About this page.</strong> {disclosure}
          </div>
        </div>
      </section>

      {/* ---------- Other blueprints ---------- */}
      <section className="section section--tint">
        <div className="wide">
          <SectionHead eyebrow="More Blueprints" title="Other Growth Problems We Work On" />
          <CaseStudyGrid exclude={study.slug} />
        </div>
      </section>

      <CtaBand
        title="Does this sound like your business?"
        text="Book a free consultation and we will map this against your own numbers, then tell you honestly whether the approach fits."
        image="clientMeeting"
      />

      <JsonLd schemas={[breadcrumbSchema(crumbs)]} />
    </>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import OfficeSection from "@/components/OfficeSection";
import JsonLd from "@/components/JsonLd";
import { SectionHead } from "@/components/ContentBlocks";
import { caseStudies, disclosure } from "@/lib/caseStudies";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Engagement Blueprints & Case Studies",
  description:
    "See how Horizon Growth Inc approaches local lead generation, B2B demand generation and e-commerce scaling — the diagnosis, the work sequence and the measures we commit to.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Engagement Blueprints: How We Solve Different Growth Problems"
        subtitle="The methodology, before the marketing"
        text="Rather than publishing client logos we have not earned, we publish the actual playbooks we run — the diagnosis, the order of work, and the measures we hold ourselves to."
        image="meetingRoom"
        crumbs={crumbs}
        priority
        primaryCta={{ label: "Discuss your project", href: "/contact" }}
      />

      <section className="section">
        <div className="wide">
          <SectionHead
            eyebrow="Our Playbooks"
            title="Three Common Growth Problems, And How We Work Through Them"
            text="Most engagements we take on resemble one of these three shapes. Each blueprint sets out what usually causes the problem and the sequence we follow to fix it."
          />

          <div className="notice" style={{ marginBottom: "var(--sp-60)" }}>
            <strong>A note on what these are.</strong> {disclosure} As client results are
            approved for publication, they will appear here in the same format. If you would
            like to speak with a reference, ask us on the call and we will arrange it.
          </div>

          <CaseStudyGrid items={caseStudies} />
        </div>
      </section>

      <section className="section section--tint">
        <div className="wide">
          <SectionHead
            center
            eyebrow="Not Seeing Your Situation?"
            title="Most Growth Problems Are More Specific Than A Category"
            text={`Tell us what is actually happening — leads dried up, cost per acquisition climbing, traffic without sales — and we will tell you which of these approaches applies, or that none of them do. Call ${site.phone}.`}
          />
        </div>
      </section>

      <OfficeSection />

      <CtaBand
        title="Want a blueprint written for your business?"
        text="Book a free consultation and we will map the diagnosis, the sequence and the measures against your actual numbers."
        image="clientMeeting"
      />

      <JsonLd schemas={[breadcrumbSchema(crumbs)]} />
    </>
  );
}

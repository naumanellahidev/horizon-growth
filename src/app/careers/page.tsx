import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import OfficeSection from "@/components/OfficeSection";
import JsonLd from "@/components/JsonLd";
import { SectionHead, ValueGrid } from "@/components/ContentBlocks";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Careers | Digital Marketing Jobs in Queens, NY",
  description:
    "Join Horizon Growth Inc, a digital marketing agency in Queens, New York. See how we hire, what we look for, and how to send an open application.",
  path: "/careers",
});

const whyJoin = [
  {
    title: "Senior Work From Day One",
    text: "We do not staff accounts with layers. You will own client relationships and strategy rather than filling in someone else's template.",
  },
  {
    title: "Small Client Load",
    text: "We deliberately cap how many accounts each person carries so the work stays thorough instead of frantic.",
  },
  {
    title: "Learning Budget",
    text: "Certifications, conferences and courses are funded, because a team that stops learning in this industry stops being useful quickly.",
  },
  {
    title: "Hybrid, Queens-Based",
    text: "Our office is in Jackson Heights. We meet in person regularly and trust people to work where they do their best thinking the rest of the time.",
  },
  {
    title: "No Vanity Reporting",
    text: "You will never be asked to dress up a bad month. We would rather have the hard conversation with a client than manufacture a good-looking slide.",
  },
  {
    title: "Real Ownership",
    text: "If you see a better way to run something, you are expected to say so. Process here is a starting point, not a rulebook.",
  },
];

export default function CareersPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build A Career In Marketing That You Can Explain Honestly"
        subtitle="We hire for judgement, not for buzzwords"
        text="We are a small senior team in Queens, New York. We are not always hiring, but we always read open applications from people who care about doing this work properly."
        image="teamStandup"
        crumbs={crumbs}
        priority
        primaryCta={{ label: "Send an open application", href: `mailto:${site.email}?subject=Open%20application` }}
      />

      <section className="section">
        <div className="wide">
          <SectionHead
            eyebrow="Open Roles"
            title="Current Openings"
            text="We publish roles here as they open. When there is nothing listed, an open application is genuinely worth sending — several of our best conversations have started that way."
          />

          <div className="notice">
            <strong>No positions are open right now.</strong> We would still like to hear
            from experienced SEO strategists, paid media specialists, front-end developers
            and content writers. Email{" "}
            <a href={`mailto:${site.email}?subject=Open%20application`}>{site.email}</a>{" "}
            with a short note about the work you are proudest of and why. We reply to every
            application from a real person.
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wide">
          <SectionHead
            eyebrow="Why Work Here"
            title="What Is Different About Working At Horizon Growth"
            text="An honest description rather than a list of perks, so you can decide whether this suits how you want to work."
          />
          <ValueGrid items={whyJoin} />
        </div>
      </section>

      <section className="section">
        <div className="wide">
          <SectionHead
            eyebrow="Our Hiring Process"
            title="Four Steps, No Surprises"
            text="We aim to go from first email to decision inside three weeks, and we tell you where you stand at every stage."
          />
          <div className="job-list">
            {[
              {
                title: "1. Introductory call (30 minutes)",
                text: "A conversation about your experience and what you are looking for. No whiteboard, no trick questions.",
              },
              {
                title: "2. Practical exercise (paid)",
                text: "A short, realistic task close to the actual work. We pay for your time — asking for free labour to evaluate a candidate is not something we do.",
              },
              {
                title: "3. Team conversation",
                text: "You meet the people you would work alongside, and you get to ask them anything without a manager in the room.",
              },
              {
                title: "4. Offer and references",
                text: "A written offer with the salary range stated up front, followed by reference checks with your permission.",
              },
            ].map((step) => (
              <div className="job" key={step.title}>
                <div>
                  <h3>{step.title}</h3>
                  <p className="job__meta">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfficeSection />

      <CtaBand
        title="Think you would be a good fit?"
        text="Send us a note about the work you are proudest of. We read every application ourselves."
        primaryLabel="Email your application"
        primaryHref={`mailto:${site.email}?subject=Open%20application`}
        image="teamOffice"
        showPhone={false}
      />

      <JsonLd schemas={[breadcrumbSchema(crumbs)]} />
    </>
  );
}

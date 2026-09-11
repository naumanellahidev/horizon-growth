import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import OfficeSection from "@/components/OfficeSection";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import {
  BenefitGrid,
  PlatformStrip,
  SectionHead,
  ServiceCard,
  StatsBand,
} from "@/components/ContentBlocks";
import { PricingAssurances, PricingCards, ServicePriceGrid } from "@/components/Pricing";
import { homeServices } from "@/lib/services";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Digital Marketing Agency in Queens, New York | Horizon Growth Inc",
  description:
    "Horizon Growth Inc is a Queens, NY digital marketing agency. SEO, Google Ads, social media, web design and conversion optimization built to grow revenue for US businesses.",
  path: "/",
});

const homeFaqs = [
  {
    q: "What does Horizon Growth Inc actually do?",
    a: "We plan and run digital marketing programs for US businesses — search engine optimization, paid search and paid social, website design and development, and conversion rate optimization. Most clients work with us on two or three of those at once because they compound.",
  },
  {
    q: "Do you only work with businesses in Queens and New York?",
    a: "We are based in Jackson Heights, Queens, and a good share of our work is with businesses across the five boroughs and Long Island. We also work with clients throughout the United States remotely, and the process is the same either way.",
  },
  {
    q: "How do your engagements usually start?",
    a: "With a free 30-minute consultation. We look at what you are already running, what your numbers say, and whether we are genuinely the right fit. If we are not, we will tell you and point you somewhere better.",
  },
  {
    q: "How much does digital marketing with Horizon Growth cost?",
    a: "Our monthly plans start at $350 for the Starter Plan, $499 for the Growth Plan and $699 for the Premium Plan, with no setup fees. Individual services such as SEO, PPC management or a new website are also available on their own — full details are on our pricing page.",
  },
  {
    q: "Are we locked into a long contract?",
    a: "No. We ask for an initial three months on retainer work because almost nothing meaningful shows in less than that, and after that engagements run month to month. You own your accounts, data and assets throughout.",
  },
  {
    q: "How do you report on results?",
    a: "Every client gets a live dashboard and a monthly report written in plain English: what we did, what it produced, what it cost per lead or sale, and what is planned next. We report on pipeline and revenue, not just impressions.",
  },
];

const commitments = [
  { value: "7", label: "Core service disciplines" },
  { value: "1 day", label: "Response time on enquiries" },
  { value: "Queens", label: "New York based team" },
  { value: "Month 4", label: "No lock-in after onboarding" },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        variant="home"
        priority
        eyebrow="Digital Marketing Agency · Queens, New York"
        title="Digital Marketing That Turns Search Demand Into Booked Revenue"
        subtitle="SEO, paid media, web design and conversion — run as one program"
        text="Horizon Growth Inc helps businesses across New York and the United States stop guessing where growth comes from. We build the plan, run the channels and report on the number that actually matters: revenue."
        image="teamOffice"
        primaryCta={{ label: "Get a Free Consultation", href: "/contact" }}
        secondaryCta={{ label: "See our services", href: "/services" }}
        meta={["Based in Jackson Heights, Queens", "Reply within 1 business day", "No long-term lock-in"]}
      />

      {/* ---------- Services ---------- */}
      <section className="section">
        <div className="wide">
          <SectionHead
            eyebrow="What We Do"
            title="A Full-Service Digital Marketing Partner"
            text="Seven connected disciplines, delivered by one accountable team. Start with the channel that will move fastest for you and expand as the results justify it."
          />

          <div className="card-grid">
            {homeServices.map((s, i) => (
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
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Why us ---------- */}
      <section className="section section--tint">
        <div className="wide">
          <SectionHead
            eyebrow="Why Horizon Growth"
            title="Marketing You Can Actually Hold To Account"
            text="Agencies are easy to hire and hard to evaluate. These are the commitments we make so you always know what you are paying for."
          />
          <BenefitGrid
            items={[
              {
                title: "We Fix Measurement First",
                text: "Before we spend a dollar of your budget we make sure the tracking is telling the truth. Everything after that depends on it.",
              },
              {
                title: "You Own Everything",
                text: "Your ad accounts, analytics, domains, creative and data stay in your name. Leaving us should never mean starting over.",
              },
              {
                title: "Senior People On Your Account",
                text: "The person who scoped your strategy is the person who runs it. Nothing gets handed to a junior after the pitch.",
              },
              {
                title: "Plain-English Reporting",
                text: "Monthly reporting a business owner can read in five minutes, tied to leads and revenue rather than impressions.",
              },
              {
                title: "No Long Lock-Ins",
                text: "Three months to get started, then month to month. We would rather earn the renewal than enforce a contract.",
              },
            ]}
          />
        </div>
      </section>

      {/* ---------- Commitments band ---------- */}
      <section className="section section--navy section--tight">
        <div className="wide">
          <div className="section-head section-head--center" style={{ marginBottom: "var(--sp-60)" }}>
            <p className="eyebrow eyebrow--light" style={{ justifyContent: "center" }}>
              How We Work
            </p>
            <h2>Straightforward Terms, Set Out Up Front</h2>
          </div>
          <StatsBand items={commitments} />
        </div>
      </section>

      {/* ---------- Pricing ---------- */}
      <section className="section section--tint" id="pricing">
        <div className="wide">
          <SectionHead
            center
            eyebrow="Pricing & Plans"
            title="Simple Monthly Plans. No Hidden Fees."
            text="Transparent packages for local and growing businesses. Start where you are today and upgrade whenever you are ready."
          />
          <PricingCards />
          <PricingAssurances />

          <div className="section-head section-head--center" style={{ margin: "var(--sp-80) auto var(--sp-60)" }}>
            <p className="eyebrow">Individual Services</p>
            <h3 style={{ fontSize: "var(--fs-large)" }}>Only Need One Thing? Every Service Is Available On Its Own</h3>
          </div>
          <ServicePriceGrid compact />

          <div className="btn-row btn-row--center" style={{ marginTop: "var(--sp-60)" }}>
            <Link href="/pricing" className="btn btn--primary">
              See full pricing &amp; compare plans
            </Link>
            <Link href="/contact" className="btn btn--outline">
              Get a custom quote
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Platforms ---------- */}
      <section className="section">
        <div className="wide">
          <SectionHead
            center
            eyebrow="Platforms & Tools"
            title="We Work In The Platforms Your Business Already Runs On"
            text="From ad platforms and analytics to your CMS and email stack, we work inside the accounts you own — and we leave them better documented than we found them."
          />
          <PlatformStrip />
        </div>
      </section>

      {/* ---------- Case studies ---------- */}
      <section className="section section--tint">
        <div className="wide">
          <SectionHead
            eyebrow="Engagement Blueprints"
            title="How We Approach Different Kinds Of Growth Problems"
            text="Each blueprint sets out the diagnosis, the sequence of work and the measures we hold ourselves to for that type of business."
          />
          <CaseStudyGrid />
          <div className="btn-row btn-row--center" style={{ marginTop: "var(--sp-60)" }}>
            <Link href="/case-studies" className="btn btn--outline">
              See all blueprints
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Local SEO copy ---------- */}
      <section className="section">
        <div className="wide split">
          <div>
            <SectionHead
              eyebrow="Serving New York & The USA"
              title="A Digital Marketing Agency Rooted In Queens"
              text="We are a short ride from Manhattan and a shorter one from most of Queens, which means we can sit across the table from you when that is the fastest way to solve something."
            />
            <p className="muted" style={{ fontSize: "var(--fs-small)" }}>
              Local search behaves differently from national search. A plumbing company in
              Jackson Heights and a software firm selling across all fifty states need
              different keyword strategies, different landing pages and different measures
              of success. We build for whichever one you are.
            </p>
            <div className="btn-row" style={{ marginTop: "var(--sp-50)" }}>
              <Link href="/services/seo" className="btn btn--primary">
                Explore SEO services
              </Link>
              <Link href="/about" className="btn btn--outline">
                About our team
              </Link>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "var(--fs-medium)" }}>Where we work</h3>
            <ul className="pill-list" style={{ marginBottom: "var(--sp-50)" }}>
              {["Queens", "Brooklyn", "Manhattan", "The Bronx", "Staten Island", "Long Island", "Nationwide USA"].map(
                (area) => (
                  <li key={area}>
                    <span className="pill">{area}</span>
                  </li>
                ),
              )}
            </ul>
            <div className="notice">
              <strong>Local business or multi-location brand?</strong> Ask us about Google
              Business Profile optimization, location landing pages and the review workflow
              that keeps you visible in the map pack. Call{" "}
              <a href={site.phoneHref}>{site.phone}</a>.
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section section--tint">
        <div className="wide">
          <div className="section-head">
            <p className="eyebrow">Common Questions</p>
            <h2>Before You Get In Touch</h2>
          </div>
          <Faq items={homeFaqs} />
        </div>
      </section>

      <OfficeSection />

      <CtaBand
        title="Let's talk about what you are trying to grow"
        text="Book a free 30-minute consultation. We will look at what you are running now and tell you honestly where the fastest gains are — whether or not you hire us."
        image="clientMeeting"
      />

      <JsonLd
        schemas={[
          faqSchema(homeFaqs),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
        ]}
      />
    </>
  );
}

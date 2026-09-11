import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { BenefitGrid, SectionHead } from "@/components/ContentBlocks";
import { Check } from "@/components/Icons";
import {
  AddOnGrid,
  PlanComparison,
  PricingAssurances,
  PricingCards,
  ServicePriceGrid,
} from "@/components/Pricing";
import { plans, pricingFaqs, servicePrices } from "@/lib/pricing";
import { serviceBySlug } from "@/lib/services";
import { breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Pricing & Plans | Digital Marketing Packages From $350/mo",
  description:
    "Transparent digital marketing pricing from Horizon Growth Inc. Starter $350/mo, Growth $499/mo and Premium $699/mo plans for local SEO, websites, social media and Google Ads — plus individual service pricing.",
  path: "/pricing",
});

const onboarding = [
  {
    title: "Free Consultation",
    text: "A 30-minute call to understand your business, your market and your goals, so we can recommend the right plan — or tell you if you need less.",
  },
  {
    title: "Onboarding In 2 Days",
    text: "We collect access to your Google Business Profile, website and accounts, and agree priorities and reporting dates with you.",
  },
  {
    title: "Work Starts In Week One",
    text: "Profile optimization, directory submissions, website and social setup begin straight away, following a written plan you have seen.",
  },
  {
    title: "Report, Review, Improve",
    text: "Regular plain-English reports show what we did and what it produced, and every review ends with the next set of priorities.",
  },
];

/** Offer schema so search engines can read plan and service prices directly. */
function pricingSchema() {
  return {
    "@type": "OfferCatalog",
    name: `${site.name} digital marketing plans and pricing`,
    url: `${site.url}/pricing`,
    itemListElement: [
      ...plans.map((p) => ({
        "@type": "Offer",
        name: p.name,
        description: p.features.join(", "),
        price: p.price,
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: p.price,
          priceCurrency: "USD",
          unitText: "MONTH",
        },
        seller: { "@id": `${site.url}/#organization` },
      })),
      ...servicePrices.map((sp) => {
        const service = serviceBySlug(sp.slug);
        return {
          "@type": "Offer",
          name: service?.name,
          url: `${site.url}/services/${sp.slug}`,
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: sp.from,
            priceCurrency: "USD",
          },
          seller: { "@id": `${site.url}/#organization` },
        };
      }),
    ],
  };
}

export default function PricingPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Pricing & Plans"
        title="Simple, Transparent Pricing For Growing Businesses"
        subtitle="Monthly plans from $350 — no setup fees, no long-term lock-in"
        text="Pick the plan that fits where your business is today and upgrade as you grow. Every plan includes a free consultation, 24/7 support and reporting written in plain English."
        image="reportingMeeting"
        crumbs={crumbs}
        priority
        primaryCta={{ label: "Compare plans", href: "#plans" }}
        secondaryCta={{ label: "Get a custom quote", href: "/contact" }}
      />

      {/* ---------- Plans ---------- */}
      <section className="section section--tint" id="plans">
        <div className="wide">
          <SectionHead
            center
            eyebrow="Monthly Plans"
            title="Choose The Plan That Fits Your Growth"
            text="Three straightforward packages built for local and growing businesses. Prices are per month, per business location."
          />
          <PricingCards />
          <PricingAssurances />
        </div>
      </section>

      {/* ---------- Comparison ---------- */}
      <section className="section" id="compare">
        <div className="wide">
          <SectionHead
            eyebrow="Compare Plans"
            title="Everything Side By Side"
            text="The detail behind each plan, so you know exactly what you are paying for before you get in touch."
          />
          <PlanComparison />
          <p className="muted" style={{ fontSize: "var(--fs-x-small)", marginTop: "var(--sp-40)" }}>
            Google Ads spend is paid directly to Google from your own account and is not included in
            the plan price. Additional business locations are available as an add-on.
          </p>
        </div>
      </section>

      {/* ---------- Individual services ---------- */}
      <section className="section section--tint" id="services">
        <div className="wide">
          <SectionHead
            eyebrow="Individual Services"
            title="Need Just One Service? Pay Only For That"
            text="Every service is also available on its own. Prices below are starting points — we send a fixed quote after a free consultation so you know the number before you commit."
          />
          <ServicePriceGrid />
        </div>
      </section>

      {/* ---------- Add-ons ---------- */}
      <section className="section" id="add-ons">
        <div className="wide">
          <SectionHead
            eyebrow="Add-Ons"
            title="Extend Any Plan"
            text="Bolt on extra work whenever you need it, without changing plans."
          />
          <AddOnGrid />
        </div>
      </section>

      {/* ---------- Custom plan ---------- */}
      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="wide">
          <div className="custom-plan">
            <div>
              <p className="eyebrow eyebrow--light">Custom &amp; Enterprise</p>
              <h2>Multi-Location, Franchise Or E-commerce?</h2>
              <p>
                Larger businesses usually need a scope built around them. We will put together a
                fixed-price proposal within two business days of your consultation.
              </p>
              <ul>
                {[
                  "Multiple locations or service areas",
                  "Higher ad budgets and multi-channel campaigns",
                  "Custom website builds and integrations",
                  "Priority support and a dedicated team",
                ].map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="custom-plan__actions">
              <Link href="/contact" className="btn btn--light">
                Request a custom quote
              </Link>
              <a href={site.phoneHref} className="btn btn--ghost-light">
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="section section--tint">
        <div className="wide">
          <SectionHead
            eyebrow="Getting Started"
            title="From Sign-Up To Results In Four Steps"
            text="No long onboarding and no guesswork about what happens next."
          />
          <BenefitGrid items={onboarding} />
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section">
        <div className="wide">
          <div className="section-head">
            <p className="eyebrow">Pricing Questions</p>
            <h2>Pricing FAQs</h2>
          </div>
          <Faq items={pricingFaqs} />
        </div>
      </section>

      <CtaBand
        title="Not sure which plan is right for you?"
        text="Book a free 30-minute consultation. We will look at where your business is today and recommend the plan — or the single service — that will move the needle fastest."
        image="clientMeeting"
      />

      <JsonLd schemas={[pricingSchema(), faqSchema(pricingFaqs), breadcrumbSchema(crumbs)]} />
    </>
  );
}

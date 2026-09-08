import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import OfficeSection from "@/components/OfficeSection";
import JsonLd from "@/components/JsonLd";
import {
  FeatureRows,
  SectionHead,
  StatsBand,
  ValueGrid,
} from "@/components/ContentBlocks";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About Our Digital Marketing Agency in Queens, NY",
  description:
    "Horizon Growth Inc is a digital marketing agency in Jackson Heights, Queens, New York. Meet the team, our approach to measurement, and how we work with US businesses.",
  path: "/about",
});

const story = [
  {
    title: "Why We Started Horizon Growth",
    text: "We kept meeting business owners who had spent real money on marketing and could not answer a simple question: which of it worked? Reports were full of impressions and engagement rates while nobody could trace a single customer back to a source. Horizon Growth exists to close that gap — to run marketing where the reporting is honest enough to make decisions from.",
    image: "teamMeeting" as const,
  },
  {
    title: "How We Are Set Up",
    text: "We are a small, senior team by design. The person who scopes your account is the person who runs it, and we deliberately cap how many clients each strategist carries. That is a constraint on how fast we can grow, and we accept it because the alternative is the thing most people dislike about agencies.",
    image: "teamOffice" as const,
  },
  {
    title: "Where We Work From",
    text: "Our office is in Jackson Heights, Queens — one of the most diverse commercial neighbourhoods in the United States, where small businesses compete against national brands every day. That perspective shapes how we think about local search, and it is a short trip if you would rather meet in person than over video.",
    image: "building" as const,
  },
];

const values = [
  {
    title: "Evidence Over Opinion",
    text: "When we disagree internally we go and look at the data. Seniority does not win arguments about what a page should say.",
  },
  {
    title: "Tell Clients The Hard Thing",
    text: "If your product page is the problem and not your ad spend, we say so — even when the easier conversation would be more profitable for us.",
  },
  {
    title: "Own Your Own Accounts",
    text: "We set up every platform in your name. No borrowed accounts, no hostage data, no penalty for changing your mind about us.",
  },
  {
    title: "Do Fewer Things Properly",
    text: "We would rather run two channels excellently than five adequately, and we will tell you which two before you sign anything.",
  },
  {
    title: "No Invented Numbers",
    text: "We do not publish client logos we have not earned or results we cannot substantiate, and we hold your reporting to the same standard.",
  },
  {
    title: "Leave It Better Documented",
    text: "Every account we touch gets documented so your team, or your next agency, can pick it up without archaeology.",
  },
];

const commitments = [
  { value: "7", label: "Core service disciplines" },
  { value: "1 day", label: "Response time on enquiries" },
  { value: "100%", label: "Accounts owned by the client" },
  { value: "3 mo", label: "Initial term, then month to month" },
];

export default function AboutPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <PageHero
        eyebrow="About Horizon Growth"
        title="A Queens Digital Marketing Agency Built On Honest Measurement"
        subtitle="Senior people, plain reporting, no borrowed credit"
        text="We are a New York digital marketing agency working with businesses that are tired of reports full of numbers nobody acts on. Our whole model is built around being straightforward about what is working and what is not."
        image="officePeople"
        crumbs={crumbs}
        priority
        primaryCta={{ label: "Work with us", href: "/contact" }}
        secondaryCta={{ label: "See our services", href: "/services" }}
      />

      <section className="section">
        <div className="wide">
          <SectionHead
            eyebrow="Who We Are"
            title="Marketing Should Be Accountable To The Same Standard As Every Other Line In Your Budget"
            text="Horizon Growth Inc is a full-service digital marketing agency serving businesses across Queens, New York City and the United States."
          />
          <div className="prose">
            <p>
              Most of the businesses we work with are not new to marketing. They have run
              ads, hired someone to post on social media, and paid for a website they are
              not entirely happy with. What they have rarely had is a single view of which
              of those things produced customers.
            </p>
            <p>
              That is where we start. Before we recommend a channel, we make sure the
              measurement underneath it is telling the truth — conversion tracking, call
              attribution, CRM handoffs, the unglamorous plumbing that decides whether
              every later decision is informed or invented. Only then do we put budget
              behind anything.
            </p>
            <p>
              From there we run the disciplines that fit your business:{" "}
              <Link href="/services/seo">search engine optimization</Link>,{" "}
              <Link href="/services/ppc-management">paid search and social</Link>,{" "}
              <Link href="/services/web-design-development">web design and development</Link>,{" "}
              <Link href="/services/conversion-rate-optimization">
                conversion rate optimization
              </Link>{" "}
              and{" "}
              <Link href="/services/ecommerce-marketing">e-commerce growth</Link> — as one
              coordinated program rather than a set of disconnected retainers.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wide">
          <SectionHead eyebrow="Our Story" title="How We Got Here" />
          <FeatureRows items={story} />
        </div>
      </section>

      <section className="section section--navy section--tight">
        <div className="wide">
          <div className="section-head section-head--center" style={{ marginBottom: "var(--sp-60)" }}>
            <p className="eyebrow eyebrow--light" style={{ justifyContent: "center" }}>
              Our Commitments
            </p>
            <h2>What You Can Hold Us To</h2>
            <p style={{ color: "#a9c6ea", fontSize: "var(--fs-small)" }}>
              These are terms of engagement, not performance claims. We publish what we
              promise rather than statistics we cannot substantiate.
            </p>
          </div>
          <StatsBand items={commitments} />
        </div>
      </section>

      <section className="section">
        <div className="wide">
          <SectionHead
            eyebrow="How We Operate"
            title="Six Principles That Decide How We Work"
            text="These are the rules we apply when a decision is genuinely difficult, which is the only time principles are worth anything."
          />
          <ValueGrid items={values} />
        </div>
      </section>

      <section className="section section--tint">
        <div className="wide split">
          <div>
            <SectionHead
              eyebrow="Get In Touch"
              title="Talk To Someone Who Will Actually Run Your Account"
              text="No sales development representative, no discovery form that goes nowhere. The first call is with the person who would be responsible for your results."
            />
            <div className="btn-row">
              <Link href="/contact" className="btn btn--primary">
                Book a consultation
              </Link>
              <Link href="/careers" className="btn btn--outline">
                Join the team
              </Link>
            </div>
          </div>
          <div className="notice">
            <strong>Horizon Growth Inc</strong>
            <br />
            {site.address.street}
            <br />
            {site.address.locality}, {site.address.region} {site.address.postalCode}
            <br />
            <a href={site.phoneHref}>{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            <span style={{ display: "inline-block", marginTop: "0.5rem" }}>{site.hours}</span>
          </div>
        </div>
      </section>

      <OfficeSection />

      <CtaBand
        title="Want a second opinion on your marketing?"
        text="Send us what you are running now. We will tell you what we would keep, what we would stop, and what we would do differently."
        image="clientMeeting"
      />

      <JsonLd schemas={[breadcrumbSchema(crumbs)]} />
    </>
  );
}

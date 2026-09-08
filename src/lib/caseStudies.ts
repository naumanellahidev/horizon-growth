import type { ImageKey } from "./images";

/**
 * Engagement blueprints.
 *
 * Horizon Growth Inc is a young agency and we do not publish invented client
 * names, logos or performance figures. Each entry below documents the actual
 * playbook we run for a given type of business — the diagnosis, the sequence
 * of work and the metrics we hold ourselves to. Once client results are
 * approved for publication they replace these entries in the same structure.
 */

export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  tag: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  image: ImageKey;
  heroImage: ImageKey;
  /** Services applied, referenced by service slug. */
  serviceSlugs: string[];
  challenge: string[];
  approach: { title: string; text: string }[];
  measures: { label: string; value: string }[];
  measuresNote: string;
  timeline: string;
};

export const disclosure =
  "These are engagement blueprints: the diagnosis, sequence of work and success measures we commit to for each type of business. They document our methodology rather than published client results, and no figures here are presented as achieved outcomes.";

export const caseStudies: CaseStudy[] = [
  {
    slug: "local-home-services-lead-generation",
    title: "Local Home Services: Local SEO And Google Ads Lead Generation",
    sector: "Home services, Queens & Brooklyn",
    tag: "Local SEO + PPC",
    excerpt:
      "How we build a dependable lead flow for contractors and home service companies competing across New York City boroughs.",
    metaTitle: "Local Home Services Lead Generation Blueprint",
    metaDescription:
      "The local SEO and Google Ads playbook Horizon Growth runs for home services businesses in Queens, Brooklyn and the wider New York market.",
    image: "building",
    heroImage: "teamOffice",
    serviceSlugs: ["seo", "ppc-management", "web-design-development"],
    challenge: [
      "Home services businesses in New York compete in one of the most expensive local ad markets in the country, against national lead aggregators with far deeper budgets.",
      "Most operators we speak to have a Google Business Profile they set up once, a website that loads slowly on mobile, and a paid search account spending against broad queries with no call tracking attached.",
      "The result is a lead flow that swings unpredictably month to month, with no reliable way to tell which jobs came from which source.",
    ],
    approach: [
      {
        title: "Fix measurement before spending more",
        text: "Call tracking, form tracking and a simple lead log come first. Until every enquiry is attributed to a source and marked won or lost, no channel decision is better than a guess.",
      },
      {
        title: "Own the map pack in each service area",
        text: "Google Business Profile is optimized for the primary category and service list, citations are made consistent, and genuinely distinct location pages are built for each borough or neighbourhood served — not thin duplicates with the place name swapped.",
      },
      {
        title: "Restructure paid search around job value",
        text: "Campaigns are segmented by service type and margin, with aggressive negative keyword work to remove the DIY and job-seeker queries that quietly consume budget in this sector.",
      },
      {
        title: "Rebuild the mobile enquiry path",
        text: "A tap-to-call header, a short form above the fold, service area clarity and visible licensing and insurance details. Most of this traffic is on a phone, often standing in the problem they need solved.",
      },
      {
        title: "Build a review engine",
        text: "A post-job review request workflow, because in local search the volume and recency of reviews is a ranking factor and a conversion factor at the same time.",
      },
    ],
    measures: [
      { label: "Primary metric", value: "Cost per booked job" },
      { label: "Secondary", value: "Map pack visibility" },
      { label: "Quality gate", value: "Lead-to-job close rate" },
      { label: "Review cadence", value: "Weekly pacing, monthly strategy" },
    ],
    measuresNote:
      "Targets are set from your own job values and close rate during onboarding, then reviewed monthly against actuals.",
    timeline: "Foundations in weeks 1–4, local rankings compounding from month 3.",
  },

  {
    slug: "b2b-services-demand-generation",
    title: "B2B Professional Services: Content, SEO And Pipeline Attribution",
    sector: "B2B professional services, USA",
    tag: "SEO + Strategy",
    excerpt:
      "The demand generation program we build for firms with long sales cycles, where the buyer researches for months before a first call.",
    metaTitle: "B2B Demand Generation Blueprint",
    metaDescription:
      "How Horizon Growth builds SEO, content and attribution programs for US B2B professional services firms with long, multi-stakeholder sales cycles.",
    image: "meetingRoom",
    heroImage: "teamMeeting",
    serviceSlugs: ["digital-marketing-strategy", "seo", "conversion-rate-optimization"],
    challenge: [
      "B2B services firms often have excellent expertise and almost no digital footprint expressing it. Their site describes what they do; it rarely answers the questions a buyer asks in month one of a six-month evaluation.",
      "Lead volume looks low because only bottom-of-funnel enquiries are counted, and marketing gets judged on a number that ignores every touch that made the enquiry happen.",
      "Meanwhile the sales team fields the same five objections on every call, none of which are addressed anywhere on the website.",
    ],
    approach: [
      {
        title: "Interview sales before writing anything",
        text: "The objections, comparison questions and deal-breakers your sales team hears daily are the content brief. This single step is what separates content that gets read from content that fills a calendar.",
      },
      {
        title: "Build topic clusters around evaluation stages",
        text: "Problem-aware, solution-aware and vendor-comparison content, each mapped to a distinct query set and internally linked so authority concentrates on the pages that convert.",
      },
      {
        title: "Give the site a real conversion ladder",
        text: "Not every visitor is ready for a sales call. Assessment tools, detailed guides and a genuinely useful newsletter capture the buyer who is nine months out but will shortlist from memory.",
      },
      {
        title: "Connect marketing data to the CRM",
        text: "Offline conversion import and closed-loop reporting so you can see which content and which channels touched the deals that actually closed, not just the ones that filled in a form.",
      },
      {
        title: "Arm the sales team with the same argument",
        text: "The positioning, proof points and case material developed for the site are packaged for sales use, so the story a prospect reads is the story they hear on the call.",
      },
    ],
    measures: [
      { label: "Primary metric", value: "Sales-qualified pipeline" },
      { label: "Leading indicator", value: "Non-branded organic sessions" },
      { label: "Efficiency", value: "Cost per qualified opportunity" },
      { label: "Attribution", value: "Multi-touch, CRM-integrated" },
    ],
    measuresNote:
      "Because B2B cycles are long, we agree leading indicators at kickoff so progress is visible well before revenue lands.",
    timeline: "Research and tracking in month 1, content compounding from months 4–9.",
  },

  {
    slug: "ecommerce-store-profitable-scaling",
    title: "E-commerce Store: Scaling Paid Acquisition Without Losing Margin",
    sector: "Direct-to-consumer e-commerce, USA",
    tag: "E-commerce + CRO",
    excerpt:
      "The sequence we follow when an online store has traffic and revenue but shrinking contribution margin as spend increases.",
    metaTitle: "E-commerce Scaling Blueprint",
    metaDescription:
      "How Horizon Growth helps US online stores scale paid acquisition profitably through feed optimization, checkout CRO and lifecycle email retention.",
    image: "ecommerce",
    heroImage: "ecommercePack",
    serviceSlugs: ["ecommerce-marketing", "conversion-rate-optimization", "ppc-management"],
    challenge: [
      "A store reaches a ceiling where every additional dollar of ad spend returns less than the last, and return on ad spend slowly erodes while revenue still technically grows.",
      "The usual causes are all fixable and all invisible in a platform dashboard: a product feed built for the warehouse rather than for search, a checkout that leaks on mobile, and email flows that were set up once and never segmented.",
      "Reporting on return on ad spend alone hides the real problem, because it says nothing about contribution margin or whether those customers ever come back.",
    ],
    approach: [
      {
        title: "Report on margin, not just ROAS",
        text: "We rebuild reporting around contribution margin after cost of goods, shipping and fees. It is common for the campaign with the best return on ad spend to be selling the least profitable products.",
      },
      {
        title: "Rebuild the product feed",
        text: "Titles restructured around real search language, missing attributes completed, and campaigns segmented by margin band so budget concentrates on products worth selling.",
      },
      {
        title: "Fix the checkout before scaling spend",
        text: "Mobile checkout testing, shipping cost transparency earlier in the flow, payment options, and guest checkout friction. Every point of conversion recovered here improves the economics of every channel at once.",
      },
      {
        title: "Build the retention layer",
        text: "Welcome, browse abandonment, cart recovery, post-purchase and win-back flows, segmented by purchase history. Retention is what makes aggressive acquisition affordable.",
      },
      {
        title: "Scale against cohort data",
        text: "Budget increases are approved channel by channel based on whether the customers that channel brings in repeat — measured on cohorts, not on last-click.",
      },
    ],
    measures: [
      { label: "Primary metric", value: "Contribution margin" },
      { label: "Conversion", value: "Checkout completion rate" },
      { label: "Retention", value: "Repeat purchase rate" },
      { label: "Efficiency", value: "Blended customer acquisition cost" },
    ],
    measuresNote:
      "Baselines are captured in the first 30 days so every later change is measured against a documented starting point.",
    timeline: "Audit and quick wins in weeks 1–6, retention flows live by month 2.",
  },
];

export const caseStudyBySlug = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

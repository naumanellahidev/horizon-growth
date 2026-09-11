/**
 * Single source of truth for plan and service pricing. The home page pricing
 * section, the /pricing page, the contact form and the Offer schema all read
 * from here, so a price only ever needs changing in one place.
 */

export type Plan = {
  id: "starter" | "growth" | "premium";
  name: string;
  /** Short positioning line under the plan name. */
  tagline: string;
  /** Monthly price in USD. */
  price: number;
  bestFor: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter Plan",
    tagline: "Get found on Google Maps and local search",
    price: 350,
    bestFor: "Single-location local businesses getting started online",
    features: [
      "Free Consultation",
      "Google Business Profile Optimization",
      "Local SEO Setup",
      "Keyword Research (up to 10 keywords)",
      "Local Directory Submissions (25+ citations)",
      "Review Generation Setup",
      "Monthly Performance Report",
      "24/7 Full Support",
    ],
    cta: "Start with Starter",
  },
  {
    id: "growth",
    name: "Growth Plan",
    tagline: "A website, local SEO and social working together",
    price: 499,
    bestFor: "Growing businesses ready for a stronger online presence",
    features: [
      "Free Consultation",
      "Google Business Profile Optimization",
      "Social Media Setup (2 platforms)",
      "Basic Website Development (up to 5 pages)",
      "Local SEO Services (up to 25 keywords)",
      "Website Maintenance",
      "Bi-weekly Reporting",
      "Monthly Strategy Call",
      "24/7 Full Support",
    ],
    featured: true,
    cta: "Choose Growth",
  },
  {
    id: "premium",
    name: "Premium Plan",
    tagline: "A complete, done-for-you growth program",
    price: 699,
    bestFor: "Established businesses that want every channel covered",
    features: [
      "Free Consultation",
      "Advanced SEO Strategy (up to 50 keywords)",
      "Google Business Profile Optimization",
      "Social Media Marketing (3 platforms)",
      "Advanced Website Development (up to 15 pages)",
      "Google Ads Management",
      "Online Reputation Management",
      "Directory Management",
      "Custom Marketing Plan",
      "Website Maintenance",
      "Weekly Reporting",
      "Dedicated Account Manager",
      "24/7 Full Support",
    ],
    cta: "Go Premium",
  },
];

export const planById = (id: string) => plans.find((p) => p.id === id);

/** Formats a whole-dollar price, e.g. 1200 -> "$1,200". */
export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

/** Label used in the contact form dropdown and enquiry emails. */
export const planOptionLabel = (p: Plan) => `${p.name} (${usd(p.price)}/mo)`;

/* ------------------------------------------------------------------ */
/* Plan comparison table                                               */
/* ------------------------------------------------------------------ */

/** `true` renders a tick, `false` a dash, a string is printed as-is. */
export type CompareValue = boolean | string;

export const comparison: {
  group: string;
  rows: { label: string; values: [CompareValue, CompareValue, CompareValue] }[];
}[] = [
  {
    group: "Local SEO & Visibility",
    rows: [
      { label: "Free consultation", values: [true, true, true] },
      { label: "Google Business Profile optimization", values: [true, true, true] },
      { label: "Google Business Profile posts", values: ["4 / month", "8 / month", "12 / month"] },
      { label: "Local SEO", values: ["Setup", "Ongoing", "Advanced strategy"] },
      { label: "Keywords tracked", values: ["10", "25", "50"] },
      { label: "Directory submissions & management", values: ["25+ citations", "50+ citations", "Fully managed"] },
      { label: "On-page SEO", values: ["Homepage", "Up to 5 pages", "Up to 15 pages"] },
    ],
  },
  {
    group: "Website",
    rows: [
      { label: "Website development", values: [false, "Basic · up to 5 pages", "Advanced · up to 15 pages"] },
      { label: "Website maintenance & security updates", values: [false, true, true] },
      { label: "Mobile-first, SEO-ready build", values: [false, true, true] },
      { label: "Hosting setup & SSL", values: [false, true, true] },
    ],
  },
  {
    group: "Social, Ads & Reputation",
    rows: [
      { label: "Social media", values: [false, "Setup · 2 platforms", "Full marketing · 3 platforms"] },
      { label: "Social posts", values: [false, false, "12 / month"] },
      { label: "Google Ads management", values: [false, false, true] },
      { label: "Review generation", values: ["Setup", "Setup", "Ongoing"] },
      { label: "Online reputation management", values: [false, false, true] },
    ],
  },
  {
    group: "Reporting & Support",
    rows: [
      { label: "Performance reporting", values: ["Monthly", "Bi-weekly", "Weekly"] },
      { label: "Strategy calls", values: ["Quarterly", "Monthly", "Bi-weekly"] },
      { label: "Custom marketing plan", values: [false, false, true] },
      { label: "Dedicated account manager", values: [false, false, true] },
      { label: "24/7 full support", values: [true, true, true] },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Individual (a la carte) service pricing                             */
/* ------------------------------------------------------------------ */

export type ServicePrice = {
  /** Matches a slug in services.ts so the card can link to the service page. */
  slug: string;
  from: number;
  /** "/mo" for retainers, "one-time" for projects. */
  unit: "/mo" | "one-time";
  note: string;
  includes: string[];
};

export const servicePrices: ServicePrice[] = [
  {
    slug: "seo",
    from: 450,
    unit: "/mo",
    note: "National or competitive SEO beyond a single local market",
    includes: ["Technical SEO audit", "Keyword & content strategy", "Link building", "Monthly reporting"],
  },
  {
    slug: "ppc-management",
    from: 399,
    unit: "/mo",
    note: "Flat management fee · ad spend paid directly to Google or Meta",
    includes: ["Account build or restructure", "Ad copy & testing", "Conversion tracking", "Monthly reporting"],
  },
  {
    slug: "social-media-marketing",
    from: 349,
    unit: "/mo",
    note: "Content, publishing and community management",
    includes: ["12 posts per month", "2 platforms", "Community management", "Monthly reporting"],
  },
  {
    slug: "web-design-development",
    from: 999,
    unit: "one-time",
    note: "Custom, mobile-first website with 30 days of launch support",
    includes: ["Up to 5 custom pages", "On-page SEO setup", "Contact forms & tracking", "30-day post-launch support"],
  },
  {
    slug: "digital-marketing-strategy",
    from: 499,
    unit: "one-time",
    note: "A written channel plan and 90-day roadmap you keep",
    includes: ["Competitor & demand analysis", "Channel & budget plan", "Tracking audit", "90-day roadmap"],
  },
  {
    slug: "conversion-rate-optimization",
    from: 599,
    unit: "/mo",
    note: "Research-led testing on the traffic you already have",
    includes: ["Funnel & heatmap analysis", "A/B test design", "Landing page improvements", "Monthly test report"],
  },
  {
    slug: "ecommerce-marketing",
    from: 799,
    unit: "/mo",
    note: "Shopping ads, store SEO and email flows for online stores",
    includes: ["Product feed optimization", "Shopping campaigns", "Email & abandoned cart flows", "Revenue reporting"],
  },
];

/* ------------------------------------------------------------------ */
/* Add-ons                                                             */
/* ------------------------------------------------------------------ */

export const addOns: { name: string; price: string; text: string }[] = [
  { name: "Additional Business Location", price: "$150/mo", text: "Google Business Profile, citations and local SEO for each extra location." },
  { name: "Landing Page", price: "$299", text: "A focused, conversion-built page for a campaign, offer or service." },
  { name: "SEO Blog Articles", price: "$99/article", text: "1,000+ word articles researched and written to rank for a target keyword." },
  { name: "Email Marketing", price: "$249/mo", text: "Monthly newsletters plus welcome and follow-up automations." },
  { name: "Logo & Brand Kit", price: "$249", text: "Logo, colour palette and font pairing with files for web and print." },
  { name: "Website Maintenance Only", price: "$99/mo", text: "Updates, backups, security monitoring and small content edits." },
  { name: "Reputation Management Only", price: "$149/mo", text: "Review monitoring, responses and a review request workflow." },
  { name: "Extra Social Platform", price: "$99/mo", text: "Add another channel to your Growth or Premium social program." },
];

/* ------------------------------------------------------------------ */
/* Assurances printed beneath the plan cards                           */
/* ------------------------------------------------------------------ */

export const pricingAssurances = [
  { title: "No setup fees", text: "The monthly price is the price." },
  { title: "Month to month after 90 days", text: "No long-term lock-in." },
  { title: "You own everything", text: "Accounts, website and data stay yours." },
  { title: "Upgrade any time", text: "Move between plans as you grow." },
];

/* ------------------------------------------------------------------ */
/* FAQs                                                                */
/* ------------------------------------------------------------------ */

export const pricingFaqs = [
  {
    q: "Are there any setup fees or hidden costs?",
    a: "No. The plan price covers the work listed on the plan. The only costs outside it are third-party ones you choose, such as Google Ads spend or a premium website theme, and we agree those with you before anything is spent.",
  },
  {
    q: "Is there a minimum contract?",
    a: "Plans start with an initial three months, because local SEO and reputation work need that long to show meaningful results. After that every plan runs month to month and you can cancel with 30 days' notice.",
  },
  {
    q: "Is Google Ads spend included in the Premium plan?",
    a: "No. The Premium plan covers the management of your Google Ads account. Your ad spend is paid directly to Google from your own account, so you keep full control of the budget and see exactly where every dollar goes.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes. You can upgrade at any time and the new plan starts from your next billing cycle. Downgrades are available once your initial three months are complete.",
  },
  {
    q: "What if I only need one service?",
    a: "Every service is also available on its own. Individual service pricing is listed on this page, and we will recommend the smallest scope that solves your problem rather than a bigger plan.",
  },
  {
    q: "Do you offer custom plans for multi-location or larger businesses?",
    a: "Yes. Multi-location brands, franchises and e-commerce stores usually need a custom scope. Book a free consultation and we will send a fixed proposal within two business days.",
  },
  {
    q: "How do I pay?",
    a: "We invoice monthly in advance and accept all major credit cards and ACH bank transfer. One-time projects are billed 50% upfront and 50% on launch.",
  },
  {
    q: "What happens after I sign up?",
    a: "We schedule an onboarding call within two business days, collect the access we need, and start work in week one. Your first report arrives at the end of your first reporting cycle.",
  },
];

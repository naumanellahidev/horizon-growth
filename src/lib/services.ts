import type { ImageKey } from "./images";
import type { ServiceIconName } from "@/components/Icons";

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  /** Short label used in navigation and cards. */
  navLabel: string;
  /** Full service name used in headings and schema. */
  name: string;
  icon: ServiceIconName;
  /** Uppercase category label printed at the foot of the home page card. */
  cardLabel: string;
  cardBlurb: string;

  metaTitle: string;
  metaDescription: string;

  h1: string;
  heroEyebrow: string;
  heroSub: string;
  heroText: string;
  heroImage: ImageKey;

  benefitsTitle: string;
  benefitsIntro: string;
  benefits: { title: string; text: string }[];

  includesTitle: string;
  includesIntro: string;
  includes: string[];

  detailsTitle: string;
  detailsIntro: string;
  details: { title: string; text: string; image: ImageKey }[];

  faqs: Faq[];

  ctaTitle: string;
  ctaText: string;
  related: string[];
};

export const services: Service[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "digital-marketing-strategy",
    navLabel: "Strategy",
    name: "Digital Marketing Strategy",
    icon: "compass",
    cardLabel: "Growth Strategy",
    cardBlurb:
      "We map where your revenue actually comes from, then build a channel plan that puts budget behind the moves that compound.",

    metaTitle: "Digital Marketing Strategy Services",
    metaDescription:
      "Data-led digital marketing strategy from a Queens, NY agency. Channel planning, budget modeling, audience research and a 90-day roadmap built around your revenue goals.",

    h1: "Digital Marketing Strategy Built Around Revenue, Not Vanity Metrics",
    heroEyebrow: "Strategy & Planning",
    heroSub: "Know exactly where your next customer comes from",
    heroText:
      "Most marketing budgets leak because nobody mapped the path from first click to signed customer. We start with the math — demand, margins, sales cycle — and turn it into a channel plan your team can execute this quarter.",
    heroImage: "strategySession",

    benefitsTitle: "What a Horizon Growth Strategy Changes",
    benefitsIntro:
      "A strategy engagement is not a slide deck that sits in a shared drive. It is a working plan with owners, budgets and dates attached.",
    benefits: [
      {
        title: "Clarity On Your Best Channel",
        text: "We size the realistic demand in each channel before you spend, so budget follows opportunity instead of habit.",
      },
      {
        title: "A Budget You Can Defend",
        text: "Every line in the plan is tied to a target cost per lead and a payback window you can take to your board.",
      },
      {
        title: "Fewer Competing Priorities",
        text: "One roadmap replaces the scattered list of half-finished campaigns most teams are carrying.",
      },
      {
        title: "Messaging That Lands",
        text: "Positioning research gives your ads, pages and sales calls the same argument instead of three different ones.",
      },
      {
        title: "Measurement You Trust",
        text: "We fix tracking first. If the numbers are wrong, every decision after them is a guess.",
      },
    ],

    includesTitle: "Included In Every Strategy Engagement",
    includesIntro:
      "Each engagement is scoped to your business, but these are the components we bring to every account.",
    includes: [
      "Revenue and margin modeling",
      "Competitive demand analysis",
      "Keyword and topic opportunity sizing",
      "Customer and buyer interview synthesis",
      "Channel mix and budget allocation",
      "Positioning and messaging framework",
      "Full funnel and journey mapping",
      "Analytics and conversion tracking audit",
      "Attribution and reporting design",
      "90-day execution roadmap",
      "Creative and content direction",
      "Quarterly review and reforecast",
    ],

    detailsTitle: "How We Build Your Plan",
    detailsIntro:
      "A structured six-stage process that moves from evidence to execution in about four to six weeks.",
    details: [
      {
        title: "Discovery And Revenue Modeling",
        text: "We begin with your numbers, not your channels. Average order value, close rate, sales cycle length and customer lifetime value determine what you can afford to pay for a lead — and that single figure shapes every recommendation that follows. Businesses are often surprised to learn which segment actually carries their margin.",
        image: "reportingMeeting",
      },
      {
        title: "Market And Competitor Research",
        text: "We measure the demand that exists in your category rather than the demand you wish existed. That means search volume, ad auction pressure, share of voice across social platforms, and a clear read on which competitors are winning specific queries and why their pages outrank yours.",
        image: "dataReview",
      },
      {
        title: "Audience And Message Development",
        text: "We interview your customers and your sales team to find the language real buyers use. The output is a positioning framework covering the problems you solve, the objections that stall deals, and the proof points that move a prospect from interested to ready to talk.",
        image: "planning",
      },
      {
        title: "Channel Mix And Budget Allocation",
        text: "SEO, paid search, paid social, email and content each get a defined role, a target metric and a share of budget. We model what your spend should return at three levels so you have a conservative case, an expected case and an upside case before committing a dollar.",
        image: "analyticsScreen",
      },
      {
        title: "Measurement And Tracking Setup",
        text: "We audit analytics, conversion events, call tracking and CRM handoffs, then correct what is broken. Clean, consent-compliant measurement is what lets you shift budget mid-quarter with confidence instead of arguing about whose report is right.",
        image: "analyticsLaptop",
      },
      {
        title: "Roadmap, Handoff And Review",
        text: "You receive a sequenced 90-day plan with owners, dependencies and success criteria for each initiative. We can hand it to your internal team, execute it ourselves, or run a hybrid — and we reforecast every quarter against what actually happened.",
        image: "teamMeeting",
      },
    ],

    faqs: [
      {
        q: "How long does a strategy engagement take?",
        a: "Most engagements run four to six weeks from kickoff to final roadmap. Businesses with multiple product lines or several markets sometimes need longer, and we will tell you that before you sign rather than after.",
      },
      {
        q: "Do we have to use Horizon Growth to execute the plan?",
        a: "No. The roadmap is yours to keep and it is written so an in-house team or another agency can pick it up. Many clients do choose to have us run one or two channels while their team handles the rest.",
      },
      {
        q: "What if we already have a marketing strategy?",
        a: "Then we stress-test it. We will show you where the assumptions hold up, where the tracking contradicts the reporting, and which two or three changes would move the number fastest.",
      },
      {
        q: "How is this different from a free audit?",
        a: "A free audit lists problems. A strategy engagement quantifies them, ranks them by revenue impact, and tells you the order to fix them in given your actual budget and team capacity.",
      },
    ],

    ctaTitle: "Ready to stop guessing where your budget goes?",
    ctaText:
      "Book a free 30-minute consultation and we will walk through your current numbers and where the fastest gains are hiding.",
    related: ["seo", "ppc-management", "conversion-rate-optimization"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "seo",
    navLabel: "SEO",
    name: "Search Engine Optimization",
    icon: "search",
    cardLabel: "SEO Services",
    cardBlurb:
      "Technical fixes, content that answers real queries, and links worth having — the three things that actually move rankings.",

    metaTitle: "SEO Services in Queens, NY | SEO Company",
    metaDescription:
      "SEO services for US businesses from a Queens, New York SEO company. Technical SEO, local SEO, content strategy and white-hat link building that grows qualified organic traffic.",

    h1: "SEO Services That Turn Search Demand Into Booked Revenue",
    heroEyebrow: "Search Engine Optimization",
    heroSub: "Rank for the searches your buyers actually make",
    heroText:
      "Traffic is easy to buy and hard to keep. We build organic search programs for businesses across the USA — grounded in technical health, genuine topical authority and content written for people who are ready to act.",
    heroImage: "dataReview",

    benefitsTitle: "What Our SEO Clients Get",
    benefitsIntro:
      "We measure an SEO program by pipeline, not by a screenshot of a ranking. Here is what that looks like in practice.",
    benefits: [
      {
        title: "Rankings On Commercial Terms",
        text: "We prioritize the queries with buying intent first, then expand into the informational topics that feed them.",
      },
      {
        title: "Traffic That Converts",
        text: "Pages are built against a specific intent, so visitors find the answer and the next step in the same place.",
      },
      {
        title: "Local Visibility In Queens And Beyond",
        text: "Google Business Profile, local landing pages and citation consistency for businesses that serve a defined area.",
      },
      {
        title: "A Site Google Can Crawl",
        text: "Speed, indexation, structured data and internal linking fixed at the template level, not page by page.",
      },
      {
        title: "Reporting You Can Read",
        text: "Monthly reporting in plain English: what changed, what it earned, and what we are doing next month.",
      },
    ],

    includesTitle: "Our SEO Services Include",
    includesIntro:
      "Every SEO retainer is built from the same core disciplines, weighted to whatever your site needs most.",
    includes: [
      "Full technical SEO audit",
      "Keyword research and intent mapping",
      "On-page optimization",
      "Content strategy and briefs",
      "Local SEO and Google Business Profile",
      "White-hat link acquisition",
      "Site architecture and internal linking",
      "Core Web Vitals and page speed",
      "Schema and structured data",
      "Content gap and competitor analysis",
      "Algorithm update monitoring",
      "Monthly reporting and strategy calls",
    ],

    detailsTitle: "Inside Our SEO Program",
    detailsIntro:
      "Six workstreams that run in parallel from month one, sequenced so the technical foundation is solid before we scale content.",
    details: [
      {
        title: "Technical SEO Audit",
        text: "We crawl your site the way a search engine does and surface what is quietly costing you visibility: duplicate templates, orphaned pages, redirect chains, thin category pages, blocked resources and slow server response. Fixes are ranked by impact and effort so your developers know exactly what to do first.",
        image: "analyticsScreen",
      },
      {
        title: "Keyword And Content Strategy",
        text: "We build a keyword map that separates research queries from ready-to-buy queries and assigns each one to a single page. That prevents your own pages from competing with each other, and it tells your writers precisely which question every piece of content has to answer.",
        image: "planning",
      },
      {
        title: "On-Page Optimization And UX",
        text: "Titles, headings, internal links and page copy get rebuilt around the target intent — but so does the layout. A page that ranks and then loses the visitor in the first ten seconds has not earned anything, so readability, above-the-fold clarity and clear next steps are part of the same pass.",
        image: "workspace",
      },
      {
        title: "Local SEO For Queens And New York",
        text: "For businesses serving a geographic area we optimize your Google Business Profile, build genuinely useful location pages, keep name, address and phone data consistent across directories, and develop the review workflow that makes you the obvious local choice in Queens, Brooklyn and the wider New York market.",
        image: "building",
      },
      {
        title: "Link Acquisition And Digital PR",
        text: "We earn links through original data, useful resources and relationships with publications your customers actually read. No private networks, no purchased placements, nothing that puts your domain at risk when the next algorithm update lands.",
        image: "collaboration",
      },
      {
        title: "Reporting, Monitoring And Iteration",
        text: "You get a monthly report tying organic sessions to leads and revenue, plus proactive monitoring of ranking volatility and core update impact. Every report ends with the specific work planned for the next 30 days so nothing is a surprise.",
        image: "analyticsLaptop",
      },
    ],

    faqs: [
      {
        q: "How long before we see SEO results?",
        a: "Technical wins can show inside four to eight weeks. Competitive commercial rankings usually take four to nine months depending on your domain history and how entrenched the current results are. Anyone promising page one in 30 days is selling something else.",
      },
      {
        q: "Do you focus on local or national keywords?",
        a: "Both, in the order that makes commercial sense. For a business serving Queens and the surrounding boroughs, local intent is usually the fastest revenue, and we expand into broader national terms once that base is producing.",
      },
      {
        q: "How is SEO pricing structured?",
        a: "Monthly retainers scoped to the size of your site and the competitiveness of your market, with no long lock-in. We will give you a fixed proposal after reviewing your site, so you know the number before you commit.",
      },
      {
        q: "Will you work with our existing developers?",
        a: "Yes, and we prefer it. We supply prioritized, specific tickets your team can implement, and we will review the changes once they ship to confirm they landed correctly.",
      },
      {
        q: "What reporting will we receive?",
        a: "A monthly report covering rankings, organic traffic, conversions and revenue attribution, plus a live dashboard you can check any time and a call to walk through what it means.",
      },
    ],

    ctaTitle: "Want to know what your site could rank for?",
    ctaText:
      "Request a free SEO opportunity review. We will show you the queries you are missing and what it would take to win them.",
    related: ["digital-marketing-strategy", "web-design-development", "ppc-management"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "web-design-development",
    navLabel: "Web Design",
    name: "Website Design & Development",
    icon: "monitor",
    cardLabel: "Web Design & Dev",
    cardBlurb:
      "Fast, accessible, search-ready websites designed to convert the traffic your marketing works so hard to earn.",

    metaTitle: "Web Design & Development Services",
    metaDescription:
      "Custom web design and development for US businesses. Fast, mobile-first, SEO-ready websites built to convert — from a digital marketing agency in Queens, New York.",

    h1: "Websites Engineered To Convert, Not Just To Launch",
    heroEyebrow: "Web Design & Development",
    heroSub: "A site your marketing can actually build on",
    heroText:
      "A beautiful website that loads slowly, buries its call to action or cannot be crawled is an expensive brochure. We design and build sites where performance, search visibility and conversion are decided in the wireframe, not patched in afterward.",
    heroImage: "workspace",

    benefitsTitle: "What You Get From A Horizon Growth Build",
    benefitsIntro:
      "We build for the three audiences every site has: your customers, your team and the search engines.",
    benefits: [
      {
        title: "Speed That Passes Core Web Vitals",
        text: "Performance budgets are set before design starts, so the site is fast on a mid-range phone on cellular data.",
      },
      {
        title: "Mobile-First By Default",
        text: "Most of your traffic is on a phone. We design that layout first and scale it up, never the other way round.",
      },
      {
        title: "SEO Built Into The Structure",
        text: "Clean URLs, semantic markup, schema and a crawlable architecture from day one instead of a retrofit.",
      },
      {
        title: "Conversion Paths That Are Obvious",
        text: "Every template has a defined primary action and the supporting proof a visitor needs to take it.",
      },
      {
        title: "A CMS Your Team Can Use",
        text: "Editable content blocks with guardrails, so marketing can ship a landing page without filing a dev ticket.",
      },
    ],

    includesTitle: "Our Web Design And Development Services Include",
    includesIntro:
      "From a focused landing page to a full multi-template rebuild, these disciplines are part of the work.",
    includes: [
      "UX research and information architecture",
      "Wireframing and prototyping",
      "Custom UI design systems",
      "Responsive front-end development",
      "CMS build and content modeling",
      "Core Web Vitals optimization",
      "Accessibility (WCAG) compliance",
      "On-page SEO implementation",
      "Analytics and event tracking",
      "Form, CRM and email integrations",
      "Pre-launch QA across devices",
      "Post-launch support and iteration",
    ],

    detailsTitle: "How We Build Your Website",
    detailsIntro:
      "A transparent process with review points at every stage, so nothing lands as a surprise at handover.",
    details: [
      {
        title: "Discovery And Information Architecture",
        text: "Before a single screen is designed we agree on who the site is for, what each page has to accomplish, and how someone gets from landing to enquiry in the fewest reasonable steps. The sitemap and URL structure that come out of this stage are what make the site straightforward to grow later.",
        image: "strategySession",
      },
      {
        title: "Wireframes And Prototypes",
        text: "You review the layout and content hierarchy in greyscale first. Settling structure before visual design means feedback focuses on whether the page argues its case, and it keeps expensive changes out of the development phase.",
        image: "deskWork",
      },
      {
        title: "Visual Design And Design System",
        text: "We build a reusable system — type scale, spacing, colour roles, buttons, cards and form styles — rather than a set of one-off page comps. Your site stays visually consistent as it grows, and new pages take hours to assemble instead of weeks.",
        image: "focusedWork",
      },
      {
        title: "Development And CMS Build",
        text: "Front-end code is written semantically and tested against real devices, then wired into a content model your marketing team can edit safely. Components are documented so any competent developer can extend the site after we hand it over.",
        image: "deskLaptops",
      },
      {
        title: "Performance, Accessibility And SEO QA",
        text: "Every build goes through the same checklist before launch: Core Web Vitals, keyboard navigation, screen reader labels, colour contrast, structured data, redirects and metadata. We fix what fails rather than noting it as a known issue.",
        image: "analyticsScreen",
      },
      {
        title: "Launch, Measurement And Iteration",
        text: "We manage the migration and redirect map so hard-won rankings survive the move, verify tracking on day one, then monitor behaviour for the first weeks and refine the pages where real visitors are dropping off.",
        image: "teamDiscussion",
      },
    ],

    faqs: [
      {
        q: "How long does a website project take?",
        a: "A focused marketing site typically runs six to ten weeks. Larger builds with custom functionality or content migration run longer, and we will give you a stage-by-stage schedule in the proposal.",
      },
      {
        q: "Will our rankings survive a redesign?",
        a: "That is exactly why we plan the URL map and redirects before development starts. Rankings are lost in migrations that treat redirects as a launch-day afterthought, and we treat them as a design decision.",
      },
      {
        q: "Which platform do you build on?",
        a: "We recommend the platform that fits your team and your content, most often WordPress, Shopify or a modern headless stack. We will explain the trade-offs rather than defaulting to whatever we prefer.",
      },
      {
        q: "Can we update the site ourselves afterward?",
        a: "Yes. We hand over a documented CMS with editable blocks and a short training session so your team can publish confidently without breaking the layout.",
      },
    ],

    ctaTitle: "Planning a new site or a rebuild?",
    ctaText:
      "Tell us what is not working on your current site and we will send back a candid assessment and a scoped estimate.",
    related: ["conversion-rate-optimization", "seo", "ecommerce-marketing"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "social-media-marketing",
    navLabel: "Social Media",
    name: "Social Media Marketing",
    icon: "share",
    cardLabel: "Social Media",
    cardBlurb:
      "Content, community and paid social working as one program — so your audience grows and your pipeline grows with it.",

    metaTitle: "Social Media Marketing Agency",
    metaDescription:
      "Social media marketing and management for US brands. Content strategy, creative production, community management and paid social from a Queens, New York agency.",

    h1: "Social Media Marketing That Builds An Audience And A Pipeline",
    heroEyebrow: "Social Media Management",
    heroSub: "Show up consistently where your customers already are",
    heroText:
      "Posting regularly is not a strategy. We run social programs where organic content, community management and paid amplification pull in the same direction, with creative built for each platform rather than resized for all of them.",
    heroImage: "planning",

    benefitsTitle: "What Our Social Programs Deliver",
    benefitsIntro:
      "Four disciplines that turn an inconsistent feed into a channel that contributes measurable revenue.",
    benefits: [
      {
        title: "Content Strategy And Calendars",
        text: "A themed monthly calendar built from what your audience actually engages with, approved in advance.",
      },
      {
        title: "Creative Production",
        text: "Static, motion and short-form video produced natively for each platform, on brand and on schedule.",
      },
      {
        title: "Community Management",
        text: "Comments, DMs and mentions answered inside your service window, with escalation paths for anything sensitive.",
      },
      {
        title: "Paid Social Amplification",
        text: "Budget behind the posts that are already proving themselves, with audiences built from your own first-party data.",
      },
      {
        title: "Reporting That Ties To Revenue",
        text: "Reach and engagement matter, but we report on the leads and sales the channel produced.",
      },
    ],

    includesTitle: "Our Social Media Services Include",
    includesIntro:
      "Channel mix is chosen from where your buyers spend time, not from where everyone else is posting.",
    includes: [
      "Social audit and competitive review",
      "Channel strategy and audience research",
      "Monthly content calendar",
      "Copywriting and creative direction",
      "Graphic and short-form video production",
      "Scheduling and publishing",
      "Community and inbox management",
      "Paid social campaign management",
      "Influencer and partner outreach",
      "Social listening and brand monitoring",
      "Employee advocacy support",
      "Monthly performance reporting",
    ],

    detailsTitle: "How We Run Your Social Channels",
    detailsIntro:
      "Six connected workstreams that keep output consistent without letting it become repetitive.",
    details: [
      {
        title: "Audit, Strategy And Channel Selection",
        text: "We review your existing accounts, your competitors and the platforms where your buyers are genuinely active, then commit to the two or three channels you can do well. Being excellent on two platforms consistently beats being mediocre on five.",
        image: "strategySession",
      },
      {
        title: "Content Pillars And Monthly Calendars",
        text: "We define four to five content pillars that balance education, proof, personality and offers, then build a monthly calendar against them. You approve everything in one batch rather than fielding daily requests, which is what makes consistency sustainable.",
        image: "planning",
      },
      {
        title: "Creative And Copy Production",
        text: "Every asset is produced for the platform it will live on — vertical video for Reels and TikTok, carousel structure for LinkedIn, native captions rather than one caption copied everywhere. Brand voice stays consistent even as the format changes.",
        image: "focusedWork",
      },
      {
        title: "Community Management And Response",
        text: "We monitor comments, mentions and direct messages, answer routine questions in your voice, and route genuine leads to your sales team while they are still warm. Anything sensitive comes to you with a recommended response rather than an improvised one.",
        image: "teamOffice",
      },
      {
        title: "Paid Social And Audience Building",
        text: "We amplify what organic has already validated, build lookalike and retargeting audiences from your own customer data, and test creative systematically so you learn which message works rather than which post got lucky.",
        image: "analyticsScreen",
      },
      {
        title: "Listening, Reporting And Optimization",
        text: "Social listening tells us what people say about your category when you are not in the room. That, plus monthly performance data, drives the following month's calendar — so the plan compounds instead of resetting every 30 days.",
        image: "dataReview",
      },
    ],

    faqs: [
      {
        q: "Which platforms should our business be on?",
        a: "We answer that in the audit, not before it. B2B services usually earn the most from LinkedIn and search-adjacent content, local consumer businesses from Instagram and Facebook, and product brands increasingly from short-form video. The honest answer is fewer platforms than most brands attempt.",
      },
      {
        q: "Do you create the content or do we?",
        a: "We handle strategy, copy, design and scheduling. For video we can produce it ourselves or direct and edit footage your team captures, which usually keeps costs down and authenticity up.",
      },
      {
        q: "Is there a minimum commitment?",
        a: "We ask for an initial three months because social results compound and a single month tells you very little. After that, engagements run month to month.",
      },
      {
        q: "How does approval work?",
        a: "You receive the following month's calendar for review in advance, with a shared board for comments. Once approved we publish on schedule without further back and forth.",
      },
    ],

    ctaTitle: "Want a social channel that pulls its weight?",
    ctaText:
      "Ask for a free social audit — we will review your accounts and send you three specific changes worth making.",
    related: ["ppc-management", "digital-marketing-strategy", "ecommerce-marketing"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "ppc-management",
    navLabel: "PPC",
    name: "PPC Management",
    icon: "target",
    cardLabel: "PPC & Google Ads",
    cardBlurb:
      "Google Ads and paid social managed against cost per acquisition and return on ad spend — with the wasted spend cut out first.",

    metaTitle: "PPC Management & Google Ads Agency",
    metaDescription:
      "PPC management for US businesses. Google Ads, Microsoft Ads and paid social managed to a target cost per acquisition by a Queens, New York digital marketing agency.",

    h1: "PPC Management That Protects Every Dollar Of Ad Spend",
    heroEyebrow: "PPC & Paid Media",
    heroSub: "Fewer wasted clicks, more qualified conversations",
    heroText:
      "Paid search rewards discipline. We take over accounts leaking budget on irrelevant queries and broken tracking, rebuild the structure around intent, and manage to the cost per acquisition your margins can actually support.",
    heroImage: "analyticsLaptop",

    benefitsTitle: "What Changes When We Take Over Your Accounts",
    benefitsIntro:
      "Most accounts we inherit have the same handful of expensive problems. These are the first things we fix.",
    benefits: [
      {
        title: "Wasted Spend Eliminated",
        text: "Search term audits and negative keyword work usually recover a meaningful share of budget in the first month.",
      },
      {
        title: "Tracking You Can Trust",
        text: "Conversion tracking, offline import and call tracking verified before we optimize anything toward it.",
      },
      {
        title: "Landing Pages That Match The Ad",
        text: "Message match between query, ad and page lifts quality score and cuts cost per click at the same time.",
      },
      {
        title: "Bidding Aligned To Margin",
        text: "Targets are set from your real close rate and customer value, not from a platform's default recommendation.",
      },
      {
        title: "Transparent Reporting",
        text: "You own the ad accounts, you see the raw numbers, and you know exactly what management costs.",
      },
    ],

    includesTitle: "Our PPC Management Services Include",
    includesIntro:
      "Full-funnel paid media across search, shopping, display and social, managed as one budget.",
    includes: [
      "Account audit and restructure",
      "Keyword research and intent grouping",
      "Negative keyword management",
      "Ad copywriting and testing",
      "Google Shopping and feed management",
      "Performance Max campaign management",
      "Display and video remarketing",
      "Paid social campaign management",
      "Landing page recommendations",
      "Conversion tracking and offline import",
      "Bid strategy and budget pacing",
      "Monthly reporting and strategy calls",
    ],

    detailsTitle: "How We Manage Paid Media",
    detailsIntro:
      "A disciplined cycle of auditing, restructuring, testing and scaling that runs every month you work with us.",
    details: [
      {
        title: "Account Audit And Waste Analysis",
        text: "We start with the search terms report, not the campaign settings. Seeing the actual queries you paid for usually reveals where a meaningful percentage of budget is going to clicks that were never going to convert, and that is the fastest efficiency gain available in most accounts.",
        image: "dataReview",
      },
      {
        title: "Campaign Structure And Keyword Strategy",
        text: "We rebuild around intent tiers — ready-to-buy, comparison, and research — so each group gets its own budget, message and expectations. Mixing them in one campaign is why so many accounts look like they are performing until you segment the data.",
        image: "strategySession",
      },
      {
        title: "Ad Creative And Message Testing",
        text: "Responsive search assets, extensions and paid social creative are tested against a real hypothesis rather than rotated at random. We isolate the variable, run it long enough to mean something, and document what won so learnings carry forward.",
        image: "focusedWork",
      },
      {
        title: "Landing Page And Conversion Alignment",
        text: "Sending expensive clicks to a generic homepage is the most common way to waste a good campaign. We specify or build pages that continue the promise of the ad and remove the friction between arrival and enquiry.",
        image: "workspace",
      },
      {
        title: "Bidding, Budget Pacing And Scaling",
        text: "Smart bidding works when it is fed accurate conversion values. We import offline conversions where the sale happens after a call, set targets from your margin rather than the platform's suggestion, and scale budget only where the incremental return holds.",
        image: "analyticsScreen",
      },
      {
        title: "Reporting And Ongoing Optimization",
        text: "Weekly checks on pacing and anomalies, monthly reporting on cost per acquisition and return on ad spend, and a standing call to decide together where next month's budget goes. No black boxes and no borrowed accounts.",
        image: "reportingMeeting",
      },
    ],

    faqs: [
      {
        q: "What is the minimum ad budget you work with?",
        a: "We generally need at least $2,500 per month in media spend for management to pay for itself. Below that, we will usually suggest a one-off setup and training engagement instead of an ongoing retainer.",
      },
      {
        q: "Who owns the ad accounts?",
        a: "You do, always. We work inside your Google Ads and Meta accounts, and if we part ways you keep every campaign, audience and piece of historical data.",
      },
      {
        q: "How is your management fee structured?",
        a: "A flat monthly fee based on account complexity, not a percentage of spend. We would rather not have a financial incentive to recommend a bigger budget than your results justify.",
      },
      {
        q: "How quickly will we see results?",
        a: "Efficiency improvements from waste elimination often show within the first two to four weeks. Structural changes and bid strategy learning periods usually need six to eight weeks to settle before the trend is meaningful.",
      },
    ],

    ctaTitle: "Think your ad budget could work harder?",
    ctaText:
      "Request a free PPC audit. We will review your search terms and show you where the waste is before you commit to anything.",
    related: ["conversion-rate-optimization", "seo", "ecommerce-marketing"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "conversion-rate-optimization",
    navLabel: "CRO",
    name: "Conversion Rate Optimization",
    icon: "chart",
    cardLabel: "CRO Services",
    cardBlurb:
      "Get more revenue from the traffic you already have — through research, structured testing and friction you can measure.",

    metaTitle: "Conversion Rate Optimization (CRO) Services",
    metaDescription:
      "CRO services for US websites and online stores. User research, A/B testing and funnel optimization that increases revenue from existing traffic. Queens, New York agency.",

    h1: "Conversion Rate Optimization: More Revenue From The Traffic You Already Have",
    heroEyebrow: "Conversion Rate Optimization",
    heroSub: "The cheapest growth is the visitor who already arrived",
    heroText:
      "Doubling traffic doubles your costs. Improving conversion rate improves every channel at once. We run structured CRO programs that find where visitors hesitate, test real fixes, and keep only the changes that prove themselves.",
    heroImage: "analyticsScreen",

    benefitsTitle: "Why CRO Compounds",
    benefitsIntro:
      "A conversion gain lifts the performance of every acquisition channel you are paying for, permanently.",
    benefits: [
      {
        title: "Better Return On Existing Spend",
        text: "A lift in conversion rate lowers cost per acquisition across SEO, paid search and social simultaneously.",
      },
      {
        title: "Decisions Backed By Evidence",
        text: "Tests replace internal opinion, so the redesign debate ends with data instead of seniority.",
      },
      {
        title: "Insight Into Real Objections",
        text: "Session recordings and surveys surface the questions your pages fail to answer before the visitor leaves.",
      },
      {
        title: "Lower Friction At Every Step",
        text: "Forms, checkouts and navigation are simplified where the data shows people are dropping out.",
      },
      {
        title: "A Reusable Testing Program",
        text: "You end up with a documented backlog and a repeatable process, not a one-time set of tweaks.",
      },
    ],

    includesTitle: "Our CRO Services Include",
    includesIntro:
      "Research first, then testing. Skipping the research stage is how teams end up testing button colours.",
    includes: [
      "Conversion and funnel analysis",
      "Heatmaps and session recordings",
      "On-site and customer surveys",
      "Usability and heuristic review",
      "Form and checkout optimization",
      "Hypothesis development and prioritization",
      "A/B and multivariate test design",
      "Landing page design and build",
      "Personalization and segmentation",
      "Statistical analysis and reporting",
      "Post-test implementation support",
      "Ongoing experiment roadmap",
    ],

    detailsTitle: "How Our CRO Process Works",
    detailsIntro:
      "A repeating research, hypothesis, test and implement cycle that builds a body of evidence about your customers.",
    details: [
      {
        title: "Analytics And Funnel Analysis",
        text: "We map every step between arrival and conversion and quantify the drop-off at each one, segmented by device, source and new versus returning. That tells us where the money is leaking before we form a single opinion about why.",
        image: "analyticsLaptop",
      },
      {
        title: "Qualitative Research",
        text: "Heatmaps, session recordings and short on-site surveys tell you what the numbers cannot: which content people actually read, where they hesitate, and what question sent them back to a competitor's tab.",
        image: "dataReview",
      },
      {
        title: "Hypothesis Development And Prioritization",
        text: "Every finding becomes a written hypothesis with an expected impact, an effort estimate and a confidence score. The backlog is ranked so we test the highest-value ideas first rather than the easiest ones.",
        image: "planning",
      },
      {
        title: "Test Design And Execution",
        text: "We build the variant, calculate the sample size needed for a trustworthy result, and run the test to completion rather than stopping the moment it looks good. Calling a test early is the most common way teams ship changes that quietly lose money.",
        image: "focusedWork",
      },
      {
        title: "Form And Checkout Optimization",
        text: "Forms and checkouts are where the most recoverable revenue usually sits. We reduce required fields, clarify validation and error states, add the trust signals people look for at the moment of commitment, and remove the steps that exist for internal convenience.",
        image: "ecommerce",
      },
      {
        title: "Analysis, Implementation And Iteration",
        text: "Winning variants get built properly into the site rather than left running in the testing tool. Losing tests are documented too — knowing what does not work for your audience is worth as much as knowing what does.",
        image: "teamDiscussion",
      },
    ],

    faqs: [
      {
        q: "How much traffic do we need for CRO to work?",
        a: "For statistically valid A/B testing, roughly 10,000 monthly visitors and a few hundred conversions per variant. Below that we still run CRO, but through research and best-practice implementation rather than split testing.",
      },
      {
        q: "What kind of lift should we expect?",
        a: "It depends entirely on the starting point, and we will not quote you a number before looking. What we can commit to is that we only keep changes that beat the control at a level worth acting on.",
      },
      {
        q: "Do you implement the winning changes?",
        a: "Yes. We can hand specifications to your developers or build the changes ourselves, and we verify they are live and tracking correctly after deployment.",
      },
      {
        q: "How long does a typical test run?",
        a: "Usually two to four weeks, so the sample covers full business cycles including weekends. Ending sooner produces confident-looking results that do not hold up.",
      },
    ],

    ctaTitle: "Where is your site losing customers?",
    ctaText:
      "Book a free conversion review and we will walk your key pages with you and point out the friction we find.",
    related: ["web-design-development", "ppc-management", "ecommerce-marketing"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "ecommerce-marketing",
    navLabel: "E-commerce",
    name: "E-commerce Marketing",
    icon: "cart",
    cardLabel: "E-commerce",
    cardBlurb:
      "Shopping feeds, category SEO, email flows and retention working together to grow online store revenue profitably.",

    metaTitle: "E-commerce Marketing Agency | Online Store Growth",
    metaDescription:
      "E-commerce marketing for US online stores. Shopping ads, category SEO, email and SMS retention, and checkout optimization from a Queens, New York digital marketing agency.",

    h1: "E-commerce Marketing That Grows Revenue And Protects Margin",
    heroEyebrow: "E-commerce Growth",
    heroSub: "Acquisition, conversion and retention as one system",
    heroText:
      "Online stores rarely fail on traffic alone. They fail on the gap between a click and a repeat customer. We connect shopping feeds, category SEO, checkout experience and lifecycle email so each part makes the others more profitable.",
    heroImage: "ecommerce",

    benefitsTitle: "Where We Find E-commerce Growth",
    benefitsIntro:
      "Five levers that determine whether an online store scales profitably or just spends more to stand still.",
    benefits: [
      {
        title: "Product Feed Quality",
        text: "Titles, attributes and imagery in your feed decide which searches you show for and what you pay for them.",
      },
      {
        title: "Category And Product SEO",
        text: "Category pages are the highest-intent organic real estate most stores never properly optimize.",
      },
      {
        title: "Checkout Completion",
        text: "Recovering a share of abandoned carts is usually the fastest revenue available to an established store.",
      },
      {
        title: "Lifecycle Email And SMS",
        text: "Automated flows produce a disproportionate share of store revenue for a fraction of the acquisition cost.",
      },
      {
        title: "Retention And Repeat Rate",
        text: "Second and third purchases are where margin lives. We build the program that earns them.",
      },
    ],

    includesTitle: "Our E-commerce Marketing Services Include",
    includesIntro:
      "Built for Shopify, WooCommerce and other major platforms, and adapted to your catalogue size.",
    includes: [
      "Product feed optimization",
      "Google Shopping and Performance Max",
      "Paid social and catalogue ads",
      "Category and product page SEO",
      "Site search and merchandising",
      "Cart and checkout optimization",
      "Abandoned cart recovery",
      "Email and SMS lifecycle flows",
      "Customer segmentation and RFM analysis",
      "Loyalty and retention programs",
      "Marketplace and channel strategy",
      "Revenue and cohort reporting",
    ],

    detailsTitle: "How We Grow Online Stores",
    detailsIntro:
      "Six workstreams sequenced so improvements to conversion and retention land before acquisition spend scales.",
    details: [
      {
        title: "Store And Analytics Audit",
        text: "We review catalogue structure, site speed, checkout flow and tracking accuracy before touching a campaign. Scaling spend on a store that converts poorly or measures badly just makes the underlying problem more expensive.",
        image: "analyticsLaptop",
      },
      {
        title: "Product Feed And Shopping Campaigns",
        text: "Your feed is the foundation of profitable shopping ads. We restructure titles around how people actually search, complete the attributes that improve matching, segment campaigns by margin and performance, and stop bestsellers from being buried by dead inventory.",
        image: "ecommercePack",
      },
      {
        title: "Category And Product Page SEO",
        text: "Category pages capture the highest commercial intent in organic search, yet most stores leave them thin and unoptimized. We build out category content, fix faceted navigation and indexation issues, and implement product schema so listings earn richer results.",
        image: "dataReview",
      },
      {
        title: "Conversion And Checkout Optimization",
        text: "We test product page layout, imagery, delivery messaging, payment options and the checkout itself. Small clarifications about shipping cost and return policy at the right moment routinely outperform sitewide redesigns.",
        image: "ecommerce",
      },
      {
        title: "Email, SMS And Lifecycle Automation",
        text: "Welcome, browse abandonment, cart recovery, post-purchase, replenishment and win-back flows are built once and earn continuously. We segment by behaviour and purchase history so customers get relevant messages instead of the same broadcast.",
        image: "focusedWork",
      },
      {
        title: "Retention, Cohorts And Reporting",
        text: "We report on contribution margin and cohort behaviour, not just return on ad spend, so you can see which acquisition sources bring customers who come back. That is the difference between growing revenue and growing profit.",
        image: "reportingMeeting",
      },
    ],

    faqs: [
      {
        q: "Which e-commerce platforms do you work with?",
        a: "Most often Shopify and WooCommerce, along with BigCommerce and custom builds. The marketing principles hold across platforms; the implementation details differ.",
      },
      {
        q: "Do you handle both paid ads and email?",
        a: "Yes, and we prefer to run them together. Acquisition and retention share the same customer data, and separating them across two vendors is where most stores lose the connection.",
      },
      {
        q: "What size store do you work with?",
        a: "We work best with stores already generating consistent monthly revenue, where there is enough data to optimize against. For newer stores we usually recommend a foundation project first.",
      },
      {
        q: "How do you report on performance?",
        a: "Monthly reporting on revenue, contribution margin, return on ad spend, repeat purchase rate and customer lifetime value by cohort, plus a live dashboard you can check any time.",
      },
    ],

    ctaTitle: "Ready to scale your store profitably?",
    ctaText:
      "Request a free e-commerce growth review covering your feed, your funnel and your retention flows.",
    related: ["ppc-management", "conversion-rate-optimization", "seo"],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

/** The six services featured in the home page card grid. */
export const homeServices = services.slice(0, 6);

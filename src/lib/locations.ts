import type { ImageKey } from "./images";

/**
 * Local service-area pages.
 *
 * Every entry carries genuinely distinct copy — the commercial character of the
 * area, the search behaviour that follows from it, and the priorities we set as
 * a result. Thin location pages that swap a place name into the same paragraph
 * are a ranking liability, so nothing here is templated.
 */

export type Location = {
  slug: string;
  /** Place name as used in headings, e.g. "Queens". */
  name: string;
  /** Full label for breadcrumbs and schema, e.g. "Queens, NY". */
  label: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSub: string;
  heroText: string;
  image: ImageKey;
  /** Opening context: what this market is actually like commercially. */
  intro: string[];
  /** Neighbourhoods and towns, used for internal relevance and coverage copy. */
  areas: string[];
  /** What makes search in this market difficult, and what we do about it. */
  priorities: { title: string; text: string }[];
  /** Service slugs we lead with here, in order. */
  focusServices: string[];
  faqs: { q: string; a: string }[];
};

export const locations: Location[] = [
  {
    slug: "queens-ny",
    name: "Queens",
    label: "Queens, NY",
    county: "Queens County",
    metaTitle: "Digital Marketing Agency in Queens, NY | SEO & Google Ads",
    metaDescription:
      "Horizon Growth Inc is a digital marketing agency based in Jackson Heights, Queens. Local SEO, Google Ads, web design and lead generation for Queens businesses.",
    h1: "Digital Marketing Agency in Queens, New York",
    heroSub: "Our home borough — and the market we know best",
    heroText:
      "We work from Jackson Heights, which means Queens businesses get something rare from an agency: someone who can be at your counter in twenty minutes and who already understands how competitive search is on 37th Avenue.",
    image: "building",
    intro: [
      "Queens is the most linguistically diverse county in the United States, and that shows up directly in search behaviour. A dental practice in Elmhurst, a contractor in Astoria and an accountant in Flushing are not competing for the same customer even when they share a keyword — the searcher's language, neighbourhood and intent all differ.",
      "It is also a borough where a huge share of commerce is still local and physical. People search on a phone, from a few blocks away, and they choose from the map pack before they ever reach a website. That makes Google Business Profile, review velocity and proximity signals more decisive here than almost any other channel.",
      "Our office is at 71-15 37th Ave in Jackson Heights, so this is not a market we service remotely. If a conversation is faster in person, we have it in person.",
    ],
    areas: [
      "Jackson Heights",
      "Astoria",
      "Long Island City",
      "Flushing",
      "Elmhurst",
      "Forest Hills",
      "Jamaica",
      "Woodside",
      "Sunnyside",
      "Corona",
      "Bayside",
      "Ridgewood",
      "Rego Park",
      "Kew Gardens",
    ],
    priorities: [
      {
        title: "Map pack visibility before anything else",
        text: "For most Queens businesses the three local results above the organic listings decide the month. We optimise your Google Business Profile categories and services, fix name, address and phone inconsistencies across directories, and build the post-job review workflow that keeps you in that pack.",
      },
      {
        title: "Neighbourhood pages that earn their place",
        text: "A page for Astoria should say something an Astoria customer needs to know — parking, building stock, permit realities, travel time. We build a small number of genuinely useful neighbourhood pages rather than twenty near-identical ones that dilute each other.",
      },
      {
        title: "Multilingual search opportunity",
        text: "In neighbourhoods like Elmhurst, Corona and Flushing, meaningful volume sits in Spanish and Chinese-language queries that English-only competitors never see. Where it fits your business, we identify and target it rather than pretending the English keyword set is the whole market.",
      },
      {
        title: "Mobile speed on real networks",
        text: "Queens traffic skews heavily to phones on cellular data, often underground or on the 7 line. We hold sites to a performance budget measured on a mid-range device, not on office fibre.",
      },
    ],
    focusServices: ["seo", "ppc-management", "web-design-development"],
    faqs: [
      {
        q: "Do you meet Queens clients in person?",
        a: "Yes. We are based in Jackson Heights and we would rather sit down with you than run another video call. Kickoffs and quarterly reviews in person are normal for local clients.",
      },
      {
        q: "Can you help us rank in the Google map pack?",
        a: "That is usually the first thing we work on for a Queens business. It involves your Google Business Profile, citation consistency, review volume and recency, and proximity — which is why honest expectation-setting about your service radius matters.",
      },
      {
        q: "We serve several Queens neighbourhoods. Do we need a page for each?",
        a: "Rarely. A handful of substantial neighbourhood pages outperforms a large set of thin ones, and Google is explicit about the risk of doorway pages. We will tell you which areas justify a page and which are better handled inside your main service pages.",
      },
    ],
  },

  {
    slug: "brooklyn-ny",
    name: "Brooklyn",
    label: "Brooklyn, NY",
    county: "Kings County",
    metaTitle: "Digital Marketing Agency in Brooklyn, NY | SEO & PPC",
    metaDescription:
      "Digital marketing for Brooklyn businesses — local SEO, Google Ads, e-commerce and web design from Horizon Growth Inc, a Queens-based agency serving Kings County.",
    h1: "Digital Marketing Agency Serving Brooklyn, New York",
    heroSub: "Brand-led search in the city's most brand-conscious borough",
    heroText:
      "Brooklyn buyers research differently. They compare, they read reviews properly, and they care who they are buying from — which rewards businesses with a real story and punishes generic marketing faster than most markets.",
    image: "interiorA",
    intro: [
      "Brooklyn has an unusually high concentration of independent brands, studios and direct-to-consumer businesses competing against national names. The advantage locally is identity — but identity only converts when the site, the search results and the social presence tell the same story.",
      "It is also a borough of distinct micro-markets. Bay Ridge and Williamsburg behave like different cities commercially, and a keyword strategy that treats 'Brooklyn' as one audience wastes budget on both ends.",
      "We are a short trip across the Queens border, so Brooklyn is very much a market we cover in person rather than at arm's length.",
    ],
    areas: [
      "Williamsburg",
      "Park Slope",
      "DUMBO",
      "Brooklyn Heights",
      "Bushwick",
      "Greenpoint",
      "Bay Ridge",
      "Crown Heights",
      "Sunset Park",
      "Bed-Stuy",
      "Carroll Gardens",
      "Flatbush",
    ],
    priorities: [
      {
        title: "Positioning before channels",
        text: "In a market this saturated with good independent businesses, the constraint is usually not visibility — it is a value proposition that reads the same everywhere a customer meets you. We fix the argument first, then put budget behind it.",
      },
      {
        title: "E-commerce and retail together",
        text: "A large share of Brooklyn businesses sell both in a physical space and online. We connect local search and shopping campaigns so the two channels stop competing for credit and start reinforcing each other.",
      },
      {
        title: "Micro-market keyword segmentation",
        text: "We split campaigns by neighbourhood where the economics differ, rather than bidding a single borough-wide term and averaging out very different conversion rates.",
      },
      {
        title: "Review depth, not just rating",
        text: "Brooklyn buyers read reviews rather than glance at the star count. We build the process that produces detailed, recent, specific reviews — which convert far better than a high average with nothing behind it.",
      },
    ],
    focusServices: ["seo", "ecommerce-marketing", "social-media-marketing"],
    faqs: [
      {
        q: "Do you work with independent Brooklyn retailers?",
        a: "Yes, and the mix of physical and online revenue is usually the interesting part. We look at both together, because optimising one while ignoring the other is how stores end up cannibalising their own margin.",
      },
      {
        q: "Is Brooklyn SEO harder than Queens?",
        a: "Different rather than harder. Brooklyn has more brand competition and more content-savvy competitors, so earning organic visibility takes stronger content and better differentiation. Queens is more decided by map pack proximity.",
      },
      {
        q: "Can you handle both our storefront and our Shopify store?",
        a: "That is a common setup for us. Local SEO and Google Business Profile drive the storefront, shopping and lifecycle email drive the store, and we report on them as one revenue picture.",
      },
    ],
  },

  {
    slug: "manhattan-ny",
    name: "Manhattan",
    label: "Manhattan, NY",
    county: "New York County",
    metaTitle: "Digital Marketing Agency in Manhattan, NYC | SEO & B2B",
    metaDescription:
      "B2B and professional services digital marketing in Manhattan. SEO, paid search, demand generation and web design from Horizon Growth Inc, based in Queens, NYC.",
    h1: "Digital Marketing Agency Serving Manhattan, NYC",
    heroSub: "Where the clicks are expensive and the mistakes are costly",
    heroText:
      "Manhattan has the highest cost-per-click of any market we work in. That changes the job: the priority is not more traffic, it is making sure nothing is wasted between the click and the signed engagement.",
    image: "meetingRoom",
    intro: [
      "Manhattan search is dominated by professional services — legal, financial, medical, consulting, real estate — where a single new client can be worth five or six figures. Advertising costs reflect that, and so does the competition for organic rankings.",
      "In that environment, small inefficiencies compound quickly. A form that loses a third of its starts, or conversion tracking that misses phone enquiries, costs far more here than in a lower-value market. This is why we insist on fixing measurement before scaling spend.",
      "Sales cycles are also longer and involve more people. Content that answers the questions asked in month one of an evaluation matters as much as the page that captures the enquiry in month six.",
    ],
    areas: [
      "Midtown",
      "Financial District",
      "SoHo",
      "Chelsea",
      "Tribeca",
      "Upper East Side",
      "Upper West Side",
      "Flatiron",
      "Murray Hill",
      "Greenwich Village",
      "Harlem",
      "Hell's Kitchen",
    ],
    priorities: [
      {
        title: "Protect the spend before increasing it",
        text: "With clicks this expensive, the search terms report is where we start. Removing queries that were never going to convert typically recovers more budget than any bid adjustment.",
      },
      {
        title: "Track the phone call, not just the form",
        text: "High-value Manhattan enquiries arrive by phone far more often than by form. Without call tracking and offline conversion import, your bidding is optimising toward a fraction of your real pipeline.",
      },
      {
        title: "Content built for long evaluations",
        text: "For professional services we build content around the actual decision process — comparison questions, objections, and what happens after signing — rather than top-of-funnel articles that attract readers who will never buy.",
      },
      {
        title: "Compliance-aware marketing",
        text: "Legal, financial and medical advertising carries real restrictions on claims and targeting. We work within them from the start instead of writing copy that has to be rewritten after review.",
      },
    ],
    focusServices: ["digital-marketing-strategy", "ppc-management", "conversion-rate-optimization"],
    faqs: [
      {
        q: "Our cost per click is extremely high. Is PPC still worth it?",
        a: "Often yes, but only once the conversion path and tracking are sound. If a click costs $40 and your landing page converts at one percent, the answer is to fix the page before buying more clicks. That is the order we work in.",
      },
      {
        q: "Do you work with law firms and financial services?",
        a: "Yes. Both carry advertising rules that constrain claims and targeting, and we write to those constraints rather than producing copy your compliance team has to reject.",
      },
      {
        q: "How do you attribute long B2B sales cycles?",
        a: "By connecting your CRM to your ad and analytics platforms so closed deals report back against the touches that created them. Without that, Manhattan B2B marketing gets judged on form fills that have little to do with revenue.",
      },
    ],
  },

  {
    slug: "bronx-ny",
    name: "The Bronx",
    label: "The Bronx, NY",
    county: "Bronx County",
    metaTitle: "Digital Marketing Agency in The Bronx, NY | Local SEO",
    metaDescription:
      "Local SEO, Google Ads and web design for Bronx businesses. Horizon Growth Inc is a Queens-based digital marketing agency serving Bronx County, New York.",
    h1: "Digital Marketing Agency Serving The Bronx, New York",
    heroSub: "Local demand that is under-served by good marketing",
    heroText:
      "The Bronx has strong local search demand and noticeably less well-executed competition than Manhattan or Brooklyn. For businesses willing to do the fundamentals properly, that gap is an opportunity.",
    image: "officeModern",
    intro: [
      "Across much of the Bronx, the businesses ranking in local results are winning on proximity rather than on marketing quality. Profiles are incomplete, websites are slow, and review requests are ad hoc. That means the basics done well move the needle further here than in more contested boroughs.",
      "Service businesses — home services, auto, medical, food, trades — make up a large share of local search volume, and those categories are decided almost entirely on the map pack and the phone call that follows.",
      "It is also a market where trust signals matter early. Licensing, insurance, service area clarity and real photographs do more for conversion than polished brand language.",
    ],
    areas: [
      "Riverdale",
      "Fordham",
      "Pelham Bay",
      "Throgs Neck",
      "Mott Haven",
      "Morris Park",
      "Kingsbridge",
      "Country Club",
      "Parkchester",
      "Wakefield",
      "Soundview",
      "Norwood",
    ],
    priorities: [
      {
        title: "Do the fundamentals competitors are skipping",
        text: "A complete Google Business Profile with real photos, correct hours, a full service list and consistent citations still outperforms most local competition here. It is unglamorous and it works.",
      },
      {
        title: "Make the phone call effortless",
        text: "For Bronx service businesses the conversion is a call, not a form. Tap-to-call in the header, visible service areas and honest response-time expectations matter more than any redesign.",
      },
      {
        title: "Reviews as a standing process",
        text: "We build the request into your job completion routine so review flow is steady rather than a burst every time someone remembers to ask.",
      },
      {
        title: "Efficient paid search on modest budgets",
        text: "Bronx clicks cost far less than Manhattan clicks, which makes tightly targeted campaigns viable on small budgets — provided the negative keyword work is done properly.",
      },
    ],
    focusServices: ["seo", "web-design-development", "ppc-management"],
    faqs: [
      {
        q: "We have a small marketing budget. Is that workable?",
        a: "For local Bronx search, often yes. Clicks are far cheaper than in Manhattan and the local SEO fundamentals cost time rather than media spend. We will tell you honestly if your budget is too small to justify management.",
      },
      {
        q: "Most of our enquiries are phone calls. Can you measure that?",
        a: "Yes, with call tracking numbers that attribute each call to its source and let us optimise toward calls that actually became jobs, not just calls that rang.",
      },
      {
        q: "Do you serve the whole Bronx?",
        a: "Yes. Coverage is straightforward; what matters is being realistic about how far your service radius genuinely extends, because proximity strongly affects local rankings.",
      },
    ],
  },

  {
    slug: "long-island-ny",
    name: "Long Island",
    label: "Long Island, NY",
    county: "Nassau & Suffolk Counties",
    metaTitle: "Digital Marketing Agency for Long Island, NY | SEO & Ads",
    metaDescription:
      "Digital marketing for Nassau and Suffolk County businesses. Multi-town local SEO, Google Ads and web design from Horizon Growth Inc, a New York agency.",
    h1: "Digital Marketing Agency Serving Long Island, New York",
    heroSub: "Multi-town service areas, handled properly",
    heroText:
      "Long Island businesses rarely serve one town. That makes local search a genuinely different problem from a single-storefront borough business — and it is where most agencies get the strategy wrong.",
    image: "officePeople",
    intro: [
      "A contractor covering half of Nassau County cannot rank in every town's map pack from one address, because proximity is a ranking factor and there is no way around it. Pretending otherwise, usually by generating a page for every town, is the fastest route to a doorway page problem.",
      "The workable approach is a realistic hierarchy: dominate the towns nearest your address, compete organically for the wider county terms, and use paid search to cover the outer edge of your service area where organic proximity will never carry you.",
      "Nassau and Suffolk also behave differently. Nassau is denser and more competitive; Suffolk is more spread out with longer travel times that materially affect which jobs are worth bidding on.",
    ],
    areas: [
      "Hempstead",
      "Garden City",
      "Mineola",
      "Great Neck",
      "Hicksville",
      "Levittown",
      "Huntington",
      "Islip",
      "Babylon",
      "Smithtown",
      "Riverhead",
      "Long Beach",
    ],
    priorities: [
      {
        title: "An honest service-area hierarchy",
        text: "We map which towns you can realistically rank in organically, which need paid coverage, and which are not worth pursuing given travel time. That conversation saves more budget than any optimisation.",
      },
      {
        title: "Fewer, better town pages",
        text: "Town pages only earn their place when they contain something specific — local pricing realities, permit rules, travel windows, actual work done there. We build the ones that clear that bar and nothing else.",
      },
      {
        title: "Radius bidding tied to job value",
        text: "A job forty minutes away needs a higher ticket to be worth the same spend. We set geographic bid adjustments against real margin rather than treating the whole island as one audience.",
      },
      {
        title: "Seasonality planning",
        text: "Many Long Island categories swing hard by season. We build budget pacing that front-loads demand periods instead of spending evenly across a year that is anything but even.",
      },
    ],
    focusServices: ["seo", "ppc-management", "digital-marketing-strategy"],
    faqs: [
      {
        q: "Can we rank in every town we serve?",
        a: "Almost certainly not in the map pack, because local results are strongly influenced by proximity to the searcher. You can rank organically across a wider area and use paid search for the rest. Any agency promising map pack coverage across two counties from one address is overselling.",
      },
      {
        q: "Should we build a page for every town?",
        a: "No. Large sets of near-identical town pages are what Google classifies as doorway pages, and they can harm the whole site. We build a smaller number of substantial pages for the towns that matter most.",
      },
      {
        q: "Do you work with Nassau and Suffolk businesses remotely?",
        a: "Yes, and most of the work is the same either way. We are in Queens, so in-person meetings are practical for Nassau and western Suffolk when they are useful.",
      },
    ],
  },
];

export const locationBySlug = (slug: string) =>
  locations.find((l) => l.slug === slug);

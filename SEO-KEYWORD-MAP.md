# SEO keyword map — horizongrowth.us

One primary keyword per URL, so no two pages compete for the same query.
Use this as the tracking sheet in Google Search Console (Performance → Pages)
and when writing any future content.

> **Important:** XML sitemaps do not contain keywords. Google ignores any
> keyword data placed in them, and the `<meta name="keywords">` tag has been
> ignored since 2009. Rankings come from the on-page targeting below, which is
> already implemented on every URL listed. The sitemap's only job is discovery.

---

## 1. Core pages

| URL | Primary keyword | Secondary keywords |
|---|---|---|
| `/` | digital marketing agency Queens NY | digital marketing agency New York, internet marketing agency NYC, digital marketing services USA |
| `/services` | digital marketing services | full service digital marketing agency, online marketing services USA |
| `/about` | digital marketing agency about | New York marketing agency team, Queens marketing company |
| `/contact` | contact digital marketing agency Queens | digital marketing consultation NYC, free marketing consultation |
| `/case-studies` | digital marketing case studies | marketing engagement blueprints, SEO case study NYC |
| `/careers` | digital marketing jobs Queens NY | marketing agency careers New York, SEO jobs NYC |

## 2. Service pages

| URL | Primary keyword | Secondary keywords |
|---|---|---|
| `/services/seo` | SEO services Queens NY | SEO company New York, SEO agency NYC, local SEO services, technical SEO services |
| `/services/ppc-management` | PPC management services | Google Ads agency New York, PPC agency NYC, paid search management, Google Ads management |
| `/services/web-design-development` | web design and development services | website design New York, web development agency NYC, custom website design |
| `/services/social-media-marketing` | social media marketing agency | social media management services, Instagram marketing agency, LinkedIn marketing NYC |
| `/services/conversion-rate-optimization` | conversion rate optimization services | CRO agency, A/B testing services, landing page optimization |
| `/services/ecommerce-marketing` | e-commerce marketing agency | Shopify marketing agency, online store SEO, e-commerce PPC management |
| `/services/digital-marketing-strategy` | digital marketing strategy services | marketing strategy consultant, digital marketing planning, channel strategy |

## 3. Local pages

| URL | Primary keyword | Secondary keywords |
|---|---|---|
| `/locations` | digital marketing service areas New York | marketing agency NYC boroughs, New York digital marketing coverage |
| `/locations/queens-ny` | digital marketing agency Queens NY | SEO Queens NY, Jackson Heights marketing agency, Astoria SEO, Flushing digital marketing |
| `/locations/brooklyn-ny` | digital marketing agency Brooklyn NY | SEO Brooklyn, Brooklyn marketing company, Williamsburg digital marketing |
| `/locations/manhattan-ny` | digital marketing agency Manhattan NYC | SEO Manhattan, B2B marketing agency NYC, Midtown digital marketing |
| `/locations/bronx-ny` | digital marketing agency Bronx NY | SEO Bronx, local SEO Bronx, Bronx marketing company |
| `/locations/long-island-ny` | digital marketing agency Long Island NY | SEO Long Island, Nassau County marketing, Suffolk County SEO |

## 4. Support pages (not ranking targets)

`/sitemap`, `/privacy-policy`, `/terms-of-service`, `/cookie-policy`,
`/accessibility`, `/disclaimer` — indexed, low priority, no keyword target.

---

## Where each keyword is actually implemented

For every URL above, the primary keyword appears in:

1. `<title>` — set per page via `buildMetadata()`
2. `<meta name="description">` — unique per page
3. The single `<h1>`
4. At least one `<h2>`
5. Body copy, written naturally rather than stuffed
6. Internal anchor text pointing at the page (footer, nav, related-service blocks)
7. `Service` / `ProfessionalService` JSON-LD `name` and `areaServed`

Nothing here is keyword-stuffed. Density is deliberately low — Google penalises
repetition and rewards pages that answer the query.

---

## Google Search Console checklist

1. **Add the property.** Use the Domain property type (`horizongrowth.us`) and
   verify with the DNS TXT record. This covers www, non-www, http and https in
   one go.
2. **Submit the sitemap.** Sitemaps → add `sitemap.xml` → Submit.
   Full URL: `https://horizongrowth.us/sitemap.xml` (28 URLs).
3. **Request indexing** for the priority pages first, using URL Inspection:
   `/`, `/services/seo`, `/services/ppc-management`, `/locations/queens-ny`,
   `/contact`. Do not submit all 28 at once.
4. **Set up Bing Webmaster Tools** too — it imports directly from Search
   Console and takes two minutes.
5. **Create the Google Business Profile.** This is the single highest-impact
   local SEO action available, and no amount of on-page work substitutes for it:
   - Category: *Internet marketing service* (primary); add *Marketing agency*,
     *Website designer* as secondary
   - Address: 7115 37th Ave, Apt 6E, Jackson Heights, Queens, NY 11372
   - Phone: +1 (347) 659-6527 — must match the site exactly
   - Website: `https://horizongrowth.us`
   - Add the service list, real photos, and hours (Mon–Fri 9:00–18:00)
6. **Build citations** with identical name, address and phone: Bing Places,
   Apple Business Connect, Yelp, Better Business Bureau, Chamber of Commerce,
   Yellow Pages. NAP consistency is a ranking factor; a mismatched suite number
   is a common and avoidable cause of weak local rankings.

---

## Realistic timeline

| When | What to expect |
|---|---|
| Week 1–2 | Pages discovered and indexed after sitemap submission |
| Week 3–6 | Branded queries ("Horizon Growth") ranking; impressions begin on long-tail |
| Month 2–4 | Local pages gaining position on lower-competition local terms |
| Month 4–9 | Competitive commercial terms ("SEO company New York") begin to move |

Local map pack visibility depends primarily on the Google Business Profile,
proximity and reviews — not on this website. Step 5 above is what moves it.

Anyone promising page-one rankings for "digital marketing agency New York"
within a few weeks is selling something that does not exist.

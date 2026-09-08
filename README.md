# Horizon Growth Inc — horizongrowth.us

Marketing website for **Horizon Growth Inc**, a digital marketing agency based in
Jackson Heights, Queens, New York, serving clients across the United States.

Built with Next.js 15 (App Router), React 19 and TypeScript. No CSS framework —
the design system lives in a single tokenised stylesheet.

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # serve the production build
```

Node 20+ is required.

---

## Project structure

```
src/
  app/
    layout.tsx                    Root layout, fonts, global schema
    page.tsx                      Home
    globals.css                   Design system (tokens + components)
    opengraph-image.tsx           Generated 1200x630 PNG share card
    icon.svg                      Favicon
    sitemap.ts / robots.ts        Generated /sitemap.xml and /robots.txt
    not-found.tsx                 404
    about/ contact/ careers/
    services/                     Services index
    services/[slug]/              7 service pages (SSG)
    case-studies/                 Blueprint index
    case-studies/[slug]/          3 blueprint pages (SSG)
    privacy-policy/ terms-of-service/ disclaimer/
    api/contact/route.ts          Contact form endpoint
  components/                     Reusable UI
  lib/
    site.ts                       Brand, NAP, navigation  <- edit contact details here
    services.ts                   All service page content
    caseStudies.ts                All blueprint content
    images.ts                     Image registry + alt text
    seo.ts                        Metadata builder + schema.org helpers
```

### Where to edit things

| I want to change…                | Edit                          |
| -------------------------------- | ----------------------------- |
| Phone, email, address, socials    | `src/lib/site.ts`             |
| Navigation menu                   | `src/lib/site.ts`             |
| Any service page copy             | `src/lib/services.ts`         |
| Case study / blueprint copy       | `src/lib/caseStudies.ts`      |
| Photography                       | `src/lib/images.ts`           |
| Colours, spacing, type scale      | `src/app/globals.css` (`:root`) |

Nothing is hardcoded twice — the footer, header, schema, sitemap and contact
form all read from those files.

---

## Before you go live

### 1. Connect the contact form (required)

The form at `/contact` posts to `/api/contact`. Until an email provider is
configured the endpoint returns HTTP 503 and the form shows the visitor a
prefilled `mailto:` link plus the phone number, so **no enquiry is ever silently
accepted and dropped**.

To enable real delivery, set these environment variables (in Vercel: Project →
Settings → Environment Variables):

```
RESEND_API_KEY=re_xxxxxxxx          # https://resend.com
CONTACT_FROM_EMAIL=website@horizongrowth.us   # must be a verified sender domain
CONTACT_TO_EMAIL=info@horizongrowth.us        # optional, defaults to site.email
```

Swap Resend for another provider by editing the single `fetch` call in
`src/app/api/contact/route.ts`.

### 2. Add the real logo

The header and footer currently use a typographic lockup with an SVG chevron
mark (`src/components/Header.tsx` and `Footer.tsx`). When the logo file arrives,
drop it in `public/` and replace the `.brand__mark` span in both components.
Also replace `src/app/icon.svg` so the favicon matches.

### 3. Point the domain

`src/lib/site.ts` sets `url: "https://horizongrowth.us"`, which drives canonical
URLs, the sitemap, OG tags and schema. Add the domain in Vercel and it works as
is.

### 4. Verify and submit

- Google Search Console → submit `https://horizongrowth.us/sitemap.xml`
- Google Business Profile → create/claim the Queens listing (important for the
  local SEO the site is built to support)
- Add analytics (GA4 or Plausible) in `src/app/layout.tsx`

### 5. Have the legal pages reviewed

`/privacy-policy`, `/terms-of-service` and `/disclaimer` are drafted for a US
marketing agency but are **not legal advice**. Have counsel review them,
particularly the CCPA/state-privacy section.

---

## Content honesty notes

Two deliberate decisions, so nobody has to unpick them later:

- **Case studies are labelled engagement blueprints.** They document real
  methodology — diagnosis, work sequence, success measures — rather than
  claiming results for clients that have not been served or approved. Every
  blueprint page and the index carry a visible disclosure. Replace them with
  real, permissioned client results in the same data shape when available.
- **No fabricated trust signals.** There are no invented client logos,
  star ratings, review counts, awards or "500+ projects" statistics. The
  trust sections use platforms actually worked in, and the stats band shows
  terms of engagement rather than unverifiable history.

Photography is licensed stock from Unsplash, disclosed on `/disclaimer`.

---

## Technical notes

- **SEO:** unique title + meta description per page, canonical URLs, OG and
  Twitter cards, generated sitemap and robots, breadcrumbs, and JSON-LD for
  Organization, ProfessionalService (LocalBusiness), WebSite, Service,
  BreadcrumbList and FAQPage.
- **Performance:** static generation for every page, `next/font` for Mona Sans
  with `display: swap`, AVIF/WebP image optimization, no CSS or component
  framework.
- **Accessibility:** skip link, visible focus rings, keyboard-operable
  accordion and mobile drawer with Escape-to-close and scroll lock, labelled
  form fields with `aria-invalid` and live-region status, `prefers-reduced-motion`
  honoured for every animation.
- **Analytics-ready:** the contact form posts JSON, so adding a conversion event
  is a one-line change in `ContactForm.tsx`.

---

## Visual QA

`tools/qa-visual.mjs` loads every key page at desktop, tablet and mobile widths
and reports horizontal overflow, broken images, console errors, failed requests
and any scroll-reveal block that stayed hidden. It also writes screenshots to
`screenshots/`.

Playwright is intentionally **not** a project dependency, so it never touches
the production build. Install it only when you want to run the check:

```bash
npm i -D playwright && npx playwright install chromium
npm run build && npm start          # in one terminal
node tools/qa-visual.mjs http://localhost:3000
```

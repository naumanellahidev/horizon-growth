import type { Metadata } from "next";
import { site, addressLine, socials, serviceAreas } from "./site";
import { services } from "./services";

type MetaInput = {
  title: string;
  description: string;
  /** Path beginning with a slash, e.g. "/services/seo". */
  path: string;
  noIndex?: boolean;
};

/**
 * The share card is generated as a PNG by src/app/opengraph-image.tsx. Next
 * only applies that file convention to its own route segment, so every page
 * references the generated route explicitly below.
 */
export const OG_IMAGE = "/opengraph-image";

export function buildMetadata({
  title,
  description,
  path,
  noIndex = false,
}: MetaInput): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const image = `${site.url}${OG_IMAGE}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title,
      description,
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  };
}

/* ---------------- Structured data ---------------- */

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.locality,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
};

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/icon.svg`,
    },
    description: site.description,
    email: site.email,
    telephone: site.phone,
    address: postalAddress,
    sameAs: socials.filter((s) => s.href.startsWith("http")).map((s) => s.href),
  };
}

export function localBusinessSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    url: site.url,
    image: `${site.url}${OG_IMAGE}`,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    address: postalAddress,
    priceRange: "$$",
    areaServed: serviceAreas.map((name) => ({ "@type": "Place", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital marketing services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${site.url}/services/${s.slug}`,
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-US",
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: `${site.url}${input.path}`,
    serviceType: input.name,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: serviceAreas.map((name) => ({ "@type": "Place", name })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

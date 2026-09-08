/**
 * Single source of truth for brand + NAP (name, address, phone) data.
 * Every component pulls contact details from here so nothing is hardcoded twice.
 */

export const site = {
  name: "Horizon Growth Inc",
  shortName: "Horizon Growth",
  legalName: "Horizon Growth Inc",
  domain: "horizongrowth.us",
  url: "https://horizongrowth.us",
  tagline: "Digital Marketing Agency in Queens, New York",
  description:
    "Horizon Growth Inc is a Queens, New York digital marketing agency building SEO, paid media, web design and conversion programs that turn search demand into booked revenue for US businesses.",
  founded: "2024",
  email: "info@horizongrowth.us",
  phone: "+1 (347) 659-6527",
  phoneHref: "tel:+13476596527",
  whatsapp: "https://wa.me/13476596527",
  address: {
    street: "7115 37th Ave, Apt 6E",
    locality: "Jackson Heights, Queens",
    region: "NY",
    regionName: "New York",
    postalCode: "11372",
    country: "US",
    countryName: "United States",
  },
  hours: "Mon – Fri, 9:00am – 6:00pm ET",
  responseTime: "Under 1 business day",
} as const;

export const addressLine = `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`;

/** Social profiles. Kept empty-safe: only rendered when a URL is present. */
export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/horizon-growth-inc", icon: "linkedin" },
  { label: "Facebook", href: "https://www.facebook.com/horizongrowthinc", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/horizongrowthinc", icon: "instagram" },
  { label: "X", href: "https://x.com/horizongrowthus", icon: "x" },
  { label: "Email", href: `mailto:${site.email}`, icon: "mail" },
  { label: "WhatsApp", href: site.whatsapp, icon: "whatsapp" },
] as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const primaryNav: NavItem[] = [
  { label: "Social Media", href: "/services/social-media-marketing" },
  { label: "Web Design", href: "/services/web-design-development" },
  { label: "SEO", href: "/services/seo" },
  { label: "PPC", href: "/services/ppc-management" },
  { label: "E-commerce", href: "/services/ecommerce-marketing" },
  { label: "Case Studies", href: "/case-studies" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Services", href: "/services" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const footerLegalNav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Contact", href: "/contact" },
];

/** Service areas used for local SEO copy and LocalBusiness schema. */
export const serviceAreas = [
  "Queens, NY",
  "Brooklyn, NY",
  "Manhattan, NY",
  "The Bronx, NY",
  "Long Island, NY",
  "Nationwide (USA)",
];

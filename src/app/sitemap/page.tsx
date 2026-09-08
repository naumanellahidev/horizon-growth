import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { SectionHead } from "@/components/ContentBlocks";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { caseStudies } from "@/lib/caseStudies";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Sitemap",
  description:
    "Every page on horizongrowth.us in one place — services, service areas, case studies, company pages and policies.",
  path: "/sitemap",
});

/**
 * Human-readable sitemap. The XML sitemap for search engines is generated
 * separately at /sitemap.xml by src/app/sitemap.ts.
 */
export default function SitemapPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Sitemap", path: "/sitemap" },
  ];

  const groups: { title: string; links: { label: string; href: string }[] }[] = [
    {
      title: "Main pages",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "All Services", href: "/services" },
        { label: "Service Areas", href: "/locations" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: services.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
    },
    {
      title: "Service areas",
      links: locations.map((l) => ({
        label: `Digital Marketing in ${l.label}`,
        href: `/locations/${l.slug}`,
      })),
    },
    {
      title: "Case studies",
      links: caseStudies.map((c) => ({
        label: c.title,
        href: `/case-studies/${c.slug}`,
      })),
    },
    {
      title: "Policies",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Cookie Policy", href: "/cookie-policy" },
        { label: "Accessibility Statement", href: "/accessibility" },
        { label: "Disclaimer", href: "/disclaimer" },
      ],
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Sitemap"
        title="Every Page On This Website"
        text="A complete index of horizongrowth.us. Search engines should use the XML sitemap instead."
        image="interiorB"
        crumbs={crumbs}
      />

      <section className="section">
        <div className="wide">
          <SectionHead
            eyebrow="Index"
            title="Browse The Full Site"
            text="If you cannot find what you are looking for here, call us and we will point you at it directly."
          />

          <div className="value-grid">
            {groups.map((g) => (
              <div className="value" key={g.title}>
                <h3>{g.title}</h3>
                <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
                  {g.links.map((l) => (
                    <li key={l.href} style={{ fontSize: "var(--fs-small)" }}>
                      <Link href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="notice" style={{ marginTop: "var(--sp-60)" }}>
            <strong>For search engines:</strong> the machine-readable sitemap lives at{" "}
            <a href="/sitemap.xml">{site.url}/sitemap.xml</a> and the crawl rules at{" "}
            <a href="/robots.txt">{site.url}/robots.txt</a>.
          </div>
        </div>
      </section>

      <CtaBand image="clientMeeting" />

      <JsonLd schemas={[breadcrumbSchema(crumbs)]} />
    </>
  );
}

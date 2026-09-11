import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { caseStudies } from "@/lib/caseStudies";
import { locations } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: { path: string; priority: number; freq: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/pricing", priority: 0.9, freq: "monthly" },
    { path: "/about", priority: 0.8, freq: "monthly" },
    { path: "/case-studies", priority: 0.8, freq: "monthly" },
    { path: "/contact", priority: 0.9, freq: "monthly" },
    { path: "/locations", priority: 0.8, freq: "monthly" },
    { path: "/careers", priority: 0.5, freq: "monthly" },
    { path: "/sitemap", priority: 0.4, freq: "monthly" },
    { path: "/privacy-policy", priority: 0.3, freq: "yearly" },
    { path: "/terms-of-service", priority: 0.3, freq: "yearly" },
    { path: "/cookie-policy", priority: 0.3, freq: "yearly" },
    { path: "/accessibility", priority: 0.3, freq: "yearly" },
    { path: "/disclaimer", priority: 0.3, freq: "yearly" },
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${site.url}${r.path === "/" ? "" : r.path}`,
      lastModified: now,
      changeFrequency: r.freq,
      priority: r.priority,
    })),
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...locations.map((l) => ({
      url: `${site.url}/locations/${l.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...caseStudies.map((c) => ({
      url: `${site.url}/case-studies/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}

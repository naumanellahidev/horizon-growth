import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { caseStudies } from "@/lib/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: { path: string; priority: number; freq: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/about", priority: 0.8, freq: "monthly" },
    { path: "/case-studies", priority: 0.8, freq: "monthly" },
    { path: "/contact", priority: 0.9, freq: "monthly" },
    { path: "/careers", priority: 0.5, freq: "monthly" },
    { path: "/privacy-policy", priority: 0.3, freq: "yearly" },
    { path: "/terms-of-service", priority: 0.3, freq: "yearly" },
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
    ...caseStudies.map((c) => ({
      url: `${site.url}/case-studies/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}

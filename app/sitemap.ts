import type { MetadataRoute } from "next";
import { legalLinks } from "@/content/site";
import { SITE_URL } from "@/lib/env";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...legalLinks.map((link) => ({
      url: `${SITE_URL}${link.href}/`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}

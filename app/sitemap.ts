import type { MetadataRoute } from "next";
import { legalLinks, navLinks } from "@/content/site";
import { SITE_URL } from "@/lib/env";

// `output: "export"` has no server to render this on request, so it must be
// resolved at build time.
export const dynamic = "force-static";

/**
 * Generated from the same nav data the header and footer read, so a new route
 * cannot be added to the site and forgotten here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...navLinks.map((link) => ({
      url: `${SITE_URL}${link.href}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...legalLinks.map((link) => ({
      url: `${SITE_URL}${link.href}/`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}

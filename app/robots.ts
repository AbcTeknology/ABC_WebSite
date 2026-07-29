import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/env";

// Resolved at build time: a static export has no server to render it on
// request.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

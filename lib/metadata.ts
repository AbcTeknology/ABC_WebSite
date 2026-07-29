import type { Metadata } from "next";
import { company } from "@/content/site";
import { SITE_URL } from "./env";

type PageMetaInput = {
  readonly title: string;
  readonly description: string;
  /** Route path with a leading slash, e.g. "/about". Home is "/". */
  readonly path: string;
};

/**
 * Per-page metadata: canonical URL, Open Graph and Twitter card.
 *
 * The OG image is inherited from `app/opengraph-image.tsx` rather than set
 * here, so there is one image and one place that owns it.
 */
export function pageMetadata({
  title,
  description,
  path,
}: PageMetaInput): Metadata {
  const canonical = path === "/" ? "/" : path;
  const fullTitle = path === "/" ? title : `${title} — ${company.legalName}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: `${SITE_URL}${canonical}`,
      siteName: company.legalName,
      locale: "en_AE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

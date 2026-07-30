import type { Metadata } from "next";
import { company } from "@/content/site";
import { SITE_URL } from "./env";

type PageMetaInput = {
  readonly title: string;
  readonly description: string;
  readonly path: string;
};

export function pageMetadata({
  title,
  description,
  path,
}: PageMetaInput): Metadata {
  const canonical = path === "/" ? "/" : path;
  const fullTitle = path === "/" ? title : `${title}: ${company.legalName}`;
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

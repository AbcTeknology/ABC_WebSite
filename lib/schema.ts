import { company, contactRoutes } from "@/content/site";
import { chrome } from "@/content/copy";
import { SITE_URL } from "./env";

export function organizationSchema() {
  const support = contactRoutes.find((route) => route.label === "Support");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: company.legalName,
        url: SITE_URL,
        slogan: company.tagline,
        description: chrome.footerBlurb,
        logo: `${SITE_URL}/brand/logo.png`,
        address: {
          "@type": "PostalAddress",
          addressCountry: "AE",
        },
        ...(support
          ? {
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: support.email,
                areaServed: "AE",
                availableLanguage: "English",
              },
            }
          : {}),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: company.legalName,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
      },
    ],
  };
}

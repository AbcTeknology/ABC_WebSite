import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { chrome } from "@/content/copy";
import { company } from "@/content/site";
import { SITE_URL } from "@/lib/env";
import { organizationSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${company.legalName}: Applied AI for everyday commerce`,
    template: `%s: ${company.legalName}`,
  },
  description: chrome.footerBlurb,
  applicationName: company.legalName,
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <SkipLink />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"

          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
      </body>
    </html>
  );
}

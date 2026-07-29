import type { Metadata } from "next";
import { Barlow, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SkipLink } from "@/components/layout/SkipLink";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { chrome } from "@/content/copy";
import { company } from "@/content/site";
import { SITE_URL } from "@/lib/env";
import { organizationSchema } from "@/lib/schema";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${company.legalName} — AI for everyday spending`,
    template: `%s — ${company.legalName}`,
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
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${barlow.variable} ${manrope.variable}`}
    >
      {/* Browser extensions (Bitdefender, Grammarly, LastPass and friends)
          stamp attributes such as `bis_register` and `__processed_<uuid>__`
          onto <body> before React hydrates, which React reports as a
          hydration mismatch. It is the extension, not this markup, so the
          warning is suppressed at the boundary the extensions touch. */}
      <body suppressHydrationWarning>
        <ThemeProvider>
          <SkipLink />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          // Static, build-time JSON-LD. No user input reaches this string.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
      </body>
    </html>
  );
}

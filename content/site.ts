/**
 * Structural site data: identity, routes, contact channels.
 *
 * Prose belongs in `copy.ts`. This file holds the things that are facts about
 * the company rather than words about it.
 */

export const company = {
  legalName: "ABC Teknology",
  productName: "ABC AI",
  foundedRegion: "United Arab Emirates",
  copyrightHolder: "ABC Teknology",
} as const;

export type NavLink = {
  readonly label: string;
  readonly href: string;
};

/**
 * Primary navigation, and the source the sitemap is generated from.
 *
 * Contact and Careers are intentionally absent: both were cut before launch.
 * Their copy is kept in `content/copy.ts` so the pages can be restored without
 * rewriting anything. Contact routes still reach people through the footer.
 */
export const navLinks: readonly NavLink[] = [
  { label: "What we offer", href: "/what-we-offer" },
  { label: "How it works", href: "/how-it-works" },
  { label: "About", href: "/about" },
];

export const legalLinks: readonly NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export type ContactRoute = {
  readonly label: string;
  readonly email: string;
  readonly description: string;
};

export const contactRoutes: readonly ContactRoute[] = [
  {
    label: "General",
    email: "hello@abcteknology.com",
    description: "Anything that does not fit the boxes below.",
  },
  {
    label: "App support",
    email: "support@abcteknology.com",
    description: "Something in ABC AI did not work the way it should.",
  },
  {
    label: "Privacy",
    email: "privacy@abcteknology.com",
    description: "Questions about your data, or a request to remove it.",
  },
  {
    label: "Legal",
    email: "legal@abcteknology.com",
    description: "Terms, compliance, and anything a lawyer should read.",
  },
  {
    label: "Careers",
    email: "careers@abcteknology.com",
    description: "Work you have built, and why you want to build here.",
  },
];

/**
 * Retailers ABC AI reads prices from.
 *
 * Rendered as styled text, not logos. Logo usage rights were never confirmed,
 * so names only until they are.
 */
export const retailers = ["Amazon", "Noon", "Carrefour", "Talabat"] as const;

/** Support hours. Flagged for the client to confirm against a UAE work week. */
export const supportHours = "Sunday to Thursday, 9 AM to 6 PM (GST)";

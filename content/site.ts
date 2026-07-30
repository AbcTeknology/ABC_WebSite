export const company = {
  legalName: "ABC Teknology",
  tagline: "Research. Build. Empower.",
  productName: "ABC AI",
  country: "United Arab Emirates",
  copyrightHolder: "ABC Teknology",
} as const;

export type NavLink = {
  readonly label: string;
  readonly href: string;
};

export const navLinks: readonly NavLink[] = [
  { label: "What We Offer", href: "#what-we-offer" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About Us", href: "#about" },
  { label: "Built for UAE", href: "#built-for-uae" },
  { label: "Technology", href: "#technology" },
  { label: "Contact", href: "#contact" },
];

export const legalLinks: readonly NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export type ContactRoute = {
  readonly label: string;
  readonly email: string;
};

export const contactRoutes: readonly ContactRoute[] = [
  { label: "General", email: "info@abcteknology.com" },
  { label: "Support", email: "support@abcteknology.com" },
  { label: "Privacy", email: "privacy@abcteknology.com" },
];

export const earlyAccessEmail = "info@abcteknology.com";

export const retailers = ["Amazon", "Noon", "Carrefour", "Talabat"] as const;

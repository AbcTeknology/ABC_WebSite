export type Value = {
  readonly title: string;
  readonly body: string;
};

export type Offering = {
  readonly icon: string;
  readonly title: string;
  readonly body: string;
};

export type Step = {
  readonly title: string;
  readonly body: string;
};

export const hero = {
  headline: "AI that makes everyday spending smarter.",
  body: "ABC Teknology is a UAE-based technology company building applied AI for everyday commerce. Our first product, ABC AI, helps shoppers compare grocery prices across Amazon, Noon, Carrefour and Talabat, so they can find better value without checking every store manually.",
  primaryCta: "Get Early Access",
  secondaryCta: "See How It Works",
  benefits: [
    { title: "Prices across four retailers", detail: "Searched in parallel." },
    {
      title: "True unit-price comparison",
      detail: "Per kilo, litre or piece.",
    },
    { title: "Best-value basket in AED", detail: "Totalled for you." },
    { title: "Built for UAE shoppers", detail: "All seven emirates." },
  ],
} as const;

export const retailerStrip = {
  caption: "ABC AI compares current listings across",
} as const;

export const vision = {
  heading: "Our Vision",
  subheading: "Smarter spending. Better everyday decisions.",
  body: [
    "We believe people should have clearer information before they spend. ABC Teknology builds applied AI products that reduce repetitive work, simplify complex choices and help people make more informed everyday decisions.",
    "Our first focus is grocery commerce in the UAE, where prices, pack sizes and availability vary across retailers and locations.",
  ],
  values: [
    {
      title: "Customer First",
      body: "We build products around real customer problems and measurable usefulness.",
    },
    {
      title: "Integrity",
      body: "We present verified information clearly and avoid hidden commercial influence.",
    },
    {
      title: "Responsible Innovation",
      body: "We use AI where it improves understanding and decision-making, while using deterministic software for calculations and critical logic.",
    },
    {
      title: "Local Impact",
      body: "We are building from the UAE for the people, businesses and digital economy of the region.",
    },
  ] as const satisfies readonly Value[],
} as const;

export const offerings = {
  heading: "What We Offer",
  intro:
    "ABC Teknology builds systems that transform scattered commerce data into clear decisions.",
  items: [
    {
      icon: "MessageSquare",
      title: "ABC AI Shopping Assistant",
      body: "A conversational shopping assistant that helps UAE shoppers find and compare grocery products across major online retailers.",
    },
    {
      icon: "Scale",
      title: "Retail Price Intelligence",
      body: "A structured data layer that reads current listings, normalizes pack sizes and calculates comparable unit prices.",
    },
    {
      icon: "Workflow",
      title: "Conversational AI Systems",
      body: "Multi-stage AI workflows designed to understand intent, validate results and communicate verified answers clearly.",
    },
    {
      icon: "Send",
      title: "Messaging Experiences",
      body: "The same shopping assistance can be delivered through mobile and messaging channels such as WhatsApp.",
    },
  ] as const satisfies readonly Offering[],
} as const;

export const howItWorks = {
  heading: "How ABC AI Works",
  intro:
    "ABC AI uses a structured pipeline rather than relying on one unrestricted AI prompt.",
  steps: [
    {
      title: "Classify",
      body: "Understand what the shopper requested, including products, quantities and basket changes.",
    },
    {
      title: "Search",
      body: "Search enabled retailers in parallel for relevant listings.",
    },
    {
      title: "Validate",
      body: "Confirm that each result matches the shopper's intended product.",
    },
    {
      title: "Rank",
      body: "Compare qualified listings using unit price and relevant delivery information.",
    },
    {
      title: "Respond",
      body: "Present the strongest options and direct the shopper to the retailer.",
    },
  ] as const satisfies readonly Step[],
} as const;

export const demo = {
  heading: "ABC AI in Action",
  intro:
    "From a plain shopping request to a best-value basket, with the comparison shown rather than asserted.",
  exampleNotice:
    "Illustrative example. Figures shown are for demonstration and are not measured prices.",
  request: "Find 2 litres of milk, basmati rice, 12 eggs and chicken breast.",
  stages: {
    ask: "You ask",
    compare: "We compare",
    basket: "Best-value basket",
  },
  thinking: "Understanding your request",
  rows: [
    {
      item: "Milk",
      unit: "litre",
      unitShort: "L",
      offers: [
        { size: "2L", price: 7.95, unitPrice: 3.98 },
        { size: "1.5L", price: 6.45, unitPrice: 4.3 },
        { size: "2L", price: 8.25, unitPrice: 4.13 },
        { size: "1L", price: 4.6, unitPrice: 4.6 },
      ],
      bestIndex: 0,
    },
    {
      item: "Basmati rice",
      unit: "kilo",
      unitShort: "kg",
      offers: [
        { size: "5kg", price: 62.0, unitPrice: 12.4 },
        { size: "1kg", price: 12.9, unitPrice: 12.9 },
        { size: "2kg", price: 23.5, unitPrice: 11.75 },
        { size: "1kg", price: 13.1, unitPrice: 13.1 },
      ],
      bestIndex: 2,
    },
    {
      item: "Eggs",
      unit: "egg",
      unitShort: "egg",
      offers: [
        { size: "30 pcs", price: 21.9, unitPrice: 0.73 },
        { size: "15 pcs", price: 9.9, unitPrice: 0.66 },
        { size: "12 pcs", price: 8.5, unitPrice: 0.71 },
        { size: "6 pcs", price: 4.75, unitPrice: 0.79 },
      ],
      bestIndex: 1,
    },
    {
      item: "Chicken breast",
      unit: "kilo",
      unitShort: "kg",
      offers: [
        { size: "1kg", price: 34.5, unitPrice: 34.5 },
        { size: "500g", price: 18.9, unitPrice: 37.8 },
        { size: "1kg", price: 35.75, unitPrice: 35.75 },
        { size: "900g", price: 29.9, unitPrice: 33.22 },
      ],
      bestIndex: 3,
    },
  ],
  basketLabel: "Total",
  basketAction: "View at stores",
  bestLabel: "lowest",
  unitHint: "Pack size and price per unit shown beneath each figure.",
} as const;

export const uae = {
  heading: "Built for the UAE",
  body: "ABC AI is designed around the market it serves. Retailer prices, availability and delivery options can change by emirate and location. Local product terminology also matters.",
  points: [
    {
      title: "Prices in AED",
      body: "Always in local currency.",
    },
    {
      title: "Seven emirates covered",
      body: "Location-aware availability.",
    },
    {
      title: "Local products and terminology",
      body: "We understand how you shop.",
    },
    {
      title: "Delivery preferences",
      body: "From express to scheduled.",
    },
  ] as const satisfies readonly Value[],
} as const;

export const technology = {
  heading: "Technology You Can Trust",
  intro:
    "ABC Teknology combines language models with deterministic software to produce more reliable shopping comparisons.",
  pillars: [
    {
      title: "Language models for understanding",
      body: "Used to interpret natural language and validate whether product listings match a request.",
    },
    {
      title: "Software for calculations",
      body: "Unit prices, totals and basket calculations are performed by code using stored values.",
    },
    {
      title: "Structured agent workflow",
      body: "Classification, retrieval, validation, ranking and response generation remain separate stages.",
    },
    {
      title: "Resilient infrastructure",
      body: "External services use retry and fallback logic where appropriate.",
    },
  ] as const satisfies readonly Value[],
} as const;

export const trust = {
  heading: "Designed Around Shopper Trust",
  items: [
    {
      title: "No payment handling",
      body: "ABC AI links shoppers to retailer platforms to complete purchases. It does not process checkout.",
    },
    {
      title: "No sale of personal information",
      body: "User information is not sold to retailers or advertisers.",
    },
    {
      title: "No advertising or tracking cookies",
      body: "The product is not designed around advertising incentives.",
    },
    {
      title: "No invented prices",
      body: "When a price cannot be verified, the assistant says so rather than guessing.",
    },
  ] as const satisfies readonly Value[],
} as const;

export const earlyAccess = {
  heading: "Ready to shop smarter?",
  body: "Join the ABC AI early-access list and be among the first to try a clearer way to compare grocery prices in the UAE.",
  emailLabel: "Email address",
  emailPlaceholder: "Enter your email address",
  submit: "Get Early Access",
  invalidEmail: "Enter a valid email address, for example name@example.com.",
  mailtoSubject: "ABC AI early access",
  mailtoNote: "This opens your email app so you can send the request.",
  success:
    "Your email app should now be open. Send the message to join the list.",
} as const;

export const chrome = {
  skipToContent: "Skip to content",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  headerCta: "Get Early Access",
  backToTop: "back to top",
  demoItemHeader: "Item",
  footerBlurb:
    "ABC Teknology is a UAE-based technology company building applied AI for everyday commerce.",
  footerCompany: "Company",
  footerLegal: "Legal",
  footerContact: "Contact",
  footerLocationLabel: "Proudly based in",
  notFound: {
    headline: "That page does not exist.",
    body: "The link may be out of date, or the page may have moved.",
    cta: "Back to home",
  },
} as const;

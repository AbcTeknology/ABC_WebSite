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
  readonly status: string;
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
      body: "We use AI where it genuinely helps a shopper decide, and we do not let it anywhere near the money.",
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
    "One company, one focus: turning scattered retail pricing into a decision you can act on in seconds.",
  items: [
    {
      icon: "MessageSquare",
      title: "ABC AI Shopping Assistant",
      body: "A conversational shopping assistant that helps UAE shoppers find and compare grocery products across major online retailers.",
    },
    {
      icon: "Scale",
      title: "Honest Price Comparison",
      body: "The same product is sold in different pack sizes at every retailer. We put every option on one basis, so a 900g pack and a 1kg pack can finally be compared.",
    },
    {
      icon: "Target",
      title: "Answers You Can Act On",
      body: "One clear recommendation per item instead of a page of search results, with the reason it won shown alongside it.",
    },
    {
      icon: "Send",
      title: "Wherever You Already Are",
      body: "The same assistant works in the app or over WhatsApp, for shoppers who would rather send a list than open anything.",
    },
  ] as const satisfies readonly Offering[],
} as const;

export const howItWorks = {
  heading: "How ABC AI Works",
  intro:
    "One shopping list in, one basket out. This is what happens in between, and why the answer holds up.",
  steps: [
    {
      title: "You send your list",
      status: "Reading your list",
      body: "Write it the way you would text a friend. The whole list at once, in your own words, with no forms or filters to fill in.",
    },
    {
      title: "Every store at once",
      status: "Checking four stores",
      body: "Amazon, Noon, Carrefour and Talabat are all checked together rather than one after another, so you are not waiting on four searches.",
    },
    {
      title: "Only the right product",
      status: "Matching products",
      body: "Orange juice is not oranges, and a blender is not a smoothie. Anything that is not what you asked for is dropped before price is considered.",
    },
    {
      title: "Compared on one basis",
      status: "Comparing unit prices",
      body: "Pack sizes never line up between retailers, so every option is priced per kilo, litre or piece. That is the only way the cheapest option is really the cheapest.",
    },
    {
      title: "One basket, one total",
      status: "Building your basket",
      body: "The best value for each item, added up in dirhams, with a link out to the retailer when you are ready to buy.",
    },
  ] as const satisfies readonly Step[],
} as const;

export const demo = {
  heading: "ABC AI in Action",
  intro:
    "From a plain shopping request to a best-value basket, with the comparison shown rather than asserted.",
  exampleNotice: "Figures are an example, not measured prices.",
  request: "Find 2 litres of milk, basmati rice, 12 eggs and chicken breast.",
  runProgress: "Working through the request",
  runDone: "Comparison complete",
  stages: {
    ask: "You ask",
    compare: "We compare",
    basket: "Best-value basket",
  },
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
  bestLabel: "lowest",
  unitHint:
    "Each bar is the price per unit, so the shortest bar is the best value. It is not always the lowest shelf price: the cheapest bottle of milk here is the 1L at 4.60, but the 2L works out cheaper per litre.",
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
  heading: "Why the Price Can Be Trusted",
  intro:
    "A comparison is only worth having if the number is right. Most of our work goes into that, not into the part you can see.",
  pillars: [
    {
      title: "Read, not estimated",
      body: "Every figure comes from what the retailer is listing. Nothing is guessed at or filled in from an average.",
    },
    {
      title: "Counted, not approximated",
      body: "Unit prices and basket totals are worked out properly. A total is an answer, not a rough idea.",
    },
    {
      title: "Wrong matches removed first",
      body: "A cheap result that is not the product you asked for is worse than no result. Those are taken out before anything is ranked.",
    },
    {
      title: "Checked again, because prices move",
      body: "Listings, stock and delivery windows change constantly, and they are not the same across the seven emirates. We keep re-checking rather than trusting yesterday's figure.",
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
  themeToggle: "Toggle light and dark theme",
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

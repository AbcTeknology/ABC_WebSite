/**
 * Every user-facing sentence on this site.
 *
 * Components read from here and must never hardcode copy. Marketing text is
 * refined externally and dropped back into this one file.
 *
 * ---------------------------------------------------------------------------
 * CLAIMS THIS PRODUCT CANNOT MAKE
 * ---------------------------------------------------------------------------
 * Read this before adding or editing anything below. Each item is a claim the
 * codebase does not support, and putting it on the site would make the site
 * wrong.
 *
 *  1. In-app checkout, payment, order placement, or delivery. ABC AI links out
 *     to the retailer. Always. It never handles a transaction.
 *  2. Courier or delivery tracking. Location is used to price and check stock,
 *     not to follow an order.
 *  3. Any language other than English, or any currency other than AED.
 *  4. Availability on the App Store or Google Play. Neither listing is live.
 *  5. Ratings, review counts, user counts, download counts, or "trusted by
 *     thousands". The company is pre-launch.
 *  6. A search time in seconds. Performance is not yet stable enough to
 *     publish a number.
 *  7. Guaranteed price accuracy. Prefer "current listings" over "real time",
 *     and never promise a price will still match at checkout.
 *  8. Any vendor, merchant, seller, driver, or admin product. There is no B2B
 *     side to this business.
 *  9. Percentage savings or average-basket-savings figures. None measured.
 * 10. Funding, awards, partnerships, or retailer endorsements. There are none.
 *     ABC Teknology has no commercial relationship with Amazon, Noon,
 *     Carrefour or Talabat.
 *
 * House style: no em-dashes or en-dashes. Short sentences. No idioms that fail
 * in translation, since the audience includes Arabic speakers even though the
 * site ships in English.
 */

export type Pillar = {
  readonly title: string;
  readonly body: string;
};

export type Step = {
  readonly title: string;
  readonly body: string;
};

export type Offering = {
  readonly icon: string;
  readonly title: string;
  readonly body: string;
};

export type Capability = {
  readonly title: string;
  readonly body: string;
};

/* -------------------------------------------------------------------------- */
/* Home                                                                       */
/* -------------------------------------------------------------------------- */

export const home = {
  hero: {
    headline: "We build AI that makes everyday spending smarter.",
    body: "ABC Teknology is a technology company based in the United Arab Emirates. Our first product, ABC AI, compares grocery prices across Amazon, Noon, Carrefour and Talabat, so shoppers stop paying more than they have to.",
    primaryCta: "Download ABC AI",
    secondaryCta: "See what we do",
  },

  whoWeAre: {
    heading: "Who we are",
    body: [
      "We are a small product team in the UAE building applied AI for everyday commerce. Software that does the tedious work of comparing, checking and deciding, so people keep more of their money and more of their time.",
      "We are not a research lab and we are not an agency. We build products that people use on their phones, in this market, for real purchases.",
    ],
    pillars: [
      {
        title: "Simplicity",
        body: "If it needs explaining, it is not finished.",
      },
      {
        title: "Speed",
        body: "An answer that arrives late is not an answer.",
      },
      {
        title: "User obsession",
        body: "We measure ourselves in dirhams saved, not features shipped.",
      },
    ] as const satisfies readonly Pillar[],
  },

  whatWeOffer: {
    heading: "What we offer",
    intro:
      "One company, one focus. Turning messy real-world pricing into a single clear answer.",
    offerings: [
      {
        icon: "MessageSquare",
        title: "ABC AI, the shopping assistant",
        body: "A conversational app for UAE shoppers. Ask in plain language, get the cheapest option for every item across four major retailers, and a best-value basket totalled in AED.",
      },
      {
        icon: "Scale",
        title: "Multi-retailer price intelligence",
        body: "Our own data layer reads current listings from Amazon, Noon, Carrefour and Talabat and converts inconsistent pack sizes into one comparable price per kilo, litre or piece.",
      },
      {
        icon: "Workflow",
        title: "Conversational AI agents",
        body: "A production agent stack that understands intent, tolerates typos, holds context across a conversation, and refuses to guess a number it cannot verify.",
      },
      {
        icon: "Send",
        title: "Messaging channels",
        body: "The same assistant on WhatsApp, for shoppers who would rather send a list than open an app.",
      },
    ] as const satisfies readonly Offering[],
  },

  howItWorks: {
    heading: "How ABC AI works",
    steps: [
      {
        title: "Say what you need",
        body: "Type your list the way you would text a friend. Typos are fine. So is a couple of litres of laban.",
      },
      {
        title: "We check every store at once",
        body: "ABC AI searches Amazon, Noon, Carrefour and Talabat in parallel and reads the actual listings.",
      },
      {
        title: "You get a best-value basket",
        body: "The cheapest option per item, compared on true unit price so the comparison is honest, totalled in AED.",
      },
      {
        title: "You buy at the store",
        body: "ABC AI hands you straight to the retailer to complete the order. We never sit between you and your purchase.",
      },
    ] as const satisfies readonly Step[],
  },

  capabilities: {
    heading: "What the assistant can do",
    items: [
      {
        title: "Plain language, not search syntax",
        body: "Write a shopping list, not keywords.",
      },
      {
        title: "True unit pricing",
        body: "A 900g pack and a 1kg pack are compared on the same basis, per kilo, per litre, per piece.",
      },
      {
        title: "Smart swaps",
        body: "When a bigger pack costs less per unit, we show you and let you decide.",
      },
      {
        title: "Conversational editing",
        body: "Add eggs. Make it two kilos. Nothing imported. The basket updates without starting over.",
      },
      {
        title: "Emirate aware",
        body: "Prices and availability change across the seven emirates. So do our answers.",
      },
      {
        title: "In a hurry",
        body: "Say you need it today and we prioritise the options that can actually get there.",
      },
      {
        title: "Typo tolerant",
        body: "Organ juice still finds orange juice.",
      },
      {
        title: "A basket you can edit",
        body: "Adjust quantities, drop items, watch the total move.",
      },
      {
        title: "Told when it is ready",
        body: "A notification when your basket is priced, so you can close the app while we work.",
      },
      {
        title: "Free",
        body: "No subscription, no payment details, nothing to cancel.",
      },
    ] as const satisfies readonly Capability[],
  },

  builtForUae: {
    heading: "Built for the UAE, not adapted to it",
    body: [
      "Four large online grocery retailers. Seven emirates. Prices and stock that change by location. A comparison engine designed somewhere else does not know that the same item is priced differently in Sharjah than in Dubai, or that laban belongs on a weekly list rather than in a spell-checker.",
      "We built for this market first because it is the market we live in.",
    ],
  },

  howWeBuild: {
    heading: "How we build",
    body: "ABC AI runs on a purpose-built agent pipeline. Every request is classified, searched across retailers in parallel, semantically validated, ranked on true unit price, and only then written into an answer. Each stage is a separate, testable step. That is why the assistant will tell you it could not find something instead of inventing it.",
    points: [
      "Python and FastAPI services, orchestrated with LangGraph",
      "Language models for intent, validation and ranking. Never for arithmetic.",
      "A dedicated crawling and normalisation service for retailer data",
      "React Native and Expo, iOS and Android from one codebase",
      "Infrastructure we run and operate ourselves",
    ],
    linkLabel: "How it works",
  },

  principles: {
    heading: "What we will not do",
    items: [
      {
        title: "We do not take your money",
        body: "Purchases happen on the retailer's own app. We never see payment details.",
      },
      {
        title: "We do not sell your data",
        body: "Not to retailers, not to anyone.",
      },
      {
        title: "We do not run ads or tracking cookies",
        body: "The product has no incentive to show you the second-cheapest option.",
      },
      {
        title: "We do not invent prices",
        body: "If a number cannot be verified, the assistant says so rather than filling the gap.",
      },
    ] as const satisfies readonly Capability[],
    footnote:
      "Handled in line with UAE data protection law (Federal Decree-Law 45/2021).",
  },

  finalCta: {
    heading: "Start paying the lowest price.",
    body: "ABC AI is free. Download it, send your list, and see what your usual basket should have cost.",
  },
} as const;

/* -------------------------------------------------------------------------- */
/* About                                                                      */
/* -------------------------------------------------------------------------- */

export const about = {
  headline: "We built ABC Teknology so UAE shoppers never overpay.",
  lead: "Groceries are the one bill every household pays every week, and the one where the same basket can cost noticeably more or less depending on which app you happened to open. Most people know this. Almost nobody has the time to check four apps, item by item, before every shop.",
  sections: [
    {
      heading: "The problem we started with",
      body: [
        "We watched people do this manually. Open Amazon, check a price. Open Noon, check the same price. Give up halfway and order from whichever app was already logged in.",
        "The information needed to make a better decision existed. It was just spread across four places and expressed in pack sizes that do not line up.",
      ],
    },
    {
      heading: "What we decided to build",
      body: [
        "An assistant you can just talk to. You describe your shopping list once, in your own words, and get back one answer: what each item costs at its cheapest, where to buy it, and what the whole basket comes to in dirhams.",
        "No spreadsheets. No tabs. No pack-size arithmetic.",
      ],
    },
    {
      heading: "Where we are",
      body: [
        "ABC Teknology is UAE-based and building for the UAE first. We are early, we are small, and we are shipping.",
      ],
    },
  ],
  howWeWork: {
    heading: "How we work",
    pillars: [
      {
        title: "Simplicity",
        body: "The best version of a feature is usually the one with fewer parts. If a screen needs a tutorial, we have not finished designing it.",
      },
      {
        title: "Speed",
        body: "People check prices in the minutes before they order. An assistant that takes too long has already lost.",
      },
      {
        title: "User obsession",
        body: "Our internal measure is not sign-ups. It is whether a real person, with a real list, ended up with a genuinely cheaper basket.",
      },
    ] as const satisfies readonly Pillar[],
  },
  mission: {
    heading: "Our mission",
    body: "Every dirham saved on groceries is a dirham you keep. We want every household in the UAE to reach the cheapest price without spending extra time to find it.",
  },
} as const;

/* -------------------------------------------------------------------------- */
/* What we offer                                                              */
/* -------------------------------------------------------------------------- */

export const whatWeOffer = {
  headline: "What we offer",
  lead: "ABC Teknology builds one thing well: systems that turn scattered, inconsistent retail pricing into a decision you can act on in seconds.",
  sections: [
    {
      heading: "ABC AI",
      body: [
        "A conversational shopping assistant for UAE households, on iOS and Android.",
        "Describe what you need in plain language. ABC AI searches Amazon, Noon, Carrefour and Talabat at the same time, checks that each result is genuinely the thing you asked for, compares options on price per kilo or litre rather than headline price, and returns a best-value basket totalled in AED. Then it sends you to the retailer to buy.",
        "Free to use. No payment details. No checkout in between.",
      ],
    },
    {
      heading: "Price intelligence across four retailers",
      body: [
        "Behind the assistant is a data layer built for a market where the same product appears under four different names, in four different pack sizes, at four different prices, and where all of that changes by emirate.",
        "We read current listings, normalise pack sizes into a common unit, resolve promotions and multibuy offers into an effective price, and keep the comparison honest.",
      ],
    },
    {
      heading: "Conversational AI agents",
      body: [
        "The assistant is a multi-stage agent pipeline, not a single prompt. Intent classification, parallel retrieval, semantic validation, ranking and response generation are separate, individually testable steps.",
        "That structure is what makes the answers trustworthy. Products that do not match your request are filtered out before ranking. Totals are calculated in code, never by a language model. When data is missing, the assistant says so.",
      ],
    },
    {
      heading: "WhatsApp ordering",
      body: [
        "Some people will always prefer to send a message. The same assistant runs on WhatsApp, so a shopping list can be a text.",
      ],
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Technology                                                                 */
/* -------------------------------------------------------------------------- */

export const technology = {
  headline: "How it works",
  lead: "A price comparison is only useful if you can trust it. Most of our engineering goes into making sure the number on the screen is the number at the store.",
  pipeline: {
    heading: "A pipeline, not a prompt",
    intro:
      "Every request moves through a fixed sequence of steps, each one testable on its own.",
    stages: [
      {
        title: "Classify",
        body: "Work out what the shopper is actually asking for, extract each product and quantity, and understand refinements to a basket that already exists.",
      },
      {
        title: "Search",
        body: "Query every enabled retailer in parallel rather than one after another.",
      },
      {
        title: "Validate",
        body: "Check semantically that each result matches the request. Orange juice is not oranges. A blender is not a smoothie.",
      },
      {
        title: "Rank",
        body: "Order the survivors on true unit price, with delivery time and fee as tie-breakers.",
      },
      {
        title: "Respond",
        body: "Write the answer from verified data only.",
      },
    ] as const satisfies readonly Step[],
  },
  sections: [
    {
      heading: "Language models where they help, code where it matters",
      body: [
        "We use language models for the things they are good at: understanding messy human phrasing, judging whether two product listings mean the same thing, weighing options.",
        "We do not use them for arithmetic. Every total, unit price and saving is computed in code from stored values. A fabricated number is treated as a critical failure, not a rounding error.",
      ],
    },
    {
      heading: "Built for a market that moves",
      body: [
        "Prices, stock and delivery windows change constantly and vary across the seven emirates. Our data layer refreshes retailer listings continuously, normalises pack sizes into comparable units, and resolves promotions into an effective price.",
      ],
    },
  ],
  stack: {
    heading: "The stack",
    items: [
      { title: "Services", body: "Python, FastAPI, PostgreSQL, Redis" },
      {
        title: "Agent orchestration",
        body: "LangGraph, with retry and fallback at every external boundary",
      },
      {
        title: "Mobile",
        body: "React Native and Expo, iOS and Android from one codebase",
      },
      {
        title: "Infrastructure",
        body: "Self-hosted and operated in house",
      },
    ] as const satisfies readonly Capability[],
  },
} as const;

/* -------------------------------------------------------------------------- */
/* Careers — NOT CURRENTLY PUBLISHED                                          */
/* -------------------------------------------------------------------------- */
/* The /careers page was cut before launch: there are no open roles, so the
   page had nothing to say. Kept here so restoring it is a matter of adding
   `app/careers/page.tsx` back and re-adding the nav entry in `site.ts`,
   rather than rewriting the copy. */

export const careers = {
  headline: "Help us save every shopper money.",
  lead: "We are a small, focused team in the UAE. We ship, we measure, and we cut what does not earn its place.",
  lookFor: {
    heading: "What we look for",
    items: [
      "People who reduce scope rather than add it",
      "People who would rather test an assumption than argue about it",
      "People who care that the number on the screen is correct",
    ],
  },
  openRoles: {
    heading: "Open roles",
    body: "No open roles right now. If you think you should be on this team anyway, send us something you have built.",
    email: "careers@abcteknology.com",
  },
} as const;

/* -------------------------------------------------------------------------- */
/* Contact — NOT CURRENTLY PUBLISHED                                          */
/* -------------------------------------------------------------------------- */
/* The /contact page was cut before launch. Contact still reaches people: the
   footer carries the general and support addresses, and the privacy and terms
   documents name their own addresses inline. Restore the same way as careers
   above. */

export const contact = {
  headline: "Get in touch",
  lead: "Questions, partnership ideas, or something that did not work. All of it reaches a person.",
  hoursLabel: "Support hours",
} as const;

/* -------------------------------------------------------------------------- */
/* Shared chrome                                                              */
/* -------------------------------------------------------------------------- */

export const chrome = {
  skipToContent: "Skip to content",
  downloadCta: "Download ABC AI",
  comingSoon: "Coming soon",
  storesPendingNote:
    "ABC AI is not on the app stores yet. Listings are on the way.",
  footerBlurb:
    "ABC Teknology builds applied AI for everyday commerce in the United Arab Emirates.",
  retailerCaption: "ABC AI reads current listings from",
  notFound: {
    headline: "That page does not exist.",
    body: "The link may be out of date, or the page may have moved.",
    cta: "Back to home",
  },
} as const;

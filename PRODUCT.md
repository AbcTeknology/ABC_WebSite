# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

UAE residents who buy groceries online and already use two or more of Amazon,
Noon, Carrefour and Talabat. They are mobile-first and price-aware, and today
they compare prices by opening several retailer apps and checking items one at a
time. The job: find better value on a weekly grocery shop without doing that
manual comparison.

A second audience reads this website rather than the app: people evaluating ABC
Teknology as a company, including prospective partners, hires and press.
The site must establish the company first and the product second.

## Product Purpose

ABC Teknology is a UAE-based technology company building applied AI for
everyday commerce. Its first product, ABC AI, takes a plain-language shopping
list, searches enabled retailers in parallel, checks that each result matches
what was asked for, ranks options on true unit price, and returns a best-value
basket totalled in AED with links out to the retailer.

Success for the website: a visitor understands what the company does, believes
the comparison can be trusted, and joins the early-access list.

## Positioning

Comparison is done on **true unit price** (per kilo, litre or piece) after pack
sizes are normalised, and every total is computed in code rather than by a
language model. A competitor could copy the idea of an AI shopping assistant but
not truthfully claim this specific discipline: language models are used for
understanding and validation only, never for arithmetic.

## Operating Context

Used on a phone, at home, in the minutes before placing a grocery order.
Retailer prices, availability and delivery options vary across the seven
emirates and by location. Local product terminology matters (for example laban,
basmati rice). Seasonality that affects behaviour: Ramadan, back-to-school, the
summer period.

## Capabilities and Constraints

Confirmed capabilities:

- Plain-language search, tolerant of typos and shorthand
- Parallel search across four retailers
- Semantic validation that a result matches the request
- Unit-price normalisation across inconsistent pack sizes
- Best-value basket with an AED total
- Better-value pack suggestions when a larger pack costs less per unit
- Conversational refinement: add, remove, change quantity, exclude a brand
- Emirate-aware pricing and availability
- Urgent-delivery awareness
- A WhatsApp channel running the same assistant
- Free to use; no payment data collected

Hard constraints that copy must never contradict:

- ABC AI does **not** take payment, check out, or deliver. It links to the
  retailer, who completes the purchase.
- Location is used for pricing and availability, never for tracking an order.
- English and AED only.
- Not listed on the App Store or Google Play. The site must not offer a
  download.
- No vendor, merchant, driver or admin product exists. Single-sided consumer.
- Price accuracy is not guaranteed. Say "current listings", never "guaranteed
  real-time prices".

Technical constraint: the website is a statically exported Next.js site with no
server runtime, so it has no backend for form submission.

## Brand Commitments

- Company name is **ABC Teknology**, written that way in header, footer and
  metadata. Not "ABC Technology".
- Product name is **ABC AI**. The company is the primary brand; ABC AI is its
  first and flagship product.
- Based in the United Arab Emirates.
- Voice: short, clear sentences. No em dashes. No startup superlatives
  ("revolutionary", "game-changing", "unlimited", "trusted by thousands").
- The user supplied a binding visual brief for the redesign covering palette
  (navy and blue on white), typography, container width and section order.
  Recorded here as binding; the visual world itself is resolved separately and
  is not product truth.

## Evidence on Hand

Available:

- ABC AI logo mark: `public/brand/logo.png` (PNG only, no SVG exists)
- Approved reference design for the redesign, supplied by the user as
  screenshots
- Real product copy and legal documents in `content/`

Owned by the user but **not yet in the repository**, so the build must use
correctly sized placeholders until they land:

- Kitchen photograph of a shopper with her phone and a bag of groceries,
  1200 x 1500 (4:5). Confirmed as the hero visual, framed rather than a cutout,
  with the app mockup overlapping its lower-left corner as her screen.
- UAE skyline photograph, wide landscape 16:9. A tall 9:16 version also exists
  and is deliberately unused: the section places the skyline beside the text.
- A grocery-bag cutout on white (2:3) and a shield-and-padlock security image
  (4:3) were both supplied and are deliberately unused. The shield conflicts with
  the design system's rejection of glow, neon and abstract technology imagery.

Retailer logo files are present, sourced from the sibling `abc-landing` project.

Explicitly absent, and future work must not fabricate these:

- **No rights confirmed in writing to display retailer logos.** The client
  supplied the logo files and the site now renders them, so two mitigations are
  permanent: the caption reads "compares current listings across" and never
  "our partners", and the component falls back to styled text wordmarks the
  moment a file is removed. The site must never imply that Amazon, Noon,
  Carrefour or Talabat sponsor, endorse or partner with ABC Teknology. Written
  clearance is still outstanding.
- **No measured savings.** Any basket figure shown is illustrative and must be
  visibly labelled as an example. No savings percentage or average has been
  measured.
- No ratings, review counts, user counts or download counts. The company is
  pre-launch.
- No published performance figure for how long a search takes.
- No funding, awards, partnerships or customer testimonials.
- No early-access backend. Email capture is a `mailto:` link to
  info@abcteknology.com until a provider is chosen.

## Product Principles

1. **The company first, the product second.** A visitor should understand ABC
   Teknology before they understand ABC AI.
2. **Never assert what cannot be verified.** A number that cannot be traced to a
   stored value does not appear, and illustrative figures are labelled.
3. **Understanding by AI, arithmetic by code.** This division is the product's
   credibility and should be visible in how the site explains itself.
4. **Local before general.** Decisions favour the UAE market specifically over a
   generic international shopper.
5. **Comparison, not intermediation.** The product hands shoppers to retailers
   and never sits between them and their purchase.

## Accessibility & Inclusion

WCAG 2.1 AA as a floor, verified rather than assumed: contrast checked against
the actual rendered background in every theme shipped, keyboard operability for
all navigation and forms, visible focus states, and `prefers-reduced-motion`
honoured. Minimum body text 15px.

The audience includes Arabic speakers even though the site ships in English, so
copy avoids idioms that do not translate.

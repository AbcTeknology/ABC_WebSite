# ABC Teknology — company website

Marketing site for **ABC Teknology**, the UAE technology company behind the
ABC AI shopping assistant.

This is a **company site**, not a product landing page. It describes ABC AI in
words rather than demonstrating it: there are no app screenshots, no phone
mockups, no ratings and no usage statistics anywhere on the site. That is a
deliberate client constraint, not an oversight.

The older product landing page still lives in [`../abc-landing`](../abc-landing)
and is untouched by this project.

## Quick start

```bash
npm install
cp .env.example .env.local   # optional, everything has a safe fallback
npm run dev                  # http://localhost:3000
```

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build and static export to `out/` |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint, including `jsx-a11y` rules |
| `npm run format` | Prettier write |
| `npm run format:check` | Prettier check, for CI |

## Where the copy lives

**Every user-facing sentence is in [`content/copy.ts`](content/copy.ts).**
Components read from it and never hardcode copy, so refined marketing text can
be dropped into that one file without touching a component.

That file also opens with a list of **claims this product cannot make**. Read
it before editing copy. The short version: ABC AI has no in-app checkout, no
delivery, no ratings, and is not yet listed on either app store.

| File | Holds |
| --- | --- |
| `content/copy.ts` | All marketing prose, page by page |
| `content/site.ts` | Nav routes, contact emails, retailer names, support hours |
| `content/legal.ts` | Privacy and terms, ported verbatim |

## Design system

Tokens are ported from the mobile app's palette so the site and the product
read as one system. See `../ABC_MobileApp/DESIGN.md` for the source of truth.

- **Accent** Market Orange `#F97316` (dark `#FF7A50`)
- **Brand** Trust Teal `#0EA5B7` (dark `#14B8A6`)
- **Fonts** Barlow headings, Manrope body
- **The One Accent Rule** orange appears on primary actions and price emphasis
  only, never as a large decorative fill. This is why the hero sits on
  `surface` rather than an orange band, and why orange is never used as *text*
  (see below).

### Two deliberate deviations from the app's tokens

Both are accessibility fixes. `ABC_MobileApp/DESIGN.md` requires WCAG AA but
specifies values that cannot meet it on this site's backgrounds.

| Token | App value | Here | Why |
| --- | --- | --- | --- |
| `--on-accent` | `#FFFFFF` | `#111827` | White on Market Orange measures **2.58:1**. Ink measures 6.3:1 light, 6.9:1 dark. |
| `--muted` (light) | `#64748B` | `#5A6678` | The app value clears 4.5:1 only against pure white. On the page tint it was 4.20:1 and on cards 4.08:1. |

Related rule: **orange is never used as text.** `#F97316` on a light surface
tops out at 2.80:1 and cannot reach 4.5:1 at any weight, so accent appears
behind a fill (buttons), as a rule or underline, or not at all. Pipeline
numerals and list markers use `muted`.

Verified with a scripted contrast audit over every text-bearing element:
**0 failures in both themes across 133 elements.**

Light and dark are both first-class. Tokens live in
[`app/globals.css`](app/globals.css) as CSS variables with a `.dark` override.

### Layout: one left rail

Every piece of content on the site starts at the same left edge. This is the
convention most likely to be broken by accident, so it is enforced by the
primitives:

- **`Container`** owns the page gutter, caps layout at **1280px**, and has
  **no width variant**. Two container widths on one page produce two competing
  left margins.
- **`Prose`** constrains line length by capping the *right* edge only, inside a
  `Container`. Use it instead of reaching for a narrower centred container.

  These two caps do different jobs and should not be conflated. The container
  sizes grids, cards and diagrams; `Prose` sizes the reading measure at roughly
  **75 characters**, which is the top of the readable range. Widening the
  container never widens a paragraph.
- **`Section`** owns vertical rhythm through a `spacing` prop
  (`default` / `flush-top` / `tight`). **Do not pass `pt-0` via `className`** —
  it silently loses to the `sm:py-24` rule from 640px up, because the media
  query is emitted later in the stylesheet.
- **`Section tone="band"`** and **`Card on="band"`** must agree. Tonal layering
  only reads if each layer steps away from its parent: cards lift to `surface`
  on the page, and drop to `card` inside a band.

The hero and the closing CTA are full-bleed bands rather than inset cards for
the same reason: a padded card pushes its heading off the rail.

### Motion

Motion (`motion/react`) drives entry animations through
`components/motion/Reveal.tsx`. Two rules govern it:

- **Every animation must be motivated.** Reveals establish reading order, so a
  heading lands before the block it introduces and the pipeline stages arrive
  in sequence because they describe a sequence. Nothing animates just to move.
- **Reduced motion is honoured twice**: `useReducedMotion()` degrades each
  `Reveal` to static, and `globals.css` also disables animation globally under
  `prefers-reduced-motion: reduce`.

Motion components are client leaves (`"use client"`). Everything else stays a
Server Component. GSAP is deliberately not used: there is no pinning or
scrubbing here, and it would be a second animation runtime competing for the
same frames.

**Icons are Lucide**, which is normally discouraged in favour of Phosphor. It
stays because the approved design spec named it and the mobile app already uses
it. One icon family across the product beats a marginally better library.

### Visuals instead of screenshots

Since the site cannot show the app, three inline visuals carry the weight:

- `components/visuals/PipelineDiagram` — the five-stage agent pipeline
- `components/visuals/UnitPriceMotif` — abstract unit-price normalisation
- `components/visuals/RetailerMarquee` — retailer names as styled text

No stock photography. Retailer **names** only, never logos, until usage rights
are confirmed.

## Deployment

Static export. `npm run build` writes plain HTML/CSS/JS to `out/`, which any
static host can serve.

For nginx, with `trailingSlash: true` already set in `next.config.ts`:

```nginx
root /var/www/abc-teknology-web/out;

location / {
  try_files $uri $uri/ /404.html;
}
```

## Environment

Everything falls back to a safe default, so the site always builds.

| Variable | Effect when unset |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Defaults to `https://abcteknology.com` |
| `NEXT_PUBLIC_APP_STORE_URL` | App Store badge renders "Coming soon" |
| `NEXT_PUBLIC_PLAY_STORE_URL` | Google Play badge renders "Coming soon" |

## Open items

These need a decision from the client before launch:

- **Real domain.** The default above is a guess. The app points users at
  `abcai.app`, while the old landing config used a placeholder.
- **Retailer logo rights.** Never confirmed, so the site uses text.
- **An SVG logo.** Only a PNG mark exists and it will not scale cleanly.
- **Typeface pairing.** The approved design spec says Rubik + Nunito Sans; the
  shipped code says Barlow + Manrope. This project follows the code.
- **Support hours.** Set to Sunday to Thursday here, but the old site said
  Monday to Friday. Confirm against the UAE working week.
- **Services offering.** The copy assumes a pure product company, which is all
  the codebase supports. If ABC Teknology also sells software services, that
  section needs to be written.

## Notes for future work

Read [`AGENTS.md`](AGENTS.md) before changing anything. Most importantly: this
is Next.js 16, and its APIs differ from older versions. The bundled docs in
`node_modules/next/dist/docs/` are the authority.

One thing that will bite otherwise: with `output: "export"`, the `sitemap`,
`robots` and `opengraph-image` routes all need
`export const dynamic = "force-static"` or the build fails.

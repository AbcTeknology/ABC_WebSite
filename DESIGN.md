---
name: ABC Teknology
description: Corporate site for a UAE applied-AI company, built on institutional navy and a disciplined white ground.
colors:
  navy-950: "#071A3D"
  navy-900: "#0A2458"
  blue-700: "#1746A2"
  blue-600: "#2258C7"
  blue-100: "#EAF1FF"
  blue-50: "#F5F8FF"
  white: "#FFFFFF"
  gray-950: "#101828"
  gray-700: "#344054"
  gray-600: "#475467"
  gray-500: "#667085"
  gray-300: "#D0D5DD"
  gray-200: "#EAECF0"
  gray-100: "#F2F4F7"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5.2vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3.4vw, 2.625rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.01em"
  wordmark:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  ornament:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "10px"
  lg: "14px"
  full: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.navy-900}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "13px 22px"
  button-primary-hover:
    backgroundColor: "{colors.navy-950}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-900}"
    rounded: "{rounded.sm}"
    padding: "13px 22px"
  button-secondary-hover:
    backgroundColor: "{colors.blue-50}"
  card:
    backgroundColor: "{colors.blue-50}"
    textColor: "{colors.gray-600}"
    rounded: "{rounded.md}"
    padding: "24px"
  input-email:
    backgroundColor: "{colors.white}"
    textColor: "{colors.gray-950}"
    rounded: "{rounded.sm}"
    padding: "13px 16px"
---

# Design System: ABC Teknology

## Overview

**Creative North Star: "The Institutional Record"**

This is the visual language of an organisation that publishes numbers other
people rely on: a central bank bulletin, an exchange notice, a utility's annual
report. Authority comes from restraint and from the evident care taken with
alignment, not from expression. The ground is white and stays white. Navy does
the structural work: headings, the primary action, the footer. Blue appears
where something is live or selected.

The company is the subject and the product is its evidence. So the page reads as
a corporate record that happens to contain a product demonstration, rather than
a product landing page with an About paragraph bolted on. Density is moderate and
even; nothing shouts, and the one place the page raises its voice is the
early-access band, which is the only full navy field above the footer.

This world replaces an earlier orange-accent system carried over from the mobile
app. That system is now an explicit anti-reference for this surface: warm accent
fields, rounded pill geometry, and dark-first theming belong to the product, not
to the company record.

Confirmed rejections: no purple, pink or cyan; no multicolour gradients; no
gradient text; no glow or neon; no glassmorphism; no dark theme; no code
editors, terminals, robots or abstract AI imagery.

**Key Characteristics:**

- White ground, navy structure, blue for live state
- Square-ish geometry (6 to 14px) rather than pills
- Hairline borders doing the work shadows would do elsewhere
- One typeface, hierarchy from weight and size
- A 1320px rail every element aligns to
- Evidence over adjectives

## Colors

An institutional blue family on a white ground, with a single cool grey ramp for
text and rules.

### Primary

- **Record Navy** (`#0A2458`): headings, primary buttons, the footer field, and
  the early-access band. The colour the company signs its name in.
- **Deep Record Navy** (`#071A3D`): the hover state beneath Record Navy, and the
  darkest footer field. Never used for text on white.

### Secondary

- **Live Blue** (`#1746A2`): links, step numerals, and the selected cell in the
  comparison table. Measures 8.4:1 on white, so unlike a warm accent it is safe
  as text.
- **Signal Blue** (`#2258C7`): focus rings and the lighter half of the two-tone
  blue pairing. Interaction, not decoration.

### Tertiary

- **Wash Blue** (`#EAF1FF`): the selected cell in the comparison table, and the
  fill behind a step numeral.
- **Paper Blue** (`#F5F8FF`): card fills only. It is **not** a section ground;
  sections do not alternate.

### Neutral

- **Ink** (`#101828`): body copy and anything that must be read first.
- **Graphite** (`#344054`): sub-headings and emphasised secondary copy.
- **Slate** (`#475467`): the default secondary text colour, on every ground.
- **Mist** (`#667085`): non-text only. Icon strokes, chart axes, disabled marks.
- **Rule** (`#D0D5DD`): borders on inputs and interactive edges.
- **Hairline** (`#EAECF0`): the standard divider and card border.
- **Tint** (`#F2F4F7`): table header rows and inert chips.

### Named Rules

### Dark theme

The brief pinned a light palette only, so these dark values were derived and
every pair was verified rather than eyeballed. All 14 foreground/background
pairs clear WCAG AA in both themes.

| Semantic role | Light | Dark |
| --- | --- | --- |
| `surface` (page and cards) | `#FFFFFF` | `#0D2450` |
| `blue-50` (card fill) | `#F5F8FF` | `#123063` |
| `blue-100` (wash) | `#EAF1FF` | `#123063` |
| `blue-700` (links, accents) | `#1746A2` | `#8FB4F0` |
| `hairline` | `#EAECF0` | `#24406F` |
| `rule` | `#D0D5DD` | `#2E4C7E` |
| `ink` | `#101828` | `#EAF1FF` |
| `graphite` | `#344054` | `#C7D8F5` |
| `slate` | `#475467` | `#9FB6DA` |
| `heading` | `#0A2458` | `#EAF1FF` |
| `btn` (primary fill) | `#0A2458` | `#2258C7` |
| `band` (early-access field) | `#0A2458` | `#1A3A78` |
| `footer` | `#071A3D` | `#04101F` |
| `danger` | `#B42318` | `#FF9B93` |

Two structural notes:

**Navy cannot simply invert.** `navy-900` served as both heading text and button
fill in light mode; those need opposite treatment in dark. So semantics were
split from the palette: `heading` and `btn` are separate tokens, and the raw
`navy-*` values stay fixed for surfaces that are dark in both themes.

**`band` is lighter than `card` in dark.** At first both landed on `#123063`,
which made the early-access field indistinguishable from a card and broke The
Navy Signature Rule. The band is now `#1A3A78`.

### Named Rules

**The White Ground Rule.** White is the page, and it does not alternate.
Sections share one ground and are separated by spacing, not by banding. The only
coloured fields on the whole page are the early-access band and the footer, both
navy, both at the end. A tinted band used to mark a section boundary is
decoration and is removed.

**The Slate Floor Rule.** Secondary text is Slate (`#475467`), never Mist
(`#667085`). Mist clears 4.5:1 on white but fails on Wash Blue (4.34:1), and a
token that is only conditionally legible will eventually be used on the wrong
ground. Mist is reserved for non-text marks.

**The Navy Signature Rule.** Navy fills belong to structure the visitor can
name: the primary button, the early-access band, the footer. A navy field used
for visual interest is decoration and is removed.

## Typography

**Display Font:** Inter (with system-ui, sans-serif)
**Body Font:** Inter (with system-ui, sans-serif)

**Character:** One neutral grotesque doing every job, with hierarchy carried by
weight, size and tracking rather than by a second voice. This is deliberate: an
institutional record does not introduce a display face to be memorable. Inter is
pinned by the brief. Its tight tracking at large sizes (-0.03em) is what keeps a
64px heading from reading as a generic template.

### Hierarchy

- **Display** (700, `clamp(2.5rem, 5.2vw, 4rem)`, 1.02, -0.03em): the single
  page `h1`. One per page.
- **Headline** (700, `clamp(1.875rem, 3.4vw, 2.625rem)`, 1.12, -0.02em): section
  headings.
- **Title** (600, 17px, 1.35, -0.01em): card and step headings.
- **Body** (400, 16 to 17px, 1.65): running copy, held to 62 to 72 characters.
- **Label** (600, 15px, 1.3): navigation, table headers, secondary detail lines.
- **Wordmark** (700, 19px, 1, -0.02em): the company name in the header and
  footer lockup.
- **Ornament** (500, 11px): the tagline beneath the wordmark only.

### Named Rules

**The One Voice Rule.** A second typeface is a change to this document, not a
local choice. Monospace is permitted only for actual code or a measured value,
never as a costume for "technical".

**The 15px Floor Rule.** No text a visitor is expected to read renders below
15px, including navigation, captions and secondary detail. This is why Label is
15px rather than the 13px a label scale usually gets.

There are exactly two exceptions, and both are depictions rather than text:

1. The phone mockup, which draws a phone screen at phone scale. Its type is
   small because a phone's type is small: the mockup is a depiction of a screen,
   not page text. Every figure it shows also appears at full size in **ABC AI in
   Action**, so nothing is only legible inside the phone. Its interactive
   controls are exempt from the floor but not from the target size and contrast
   rules: each stepper is a 24px circle inside a 44px row, labelled for screen
   readers, with a border that clears 3:1 against its card. Each stepper is
   24 × 24px, which is the SC 2.5.8 minimum rather than the 44px this system uses
   for page controls: inside a depiction of a phone, a 44px control would be the
   wrong size for the thing being depicted.
2. The wordmark tagline, which is brand ornament sitting under a 19px name and
   carries no information.

Anything else below 15px is a bug.

**The Measure Rule.** Body copy never exceeds 72 characters. The 1320px rail
sizes layout; a paragraph is capped independently and left-aligned on the rail.

## Layout

A single centred rail of **1320px** maximum width, with gutters of 20px on
mobile, 24px on tablet and 40px on desktop. Every heading, paragraph and card
column starts on that rail: there is exactly one left edge per page, and text
measure is constrained inside the rail rather than by narrowing the container.

Section rhythm is 96px vertical on desktop, 72px on tablet, 56px on mobile, with
more space above a heading than below it. Every section sits on white; rhythm
alone separates them. Paper Blue survives only as a card fill, where a card must
step away from the white ground it sits on.

Breakpoints: mobile below 640px, tablet 640 to 1023px, desktop 1024px and above.
The rail stops growing at 1320px, so a 2560px monitor shows wider margins rather
than wider text.

Grids collapse predictably: four-column card rows go to two on tablet and one on
mobile; the five-step pipeline runs horizontally on desktop and vertically below
1024px; the three-stage demonstration stacks with downward connectors.

## Elevation & Depth

Nearly flat. Depth comes from hairline borders (`#EAECF0`) and from the
white-to-Paper-Blue tonal step, not from shadow stacks. This suits the North
Star: printed records have edges, not drop shadows.

### Shadow Vocabulary

- **Card rest** (`box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04)`): a single
  hairline lift on content cards, barely perceptible and always paired with a
  border.
- **Raised** (`box-shadow: 0 8px 24px -6px rgba(7, 26, 61, 0.14)`): the phone
  mockup only. Carries a real offset and blur. The scrolled header takes a
  Hairline border instead, because a shadow under a white sticky bar on a white
  page reads as a smudge.

### Named Rules

**The Offset Rule.** Every shadow has a vertical offset and a soft blur. A
zero-offset coloured halo is decoration and is removed.

## Shapes

Restrained rectilinear geometry. Corners are 6px on controls, 10px on cards and
14px on large panels. Fully rounded (`999px`) is reserved for genuinely circular marks: the step and stage numerals. Buttons are **not** pills in this
world; that geometry belongs to the product's own system.

Borders are 1px. A coloured border wider than 1px on a card, list item or
callout does not exist here.

## Components

### Buttons

- **Shape:** slightly softened rectangle (6px)
- **Primary:** Record Navy fill, white label, 13px by 22px padding, minimum 44px
  target
- **Hover / Focus:** darkens to Deep Record Navy; focus shows a 2px Signal Blue
  ring at 2px offset
- **Secondary:** white fill, Record Navy label, Rule border; hover fills Paper
  Blue

### Cards / Containers

- **Corner Style:** 10px
- **Background:** white on a Paper Blue band, Paper Blue on a white band
- **Shadow Strategy:** Card rest only, always with a border
- **Border:** 1px Hairline
- **Internal Padding:** 24px

### Inputs / Fields

- **Style:** white fill, 1px Rule border, 6px corners, 13px by 16px padding
- **Focus:** border shifts to Signal Blue plus a 2px ring at 2px offset
- **Error:** border and message in a red that must clear 4.5:1 on white; the
  message names the problem and the fix
- **Disabled:** Tint fill, Slate label, cursor not-allowed

### Navigation

Sticky, white, with a Hairline bottom border that appears on scroll. Links are
Label scale in Slate, going Record Navy on hover. Below 1024px the links collapse
into a disclosure panel that pushes content down rather than overlaying it, so no
scroll lock is needed.

There is deliberately **no active-section highlight**. Scroll-spy on a
single-page site needs an observer per section and an `aria-current` that changes
under the reader mid-scroll; the page is short enough that the cost is not
earned. If it is ever added, the active link takes Record Navy and
`aria-current="true"`.

### Comparison Table (signature component)

The product demonstration's core. Retailer columns as Label-scale headers on a
Tint row, prices right-aligned and tabular (`font-variant-numeric:
tabular-nums`), and the winning cell per row marked with a Wash Blue fill, a
Live Blue value and a text label. **The selected cell never relies on colour
alone.** Every figure in it is illustrative and the block carries a visible
"example" caption.

## Do's and Don'ts

### Do:

- **Do** keep white as the dominant ground and treat every coloured field as an
  event.
- **Do** use Slate (`#475467`) for secondary text on every background.
- **Do** align every element to the single 1320px rail, and cap paragraphs at 72
  characters inside it.
- **Do** give each shadow a real offset and blur.
- **Do** mark the winning price with fill, value colour and a text label
  together.
- **Do** label every illustrative figure as an example where a visitor could
  read it as fact.
- **Do** keep the retailer strip's caption as "compares current listings across".
  The logos are rendered, but written rights are outstanding, so the wording and
  the text-wordmark fallback are both load-bearing.

### Don't:

- **Don't** use Mist (`#667085`) for text.
- **Don't** introduce a second typeface, or monospace as a technical costume.
- **Don't** ship a dark theme on this surface.
- **Don't** use gradient text, glows, glass, or a coloured border above 1px.
- **Don't** place two coloured bands next to each other.
- **Don't** use pill-shaped buttons; that geometry belongs to the product.
- **Don't** show code editors, terminals, robots, or abstract AI illustration.
- **Don't** state or imply that any retailer sponsors, endorses or partners with
  ABC Teknology.

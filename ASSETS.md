# Assets

Every image the site needs is now on disk. This file records what each slot
expects, so a future swap does not have to be reverse-engineered from the code.

[ImagePlaceholder](components/ui/ImagePlaceholder.tsx) checks for each file at
build time. If one is ever deleted, the slot degrades to a dashed box at the
right aspect ratio instead of a broken image, and the layout does not shift.

## Photographs in place

| Path | Aspect | Size | Used in |
| --- | --- | --- | --- |
| `public/media/uae-skyline.jpg` | **16:9** landscape | 1600 × 900, 206 KB | Built for the UAE |

### uae-skyline.jpg

The wide Dubai skyline, landscape rather than the tall crop: this slot is 16:9
and the section treats the skyline as supporting context beside the text, not as
its subject.

### The kitchen photograph was removed

`public/media/hero-kitchen.jpg` used to sit in the hero with the phone mockup
overlapping its lower-left corner. It has been deleted at your request. The hero
is now the headline and the interactive ABC AI mockup, with nothing behind them.

If a hero photograph is ever wanted again, the slot was 4:5 portrait at
1200 × 1500 and used `object-cover` inside a rounded panel.

## Product thumbnails for the phone mockup

The mockup's product strip expects four square images and renders each at 64px.
**Until they exist it draws a simple illustration instead**
([ProductGlyph](components/visuals/ProductGlyph.tsx)), so the site is complete
without them: these are an upgrade, not a blocker.

| Path | Product | Size |
| --- | --- | --- |
| `public/media/products/milk.jpg` | 2L milk bottle or carton | 400 × 400 |
| `public/media/products/basmati-rice.jpg` | Basmati rice bag | 400 × 400 |
| `public/media/products/eggs.jpg` | Egg carton | 400 × 400 |
| `public/media/products/chicken-breast.jpg` | Chicken breast pack | 400 × 400 |

Square crop, product centred, plain or white background. They render at 64px
wide, so detail is lost anyway; a clear silhouette matters more than resolution.

### Sourcing them

**I cannot fetch these for you.** I have no web access in this session, and I
will not invent retailer URLs: product links change constantly and made-up ones
would simply 404. To pull them yourself:

1. Search the retailer for the product (for example `amazon.ae` → "Almarai milk
   2L").
2. Open the product page, right-click the main image, "Save image as".
3. Crop square and save at the path above.

**On rights.** You have decided to use retailer imagery and I have built to that.
The one thing worth doing: joining each retailer's affiliate programme normally
grants explicit image rights and often a stable CDN URL, which converts this from
accepted risk into an actual licence. That is a ten-minute job and it also covers
the logo question that is still outstanding.

If you would rather avoid it entirely, Unsplash and Pexels have generic milk,
rice, eggs and chicken shots that are free for commercial use with no
attribution, and the drawn fallback is already a legitimate ship.

## Already in place

| Path | Notes |
| --- | --- |
| `public/brand/logo.png` | ABC AI mark. **PNG only.** An SVG would be better: the header renders it at 44px and requests 88px for retina, which is the practical ceiling for this file. |
| `public/media/retailers/amazon.png` | 500 × 281 |
| `public/media/retailers/noon.png` | 1288 × 525 |
| `public/media/retailers/carrefour.png` | 1336 × 264 |
| `public/media/retailers/talabat.png` | 3840 × 812 |

### About the retailer logos

I used the tightly cropped versions already in this workspace rather than the
ones sent in chat. The chat versions are ~3:2 with the mark small in the middle
of a large white field, which would have rendered the marks tiny inside the
strip. These are cropped to the mark itself.

Their aspect ratios run from 1.78 to 5.06, so each one has a **hand-tuned render
height** in [RetailerLogo](components/visuals/RetailerLogo.tsx). A single shared
height makes the wide wordmarks look far bigger than the compact ones. If you
swap any file, update its `width`, `height` and `display` values in that table.

**Rights are still not confirmed in writing.** The site never says or implies
that any retailer sponsors, endorses or partners with ABC Teknology: the caption
reads "compares current listings across". If clearance is ever refused,
`RetailerLogo` already falls back to styled text wordmarks the moment a file is
removed, with no code change.

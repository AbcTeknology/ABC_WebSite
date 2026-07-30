# Assets

Two images are still placeholders. **I can see images pasted into chat but cannot
write their bytes to disk**, so these have to be saved by hand. That is why the
hero shows a dashed box: the PNG is not failing to load, the file does not exist
yet.

Save each file at the exact path below and run `npm run build`. Nothing else
changes: [ImagePlaceholder](components/ui/ImagePlaceholder.tsx) checks for the
file at build time and swaps the real image in automatically. The placeholder
already reserves the final aspect ratio, so the layout will not shift.

## Still needed

| Path | Aspect | Save at | Format | Used in |
| --- | --- | --- | --- | --- |
| `public/media/hero-kitchen.jpg` | **4:5** portrait | 1200 × 1500 | JPG or WebP | Hero, right side |
| `public/media/uae-skyline.jpg` | **16:9** landscape | 1600 × 900 | JPG or WebP | Built for the UAE |

### hero-kitchen.jpg

The kitchen photograph: a shopper with her phone and a bag of groceries.

The slot is 4:5 and uses `object-cover`, so a source a little off 4:5 still fills
correctly without distortion. Save at 1200 × 1500 to match the declared
dimensions exactly and avoid a layout shift as it loads.

It is treated as `framed`: cropped to fill a rounded panel. That is correct for a
photograph with its own background. The ABC AI phone mockup overlaps its
lower-left corner so it reads as the screen she is looking at, and it carries a
visible "illustrative example" label because it shows prices and a total.

### uae-skyline.jpg

The wide Dubai skyline. Save the **landscape** version, not the tall one: this
slot is 16:9 and the section treats the skyline as supporting context beside the
text, not as its subject.

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

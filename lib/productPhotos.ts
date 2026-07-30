import fs from "node:fs";
import path from "node:path";

const slugs: Record<string, string> = {
  Milk: "milk",
  "Basmati rice": "basmati-rice",
  Eggs: "eggs",
  "Chicken breast": "chicken-breast",
};

export type ProductPhotos = Record<string, string | null>;

export function productPhotos(): ProductPhotos {
  const out: ProductPhotos = {};
  for (const [item, slug] of Object.entries(slugs)) {
    const rel = `media/products/${slug}.jpg`;
    const exists = fs.existsSync(path.join(process.cwd(), "public", rel));
    out[item] = exists ? `/${rel}` : null;
  }
  return out;
}

import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const logos: Record<
  string,
  { readonly width: number; readonly height: number; readonly display: number }
> = {
  Amazon: { width: 500, height: 281, display: 30 },
  Noon: { width: 1288, height: 525, display: 26 },
  Carrefour: { width: 1336, height: 264, display: 20 },
  Talabat: { width: 3840, height: 812, display: 19 },
};

type RetailerLogoProps = {
  readonly name: string;
};

export function RetailerLogo({ name }: RetailerLogoProps) {
  const slug = name.toLowerCase();
  const meta = logos[name];
  const exists =
    meta !== undefined &&
    fs.existsSync(
      path.join(process.cwd(), "public", "media", "retailers", `${slug}.png`),
    );

  if (!exists || !meta) {
    return (
      <span className="text-navy-900 text-lg font-bold tracking-[-0.02em] sm:text-xl">
        {name}
      </span>
    );
  }

  return (
    <Image
      src={`/media/retailers/${slug}.png`}
      alt={name}
      width={meta.width}
      height={meta.height}
      style={{ height: meta.display, width: "auto" }}
      className="max-w-full object-contain"
    />
  );
}

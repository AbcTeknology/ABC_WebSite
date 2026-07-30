import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type ImagePlaceholderProps = {
  readonly src: string;
  readonly alt: string;
  readonly label: string;
  readonly detail: string;
  readonly width: number;
  readonly height: number;
  readonly className?: string;
  readonly priority?: boolean;
  readonly treatment?: "framed" | "cutout";
};

export function ImagePlaceholder({
  src,
  alt,
  label,
  detail,
  width,
  height,
  className,
  priority = false,
  treatment = "framed",
}: ImagePlaceholderProps) {
  const exists = fs.existsSync(
    path.join(process.cwd(), "public", src.replace(/^\//, "")),
  );
  if (exists) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={cn(
          treatment === "cutout"
            ? "h-auto w-full object-contain"
            : "object-cover",
          className,
        )}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "border-rule flex flex-col items-center justify-center gap-2 border border-dashed bg-blue-50 p-6 text-center",
        className,
      )}
    >
      <ImageIcon
        aria-hidden="true"
        className="text-mist size-7"
        strokeWidth={1.5}
      />
      <span className="text-graphite text-[0.9375rem] font-semibold">
        {label}
      </span>
      <span className="text-slate max-w-[24ch] text-[0.9375rem] leading-snug">
        {detail}
      </span>
    </div>
  );
}

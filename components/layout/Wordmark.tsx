import Image from "next/image";
import { company } from "@/content/site";
import { cn } from "@/lib/cn";

type WordmarkProps = {
  readonly className?: string;
  readonly tone?: "dark" | "onNavy";
  readonly size?: number;
};

export function Wordmark({
  className,
  tone = "dark",
  size = 40,
}: WordmarkProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/brand/logo.png"
        alt=""
        width={size * 2}
        height={size * 2}
        style={{ width: size, height: size }}
        className="rounded-sm"
        priority
      />
      <span
        className={cn(
          "text-[1.1875rem] font-bold tracking-[-0.02em] whitespace-nowrap",
          tone === "onNavy" ? "text-white" : "text-heading",
        )}
      >
        {company.legalName}
      </span>
    </span>
  );
}

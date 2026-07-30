import Image from "next/image";
import { company } from "@/content/site";
import { cn } from "@/lib/cn";

type WordmarkProps = {
  readonly className?: string;
  readonly tone?: "dark" | "onNavy";
  readonly showTagline?: boolean;
  readonly size?: number;
};

export function Wordmark({
  className,
  tone = "dark",
  showTagline = false,
  size = 44,
}: WordmarkProps) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <Image
        src="/brand/logo.png"
        alt=""

        width={size * 2}
        height={size * 2}
        style={{ width: size, height: size }}
        className="rounded-sm"
        priority
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "text-[1.1875rem] font-bold tracking-[-0.02em] whitespace-nowrap",
            tone === "onNavy" ? "text-white" : "text-navy-900",
          )}
        >
          {company.legalName}
        </span>
        {showTagline ? (
          <span
            className={cn(
              "mt-1 hidden text-[0.6875rem] font-medium whitespace-nowrap sm:block",
              tone === "onNavy" ? "text-blue-100" : "text-slate",
            )}
          >
            {company.tagline}
          </span>
        ) : null}
      </span>
    </span>
  );
}

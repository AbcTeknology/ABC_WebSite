import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  readonly children: ReactNode;
  readonly subheading?: string;
  readonly id?: string;
  readonly className?: string;
  readonly tone?: "dark" | "onNavy";
};

export function SectionHeading({
  children,
  subheading,
  id,
  className,
  tone = "dark",
}: SectionHeadingProps) {
  return (
    <div className={cn(className)}>
      <h2
        id={id}
        className={cn(
          "text-3xl leading-[1.12] font-bold tracking-[-0.02em] text-balance md:text-4xl lg:text-[2.625rem]",
          tone === "onNavy" ? "text-white" : "text-heading",
        )}
      >
        {children}
      </h2>
      {subheading ? (
        <p
          className={cn(
            "mt-3 text-[1.0625rem] font-semibold",
            tone === "onNavy" ? "text-onnavy" : "text-blue-700",
          )}
        >
          {subheading}
        </p>
      ) : null}
    </div>
  );
}

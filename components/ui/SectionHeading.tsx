import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  readonly children: ReactNode;
  readonly intro?: string;
  readonly as?: "h2" | "h3";
  readonly className?: string;
};

export function SectionHeading({
  children,
  intro,
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <Tag
        className={cn(
          "font-heading font-bold tracking-tight text-balance",
          Tag === "h2" ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl",
        )}
      >
        {children}
      </Tag>
      {intro ? (
        <p className="text-muted mt-4 text-lg text-pretty">{intro}</p>
      ) : null}
    </div>
  );
}

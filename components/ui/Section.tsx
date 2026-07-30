import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  readonly children: ReactNode;
  readonly id?: string;
  readonly className?: string;
  readonly tone?: "white" | "navy";
  readonly spacing?: "default" | "tight";
  readonly labelledBy?: string;
};

const spacings = {
  default: "py-14 md:py-[72px] lg:py-24",
  tight: "py-8 md:py-10",
} as const;

const tones = {
  white: "bg-surface",
  navy: "on-navy bg-band text-white",
} as const;

export function Section({
  children,
  id,
  className,
  tone = "white",
  spacing = "default",
  labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(spacings[spacing], tones[tone], className)}
    >
      {children}
    </section>
  );
}

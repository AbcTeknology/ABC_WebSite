import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  readonly children: ReactNode;
  readonly className?: string;
  /**
   * Which background the card sits on. Tonal layering only works if the card
   * steps away from its parent: on the page it lifts to `surface`, and inside
   * a `surface` band it drops to `card`. Getting this wrong makes the card
   * disappear, which is what a single fixed fill did.
   */
  readonly on?: "page" | "band";
};

export function Card({ children, className, on = "page" }: CardProps) {
  return (
    <div
      className={cn(
        "border-border rounded-2xl border p-6",
        on === "page" ? "bg-surface" : "bg-card",
        className,
      )}
    >
      {children}
    </div>
  );
}

type PillProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

/** Supporting chip. Soft accent only, never the full accent fill. */
export function Pill({ children, className }: PillProps) {
  return (
    <span
      className={cn(
        "bg-accent-soft text-accent-soft-text inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        className,
      )}
    >
      {children}
    </span>
  );
}

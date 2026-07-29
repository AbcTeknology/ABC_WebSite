import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  readonly children: ReactNode;
  readonly id?: string;
  readonly className?: string;
  /** `band` lifts the section onto `surface` so it reads as its own block. */
  readonly tone?: "page" | "band";
  /**
   * `flush-top` removes the top padding, for a section right under a page
   * header. `tight` suits a band holding a single row of content.
   */
  readonly spacing?: "default" | "flush-top" | "tight";
};

/**
 * Vertical rhythm for a page band.
 *
 * `spacing` is a prop rather than something callers patch via `className`.
 * Passing `pt-0` alongside `py-16 sm:py-24` looks like it works and does not:
 * the `sm:` rule is emitted later in the stylesheet and wins from 640px up,
 * leaving a full 96px of dead space. Encoding the variants here makes that
 * mistake unrepresentable.
 */
const spacings = {
  default: "py-16 sm:py-24",
  "flush-top": "pb-16 sm:pb-24",
  tight: "py-10 sm:py-12",
} as const;

export function Section({
  children,
  id,
  className,
  tone = "page",
  spacing = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24",
        spacings[spacing],
        // Tonal layering: page -> surface. In light mode `card` sits only
        // 5/3/1 away from the page background and reads as a rendering
        // artefact rather than a band, so bands use `surface`.
        tone === "band" && "bg-surface border-border border-y",
        className,
      )}
    >
      {children}
    </section>
  );
}

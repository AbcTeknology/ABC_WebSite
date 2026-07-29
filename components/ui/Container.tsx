import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

/**
 * The page's single left/right rail.
 *
 * There is deliberately no width variant. Every piece of content on the site
 * starts at the same left edge, and text measure is constrained *inside* this
 * with `Prose` rather than by swapping in a narrower centred container. Two
 * container widths on one page produce two competing left margins, which is
 * exactly the misalignment this replaced.
 *
 * The 1280px cap sizes the *layout* (grids, cards, the pipeline diagram), not
 * the reading measure. Body text is capped separately by `Prose` at roughly 75
 * characters, so widening this never widens a paragraph. Below the cap the
 * container is fluid, and bands stay full-bleed at every width.
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

type ProseProps = {
  readonly children: ReactNode;
  readonly className?: string;
  /** `wide` suits short lead paragraphs; `default` suits running body copy. */
  readonly measure?: "default" | "wide";
};

/**
 * Readable line length, left-aligned on the container rail.
 *
 * Constrains the right edge only. The left edge stays on the rail, so headings
 * and body copy line up down the whole page.
 */
export function Prose({
  children,
  className,
  measure = "default",
}: ProseProps) {
  return (
    <div
      className={cn(measure === "wide" ? "max-w-3xl" : "max-w-2xl", className)}
    >
      {children}
    </div>
  );
}

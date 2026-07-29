"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  readonly children: ReactNode;
  readonly className?: string;
  /** Seconds. Use small offsets to sequence a heading before its content. */
  readonly delay?: number;
  readonly as?: "div" | "li";
};

/**
 * Entry animation for content arriving in the viewport.
 *
 * Motivated, not decorative: it establishes reading order, so a heading lands
 * before the block it introduces. Deliberately small (16px, half a second) —
 * the brand voice is "clarity over decoration", so this should register as
 * pacing rather than as an effect.
 *
 * Under `prefers-reduced-motion` it renders static with no transform, and it
 * fires once rather than replaying on every scroll pass.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = as === "li" ? motion.li : motion.div;

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </Tag>
  );
}

type RevealListProps = {
  readonly children: readonly ReactNode[];
  readonly className?: string;
  readonly itemClassName?: string;
};

/**
 * Staggered variant for grids and lists.
 *
 * The stagger is short (60ms) so a four-card grid finishes in under a quarter
 * second. Anything slower turns a scan into a wait.
 */
export function RevealList({
  children,
  className,
  itemClassName,
}: RevealListProps) {
  return (
    <ul className={className}>
      {children.map((child, index) => (
        <Reveal
          as="li"
          // Index is a stable key here: these lists are static content from
          // `content/copy.ts` and never reorder.
          key={index}
          className={itemClassName}
          delay={index * 0.06}
        >
          {child}
        </Reveal>
      ))}
    </ul>
  );
}

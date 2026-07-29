import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary";

type ButtonLinkProps = {
  readonly href: string;
  readonly children: ReactNode;
  readonly variant?: Variant;
  readonly className?: string;
  /** External targets render a plain anchor rather than a client-side Link. */
  readonly external?: boolean;
};

// `active:translate-y-px` gives the press a physical acknowledgement rather
// than a colour-only change.
const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-[background-color,color,transform] duration-200 active:translate-y-px";

const variants: Record<Variant, string> = {
  // Accent is reserved for primary actions. See "The One Accent Rule".
  primary: "bg-accent text-on-accent hover:opacity-90",
  secondary: "bg-card text-text border border-border hover:bg-surface",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], className);

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

type DisabledButtonProps = {
  readonly children: ReactNode;
  readonly hint: string;
  readonly className?: string;
};

/**
 * A non-interactive stand-in for an action that is not available yet.
 *
 * Used by the store badges while neither app listing is live: a link to
 * nowhere is worse than an honest label.
 */
export function PendingAction({
  children,
  hint,
  className,
}: DisabledButtonProps) {
  return (
    <span
      className={cn(
        base,
        "border-border text-muted cursor-default border border-dashed",
        className,
      )}
      title={hint}
    >
      {children}
    </span>
  );
}

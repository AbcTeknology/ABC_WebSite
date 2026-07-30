import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "onNavy";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-[22px] py-[13px] text-[0.9375rem] font-semibold whitespace-nowrap transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-navy-900 text-white hover:bg-navy-950",
  secondary: "bg-white text-navy-900 border border-rule hover:bg-blue-50",
  onNavy: "bg-white text-navy-900 hover:bg-blue-50",
};

type ButtonLinkProps = {
  readonly href: string;
  readonly children: ReactNode;
  readonly variant?: Variant;
  readonly className?: string;
  readonly external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(base, variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

type ButtonProps = {
  readonly children: ReactNode;
  readonly variant?: Variant;
  readonly className?: string;
  readonly type?: "button" | "submit";
};

export function Button({
  children,
  variant = "primary",
  className,
  type = "button",
}: ButtonProps) {
  return (
    <button type={type} className={cn(base, variants[variant], className)}>
      {children}
    </button>
  );
}

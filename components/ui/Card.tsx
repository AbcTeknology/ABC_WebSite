import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  readonly children: ReactNode;
  readonly className?: string;
  readonly on?: "white" | "paper";
  readonly as?: "div" | "li";
};

export function Card({
  children,
  className,
  on = "white",
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={cn(
        "border-hairline rounded-md border p-6 shadow-[0_1px_2px_rgba(16,24,40,0.04)]",
        on === "white" ? "bg-blue-50" : "bg-surface",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type IconFrameProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

export function IconFrame({ children, className }: IconFrameProps) {
  return (
    <span
      className={cn(
        "border-hairline bg-surface inline-flex size-10 shrink-0 items-center justify-center rounded-sm border text-blue-700",
        className,
      )}
    >
      {children}
    </span>
  );
}

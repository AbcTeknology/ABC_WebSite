import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1180px] px-5 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}

type ProseProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

export function Prose({ children, className }: ProseProps) {
  return <div className={cn("max-w-[38rem]", className)}>{children}</div>;
}

"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

/**
 * Theme switch.
 *
 * Both icons render and CSS picks the visible one off the `.dark` class that
 * next-themes puts on `<html>`. That avoids the usual mounted-state dance: the
 * server and client emit identical markup, so there is nothing to mismatch and
 * no hydration flip.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="border-border text-muted hover:text-text hover:bg-card inline-flex size-11 items-center justify-center rounded-full border transition-colors"
      aria-label="Toggle light and dark theme"
    >
      <Sun aria-hidden="true" className="hidden size-4 dark:block" />
      <Moon aria-hidden="true" className="size-4 dark:hidden" />
    </button>
  );
}

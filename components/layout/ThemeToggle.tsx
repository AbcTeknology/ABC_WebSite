"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { chrome } from "@/content/copy";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="border-rule text-slate hover:text-heading inline-flex size-11 items-center justify-center rounded-sm border transition-colors hover:bg-blue-50"
      aria-label={chrome.themeToggle}
    >
      <Sun aria-hidden="true" className="hidden size-4 dark:block" />
      <Moon aria-hidden="true" className="size-4 dark:hidden" />
    </button>
  );
}

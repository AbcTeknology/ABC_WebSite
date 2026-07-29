"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { company, navLinks } from "@/content/site";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string): boolean {
    return pathname === href || pathname === `${href}/`;
  }

  return (
    <header className="border-border bg-bg/85 sticky top-0 z-50 border-b backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl items-center gap-4 px-5 py-3 sm:px-8"
      >
        <Link
          href="/"
          className="font-heading flex items-center gap-2.5 font-bold tracking-tight"
        >
          <Image
            src="/brand/logo.png"
            alt=""
            width={30}
            height={30}
            className="rounded-lg"
            priority
          />
          <span className="text-base">{company.legalName}</span>
        </Link>

        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "hover:text-text rounded-full px-3 py-2 text-sm font-medium transition-colors",
                  isActive(link.href) ? "text-text" : "text-muted",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="border-border text-muted hover:text-text inline-flex size-11 items-center justify-center rounded-full border transition-colors lg:hidden"
          >
            {open ? (
              <X aria-hidden="true" className="size-4" />
            ) : (
              <Menu aria-hidden="true" className="size-4" />
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-border border-t lg:hidden">
          <ul className="mx-auto w-full max-w-6xl px-5 py-3 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  // Closing here rather than in an effect on `pathname`:
                  // navigating is the only way to leave this menu, so the
                  // click is the honest trigger.
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "block rounded-lg px-2 py-3 text-sm font-medium",
                    isActive(link.href) ? "text-text" : "text-muted",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}

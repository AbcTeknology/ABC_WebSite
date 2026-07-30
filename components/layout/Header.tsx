"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { chrome } from "@/content/copy";
import { company, earlyAccessEmail, navLinks } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "./ThemeToggle";
import { Wordmark } from "./Wordmark";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={cn(
        "bg-surface sticky top-0 z-50",
        scrolled && "border-hairline border-b",
      )}
    >
      <Container>
        <nav
          aria-label="Primary"
          className="flex h-16 items-center gap-3 lg:h-[72px] lg:gap-6"
        >
          <a href="#top" className="min-w-0 shrink rounded-sm">
            <Wordmark />
            <span className="sr-only">{company.legalName}, back to top</span>
          </a>
          <ul className="ml-auto hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate hover:text-heading rounded-sm px-2.5 py-2 text-[0.9375rem] font-semibold whitespace-nowrap transition-colors hover:bg-blue-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <ThemeToggle />
            <span className="hidden sm:block">
              <ButtonLink
                href={`mailto:${earlyAccessEmail}?subject=ABC%20AI%20early%20access`}
              >
                {chrome.headerCta}
                <ArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
            </span>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? chrome.menuClose : chrome.menuOpen}
              className="border-rule text-heading inline-flex size-11 items-center justify-center rounded-sm border lg:hidden"
            >
              {open ? (
                <X aria-hidden="true" className="size-5" />
              ) : (
                <Menu aria-hidden="true" className="size-5" />
              )}
            </button>
          </div>
        </nav>
      </Container>
      {open ? (
        <div id="mobile-nav" className="border-hairline border-t lg:hidden">
          <Container className="py-2">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-graphite hover:text-heading block rounded-sm px-1 py-3 text-[0.9375rem] font-semibold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <span className="my-3 block sm:hidden">
              <ButtonLink
                href={`mailto:${earlyAccessEmail}?subject=ABC%20AI%20early%20access`}
                className="w-full"
              >
                {chrome.headerCta}
                <ArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
            </span>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

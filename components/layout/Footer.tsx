import Link from "next/link";
import { chrome } from "@/content/copy";
import { company, contactRoutes, legalLinks, navLinks } from "@/content/site";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();
  // With no /contact page, the footer is the only place a visitor can find a
  // way to reach the company, so it carries both public addresses rather than
  // just the general one.
  const publicRoutes = contactRoutes.filter((route) =>
    ["General", "App support"].includes(route.label),
  );

  return (
    // Sits on the page background, not a lifted surface. The closing CTA above
    // it is already a `surface` band, and stacking two lifted tones produced
    // three near-identical dark blues with no readable separation. Dropping
    // back to the page tone makes the CTA band read as the raised element and
    // the footer as the base, which is the correct hierarchy.
    <footer className="border-border border-t">
      <Container className="pt-14 pb-10">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-heading text-lg font-bold tracking-tight">
              {company.legalName}
            </p>
            <p className="text-muted mt-3 max-w-sm text-sm">
              {chrome.footerBlurb}
            </p>
            <StoreBadges className="mt-6" showPendingNote />
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold tracking-wide uppercase">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-text text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold tracking-wide uppercase">
              Contact
            </h2>
            <ul className="mt-4 space-y-2.5">
              {publicRoutes.map((route) => (
                <li key={route.email}>
                  <a
                    href={`mailto:${route.email}`}
                    className="text-muted hover:text-text text-sm transition-colors"
                  >
                    {route.email}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="mt-8 text-xs font-semibold tracking-wide uppercase">
              Legal
            </h2>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-text text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-muted border-border mt-14 border-t pt-8 text-center text-xs">
          © {year} {company.copyrightHolder}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

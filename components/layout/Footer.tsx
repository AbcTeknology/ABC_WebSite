import { chrome } from "@/content/copy";
import { company, contactRoutes, legalLinks, navLinks } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "./Wordmark";

const companyLinks = navLinks.filter((link) => link.href !== "#contact");

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-footer text-onnavy">
      <Container className="pt-14 lg:pt-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Wordmark tone="onNavy" />
            <p className="text-onnavy/85 mt-4 max-w-[30ch] text-[0.9375rem]">
              {chrome.footerBlurb}
            </p>
          </div>
          <nav aria-labelledby="footer-company">
            <h2
              id="footer-company"
              className="text-[0.9375rem] font-semibold text-white"
            >
              {chrome.footerCompany}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-onnavy/85 text-[0.9375rem] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-labelledby="footer-legal">
            <h2
              id="footer-legal"
              className="text-[0.9375rem] font-semibold text-white"
            >
              {chrome.footerLegal}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-onnavy/85 text-[0.9375rem] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="text-[0.9375rem] font-semibold text-white">
              {chrome.footerContact}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {contactRoutes.map((route) => (
                <li key={route.email}>
                  <a
                    href={`mailto:${route.email}`}
                    className="text-onnavy/85 text-[0.9375rem] transition-colors hover:text-white"
                  >
                    {route.email}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-onnavy/70 mt-6 text-[0.9375rem]">
              {chrome.footerLocationLabel}
              <span className="mt-0.5 block text-white">{company.country}</span>
            </p>
          </div>
        </div>
      </Container>
      <div className="mt-12 border-t border-white/15">
        <Container className="py-5">
          <p className="text-onnavy/70 text-center text-[0.9375rem]">
            © {year} {company.copyrightHolder}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}

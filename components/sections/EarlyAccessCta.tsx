"use client";

import { AlertCircle, ArrowRight } from "lucide-react";
import { useId, useState } from "react";
import { earlyAccess } from "@/content/copy";
import { earlyAccessEmail } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export function EarlyAccessCta() {
  const inputId = useId();
  const errorId = useId();
  const noteId = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [handedOff, setHandedOff] = useState(false);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();
    const looksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (!looksValid) {
      setError(earlyAccess.invalidEmail);
      setHandedOff(false);
      return;
    }

    setError(null);
    setHandedOff(true);
    const subject = encodeURIComponent(earlyAccess.mailtoSubject);
    const body = encodeURIComponent(
      `Please add this address to the ABC AI early-access list: ${value}`,
    );
    window.location.href = `mailto:${earlyAccessEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <Section id="contact" tone="navy" labelledBy="cta-heading">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,460px)] lg:items-center lg:gap-14">
          <div>
            <SectionHeading id="cta-heading" tone="onNavy">
              {earlyAccess.heading}
            </SectionHeading>
            <p className="text-onnavy mt-4 max-w-[36rem] text-[1.0625rem] text-pretty">
              {earlyAccess.body}
            </p>
          </div>
          <form onSubmit={handleSubmit} noValidate>
            <label
              htmlFor={inputId}
              className="text-onnavy block text-[0.9375rem] font-semibold"
            >
              {earlyAccess.emailLabel}
            </label>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <input
                id={inputId}
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                placeholder={earlyAccess.emailPlaceholder}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (error) setError(null);
                }}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? errorId : noteId}
                className={cn(
                  "min-h-11 w-full rounded-sm bg-white px-4 py-[13px] text-[0.9375rem] text-[#101828] placeholder:text-[#667085] focus-visible:outline-offset-4",
                  error ? "border-danger border-2" : "border border-white/25",
                )}
              />
              <button
                type="submit"
                className="text-navy-900 inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-white px-[22px] py-[13px] text-[0.9375rem] font-semibold whitespace-nowrap transition-colors duration-200 hover:bg-[#eaf1ff] focus-visible:outline-offset-4"
              >
                {earlyAccess.submit}
                <ArrowRight aria-hidden="true" className="size-4" />
              </button>
            </div>
            {error ? (
              <p
                id={errorId}
                role="alert"
                className="mt-2 inline-flex items-start gap-2 rounded-sm bg-white px-3 py-2 text-[0.9375rem] font-semibold text-[#b42318]"
              >
                <AlertCircle
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0"
                />
                {error}
              </p>
            ) : (
              <p id={noteId} className="text-onnavy mt-2 text-[0.9375rem]">
                {earlyAccess.mailtoNote}
              </p>
            )}

            <p aria-live="polite" className="sr-only">
              {handedOff ? earlyAccess.success : ""}
            </p>
          </form>
        </div>
      </Container>
    </Section>
  );
}

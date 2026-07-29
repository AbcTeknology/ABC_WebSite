import { ArrowRight } from "lucide-react";
import { home } from "@/content/copy";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Opening statement.
 *
 * Sits on `surface` rather than an accent fill. The design system reserves
 * orange for primary actions and price emphasis and explicitly rules out large
 * decorative fills, so a full-bleed orange band put roughly 60% of the opening
 * viewport in accent colour and broke the rule the rest of the site follows.
 *
 * The hero now carries weight through type scale and tonal layering. Orange
 * appears once, on the single primary action.
 *
 * Typographic by design. There is no device mockup and no screenshot, so the
 * headline has to do the work.
 */
export function Hero() {
  const { hero } = home;

  return (
    <section className="border-border bg-surface border-b">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <h1 className="font-heading max-w-4xl text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-6xl">
            {hero.headline}
          </h1>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="text-muted mt-6 max-w-2xl text-lg text-pretty">
            {hero.body}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {/* The only solid accent in the hero, and the only action a
                visitor can actually take while the stores are pending. */}
            <ButtonLink href="/what-we-offer">
              {hero.secondaryCta}
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>

            <StoreBadges />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

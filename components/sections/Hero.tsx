import { ArrowRight, BadgeCheck, MapPin, Scale, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { hero } from "@/content/copy";
import { earlyAccessEmail } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Prose } from "@/components/ui/Container";
import { AgentDemo } from "@/components/visuals/AgentDemo";
import { productPhotos } from "@/lib/productPhotos";

const benefitIcons: readonly LucideIcon[] = [Wallet, Scale, BadgeCheck, MapPin];

export function Hero() {
  return (
    <div id="top" className="bg-surface">
      <Container className="pt-10 pb-14 lg:pt-16 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_364px] lg:gap-12">
          <div className="rise">
            <h1 className="text-heading text-[clamp(2.5rem,5.2vw,4rem)] leading-[1.02] font-bold tracking-[-0.03em] text-balance">
              {hero.headline}
            </h1>
            <Prose>
              <p className="text-slate mt-6 text-[1.0625rem] text-pretty">
                {hero.body}
              </p>
            </Prose>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href={`mailto:${earlyAccessEmail}?subject=ABC%20AI%20early%20access`}
                className="max-sm:w-full"
              >
                {hero.primaryCta}
                <ArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
              <ButtonLink
                href="#how-it-works"
                variant="secondary"
                className="max-sm:w-full"
              >
                {hero.secondaryCta}
              </ButtonLink>
            </div>
            <ul className="mt-12 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {hero.benefits.map((benefit, index) => {
                const Icon = benefitIcons[index];
                return (
                  <li key={benefit.title} className="flex items-start gap-3">
                    {Icon ? (
                      <Icon
                        aria-hidden="true"
                        className="mt-0.5 size-5 shrink-0 text-blue-700"
                        strokeWidth={1.75}
                      />
                    ) : null}
                    <span>
                      <span className="text-heading block text-[0.9375rem] font-semibold">
                        {benefit.title}
                      </span>
                      <span className="text-slate block text-[0.9375rem]">
                        {benefit.detail}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex min-w-0 justify-center lg:justify-end">
            <AgentDemo photos={productPhotos()} />
          </div>
        </div>
      </Container>
    </div>
  );
}

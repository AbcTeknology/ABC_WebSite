import { ArrowRight, BadgeCheck, MapPin, Scale, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { demo, hero } from "@/content/copy";
import { earlyAccessEmail } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Prose } from "@/components/ui/Container";
import { PhoneMockup } from "@/components/visuals/PhoneMockup";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const benefitIcons: readonly LucideIcon[] = [Wallet, Scale, BadgeCheck, MapPin];

export function Hero() {
  return (
    <div id="top" className="bg-white">
      <Container className="pt-10 pb-14 lg:pt-16 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_minmax(0,520px)] lg:gap-10">
          <div className="rise">
            <h1 className="text-navy-900 text-[clamp(2.5rem,5.2vw,4rem)] leading-[1.02] font-bold tracking-[-0.03em] text-balance">
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
            <ul className="border-hairline mt-10 grid gap-x-8 gap-y-5 border-t pt-8 sm:grid-cols-2">
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
                      <span className="text-navy-900 block text-[0.9375rem] font-semibold">
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
          <div className="flex flex-col items-center gap-3 lg:hidden">
            <PhoneMockup />
            <p className="text-slate text-center text-[0.9375rem]">
              {demo.exampleNotice}
            </p>
          </div>
          <div className="relative hidden lg:block">
            <ImagePlaceholder
              label="Kitchen photograph"
              detail="Person with phone and groceries. 1200 x 1500 (4:5), JPG or WebP."
              className="ml-24 aspect-4/5 w-[calc(100%-6rem)] rounded-lg pl-40"
              src="/media/hero-kitchen.jpg"
              alt="A shopper comparing grocery prices on her phone in a kitchen."
              width={1200}
              height={1500}
              treatment="framed"
              priority
            />
            <div className="pointer-events-none absolute bottom-4 left-0 flex flex-col gap-2">
              <PhoneMockup />
              <p className="text-slate w-[268px] text-center text-[0.9375rem]">
                {demo.exampleNotice}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

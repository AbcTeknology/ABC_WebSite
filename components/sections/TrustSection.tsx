import { BadgeX, CreditCard, CookieIcon, EyeOff } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { trust } from "@/content/copy";
import { Container } from "@/components/ui/Container";
import { IconFrame } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const trustIcons: readonly LucideIcon[] = [
  CreditCard,
  EyeOff,
  CookieIcon,
  BadgeX,
];

export function TrustSection() {
  return (
    <Section labelledBy="trust-heading">
      <Container>
        <SectionHeading id="trust-heading">{trust.heading}</SectionHeading>
        <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {trust.items.map((item, index) => {
            const Icon = trustIcons[index];
            return (
              <li key={item.title} className="flex items-start gap-4">
                <IconFrame>
                  {Icon ? (
                    <Icon
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={1.75}
                    />
                  ) : null}
                </IconFrame>
                <div>
                  <h3 className="text-heading text-[1.0625rem] font-semibold tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <p className="text-slate mt-2 text-[0.9375rem] text-pretty">
                    {item.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}

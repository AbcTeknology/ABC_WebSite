import { MessageSquare, Scale, Send, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { offerings } from "@/content/copy";
import { Card, IconFrame } from "@/components/ui/Card";
import { Container, Prose } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons: Record<string, LucideIcon> = {
  MessageSquare,
  Scale,
  Target,
  Send,
};

export function OfferingsSection() {
  return (
    <Section id="what-we-offer" labelledBy="offerings-heading">
      <Container>
        <SectionHeading id="offerings-heading">
          {offerings.heading}
        </SectionHeading>
        <Prose>
          <p className="text-slate mt-4 text-[1.0625rem] text-pretty">
            {offerings.intro}
          </p>
        </Prose>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {offerings.items.map((item) => {
            const Icon = icons[item.icon];
            return (
              <Card as="li" key={item.title} on="white" className="h-full">
                <IconFrame>
                  {Icon ? (
                    <Icon
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={1.75}
                    />
                  ) : null}
                </IconFrame>
                <h3 className="text-heading mt-4 text-[1.0625rem] font-semibold tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-slate mt-2 text-[0.9375rem] text-pretty">
                  {item.body}
                </p>
              </Card>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}

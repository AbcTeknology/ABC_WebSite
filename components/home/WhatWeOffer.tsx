import { MessageSquare, Scale, Send, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { home } from "@/content/copy";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealList } from "@/components/motion/Reveal";

const icons: Record<string, LucideIcon> = {
  MessageSquare,
  Scale,
  Workflow,
  Send,
};

export function WhatWeOffer() {
  const { whatWeOffer } = home;

  return (
    <Section id="what-we-offer" tone="band">
      <Container>
        <Reveal>
          <SectionHeading intro={whatWeOffer.intro}>
            {whatWeOffer.heading}
          </SectionHeading>
        </Reveal>

        <RevealList className="mt-10 grid gap-4 md:grid-cols-2">
          {whatWeOffer.offerings.map((offering) => {
            const Icon = icons[offering.icon];

            return (
              <Card on="band" className="h-full" key={offering.title}>
                {Icon ? (
                  <Icon aria-hidden="true" className="text-accent size-6" />
                ) : null}
                <h3 className="font-heading mt-4 text-lg font-bold">
                  {offering.title}
                </h3>
                <p className="text-muted mt-2 text-sm">{offering.body}</p>
              </Card>
            );
          })}
        </RevealList>
      </Container>
    </Section>
  );
}

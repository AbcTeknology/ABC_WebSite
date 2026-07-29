import { whatWeOffer } from "@/content/copy";
import { Container, Prose } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { RetailerMarquee } from "@/components/visuals/RetailerMarquee";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "What we offer",
  description:
    "ABC AI, multi-retailer price intelligence, conversational AI agents, and WhatsApp ordering. Built for the UAE.",
  path: "/what-we-offer",
});

export default function WhatWeOfferPage() {
  return (
    <>
      <PageHeader headline={whatWeOffer.headline} lead={whatWeOffer.lead} />

      <Section spacing="flush-top">
        <Container>
          <Prose measure="wide" className="space-y-14">
            {whatWeOffer.sections.map((section) => (
              <div key={section.heading}>
                <SectionHeading as="h3">{section.heading}</SectionHeading>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-pretty">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </Prose>
        </Container>
      </Section>

      <Section tone="band" spacing="tight">
        <RetailerMarquee on="band" />
      </Section>

      <Section>
        <Container>
          <SectionHeading>Get ABC AI</SectionHeading>
          <StoreBadges className="mt-8" />
        </Container>
      </Section>
    </>
  );
}

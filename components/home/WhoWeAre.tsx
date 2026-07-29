import { home } from "@/content/copy";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function WhoWeAre() {
  const { whoWeAre } = home;

  return (
    <Section id="who-we-are">
      <Container>
        <Reveal>
          <SectionHeading>{whoWeAre.heading}</SectionHeading>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal delay={0.08} className="space-y-4">
            {whoWeAre.body.map((paragraph) => (
              <p key={paragraph} className="text-lg text-pretty">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.14}>
            <dl className="border-border grid gap-6 border-t pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              {whoWeAre.pillars.map((pillar) => (
                <div key={pillar.title}>
                  <dt className="font-heading text-base font-bold">
                    {pillar.title}
                  </dt>
                  <dd className="text-muted mt-1 text-sm">{pillar.body}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

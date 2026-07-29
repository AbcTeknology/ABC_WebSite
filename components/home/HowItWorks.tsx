import { home } from "@/content/copy";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { UnitPriceMotif } from "@/components/visuals/UnitPriceMotif";
import { Reveal, RevealList } from "@/components/motion/Reveal";

export function HowItWorks() {
  const { howItWorks } = home;

  return (
    <Section id="how-it-works">
      <Container>
        <Reveal>
          <SectionHeading>{howItWorks.heading}</SectionHeading>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          {/* Sequence matters here: the steps are numbered, so they arrive in
              order rather than all at once. */}
          <RevealList className="space-y-6">
            {howItWorks.steps.map((step, index) => (
              <div className="flex gap-4" key={step.title}>
                <span
                  aria-hidden="true"
                  className="bg-accent-soft text-accent-soft-text font-heading flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold">
                    {step.title}
                  </h3>
                  <p className="text-muted mt-1">{step.body}</p>
                </div>
              </div>
            ))}
          </RevealList>

          <Reveal delay={0.12}>
            <div className="border-border bg-surface flex justify-center rounded-2xl border p-8">
              <UnitPriceMotif />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

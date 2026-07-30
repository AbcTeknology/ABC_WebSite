import { howItWorks } from "@/content/copy";
import { Container, Prose } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorksSection() {
  const steps = howItWorks.steps;
  return (
    <Section id="how-it-works" labelledBy="how-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-12">
          <div>
            <SectionHeading id="how-heading">
              {howItWorks.heading}
            </SectionHeading>
            <Prose>
              <p className="text-slate mt-4 text-pretty">{howItWorks.intro}</p>
            </Prose>
          </div>
          <ol className="grid gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-2">
            {steps.map((step, index) => (
              <li key={step.title} className="relative">
                <span
                  aria-hidden="true"
                  className="tabular flex size-8 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-[0.9375rem] font-bold text-blue-700"
                >
                  {index + 1}
                </span>
                {index < steps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="bg-hairline absolute top-4 left-9 hidden h-px lg:block lg:w-[calc(100%-2.25rem)]"
                  />
                ) : null}

                <h3 className="text-navy-900 mt-4 text-[1.0625rem] font-semibold tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="text-slate mt-1.5 text-[0.9375rem] text-pretty">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}

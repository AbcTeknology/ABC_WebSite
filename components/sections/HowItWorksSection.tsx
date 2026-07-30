import { howItWorks } from "@/content/copy";
import { Container, Prose } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorksSection() {
  const steps = howItWorks.steps;
  return (
    <Section id="how-it-works" labelledBy="how-heading">
      <Container>
        <div>
          <SectionHeading id="how-heading">{howItWorks.heading}</SectionHeading>
          <Prose>
            <p className="text-slate mt-4 text-pretty">{howItWorks.intro}</p>
          </Prose>

          <ol className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-5">
            {steps.map((step, index) => (
              <li key={step.title} className="relative">
                <span
                  aria-hidden="true"
                  className="tabular border-hairline flex size-8 items-center justify-center rounded-full border bg-blue-50 text-[0.9375rem] font-bold text-blue-700"
                >
                  {index + 1}
                </span>
                {index < steps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="bg-hairline absolute top-4 left-10 hidden h-px lg:block lg:w-[calc(100%-1.25rem)]"
                  />
                ) : null}

                <h3 className="text-heading mt-4 text-[1.0625rem] font-semibold tracking-[-0.01em]">
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

import { technology } from "@/content/copy";
import { Container, Prose } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PipelineDiagram } from "@/components/visuals/PipelineDiagram";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "How it works",
  description:
    "A multi-stage AI agent pipeline built so every price shown can be trusted.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader headline={technology.headline} lead={technology.lead} />

      <Section spacing="flush-top">
        <Container>
          <SectionHeading intro={technology.pipeline.intro}>
            {technology.pipeline.heading}
          </SectionHeading>
          <div className="mt-10">
            <PipelineDiagram />
          </div>
        </Container>
      </Section>

      <Section tone="band">
        <Container>
          <Prose measure="wide" className="space-y-12">
            {technology.sections.map((section) => (
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

      <Section>
        <Container>
          <SectionHeading>{technology.stack.heading}</SectionHeading>
          <dl className="border-border mt-8 divide-y">
            {technology.stack.items.map((item) => (
              <div
                key={item.title}
                className="grid gap-1 py-4 sm:grid-cols-[220px_1fr] sm:gap-6"
              >
                <dt className="font-heading font-bold">{item.title}</dt>
                <dd className="text-muted">{item.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>
    </>
  );
}

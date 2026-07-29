import { about } from "@/content/copy";
import { Container, Prose } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "A small UAE product team building AI that helps households stop overpaying for groceries.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader headline={about.headline} lead={about.lead} />

      <Section spacing="flush-top">
        <Container>
          <Prose measure="wide" className="space-y-12">
            {about.sections.map((section) => (
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

      <Section tone="band">
        <Container>
          <SectionHeading>{about.howWeWork.heading}</SectionHeading>
          <dl className="mt-8 grid gap-6 md:grid-cols-3">
            {about.howWeWork.pillars.map((pillar) => (
              <div key={pillar.title}>
                <dt className="font-heading text-lg font-bold">
                  {pillar.title}
                </dt>
                <dd className="text-muted mt-2 text-sm">{pillar.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading>{about.mission.heading}</SectionHeading>
          <Prose measure="wide">
            <p className="mt-4 text-lg text-pretty">{about.mission.body}</p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}

import type { LegalSection } from "@/content/legal";
import { Container, Prose } from "./Container";

type LegalDocumentProps = {
  readonly headline: string;
  readonly lastUpdated: string;
  readonly intro: string;
  readonly sections: readonly LegalSection[];
};

export function LegalDocument({
  headline,
  lastUpdated,
  intro,
  sections,
}: LegalDocumentProps) {
  return (
    <Container className="pt-14 pb-20 lg:pt-20">
      <Prose>
        <h1 className="text-heading text-4xl font-bold tracking-[-0.02em] text-balance lg:text-5xl">
          {headline}
        </h1>
        <p className="text-slate mt-4 text-[0.9375rem]">{lastUpdated}</p>
        <p className="text-slate mt-6 text-pretty">{intro}</p>
        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-heading text-xl font-semibold tracking-[-0.01em]">
                {section.title}
              </h2>
              <p className="text-slate mt-3 text-pretty">{section.body}</p>
            </section>
          ))}
        </div>
      </Prose>
    </Container>
  );
}

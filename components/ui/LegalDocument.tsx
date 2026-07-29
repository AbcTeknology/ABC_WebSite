import type { LegalSection } from "@/content/legal";
import { Container, Prose } from "./Container";

type LegalDocumentProps = {
  readonly headline: string;
  readonly lastUpdated: string;
  readonly intro: string;
  readonly sections: readonly LegalSection[];
};

/** Shared rendering for the privacy and terms documents. */
export function LegalDocument({
  headline,
  lastUpdated,
  intro,
  sections,
}: LegalDocumentProps) {
  return (
    <Container className="pt-14 pb-20 sm:pt-20">
      <Prose measure="wide">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
          {headline}
        </h1>
        <p className="text-muted mt-4 text-sm">{lastUpdated}</p>
        <p className="text-muted mt-6 text-pretty">{intro}</p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-heading text-xl font-bold">
                {section.title}
              </h2>
              <p className="text-muted mt-3 text-pretty">{section.body}</p>
            </section>
          ))}
        </div>
      </Prose>
    </Container>
  );
}

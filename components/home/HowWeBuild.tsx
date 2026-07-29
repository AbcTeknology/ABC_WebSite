import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { home } from "@/content/copy";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PipelineDiagram } from "@/components/visuals/PipelineDiagram";
import { Reveal } from "@/components/motion/Reveal";

export function HowWeBuild() {
  const { howWeBuild } = home;

  return (
    <Section id="how-we-build">
      <Container>
        <Reveal>
          <SectionHeading intro={howWeBuild.body}>
            {howWeBuild.heading}
          </SectionHeading>
        </Reveal>

        <div className="mt-10">
          <PipelineDiagram />
        </div>

        <Reveal delay={0.1}>
          <ul className="text-muted mt-10 grid gap-3 text-sm md:grid-cols-2">
            {howWeBuild.points.map((point) => (
              <li key={point} className="flex gap-2">
                {/* Muted for the same contrast reason as the pipeline
                    numerals: orange as text fails AA on light backgrounds. */}
                <span aria-hidden="true" className="text-muted">
                  ·
                </span>
                {point}
              </li>
            ))}
          </ul>

          {/* Ink text with an accent underline, not accent text. Orange link
              text measures 2.47:1 on the page background; here the label
              carries full contrast and the accent survives as the underline,
              which is a non-text element. */}
          <Link
            href="/how-it-works"
            className="text-text decoration-accent mt-8 inline-flex items-center gap-2 text-sm font-semibold underline decoration-2 underline-offset-4 transition-transform hover:opacity-80 active:translate-y-px"
          >
            {howWeBuild.linkLabel}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}

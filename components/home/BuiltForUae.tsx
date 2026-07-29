import { home } from "@/content/copy";
import { Container, Prose } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RetailerMarquee } from "@/components/visuals/RetailerMarquee";
import { Reveal } from "@/components/motion/Reveal";

export function BuiltForUae() {
  const { builtForUae } = home;

  return (
    <Section id="built-for-uae">
      <Container>
        <Reveal>
          <SectionHeading>{builtForUae.heading}</SectionHeading>
        </Reveal>

        <Reveal delay={0.08}>
          <Prose measure="wide" className="mt-8 space-y-4">
            {builtForUae.body.map((paragraph) => (
              <p key={paragraph} className="text-lg text-pretty">
                {paragraph}
              </p>
            ))}
          </Prose>
        </Reveal>
      </Container>

      <div className="mt-14">
        <RetailerMarquee />
      </div>
    </Section>
  );
}

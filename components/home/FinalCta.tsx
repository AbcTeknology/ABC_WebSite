import { home } from "@/content/copy";
import { Container, Prose } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Closing call to action.
 *
 * A band rather than an inset panel, for the same reason as the hero: a padded
 * card would push this heading off the left rail every other heading sits on.
 */
export function FinalCta() {
  const { finalCta } = home;

  return (
    <Section tone="band">
      <Container>
        <Reveal>
          <h2 className="font-heading max-w-2xl text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {finalCta.heading}
          </h2>
          <Prose>
            <p className="text-muted mt-4 text-lg text-pretty">
              {finalCta.body}
            </p>
          </Prose>
          <StoreBadges className="mt-8" />
        </Reveal>
      </Container>
    </Section>
  );
}

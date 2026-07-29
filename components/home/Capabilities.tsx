import { Check } from "lucide-react";
import { home } from "@/content/copy";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealList } from "@/components/motion/Reveal";

export function Capabilities() {
  const { capabilities } = home;

  return (
    <Section id="capabilities">
      <Container>
        <Reveal>
          <SectionHeading>{capabilities.heading}</SectionHeading>
        </Reveal>

        <RevealList
          className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2"
          itemClassName="flex gap-3"
        >
          {capabilities.items.map((item) => (
            <div className="flex gap-3" key={item.title}>
              <Check
                aria-hidden="true"
                className="text-accent mt-1 size-4 shrink-0"
              />
              <div>
                <h3 className="font-heading text-base font-bold">
                  {item.title}
                </h3>
                <p className="text-muted mt-1 text-sm">{item.body}</p>
              </div>
            </div>
          ))}
        </RevealList>
      </Container>
    </Section>
  );
}

import { X } from "lucide-react";
import { home } from "@/content/copy";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealList } from "@/components/motion/Reveal";

export function Principles() {
  const { principles } = home;

  return (
    <Section id="principles">
      <Container>
        <Reveal>
          <SectionHeading>{principles.heading}</SectionHeading>
        </Reveal>

        <RevealList className="mt-10 grid gap-4 md:grid-cols-2">
          {principles.items.map((item) => (
            <div
              key={item.title}
              className="border-border flex h-full gap-3 rounded-2xl border p-5"
            >
              <X
                aria-hidden="true"
                className="text-muted mt-1 size-4 shrink-0"
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

        <Reveal delay={0.1}>
          <p className="text-muted mt-6 text-sm">{principles.footnote}</p>
        </Reveal>
      </Container>
    </Section>
  );
}

import { Calculator, Filter, RefreshCw, Tag } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { technology } from "@/content/copy";
import { Container, Prose } from "@/components/ui/Container";
import { IconFrame } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillarIcons: readonly LucideIcon[] = [Tag, Calculator, Filter, RefreshCw];

export function TechnologySection() {
  return (
    <Section id="technology" labelledBy="tech-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          <div>
            <SectionHeading id="tech-heading">
              {technology.heading}
            </SectionHeading>
            <Prose>
              <p className="text-slate mt-4 text-pretty">{technology.intro}</p>
            </Prose>
          </div>
          <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {technology.pillars.map((pillar, index) => {
              const Icon = pillarIcons[index];
              return (
                <li key={pillar.title}>
                  <IconFrame>
                    {Icon ? (
                      <Icon
                        aria-hidden="true"
                        className="size-5"
                        strokeWidth={1.75}
                      />
                    ) : null}
                  </IconFrame>
                  <h3 className="text-heading mt-4 text-[1.0625rem] font-semibold tracking-[-0.01em]">
                    {pillar.title}
                  </h3>
                  <p className="text-slate mt-2 text-[0.9375rem] text-pretty">
                    {pillar.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

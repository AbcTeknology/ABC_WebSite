import { Building2, Lightbulb, ShieldCheck, UserRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { vision } from "@/content/copy";
import { Container, Prose } from "@/components/ui/Container";
import { IconFrame } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const valueIcons: readonly LucideIcon[] = [
  UserRound,
  ShieldCheck,
  Lightbulb,
  Building2,
];

export function VisionSection() {
  return (
    <Section id="about" labelledBy="vision-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <div>
            <SectionHeading id="vision-heading" subheading={vision.subheading}>
              {vision.heading}
            </SectionHeading>
            <Prose className="mt-5 space-y-4">
              {vision.body.map((paragraph) => (
                <p key={paragraph} className="text-slate text-pretty">
                  {paragraph}
                </p>
              ))}
            </Prose>
          </div>
          <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {vision.values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <li key={value.title}>
                  <IconFrame>
                    {Icon ? (
                      <Icon
                        aria-hidden="true"
                        className="size-5"
                        strokeWidth={1.75}
                      />
                    ) : null}
                  </IconFrame>
                  <h3 className="text-navy-900 mt-4 text-[1.0625rem] font-semibold tracking-[-0.01em]">
                    {value.title}
                  </h3>
                  <p className="text-slate mt-2 text-[0.9375rem] text-pretty">
                    {value.body}
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

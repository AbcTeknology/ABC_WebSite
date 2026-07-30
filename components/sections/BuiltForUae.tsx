import { Boxes, MapPin, Truck, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { uae } from "@/content/copy";
import { Container, Prose } from "@/components/ui/Container";
import { IconFrame } from "@/components/ui/Card";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pointIcons: readonly LucideIcon[] = [Wallet, MapPin, Boxes, Truck];

export function BuiltForUae() {
  return (
    <Section
      id="built-for-uae"
      labelledBy="uae-heading"
      className="overflow-hidden"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,380px)] lg:items-center lg:gap-14">
          <div>
            <SectionHeading id="uae-heading">{uae.heading}</SectionHeading>
            <Prose>
              <p className="text-slate mt-4 text-pretty">{uae.body}</p>
            </Prose>
            <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {uae.points.map((point, index) => {
                const Icon = pointIcons[index];
                return (
                  <li key={point.title} className="flex items-start gap-3">
                    <IconFrame>
                      {Icon ? (
                        <Icon
                          aria-hidden="true"
                          className="size-4"
                          strokeWidth={1.75}
                        />
                      ) : null}
                    </IconFrame>
                    <span>
                      <span className="text-navy-900 block text-[0.9375rem] font-semibold">
                        {point.title}
                      </span>
                      <span className="text-slate block text-[0.9375rem]">
                        {point.body}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <ImagePlaceholder
            src="/media/uae-skyline.jpg"
            alt="The Dubai skyline at dusk."
            label="UAE skyline photograph"
            detail="Dubai skyline, wide crop. 1600 x 900 (16:9), JPG or WebP."
            width={1600}
            height={900}
            className="aspect-video w-full rounded-lg"
          />
        </div>
      </Container>
    </Section>
  );
}

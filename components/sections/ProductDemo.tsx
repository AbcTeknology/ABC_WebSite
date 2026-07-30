import { Check } from "lucide-react";
import { demo } from "@/content/copy";
import { retailers } from "@/content/site";
import { Container, Prose } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export function ProductDemo() {
  const total = demo.rows
    .reduce((sum, row) => sum + (row.offers[row.bestIndex]?.price ?? 0), 0)
    .toFixed(2);

  return (
    <Section id="in-action" labelledBy="demo-heading">
      <Container>
        <SectionHeading id="demo-heading">{demo.heading}</SectionHeading>
        <Prose>
          <p className="text-slate mt-4 text-[1.0625rem] text-pretty">
            {demo.intro}
          </p>
        </Prose>

        <figure className="mt-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_352px] lg:grid-rows-[auto_minmax(0,1fr)] lg:gap-8">
            <div className="lg:col-start-2 lg:row-start-1">
              <StageLabel>{demo.stages.ask}</StageLabel>
              <blockquote className="border-hairline mt-3 rounded-md border bg-blue-50 p-5">
                <p className="text-heading text-[1.0625rem] leading-snug font-medium text-pretty">
                  {demo.request}
                </p>
              </blockquote>
            </div>

            <div className="lg:col-start-1 lg:row-span-2 lg:row-start-1">
              <StageLabel>{demo.stages.compare}</StageLabel>
              <ol className="mt-3 grid gap-4 sm:grid-cols-2">
                {demo.rows.map((row) => {
                  const widest = Math.max(
                    ...row.offers.map((offer) => offer.unitPrice),
                  );
                  return (
                    <li
                      key={row.item}
                      className="border-hairline bg-surface rounded-md border p-5"
                    >
                      <div className="border-hairline flex items-baseline justify-between gap-3 border-b pb-3">
                        <h4 className="text-heading text-[1.0625rem] font-semibold tracking-[-0.01em]">
                          {row.item}
                        </h4>
                        <p className="text-mist text-[0.9375rem] whitespace-nowrap">
                          per {row.unit}
                        </p>
                      </div>

                      <ul className="mt-3.5 space-y-3.5">
                        {row.offers.map((offer, index) => {
                          const isBest = index === row.bestIndex;
                          return (
                            <li key={`${row.item}-${retailers[index]}`}>
                              <div className="flex items-baseline justify-between gap-3">
                                <span className="min-w-0 truncate">
                                  <span
                                    className={cn(
                                      "text-[0.9375rem]",
                                      isBest
                                        ? "font-semibold text-blue-700"
                                        : "text-graphite",
                                    )}
                                  >
                                    {retailers[index]}
                                  </span>
                                  <span className="text-mist tabular ml-2 text-[0.9375rem]">
                                    {offer.size}
                                  </span>
                                </span>
                                <span
                                  className={cn(
                                    "tabular text-[0.9375rem] font-semibold whitespace-nowrap",
                                    isBest ? "text-blue-700" : "text-heading",
                                  )}
                                >
                                  {offer.unitPrice.toFixed(2)}/{row.unitShort}
                                </span>
                              </div>

                              <div className="mt-1.5 flex items-center gap-2.5">
                                <span
                                  aria-hidden="true"
                                  className="bg-tint h-[7px] flex-1 overflow-hidden rounded-full"
                                >
                                  <span
                                    className={cn(
                                      "block h-full rounded-full",
                                      isBest ? "bg-blue-700" : "bg-rule",
                                    )}
                                    style={{
                                      width: `${(offer.unitPrice / widest) * 100}%`,
                                    }}
                                  />
                                </span>
                                {isBest ? (
                                  <span className="inline-flex w-[68px] shrink-0 items-center justify-end gap-1 text-[0.9375rem] font-semibold text-blue-700">
                                    <Check
                                      aria-hidden="true"
                                      className="size-3.5"
                                    />
                                    {demo.bestLabel}
                                  </span>
                                ) : (
                                  <span className="text-mist tabular w-[68px] shrink-0 text-right text-[0.9375rem]">
                                    {offer.price.toFixed(2)}
                                  </span>
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="lg:col-start-2 lg:row-start-2">
              <StageLabel>{demo.stages.basket}</StageLabel>
              <div className="border-hairline bg-surface mt-3 overflow-hidden rounded-md border">
                <ul className="divide-hairline divide-y">
                  {demo.rows.map((row) => {
                    const pick = row.offers[row.bestIndex];
                    return (
                      <li
                        key={row.item}
                        className="flex items-baseline justify-between gap-4 px-5 py-3"
                      >
                        <span className="min-w-0">
                          <span className="text-heading block text-[0.9375rem] font-medium">
                            {row.item}
                          </span>
                          <span className="text-mist tabular block text-[0.9375rem]">
                            {pick?.size} · {retailers[row.bestIndex]}
                          </span>
                        </span>
                        <span className="text-heading tabular text-[0.9375rem] font-semibold whitespace-nowrap">
                          AED {pick?.price.toFixed(2)}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <div className="border-hairline flex items-baseline justify-between gap-4 border-t bg-blue-50 px-5 py-4">
                  <span className="text-heading text-[1.0625rem] font-bold">
                    {demo.basketLabel}
                  </span>
                  <span className="text-heading tabular text-2xl font-bold whitespace-nowrap">
                    AED {total}
                  </span>
                </div>
              </div>

              <figcaption className="text-slate mt-5 text-[0.9375rem] text-pretty">
                {demo.unitHint} {demo.exampleNotice}
              </figcaption>
            </div>
          </div>
        </figure>
      </Container>
    </Section>
  );
}

function StageLabel({ children }: { readonly children: React.ReactNode }) {
  return (
    <h3 className="text-mist text-[0.9375rem] font-semibold tracking-[0.06em] uppercase">
      {children}
    </h3>
  );
}

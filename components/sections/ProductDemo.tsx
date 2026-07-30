import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, Loader } from "lucide-react";
import { demo } from "@/content/copy";
import { retailers } from "@/content/site";
import { Container, Prose } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
          <div className="grid items-stretch gap-4 lg:grid-cols-[minmax(0,0.62fr)_auto_minmax(0,2.25fr)_auto_minmax(0,0.9fr)] lg:gap-2">
            <Stage label={demo.stages.ask} step={1}>
              <div className="border-hairline rounded-md border bg-white p-4">
                <p className="text-navy-900 text-[0.9375rem] leading-relaxed">
                  {demo.request}
                </p>
              </div>
              <div className="border-hairline text-slate mt-3 flex items-center gap-2 rounded-md border bg-white px-3 py-2.5 text-[0.9375rem]">
                <Loader aria-hidden="true" className="size-4 text-blue-700" />
                {demo.thinking}
              </div>
            </Stage>
            <Connector />
            <Stage label={demo.stages.compare} step={2}>
              <div className="border-hairline overflow-x-auto rounded-md border bg-white">
                <table className="w-full min-w-[30rem] border-collapse text-left">
                  <caption className="sr-only">
                    Illustrative comparison across four retailers. Each cell
                    shows the pack price, the pack size and the price per unit.
                    The lowest price per unit in each row is marked.
                  </caption>
                  <thead>
                    <tr className="bg-tint border-hairline border-b">
                      <th
                        scope="col"
                        className="text-graphite px-3 py-2 text-[0.9375rem] font-semibold"
                      >
                        Item
                      </th>
                      {retailers.map((name) => (
                        <th
                          key={name}
                          scope="col"
                          className="text-graphite px-2.5 py-2 text-right text-[0.9375rem] font-semibold"
                        >
                          {name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-hairline divide-y">
                    {demo.rows.map((row) => (
                      <tr key={row.item}>
                        <th
                          scope="row"
                          className="px-2.5 py-2.5 align-top text-[0.9375rem] font-medium"
                        >
                          <span className="text-navy-900 block">
                            {row.item}
                          </span>
                          <span className="text-slate block text-[0.9375rem] font-normal">
                            per {row.unit}
                          </span>
                        </th>
                        {row.offers.map((offer, index) => {
                          const isBest = index === row.bestIndex;
                          return (
                            <td
                              key={`${row.item}-${retailers[index]}`}
                              className={
                                isBest
                                  ? "bg-blue-100 px-2.5 py-2.5 text-right align-top"
                                  : "px-2.5 py-2.5 text-right align-top"
                              }
                            >
                              <span
                                className={
                                  isBest
                                    ? "tabular block text-[0.9375rem] font-bold text-blue-700"
                                    : "text-navy-900 tabular block text-[0.9375rem]"
                                }
                              >
                                {offer.price.toFixed(2)}
                              </span>
                              <span
                                className={
                                  isBest
                                    ? "tabular block text-[0.9375rem] whitespace-nowrap text-blue-700"
                                    : "text-slate tabular block text-[0.9375rem] whitespace-nowrap"
                                }
                              >
                                {offer.size} · {offer.unitPrice.toFixed(2)}/
                                {row.unitShort}
                              </span>
                              {isBest ? (
                                <span className="block text-[0.9375rem] font-semibold whitespace-nowrap text-blue-700">
                                  {demo.bestLabel}
                                </span>
                              ) : null}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Stage>
            <Connector />
            <Stage label={demo.stages.basket} step={3}>
              <div className="border-hairline flex h-full flex-col rounded-md border bg-white">
                <ul className="divide-hairline divide-y">
                  {demo.rows.map((row) => {
                    const pick = row.offers[row.bestIndex];
                    return (
                      <li
                        key={row.item}
                        className="flex items-baseline justify-between gap-3 px-3 py-2.5"
                      >
                        <span className="text-navy-900 text-[0.9375rem] font-medium">
                          {row.item}
                          <span className="text-slate block font-normal">
                            {pick?.size} · {retailers[row.bestIndex]}
                          </span>
                        </span>
                        <span className="text-navy-900 tabular text-[0.9375rem] font-semibold">
                          AED {pick?.price.toFixed(2)}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div className="border-hairline mt-auto flex items-baseline justify-between border-t px-3 py-3">
                  <span className="text-navy-900 text-[0.9375rem] font-bold">
                    {demo.basketLabel}
                  </span>
                  <span className="text-navy-900 tabular text-lg font-bold">
                    AED {total}
                  </span>
                </div>
                <div className="px-3 pb-3">
                  <span
                    aria-hidden="true"
                    className="border-rule text-slate block rounded-sm border border-dashed px-3 py-2.5 text-center text-[0.9375rem] font-semibold"
                  >
                    {demo.basketAction}
                  </span>
                </div>
              </div>
            </Stage>
          </div>
          <figcaption className="text-slate mt-6 text-[0.9375rem]">
            {demo.exampleNotice} {demo.unitHint}
          </figcaption>
        </figure>
      </Container>
    </Section>
  );
}

function Stage({
  label,
  step,
  children,
}: {
  readonly label: string;
  readonly step: number;
  readonly children: ReactNode;
}) {
  return (
    <div className="min-w-0">
      <p className="mb-3 flex items-center gap-2">
        <span
          aria-hidden="true"
          className="tabular flex size-6 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-[0.9375rem] font-bold text-blue-700"
        >
          {step}
        </span>
        <span className="text-navy-900 text-[0.9375rem] font-semibold">
          {label}
        </span>
      </p>
      {children}
    </div>
  );
}

function Connector() {
  return (
    <div
      aria-hidden="true"
      className="text-mist flex min-w-0 items-center justify-center"
    >
      <ArrowRight className="hidden size-5 lg:block" />
      <ArrowDown className="size-5 lg:hidden" />
    </div>
  );
}

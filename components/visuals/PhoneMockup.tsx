import { Check, Menu } from "lucide-react";
import { demo } from "@/content/copy";
import { retailers } from "@/content/site";

export function PhoneMockup() {
  const total = demo.rows
    .reduce((sum, row) => sum + (row.offers[row.bestIndex]?.price ?? 0), 0)
    .toFixed(2);

  return (
    <div
      aria-hidden="true"
      className="border-navy-950/15 w-[268px] shrink-0 rounded-[2rem] border-[6px] bg-white p-2 shadow-[0_8px_24px_-6px_rgba(7,26,61,0.14)]"
    >
      <div className="overflow-hidden rounded-[1.5rem] bg-blue-50">
        <div className="text-slate flex items-center justify-between px-4 pt-3 pb-1 text-[0.625rem] font-semibold">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="bg-slate/60 h-2 w-3 rounded-[2px]" />
            <span className="bg-slate/60 h-2 w-4 rounded-[2px]" />
          </span>
        </div>
        <div className="flex items-center justify-between px-4 pb-3">
          <span className="text-navy-900 text-sm font-bold">ABC AI</span>
          <Menu className="text-slate size-4" />
        </div>
        <div className="px-3">
          <div className="border-hairline rounded-md border bg-white p-3">
            <p className="text-slate text-[0.6875rem] leading-snug">
              Find me the best value for:
            </p>
            <ul className="text-navy-900 mt-1.5 space-y-0.5 text-[0.6875rem] font-medium">
              {demo.rows.map((row) => (
                <li key={row.item}>{row.item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-3 px-3 pb-3">
          <div className="border-hairline rounded-md border bg-white">
            <div className="border-hairline flex items-center justify-between border-b px-3 py-2">
              <span className="text-navy-900 flex items-center gap-1.5 text-[0.6875rem] font-bold">
                <Check className="size-3 text-blue-700" />
                Best value basket
              </span>
              <span className="text-navy-900 tabular text-[0.8125rem] font-bold">
                AED {total}
              </span>
            </div>
            <ul className="divide-hairline divide-y">
              {demo.rows.map((row) => {
                const pick = row.offers[row.bestIndex];
                return (
                  <li
                    key={row.item}
                    className="flex items-center justify-between gap-2 px-3 py-1.5"
                  >
                    <span className="text-graphite truncate text-[0.625rem] font-medium">
                      {row.item}
                      <span className="text-slate block text-[0.5625rem] font-normal">
                        {pick?.size} · {pick?.unitPrice.toFixed(2)}/
                        {row.unitShort}
                      </span>
                    </span>
                    <span className="text-right">
                      <span className="text-navy-900 tabular block text-[0.6875rem] font-semibold">
                        AED {pick?.price.toFixed(2)}
                      </span>
                      <span className="text-slate block text-[0.5625rem]">
                        {retailers[row.bestIndex]}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="p-2">
              <span className="bg-navy-900 block rounded-sm px-3 py-2 text-center text-[0.6875rem] font-semibold text-white">
                {demo.basketAction}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

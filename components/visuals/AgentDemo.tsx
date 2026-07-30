"use client";

import { Check, Minus, Plus, RotateCcw } from "lucide-react";
import { useEffect, useReducer, useRef, useState } from "react";
import { demo, howItWorks } from "@/content/copy";
import { retailers } from "@/content/site";
import Image from "next/image";
import { ProductGlyph } from "./ProductGlyph";
import type { ProductPhotos } from "@/lib/productPhotos";
import { cn } from "@/lib/cn";

const stageCount = howItWorks.steps.length;

type QtyAction =
  { type: "step"; item: string; delta: number } | { type: "reset" };

function qtyReducer(state: Record<string, number>, action: QtyAction) {
  if (action.type === "reset") {
    return Object.fromEntries(demo.rows.map((row) => [row.item, 1]));
  }
  const current = state[action.item] ?? 1;
  return {
    ...state,
    [action.item]: Math.min(9, Math.max(1, current + action.delta)),
  };
}

const initialQty = Object.fromEntries(demo.rows.map((row) => [row.item, 1]));

export function AgentDemo({ photos }: { readonly photos: ProductPhotos }) {
  const [stage, setStage] = useState(0);
  const [qty, dispatch] = useReducer(qtyReducer, initialQty);
  const [runId, setRunId] = useState(0);
  const screen = useRef<HTMLDivElement>(null);

  const done = stage >= stageCount;

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const step = reduced ? 0 : 560;

    const scheduled: number[] = [];
    for (let i = 1; i <= stageCount; i++) {
      scheduled.push(window.setTimeout(() => setStage(i), step * i));
    }

    return () => scheduled.forEach(clearTimeout);
  }, [runId]);

  const total = demo.rows
    .reduce((sum, row) => {
      const price = row.offers[row.bestIndex]?.price ?? 0;
      return sum + price * (qty[row.item] ?? 1);
    }, 0)
    .toFixed(2);

  return (
    <div className="w-full max-w-[340px] min-w-0 rounded-[46px] bg-[linear-gradient(160deg,#243049,#0b1220)] p-3 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.07)]">
      <div className="bg-app-screen flex h-[700px] flex-col overflow-hidden rounded-[36px]">
        <div className="text-app-text flex items-center justify-between px-6 pt-3.5 pb-1 text-[0.8125rem] font-bold">
          <span className="tabular">9:30</span>
          <span className="text-app-muted flex items-center gap-1.5 text-[0.625rem] font-semibold tracking-widest">
            5G
            <span className="border-app-muted tabular rounded-[3px] border px-1 py-[1px] text-[0.5rem]">
              78
            </span>
          </span>
        </div>

        <div className="border-app-border flex items-center gap-3 border-b px-5 pt-2 pb-3">
          <span aria-hidden="true" className="flex flex-col gap-[3.5px]">
            <span className="bg-app-text block h-[2px] w-[18px] rounded" />
            <span className="bg-app-text block h-[2px] w-[18px] rounded" />
            <span className="bg-app-text block h-[2px] w-[18px] rounded" />
          </span>
          <span className="text-app-text flex-1 text-[1.0625rem] font-bold">
            Chat
          </span>
          <button
            type="button"
            onClick={() => {
              dispatch({ type: "reset" });
              setStage(0);
              setRunId((n) => n + 1);
            }}
            className="text-app-muted hover:text-app-accent inline-flex size-8 items-center justify-center rounded-full transition-colors"
            aria-label="Replay the demonstration"
          >
            <RotateCcw aria-hidden="true" className="size-4" />
          </button>
        </div>

        <div
          ref={screen}
          className="screen flex-1 space-y-2.5 overflow-y-auto px-3.5 py-3"
        >
          <div className="bg-app-bubble border-app-bubble-2 ml-8 rounded-[1.2rem] rounded-br-[0.35rem] border p-3">
            <p className="text-app-text text-[0.75rem] leading-snug">
              {demo.request}
            </p>
          </div>

          {done ? (
            <p className="bg-app-surface border-app-border text-app-text flex items-center gap-2 rounded-[1.2rem] border px-3 py-2.5 text-[0.6875rem] font-semibold">
              <Check
                aria-hidden="true"
                className="text-app-accent size-3.5 shrink-0"
              />
              {demo.runDone}
              <span className="text-app-muted tabular ml-auto font-normal">
                {demo.rows.length} items · {retailers.length} retailers
              </span>
            </p>
          ) : (
            <ol
              aria-label={demo.runProgress}
              className="bg-app-surface border-app-border space-y-1.5 rounded-[1.2rem] border p-3"
            >
              {howItWorks.steps.map((step, index) => {
                const state =
                  stage > index
                    ? "done"
                    : stage === index
                      ? "active"
                      : "pending";
                return (
                  <li
                    key={step.title}
                    className="flex items-center gap-2 text-[0.6875rem]"
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "flex size-4 shrink-0 items-center justify-center rounded-full border text-[0.5rem] font-bold transition-colors",
                        state === "done" &&
                          "border-app-accent bg-app-accent text-app-screen",
                        state === "active" &&
                          "border-app-accent text-app-accent animate-pulse",
                        state === "pending" &&
                          "border-app-border text-app-muted",
                      )}
                    >
                      {state === "done" ? (
                        <Check className="size-2.5" />
                      ) : (
                        index + 1
                      )}
                    </span>
                    <span
                      className={cn(
                        "font-semibold transition-colors",
                        state === "pending"
                          ? "text-app-muted"
                          : "text-app-text",
                      )}
                    >
                      {step.status}
                    </span>
                  </li>
                );
              })}
            </ol>
          )}

          {done ? (
            <div className="space-y-2.5">
              <div className="rail">
                {demo.rows.map((row) => {
                  const pick = row.offers[row.bestIndex];
                  return (
                    <div
                      key={row.item}
                      className="bg-app-surface border-app-border w-[64px] shrink-0 overflow-hidden rounded-[0.75rem] border"
                    >
                      {photos[row.item] ? (
                        <Image
                          src={photos[row.item] as string}
                          alt=""
                          width={400}
                          height={400}
                          className="aspect-square h-auto w-full object-cover"
                        />
                      ) : (
                        <ProductGlyph item={row.item} />
                      )}
                      <p className="text-app-accent tabular px-1 pt-1 pb-1.5 text-center text-[0.625rem] font-extrabold">
                        {pick?.price.toFixed(2)}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="bg-app-surface border-app-border overflow-hidden rounded-[1.2rem] border">
                <p className="bg-app-surface-2 border-app-border text-app-text flex items-center gap-1.5 border-b px-3 py-2 text-[0.75rem] font-bold">
                  <Check
                    aria-hidden="true"
                    className="text-app-accent size-3 shrink-0"
                  />
                  {demo.stages.basket}
                </p>

                {demo.rows.map((row) => {
                  const pick = row.offers[row.bestIndex];
                  const count = qty[row.item] ?? 1;
                  return (
                    <div
                      key={row.item}
                      className="border-app-border flex items-center gap-2 border-b px-3 py-1.5"
                    >
                      <span className="min-w-0 flex-1">
                        <span className="text-app-text block truncate text-[0.6875rem] font-semibold">
                          {row.item}
                        </span>
                        <span className="text-app-muted tabular block text-[0.5625rem]">
                          {pick?.size} · {retailers[row.bestIndex]}
                        </span>
                      </span>

                      <span className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() =>
                            dispatch({
                              type: "step",
                              item: row.item,
                              delta: -1,
                            })
                          }
                          className="border-app-muted text-app-text hover:border-app-accent hover:text-app-accent inline-flex size-6 items-center justify-center rounded-full border transition-colors"
                          aria-label={`Decrease ${row.item} quantity`}
                        >
                          <Minus aria-hidden="true" className="size-3" />
                        </button>
                        <span className="text-app-text tabular w-3 text-center text-[0.6875rem] font-bold">
                          {count}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            dispatch({ type: "step", item: row.item, delta: 1 })
                          }
                          className="border-app-muted text-app-text hover:border-app-accent hover:text-app-accent inline-flex size-6 items-center justify-center rounded-full border transition-colors"
                          aria-label={`Increase ${row.item} quantity`}
                        >
                          <Plus aria-hidden="true" className="size-3" />
                        </button>
                      </span>

                      <span className="text-app-accent tabular w-[52px] text-right text-[0.6875rem] font-extrabold">
                        {((pick?.price ?? 0) * count).toFixed(2)}
                      </span>
                    </div>
                  );
                })}

                <div className="bg-app-surface-2 flex items-center justify-between px-3 py-2.5">
                  <span className="text-app-text text-[0.75rem] font-extrabold">
                    {demo.basketLabel}
                  </span>
                  <span
                    aria-live="polite"
                    className="text-app-text tabular text-[0.9375rem] font-extrabold"
                  >
                    AED {total}
                  </span>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className="px-3.5 pt-1 pb-3.5">
          <div className="bg-app-surface border-app-border flex items-center gap-2 rounded-full border py-1.5 pr-1.5 pl-3.5">
            <span className="text-app-muted flex-1 text-[0.625rem]">
              Message ABC AI
            </span>
            <span
              aria-hidden="true"
              className="bg-app-accent text-app-screen flex size-7 items-center justify-center rounded-full text-[0.6875rem] font-extrabold"
            >
              &uarr;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

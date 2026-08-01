"use client";

import {
  Check,
  Clock,
  Minus,
  Package,
  Plus,
  RotateCcw,
  Star,
  Trash2,
  X,
} from "lucide-react";
import { useEffect, useReducer, useRef, useState } from "react";
import { demo, howItWorks } from "@/content/copy";
import type { Offer } from "@/content/copy";
import { retailers } from "@/content/site";
import Image from "next/image";
import { ProductGlyph } from "./ProductGlyph";
import type { ProductPhotos } from "@/lib/productPhotos";
import { cn } from "@/lib/cn";

const stageCount = howItWorks.steps.length;

const platformStyles: Record<string, string> = {
  Amazon: "bg-[#232f3e] text-white",
  Noon: "bg-[#feee00] text-[#333333]",
  Carrefour: "bg-[#0e5aa7] text-white",
  Talabat: "bg-[#ff5a00] text-white",
};

type Qty = Record<string, number>;

type QtyAction =
  | { type: "step"; item: string; delta: number }
  | { type: "drop"; item: string }
  | { type: "commit"; value: Qty }
  | { type: "reset" };

const initialQty: Qty = Object.fromEntries(
  demo.rows.map((row) => [row.item, 1]),
);

function qtyReducer(state: Qty, action: QtyAction): Qty {
  switch (action.type) {
    case "reset":
      return initialQty;
    case "commit":
      return action.value;
    case "drop": {
      const next = { ...state };
      delete next[action.item];
      return next;
    }
    case "step": {
      const current = state[action.item] ?? 1;
      return {
        ...state,
        [action.item]: Math.min(9, Math.max(1, current + action.delta)),
      };
    }
  }
}

function money(value: number) {
  return value.toFixed(2);
}

function basketTotal(qty: Qty) {
  return demo.rows.reduce((sum, row) => {
    const count = qty[row.item];
    if (!count) return sum;
    return sum + (row.offers[row.bestIndex]?.price ?? 0) * count;
  }, 0);
}

export function AgentDemo({ photos }: { readonly photos: ProductPhotos }) {
  const [stage, setStage] = useState(0);
  const [qty, dispatch] = useReducer(qtyReducer, initialQty);
  const [draft, setDraft] = useReducer(qtyReducer, initialQty);
  const [runId, setRunId] = useState(0);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [swapped, setSwapped] = useState(false);
  const screen = useRef<HTMLDivElement>(null);

  const done = stage >= stageCount;

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const step = reduced ? 0 : 620;
    const scheduled: number[] = [];
    for (let i = 1; i <= stageCount; i++) {
      scheduled.push(window.setTimeout(() => setStage(i), step * i));
    }
    return () => scheduled.forEach(clearTimeout);
  }, [runId]);

  const total = basketTotal(qty);
  const lines = demo.rows.filter((row) => qty[row.item]);
  const draftLines = demo.rows.filter((row) => draft[row.item]);
  const draftTotal = basketTotal(draft);

  const replay = () => {
    dispatch({ type: "reset" });
    setDraft({ type: "reset" });
    setSheetOpen(false);
    setSwapped(false);
    setStage(0);
    setRunId((n) => n + 1);
    screen.current?.scrollTo({ top: 0 });
  };

  const openSheet = () => {
    setDraft({ type: "commit", value: qty });
    setSheetOpen(true);
  };

  return (
    <div className="w-full max-w-[340px] min-w-0 rounded-[46px] bg-[linear-gradient(160deg,#243049,#0b1220)] p-3 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.07)]">
      <div className="bg-app-screen relative flex h-[700px] flex-col overflow-hidden rounded-[36px]">
        <div className="text-app-text flex shrink-0 items-center justify-between px-6 pt-3.5 pb-1 text-[0.8125rem] font-bold">
          <span className="tabular">9:30</span>
          <span className="text-app-muted flex items-center gap-1.5 text-[0.625rem] font-semibold tracking-widest">
            5G
            <span className="border-app-muted tabular rounded-[3px] border px-1 py-[1px] text-[0.5rem]">
              78
            </span>
          </span>
        </div>

        <div className="border-app-border flex shrink-0 items-center gap-3 border-b px-5 pt-2 pb-3">
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
            onClick={replay}
            className="text-app-muted hover:text-app-accent inline-flex size-8 items-center justify-center rounded-full transition-colors"
            aria-label="Replay the demonstration"
          >
            <RotateCcw aria-hidden="true" className="size-4" />
          </button>
        </div>

        <div
          ref={screen}
          className="screen flex-1 space-y-2 overflow-y-auto px-3 py-3"
        >
          <div className="flex justify-end">
            <div className="bg-app-bubble border-app-bubble-2 max-w-[85%] rounded-[1.15rem] rounded-br-[0.25rem] border px-3 py-2">
              <p className="text-app-text text-[0.8125rem] leading-snug">
                {demo.request}
              </p>
              <p className="text-app-muted mt-1 text-right text-[0.625rem]">
                9:30
              </p>
            </div>
          </div>

          {done ? (
            <AgentResponse
              photos={photos}
              qty={qty}
              lines={lines}
              total={total}
              swapped={swapped}
              onSwap={() => setSwapped(true)}
              onEdit={openSheet}
            />
          ) : (
            <div className="bg-app-surface border-app-border max-w-[85%] rounded-[1.15rem] rounded-bl-[0.25rem] border px-4 py-2.5">
              <p
                aria-live="polite"
                className="text-app-muted text-[0.8125rem] leading-tight"
              >
                {howItWorks.steps[Math.min(stage, stageCount - 1)]?.status}
              </p>
            </div>
          )}
        </div>

        <div className="shrink-0 px-3 pt-1 pb-3.5">
          <div className="bg-app-surface border-app-border flex items-center gap-2 rounded-full border py-1.5 pr-1.5 pl-3.5">
            <span className="text-app-muted flex-1 text-[0.6875rem]">
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

        {sheetOpen ? (
          <EditBasketSheet
            photos={photos}
            draft={draft}
            lines={draftLines}
            total={draftTotal}
            onStep={(item, delta) => setDraft({ type: "step", item, delta })}
            onDrop={(item) => setDraft({ type: "drop", item })}
            onCancel={() => setSheetOpen(false)}
            onSave={() => {
              dispatch({ type: "commit", value: draft });
              setSheetOpen(false);
            }}
          />
        ) : null}
      </div>
    </div>
  );
}

type Row = (typeof demo.rows)[number];

function AgentResponse({
  photos,
  qty,
  lines,
  total,
  swapped,
  onSwap,
  onEdit,
}: {
  readonly photos: ProductPhotos;
  readonly qty: Qty;
  readonly lines: readonly Row[];
  readonly total: number;
  readonly swapped: boolean;
  readonly onSwap: () => void;
  readonly onEdit: () => void;
}) {
  return (
    <div className="space-y-2">
      <div className="bg-app-surface border-app-border rounded-[1.15rem] rounded-bl-[0.25rem] border px-3 py-3">
        <p className="text-app-text text-[0.8125rem] leading-snug">
          {demo.reply}
        </p>

        <SmartSwap photos={photos} swapped={swapped} onSwap={onSwap} />

        <div className="bg-app-border my-3 h-px" />

        <p className="text-app-text flex items-center gap-1.5 text-[0.6875rem] font-bold">
          <Package aria-hidden="true" className="size-3.5 shrink-0" />
          {demo.productsLabel}
        </p>

        <div className="rail mt-2">
          {demo.rows.flatMap((row) =>
            row.offers.map((offer, index) => (
              <ProductCard
                key={`${row.item}-${retailers[index]}`}
                photos={photos}
                row={row}
                offer={offer}
                retailer={retailers[index] ?? ""}
                isBest={index === row.bestIndex}
                inBasket={index === row.bestIndex && Boolean(qty[row.item])}
              />
            )),
          )}
        </div>

        <BasketCard lines={lines} total={total} qty={qty} onEdit={onEdit} />

        <p className="text-app-muted mt-2 text-[0.625rem]">9:30</p>
      </div>

      <div className="rail">
        {demo.suggestions.map((suggestion) => (
          <span
            key={suggestion}
            className="border-app-accent text-app-accent bg-app-surface shrink-0 rounded-full border-[1.5px] px-3 py-1.5 text-[0.6875rem] font-semibold"
          >
            {suggestion}
          </span>
        ))}
      </div>
    </div>
  );
}

function SmartSwap({
  photos,
  swapped,
  onSwap,
}: {
  readonly photos: ProductPhotos;
  readonly swapped: boolean;
  readonly onSwap: () => void;
}) {
  const row = demo.rows.find((entry) => entry.item === demo.swap.item);
  const pick = row?.offers[row.bestIndex];
  if (!row || !pick) return null;

  return (
    <div className="mt-3">
      <p className="text-app-accent flex items-center gap-1.5 text-[0.6875rem] font-extrabold tracking-wide uppercase">
        <Package aria-hidden="true" className="size-3 shrink-0" />
        {demo.swapLabel}
      </p>
      <p className="text-app-muted mt-0.5 text-[0.625rem] font-semibold">
        {demo.swapHint}
      </p>

      <div className="border-app-border bg-app-screen mt-2 rounded-[0.85rem] border p-2.5">
        <div className="flex items-center gap-2.5">
          <Thumb photos={photos} item={row.item} size={38} />
          <div className="min-w-0 flex-1">
            <p className="text-app-muted text-[0.5625rem] font-extrabold uppercase">
              {demo.swapPickLabel} · {demo.swap.requested}
            </p>
            <p className="text-app-text mt-0.5 text-[0.6875rem] leading-tight font-bold">
              {pick.title}
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-app-accent tabular text-[0.75rem] font-extrabold">
              AED {money(pick.price)}
            </p>
            <p className="text-app-muted tabular text-[0.5625rem] font-semibold">
              {money(pick.unitPrice)}/{row.unitShort}
            </p>
          </div>
        </div>

        <div className="border-app-border bg-app-surface-2 mt-2.5 rounded-[0.7rem] border p-2">
          <div className="flex items-center justify-between gap-2">
            <span className="bg-app-accent text-app-screen rounded px-1.5 py-0.5 text-[0.5625rem] font-extrabold">
              {demo.swapBestLabel}
            </span>
            <span className="tabular rounded bg-[#14823b] px-1.5 py-0.5 text-[0.5625rem] font-extrabold text-white">
              Save AED {money(demo.swap.saving)}/{row.unitShort}
            </span>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <Thumb photos={photos} item={row.item} size={32} />
            <div className="min-w-0 flex-1">
              <p className="text-app-text text-[0.6875rem] leading-tight font-bold">
                {demo.swap.better.title}
              </p>
              <p className="text-app-muted tabular mt-0.5 text-[0.5625rem] font-semibold">
                {money(demo.swap.better.unitPrice)}/{row.unitShort} · AED{" "}
                {money(demo.swap.better.price)} for {demo.swap.better.size}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onSwap}
            disabled={swapped}
            className={cn(
              "mt-2 flex min-h-[34px] w-full items-center justify-center gap-1.5 rounded-[0.55rem] px-3 text-[0.6875rem] font-extrabold transition-colors",
              swapped
                ? "border-app-border text-app-muted border"
                : "bg-app-accent text-app-screen",
            )}
          >
            {swapped ? (
              <>
                <Check aria-hidden="true" className="size-3" />
                Switched to {demo.swap.better.size}
              </>
            ) : (
              `${demo.swapCta} ${demo.swap.better.size}`
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductCard({
  photos,
  row,
  offer,
  retailer,
  isBest,
  inBasket,
}: {
  readonly photos: ProductPhotos;
  readonly row: Row;
  readonly offer: Offer;
  readonly retailer: string;
  readonly isBest: boolean;
  readonly inBasket: boolean;
}) {
  const discount = offer.was
    ? Math.round(((offer.was - offer.price) / offer.was) * 100)
    : null;

  return (
    <div
      className={cn(
        "bg-app-surface flex w-[128px] shrink-0 flex-col overflow-hidden rounded-[0.85rem]",
        inBasket ? "border-app-accent border-2" : "border-app-border border",
      )}
    >
      <div className="bg-app-surface-2 relative h-[92px]">
        {photos[row.item] ? (
          <Image
            src={photos[row.item] as string}
            alt=""
            width={400}
            height={400}
            className="size-full object-cover"
          />
        ) : (
          <ProductGlyph item={row.item} />
        )}

        {discount ? (
          <span className="tabular absolute top-1.5 left-1.5 rounded bg-[#ff6f8f] px-1 py-[1px] text-[0.5rem] font-extrabold text-white">
            {discount}% OFF
          </span>
        ) : null}

        <span
          className={cn(
            "absolute top-1.5 right-1.5 rounded px-1 py-[1px] text-[0.5rem] font-extrabold uppercase",
            platformStyles[retailer] ?? "bg-[#333333] text-white",
          )}
        >
          {retailer}
        </span>

        {isBest ? (
          <span className="bg-app-accent text-app-screen absolute bottom-1.5 left-1.5 flex items-center gap-0.5 rounded px-1 py-[1px] text-[0.5rem] font-extrabold uppercase">
            <Star aria-hidden="true" className="size-2 fill-current" />
            {demo.cheapestLabel}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-1.5">
        <p className="text-app-text line-clamp-2 min-h-[1.9rem] text-[0.625rem] leading-tight font-bold">
          {offer.title}
        </p>
        <p className="text-app-muted tabular mt-0.5 text-[0.5625rem]">
          {money(offer.unitPrice)}/{row.unitShort}
        </p>

        <p className="mt-0.5 flex items-baseline gap-1">
          <span className="text-app-accent tabular text-[0.75rem] font-extrabold">
            AED {money(offer.price)}
          </span>
          {offer.was ? (
            <span className="text-app-muted tabular text-[0.5625rem] line-through">
              {money(offer.was)}
            </span>
          ) : null}
        </p>

        {offer.rating ? (
          <p className="text-app-text mt-0.5 flex items-center gap-1 text-[0.5625rem] font-semibold">
            <Star
              aria-hidden="true"
              className="size-2.5 fill-[#f59e0b] text-[#f59e0b]"
            />
            {offer.rating}
            <span className="text-app-muted">({offer.reviews})</span>
          </p>
        ) : offer.delivery ? (
          <p className="text-app-text mt-0.5 flex items-center gap-1 text-[0.5625rem] font-semibold">
            <Clock aria-hidden="true" className="size-2.5" />
            {offer.delivery}
          </p>
        ) : null}

        <div className="mt-auto flex items-stretch gap-1 pt-1.5">
          <span
            className={cn(
              "flex flex-1 items-center justify-center gap-0.5 rounded-[0.4rem] py-1 text-[0.5625rem] font-extrabold",
              inBasket
                ? "bg-app-accent text-app-screen"
                : "border-app-accent text-app-accent border-[1.5px]",
            )}
          >
            {inBasket ? (
              <>
                <Check aria-hidden="true" className="size-2.5" />
                {demo.inBasketLabel}
              </>
            ) : (
              demo.addToBasketLabel
            )}
          </span>
          <span className="border-app-border text-app-text flex items-center justify-center rounded-[0.4rem] border px-1.5 text-[0.5625rem] font-bold">
            {demo.viewLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

function BasketCard({
  lines,
  total,
  qty,
  onEdit,
}: {
  readonly lines: readonly Row[];
  readonly total: number;
  readonly qty: Qty;
  readonly onEdit: () => void;
}) {
  if (lines.length === 0) return null;

  return (
    <div className="border-app-border mt-3 overflow-hidden rounded-[0.85rem] border">
      <div className="bg-app-surface-2 border-app-border flex items-center justify-between gap-2 border-b px-3 py-2.5">
        <span className="min-w-0">
          <span className="text-app-muted block text-[0.5625rem] font-extrabold uppercase">
            {demo.basketEyebrow}
          </span>
          <span className="text-app-text block text-[0.8125rem] font-extrabold">
            {demo.stages.basket}
          </span>
        </span>
        <button
          type="button"
          onClick={onEdit}
          className="border-app-border bg-app-surface text-app-accent shrink-0 rounded-full border px-2.5 py-1.5 text-[0.625rem] font-bold"
        >
          {demo.editBasketLabel}
        </button>
      </div>

      <div className="bg-app-surface">
        {lines.map((row) => {
          const pick = row.offers[row.bestIndex];
          const count = qty[row.item] ?? 1;
          return (
            <div
              key={row.item}
              className="border-app-border flex items-center gap-2 border-b px-3 py-2"
            >
              <span className="min-w-0 flex-1">
                <span className="flex min-w-0 items-center gap-1.5">
                  <span className="text-app-text truncate text-[0.625rem] font-extrabold">
                    {row.item}
                  </span>
                  <span className="bg-app-surface-2 border-app-border text-app-accent shrink-0 rounded-full border px-1.5 py-[1px] text-[0.5rem] font-extrabold">
                    {retailers[row.bestIndex]}
                  </span>
                </span>
                <span className="text-app-muted tabular mt-0.5 block text-[0.5625rem] font-semibold">
                  AED {money(pick?.unitPrice ?? 0)}/{row.unitShort} · qty{" "}
                  {count}
                </span>
              </span>
              <span className="text-app-accent tabular shrink-0 text-[0.625rem] font-extrabold">
                AED {money((pick?.price ?? 0) * count)}
              </span>
            </div>
          );
        })}

        <div className="bg-app-surface-2 border-app-border flex items-center justify-between gap-2 border-t px-3 py-2.5">
          <span className="text-app-text text-[0.6875rem] font-extrabold">
            {demo.basketLabel}
          </span>
          <span
            aria-live="polite"
            className="text-app-text tabular text-[0.8125rem] font-extrabold"
          >
            AED {money(total)}
          </span>
        </div>
      </div>
    </div>
  );
}

function EditBasketSheet({
  photos,
  draft,
  lines,
  total,
  onStep,
  onDrop,
  onCancel,
  onSave,
}: {
  readonly photos: ProductPhotos;
  readonly draft: Qty;
  readonly lines: readonly Row[];
  readonly total: number;
  readonly onStep: (item: string, delta: number) => void;
  readonly onDrop: (item: string) => void;
  readonly onCancel: () => void;
  readonly onSave: () => void;
}) {
  return (
    <div className="absolute inset-0 z-10 flex flex-col justify-end rounded-[36px]">
      <button
        type="button"
        aria-label="Close the basket editor"
        onClick={onCancel}
        className="absolute inset-0 bg-black/40"
      />

      <div className="bg-app-screen relative flex max-h-[86%] flex-col overflow-hidden rounded-t-[1.5rem]">
        <div className="flex shrink-0 justify-center pt-2.5 pb-1">
          <span
            aria-hidden="true"
            className="bg-app-border h-1 w-10 rounded-full"
          />
        </div>

        <div className="flex shrink-0 items-start justify-between gap-2 px-4 pb-2.5">
          <span className="min-w-0">
            <span className="text-app-text block text-[0.9375rem] font-bold">
              {demo.editBasketLabel}
            </span>
            <span className="text-app-muted block text-[0.625rem]">
              {demo.editBasketHint}
            </span>
          </span>
          <button
            type="button"
            onClick={onCancel}
            aria-label="Close"
            className="bg-app-surface-2 text-app-muted inline-flex size-7 shrink-0 items-center justify-center rounded-full"
          >
            <X aria-hidden="true" className="size-3.5" />
          </button>
        </div>

        <div className="screen flex-1 overflow-y-auto">
          {lines.length === 0 ? (
            <p className="text-app-muted px-5 py-8 text-center text-[0.6875rem]">
              No items left. Save to clear the basket, or close to cancel.
            </p>
          ) : (
            lines.map((row) => {
              const pick = row.offers[row.bestIndex];
              const count = draft[row.item] ?? 1;
              return (
                <div
                  key={row.item}
                  className="border-app-border border-b px-3 py-2.5"
                >
                  <div className="flex gap-2.5">
                    <Thumb photos={photos} item={row.item} size={44} />
                    <div className="min-w-0 flex-1">
                      <p className="text-app-text text-[0.6875rem] font-semibold">
                        {pick?.title}
                      </p>
                      <p className="text-app-muted mt-0.5 text-[0.5625rem]">
                        {retailers[row.bestIndex]}
                      </p>
                      <p className="text-app-muted tabular text-[0.5625rem]">
                        AED {money(pick?.unitPrice ?? 0)}/{row.unitShort}
                      </p>
                      <p className="text-app-accent tabular mt-0.5 text-[0.6875rem] font-bold">
                        AED {money((pick?.price ?? 0) * count)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onDrop(row.item)}
                      aria-label={`Remove ${row.item}`}
                      className="bg-app-surface-2 text-danger inline-flex size-7 shrink-0 items-center justify-center rounded-full"
                    >
                      <Trash2 aria-hidden="true" className="size-3.5" />
                    </button>
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-app-muted text-[0.625rem] font-medium">
                      {demo.quantityLabel}
                    </span>
                    <span className="flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => onStep(row.item, -1)}
                        disabled={count <= 1}
                        aria-label={`Decrease ${row.item} quantity`}
                        className={cn(
                          "border-app-muted text-app-text bg-app-surface-2 inline-flex size-7 items-center justify-center rounded-full border",
                          count <= 1 && "opacity-40",
                        )}
                      >
                        <Minus aria-hidden="true" className="size-3" />
                      </button>
                      <span className="min-w-[2.5rem] text-center">
                        <span className="text-app-text tabular block text-[0.8125rem] font-bold">
                          {count}
                        </span>
                        <span className="text-app-muted block text-[0.5625rem]">
                          packs
                        </span>
                      </span>
                      <button
                        type="button"
                        onClick={() => onStep(row.item, 1)}
                        aria-label={`Increase ${row.item} quantity`}
                        className="bg-app-accent text-app-screen inline-flex size-7 items-center justify-center rounded-full"
                      >
                        <Plus aria-hidden="true" className="size-3" />
                      </button>
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="bg-app-surface-2 mx-4 mt-2 shrink-0 rounded-[0.7rem] px-3 py-2">
          <div className="flex items-center justify-between">
            <span className="text-app-text text-[0.6875rem] font-semibold">
              {lines.length === 1 ? "1 item" : `${lines.length} items`}
            </span>
            <span className="text-app-text tabular text-[0.8125rem] font-bold">
              AED {money(total)}
            </span>
          </div>
          <p className="text-app-muted mt-0.5 text-[0.5625rem]">
            {demo.estimatedHint}
          </p>
        </div>

        <div className="flex shrink-0 gap-2 px-4 pt-3 pb-4">
          <button
            type="button"
            onClick={onCancel}
            className="bg-app-surface-2 text-app-text flex-1 rounded-[0.7rem] py-2.5 text-[0.75rem] font-semibold"
          >
            {demo.cancelLabel}
          </button>
          <button
            type="button"
            onClick={onSave}
            className="bg-app-accent text-app-screen flex-1 rounded-[0.7rem] py-2.5 text-[0.75rem] font-semibold"
          >
            {demo.saveLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

function Thumb({
  photos,
  item,
  size,
}: {
  readonly photos: ProductPhotos;
  readonly item: string;
  readonly size: number;
}) {
  const src = photos[item];
  return (
    <span
      className="border-app-border bg-app-surface-2 block shrink-0 overflow-hidden rounded-[0.5rem] border"
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image
          src={src}
          alt=""
          width={400}
          height={400}
          className="size-full object-cover"
        />
      ) : (
        <ProductGlyph item={item} />
      )}
    </span>
  );
}

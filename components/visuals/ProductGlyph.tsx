import type { ReactNode } from "react";

const shapes: Record<string, ReactNode> = {
  Milk: (
    <>
      <path
        d="M40 26h20v8l6 10v28a4 4 0 0 1-4 4H38a4 4 0 0 1-4-4V44l6-10z"
        fill="#f1f5ff"
      />
      <path d="M34 56h32v20a4 4 0 0 1-4 4H38a4 4 0 0 1-4-4z" fill="#dbe6fb" />
      <rect x="42" y="20" width="16" height="7" rx="2" fill="#ff744d" />
    </>
  ),
  "Basmati rice": (
    <>
      <path d="M30 34h40l4 44a4 4 0 0 1-4 4H30a4 4 0 0 1-4-4z" fill="#e6d7bd" />
      <path d="M30 34h40l-2 12H32z" fill="#cfbb98" />
      <ellipse cx="50" cy="60" rx="12" ry="5" fill="#fdf6e8" />
    </>
  ),
  Eggs: (
    <>
      <ellipse cx="37" cy="58" rx="13" ry="17" fill="#fdf0d8" />
      <ellipse cx="63" cy="58" rx="13" ry="17" fill="#f7e3c3" />
      <ellipse cx="50" cy="44" rx="13" ry="17" fill="#fff8ec" />
    </>
  ),
  "Chicken breast": (
    <>
      <path
        d="M28 58c0-16 12-26 26-26 12 0 20 8 20 18 0 14-12 24-26 24-12 0-20-6-20-16z"
        fill="#f6d9cf"
      />
      <path
        d="M38 52c6-6 16-8 24-4"
        stroke="#e0b3a4"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </>
  ),
};

export function ProductGlyph({ item }: { readonly item: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      role="presentation"
      className="bg-app-surface-2 h-auto w-full"
    >
      {shapes[item] ?? null}
    </svg>
  );
}

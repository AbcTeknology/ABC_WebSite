/**
 * Abstract illustration of unit-price normalisation.
 *
 * Two packs of different sizes, redrawn onto a common basis. Deliberately
 * carries no product name, no retailer, and no price: it explains the idea
 * without showing product data.
 */
export function UnitPriceMotif() {
  return (
    <svg
      viewBox="0 0 320 200"
      role="img"
      aria-label="Two differently sized packs redrawn onto a shared per-unit basis, so they can be compared fairly."
      className="h-auto w-full max-w-md"
    >
      {/* Raw pack sizes: not comparable as drawn. */}
      <text
        x="0"
        y="16"
        className="fill-[var(--muted)] text-[11px]"
        fontFamily="var(--font-manrope), sans-serif"
      >
        Different pack sizes
      </text>
      <rect x="0" y="28" width="86" height="34" rx="8" fill="var(--card)" />
      <rect
        x="0"
        y="28"
        width="86"
        height="34"
        rx="8"
        fill="none"
        stroke="var(--border)"
      />
      <rect x="98" y="28" width="132" height="34" rx="8" fill="var(--card)" />
      <rect
        x="98"
        y="28"
        width="132"
        height="34"
        rx="8"
        fill="none"
        stroke="var(--border)"
      />

      {/* Normalisation step. */}
      <line
        x1="0"
        y1="86"
        x2="320"
        y2="86"
        stroke="var(--border)"
        strokeDasharray="3 4"
      />
      <text
        x="0"
        y="106"
        className="fill-[var(--muted)] text-[11px]"
        fontFamily="var(--font-manrope), sans-serif"
      >
        Same basis, per kilo
      </text>

      {/* Comparable bars. The cheaper one carries the accent. */}
      <rect x="0" y="118" width="196" height="26" rx="6" fill="var(--border)" />
      <rect x="0" y="152" width="128" height="26" rx="6" fill="var(--accent)" />

      <text
        x="206"
        y="136"
        className="fill-[var(--muted)] text-[11px]"
        fontFamily="var(--font-manrope), sans-serif"
      >
        higher
      </text>
      <text
        x="138"
        y="170"
        className="fill-[var(--text)] text-[11px]"
        fontFamily="var(--font-manrope), sans-serif"
        fontWeight="600"
      >
        lower
      </text>
    </svg>
  );
}

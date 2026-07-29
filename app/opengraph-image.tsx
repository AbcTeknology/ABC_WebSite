import { ImageResponse } from "next/og";
import { company } from "@/content/site";
import { home } from "@/content/copy";

// Rendered once at build time: a static export has no server to generate it
// on request.
export const dynamic = "force-static";

export const alt = `${company.legalName} — AI for everyday spending`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social preview card, generated at build time.
 *
 * Mirrors the hero: dark surface, typographic, with orange used only as a
 * single accent rule. A full orange card would contradict the One Accent Rule
 * in the one place the brand travels furthest from the site.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        backgroundColor: "#0F172A",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            display: "flex",
            width: 44,
            height: 5,
            borderRadius: 999,
            backgroundColor: "#F97316",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            color: "#93A4BF",
          }}
        >
          {company.legalName}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 76,
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: "#F3F7FF",
          maxWidth: 940,
        }}
      >
        {home.hero.headline}
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 26,
          color: "#93A4BF",
        }}
      >
        Built in the United Arab Emirates
      </div>
    </div>,
    size,
  );
}

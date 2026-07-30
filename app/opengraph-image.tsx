import { ImageResponse } from "next/og";
import { company } from "@/content/site";
import { hero } from "@/content/copy";

export const dynamic = "force-static";

export const alt = `${company.legalName}: Applied AI for everyday commerce`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "76px 80px",
        backgroundColor: "#FFFFFF",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            display: "flex",
            width: 40,
            height: 5,
            backgroundColor: "#1746A2",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 27,
            fontWeight: 700,
            color: "#0A2458",
            letterSpacing: "-0.02em",
          }}
        >
          {company.legalName}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 72,
          fontWeight: 700,
          lineHeight: 1.02,
          letterSpacing: "-0.03em",
          color: "#0A2458",
          maxWidth: 920,
        }}
      >
        {hero.headline}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 25,
          color: "#475467",
        }}
      >
        Applied AI for everyday commerce · United Arab Emirates
      </div>
    </div>,
    size,
  );
}

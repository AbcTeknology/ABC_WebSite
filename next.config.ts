import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export: the site is pure marketing content with no server
  // runtime, so it can be served from any static host or the existing nginx VPS.
  output: "export",
  images: { unoptimized: true },
  // Emit `/about/index.html` rather than `/about.html` so static hosts resolve
  // extensionless URLs without per-host rewrite rules.
  trailingSlash: true,
};

export default nextConfig;

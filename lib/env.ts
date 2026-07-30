function read(value: string | undefined, fallback: string): string {
  const trimmed = (value ?? "").trim();
  return trimmed.length > 0 ? trimmed : fallback;
}

export const SITE_URL = read(
  process.env.NEXT_PUBLIC_SITE_URL,
  "https://abcteknology.com",
).replace(/\/$/, "");

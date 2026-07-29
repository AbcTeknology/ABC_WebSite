/**
 * Typed access to the public environment.
 *
 * Every value falls back to a safe default rather than throwing, so the site
 * always builds. A missing store URL is a legitimate state right now: the app
 * is not yet listed, and the badges render a "Coming soon" label instead of
 * linking nowhere.
 */

function read(value: string | undefined, fallback: string): string {
  const trimmed = (value ?? "").trim();
  return trimmed.length > 0 ? trimmed : fallback;
}

/** Canonical origin, never with a trailing slash. */
export const SITE_URL = read(
  process.env.NEXT_PUBLIC_SITE_URL,
  "https://abcteknology.com",
).replace(/\/$/, "");

export type StoreLink = {
  readonly url: string;
  readonly available: boolean;
};

function storeLink(value: string | undefined): StoreLink {
  const url = read(value, "");
  return { url, available: url.length > 0 };
}

export const appStore = storeLink(process.env.NEXT_PUBLIC_APP_STORE_URL);
export const playStore = storeLink(process.env.NEXT_PUBLIC_PLAY_STORE_URL);

/** True while neither listing is live, which drives the "Coming soon" state. */
export const storesPending = !appStore.available && !playStore.available;

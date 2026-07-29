import { chrome } from "@/content/copy";

/**
 * Keyboard users land here first and can jump past the nav.
 * Visually hidden until focused.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="bg-accent text-on-accent sr-only rounded-full px-4 py-2 text-sm font-semibold focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-100"
    >
      {chrome.skipToContent}
    </a>
  );
}

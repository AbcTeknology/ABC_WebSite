import { chrome } from "@/content/copy";

export function SkipLink() {
  return (
    <a
      href="#main"
      className="bg-btn sr-only rounded-sm px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-100"
    >
      {chrome.skipToContent}
    </a>
  );
}

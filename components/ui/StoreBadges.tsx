import { Apple, Play } from "lucide-react";
import { chrome } from "@/content/copy";
import { appStore, playStore, storesPending } from "@/lib/env";
import { ButtonLink, PendingAction } from "./Button";
import { cn } from "@/lib/cn";

type StoreBadgesProps = {
  readonly className?: string;
  /**
   * Show the "not on the app stores yet" line.
   *
   * Off by default. The badges already read "Coming soon", so repeating it in
   * prose under every CTA is redundant, and a small tagline under the hero
   * buttons is exactly the kind of clutter that makes a hero feel templated.
   * The footer opts in, so the caveat is stated once, in full, somewhere
   * permanent.
   */
  readonly showPendingNote?: boolean;
};

/**
 * Download CTAs for both app stores.
 *
 * Neither listing is live yet, so unset URLs render a non-interactive
 * "Coming soon" badge instead of an anchor pointing at `#`. Once a real URL is
 * set the badge becomes a secondary button: the page's single primary accent
 * belongs to one action at a time.
 */
export function StoreBadges({
  className,
  showPendingNote = false,
}: StoreBadgesProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="flex flex-wrap gap-3">
        {appStore.available ? (
          <ButtonLink href={appStore.url} variant="secondary" external>
            <Apple aria-hidden="true" className="size-4" />
            App Store
          </ButtonLink>
        ) : (
          <PendingAction hint={chrome.storesPendingNote}>
            <Apple aria-hidden="true" className="size-4" />
            App Store · {chrome.comingSoon}
          </PendingAction>
        )}

        {playStore.available ? (
          <ButtonLink href={playStore.url} variant="secondary" external>
            <Play aria-hidden="true" className="size-4" />
            Google Play
          </ButtonLink>
        ) : (
          <PendingAction hint={chrome.storesPendingNote}>
            <Play aria-hidden="true" className="size-4" />
            Google Play · {chrome.comingSoon}
          </PendingAction>
        )}
      </div>

      {showPendingNote && storesPending ? (
        <p className="text-muted text-xs">{chrome.storesPendingNote}</p>
      ) : null}
    </div>
  );
}

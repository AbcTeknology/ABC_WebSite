import { chrome } from "@/content/copy";
import { retailers } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type RetailerMarqueeProps = {
  /** Must match the section it sits on, so the edge fade blends. */
  readonly on?: "page" | "band";
};

/**
 * Retailer names as styled text.
 *
 * Not logos: usage rights were never confirmed, and text carries the same
 * information without the licensing question.
 *
 * The caption sits on the container rail rather than centred above the track.
 * Centred, it belonged to neither the section above nor the names below and
 * read as floating; on the rail it lines up with every other left edge on the
 * page and clearly labels what follows.
 */
export function RetailerMarquee({ on = "page" }: RetailerMarqueeProps) {
  return (
    <div>
      <Container>
        <p className="text-muted text-xs font-semibold tracking-wide uppercase">
          {chrome.retailerCaption}
        </p>
      </Container>

      <div
        className={cn("marquee mt-6", on === "band" && "marquee-on-surface")}
      >
        <div className="marquee-track">
          {[0, 1].map((group) => (
            <div
              className="marquee-group"
              key={group}
              // The second pass is a visual duplicate that makes the loop
              // seamless. Screen readers should hear the list once.
              aria-hidden={group === 1}
            >
              {retailers.map((name) => (
                <span
                  key={`${group}-${name}`}
                  className="font-heading text-muted text-xl font-bold tracking-tight whitespace-nowrap sm:text-2xl"
                >
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

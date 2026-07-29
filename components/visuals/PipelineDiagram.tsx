import { technology } from "@/content/copy";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

type PipelineDiagramProps = {
  /** Must match the section it sits on, so the stage cards stay visible. */
  readonly on?: "page" | "band";
};

/**
 * The five-stage agent pipeline, as a labelled flow.
 *
 * This is the site's main "show the product" visual. It depicts architecture,
 * not product data, which is what lets it carry weight on a site that shows no
 * screenshots and no prices.
 *
 * The stages reveal left to right because the diagram describes a sequence.
 * The motion is the explanation, not decoration.
 */
export function PipelineDiagram({ on = "page" }: PipelineDiagramProps) {
  const stages = technology.pipeline.stages;

  return (
    <ol
      className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
      aria-label="Agent pipeline stages"
    >
      {stages.map((stage, index) => (
        <Reveal
          as="li"
          key={stage.title}
          delay={index * 0.07}
          className={cn(
            "border-border relative h-full rounded-2xl border p-5",
            on === "page" ? "bg-surface" : "bg-card",
          )}
        >
          {/* Muted, not accent: orange text on a light surface measures
              2.80:1 and cannot reach 4.5:1 at any weight. Accent stays on
              actions, where it sits behind a fill and passes. */}
          <span
            aria-hidden="true"
            className="text-muted font-heading block text-xs font-bold tracking-widest"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-heading mt-2 text-base font-bold">
            {stage.title}
          </h3>
          <p className="text-muted mt-2 text-sm">{stage.body}</p>

          {/* Connector, drawn only where stages sit side by side. */}
          {index < stages.length - 1 ? (
            <span
              aria-hidden="true"
              className="bg-border absolute top-1/2 -right-3 hidden h-px w-3 lg:block"
            />
          ) : null}
        </Reveal>
      ))}
    </ol>
  );
}

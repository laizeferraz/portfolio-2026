import type { ReactNode } from "react";
import type { Tint } from "@/content/projects";

/** Full class names, so Tailwind can find them. */
const TINT_BG: Record<Tint, string> = {
  lav: "bg-lav",
  pink: "bg-pink",
  peach: "bg-peach",
  blue: "bg-blue",
  butter: "bg-butter",
  mint: "bg-mint",
};

type DemoPanelProps = {
  /** What the demo shows, e.g. "<grok-chat-bubble>". */
  name: string;
  tint: Tint;
  /**
   * DESIGN.md: say "Live demo" only for the real component or product.
   * Our demos are React re-creations, so they're sketches.
   */
  kind?: "Interactive sketch" | "Live demo";
  className?: string;
  children: ReactNode;
};

/** The pastel frame around a project's small demo, with a header row. */
export function DemoPanel({
  name,
  tint,
  kind = "Interactive sketch",
  className = "",
  children,
}: DemoPanelProps) {
  return (
    <div
      className={`flex min-w-0 flex-col gap-3.5 rounded-xl p-5.5 ${TINT_BG[tint]} ${className}`}
    >
      <p className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-xs font-semibold text-muted">
        <span className="whitespace-nowrap">
          {name}
          <span className="sr-only">,</span>
        </span>
        <span className="rounded-full bg-card px-2.5 whitespace-nowrap text-ink">
          {kind}
        </span>
      </p>
      {children}
    </div>
  );
}

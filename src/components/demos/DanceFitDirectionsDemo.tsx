"use client";

import { useState } from "react";
import type { DesignDirection } from "@/content/projects";

/**
 * The two directions' own colours. Like an illustration, they belong to
 * the demo, not the site theme, so they're fixed hex values that stay
 * the same in light and dark mode (CLAUDE.md allows them only here).
 * Text pairs pass 4.5:1: #5E1636 on white, white on #C2306A (5.4:1),
 * #FFF6D6 on #1E1B26 and #1E1B26 on #FFD24A.
 */
const PREVIEW = {
  1: {
    frame: "bg-[#FFFFFF] text-[#5E1636]",
    // Young Serif only has a 400 weight; don't fake a bold.
    title: "font-display font-normal",
    button: "bg-[#C2306A] text-[#FFFFFF]",
  },
  2: {
    frame: "bg-[#1E1B26] text-[#FFF6D6]",
    title: "font-sans font-bold",
    button: "bg-[#FFD24A] text-[#1E1B26]",
  },
} as const;

type DanceFitDirectionsDemoProps = {
  directions: DesignDirection[];
};

/**
 * Switch between the two design directions shown to the client. The
 * preview is one image (role="img") named after the selected direction.
 * A changed label isn't announced on its own, so a status message says
 * what's showing after each switch.
 */
export function DanceFitDirectionsDemo({
  directions,
}: DanceFitDirectionsDemoProps) {
  const [selectedId, setSelectedId] = useState<DesignDirection["id"]>(1);
  // Empty until the first switch, so nothing is announced on page load.
  const [announcement, setAnnouncement] = useState("");

  const selected =
    directions.find((direction) => direction.id === selectedId) ??
    directions[0];
  const look = PREVIEW[selected.id];

  function choose(direction: DesignDirection) {
    setSelectedId(direction.id);
    setAnnouncement(`Showing ${direction.description}`);
  }

  return (
    <>
      {/* biome-ignore lint/a11y/useSemanticElements: a <fieldset> would add a legend and border we don't want; role="group" names the set the same way. */}
      <div
        role="group"
        aria-label="Choose a design direction"
        className="flex gap-2"
      >
        {directions.map((direction) => {
          const isSelected = direction.id === selectedId;
          return (
            <button
              key={direction.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => choose(direction)}
              // 1.5px border: no scale class for it.
              className={`min-h-11 flex-1 rounded-full border-[1.5px] px-3.5 text-sm font-semibold ${isSelected ? "border-ink bg-ink text-bg" : "border-line-strong bg-card text-ink"} motion-ok:transition-colors motion-ok:duration-200`}
            >
              {direction.label}
            </button>
          );
        })}
      </div>

      <div
        role="img"
        aria-label={selected.description}
        className={`flex flex-col gap-2.5 rounded-lg p-5.5 ${look.frame} motion-ok:transition-colors motion-ok:duration-300`}
      >
        <span className="text-xs font-bold tracking-eyebrow uppercase opacity-80">
          Sunshine Coast
        </span>
        <span className={`text-3xl leading-[1.05] ${look.title}`}>
          DanceFit
        </span>
        <span className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-4 py-2 text-sm font-bold ${look.button}`}
          >
            Book a class
          </span>
          <span className="text-sm font-semibold">Newcomer offer</span>
        </span>
      </div>

      {/* biome-ignore lint/a11y/useSemanticElements: <output> isn't announced reliably by Safari + VoiceOver; role="status" is. */}
      <p role="status" className="sr-only">
        {announcement}
      </p>
    </>
  );
}

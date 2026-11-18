"use client";

import { useState } from "react";

type CetaBraveStepsDemoProps = {
  legend: string;
  /** Shown after the legend, e.g. "(sample goals)". */
  legendNote: string;
  steps: string[];
  initiallyDone: boolean[];
};

/**
 * A sketch of Ceta's goal tracker: real checkboxes in a fieldset. The
 * progress bar is decorative; the count is spoken through role="status".
 */
export function CetaBraveStepsDemo({
  legend,
  legendNote,
  steps,
  initiallyDone,
}: CetaBraveStepsDemoProps) {
  const [done, setDone] = useState(initiallyDone);
  const doneCount = done.filter(Boolean).length;
  const total = steps.length;
  const message =
    doneCount === total
      ? `All ${total} brave steps done — reward unlocked!`
      : `${doneCount} of ${total} brave steps done`;

  function toggle(index: number) {
    setDone((current) =>
      current.map((value, i) => (i === index ? !value : value)),
    );
  }

  return (
    <fieldset className="flex flex-col gap-1 rounded-lg bg-card p-4">
      {/* float + full width lets the legend sit inside the padding. */}
      <legend className="float-left w-full pb-1.5 text-sm font-bold text-ink">
        {legend} <span className="font-medium text-muted">{legendNote}</span>
      </legend>

      {steps.map((step, index) => (
        <label
          key={step}
          className="flex min-h-11 cursor-pointer items-center gap-3 text-sm text-ink"
        >
          <input
            type="checkbox"
            checked={done[index]}
            onChange={() => toggle(index)}
            className="size-5 flex-none accent-accent"
          />
          <span>{step}</span>
        </label>
      ))}

      {/* One segment per step, filled as steps get done. No inline width. */}
      <div aria-hidden="true" className="mt-2 flex gap-1">
        {steps.map((step, index) => (
          <span
            key={step}
            className={`h-2.5 flex-1 rounded-full ${index < doneCount ? "bg-accent" : "bg-chip"} motion-ok:transition-colors motion-ok:duration-300`}
          />
        ))}
      </div>

      {/* biome-ignore lint/a11y/useSemanticElements: <output> isn't announced reliably by Safari + VoiceOver; role="status" is. */}
      <p role="status" className="mt-1.5 text-sm font-semibold text-muted">
        {message}
      </p>
    </fieldset>
  );
}

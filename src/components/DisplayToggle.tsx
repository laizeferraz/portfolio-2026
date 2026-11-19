import { useId } from "react";

type DisplayToggleProps = {
  /** The visible text, which is also the button's accessible name. */
  label: string;
  pressed: boolean;
  onToggle: () => void;
  /**
   * Shown under the label and read as the button's description. With
   * `locked`, it explains why the switch can't be changed.
   */
  note?: string;
  /** Stays focusable (aria-disabled, not disabled), but clicks do nothing. */
  locked?: boolean;
};

/**
 * One Display settings switch: a toggle button (aria-pressed) with a
 * decorative track and knob. The knob moves as well as changing colour,
 * so the state never relies on colour alone.
 */
export function DisplayToggle({
  label,
  pressed,
  onToggle,
  note,
  locked = false,
}: DisplayToggleProps) {
  const noteId = useId();

  return (
    <button
      type="button"
      aria-pressed={pressed}
      aria-disabled={locked || undefined}
      aria-describedby={note ? noteId : undefined}
      onClick={locked ? undefined : onToggle}
      className="flex min-h-11 w-full items-center justify-between gap-3 px-1 py-1.5 text-left text-sm font-medium text-ink aria-disabled:cursor-not-allowed"
    >
      <span className="flex flex-col">
        <span>{label}</span>
        {note && (
          <span id={noteId} className="text-xs font-normal text-muted">
            {note}
          </span>
        )}
      </span>
      <span
        aria-hidden="true"
        className={`flex h-6 w-10.5 flex-none rounded-full p-0.75 ${pressed ? "bg-accent" : "bg-line-strong"} motion-ok:transition-colors motion-ok:duration-200`}
      >
        <span
          className={`size-4.5 rounded-full shadow-sm ${pressed ? "translate-x-4.5 bg-accent-ink" : "bg-card"} motion-ok:transition motion-ok:duration-200 motion-ok:ease-soft`}
        />
      </span>
    </button>
  );
}

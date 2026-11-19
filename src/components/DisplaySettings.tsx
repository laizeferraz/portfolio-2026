"use client";

import { useId, useLayoutEffect, useState, useSyncExternalStore } from "react";
import {
  applyStoredPrefs,
  isDark,
  isFocusMapOn,
  isMotionReduced,
  osReducesMotion,
  setDark,
  setFocusMap,
  setMotionReduced,
  subscribe,
} from "@/lib/displayPrefs";
import { DisplayToggle } from "./DisplayToggle";

/** The server can't know her settings, so it renders everything off. */
const serverSnapshot = () => false;

/** Reads one setting from <html> and re-renders when it changes. */
function usePref(getSnapshot: () => boolean) {
  return useSyncExternalStore(subscribe, getSnapshot, serverSnapshot);
}

/**
 * The Display settings disclosure: a button that shows or hides three
 * switches. The settings themselves live on <html> (see lib/displayPrefs).
 */
export function DisplaySettings() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const dark = usePref(isDark);
  const motionReduced = usePref(isMotionReduced);
  const motionLockedByOS = usePref(osReducesMotion);
  const focusMap = usePref(isFocusMapOn);

  // Dev only: Strict Mode's remount clears what the inline script set.
  useLayoutEffect(applyStoredPrefs, []);

  const onCount = [dark, motionReduced, focusMap].filter(Boolean).length;

  return (
    <div className="flex max-w-80 flex-col gap-1">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
        className="inline-flex min-h-11 items-center gap-2.5 self-start rounded-full border-[1.5px] border-line-strong pr-4 pl-3.5 text-sm font-semibold text-ink"
      >
        <SlidersIcon />
        <span>Display settings</span>
        {onCount > 0 && (
          <span className="rounded-full bg-accent px-2 text-xs leading-5 font-bold text-accent-ink">
            <span className="sr-only">, </span>
            {onCount} on
          </span>
        )}
        <svg
          aria-hidden="true"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${open ? "rotate-180" : ""} motion-ok:transition-transform motion-ok:duration-200 motion-ok:ease-soft`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        // A <fieldset> is a group (role="group") without the ARIA. min-w-0
        // undoes its default min-width so it can't block reflow at 320px.
        <fieldset
          id={panelId}
          aria-label="Display settings"
          className="flex min-w-0 flex-col px-1 pt-1"
        >
          <DisplayToggle
            label="Dark mode"
            pressed={dark}
            onToggle={() => setDark(!dark)}
          />
          <DisplayToggle
            label="Reduce motion"
            pressed={motionReduced}
            onToggle={() => setMotionReduced(!motionReduced)}
            locked={motionLockedByOS}
            note={
              motionLockedByOS
                ? "On because your device reduces motion."
                : undefined
            }
          />
          <DisplayToggle
            label="Show focus order"
            pressed={focusMap}
            onToggle={() => setFocusMap(!focusMap)}
          />
          <p className="mx-1 mt-1 text-xs text-muted">
            These really work — accessibility is how I build, not a checkbox.
          </p>
        </fieldset>
      )}
    </div>
  );
}

function SlidersIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h10" />
      <path d="M18 6h2" />
      <circle cx="16" cy="6" r="2" />
      <path d="M4 12h4" />
      <path d="M12 12h8" />
      <circle cx="10" cy="12" r="2" />
      <path d="M4 18h12" />
      <path d="M20 18h0" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  );
}

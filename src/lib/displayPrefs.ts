/*
 * Display settings: dark mode, reduce motion and show focus order.
 *
 * Each setting is an attribute on <html>, and tokens.css does the rest:
 *   data-theme="dark|light"  (no attribute = follow the OS)
 *   data-motion="reduce"     (the OS setting also counts, via motion-ok:)
 *   data-focus-map           (numbers every focusable element)
 *
 * Choices are saved in localStorage. DISPLAY_PREFS_SCRIPT applies them
 * before first paint; the rest of this file is for the DisplaySettings
 * component. Keep the script and applyStoredPrefs() in step.
 */

const KEYS = {
  theme: "lf-theme",
  motion: "lf-motion",
  focusMap: "lf-focus-map",
} as const;

const DARK_QUERY = "(prefers-color-scheme: dark)";
const REDUCE_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Runs in <head> while the HTML is parsed, so the page never flashes the
 * wrong theme. try/catch: localStorage can throw (private mode, blocked
 * storage), and then the site simply follows the OS.
 */
export const DISPLAY_PREFS_SCRIPT = `(function(){try{var d=document.documentElement,s=localStorage,t=s.getItem("${KEYS.theme}");if(t==="dark"||t==="light")d.setAttribute("data-theme",t);if(s.getItem("${KEYS.motion}")==="reduce")d.setAttribute("data-motion","reduce");if(s.getItem("${KEYS.focusMap}")==="on")d.setAttribute("data-focus-map","")}catch(e){}})()`;

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function save(key: string, value: string | null) {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch {
    // Storage is blocked: the setting still works until the page reloads.
  }
}

function setAttr(name: string, value: string | null) {
  const html = document.documentElement;
  if (value === null) html.removeAttribute(name);
  else html.setAttribute(name, value);
}

/**
 * The same job as DISPLAY_PREFS_SCRIPT. In development, React's Strict Mode
 * remount clears the attributes the script set on <html>, so the component
 * calls this once on mount. In production it changes nothing.
 */
export function applyStoredPrefs() {
  const theme = read(KEYS.theme);
  if (theme === "dark" || theme === "light") setAttr("data-theme", theme);
  if (read(KEYS.motion) === "reduce") setAttr("data-motion", "reduce");
  if (read(KEYS.focusMap) === "on") setAttr("data-focus-map", "");
}

/* ---------- Reading the current state (for useSyncExternalStore) ---------- */

/** Calls onChange whenever a setting or the matching OS preference changes. */
export function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme", "data-motion", "data-focus-map"],
  });

  const queries = [
    window.matchMedia(DARK_QUERY),
    window.matchMedia(REDUCE_MOTION_QUERY),
  ];
  for (const query of queries) query.addEventListener("change", onChange);

  return () => {
    observer.disconnect();
    for (const query of queries) query.removeEventListener("change", onChange);
  };
}

/** Dark if she chose dark, or if nothing is chosen and the OS is dark. */
export function isDark() {
  const theme = document.documentElement.getAttribute("data-theme");
  if (theme) return theme === "dark";
  return window.matchMedia(DARK_QUERY).matches;
}

/** The OS asks for less motion. The site can't switch motion back on then. */
export function osReducesMotion() {
  return window.matchMedia(REDUCE_MOTION_QUERY).matches;
}

export function isMotionReduced() {
  return (
    document.documentElement.getAttribute("data-motion") === "reduce" ||
    osReducesMotion()
  );
}

export function isFocusMapOn() {
  return document.documentElement.hasAttribute("data-focus-map");
}

/* ---------- Changing a setting: update <html> and save the choice ---------- */

/** Saved explicitly either way, so it can override the OS in both directions. */
export function setDark(on: boolean) {
  const theme = on ? "dark" : "light";
  setAttr("data-theme", theme);
  save(KEYS.theme, theme);
}

export function setMotionReduced(on: boolean) {
  setAttr("data-motion", on ? "reduce" : null);
  save(KEYS.motion, on ? "reduce" : null);
}

export function setFocusMap(on: boolean) {
  setAttr("data-focus-map", on ? "" : null);
  save(KEYS.focusMap, on ? "on" : null);
}

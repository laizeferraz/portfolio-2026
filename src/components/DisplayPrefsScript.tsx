import { DISPLAY_PREFS_SCRIPT } from "@/lib/displayPrefs";

/**
 * Applies the saved Display settings before first paint, so a dark-mode
 * visitor never sees a flash of the light theme. Goes in <head>.
 */
export function DisplayPrefsScript() {
  return (
    <script
      // biome-ignore lint/security/noDangerouslySetInnerHtml: a fixed string from our own code, needed to run before paint.
      dangerouslySetInnerHTML={{ __html: DISPLAY_PREFS_SCRIPT }}
    />
  );
}

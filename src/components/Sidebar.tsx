import { DisplaySettings } from "./DisplaySettings";
import { SectionNav } from "./SectionNav";
import { SidebarIntro } from "./SidebarIntro";
import { SidebarLinks } from "./SidebarLinks";

/**
 * The home page's <header>: intro and the links that stay put
 * (WCAG 3.2.6), the section nav, then Display settings.
 * - Phones and 1024px+ (`split:`): one column in that order. From 1024px
 *   it's a sticky column — sticky only when it's really a column, so
 *   content never scrolls underneath it.
 * - 640–1023px: a two-column grid. Row 1: intro and links on the left,
 *   the nav against the right edge. Row 2: Display settings, under the
 *   intro on the left.
 * The tablet grid reads row by row (intro, links, nav, settings), which
 * is also the DOM order, so the focus order and the "Show focus order"
 * numbers stay honest at every width without rendering anything twice.
 */
export function Sidebar() {
  return (
    <header className="flex min-w-0 flex-col gap-10 pt-[clamp(40px,7vw,96px)] pb-10 sm:max-split:grid sm:max-split:grid-cols-2 sm:max-split:items-start sm:max-split:gap-x-10 sm:max-split:gap-y-5 split:sticky split:top-0 split:-mx-4 split:max-h-screen split:self-start split:overflow-y-auto split:px-4">
      <div className="flex min-w-0 flex-col gap-4.5 sm:max-split:col-start-1 sm:max-split:row-start-1">
        <SidebarIntro />
        <div className="mt-1">
          <SidebarLinks />
        </div>
      </div>

      <div className="sm:max-split:col-start-2 sm:max-split:row-start-1 sm:max-split:justify-self-end">
        <SectionNav />
      </div>

      <div className="min-w-0 sm:max-split:col-start-1 sm:max-split:row-start-2">
        <DisplaySettings />
      </div>
    </header>
  );
}

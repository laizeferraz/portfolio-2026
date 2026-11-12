import { DisplaySettings } from "./DisplaySettings";
import { SectionNav } from "./SectionNav";
import { SidebarIntro } from "./SidebarIntro";
import { SidebarLinks } from "./SidebarLinks";

/**
 * The home page's <header>, in two blocks: who Laize is plus the section
 * nav, then Display settings plus the links that stay put (WCAG 3.2.6).
 * One column on phones, side by side from 640px, and a sticky column
 * from 960px (`split:`). Sticky only when it's really a column, so
 * content never scrolls underneath it.
 */
export function Sidebar() {
  return (
    <header className="flex min-w-0 flex-col gap-12 pt-[clamp(40px,7vw,96px)] pb-10 sm:max-split:flex-row sm:max-split:flex-wrap sm:max-split:items-end split:sticky split:top-0 split:-mx-4 split:max-h-screen split:self-start split:overflow-y-auto split:px-4">
      <div className="flex min-w-0 flex-col gap-4.5 sm:max-split:flex-[1_1_280px]">
        <SidebarIntro />
        <SectionNav />
      </div>

      <div className="flex min-w-0 flex-col gap-5 sm:max-split:flex-[1_1_280px]">
        <DisplaySettings />
        <SidebarLinks />
      </div>
    </header>
  );
}

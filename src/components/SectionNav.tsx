import { HOME_SECTIONS } from "@/content/site";

/**
 * In-page links to the home sections. The bar next to each label is
 * decoration: it grows on hover or keyboard focus, so it's aria-hidden.
 *
 * At 640–1023px the nav sits against the right edge of the top header,
 * so the bar moves after the label (flex-row-reverse) and the links are
 * right-aligned: as the bar grows, the label slides left with it.
 * Swapping a decorative span's position changes nothing for screen
 * readers or the focus order.
 */
export function SectionNav() {
  return (
    <nav aria-label="Sections">
      <ul className="flex flex-col gap-0.5 sm:max-split:items-end">
        {HOME_SECTIONS.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="group inline-flex min-h-11 items-center gap-4 text-xs font-bold uppercase tracking-eyebrow text-ink no-underline sm:max-split:flex-row-reverse"
            >
              <span
                aria-hidden="true"
                className="inline-block h-0.5 w-7 bg-current opacity-45 group-hover:w-16 group-hover:opacity-100 group-focus-visible:w-16 group-focus-visible:opacity-100 motion-ok:transition-[width,opacity] motion-ok:duration-250 motion-ok:ease-soft"
              />
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

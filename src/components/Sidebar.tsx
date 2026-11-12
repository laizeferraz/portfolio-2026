import {
  GITHUB_URL,
  LINKEDIN_URL,
  MAILTO,
  RESUME_SIZE,
  RESUME_URL,
} from "@/content/site";
import { DisplaySettings } from "./DisplaySettings";
import { LinkBase } from "./LinkBase";
import { SectionNav } from "./SectionNav";

/* The hero text rises in three steps, 120ms apart, once, only if motion is allowed. */
const rise1 = "motion-ok:animate-rise";
const rise2 = "motion-ok:animate-rise motion-ok:[animation-delay:120ms]";
const rise3 = "motion-ok:animate-rise motion-ok:[animation-delay:240ms]";

const sidebarLink =
  "inline-flex min-h-11 items-center text-sm font-semibold text-ink underline underline-offset-5";

/**
 * The home page's <header>: who Laize is, the section nav, and the
 * links that stay put (WCAG 3.2.6). Sticky only in the two-column layout.
 */
export function Sidebar() {
  const resumeLabel = RESUME_SIZE
    ? `Résumé (PDF, ${RESUME_SIZE})`
    : "Résumé (PDF)";

  return (
    <header className="flex min-w-0 flex-col gap-12 pt-[clamp(40px,7vw,96px)] pb-10 sm:max-split:flex-row sm:max-split:flex-wrap sm:max-split:items-end split:sticky split:top-0 split:-mx-4 split:max-h-screen split:self-start split:overflow-y-auto split:px-4">
      <div className="flex min-w-0 flex-col gap-4.5 sm:max-split:flex-[1_1_280px]">
        <div className={`flex items-center gap-3.5 ${rise1}`}>
          {/* Placeholder until the photo arrives; the initials add nothing for screen readers. */}
          <div
            aria-hidden="true"
            className="grid size-16 flex-none place-items-center rounded-full bg-lav font-display text-[1.375rem] text-accent-text outline-3 outline-offset-2 outline-lav"
          >
            LF
          </div>
          <p className="font-hand text-greeting font-semibold text-accent-text">
            <span lang="pt">Olá!</span> Hi there,
          </p>
        </div>

        <h1 className={`font-display text-name text-balance ${rise2}`}>
          Laize Ferraz
        </h1>
        <p className={`text-lg font-semibold ${rise2}`}>
          Frontend Software Engineer
        </p>
        <p className={`max-w-95 text-pretty text-muted ${rise3}`}>
          I build accessible React interfaces — and the component libraries
          behind them.
        </p>
        <p
          className={`flex items-start gap-2.5 text-sm font-medium text-muted ${rise3}`}
        >
          <span aria-hidden="true" className="flex h-lh flex-none items-center">
            <span className="relative size-2 rounded-full bg-status-dot ring-4 ring-status-dot/20 after:absolute after:inset-0 after:rounded-full after:bg-status-dot after:opacity-0 motion-ok:after:animate-ping-once" />
          </span>
          Available now · Sunshine Coast, QLD · Australian citizen
        </p>

        <SectionNav />
      </div>

      <div className="flex min-w-0 flex-col gap-5 sm:max-split:flex-[1_1_280px]">
        <DisplaySettings />
        <ul className="flex flex-wrap gap-x-4.5 gap-y-1">
          <li>
            <LinkBase href={GITHUB_URL} external className={sidebarLink}>
              GitHub
            </LinkBase>
          </li>
          <li>
            <LinkBase href={LINKEDIN_URL} external className={sidebarLink}>
              LinkedIn
            </LinkBase>
          </li>
          <li>
            <LinkBase href={RESUME_URL} className={sidebarLink}>
              {resumeLabel}
            </LinkBase>
          </li>
          <li>
            <LinkBase href={MAILTO} className={sidebarLink}>
              Email
            </LinkBase>
          </li>
        </ul>
      </div>
    </header>
  );
}

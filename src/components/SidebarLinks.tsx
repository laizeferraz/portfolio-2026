import {
  GITHUB_URL,
  LINKEDIN_URL,
  MAILTO,
  RESUME_SIZE,
  RESUME_URL,
} from "@/content/site";
import { LinkBase } from "./LinkBase";

const linkStyle =
  "inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-ink underline underline-offset-5";

/**
 * The links that stay in the sidebar on every visit (WCAG 3.2.6).
 * All open in the same tab. ↗ marks the two that leave the site.
 */
export function SidebarLinks() {
  const resumeLabel = RESUME_SIZE
    ? `Résumé (PDF, ${RESUME_SIZE})`
    : "Résumé (PDF)";

  return (
    <ul className="flex flex-wrap gap-x-4.5 gap-y-1">
      <li>
        <LinkBase href={GITHUB_URL} external className={linkStyle}>
          GitHub<span aria-hidden="true">↗</span>
        </LinkBase>
      </li>
      <li>
        <LinkBase href={LINKEDIN_URL} external className={linkStyle}>
          LinkedIn<span aria-hidden="true">↗</span>
        </LinkBase>
      </li>
      <li>
        <LinkBase href={RESUME_URL} className={linkStyle}>
          {resumeLabel}
        </LinkBase>
      </li>
      <li>
        <LinkBase href={MAILTO} className={linkStyle}>
          Email
        </LinkBase>
      </li>
    </ul>
  );
}

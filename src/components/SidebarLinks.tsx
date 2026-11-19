import {
  GITHUB_URL,
  LINKEDIN_URL,
  MAILTO,
  RESUME_SIZE,
  RESUME_URL,
} from "@/content/site";
import { Icon, type IconName } from "./Icon";
import { LinkBase } from "./LinkBase";

type SidebarLink = {
  href: string;
  icon: IconName;
  /** The link's accessible name. Screen readers hear it; it's sr-only. */
  label: string;
  external?: boolean;
};

const LINKS: SidebarLink[] = [
  { href: GITHUB_URL, icon: "github", label: "GitHub", external: true },
  { href: LINKEDIN_URL, icon: "linkedin", label: "LinkedIn", external: true },
  {
    href: RESUME_URL,
    icon: "resume",
    label: RESUME_SIZE ? `Résumé (PDF, ${RESUME_SIZE})` : "Résumé (PDF)",
  },
  { href: MAILTO, icon: "email", label: "Email" },
];

/**
 * The links that stay in the sidebar on every visit (WCAG 3.2.6), as
 * icons. Each name is sr-only text inside the link, so screen readers
 * and voice control get "GitHub", "Résumé (PDF, 65 KB)"…, and the 44px
 * square keeps the target well over 24px (WCAG 2.5.8).
 * All open in the same tab.
 */
export function SidebarLinks() {
  return (
    <ul className="-ml-2.5 flex flex-wrap gap-1">
      {LINKS.map((link) => (
        <li key={link.icon}>
          <LinkBase
            href={link.href}
            external={link.external}
            className="inline-flex size-11 items-center justify-center rounded-full text-ink hover:bg-card hover:text-accent-text motion-ok:transition-colors"
          >
            <Icon name={link.icon} className="size-6" />
            <span className="sr-only">{link.label}</span>
          </LinkBase>
        </li>
      ))}
    </ul>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";

export type LinkBaseProps = {
  href: string;
  className?: string;
  /** Goes to another site: adds rel="noopener". */
  external?: boolean;
  /** Opens a new tab and says so to screen readers. Prefer the same tab. */
  newTab?: boolean;
  children: ReactNode;
};

/** Pages in this app go through next/link. Files, mailto: and other sites don't. */
function isAppRoute(href: string) {
  return href.startsWith("/") && !href.startsWith("/files/");
}

/**
 * The plumbing Button and TextLink share: picks next/link or <a>,
 * and handles new-tab behaviour. Not meant to be used on its own.
 */
export function LinkBase({
  href,
  className,
  external = false,
  newTab = false,
  children,
}: LinkBaseProps) {
  const newTabText = newTab ? (
    <span className="sr-only"> (opens in a new tab)</span>
  ) : null;

  if (isAppRoute(href) && !newTab) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : external ? "noopener" : undefined}
    >
      {children}
      {newTabText}
    </a>
  );
}

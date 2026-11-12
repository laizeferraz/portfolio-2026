import type { ReactNode } from "react";
import { LinkBase } from "./LinkBase";

type ButtonProps = {
  href: string;
  /** One primary per view. */
  variant?: "primary" | "secondary";
  /** Secondary only: "tint" on pastel panels, "page" on the page background. */
  surface?: "page" | "tint";
  /** "external" adds ↗ and marks the link as going to another site. */
  icon?: "arrow" | "external" | "none";
  newTab?: boolean;
  children: ReactNode;
};

const base =
  "inline-flex min-h-12.5 items-center gap-2.5 rounded-full px-6 text-sm font-bold no-underline motion-ok:transition motion-ok:duration-200 motion-ok:ease-soft motion-ok:hover:-translate-y-0.5";

const styles = {
  primary: "bg-accent text-accent-ink",
  tint: "bg-card text-ink",
  page: "bg-transparent text-ink ring-[1.5px] ring-line-strong ring-inset",
};

/** A pill-shaped link that looks like a button. */
export function Button({
  href,
  variant = "primary",
  surface = "page",
  icon = "none",
  newTab = false,
  children,
}: ButtonProps) {
  const look = variant === "primary" ? styles.primary : styles[surface];

  return (
    <LinkBase
      href={href}
      external={icon === "external"}
      newTab={newTab}
      className={`${base} ${look}`}
    >
      {children}
      {icon === "arrow" && <span aria-hidden="true">→</span>}
      {icon === "external" && <span aria-hidden="true">↗</span>}
    </LinkBase>
  );
}

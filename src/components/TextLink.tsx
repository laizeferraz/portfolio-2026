import type { ReactNode } from "react";
import { LinkBase } from "./LinkBase";

type TextLinkProps = {
  href: string;
  /**
   * Extra words only screen readers hear, straight after the visible text.
   * Use it to make repeated links unique: "Read the story" + " about Ceta".
   * Start it with a space.
   */
  srText?: string;
  /** Goes to another site: adds ↗. */
  external?: boolean;
  newTab?: boolean;
  /** Adds a trailing → (hidden from screen readers). */
  arrow?: boolean;
  /** For links inside a paragraph: no min-height, flows with the text. */
  inline?: boolean;
  children: ReactNode;
};

/** An accent-coloured link. Always underlined, so colour isn't the only cue. */
export function TextLink({
  href,
  srText,
  external = false,
  newTab = false,
  arrow = false,
  inline = false,
  children,
}: TextLinkProps) {
  const layout = inline
    ? ""
    : "inline-flex min-h-11 items-center gap-2 self-start";

  return (
    <LinkBase
      href={href}
      external={external}
      newTab={newTab}
      className={`font-bold text-accent-text underline underline-offset-5 ${layout}`}
    >
      <span>
        {children}
        {srText && <span className="sr-only">{srText}</span>}
      </span>
      {arrow && <span aria-hidden="true">→</span>}
      {external && <span aria-hidden="true">↗</span>}
    </LinkBase>
  );
}

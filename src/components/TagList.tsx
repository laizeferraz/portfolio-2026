import type { ReactNode } from "react";

type TagListProps = {
  /** Optional name for the list, e.g. "Tech used". */
  label?: string;
  children: ReactNode;
};

/** A row of Tags. Keep it to 5 or fewer per item. */
export function TagList({ label, children }: TagListProps) {
  return (
    // role="list" keeps list semantics in Safari/VoiceOver, which drops them
    // when list-style is none (Tailwind's reset).
    // biome-ignore lint/a11y/noRedundantRoles: see comment above
    // biome-ignore lint/a11y/useSemanticElements: it already is a <ul>
    <ul role="list" aria-label={label} className="flex flex-wrap gap-1.5">
      {children}
    </ul>
  );
}

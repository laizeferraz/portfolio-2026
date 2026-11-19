import type { ReactNode } from "react";

type SectionLabelProps = {
  /** h2 for home section headings; p for the eyebrow above a story H1. */
  as?: "h2" | "p";
  id?: string;
  children: ReactNode;
};

/** Small uppercase eyebrow in accent-text. */
export function SectionLabel({
  as: Tag = "h2",
  id,
  children,
}: SectionLabelProps) {
  return (
    <Tag
      id={id}
      className="text-xs font-bold uppercase tracking-eyebrow text-accent-text"
    >
      {children}
    </Tag>
  );
}

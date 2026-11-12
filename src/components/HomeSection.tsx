import type { ReactNode } from "react";
import type { HomeSectionId } from "@/content/site";
import { SectionLabel } from "./SectionLabel";

type HomeSectionProps = {
  id: HomeSectionId;
  heading: string;
  children?: ReactNode;
};

/**
 * One section of the home page, labelled by its small uppercase H2.
 * scroll-mt keeps the heading off the very top edge after a nav jump.
 */
export function HomeSection({ id, heading, children }: HomeSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="flex scroll-mt-8 flex-col gap-5"
    >
      <SectionLabel id={headingId}>{heading}</SectionLabel>
      {children}
    </section>
  );
}

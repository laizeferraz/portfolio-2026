import { EXPERIENCE } from "@/content/experience";
import { RESUME_SIZE, RESUME_URL } from "@/content/site";
import { ExperienceItem } from "./ExperienceItem";
import { TextLink } from "./TextLink";

/** The body of the home page's Experience section. */
export function ExperienceList() {
  const resumeLabel = RESUME_SIZE
    ? `View full résumé (PDF, ${RESUME_SIZE})`
    : "View full résumé (PDF)";

  return (
    <div className="flex flex-col gap-3">
      {/* @container lets each item switch to two columns based on the
          list's own width, not the viewport (the sidebar takes a share). */}
      {/* role="list" keeps list semantics in Safari/VoiceOver, which drops
          them when list-style is none (Tailwind's reset). */}
      {/* biome-ignore lint/a11y/noRedundantRoles: see comment above */}
      {/* biome-ignore lint/a11y/useSemanticElements: it already is an <ol> */}
      <ol role="list" className="@container flex flex-col gap-1">
        {EXPERIENCE.map((item) => (
          <ExperienceItem key={item.id} item={item} />
        ))}
      </ol>

      <TextLink href={RESUME_URL}>{resumeLabel}</TextLink>
    </div>
  );
}

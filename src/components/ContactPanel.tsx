import { EMAIL, MAILTO, RESUME_SIZE, RESUME_URL } from "@/content/site";
import { Button } from "./Button";

type ContactPanelProps = {
  /** "Hiring a frontend engineer?" on home, "Like what you see?" on stories. */
  heading: string;
  text: string;
};

/**
 * The lavender block that ends every page. Email and résumé are always
 * here, in the same order, so help is consistent (WCAG 3.2.6).
 */
export function ContactPanel({ heading, text }: ContactPanelProps) {
  const resumeLabel = RESUME_SIZE
    ? `Download résumé (PDF, ${RESUME_SIZE})`
    : "Download résumé (PDF)";

  return (
    <section
      aria-labelledby="contact-heading"
      className="flex flex-col gap-3.5 rounded-3xl bg-lav p-[clamp(1.25rem,3.5vw,2.5rem)]"
    >
      <h2
        id="contact-heading"
        className="font-display text-display-md text-balance text-ink"
      >
        {heading}
      </h2>
      <p className="max-w-130 text-pretty text-muted">{text}</p>
      <div className="mt-1.5 flex flex-wrap gap-2.5">
        <Button href={MAILTO} icon="arrow">
          {EMAIL}
        </Button>
        <Button href={RESUME_URL} variant="secondary" surface="tint">
          {resumeLabel}
        </Button>
      </div>
    </section>
  );
}

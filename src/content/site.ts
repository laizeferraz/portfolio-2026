// Shared identity, contact details and links. Change them here, not in
// components, so the site, metadata and structured data always agree.

export const NAME = "Laize Ferraz";
export const JOB_TITLE = "Frontend Software Engineer";
export const TAGLINE =
  "I build accessible React interfaces — and the component libraries behind them.";
export const AVAILABILITY =
  "Available now · Sunshine Coast, QLD · Australian citizen";

/** Her photo in /public. The JSON-LD `image` will reuse it. */
export const PORTRAIT_SRC = "/portfolio-photo.avif";

export const EMAIL = "laizeferraz@gmail.com";
export const MAILTO = `mailto:${EMAIL}`;

export const LINKEDIN_URL = "https://www.linkedin.com/in/laize-ferraz/";
export const GITHUB_URL = "https://github.com/laizeferraz";

/** The one place the résumé URL lives. Old URLs redirect here. */
export const RESUME_URL = "/files/laize-ferraz-resume.pdf";

/**
 * File size shown next to résumé links. Update it when the PDF changes
 * (public/files/laize-ferraz-resume.pdf, 66,563 bytes).
 */
export const RESUME_SIZE: string | null = "65 KB";

/**
 * The home page sections, in page order. The section nav and the
 * section ids both come from here, so the links can't point nowhere.
 */
export const HOME_SECTIONS = [
  { id: "about", label: "About", heading: "About" },
  { id: "experience", label: "Experience", heading: "Experience" },
  { id: "work", label: "Work", heading: "Selected work" },
] as const;

export type HomeSectionId = (typeof HOME_SECTIONS)[number]["id"];

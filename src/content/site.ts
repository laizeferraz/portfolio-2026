// Shared contact details and links. Change them here, not in components.

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

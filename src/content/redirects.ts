// Permanent redirects from the old site's URLs to the new structure.
// next.config.ts imports this file, so keep it free of the "@/" alias
// and of anything that only works inside the app.

import { PROJECTS } from "./projects";
import { RESUME_URL } from "./site";

type Redirect = {
  source: string;
  destination: string;
  permanent: true;
};

/** Old project page → the slug of its new story. */
const LEGACY_PROJECT_URLS: Record<string, string> = {
  "/projects/project1": "white-label-marketplace",
  "/projects/project2": "ceta",
  "/projects/project3": "grok-web-components",
  "/projects/personalProject1": "letmeask",
};

/** Old résumé filenames. They all point at the one current PDF. */
const LEGACY_RESUME_URLS = [
  "/files/Laize_Ferraz_Resume.pdf",
  "/files/Resume-LaizeFerraz.pdf",
];

/**
 * An old project URL goes to its story once the story is published,
 * and to Selected work until then. Flipping `published` in projects.ts
 * is enough: the redirect follows on the next build.
 */
function projectDestination(slug: string): string {
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) {
    throw new Error(`Redirect points at unknown project slug "${slug}"`);
  }
  return project.published ? `/projects/${slug}` : "/#work";
}

export function legacyRedirects(): Redirect[] {
  return [
    { source: "/profile", destination: "/#about", permanent: true },
    // Exact match only, so /projects/<slug> stories are not affected.
    { source: "/projects", destination: "/#work", permanent: true },
    ...Object.entries(LEGACY_PROJECT_URLS).map(([source, slug]) => ({
      source,
      destination: projectDestination(slug),
      permanent: true as const,
    })),
    ...LEGACY_RESUME_URLS.map((source) => ({
      source,
      destination: RESUME_URL,
      permanent: true as const,
    })),
  ];
}

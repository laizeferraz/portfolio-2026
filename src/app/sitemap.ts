import type { MetadataRoute } from "next";
import { PROJECTS, storyHref } from "@/content/projects";
import { SITE_URL } from "@/content/site";

// Served at /sitemap.xml. Lists the home page and every published story,
// so a story appears here the moment its `published` flag turns true.
// Unpublished stories stay out: they have no page yet.
//
// No lastModified, changeFrequency or priority: Google ignores the last
// two, and a build-time date would claim every page changed on each deploy.
export default function sitemap(): MetadataRoute.Sitemap {
  const stories = PROJECTS.map(storyHref)
    .filter((href) => href !== null)
    .map((href) => ({ url: `${SITE_URL}${href}` }));

  return [{ url: SITE_URL }, ...stories];
}

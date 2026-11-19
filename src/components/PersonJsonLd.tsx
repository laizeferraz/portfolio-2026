import {
  EMAIL,
  GITHUB_URL,
  JOB_TITLE,
  LINKEDIN_URL,
  NAME,
  PORTRAIT_SRC,
  SITE_URL,
} from "@/content/site";

// Structured data that tells search engines who this site is about, so
// Google can link the site, LinkedIn and GitHub to one person. It renders
// a <script> tag only; nothing visible.
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  jobTitle: JOB_TITLE,
  url: SITE_URL,
  image: `${SITE_URL}${PORTRAIT_SRC}`,
  email: `mailto:${EMAIL}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sunshine Coast",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  knowsAbout: [
    "React",
    "TypeScript",
    "Next.js",
    "Web accessibility",
    "WCAG",
    "Component libraries",
    "Storybook",
  ],
  knowsLanguage: ["en", "pt"],
  sameAs: [LINKEDIN_URL, GITHUB_URL],
};

export function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify doesn't escape "<", so a value containing
      // "</script>" could break out of the tag. Escaping it is the fix
      // the Next.js JSON-LD guide recommends.
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD needs raw JSON in the script tag; "<" is escaped above.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(person).replace(/</g, "\\u003c"),
      }}
    />
  );
}

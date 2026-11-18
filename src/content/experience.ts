// The roles in the home page's Experience section, newest first.
// Copy follows the Option D design, with the CLAUDE.md corrections
// (the last entry covers all three bootcamps, not just Academy Xi).

/** A month and year, shown as `text` and given to <time> as `iso`. */
export type MonthYear = {
  /** What people see, e.g. "Nov 2025" or "2020". */
  text: string;
  /** Machine-readable date for <time dateTime>, e.g. "2025-11" or "2020". */
  iso: string;
};

export type ExperienceRole = {
  /** Unique key for React. */
  id: string;
  role: string;
  org: string;
  start: MonthYear;
  end: MonthYear;
  summary: string;
  /** Five or fewer (DESIGN.md). */
  tags: string[];
  /** A short highlight shown in a mint pill next to the title. */
  badge?: string;
};

export const EXPERIENCE: ExperienceRole[] = [
  {
    id: "dancefit",
    role: "Freelance Designer & Frontend Engineer",
    org: "DanceFit Sunshine Coast",
    start: { text: "Sep 2026", iso: "2026-09" },
    end: { text: "Nov 2026", iso: "2026-11" },
    summary:
      "Designed, built and launched a mobile-first website for a dance instructor's business in React, TypeScript and CSS Modules, from design to deployment. Set up CI/CD on Cloudflare Workers and Search Console, built to WCAG 2 AA, and reached Lighthouse 95+ in every category.",
    tags: ["React", "TypeScript", "Vite", "CSS Modules", "Cloudflare Workers"],
  },
  {
    id: "xestro",
    role: "Software Engineer",
    org: "Xestro",
    start: { text: "Nov 2025", iso: "2025-11" },
    end: { text: "Jan 2026", iso: "2026-01" },
    summary:
      "Healthcare SaaS features in React and TypeScript. Migrated JSX to strongly typed TSX, refactored components around custom hooks and shared context, and built accessible Material UI layouts.",
    tags: ["React", "TypeScript", "Material UI"],
  },
  {
    id: "grok",
    role: "Software Engineer",
    org: "Grok Academy",
    start: { text: "Oct 2023", iso: "2023-10" },
    end: { text: "Aug 2024", iso: "2024-08" },
    summary:
      "Built the Lit and TypeScript Web Component library for an edtech platform used by 200,000+ students in 3,400 Australian schools — documented in Storybook, with 100% unit test coverage and automated accessibility tests.",
    tags: ["Lit", "TypeScript", "Storybook", "Vitest"],
  },
  {
    id: "palo-it",
    role: "Software Engineer",
    org: "PALO IT",
    start: { text: "Sep 2021", iso: "2021-09" },
    end: { text: "Apr 2023", iso: "2023-04" },
    summary:
      "Three client products in React, TypeScript and Next.js — digital health, insurtech and a white-label marketplace — inside cross-functional Agile teams.",
    tags: ["React", "Next.js", "TypeScript", "Cypress"],
    badge: "Promoted to mid-level in under a year",
  },
  {
    id: "bootcamps",
    role: "Frontend Instructor",
    org: "Three coding bootcamps",
    start: { text: "2020", iso: "2020" },
    end: { text: "2022", iso: "2022" },
    summary:
      "Taught and mentored 60+ developers across three 12-week bootcamps in HTML, CSS, JavaScript and React, and wrote the exercises and assessments that made the concepts click.",
    tags: ["Teaching", "Mentoring", "Curriculum"],
  },
];

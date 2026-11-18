// Every project on the site: home page copy, live demo data and (later)
// story content. Copy follows the Option D design, with the CLAUDE.md
// corrections. A story only gets linked once `published` is true.

/** Each project keeps its pastel everywhere it appears. */
export type Tint = "lav" | "pink" | "peach" | "blue" | "butter" | "mint";

/** A link to the real thing on another site, marked ↗. */
export type ExternalLink = {
  href: string;
  /** Visible text, e.g. "Visit the live site". */
  label: string;
};

/** A project with a demo panel in Selected work. */
export type FeaturedHome = {
  kind: "featured";
  summary: string;
  /** Five or fewer (DESIGN.md). */
  tags: string[];
  /** Shown in the demo panel's header row, e.g. "<grok-chat-bubble>". */
  demoName: string;
};

/** A compact row in the More work list. */
export type RowHome = {
  kind: "row";
  /** The row title, which can be shorter than the story title. */
  title: string;
  /** The one-liner under the title. */
  line: string;
};

export type Project = {
  /** Lowercase, hyphenated. The story lives at /projects/<slug>. */
  slug: string;
  /** Story H1, and the H3 on its featured card. */
  title: string;
  /** "Company · Field · Dates", shown as the eyebrow. */
  metaLine: string;
  tint: Tint;
  /** True only once the story has no [bracketed] placeholders left. */
  published: boolean;
  /** A side project rather than client or employer work. */
  personal?: boolean;
  home: FeaturedHome | RowHome;
  liveSite?: ExternalLink;
};

/** In story sprint order (CLAUDE.md projects table). */
export const PROJECTS: Project[] = [
  {
    slug: "cyber-insurance-platform",
    title: "Replacing spreadsheets for cyber insurance",
    metaLine: "PALO IT · Insurtech · Sep 2021 – Apr 2022",
    tint: "blue",
    published: false,
    home: {
      kind: "row",
      title: "Replacing spreadsheets for cyber insurance",
      line: "PALO IT · React interfaces for policy management and risk reporting",
    },
  },
  {
    slug: "grok-web-components",
    title: "A Web Component library for 200,000+ students",
    metaLine: "Grok Academy · Edtech · Oct 2023 – Aug 2024",
    tint: "lav",
    published: false,
    home: {
      kind: "featured",
      summary:
        "Educators needed to build interactive computing lessons without waiting on engineers. I built reusable chat bubbles, feedback states and info blocks in Lit, with docs generated from JSDoc.",
      tags: ["Lit", "TypeScript", "Storybook", "Vitest"],
      demoName: "<grok-chat-bubble>",
    },
    liveSite: {
      href: "https://groklearning.github.io/grok-web-components/",
      label: "Explore the Storybook",
    },
  },
  {
    slug: "dancefit-sunshine-coast",
    title: "A website for DanceFit Sunshine Coast",
    metaLine: "Freelance · Client website · 2026",
    tint: "pink",
    published: false,
    home: {
      kind: "featured",
      summary:
        "A single-page site for a local dance fitness studio. I designed two directions, presented them to the client, then built the one she chose with a newcomer booking offer and a live Instagram feed.",
      tags: ["React", "TypeScript", "Vite"],
      demoName: "Design directions",
    },
    liveSite: {
      href: "https://dancefitsunshinecoast.com",
      label: "Visit the live site",
    },
  },
  {
    slug: "ceta",
    title: "Helping children face fears and worries",
    metaLine: "PALO IT · Digital health · 2023",
    tint: "peach",
    published: false,
    home: {
      kind: "featured",
      summary:
        "Ten interactive therapy modules that let parents and psychologists work together to help children overcome anxiety — with goal setting, progress tracking and rewards.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Jest"],
      demoName: "Brave steps tracker",
    },
  },
  {
    slug: "white-label-marketplace",
    title: "A white-label NFT marketplace",
    metaLine: "PALO IT · Marketplace · 2022",
    tint: "butter",
    published: false,
    home: {
      kind: "row",
      title: "White-label NFT marketplace",
      line: "PALO IT · Reusable React components and Stripe payment flows",
    },
  },
  {
    slug: "letmeask",
    title: "Letmeask 2.0",
    metaLine: "Personal project · 2021, rebuilt 2023",
    tint: "mint",
    published: false,
    personal: true,
    home: {
      kind: "row",
      title: "Letmeask 2.0",
      line: "Real-time Q&A rooms for content creators",
    },
    liveSite: {
      href: "https://letmeask2-0.vercel.app/",
      label: "Try the live app",
    },
  },
];

/** The story URL, or null while the story isn't published. */
export function storyHref(project: Project): string | null {
  return project.published ? `/projects/${project.slug}` : null;
}

/** A project narrowed to one kind of home entry. */
export type FeaturedProject = Project & { home: FeaturedHome };
export type RowProject = Project & { home: RowHome };

/** Finds a project and checks its home entry is the kind we expect. */
function pick<K extends Project["home"]["kind"]>(slug: string, kind: K) {
  const project = PROJECTS.find((p) => p.slug === slug);
  if (project?.home.kind !== kind) {
    throw new Error(`No ${kind} project with slug "${slug}"`);
  }
  return project as K extends "featured" ? FeaturedProject : RowProject;
}

/** Selected work, in home page order. Each gets its own demo. */
export const FEATURED = {
  grok: pick("grok-web-components", "featured"),
  dancefit: pick("dancefit-sunshine-coast", "featured"),
  ceta: pick("ceta", "featured"),
};

/** More work, in home page order. */
export const MORE_WORK: RowProject[] = [
  pick("cyber-insurance-platform", "row"),
  pick("white-label-marketplace", "row"),
  pick("letmeask", "row"),
];

// ------------------------------------------------------------------
// Demo data. Server components pass it to the client demos as props,
// so this file never ships to the browser.
// ------------------------------------------------------------------

export type QuizAnswer = {
  id: string;
  label: string;
  correct: boolean;
  /**
   * Extra words for screen readers. "hahaha" and "ha ha ha" can sound the
   * same out loud, so each one says whether it has spaces.
   */
  srHint?: string;
};

export const GROK_QUIZ = {
  /** Question text around the inline code. */
  before: "What will",
  code: 'print(3 * "ha")',
  after: "output?",
  answers: [
    { id: "a", label: "hahaha", correct: true, srHint: ", no spaces" },
    { id: "b", label: "ha ha ha", correct: false, srHint: ", with spaces" },
    { id: "c", label: "An error", correct: false },
  ] satisfies QuizAnswer[],
  feedback: {
    correct: "Correct — multiplying a string by a number repeats it.",
    wrong: "Not quite. Multiplying a string repeats it exactly — try again.",
  },
};

export type DesignDirection = {
  id: 1 | 2;
  label: string;
  /** The preview's accessible name. */
  description: string;
};

export const DANCEFIT_DIRECTIONS: DesignDirection[] = [
  {
    id: 1,
    label: "Direction 1",
    description:
      "Direction 1 preview: soft white hero with a serif DanceFit title and a pink Book a class button",
  },
  {
    id: 2,
    label: "Direction 2",
    description:
      "Direction 2 preview: dark hero with a bold sans-serif DanceFit title and a yellow Book a class button",
  },
];

export const CETA_STEPS = {
  legend: "This week's brave steps",
  legendNote: "(sample goals)",
  steps: [
    "Say hello to a new classmate",
    "Ask a question in class",
    "Try a new food at lunch",
  ],
  initiallyDone: [true, false, false],
};

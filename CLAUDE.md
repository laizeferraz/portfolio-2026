# CLAUDE.md 
@AGENTS.md
This file tells Claude Code how to build and change this repo. Read it at the start of every session and follow it over your own defaults.

## Project rules
- Tailwind CSS v4.3 — no tailwind.config.ts. Tokens, `@theme`, `@custom-variant motion-ok` and base styles all live in `globals.css`. Don't define tokens anywhere else.
- Server Components by default; "use client" only at the leaf that needs it
- Run `npm run build` before saying a change is done 

## The project

The new portfolio for **Laize Ferraz**, a Frontend Software Engineer on the Sunshine Coast, QLD, who is looking for a frontend role at a product company. The site must get noticed by recruiters and hiring managers. It is also proof of her strengths: **accessibility, performance and clear writing**.

- **Audience:** recruiters skimming on a phone, and hiring managers or senior engineers reading on a desktop. Check everything on mobile first.
- **Approach:** agile. Launch a small MVP fast, then improve it one project at a time. Never block a launch on content that isn't ready.
- **Hosting:** Vercel, at https://www.laizeferraz.com. This replaces the current site on the same domain.
- **Design source:** "Option D · Clear & personal" in her Claude Design file *Laize Ferraz — Portfolio · Option D*. Exported copies live in `design/` (see "Design").
  - When the design and this file disagree on accessibility, SEO or content, this file wins. Flag the difference instead of copying the design.
  - Earlier options (A and C) are retired. Ignore them.

## Facts about Laize (use these, don't invent others)

- **Name and title:** Laize Ferraz, Frontend Software Engineer. 4+ years across healthcare SaaS, edtech and consulting.
- **Focus:** React and TypeScript, accessible interfaces, and the component libraries and design systems behind them.
- **Status:** available now. Australian citizen. Based on the Sunshine Coast, QLD. Open to remote or hybrid work.
- **Background:** started with a 486 computer at 15 and taught herself. Practised law in Brazil, then moved to Australia and retrained as a software engineer. Outside work: stickers and paper crafts.
- **Experience** (exact dates from the design):
  - Xestro, Software Engineer, Nov 2025 – Jan 2026
  - Grok Academy, Software Engineer, Oct 2023 – Aug 2024
  - PALO IT, Software Engineer, Sep 2021 – Apr 2023. Promoted to mid-level in under a year.
  - Bootcamp instructor and mentor, 2020–2022: three 12-week bootcamps.
    - Generation Australia (2020–21)
    - [second bootcamp] (2021)
    - Academy Xi (2022)
- **Education:** Cert IV Web-based Technologies (TAFE Sydney, 2019) and Bachelor of Law (Tiradentes University).
- **Languages:** English (fluent), Portuguese (native).
- **Highlights:**
  - 200,000+ students in 3,400 Australian schools use components she built.
  - 100% unit test coverage on the Grok library.
  - 60+ developers taught and mentored.
- **Contact:**
  - Email: laizeferraz@gmail.com
  - LinkedIn: https://www.linkedin.com/in/laize-ferraz/
  - GitHub: https://github.com/laizeferraz

## Stack and commands

- Next.js (App Router), React, TypeScript (strict), Tailwind CSS, deployed on Vercel.
- Check `package.json` and the lockfile for the real versions, scripts and package manager before running anything. Don't assume.
- Before you call a task done, run the lint, typecheck and production build scripts, and fix anything they report.
- **Don't add a dependency without asking first.** Prefer the platform: CSS for motion, `next/image`, `next/font` and the Metadata API.

## Site map

| Page | URL | What it is |
| --- | --- | --- |
| Home | `/` | One page: sticky sidebar plus About, Experience, Selected work and Contact |
| Project story | `/projects/<slug>` | One shared template, published sprint by sprint |
| Résumé | `/files/laize-ferraz-resume.pdf` | Opens the CV PDF in the browser. It's a file, not a page. |

### Moving from the current site

The live site has `/profile` and `/projects` pages. Option D folds them into the home page.

Add permanent redirects in `next.config`:
- `/profile` → `/#about`
- `/projects` → `/#work`
- Old project URLs → their story pages once those exist. Until then, redirect them to `/#work`.
  - `/projects/project1` → `/projects/white-label-marketplace`
  - `/projects/project2` → `/projects/ceta`
  - `/projects/project3` → `/projects/grok-web-components`
  - `/projects/personalProject1` → `/projects/letmeask`
- `/files/Laize_Ferraz_Resume.pdf` and `/files/Resume-LaizeFerraz.pdf` → `/files/laize-ferraz-resume.pdf`. Link to the résumé from one shared constant.

## Home page (Option D)

### Layout

- Max-width 1200 px, side padding `clamp(20px, 5vw, 48px)`.
- **960 px and up:** two columns, `minmax(280px, 360px)` and `1fr`, with a 40–72 px gap. The sidebar is `position: sticky; top: 0`, with `max-height: 100vh` and its own scrolling.
- **640–959 px:** the sidebar sits above the content, with its two blocks side by side.
- **Below 640 px:** everything stacks.

### Sidebar (`<header>`)

**Top block**
- "Skip to content" link, pointing at `#content`.
- Portrait: a 64 px circle with a lavender outline. Until the photo arrives, show the "LF" placeholder.
- Greeting "Olá! Hi there," in Caveat.
- **H1:** Laize Ferraz.
- Title: Frontend Software Engineer.
- Tagline: "I build accessible React interfaces — and the component libraries behind them."
- Availability line: a green dot (decorative) and "Available now · Sunshine Coast, QLD · Australian citizen".
- **Section nav** (`<nav aria-label="Sections">`): About, Experience, Work.
  - Uppercase, letter-spaced labels, each with a short bar that grows on hover or focus.
  - The bar is `aria-hidden`.
  - The Backlog has a task to highlight the section in view.

**Bottom block**
- **Display settings** (see Accessibility).
- Links: GitHub, LinkedIn, Résumé (PDF), Email.

### Content (`<main id="content">`)

| Section | id | Tag | Heading |
| --- | --- | --- | --- |
| About | `about` | H2 | About |
| Experience | `experience` | H2 | Experience |
| Work | `work` | H2 | Selected work |
| Contact | — | H2 | Hiring a frontend engineer? |

Section H2s are small uppercase labels in `accentText`. Card titles and roles are H3s.

**About**
- Three short paragraphs and the desk illustration.
- Change "Teaching at Academy Xi taught me…" to "Teaching at three coding bootcamps taught me…".

**Experience**
- An `<ol>` of roles. Each has the dates, an H3 ("Software Engineer · Grok Academy"), a summary and tags.
  - On PALO IT, show the badge "Promoted to mid-level in under a year".
  - The last entry is "Frontend Instructor · Three coding bootcamps", 2020–2022. It says she taught and mentored 60+ developers across three 12-week bootcamps.
- Below the list: a "View full résumé (PDF)" link.

**Selected work**
- Intro line: "Each project comes with a small live piece you can click, tab through and break."
- **Three featured `<article>`s**, each a live demo panel next to the text (meta line, H3, summary, tags, links):
  - **Grok:** `<grok-chat-bubble>` quiz, on a lavender panel.
    - Three answer buttons with `aria-pressed`.
    - Feedback appears in a `role="status"` region.
  - **DanceFit:** design-direction switcher, on a pink panel.
    - "Direction 1" and "Direction 2" buttons with `aria-pressed`.
    - The preview is `role="img"`, and its label describes the selected direction.
    - Links: "Visit the live site ↗" and "Read the story".
  - **Ceta:** brave-steps checklist, on a peach panel.
    - A `<fieldset>` and `<legend>` with real checkboxes.
    - The progress bar is `aria-hidden`; the count is spoken through `role="status"` ("1 of 3 brave steps done").
- **More work list** (rows with a top and bottom border): Cyber insurance, white-label NFT marketplace, Letmeask 2.0 (labelled "PERSONAL").
  - A row is a link only once its story page is published. Until then, render it as plain text with no arrow.

**Contact**
- Lavender panel with the H2 "Hiring a frontend engineer?".
- Text: "I'm available now, based on the Sunshine Coast and happy to work remotely or hybrid."
- Buttons: the email address (accent) and "Download résumé (PDF)".

**Footer**
- "Designed and built by Laize Ferraz with Next.js and Tailwind CSS, to meet WCAG 2.2 AA." Keep it true: if the site fails AA anywhere, fix the site.

## Projects

| Story sprint | Slug | Project | Meta line | Notes |
| --- | --- | --- | --- | --- |
| 1 | `cyber-insurance-platform` | Replacing spreadsheets for cyber insurance | PALO IT · Insurtech · Sep 2021 – Apr 2022 | Client stays anonymous ("a global cyber reinsurer"). Illustrations only. Copy is complete in the design. |
| 2 | `grok-web-components` | A Web Component library for 200,000+ students | Grok Academy · Edtech · Oct 2023 – Aug 2024 | Featured. Live Storybook: https://groklearning.github.io/grok-web-components/ |
| 3 | `dancefit-sunshine-coast` | A website for DanceFit Sunshine Coast | Freelance · Client website · 2026 | Live at https://dancefitsunshinecoast.com. The client agreed to be named and linked; screenshots are fine. |
| 4 | `ceta` | Helping children face fears and worries | PALO IT · Digital health · 2023 | Private MVP: illustrations only. |
| 5 | `white-label-marketplace` | A white-label NFT marketplace | PALO IT · Marketplace · 2022 | Frame it around theming and payments, not NFTs. Not online: illustrations only. |
| 6 | `letmeask` | Letmeask 2.0 | Personal project · 2021, rebuilt 2023 | Live app: https://letmeask2-0.vercel.app/ |

- **Xestro** is covered in Experience and has no story page.
- **Content file:** keep all project content (home page copy, live demo data and story content) in one typed file, `src/content/projects.ts`. Each project has a `published: boolean`. Copy the text from the design's `Case.dc.html` data, then apply the corrections below.

### Story page template (one template for all projects)

**Header**
- Back link "← Laize Ferraz · All work", pointing at `/#work`.
- The Display settings control.

**`<main>`, max-width 1040 px**
1. Uppercase eyebrow (meta line), then the **H1** title and summary.
2. Facts as a `<dl>`: Role, When, Team or Client, Stack.
3. Action buttons, e.g. "Visit the live site ↗", or a note explaining why only illustrations are shown.
4. Visual panel: the live demo (Grok, DanceFit) or an illustration.
5. H2 sections:
   - The problem / The brief / Why I built it
   - How it works (only if the project has steps)
   - What I built (cards with H3s)
   - Challenges
   - Impact (mint panel)
   - What I'm proudest of (only if it has content)
   - Tech & ways of working (a `<dl>` of groups)
6. `<nav aria-label="More projects">` with Previous and Next project cards. **Link only to published stories.**
7. Contact panel ("Like what you see?") and the footer.

**Publishing**
- Publish a story only when it has no `[bracketed]` placeholders left. The design marks open gaps with dashed cards; don't ship those.
- Publishing a story means three things together: set `published: true`, link the home page row or card, and add its redirect.

## Content rules

- **Never invent content.** If copy, numbers, names or links are missing, keep a `[square bracket]` placeholder and list it under "Waiting on me".
- Use "I" for her work and "we" only for real team decisions.
- Follow the shape problem → what I did → what changed.
- Don't use marketing adjectives: powerful, seamless, robust, stunning, cutting-edge and similar.
- **Backend she didn't build** (C#/.NET, Node.js, Solidity, Vendure, AWS Amplify, GraphQL, Sanity, MongoDB): in Tech & ways of working, list it under a group named "Worked alongside", not as her own stack.
- Don't use real client names, screenshots or confidential details unless the projects table allows it.

**Corrections to the design copy**
- **DanceFit home card:** "I designed two directions, tested them with the client…" → "I designed two directions, presented them to the client, then built the one she chose…". The design options were shown only to the client, because she wanted the site to be a surprise for her dancers.
- **About:** "Teaching at Academy Xi" → "Teaching at three coding bootcamps".
- **Experience:** "Frontend Instructor · Academy Xi" → "Frontend Instructor · Three coding bootcamps".

## Design

### Reference files

`design/` holds the design reference and the exported Option D files:
- `DESIGN.md`: @design/DESIGN.md. Components, type scale, spacing, motion and the accessibility fixes. Read the matching section before building a component.
- `Main.dc.html`: home, light, desktop
- `ClearDark…`: home, dark
- `Case.dc.html`: the shared story template and all story data

Read them for layout, spacing, illustrations, demo behaviour and copy. Don't copy their inline styles or template syntax (`{{…}}`, `sc-if`, `sc-for`). Rebuild with tokens, Tailwind and React.

### Tokens

They're already defined in `globals.css` (CSS variables switched by `[data-theme="dark"]`, exposed to Tailwind as `bg-card`, `text-muted`, `bg-lav`, `text-mint-ink`…). That file is the source of truth; this table mirrors it. Never hard-code hex values in components.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `bg` | #FCFAFF | #16131E | Page background |
| `card` | #FFFFFF | #211D2C | Cards, hover background |
| `line` | #E9E3F5 | #2F2A3D | Decorative dividers only (1.2:1, not enough for controls) |
| `line-strong` | #857D9E | #8A82A3 | Control borders, toggle track when off (3:1+, WCAG 1.4.11) |
| `chip` | #F1ECFC | #2C2639 | Tags, inline code, lesson boxes |
| `ink` | #2B2540 | #EEEAF7 | Headings, main text |
| `muted` | #5A5470 | #B6AECB | Paragraphs, meta lines |
| `accent` | #6F4FD6 | #B9A6F2 | Primary buttons, toggle on |
| `accent-ink` | #FFFFFF | #17141F | Text on accent |
| `accent-text` | #5B3CC4 | #C9B9FF | Links, section labels |
| `lav` | #EDE6FF | #2A2340 | Grok panel, contact panel, portrait |
| `pink` | #FFE0EC | #3A2030 | DanceFit panel |
| `peach` | #FFE1D3 | #3A2620 | Ceta panel |
| `blue` | #DCEBFF | #1D2A3D | Cyber panel |
| `butter` | #FFF3C4 | #36301A | NFT panel |
| `mint` / `mint-ink` | #D6F5E8 / #1E4D3A | #1C3329 / #A8E6C6 | Letmeask panel, Impact panel, PALO IT badge |
| `ok-bg` / `ok-ink` | #D6F5E8 / #1E4D3A | #1C3329 / #A8E6C6 | Correct-answer feedback |
| `no-bg` / `no-ink` | #FFE1D3 / #7A2E12 | #3A2620 / #FFC2AE | Wrong-answer feedback |
| `focus` | #8B6CF0 | #8B6CF0 | Focus ring (checked: 3.2:1 or more on every light and dark surface) |

- Pastels are backgrounds only. Text on them uses `ink`, `muted` or the matching `-ink`.
- The DanceFit preview colours (Direction 1: white, #5E1636 and pink #C2306A; Direction 2: #1E1B26, #FFF6D6 and yellow #FFD24A) belong to the demo. Keep them inside that component.

### Type

Load with `next/font/google`: self-hosted, subset, `display: swap`.

| Role | Font | Size |
| --- | --- | --- |
| H1 (name), story titles, card titles, contact heading | Young Serif 400 | H1 `clamp(2.5rem, 4.4vw, 3.5rem)`; story H1 `clamp(2.25rem, 4.6vw, 3.625rem)`; card H3 1.625rem |
| Body and UI | Figtree 400/500/600/700 | Body 1.0625rem, line-height 1.65; meta 0.8125–0.9375rem |
| Section labels | Figtree 700 | 0.8125rem, uppercase, letter-spacing 0.12em, `accent-text` |
| Greeting only | Caveat 600 | 1.75rem. Never use it for anything else. |

### Shape

- Pills: 999 px. Demo panels: 20 px. Cards and contact panel: 24–28 px.
- Experience and work items get a `card` background, a shadow and a 2 px lift on hover.

### Motion

Minimal:
- A short "rise" on load for the sidebar text.
- The nav bar width transition.
- Hover lifts.
- Colour transitions in the demos.

There are no looping animations. Keep it that way: it avoids WCAG 2.2.2.

- Write all motion with the `motion-ok:` variant (`motion-ok:animate-rise`, `motion-ok:transition`). It only applies when the OS allows motion and the Reduce motion setting is off.
- Never use `!important`. `globals.css` has an unlayered safety net that stops stray motion without it.
- Keep motion in classes, not inline `style`.

## Accessibility: WCAG 2.2 AA (required, not optional)

Treat any failure as a bug that blocks the task.

### Display settings

Display settings is a signature feature ("These really work — accessibility is how I build, not a checkbox"). Build it carefully: it's the thing interviewers will try.

- **The disclosure:** a `<button aria-expanded>` labelled "Display settings", bordered with `line-strong`, with a count badge such as "2 on". It opens a `role="group"` with `aria-label="Display settings"`.
- **Each toggle:** a `<button aria-pressed>` whose visible text is its name. The switch graphic is `aria-hidden`. Track: `line-strong` when off, `accent` when on.
  1. **Dark mode:** sets `data-theme`. Defaults to `prefers-color-scheme`.
  2. **Reduce motion:** sets `data-motion="reduce"` on `<html>`, which turns off all animation and transitions. Defaults to on when `prefers-reduced-motion: reduce`.
  3. **Show focus order:** sets `data-focus-map` on `<html>`, which outlines every focusable element and shows its number in the tab order (styles are in `globals.css`).
     - Use a CSS counter on `a`, `button` and checkbox labels in DOM order, as in the design.
     - The numbers are decorative (`::after` content in a pseudo-element). Make sure the DOM order matches the visual order, so the numbers are honest.
- Save all three in `localStorage`, and apply them before first paint with a tiny inline script.
- The same control appears on story pages.

### Structure

- Set `<html lang="en">`.
- Landmarks: the sidebar is `<header>`, then `<nav aria-label="Sections">`, `<main id="content">` and `<footer>`.
- Use exactly one H1 per page (her name on home, the project title on stories) and don't skip heading levels.
- Use semantic HTML before ARIA: real `<button>`, `<a>`, `<fieldset>` and checkboxes.
- Experience is an `<ol>`. Facts and tech are `<dl>`s.
- Give each page a unique `<title>`.

### Colour and contrast

- At least 4.5:1 for text and 3:1 for UI components, focus rings and meaningful graphics, in **both** themes.
- Check these pairs specifically:
  - `muted` on every pastel panel
  - `accent-text` on `bg` and `lav`
  - `focus` (#8B6CF0) on dark `bg` and `card`
  - the answer feedback pairs
  - both DanceFit preview directions
- Never use colour alone to carry meaning. Quiz feedback uses words as well as green and peach.

### Keyboard and focus

- Everything works by keyboard, in a logical order, with no traps.
- Focus ring: 3 px solid `focus` with a 3 px offset on every link, button and input, using `:focus-visible`.
- **2.4.11 Focus Not Obscured:** the sticky sidebar must not cover focused content. Add `scroll-margin-top` on in-page targets.

### Targets and input

- **2.5.8:** targets are at least 24×24 px. The design uses 40–50 px, so keep those sizes.
- **2.5.7:** no drag-only interactions.
- **3.2.6 Consistent Help:** the email and résumé links stay in the sidebar on home, and in the contact panel on every page.

### Live demos

- Every demo works with keyboard and screen reader, and makes sense without seeing it.
- State changes are announced through `role="status"` (polite).
- Demos never move focus on their own.

### Images

- Informative illustrations use `role="img"` with an `aria-label` describing what's in them. The design's labels are a good start.
- Decorative dots, bars, arrows and icons get `aria-hidden="true"`.
- Portrait: `alt="Portrait of Laize Ferraz"`.
- Videos need captions and a visible play button, and must not autoplay.

### Links

**Repeated "Read the story →" links**
- Each one needs the project name in visually hidden text, e.g. "Read the story<span class="sr-only"> about Grok Web Components</span>".
- The arrow is `aria-hidden`.

**New tabs**
- Prefer the same tab. External links marked ↗ that open a new tab get visually hidden text: "(opens in a new tab)".

**Résumé link**
- Say it's a PDF, and give the size where there's room.

### Layout

- Reflows at 320 px without horizontal scrolling.
- Works at 200% zoom and with increased text spacing.
- Use `rem`-based type.

### Testing every UI change

- Keyboard-only pass, with Show focus order on.
- Run axe or Lighthouse accessibility if available.
- Check contrast in both themes.
- Check with Reduce motion on.
- Before each release, do a VoiceOver check on iOS and macOS.

## SEO

### Metadata

- Use the Next.js Metadata API.
- Set `metadataBase` to `https://www.laizeferraz.com`, a title template `%s | Laize Ferraz`, and a canonical URL on every page.
- **Home title:** `Laize Ferraz | Frontend Engineer, React & Accessibility`.
- **Home description:** "Frontend engineer on the Sunshine Coast building accessible React interfaces and component libraries. 4+ years in healthcare SaaS, edtech and consulting." She approves the final wording of both.
- **Story pages:** the title is the project title. The description is its summary.

### Structured data

- **Home:** JSON-LD `Person` with name, jobTitle, url, image, email, `address` (Sunshine Coast, QLD, AU), `knowsAbout`, and `sameAs` links to LinkedIn and GitHub.
- **Stories:** `CreativeWork`, with author, date and description.

### Other

- **Open Graph:** a 1,200×630 image in the Option D style (name, title, tagline, lavender background). Each story gets its own when it ships.
- **Sitemap and robots:** `app/sitemap.ts` (home and published stories only) and `app/robots.ts`. Submit the sitemap in Search Console at launch.
- **URLs:** short, lowercase and hyphenated.
- **Consistency:** use the same name, title, location and links on the site, CV, LinkedIn and GitHub.

## Performance

- **Targets on mobile:** LCP under 2.5 s, CLS under 0.1, INP under 200 ms, and Lighthouse 90+ in every category. Aim for 100 in Accessibility and SEO.
- **Server Components by default.** Only these need `"use client"`:
  - Display settings
  - the three demos
  - the scroll spy, if built

  Keep them small and isolated.
- **Fonts:** Young Serif, Figtree and Caveat (one weight, greeting only).
- **SVG illustrations:** inline components, optimised.
- **Photos:** use `next/image` with width, height and `sizes`. Name files in lowercase hyphenated words, keep them about 1,200 px wide at most and under 150 KB.
- **Video:** YouTube or a click-to-load facade. Never autoplay or preload.

## Code conventions

- TypeScript strict. No `any` without a comment explaining why.
- One component per file, named in PascalCase.
  - Shared components go in `src/components/`.
  - Demos go in `src/components/demos/`.
  - Illustrations go in `src/components/illustrations/`.
  - Content goes in `src/content/`.
- Use Tailwind utilities and tokens, with no inline styles. Obvious shared components:
  - SectionLabel
  - Tag
  - ExperienceItem
  - FeaturedProject
  - WorkRow
  - DisplaySettings
  - ContactPanel
  - StoryLayout
- Keep components small and readable. She will maintain this code and explain it in interviews, so clear beats clever.

## How to work in this repo

- Work on **one task at a time**, matching a card on her Notion "MVP Launch Board". Keep each change small enough to review in one sitting.
- Explain what you changed and why in plain language. Point out any accessibility or performance trade-off, and anywhere you departed from the design.
- Ask before committing, pushing, deleting files or changing the deploy setup.
- If a request conflicts with this file (for example, it would break WCAG 2.2 AA), say so and suggest an alternative.

## Definition of done

**For a task**
- Lint, typecheck and build pass.
- Works by keyboard, with a visible focus ring.
- Contrast passes in both themes.
- All Display settings work.
- Matches the design at 320 px, 640–959 px and 960 px and up.
- No placeholder is left that isn't listed below.

**For the MVP launch**
- Live on laizeferraz.com, with the redirects working.
- Lighthouse 90+ on mobile.
- Search Console set up with the sitemap submitted.
- Every link and demo tested on a phone and a computer.
- The site link added to her CV, LinkedIn and GitHub.

## Waiting on me

- [ ] Name of the second bootcamp (2021), and whether she was an instructor or a mentor at each
- [ ] Portrait photo
- [ ] Updated résumé PDF and its file size
- [ ] Final home title and meta description wording
- [ ] Exported Option D files for `design/`
- [ ] Story gaps, one sprint at a time:
  - team sizes (Grok, Ceta, NFT)
  - Grok demo video
  - DanceFit brief, challenges and results
  - Ceta and NFT challenges and outcomes
  - Letmeask rebuild lessons and screenshots
  - illustrations for Cyber, Ceta and NFT

## After launch

- Publish one story per sprint in the projects table order. Each one adds a new indexable page, which helps search more than polishing the home page does.
- After a few weeks live, check Search Console for which searches bring visitors, and adjust titles and descriptions to match.
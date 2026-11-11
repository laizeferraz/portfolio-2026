# Design reference — Laize Ferraz portfolio

**Direction:** Option D · "Clear & personal"
**Design canvas:** https://claude.ai/artifact/9hR61xnZxC5Cwdqh4hQxBK
**Tokens:** defined in `globals.css` (Tailwind v4.3, `@theme`). That file is the source of truth for every value below.

**How this fits with `CLAUDE.md`:** `CLAUDE.md` is the authority on content, routes, SEO, performance and how to work. This file is the authority on visual design and components. If they ever disagree, `CLAUDE.md` wins and this file gets updated.

When the canvas and this file disagree, this file wins: it includes accessibility fixes that the canvas doesn't have yet (marked **Fix**).

---

## 1. Principles

1. **Readable first, personal second.** The layout is calm and scannable (a two-column home inspired by brittanychiang.com). Personality comes from a few deliberate touches, not from decorating everything.
2. **Show, don't list.** Skills are proven with small live demos and real outcomes, not chip clouds. Tech tags live inside each job or project.
3. **Accessibility is visible.** The Display settings control (dark mode, reduce motion, show focus order) works for real and demonstrates the craft.
4. **One of each.** One accent colour, one display font, one handwritten moment per page, one hero illustration, motion that plays once.
5. **Honest content.** Private products get illustrations, not fake screenshots. Missing facts stay as visible placeholders until they're real.

---

## 2. Colour

All colours are CSS variables that switch with the theme. In Tailwind use the semantic names (`bg-card`, `text-muted`, `border-line-strong`, `bg-mint`…). Never hard-code hex values in components.

### Core

| Token | Light | Dark | Use |
|---|---|---|---|
| `bg` | `#FCFAFF` | `#16131E` | Page background |
| `card` | `#FFFFFF` | `#211D2C` | Cards, buttons on tints, demo frames |
| `chip` | `#F1ECFC` | `#2C2639` | Tech tags, lesson boxes, inline code |
| `ink` | `#2B2540` | `#EEEAF7` | Headings and primary text |
| `muted` | `#5A5470` | `#B6AECB` | Body copy, dates, secondary text |
| `line` | `#E9E3F5` | `#2F2A3D` | Decorative dividers **only** |
| `line-strong` | `#857D9E` | `#8A82A3` | Control borders, switch "off" track |
| `accent` | `#6F4FD6` | `#B9A6F2` | Filled buttons, switch "on" |
| `accent-ink` | `#FFFFFF` | `#17141F` | Text/icons on `accent` |
| `accent-text` | `#5B3CC4` | `#C9B9FF` | Links, eyebrows, accent text |
| `focus` | `#8B6CF0` | `#8B6CF0` | Focus ring |

### Pastel tints (backgrounds only)

| Token | Light | Dark | Typical use |
|---|---|---|---|
| `lav` | `#EDE6FF` | `#2A2340` | Grok, contact panel, portrait |
| `mint` | `#D6F5E8` | `#1C3329` | Letmeask, Impact box, PALO IT badge (text on it: `mint-ink`) |
| `peach` | `#FFE1D3` | `#3A2620` | Ceta, portrait blob |
| `pink` | `#FFE0EC` | `#3A2030` | DanceFit |
| `blue` | `#DCEBFF` | `#1D2A3D` | Cyber insurance |
| `butter` | `#FFF3C4` | `#36301A` | NFT marketplace |

Each project keeps its tint everywhere it appears (home card, story page panel), so colour becomes a quiet way to recognise projects.

### Feedback

`ok-bg`/`ok-ink` and `no-bg`/`no-ink` are used by demo feedback (the quiz). Always pair colour with text, never colour alone.

### Contrast (measured, WCAG 2.2)

| Pair | Light | Dark |
|---|---|---|
| `ink` on `bg` | 14.1 : 1 | 15.5 : 1 |
| `muted` on `bg` / lowest tint | 6.9 / 5.8 : 1 | 8.6 / 6.2 : 1 |
| `accent-text` on `bg` / lowest tint | 7.0 / 5.9 : 1 | 10.4 / 7.4 : 1 |
| `accent-ink` on `accent` | 5.6 : 1 | 8.5 : 1 |
| `ok-ink` on `ok-bg` | 8.3 : 1 | 9.5 : 1 |
| `no-ink` on `no-bg` | 7.6 : 1 | 9.2 : 1 |
| `line-strong` on `bg` (non-text) | 3.7 : 1 | 5.1 : 1 |
| `focus` ring on `bg` (non-text) | 3.7 : 1 | 4.8 : 1 |

Every text pair passes AA (4.5 : 1), and most pass AAA.

> **Fix (1.4.11 Non-text contrast):** on the canvas, the Display settings button border and the switch "off" track use `line`/`chip`, which are about 1.2 : 1. Build them with `line-strong` instead. `line` stays for dividers that carry no meaning.

---

## 3. Typography

| Role | Font | Notes |
|---|---|---|
| Body & UI | **Figtree** 400/500/600/700 | Everything functional |
| Display | **Young Serif** 400 | Your name, page/section titles, card and stage titles |
| Hand | **Caveat** 600 | **The greeting only** ("Olá! Hi there,"). Never anything else. |

Load all three with `next/font/google` and expose them as `--font-figtree`, `--font-young-serif` and `--font-caveat` on `<html>`. Tailwind classes: `font-sans`, `font-display`, `font-hand`.

### Scale

| Token | Size | Line height | Use |
|---|---|---|---|
| `text-name` | 40 → 56px fluid | 1.05 | Home H1 (your name) |
| `text-display-xl` | 36 → 58px fluid | 1.08 | Story H1 |
| `text-display-lg` | 28 → 40px fluid | 1.15 | About page section titles |
| `text-display-md` | 26 → 34px fluid | 1.2 | Story page section titles |
| `text-display-sm` | 26px | 1.2 | Card H3s, contact heading |
| `text-lead` | 18 → 21px fluid | 1.55 | Intros under h1 |
| `text-lg` | 20px | 1.3 | Role line ("Frontend Software Engineer") |
| `text-base` | 17px | 1.65 | Body |
| `text-md` | 16px | 1.6 | Card body |
| `text-sm` | 15px | 1.5 | Buttons, secondary text |
| `text-xs` | 13px | 1.4 | Eyebrows, chips, dates |
| `text-greeting` | 28px | 1 | Caveat greeting only |

**Eyebrow / section label:** `text-xs font-bold uppercase tracking-eyebrow text-accent-text`. On the home page, section headings (About, Experience, Selected work) are eyebrows. On story and About pages they're `font-display`.

Rules: use `text-wrap: balance` on headings and `text-wrap: pretty` on paragraphs. Keep long-form text within `max-w-reading` (760px). Never go below 13px.

---

## 4. Space, radius, elevation

- **Spacing:** Tailwind's 4px scale. Recurring values: gutter `clamp(20px, 5vw, 48px)`, gaps between home sections `clamp(72px, 9vw, 112px)`, gaps between story sections `clamp(56px, 7vw, 88px)`, card padding 22px, panel padding `clamp(20px, 3.5vw, 40px)`.
- **Radius:** `rounded-sm` 6 (code) · `md` 12 (messages) · `lg` 16 (demo frames) · `xl` 20 (cards) · `2xl` 24 (impact box) · `3xl` 28 (pastel panels, contact) · `full` (buttons, chips, switches).
- **Elevation:** flat by default. `shadow-card` only on hover for interactive cards, plus a 2px lift. `shadow-pop` for small floating labels.

---

## 5. Motion

- Easing `ease-soft` = `cubic-bezier(0.2, 0.7, 0.2, 1)`.
- **Entrance:** `animate-rise` (fade and 14px rise, 800ms) on the hero only, at most 3 staggered items 120ms apart. It plays once.
- **Interaction:** 200–250ms on hover lift, switch knob, chevron and nav bar width.
- **No infinite loops.** No floating, spinning or twinkling.
- **Motion is opt-in.** Write every animation and transition with the `motion-ok:` variant (`motion-ok:animate-rise`, `motion-ok:transition`). It only applies when the OS allows motion **and** the site's Reduce motion switch is off (`<html data-motion="reduce">`).
- An unlayered safety net in `globals.css` stops any motion that skips the variant. It beats Tailwind utilities through cascade layers, so the codebase needs **no `!important`**.

---

## 6. Layout

| Page | Container | Structure |
|---|---|---|
| Home | `max-w-home` (1200) | ≥960px: grid with a 280–360px intro column (sticky, `max-height: 100vh`) and the content column. 640–959px: one column, and the intro splits into two halves (intro on the left, settings and links on the right). <640px: one column. |
| Project story | `max-w-page` (1040) | Top bar → hero → visual panel → reading column (`max-w-reading`) → previous/next → contact |
| About | `max-w-page` (1040) | Top bar → hero with portrait → journey timeline → How I work → Away from the keyboard → Right now → contact |

**Breakpoints:** `sm` 640px, `split` 960px (custom, in `globals.css`). Use `split:` for the two-column home.

> **Fix (learned on the canvas):** only make the intro column sticky when the grid is actually two columns. Sticky on a stacked layout makes content scroll underneath it.

---

## 7. Components

Each entry lists purpose, anatomy and the rules that matter. Every one must meet 44×44px touch targets and show a visible focus ring.

### Buttons
- **Primary:** `rounded-full bg-accent text-accent-ink font-bold min-h-[50px] px-6`, with an optional trailing `→`/`↗` in `aria-hidden` spans. One per view.
- **Secondary:** `rounded-full bg-card text-ink` on tints, or transparent with a `line-strong` ring on `bg`.
- Use `↗` and `rel="noopener"` for external links. If one opens a new tab, say so in the accessible name ("opens in a new tab").

### Text link
`text-accent-text font-bold underline-offset-[5px]`, min height 44px. Inline links in body copy stay underlined.

### Eyebrow
See Typography. It's a `<p>` above an h1, or the h2 itself on the home page.

### Chip (tech tag)
`rounded-full bg-chip px-3 py-0.5 text-xs font-semibold`. Not interactive. Put them in a list or group with no more than 5 per item.

### Status line
A green `status-dot` plus text: "Available now · Sunshine Coast, QLD · Australian citizen". The dot is `aria-hidden`.

### Section nav (home intro column)
A vertical list of uppercase links, each with a leading bar that grows from 28px to 64px on hover or focus. Optional: highlight the section in view with `aria-current="true"` using an IntersectionObserver.

### Experience item
A 150px date column plus a content column (title "Role · Company", description, chips). Flat by default; on hover it gets `bg-card` and `shadow-card`. Use an `<ol>`, newest first.

### Featured project (home)
A demo frame (tinted `rounded-[20px]` panel with a header row "‹component name› · Live demo") beside the text (eyebrow, `font-display` title, body, chips, "Read the story →"). Only label something **"Live demo"** if it is the real component or product; otherwise call it **"Interactive sketch"**.

### Project row
A compact list for secondary projects: a bold title, a muted one-liner and a trailing `→`, with `line` dividers.

### Display settings (disclosure + switches)
- A `<button aria-expanded>` with a sliders icon, the label "Display settings", an "N on" badge when anything is active, and a chevron.
- The panel is a `role="group"` labelled "Display settings" containing three `<button aria-pressed>` switches: **Dark mode**, **Reduce motion**, **Show focus order**.
- Switch track 42×24, knob 18. Off: track `line-strong` (**Fix**), knob `card`. On: track `accent`, knob `accent-ink`.
- Save all three in `localStorage` (`lf-theme`, `lf-motion`, `lf-focus-map`) and apply them as `data-theme`, `data-motion` and `data-focus-map` on `<html>`. Set them **before paint** with a tiny inline script in `layout.tsx` to avoid a flash.
- Defaults with nothing saved: Dark mode follows `prefers-color-scheme`; Reduce motion is on when `prefers-reduced-motion: reduce`; Show focus order is off.
- "Show focus order" numbers links, buttons and checkbox labels in DOM order. Keep DOM order equal to visual order so the numbers are honest.

### Demo: quiz bubble (Grok)
Question bubble plus answer buttons (`aria-pressed`) and a `role="status"` feedback message. Correct and incorrect states are shown with colour, an icon **and** text.

### Demo: design directions (DanceFit)
Two-option toggle (`aria-pressed`) with a `role="img"` preview. Replace the stand-ins with real screenshots and descriptive alt text.

### Facts row (story hero)
A `<dl>` grid of Role / When / Team / Stack, with labels as eyebrow-style `dt`.

### Story sections
- **What I built:** a 2-up card grid (`bg-card`, `line` border, `rounded-xl`).
- **Challenges:** a ruled list with the title left and text right.
- **Impact:** a `mint` box with check icons.
- **How it works:** a numbered list with pastel number dots.

### Journey timeline (About)
An `<ol>` of stages. Each stage has a numbered pastel dot and connecting line (decorative), a card with "when" eyebrow, `font-display` title, body, and a "What it taught me" box in `chip`. The last stage is a dashed "Next → Your team?" card.

### Placeholder
`border-2 border-dashed border-accent` plus an icon and a description of what goes there. Use it for missing images and for text in [brackets]. **Nothing dashed should ship.**

### Contact block
A `lav` `rounded-3xl` panel with a `font-display` heading, one line of text and the email as the primary button. It ends every page.

---

## 8. Imagery & illustration

- **One illustration per page**, in the pastel palette, kept still. The home page has the desk scene in the About section.
- Private products (Ceta, cyber insurance, NFT) get **illustrations only**, with no screenshots or client branding.
- Portraits sit in a soft blob shape on a `peach` backing.
- Decorative SVGs: `aria-hidden="true"`. Meaningful ones: `role="img"` plus `aria-label`.
- Use `next/image` with explicit sizes, and AVIF/WebP.

---

## 9. Voice & content

- First person, plain English, short sentences. Australian spelling (colour, organise).
- Lead with outcomes and numbers you can stand behind (200,000+ students, 100% coverage, promoted in under a year).
- Headings say what something is, not that it's clever ("What I built", "Challenges", "Impact").
- Keep the job title consistent everywhere: **Frontend Software Engineer**.
- Use real dates. No "[placeholder]" text in production.

---

## 10. Accessibility checklist (WCAG 2.2 AA)

- [ ] Skip link to `#content` on every page (`.skip-link` in `globals.css`).
- [ ] One `h1` per page; headings in order; landmarks `header`/`nav`/`main`/`footer`.
- [ ] Every interactive element is a real `<a>` or `<button>`; touch targets ≥ 44×44px (2.5.8 asks for 24, and we go further).
- [ ] Focus visible everywhere (3px `focus` ring, 3px offset); focus is never hidden behind the sticky column (2.4.11).
- [ ] Control borders and switch tracks use `line-strong` (1.4.11).
- [ ] Toggles use `aria-pressed`; the disclosure uses `aria-expanded`; demo results are announced via `role="status"`.
- [ ] Information is never conveyed by colour alone.
- [ ] Respect `prefers-reduced-motion` and `prefers-color-scheme`; the site switches override them.
- [ ] Text resizes to 200% and reflows at 320px width with no horizontal scroll (1.4.10).
- [ ] External links are marked; `lang="en"` is set; page titles are unique ("Grok Web Components — Laize Ferraz").

---

## 11. Page inventory

Routes and slugs follow `CLAUDE.md`. Stories ship one per sprint, in this order.

| Route | Canvas board | Status |
|---|---|---|
| `/` | D · Home | MVP |
| `/projects/cyber-insurance-platform` | D · Story — Cyber insurance | Sprint 1. Copy final; needs illustration |
| `/projects/grok-web-components` | D · Story — Grok | Sprint 2. Needs: team size, video with captions |
| `/projects/dancefit-sunshine-coast` | D · Story — DanceFit | Sprint 3. Needs: brief, challenges, results, real direction screenshots |
| `/projects/ceta` | D · Story — Ceta | Sprint 4. Needs: team size, challenges, impact, illustration |
| `/projects/white-label-marketplace` | D · Story — NFT | Sprint 5. Needs: team size, challenges, impact, illustration |
| `/projects/letmeask` | D · Story — Letmeask | Sprint 6. Needs: rebuild lessons, screenshots |
| `/about` | D · About me | **Post-MVP, not in `CLAUDE.md` yet.** Before building: add it to the site map, swap the "right now" Caveat label for a section label (Caveat is greeting-only), and change the Academy Xi timeline stage to "Three coding bootcamps". |

**Build note:** the story pages share one template: `app/projects/[slug]/page.tsx`, with all content in the typed file `src/content/projects.ts` (each project has `published: boolean`). Use the fields `eyebrow, title, summary, facts[], actions[], note, panel, overview[], steps[], built[], challenges[], impact[], proud[], tech[]`. Generate `generateStaticParams`, `generateMetadata` and the sitemap from published projects only.

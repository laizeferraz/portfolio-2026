# design/

Reference files for the portfolio. Nothing in this folder ships with the site.

- `DESIGN.md`: the design reference (components, type, spacing, motion, accessibility). Start here.
- `*.dc.html`: Option D exported from the Claude Design canvas *Laize Ferraz — Portfolio · Option D* (https://claude.ai/artifact/9hR61xnZxC5Cwdqh4hQxBK). Read them for layout, copy, demo behaviour and illustrations. They use the canvas's own template syntax (`{{…}}`, `sc-if`, `sc-for`, `dc-import`), so don't copy them into the app: rebuild with React, Tailwind and the tokens in `src/styles/tokens.css`.
- `canvas.json`: the canvas index (board names and positions).

| File | What it is |
| --- | --- |
| `Main.dc.html` | Home page. Contains all home copy, the three demos and the Display settings logic. The `dark` prop switches theme. |
| `ClearDark.dc.html`, `ClearMobile.dc.html`, `ClearDarkMobile.dc.html` | Thin wrappers that show `Main` in dark mode and/or at 390 px. No content of their own. |
| `Case.dc.html` | The shared project story template **and all story content** (the `P` object in its script, one entry per project). Defaults to Grok. |
| `CaseCyber`, `CaseDanceFit`, `CaseCeta`, `CaseNft`, `CaseLetmeask`, `CaseMobile` | Wrappers that render `Case` for each project (and Grok at 390 px). |
| `About.dc.html`, `AboutMobile.dc.html` | About page with the journey timeline. Post-MVP; see DESIGN.md §11 before building. |

Where these files differ from `CLAUDE.md` (copy corrections, slugs, `line-strong` for controls, Caveat only for the greeting), `CLAUDE.md` and `DESIGN.md` win. The portrait is an "LF" placeholder here.

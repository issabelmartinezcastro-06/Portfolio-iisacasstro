# Profile of this repo

Everything here is specific to one portfolio. Keep this file current: when the structure changes, change it here. Items marked `ASK` could not be discovered from the repo and must be asked of the owner on the first real pass; replace the marker with the answer.

## Owner and site

- Owner name (as shown on pages and in metadata): Isabel Martínez Castro
- GitHub account: `issabelmartinezcastro-06` (the only one to use; the old account `iisacasstro` is retired and must never appear in commits, remotes or Vercel)
- Live URL: https://portfolioiisacasstro.vercel.app (Vercel project `portfolioiisacasstro`, team `issabelmartinezcastro`; every push to `main` deploys by itself)
- Repository: https://github.com/issabelmartinezcastro-06/Portfolio-iisacasstro (branch `main`)
- Languages and which content is translated: Spanish (`/es`) and English (`/en`), **everything** is bilingual, including every project. `/` redirects to `/es`. See `references/i18n.md`, but note the differences under "Environment quirks"
- Themes: light only (warm cream background, colourful accents). shadcn's `.dark` variables exist in `app/globals.css` but nothing switches them on
- Metadata title pattern: home `Isabel Martínez Castro | Portfolio`; project `<Project title> | Isabel Martínez Castro`

## Stack and commands

- Framework and version: Next.js 16.4.6, App Router, React 19.3, **JavaScript only (no TypeScript)**; `cacheComponents` and `partialPrefetching` are on in `next.config.mjs`, so `params` is a Promise (`await params`) and dynamic routes need `generateStaticParams`. `AGENTS.md` says to read `node_modules/next/dist/docs/` before writing Next code
- Styling and UI: Tailwind CSS 4, shadcn/ui (Base UI), Lucide icons, `next/font/google` (Bricolage Grotesque + Geist Mono)
- Animation: GSAP + `@gsap/react` (hero), Motion (`motion/react`, cards), plain CSS
- Package manager: npm
- Type check: n/a (no TypeScript). Use `npm run build`, which also catches route and rendering errors
- Lint: `npm run lint`
- Dev server / preview config: no `.claude/launch.json`. Run `npm run dev` (port 3000), or `npm run build` then `npx next start -p 3100` for a production check. Stop the server afterwards
- Known harmless console errors (do not chase these): none known

## Where things live

| What | Path |
| --- | --- |
| Project data (single source of truth for grid, detail pages, sitemap) | `lib/projects.js` |
| Case-study pages | `app/[lang]/modulos/[slug]/page.js` (one template for all projects) |
| Shared case-study components | none yet. Existing: `components/header.jsx`, `hero.jsx`, `project-card.jsx`, `language-switcher.jsx`, `components/ui/button.jsx` |
| Per-project images | none yet. Proposed: `public/proyectos/<slug>/` (ask before creating) |
| Other-language card text | same entry in `lib/projects.js`, keys `es` and `en` |
| UI strings (both languages) | `lib/i18n.js` (`getDictionary(lang)`) |
| Counters / stats section | none |
| Navbar / header | `components/header.jsx` (+ `language-switcher.jsx`) |
| Sitemap / robots / security headers | `app/sitemap.js`, `app/robots.js`, `next.config.mjs` |
| Blog posts, resume, skills sections (optional follow-ups) | none exist |

## Data entry

- Fields of one project entry (copy of the real shape; today's three entries are fictional placeholders):

```js
{
  slug: "proyecto-uno",
  color: "pink",                 // pink | violet | mint | yellow | orange | sky
  stack: ["Next.js", "Tailwind CSS", "GSAP"],
  es: { title, summary, description },
  en: { title, summary, description },
}
```

- Categories and what each means: none
- Label vocabulary (uppercase tags on cards): none
- Thumbnail: none. Cards are solid colour blocks (`colorClasses` in `lib/projects.js`; a new colour needs a `--color-*` in `app/globals.css` and a full class name in that map so Tailwind sees it). If thumbnails are added: ratio 16:9, WebP, under `public/proyectos/<slug>/`
- Does the entry order define the grid order? Yes, array order in `lib/projects.js`. Ask where a new project goes
- Detail pages today only show title, summary, one `description` paragraph and the stack. Case studies in the style of `page-style.md` need the shared components first (see below)

## Voice

- Language(s) of the case studies: Spanish and English, both written, not machine-translated afterwards
- Person: always first person ("diseñé", "decidí", "aprendí"). This overrides the skill's default of impersonal text in `page-style.md`
- Banned things: em dashes (use commas, full stops or parentheses) and hype adjectives (only what can be checked). Emojis are not banned, but keep them out of case-study text unless asked
- How the owner credits teammates and clients: depends on the project, ask each time (name and what each person did, or just "team of N")

## Diagram style

- Palette: the site is cream with colourful accents (`pink`, `violet`, `mint`, `yellow`, `orange`, `sky`, ink `oklch(0.2 0.03 290)`), not the skill's ivory + terracotta default. Before the first diagram, edit `THEME` at the top of `scripts/diagram-lib.mjs` to match, then keep it fixed. Decision: diagrams use the whole palette, not a single accent. Edit `THEME` in `diagram-lib.mjs` to add the site colours (one colour per card or group), keep text short and check contrast
- Fonts: Bricolage Grotesque for text; change `serif`/`sans`/`fontImport` in `diagram-lib.mjs` accordingly

## Privacy specifics

- Client work under NDA: ASK
- Projects that hold other people's data: ASK
- Anything else the owner never wants public: personal email and the retired account name. Never publish `isabelmartinezcastro06@gmail.com`; commits use the GitHub noreply address
- Only public information goes on pages; `.env*` and `.vercel/` are git-ignored and must not be read or shown

## Project sources

| Project | Repo | Visibility | Live URL | Local folder | Notes |
| --- | --- | --- | --- | --- | --- |
| Proyecto uno / dos / tres | none | n/a | n/a | n/a | Fictional placeholders from the first build; replace with real projects, ASK for each repo, visibility and local folder |

## Environment quirks

- Windows 11, PowerShell. Script execution is disabled, so `npx`, `npm` and `.ps1` shims fail in PowerShell: use `npx.cmd` / `npm.cmd`. Do not change the execution policy. In PowerShell `vercel` is not on PATH; use `npx.cmd vercel ...`
- Git identity is set in this repo and globally to `issabelmartinezcastro-06` with `359284531+issabelmartinezcastro-06@users.noreply.github.com`. Never use `isabelmartinezcastro06@gmail.com` for commits: GitHub ties it to the retired account. Check `git log --format='%an <%ae>'` before pushing
- `gh` is logged in as `issabelmartinezcastro-06`. Vercel CLI is logged in as `issabelmartinezcastro-06` (team `issabelmartinezcastro`). `.vercel/` links the folder to `portfolioiisacasstro`
- Pushing to `main` deploys to production. Do not push without being asked
- i18n differs from `references/i18n.md`: the default language has a **prefix** (`/es`), there is no middleware, `/` and `/modulos/:slug` are redirected to `/es` from `next.config.mjs`, and dictionaries are plain JS objects in `lib/i18n.js`
- Template leftovers: `public/` still has the default Next.js SVGs (unused), `README.md` is the create-next-app text. Report them, do not fix unasked
- Replacing the fictional projects is the first real job; there is no git history of earlier case studies to learn from

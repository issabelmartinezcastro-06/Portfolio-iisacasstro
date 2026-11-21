---
name: update-portfolio
description: Add a new project (or rewrite an existing one) as a case study in this repo's portfolio site, following the structure, tone and visuals of the earlier ones, with real screenshots and consistent diagrams. Use whenever the user wants to add, update or rework a project, case study, thumbnail or the project grid. Also use to update this skill itself after a pass.
---

# Update the portfolio

The recurring job is **adding new projects as case studies** that match the earlier ones in structure, visuals and tone, and keeping the project grid, counters and translations consistent. What this skill knows comes from the repo's git history and from the owner's corrections; keep it that way and keep it current.

## First run: set up the profile

This skill was written from a Next.js + TypeScript portfolio and is meant to be adapted. Everything that is specific to *this* repo lives in `references/profile.md`.

1. Open `references/profile.md`. If it still contains `FILL` markers, fill it in **before doing anything else**: explore the repo (`package.json`, `app/` or `pages/`, the data file that lists projects, the shared case-study components, `public/`, README, `CLAUDE.md`/`AGENTS.md`), run `git log --stat -20`, and write down what you find. Ask the owner only for what cannot be discovered: tone, languages, what counts as private, how to credit teammates, where new projects go in the grid.
2. Check how far the repo matches the assumptions in `references/page-style.md` (shared page components, one data file that generates the grid). If a piece is missing, tell the owner and propose creating it once as a shared component instead of hand-writing every page.
3. Delete the `FILL` markers as you go. From then on, the profile is the source of truth for repo-specific facts.

## Read before writing anything

- `references/profile.md`: this repo's paths, stack, conventions, project sources
- `references/page-style.md`: structure, tone, components, **which component for which images**, feature coverage, data entry
- `references/assets.md`: how to capture screenshots, draw diagrams and convert images
- `references/privacy.md`: what must never reach a public page
- `references/lessons.md`: mistakes earlier passes made, each one turned into a rule
- `references/i18n.md`: only if the site is multilingual
- `references/history.md`: what each earlier pass did. **Append to it at the end of every pass.**

## Workflow

1. **Orient.** `git log --stat -15` shows the latest pass. Read the README and the data file that lists projects. If git says "dubious ownership" (common on Windows), do not touch global config: prefix commands with `git -c safe.directory=<repo path>`.
2. **Find the sources.** Each project usually has a repo (`gh repo list <owner>`) and a local folder. Folder and repo names can differ; record the mapping in `profile.md`. Ask if a project cannot be found. Never read `.env`, credential files or private data folders.
3. **Study each project properly** before writing: README, CLAUDE.md/AGENTS.md, `git log`, the main flow in code, tests, the live site if there is one. State only what the code, docs or a live page confirm. If something is unclear, leave it out or say so on the page. **Make a feature inventory** from routes, admin pages and API routes and check every flow is on the page or consciously omitted; a flow that defines the product gets its own section.
4. **Decide the page shape.** UI project: real screenshots plus 2 or 3 diagrams. No UI (automation, plugin, library, CLI): diagrams, a terminal walkthrough and a generated thumbnail card. Replacing an older project: keep the slug and URL, current version first, an "Evolution" section for the old one.
5. **Make the assets** (`references/assets.md`): screenshots to WebP, diagrams to PNG, a 16:9 thumbnail. Redact personal data before capturing, never after.
6. **Write the page**, then the entry in the data file and, if the site is multilingual, the card text in every other language. Grid, listing page and counters should generate themselves from the data file. **Ask where the project goes in the grid**; do not assume "top".
7. **Verify.** Look at every new page and component at desktop and phone width, in every theme the site has, not only that it loads. For anything in the navbar or header, measure at 320, 360, 390, 768, 992 and 1440 px: items stay on one row, do not overlap and do not widen the page. Run the type check and the linter, start the dev server, load every new page, check for broken images and console errors. Use headless Chrome if no browser pane is available.
8. **Report and offer follow-ups**, never assume them: README touch-ups, a blog post, resume/skills update, commit and push.
9. **Update this skill**: append the pass to `references/history.md`, fix anything in these files that turned out to be wrong, add new learnings to `references/lessons.md`, and keep `profile.md` current. Keep this file short; details go in `references/`.

## Rules every pass follows

- **Accuracy over polish.** Every claim on a page must be verifiable from the repo or a live page. Honest limits ("prototype", "screenshots use fictional data") make pages more credible.
- **Credit the team.** If the owner did not do all of it, say who did what. If they did it alone, say so.
- **Private repos get no GitHub link and no code excerpts**; when a repo becomes public, add the link then. Re-check visibility on each pass.
- **Do not publish people's data.** See `references/privacy.md`.
- **Do not commit or push unless asked.** When committing: conventional prefix (`feat:`, `fix:`, `style:`, `chore:`), a body that explains the why, and the attribution trailer the session asks for. Leave no temporary files in the repo.
- **Do not fix unrelated things** in a pass; mention them instead.
- **Match the repo's code style.** No explanatory comments if the file has none, no `any` if the file has none, reuse the template's existing classes and components before adding CSS.
- **Look at what you built.** Open each new page and component yourself; do not report "done" from a passing type check.

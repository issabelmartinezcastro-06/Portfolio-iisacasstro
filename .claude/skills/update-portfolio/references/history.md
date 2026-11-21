# History of passes

Append a new entry at the end of **every** pass: date, commits, what was added, what was learned, what was left open. Fix wrong entries instead of piling up contradictions. On the first run, reconstruct the past from `git log` (one row per meaningful pass) so the next pass knows the starting point.

## Passes so far

| Date | Commits | What happened | Lesson |
| --- | --- | --- | --- |
| 2026-11-20 | daf42fb to fe8f251 | Site built from scratch: Next.js 16 scaffold, shadcn/ui, Lucide, GSAP and Motion, security headers, sitemap, robots, bilingual (ES/EN) home, colourful theme and `/modulos/[slug]` pages with three fictional placeholder projects. Deployed on Vercel. | Commits showed under a retired GitHub account because the author email was tied to it; authors were rewritten and force-pushed. |
| 2026-11-21 | uncommitted at the time of writing | Skill installed, profile filled. First real project: STL (Fundación Seminario Teológico Libre). Built shared case-study components (`components/case-study.jsx`, `components/carousel.jsx`), a richer `/modulos/[slug]` template that falls back to the simple page for entries without `study`, 8 WebP screenshots, 3 diagrams in ES and EN with the site palette, a 16:9 thumbnail and a thumbnail on the project card. STL placed first in the grid. | Cropping full-page captures to one fixed ratio (1440x640) keeps a carousel consistent; a `scrollY` after a click closes scroll-sensitive pop-ups. |

## Latest pass in detail

Most recent pass: STL. Sources: local folder `Desktop/Proyectos/STL` (remotes: GitLab `iisacasstro/stl` and a GitHub copy under the new account) and the live site seminarioteologicolibre.org. Owner decisions: GitLab link on the page, role = work for the foundation, show the public site unredacted, STL first in the grid. Left open: commit and push, real case studies for the three placeholders, no click-to-zoom on the carousel. For each pass, write here: sources used, local folder vs repo mapping, assets made, environment quirks met, corrections the owner made after the first delivery (each one becomes a rule in `lessons.md`), and what was left open. Move older details into the table above as one line each.

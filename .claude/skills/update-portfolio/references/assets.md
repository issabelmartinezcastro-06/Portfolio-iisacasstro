# Assets: screenshots, diagrams, thumbnails

All tooling lives in a scratch folder, not in the repo. Install once there:

```bash
npm i puppeteer-core sharp
```

The scripts in `../scripts/` are working examples. Copy them to the scratch folder and adapt. They find Chrome through the `CHROME_PATH` environment variable, falling back to the usual install path of the OS. Output goes to the scratch folder first, then to the project's image folder (see `profile.md`).

## Image conventions

| Kind | Format | Notes |
| --- | --- | --- |
| Real screenshots | `screen-<what>.webp`, quality about 82 | 1440 px wide for desktop, 1080 to 1280 for app crops. Phones: capture with `dpr: 2`, resize to about 560 px wide, show as a narrow figure |
| Thumbnail | `thumbnail.webp` | 16:9, real pixel size goes in the data file |
| Diagrams | `<name>.png` (palette PNG, about 40 to 60 KB) | 1800 px wide |
| Dark and light variants | `screen-<x>-dark.webp` / `-light.webp` | Show both when the app has two themes |

When an old image is replaced, `git rm` it in the same pass.

## Screenshots of real things

- Prefer **real captures** of live sites or locally running apps (`scripts/shot.mjs`: viewport, full page, scroll position, scroll-through to trigger reveal animations, clicks, wheel zoom, dark mode, localStorage seeding such as a `theme` key).
- Reveal-on-scroll pages: scroll through the page first or sections stay invisible. Use `scrollY` for section shots.
- Persisted state leaks between jobs in one browser (a theme set by one job applies to the next). Set `storage` explicitly on each job.
- **Redaction is built into `shot.mjs`**: emails and phone numbers in visible text are replaced before every screenshot. Extend it when a page shows other personal data. Check each capture by eye.
- **Hide framework overlays** before capturing a dev server (Next.js: hide `nextjs-portal` with `hide: ["nextjs-portal"]`).
- **Capture a flow in steps** at one fixed viewport (1440x900) so the images can go in a `Carousel`: the empty form, the filled one, the preview, the progress state, the success state, the result.
- **Admin consoles and anything with user data**: never capture the real thing. Copy the project to the scratch folder **without** `.git`, `.env*`, data folders and `node_modules`, reinstall, seed fictional data through the project's own data layer, run it on a spare port with dummy secrets, log in with a script, capture, stop the server. Say "fictional data" on the page.
- Apps with no UI of their own that run inside another host (a plugin panel, an embedded widget): build a standalone copy that stubs the host API and uses synthetic data. Use content about public code, never other projects' content.

## Diagrams in one consistent style

The default look: ivory background `#faf9f5`, white cards with a thin warm border, **one** accent colour (terracotta `#d9694a`) used for the kicker and for the one or two cards that matter, a serif title, a sans-serif for text, upper-case micro labels, light gray arrows, very little text per box. Colored dots only to tell sibling projects apart. **Change the constants at the top of `diagram-lib.mjs` to match the owner's site**, then keep the style fixed across all pages.

`scripts/diagram-lib.mjs` implements it: `page({kicker, title, sub, body})`, `row([cards])` with arrows between cards, `card({eb, t, d, accent, dot, pills})`, `.grid`, `.note`, `.pills`, `render(name, html, outDir)`. `scripts/diagram-example.mjs` shows three finished diagrams to copy from.

Rules: one idea per diagram; a title that says the point ("Articles live in git, people live in a database"); 4 cards per row at most (3 for longer text); no diagram that only repeats a list; read each PNG after rendering and fix wrapping. Keep file names stable when redrawing so pages need no edits. Reuse one diagram across sibling pages when it shows a shared ecosystem, with a page-specific caption.

## Thumbnails for projects with no UI

A 1440x810 card in the same style (`scripts/thumbnail-card-example.mjs`): serif title on the left, on the right a rendered example of the project's central artifact (a config file, a release note, a report). Use only the project's fictional examples.

## Convert

```js
sharp(src).webp({ quality: 82 }).toFile(out)                          // screenshots
sharp(src).png({ palette: true, quality: 90 }).toFile(out)            // diagrams
sharp(src).extract({ left, top, width, height })                      // crops
```

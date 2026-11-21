# Case-study pages: structure, tone and components

Open two or three existing case studies first (a long one, a short one, one without UI) and copy their shape. The component names below are the ones the skill was written with; `profile.md` says where they live in this repo. If a component does not exist, build it once as a shared component instead of hand-writing markup in each page.

## Skeleton

```tsx
export const metadata = { title: "<Name> - <What it is> | <Owner>", description: "<1-2 sentences>" }
const IMG = "/assets/imgs/projects/<slug>"
```

`ProjectPage` > `ProjectHeader` (badge, status, title, summary, 4 `meta` tiles, `hero`) > `ProjectBody` (table of contents on long pages, numbered `Section`s, `Takeaways`, `ProjectCTA`).

Order every page follows: **Overview** (what it is and why it exists, in two short paragraphs) → **Problem / Solution** callouts (`danger` = "The Problem" or "What it needed to do", `success` = "The Solution" or "The approach") → `ProcessSteps` (4 tiles) when there is a pipeline → the sections that show the work → **Key Decisions** (a sub-heading plus one short paragraph each, with the trade-off) → **Outcome** (`StatTiles`, 4 to 6 numbers that can be counted) → **Role** when it was not solo → `Takeaways` (3 items plus one "next" line) → `ProjectCTA`.

Short pages skip the table of contents and number sections inline. Pages over about 8 sections get a `TableOfContents` (anchor ids come from the titles).

## Header

- `badge`: "Visit Live Site" or "View on GitHub". Omit for private projects.
- `status`: small line above the title: "Version 2 · 2026 · rebuilt from the WordPress original", "Prototype · v0.9.0 · November 2026".
- `title`: "<Name> - <Short descriptor>" (same as the card title in the data file).
- `meta`: Role, Stack, Type or Client or Team, plus one of Timeline / Languages / Identity.

## Tone (adjust to the owner's voice in `profile.md`)

- First person only when the role matters ("I designed and built...", "My part in version 2"). Otherwise impersonal and concrete.
- Short sentences, no hype, no adjectives that cannot be checked. Bold the first sentence of the overview as a thesis.
- Say what a decision cost, not only what it gave ("the cost is real: a change now goes through me").
- Name limits, simulations and fictional data on the page ("everything infrastructural is simulated on purpose", "screenshots use fictional subscribers").
- Illustrative terminal sessions carry a caption: "Illustrative: the flow and the sources are real, the wording is an example."

## Components

| Component | Use |
| --- | --- |
| `Section`, `SubHeading`, `Paragraph` | Text structure |
| `FeatureList` | Bold lead + sentence, for features, decisions, roles |
| `Callout` | Problem / solution / note |
| `ProcessSteps` | Four numbered tiles: label + hint |
| `Figure`, `FigureGrid` | One image or a pair. Measure images at build time so pages give no width/height; a missing file renders nothing |
| `Figure narrow` | Phone screenshots |
| `Gallery` | Grid of cropped thumbnails with click-to-zoom, for many small images |
| `Carousel` | Looping slideshow of 3 or more landscape screenshots of one thing |
| `Terminal` | Animated terminal; roles `you`, `agent`, `flag`, `ok`, `dim` |
| `DataTable` | Comparisons, commands, built/next |
| `StatTiles` | Outcome numbers, only numbers that can be counted |
| `Quote` | Pull quote, rarely |
| `Takeaways` | Dark closing block |
| `ProjectCTA` | Buttons: live site, source, sibling case study, contact |

## Layout cases: which component for which images

Choosing the wrong container deforms screenshots. Decide from the shape and count of the images, not from habit.

| Images | Use | Why |
| --- | --- | --- |
| One landscape screenshot or a diagram | `Figure` | Full width, natural ratio, optional caption |
| Two landscape images that are compared (light/dark, before/after) | `FigureGrid` | Two columns on desktop, stacked on phones |
| Two or three **portrait** phone screenshots | `FigureGrid` with `narrow` on each | Each stays phone-width instead of stretching |
| **Three or more landscape screenshots of the same thing** (an admin console, the steps of a flow) | `Carousel` | One image at a time, whole, at its own ratio, looping, with arrows, dots, pause and click-to-zoom. Three columns of landscape images become illegible slivers |
| A dense set of many small, unrelated images where a grid is the point | `Gallery` | Thumbnails cropped to a fixed ratio with click-to-zoom. Never for screenshots whose edges matter |
| A flow in steps | `Carousel` with numbered captions plus one diagram | The captions tell the story, the diagram shows the system behind it |

Rules:

- **Never put landscape screenshots in three or more columns.** Pairs only; more than two goes to a `Carousel`.
- A `Carousel` takes images of the same ratio (it sizes itself from the first). Capture all of them at the same viewport, for example 1440x900.
- Autoplay pauses on hover, focus, hidden tab and a Pause button, and is off with reduced motion. Do not build another slider.
- When a component is new or used for the first time, **look at it** at desktop and phone widths before reporting.
- Every image must read at its displayed size. If text in a screenshot is unreadable at column width, crop to the part that matters or capture at a larger scale.

## Feature coverage

Before writing a page, list the project's user-facing flows from its routes, admin pages and API routes (publish, delete, upload, subscribe, checkout, sign-up, moderation, translate...). Each flow is either covered on the page or consciously left out. A flow that is the reason the product exists gets its **own section** with a diagram and a step-by-step walkthrough captured from the real flow (or a sandbox copy), not one bullet inside another section.

## Data entry

The data file is the single source of truth: the home grid, the listing page, the filters and the counters all read from it. Never hand-write cards.

Fields (adjust to the repo's real type): `slug`, `title`, `subtitle`, `workTitle`, `label` (uppercase tag), a one-to-two-sentence `description`, `client`, optional `duration` (omit when unknown), `tools` (3 to 5), `thumbnail` with its real pixel size, `categories`. When a project changes technology, move it between categories.

Thumbnails are 16:9, stored with the project's other images.

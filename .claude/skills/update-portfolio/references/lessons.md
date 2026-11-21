# Lessons from earlier passes

Distilled from a real portfolio's history. Each one cost a correction. Add yours at the end of every pass.

## Content

- **Every claim must be verifiable** from code, docs or a live page. Say "prototype", "untested interactively", "fictional data" when true.
- **Confirm the owner's role** for client or team work before writing it ("brand designer, under supervision"). Credit teammates by what they did.
- **Cover the flow that defines the product.** A first draft of a newspaper platform treated "publish an article" as one bullet inside the admin section; the owner caught it. Build the feature inventory from routes and admin pages before writing.
- **Replacing an old project**: keep slug and URL, put the current version first, add an Evolution section for the old one, move it out of its old category, `git rm` superseded images in the same commit.
- **Re-check repo visibility** each pass. Private repos get no GitHub link; add it when the repo becomes public.
- **Grid position is the owner's call.** Default "newest first" was overridden several times (swap two projects, interleave certain projects, never put two similar ones side by side). Ask.
- **Optional follow-ups** to offer, never assume: README touch-ups, a blog post about the work, resume and skills updates, new thumbnails.
- **Report template leftovers instead of fixing them silently**: placeholder testimonials, a contact form with `action="#"`, another author's name in a mobile menu. Fix only what is visibly wrong and trivial; list the rest.

## Visuals

- **Real captures beat mockups.** Live public pages, or a sandbox copy with fictional data for anything with user data.
- **Landscape screenshots in three columns become unreadable slivers.** Pairs go in a two-column figure grid; three or more go in a carousel (one image at a time, whole, at its own ratio). A crop-to-fixed-ratio gallery is only for many small, unrelated images.
- **`next/image` writes a `height` attribute.** A gallery built on it rendered tall crops until the style set `height: auto`. Look at every new component.
- **Cards with a fixed pixel height crop thumbnails.** Use a 16:9 aspect-ratio box on desktop and phones.
- **Check both themes** (dark and light). Forced colour classes fixed contrast bugs; a dark-theme rule with `border: 0 !important` once killed a hover ring that worked in light.
- **Hide the dev-server overlay** (Next.js badge) before screenshots.
- **When a pass changes a project's UI**, retake its screenshots afterwards and say whether the live site already matches.
- Keep the diagram style fixed (one accent, little text); redraw with the same file names so pages need no edits.

## Layout and navigation

- **Never let the navbar stack on phones.** Shrink instead: smaller brand, smaller controls, hide secondary icons in the awkward middle range. Measure at 320, 360, 390, 768, 992 and 1440 px: single row, no overlap, no horizontal scroll. Two adjacent controls should be the same size (a shared square class fixed an inconsistent pair).
- A project's own mobile navigation that stacks all links should become a burger menu.

## Multilingual sites (see `i18n.md`)

- Relative asset URLs (`src="assets/..."`) break under a locale prefix. Write them absolute.
- A middleware matcher regex written through a shell heredoc lost a backslash and silently matched everything; verify with `curl` that unprefixed pages still resolve.
- Missing translations fall back silently; check them when adding a project.
- Machine translation mangles product names; mark text that must not change with `data-no-translate`.

## Process

- **Do not commit or push unless asked.** Commit with a conventional prefix and a body that explains the why.
- Git "dubious ownership" on Windows: prefix each command with `git -c safe.directory=<path>`; never change global config.
- Local folder names can differ from repo names. Record the mapping in `profile.md`.
- A matcher, regex or config edited through a shell can lose escapes; re-read the file after writing it.
- Keep this skill short at the top and detailed in `references/`; append to `history.md` at the end of every pass.

## Added after the STL pass

- The owner may point to a repo on a retired account. Check whether a copy exists under the current account and say so, but use the link the owner chooses.
- Pop-ups that close on scroll must be captured with no `scrollY` after the click; use a taller viewport instead.
- Full-page captures cropped to one ratio (1440x640) make a clean carousel; check each crop for half-cut people or text before converting.
- Bilingual diagrams need one render per language; keep a file name pattern (`diagram-<name>-es.png`, `-en.png`).
- Python heredocs through the shell break on Windows paths and on long text with quotes; write the file with the Write tool instead.

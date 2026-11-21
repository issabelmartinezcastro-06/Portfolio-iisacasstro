# Privacy: what never reaches a public page

The site (and often the repo) is public. Several projects handle other people's data. Treat anything personal as off limits unless the owner says otherwise for that specific item. `profile.md` lists what is specifically sensitive for this owner.

## Never publish

- Emails, phone numbers, addresses, ids and handles of people who are not the owner, even if they appear on a live site. `scripts/shot.mjs` masks emails and phone numbers in visible text before capturing; keep it that way and extend it when needed.
- Real subscriber lists, comments, messages, threads, customers or contacts from any project. Use the project's own fictional examples, or build fictional data (see `assets.md`).
- Credentials, tokens, `.env*` files, key files, URLs with secrets. Do not read them at all.
- Code or details of private repositories beyond what the owner asks to show, and anything under a client NDA. Client work is described by what the owner did, not by internal data.
- Content of other projects' notes or lessons when building demos.
- Raw samples of other people's published work; derived patterns only.

## Check before capturing or writing

1. Does the page or screenshot show a person's contact data, a real list or a real conversation?
2. Is the repo private? Then no GitHub link and no code excerpts.
3. Is a number or quote from a client page? Make sure it is public and attributed correctly.
4. Is a local path, machine name, username or API key visible in a terminal block or image?

## Doing it safely

- Capture live public pages or a sandbox copy running fictional data.
- A sandbox copy excludes `.git`, `.env*`, data folders, `.next` and `node_modules`, uses dummy secrets passed as environment variables, runs on a spare port and is stopped afterwards.
- Terminal blocks on pages are labelled illustrative and use fictional examples.
- If unsure whether something is public, leave it out and ask.

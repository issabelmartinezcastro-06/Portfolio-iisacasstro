// Three finished diagram shapes to copy from. Run: OUT_DIR=./out node diagram-example.mjs
// All content is fictional ("Acme Notes"); replace it with the project's real, verifiable facts.
import { page, row, card, render, close } from "./diagram-lib.mjs";

const OUT = process.env.OUT_DIR ?? "./out";

// 1. A flow in one row: 4 cards with arrows, one accent card for the step that matters.
await render("flow", page({
  kicker: "How it works",
  title: "A note goes from draft to published in four steps",
  sub: "Each step is a separate, testable unit; only the review step needs a person.",
  body: row([
    { eb: "Step 1", t: "Write", d: "Markdown in the editor, saved as a draft." },
    { eb: "Step 2", t: "Check", d: "Links and images are validated automatically." },
    { eb: "Step 3", t: "Review", d: "One person approves or sends it back.", accent: true },
    { eb: "Step 4", t: "Publish", d: "The page is rebuilt and the feed updated." },
  ]),
}), OUT);

// 2. A split: what is public and what is private, three cards without arrows.
await render("split", page({
  kicker: "Architecture",
  title: "Content lives in git, accounts live in the database",
  body: row([
    { eb: "Public", t: "Notes", d: "Markdown files in the repository.", pills: ["git", "static build"] },
    { eb: "Private", t: "Accounts", d: "Emails and sessions, never in the repository.", accent: true, pills: ["database"] },
    { eb: "Shared", t: "Search index", d: "Rebuilt from the notes on every publish.", pills: ["derived"] },
  ], { arrows: false }),
}), OUT);

// 3. Cards in a grid with a status line below.
await render("status", page({
  kicker: "Outcome",
  title: "What shipped and what is still open",
  body: `<div class="grid" style="grid-template-columns:repeat(3,1fr)">
    ${card({ t: "Editor", d: "Shipped.", pills: ["done"] })}
    ${card({ t: "Review queue", d: "Shipped.", pills: ["done"] })}
    ${card({ t: "Mobile app", d: "Not started.", accent: true, pills: ["open"] })}
  </div><div class="note">Status as of the last commit; update it when this page changes.</div>`,
}), OUT);

await close();

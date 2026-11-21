// Thumbnail card (1440x810, 16:9) for a project with no UI: title on the left, a rendered
// example of the project's central artifact on the right. Content here is fictional.
// Run: OUT_FILE=./thumbnail.png node thumbnail-card-example.mjs
import puppeteer from "puppeteer-core";
import { CSS, THEME } from "./diagram-lib.mjs";
import { CHROME } from "./chrome.mjs";

const OUT = process.env.OUT_FILE ?? "./thumbnail.png";
const html = `<!doctype html><meta charset=utf-8><style>${CSS}
body{width:1440px;height:810px;overflow:hidden}
#c{display:flex;height:810px;padding:84px 90px;gap:70px;align-items:center;background:${THEME.bg}}
.l{flex:1}
.l h1{font-size:76px;line-height:1.05;margin-bottom:28px}
.l .sub{font-size:27px;margin-bottom:0;max-width:560px}
.file{width:600px;background:#fff;border:2px solid ${THEME.line};border-radius:26px;padding:30px 34px;font-family:ui-monospace,Consolas,monospace;font-size:21px;line-height:1.62;color:#4a4943;box-shadow:0 18px 50px rgba(60,50,30,.07)}
.file .fn{font-family:Inter;font-size:16px;letter-spacing:.12em;text-transform:uppercase;color:#a29f94;font-weight:500;margin-bottom:14px}
.k{color:${THEME.accent}}.v{color:${THEME.ink}}.dim{color:#a29f94}
.chips{display:flex;gap:10px;margin-top:22px;flex-wrap:wrap}
.chips span{font-family:Inter;font-size:17px;border:2px solid ${THEME.accentBorder};background:${THEME.accentSoft};color:${THEME.accentText};border-radius:99px;padding:5px 15px}
</style>
<div id="c"><div class="l"><div class="kicker">Automation</div><h1>Reports that write themselves</h1><div class="sub">Weekly summaries from raw logs, with a memory of what was already reported.</div></div>
<div class="file"><div class="fn">reports / 2026-01-12-weekly.md</div>
<div><span class="dim">---</span><br><span class="k">team:</span> <span class="v">platform</span><br><span class="k">period:</span> <span class="v">2026-W02</span><br><span class="k">status:</span> <span class="v">draft</span><br><span class="dim">---</span></div>
<div class="chips"><span>Team</span><span>Period</span><span>Incident</span><span>Follow-up</span></div></div></div>`;

const b = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox"] });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 810 });
await p.setContent(html, { waitUntil: "networkidle0" });
await p.evaluate(() => document.fonts.ready);
await p.screenshot({ path: OUT });
await b.close();
console.log("ok", OUT);

// Diagram generator: a light, consistent visual language (ivory background, ONE accent colour,
// thin borders, little text per box). Renders HTML with headless Chrome and screenshots #root at 1800px wide.
// Match the owner's site by editing the constants below, then keep them fixed across all diagrams.
import puppeteer from "puppeteer-core";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { CHROME } from "./chrome.mjs";

export const THEME = {
  bg: "#faf9f5",
  accent: "#d9694a",        // kicker, accent cards, pills of the card that matters
  accentSoft: "#fffcfa",    // background of accent cards
  accentBorder: "#f3dccf",
  accentText: "#b5492b",
  ink: "#1f1e1b",
  muted: "#6b6a65",
  line: "#efede6",
  serif: "'Source Serif 4',Georgia,serif",
  sans: "Inter,system-ui,sans-serif",
  fontImport: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Source+Serif+4:wght@400;500&display=swap');",
};
const T = THEME;

export const CSS = `
${T.fontImport}
*{box-sizing:border-box;margin:0}
body{background:${T.bg};font-family:${T.sans};color:${T.ink}}
#root{width:1800px;padding:84px 96px 80px;position:relative;background:${T.bg}}
.kicker{font-size:19px;letter-spacing:.14em;text-transform:uppercase;color:${T.accent};font-weight:500;margin-bottom:22px}
h1{font-family:${T.serif};font-weight:400;font-size:54px;line-height:1.1;margin-bottom:26px}
.sub{font-size:25px;line-height:1.5;color:${T.muted};max-width:1250px;margin-bottom:56px}
.label{font-size:19px;letter-spacing:.12em;text-transform:uppercase;color:${T.muted};font-weight:500;margin:0 0 20px}
.row{display:flex;align-items:stretch;gap:0;margin-bottom:52px}
.card{background:#fff;border:2px solid ${T.line};border-radius:26px;padding:26px 30px 28px;flex:1;min-width:0;box-shadow:0 1px 0 rgba(0,0,0,.02)}
.card.accent{background:${T.accentSoft};border-color:${T.accentBorder}}
.card .eb{font-size:16px;letter-spacing:.12em;text-transform:uppercase;color:#a29f94;font-weight:500;margin-bottom:12px}
.card .t{font-size:27px;font-weight:600;margin-bottom:10px;line-height:1.2}
.card .d{font-size:21px;line-height:1.5;color:#7a7972}
.card .t .dot{display:inline-block;width:14px;height:14px;border-radius:50%;margin-right:12px;position:relative;top:-2px}
.arrow{width:92px;display:flex;align-items:center;justify-content:center;flex:none}
.arrow svg{width:60px;height:24px}
.pills{display:flex;flex-wrap:wrap;gap:10px;margin-top:16px}
.pill{font-size:17px;border:2px solid #e6e3da;border-radius:99px;padding:5px 15px;color:${T.muted};background:${T.bg}}
.note{font-size:21px;color:${T.muted};margin-top:-18px;margin-bottom:44px}
.grid{display:grid;gap:26px;margin-bottom:52px}
.hub{max-width:900px;margin:0 auto 0;text-align:center}
.hub .t{font-family:${T.serif};font-weight:500;font-size:36px}
.tag{display:inline-block;font-size:17px;border-radius:8px;padding:3px 11px;margin-right:6px;background:#f4f2ea;color:${T.muted}}
.tag.ok{background:#e6f1e8;color:#2c6b3f}.tag.no{background:#fbe9e2;color:${T.accentText}}
code{font-family:ui-monospace,Consolas,monospace;font-size:.92em}
`;

export const arrowSvg = `<svg viewBox="0 0 60 24" fill="none" stroke="#c9c4b5" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h54M46 3l10 9-10 9"/></svg>`;

export const card = ({ eb, t, d, accent, dot, pills }) =>
  `<div class="card${accent ? " accent" : ""}">${eb ? `<div class="eb">${eb}</div>` : ""}<div class="t">${dot ? `<span class="dot" style="background:${dot}"></span>` : ""}${t}</div>${d ? `<div class="d">${d}</div>` : ""}${pills ? `<div class="pills">${pills.map((p) => `<span class="pill">${p}</span>`).join("")}</div>` : ""}</div>`;

export const row = (cards, { arrows = true } = {}) =>
  `<div class="row">${cards.map((c, i) => (i ? (arrows ? `<div class="arrow">${arrowSvg}</div>` : `<div style="width:26px"></div>`) : "") + card(c)).join("")}</div>`;

export const page = ({ kicker, title, sub, body }) =>
  `<!doctype html><meta charset=utf-8><style>${CSS}</style><div id="root"><div class="kicker">${kicker}</div><h1>${title}</h1>${sub ? `<div class="sub">${sub}</div>` : ""}${body}</div>`;

let browser;
export async function render(name, html, outDir) {
  browser ??= await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox"] });
  const p = await browser.newPage();
  await p.setViewport({ width: 1800, height: 1000 });
  await p.setContent(html, { waitUntil: "networkidle0" });
  await p.evaluate(() => document.fonts.ready);
  const el = await p.$("#root");
  const out = `${outDir}/${name}.png`;
  mkdirSync(dirname(out), { recursive: true });
  await el.screenshot({ path: out });
  writeFileSync(`${outDir}/${name}.html`, html);
  await p.close();
  console.log("diagram", out);
}
export const close = async () => browser?.close();

import { existsSync } from "node:fs";

const CANDIDATES = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
];

export const CHROME = CANDIDATES.find((p) => p && existsSync(p));
if (!CHROME) throw new Error("Chrome not found. Set the CHROME_PATH environment variable to your Chrome or Chromium executable.");

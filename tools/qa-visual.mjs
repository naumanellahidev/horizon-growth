/**
 * Visual + layout QA. Loads each page at three breakpoints, captures a
 * screenshot, and reports horizontal overflow, console errors, failed
 * requests and any element wider than the viewport.
 *
 * Usage: node qa-visual.mjs http://localhost:3333
 */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = process.argv[2] ?? "http://localhost:3333";

const PAGES = [
  ["home", "/"],
  ["services", "/services"],
  ["service-seo", "/services/seo"],
  ["about", "/about"],
  ["contact", "/contact"],
  ["case-studies", "/case-studies"],
  ["case-study", "/case-studies/b2b-services-demand-generation"],
  ["careers", "/careers"],
  ["privacy", "/privacy-policy"],
  ["404", "/does-not-exist"],
];

const VIEWPORTS = [
  ["desktop", 1440, 900],
  ["tablet", 820, 1180],
  ["mobile", 390, 844],
];

mkdirSync("screenshots", { recursive: true });

const browser = await chromium.launch();
let problems = 0;

for (const [vpName, width, height] of VIEWPORTS) {
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });

  for (const [name, path] of PAGES) {
    const page = await context.newPage();
    const consoleErrors = [];
    const failed = [];

    page.on("console", (m) => {
      if (m.type() === "error") consoleErrors.push(m.text().slice(0, 160));
    });
    page.on("requestfailed", (r) => {
      failed.push(`${r.url().slice(0, 90)} — ${r.failure()?.errorText}`);
    });
    page.on("response", (r) => {
      if (r.status() >= 400 && !r.url().includes("does-not-exist")) {
        failed.push(`${r.status()} ${r.url().slice(0, 90)}`);
      }
    });

    await page.goto(BASE + path, { waitUntil: "networkidle", timeout: 60000 });
    // Smooth scrolling would fight a scripted scroll, so disable it for the run.
    await page.addStyleTag({ content: "html{scroll-behavior:auto !important}" });
    // Trigger every scroll-reveal so nothing is captured mid-animation.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 300) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 45));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(900);
    const stillHidden = await page.evaluate(
      () => [...document.querySelectorAll(".reveal")].filter((e) => getComputedStyle(e).opacity === "0").length,
    );

    const audit = await page.evaluate((vw) => {
      const doc = document.documentElement;
      const overflow = doc.scrollWidth - vw;
      const wide = [];
      document.querySelectorAll("body *").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && (r.right > vw + 2 || r.left < -2)) {
          const cls = typeof el.className === "string" ? el.className : "";
          wide.push(
            `${el.tagName.toLowerCase()}.${cls.split(" ").filter(Boolean).slice(0, 2).join(".")} (${Math.round(r.left)}→${Math.round(r.right)})`,
          );
        }
      });
      const imgs = [...document.querySelectorAll("img")];
      const broken = imgs.filter((i) => i.complete && i.naturalWidth === 0).length;
      return {
        overflow,
        wide: [...new Set(wide)].slice(0, 6),
        imgs: imgs.length,
        broken,
      };
    }, width);

    const flags = [];
    if (audit.overflow > 1) flags.push(`H-OVERFLOW +${audit.overflow}px ${audit.wide.join(" | ")}`);
    if (audit.broken) flags.push(`${audit.broken} BROKEN IMAGES`);
    if (stillHidden) flags.push(`${stillHidden} REVEAL BLOCKS STILL HIDDEN`);
    if (consoleErrors.length) flags.push(`CONSOLE: ${consoleErrors.join(" ; ")}`);
    if (failed.length) flags.push(`REQ-FAIL: ${failed.slice(0, 3).join(" ; ")}`);
    if (flags.length) problems += flags.length;

    console.log(
      `${flags.length ? "FAIL" : " ok "} ${vpName.padEnd(7)} ${path.padEnd(46)} imgs=${String(audit.imgs).padStart(2)}${flags.length ? "\n        " + flags.join("\n        ") : ""}`,
    );

    await page.screenshot({
      path: `screenshots/${vpName}-${name}.png`,
      fullPage: vpName === "desktop",
    });
    await page.close();
  }
  await context.close();
}

await browser.close();
console.log(`\n${problems === 0 ? "PASS — no layout, console or asset problems found." : `${problems} problem(s) found.`}`);

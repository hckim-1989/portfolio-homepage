// Build PDF resumes (KO/EN) from resume-data
// Usage: node scripts/resume/build-pdf.js

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { RESUME_DATA } from './resume-data.js';
import { renderResumeHtml } from './render-html.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '../../public/resumes');

const targets = [
  { lang: 'ko', file: 'Resume_Heungchul_Kim_KO.pdf' },
  { lang: 'en', file: 'Resume_Heungchul_Kim_EN.pdf' },
];

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'],
  });

  try {
    for (const t of targets) {
      const data = RESUME_DATA[t.lang];
      const html = renderResumeHtml(data);

      const page = await browser.newPage();
      await page.setContent(html, { waitUntil: 'networkidle0' });

      // 폰트 완전 로드 대기
      await page.evaluate(() => document.fonts?.ready);

      const outPath = path.join(OUT_DIR, t.file);
      await page.pdf({
        path: outPath,
        format: 'A4',
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        preferCSSPageSize: true,
      });

      const size = (await fs.stat(outPath)).size;
      console.log(`✓ ${t.lang.toUpperCase()} → ${outPath} (${(size / 1024).toFixed(1)} KB)`);
      await page.close();
    }
  } finally {
    await browser.close();
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

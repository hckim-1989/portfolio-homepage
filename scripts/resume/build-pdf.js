// Build resume PDFs (KO/EN, 표 구조) + 경력기술서 KO/EN
// 국문 경력기술서도 career-data.js에서 생성 (2026-09 사용자 승인으로 재생성 방식 전환)
// Usage: node scripts/resume/build-pdf.js

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { RESUME_KO } from './resume-ko-data.js';
import { RESUME_EN } from './resume-en-data.js';
import { CAREER_KO } from './career-data.js';
import { CAREER_EN } from './career-en-data.js';
import { renderResumeTableHtml } from './render-resume-table.js';
import { renderCareerHtml } from './render-career-html.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '../../public/resumes');

const targets = [
  { lang: 'ko', data: RESUME_KO, file: 'Resume_Heungchul_Kim_KO.pdf' },
  { lang: 'en', data: RESUME_EN, file: 'Resume_Heungchul_Kim_EN.pdf' },
];

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'],
  });

  try {
    for (const t of targets) {
      const html = renderResumeTableHtml(t.data);

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

    // ── 경력기술서 KO/EN (멀티페이지, Puppeteer 마진) ──
    const careerTargets = [
      { label: 'Career KO', data: CAREER_KO, file: 'Career_Heungchul_Kim_KO.pdf' },
      { label: 'Career EN', data: CAREER_EN, file: 'Career_Heungchul_Kim_EN.pdf' },
    ];
    for (const t of careerTargets) {
      const page = await browser.newPage();
      await page.setContent(renderCareerHtml(t.data), { waitUntil: 'networkidle0' });
      await page.evaluate(() => document.fonts?.ready);

      const outPath = path.join(OUT_DIR, t.file);
      await page.pdf({
        path: outPath,
        format: 'A4',
        printBackground: true,
        margin: { top: '13mm', right: '17mm', bottom: '13mm', left: '17mm' },
      });
      const size = (await fs.stat(outPath)).size;
      console.log(`✓ ${t.label} → ${outPath} (${(size / 1024).toFixed(1)} KB)`);
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

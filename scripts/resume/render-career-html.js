// 경력기술서 HTML 렌더러 — 이력서와 동일 디자인 시스템
// (Pretendard, ink #1a1a1a 포인트, 흰 배경, 동일 캡션 라벨 스타일)
// A4 2~3p — 프로젝트 블록은 break-inside: avoid로 페이지 중간 끊김 방지

const ACCENT = '#1a1a1a';

const esc = s =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export function renderCareerHtml(d) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<title>${esc(d.docTitle)} · ${esc(d.name)}</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css">
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{background:#fff}
  body{font-family:'Pretendard',-apple-system,BlinkMacSystemFont,sans-serif;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;color:#23262b;font-feature-settings:'tnum' 1}
  @page{size:A4}

  header{display:flex;justify-content:space-between;align-items:flex-end;padding-bottom:14px;border-bottom:2px solid ${ACCENT}}
  h1{font-size:24px;font-weight:700;letter-spacing:-.015em;color:#181a1d;line-height:1}
  .subtitle{font-size:11.5px;color:#4c4f55;font-weight:500;margin-top:8px;letter-spacing:.01em}
  .meta{text-align:right;font-size:10px;color:#6b6f76;line-height:1.75}
  .meta a{color:${ACCENT};text-decoration:none}

  .label{font-size:9.5px;font-weight:700;letter-spacing:.15em;color:${ACCENT};margin-bottom:8px}

  /* ── 요약 표 ── */
  .summary{margin-top:14px}
  table{width:100%;border-collapse:collapse}
  th{font-size:9.5px;font-weight:700;letter-spacing:.06em;color:#6b6f76;text-align:left;padding:7px 10px;border-bottom:1.5px solid ${ACCENT};background:#fafafa}
  td{font-size:10px;color:#42454b;line-height:1.5;padding:7px 10px;border-bottom:1px solid #ececef;vertical-align:top}
  td:first-child{font-weight:600;color:#23262b}

  /* ── 프로젝트 블록 ── */
  .project{margin-top:20px;break-inside:avoid;page-break-inside:avoid}
  .project-head{display:flex;align-items:baseline;gap:9px;padding-bottom:7px;border-bottom:1px solid ${ACCENT}}
  .project-num{font-size:10px;font-weight:700;letter-spacing:.08em;color:${ACCENT}}
  .project-title{font-size:13px;font-weight:700;color:#181a1d;letter-spacing:-.01em;flex:1}
  .project-period{font-size:10px;color:#9498a0;white-space:nowrap}

  .psection{margin-top:11px}
  .psection-label{font-size:9px;font-weight:700;letter-spacing:.13em;color:${ACCENT};margin-bottom:4px}
  ul{list-style:none;padding:0;margin:0}
  li{font-size:10px;color:#42454b;line-height:1.6;padding-left:11px;position:relative;text-wrap:pretty}
  li::before{content:'';position:absolute;left:0;top:8px;width:4px;height:1px;background:#9498a0}
  li + li{margin-top:2px}

  footer{margin-top:26px;display:flex;justify-content:space-between;font-size:8.5px;color:#a4a7ad;letter-spacing:.02em}
</style>
</head>
<body>

<header>
  <div>
    <h1>${esc(d.docTitle)}</h1>
    <div class="subtitle">${esc(d.subtitle)}</div>
  </div>
  <div class="meta">
    <div>${esc(d.loc)}</div>
    <div>${esc(d.email)}</div>
    <div><a href="https://${esc(d.portfolio)}">${esc(d.portfolio)}</a></div>
    <div>KakaoTalk · ${esc(d.kakao)}</div>
  </div>
</header>

<section class="summary">
  <div class="label">${esc(d.L_summary)}</div>
  <table>
    <thead>
      <tr>${d.summaryTable.headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr>
    </thead>
    <tbody>
      ${d.summaryTable.rows
        .map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`)
        .join('')}
    </tbody>
  </table>
</section>

${d.projects
  .map(
    p => `
<section class="project">
  <div class="project-head">
    <span class="project-num">${esc(p.num)}</span>
    <span class="project-title">${esc(p.title)}</span>
    <span class="project-period">${esc(p.period)}</span>
  </div>
  ${p.sections
    .map(
      s => `
  <div class="psection">
    <div class="psection-label">${esc(s.label)}</div>
    <ul>
      ${s.bullets.map(b => `<li>${esc(b)}</li>`).join('')}
    </ul>
  </div>`,
    )
    .join('')}
</section>`,
  )
  .join('')}

<footer>
  <span>${esc(d.footL)}</span>
  <span>${esc(d.footR)}</span>
</footer>

</body>
</html>`;
}

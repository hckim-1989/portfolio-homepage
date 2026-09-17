// EN 이력서 렌더러 — 표 구조 (국문 최종본과 동일 레이아웃)
// 디자인 시스템: Pretendard, ink #1a1a1a, 흰 배경, 경력기술서와 동일 캡션 라벨

const ACCENT = '#1a1a1a';

const esc = s =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export function renderResumeTableHtml(d) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Resume · ${esc(d.name)}</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css">
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{background:#fff}
  body{font-family:'Pretendard',-apple-system,BlinkMacSystemFont,sans-serif;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;color:#23262b;font-feature-settings:'tnum' 1}
  @page{size:A4;margin:0}
  .sheet{width:210mm;min-height:297mm;padding:14mm 17mm 12mm;display:flex;flex-direction:column}

  header{display:flex;justify-content:space-between;align-items:flex-end;padding-bottom:12px;border-bottom:2px solid ${ACCENT}}
  h1{font-size:26px;font-weight:700;letter-spacing:-.015em;color:#181a1d;line-height:1}
  .latin{font-size:12px;color:#9498a0;font-weight:500;letter-spacing:.01em;margin-left:10px}
  .meta{text-align:right;font-size:10px;color:#6b6f76;line-height:1.75}
  .meta a{color:${ACCENT};text-decoration:none}

  section{margin-top:15px}
  .label{font-size:9.5px;font-weight:700;letter-spacing:.15em;color:${ACCENT};margin-bottom:7px}

  .profile{font-size:10.5px;line-height:1.62;color:#42454b;text-wrap:pretty}

  /* ── 경력 섹션 헤더 (조직 / 기간 / 직함) ── */
  .org-row{display:flex;justify-content:space-between;align-items:baseline}
  .org{font-size:12px;font-weight:700;color:#181a1d}
  .period{font-size:10px;color:#9498a0;white-space:nowrap}
  .role{font-size:10.5px;color:#4c4f55;font-weight:500;margin-top:2px}

  /* ── 역량 · 프로젝트 · 성과 표 ── */
  table{width:100%;border-collapse:collapse;margin-top:8px}
  th{font-size:9px;font-weight:700;letter-spacing:.08em;color:#6b6f76;text-align:left;padding:6px 10px;border-bottom:1.5px solid ${ACCENT};background:#fafafa}
  td{font-size:10px;color:#42454b;line-height:1.5;padding:7px 10px;border-bottom:1px solid #ececef;vertical-align:top;text-wrap:pretty}
  td.comp{font-weight:600;color:#23262b;width:27%}
  td.proj{width:36%}
  td.result{width:37%}

  .grow{flex:1;min-height:0}

  .bottom{display:flex;gap:36px;padding-top:12px;border-top:1px solid #ececef}
  .bottom > div{flex:1}
  .bottom-primary{font-size:11px;font-weight:600;color:#23262b}
  .bottom-secondary{font-size:10px;color:#73767c;margin-top:2px;line-height:1.5}

  .tools-text{font-size:10px;color:#6b6f76;line-height:1.55;text-wrap:pretty}

  footer{margin-top:12px;display:flex;justify-content:flex-start;font-size:8.5px;color:#a4a7ad;letter-spacing:.02em}

  @media print{
    a{color:${ACCENT} !important;text-decoration:none}
  }
</style>
</head>
<body>
<div class="sheet">

  <header>
    <div>
      <div style="display:flex;align-items:baseline">
        <h1>${esc(d.name)}</h1>
        <span class="latin">${esc(d.latin)}</span>
      </div>
    </div>
    <div class="meta">
      <div>${esc(d.loc)}</div>
      <div>${esc(d.email)}</div>
      <div><a href="https://${esc(d.portfolio)}">${esc(d.portfolio)}</a></div>
      <div>KakaoTalk ${esc(d.kakao)}</div>
    </div>
  </header>

  <section>
    <div class="label">${esc(d.L_profile)}</div>
    <p class="profile">${esc(d.profile)}</p>
  </section>

  ${d.sections
    .map(
      s => `
  <section>
    <div class="label">${esc(s.label)}</div>
    <div class="org-row">
      <span class="org">${esc(s.org)}</span>
      <span class="period">${esc(s.period)}</span>
    </div>
    <div class="role">${esc(s.role)}</div>
    <table>
      <thead>
        <tr>${s.table.headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr>
      </thead>
      <tbody>
        ${s.table.rows
          .map(r =>
            r.items
              .map(
                (it, i) => `
        <tr>
          ${i === 0 ? `<td class="comp" rowspan="${r.items.length}">${esc(r.competency)}</td>` : ''}
          <td class="proj">${esc(it.project)}</td>
          <td class="result">${esc(it.result)}</td>
        </tr>`,
              )
              .join(''),
          )
          .join('')}
      </tbody>
    </table>
  </section>`,
    )
    .join('')}

  <div class="grow"></div>

  <div class="bottom">
    <div>
      <div class="label">${esc(d.education.label)}</div>
      <div class="bottom-primary">${esc(d.education.school)}</div>
      <div class="bottom-secondary">${esc(d.education.line)}</div>
    </div>
    <div>
      <div class="label">${esc(d.languages.label)}</div>
      <div class="bottom-primary">${esc(d.languages.value)}</div>
    </div>
  </div>

  <section>
    <div class="label">${esc(d.tools.label)}</div>
    <p class="tools-text">${esc(d.tools.value)}</p>
  </section>

  <footer>
    <span>${esc(d.footer)}</span>
  </footer>

</div>
</body>
</html>`;
}

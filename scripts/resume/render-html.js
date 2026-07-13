// HTML 렌더러 — resume-data → A4 프린트용 HTML
// Puppeteer로 로드해 PDF 저장

const ACCENT = '#1a1a1a';

const esc = s =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export function renderResumeHtml(d) {
  return `<!DOCTYPE html>
<html lang="${d === undefined ? 'en' : 'ko'}">
<head>
<meta charset="utf-8">
<title>Resume · ${esc(d.name)}</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css">
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{background:#fff}
  body{font-family:'Pretendard',-apple-system,BlinkMacSystemFont,sans-serif;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;color:#23262b;font-feature-settings:'tnum' 1}
  @page{size:A4;margin:0}
  .sheet{width:210mm;min-height:297mm;padding:16mm 17mm 14mm;display:flex;flex-direction:column}
  header{display:flex;justify-content:space-between;align-items:flex-end;padding-bottom:14px;border-bottom:2px solid ${ACCENT}}
  h1{font-size:26px;font-weight:700;letter-spacing:-.015em;color:#181a1d;line-height:1}
  .latin{font-size:12px;color:#9498a0;font-weight:500;letter-spacing:.01em;margin-left:10px}
  .role{font-size:12px;color:#181a1d;font-weight:600;margin-top:7px;letter-spacing:.01em}
  .meta{text-align:right;font-size:10px;color:#6b6f76;line-height:1.75}
  .meta a{color:${ACCENT};text-decoration:none}

  section{margin-top:16px}
  .label{font-size:9.5px;font-weight:700;letter-spacing:.15em;color:${ACCENT};margin-bottom:7px}

  .profile{font-size:10.5px;line-height:1.65;color:#42454b;text-wrap:pretty}
  .employer{font-size:10.5px;color:#4c4f55;margin-bottom:2px}

  .pillar{margin-top:11px}
  .pillar-head{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}
  .dot{width:5px;height:5px;background:${ACCENT};border-radius:50%;flex:none;transform:translateY(-2px);display:inline-block}
  .pillar-title{font-size:11.5px;font-weight:700;color:#181a1d;white-space:nowrap}
  .pillar-tag{font-size:10px;color:#86898f;white-space:nowrap}

  .item{display:flex;gap:12px;margin-top:5px;padding-left:13px}
  .period{width:80px;flex:none;font-size:9.5px;color:#9498a0;padding-top:1px;letter-spacing:.01em}
  .item-body{flex:1}
  .item-title-row{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
  .item-title{font-size:10.5px;font-weight:600;color:#2b2e34}
  .badge{font-size:7.5px;font-weight:700;color:${ACCENT};background:#f1f1f2;padding:2px 6px;border-radius:3px;letter-spacing:.04em;white-space:nowrap}
  .item-text{font-size:10px;color:#6b6f76;line-height:1.55;margin-top:2px;text-wrap:pretty}

  .consulting-row{display:flex;justify-content:space-between;align-items:baseline;gap:12px}
  .consulting-name{font-size:12px;font-weight:700;color:#181a1d}
  .consulting-period{font-size:10px;color:#9498a0;white-space:nowrap}
  .consulting-meta{font-size:10px;color:#7d8086;margin-top:2px}
  .consulting-summary{font-size:10px;color:#6b6f76;line-height:1.55;margin-top:4px;text-wrap:pretty}
  .services{display:flex;flex-wrap:wrap;gap:5px;margin-top:6px}
  .service{font-size:9px;color:#6b6f76;border:1px solid #e3e5e9;border-radius:999px;padding:2px 9px;letter-spacing:.01em}

  .skill{display:flex;gap:12px;margin-top:5px}
  .skill-label{width:120px;flex:none;font-size:10.5px;font-weight:600;color:#2b2e34}
  .skill-text{flex:1;font-size:10px;color:#6b6f76;line-height:1.5;text-wrap:pretty}

  .grow{flex:1;min-height:12px}

  .bottom{display:flex;gap:40px;padding-top:14px;border-top:1px solid #ececef}
  .bottom > div{flex:1}
  .bottom-primary{font-size:11px;font-weight:600;color:#23262b}
  .bottom-secondary{font-size:10px;color:#73767c;margin-top:2px}

  footer{margin-top:16px;display:flex;justify-content:space-between;font-size:8.5px;color:#a4a7ad;letter-spacing:.02em}

  /* 프린트 시 URL 색상 유지 */
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
      <div class="role">${esc(d.role)}</div>
    </div>
    <div class="meta">
      <div>${esc(d.loc)}</div>
      <div>${esc(d.email)}</div>
      <div><a href="https://${esc(d.portfolio)}">${esc(d.portfolio)}</a></div>
      <div>KakaoTalk · ${esc(d.kakao)}</div>
    </div>
  </header>

  <section>
    <div class="label">${esc(d.L_profile)}</div>
    <p class="profile">${esc(d.profile)}</p>
  </section>

  <section>
    <div class="label">${esc(d.L_expertise)}</div>
    <div class="employer">${esc(d.employer)}</div>

    ${d.pillars
      .map(
        p => `
      <div class="pillar">
        <div class="pillar-head">
          <span class="dot"></span>
          <span class="pillar-title">${esc(p.title)}</span>
          <span class="pillar-tag">${esc(p.tagline)}</span>
        </div>
        ${p.items
          .map(
            it => `
          <div class="item">
            <div class="period">${esc(it.period)}</div>
            <div class="item-body">
              <div class="item-title-row">
                <span class="item-title">${esc(it.title)}</span>
                ${it.badge ? `<span class="badge">${esc(it.badge)}</span>` : ''}
              </div>
              <div class="item-text">${esc(it.text)}</div>
            </div>
          </div>
        `,
          )
          .join('')}
      </div>
    `,
      )
      .join('')}
  </section>

  <section>
    <div class="label">${esc(d.L_consulting)}</div>
    <div class="consulting-row">
      <span class="consulting-name">${esc(d.consulting.name)}</span>
      <span class="consulting-period">${esc(d.consulting.period)}</span>
    </div>
    <div class="consulting-meta">${esc(d.consulting.meta)}</div>
    <div class="consulting-summary">${esc(d.consulting.summary)}</div>
    <div class="services">
      ${d.consulting.services.map(sv => `<span class="service">${esc(sv)}</span>`).join('')}
    </div>
  </section>

  <section>
    <div class="label">${esc(d.L_skills)}</div>
    ${d.skills
      .map(
        sk => `
      <div class="skill">
        <div class="skill-label">${esc(sk.label)}</div>
        <div class="skill-text">${esc(sk.text)}</div>
      </div>
    `,
      )
      .join('')}
  </section>

  <div class="grow"></div>

  <div class="bottom">
    <div>
      <div class="label">${esc(d.L_education)}</div>
      <div class="bottom-primary">${esc(d.education.school)}</div>
      <div class="bottom-secondary">${esc(d.education.line)}</div>
    </div>
    <div>
      <div class="label">${esc(d.L_languages)}</div>
      <div class="bottom-primary">${esc(d.languages)}</div>
    </div>
  </div>

  <footer>
    <span>${esc(d.footL)}</span>
    <span>${esc(d.footR)}</span>
  </footer>

</div>
</body>
</html>`;
}

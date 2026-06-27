import { projects } from '../../data/portfolioData';
import './CaseStudies.css';

const PILLAR_LABEL = {
  crm: 'CRM & Loyalty Program',
  engagement: 'Customer Engagement',
  dx: 'DX',
  brand: 'Brand Strategy',
  consulting: 'Brand Consulting',
};

// Placeholder 패턴 — 화면에 노출하지 않을 값들
const PLACEHOLDER_RE = /^\s*(\[)?\s*(TBD|확인\s*필요|확인\s*후\s*입력|비공개|예정)/i;
const isPlaceholder = (val) => {
  if (!val) return true;
  if (typeof val !== 'string') return false;
  return PLACEHOLDER_RE.test(val.trim()) || val.includes('[TBD]') || val.includes('[확인');
};

/**
 * CaseStudies — Project Details
 *
 * 각 카드는 article 형식:
 *   메타 → 제목 → 임팩트 → 요약
 *   → Challenge / Approach / Outcome (모두 bullets)
 *   → Assets footer
 */
export default function CaseStudies() {
  const renderBullets = (items) => {
    if (!items) return null;
    const arr = Array.isArray(items) ? items : [items];
    return (
      <ul className="case-bullets">
        {arr.map((b, i) => (
          <li key={i} className="case-bullet">{b}</li>
        ))}
      </ul>
    );
  };

  return (
    <section id="case-studies" className="cases">
      <div className="cases-inner">
        <header className="cases-header">
          <h2 className="cases-title">PROJECT DETAILS</h2>
        </header>

        <div className="cases-list">
          {projects.map((p, idx) => (
            <article
              key={p.slug}
              id={`work-${p.slug}`}
              className={`case ${p.isOngoing ? 'case--ongoing' : ''} ${p.isPersonal ? 'case--personal' : ''}`}
            >
              <header className="case-head">
                <div className="case-meta">
                  <span className="case-num">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="case-meta-sep">·</span>
                  <span className="case-pillar">{PILLAR_LABEL[p.pillar]}</span>
                  <span className="case-meta-sep">·</span>
                  <span className="case-year">{p.year}</span>
                  <span className="case-meta-sep">·</span>
                  <span className="case-role">{p.role}</span>
                  {p.isPersonal && (
                    <span className="case-personal-badge">개인 프로젝트</span>
                  )}
                  {p.isOngoing && !p.isPersonal && (
                    <span className="case-ongoing-badge">진행 중</span>
                  )}
                </div>
                {p.client && (
                  <p className="case-client">{p.client}</p>
                )}
                <h3 className="case-title">{p.title}</h3>
                <p className="case-impact">{p.impact}</p>
                <p className="case-summary">{p.summary}</p>
              </header>

              <div className="case-body">
                <div className="case-block">
                  <h4 className="case-block-label">Challenge</h4>
                  {renderBullets(p.challenge)}
                </div>

                <div className="case-block">
                  <h4 className="case-block-label">Approach</h4>
                  {renderBullets(p.approach)}
                </div>

                <div className="case-block">
                  <h4 className="case-block-label">Outcome</h4>
                  {renderBullets(p.outcomeQualitative)}
                  {(() => {
                    const visibleMetrics = (p.outcomeMetrics || []).filter(
                      m => !isPlaceholder(m.value)
                    );
                    if (visibleMetrics.length === 0) return null;
                    return (
                      <dl className="case-metrics">
                        {visibleMetrics.map(m => (
                          <div key={m.label} className="case-metric">
                            <dt className="case-metric-label">{m.label}</dt>
                            <dd className="case-metric-value">{m.value}</dd>
                          </div>
                        ))}
                      </dl>
                    );
                  })()}
                </div>
              </div>

              {p.assets && !isPlaceholder(p.assets) && (
                <footer className="case-foot">
                  <span className="case-foot-label">Assets</span>
                  <span className="case-foot-value">{p.assets}</span>
                </footer>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { projects } from '../../data/portfolioData';
import './CaseStudies.css';

const PILLAR_LABEL = {
  crm: 'CRM & Loyalty',
  engagement: 'Customer Engagement',
  dx: 'DX',
  brand: 'Brand Strategy',
};

/**
 * CaseStudies — 5개 프로젝트의 풀 콘텐츠
 *
 * 각 카드는 article 형식:
 *   메타 (NUM · PILLAR · YEAR · ROLE) → 제목 → 한 줄 임팩트 → 요약
 *   → Challenge → Approach → Outcome (정성 + 정량 metrics)
 *   → 가능 자료
 *
 * SelectedWork(인덱스)에서 클릭 시 앵커로 점프 (`#work-{slug}`)
 */
export default function CaseStudies() {
  return (
    <section id="case-studies" className="cases">
      <div className="cases-inner">
        <header className="cases-header">
          <p className="cases-eyebrow">Case Studies</p>
          <h2 className="cases-title">
            다섯 개의 기록,
            <br />
            <span className="cases-title-accent">하나씩 펼쳐서.</span>
          </h2>
          <p className="cases-lead">
            각 프로젝트의 배경·접근·성과를 한 자리에 정리했습니다. 정량 수치 [TBD] 표시는 확인 후 업데이트 예정.
          </p>
        </header>

        <div className="cases-list">
          {projects.map((p, idx) => (
            <article
              key={p.slug}
              id={`work-${p.slug}`}
              className={`case ${p.isOngoing ? 'case--ongoing' : ''}`}
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
                  {p.isOngoing && (
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
                  <p className="case-block-text">{p.challenge}</p>
                </div>

                <div className="case-block">
                  <h4 className="case-block-label">Approach</h4>
                  <p className="case-block-text">{p.approach}</p>
                </div>

                <div className="case-block">
                  <h4 className="case-block-label">Outcome</h4>
                  <p className="case-block-text case-block-text--qualitative">
                    {p.outcomeQualitative}
                  </p>
                  {p.outcomeMetrics && p.outcomeMetrics.length > 0 && (
                    <dl className="case-metrics">
                      {p.outcomeMetrics.map(m => (
                        <div key={m.label} className="case-metric">
                          <dt className="case-metric-label">{m.label}</dt>
                          <dd className="case-metric-value">{m.value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </div>

              {p.assets && (
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

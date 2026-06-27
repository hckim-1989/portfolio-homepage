import { projects } from '../../data/portfolioData';
import './SelectedWork.css';

const PILLAR_LABEL = {
  crm: 'CRM & Loyalty',
  engagement: 'Customer Engagement',
  dx: 'DX',
  brand: 'Brand Strategy',
  consulting: 'Brand Consulting',
};

/**
 * SelectedWork — KEY PROJECT 리스트
 * 6개 프로젝트 전체 노출 (01~06).
 * 01번은 Hero 우측 Snapshot에서 한 번 더 강조됨 (중복은 의도된 강조).
 */
export default function SelectedWork() {
  return (
    <section id="work" className="section-work">
      <div className="work-inner">
        <header className="work-meta">
          <span className="work-meta-label">KEY PROJECT</span>
        </header>

        <ul className="work-index">
          {projects.map((p, idx) => (
            <li key={p.slug} className="work-index-item">
              <a href={`#work-${p.slug}`} className="work-index-link">
                <span className="work-index-num">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="work-index-title">{p.title}</span>
                <span className="work-index-pillar">{PILLAR_LABEL[p.pillar]}</span>
                <span className="work-index-year">{p.year}</span>
                <span className="work-index-cta">프로젝트 디테일 →</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

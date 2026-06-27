import { projects } from '../../data/portfolioData';
import './SelectedWork.css';

const PILLAR_LABEL = {
  crm: 'CRM & Loyalty',
  engagement: 'Customer Engagement',
  dx: 'DX',
  brand: 'Brand Strategy',
};

/**
 * SelectedWork — C2 "More Work" 인덱스
 * Hero에 이미 Featured 01이 있으므로 여기는 02부터 인덱스 리스트만.
 */
export default function SelectedWork() {
  const [, ...rest] = projects; // 첫 번째는 Hero에 노출되므로 제외

  return (
    <section id="work" className="section-work">
      <div className="work-inner">
        <header className="work-meta">
          <span className="work-meta-label">More Work</span>
          <span className="work-meta-count">{rest.length} projects</span>
        </header>

        <ul className="work-index">
          {rest.map((p, idx) => (
            <li key={p.slug} className="work-index-item">
              <a href={`#work-${p.slug}`} className="work-index-link">
                <span className="work-index-num">
                  {String(idx + 2).padStart(2, '0')}
                </span>
                <span className="work-index-title">{p.title}</span>
                <span className="work-index-pillar">{PILLAR_LABEL[p.pillar]}</span>
                <span className="work-index-year">{p.year}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

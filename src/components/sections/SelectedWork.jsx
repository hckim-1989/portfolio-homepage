import { projects } from '../../data/portfolioData';
import ProjectThumb from './ProjectThumb';
import './SelectedWork.css';

const PILLAR_LABEL = {
  brand: 'Brand Strategy',
  crm: 'CRM & Loyalty',
  engagement: 'Customer Engagement',
};

/**
 * SelectedWork — C1 Featured Strip
 * 첫 번째 프로젝트는 큰 featured (16:7 이미지 + gradient + pill CTA)
 * 나머지는 컴팩트 인덱스 리스트 (번호 시에나 + 제목 + 카테고리 + 연도)
 */
export default function SelectedWork() {
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="section-work">
      <div className="work-inner">
        <header className="work-meta">
          <span className="work-meta-label">Selected Work / 01</span>
          <a href="#work-all" className="work-meta-link">View all →</a>
        </header>

        {/* Featured — 큰 카드 */}
        <a href={`#work-${featured.slug}`} className="work-featured" aria-label={featured.title}>
          <div className="work-featured-image">
            {featured.heroImage ? (
              <img src={featured.heroImage} alt={featured.title} loading="lazy" />
            ) : (
              <>
                <ProjectThumb project={featured} />
                <span className="work-featured-image-tag">FEATURED · 16:7</span>
              </>
            )}
            <div className="work-featured-overlay">
              <div className="work-featured-meta">
                <h3 className="work-featured-title">{featured.title}</h3>
                <p className="work-featured-sub">
                  {PILLAR_LABEL[featured.pillar]} — {featured.year}
                </p>
              </div>
              <span className="work-featured-cta">케이스 읽기 →</span>
            </div>
          </div>
        </a>

        {/* Index list */}
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

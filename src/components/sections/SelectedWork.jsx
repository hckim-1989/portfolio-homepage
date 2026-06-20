import {
  getFeaturedProjects,
  getArchiveProjects,
} from '../../data/portfolioData';
import ProjectThumb from './ProjectThumb';
import './SelectedWork.css';

const PILLAR_LABEL = {
  brand: 'Brand',
  crm: 'CRM',
  engagement: 'Engagement',
};

export default function SelectedWork() {
  const featured = getFeaturedProjects();
  const archive = getArchiveProjects();

  return (
    <section id="work" className="section section--surface selected-work">
      <div className="section-inner">
        <header className="work-header">
          <p className="section-eyebrow">Selected Work</p>
          <h2 className="section-title">
            <span className="section-title-line">마케팅 PM으로 책임진</span>
            <span className="section-title-line section-title-line--italic">다섯 개의 기록.</span>
          </h2>
        </header>

        {/* Featured 3 — 큰 카드 */}
        <ul className="work-featured">
          {featured.map(p => (
            <li key={p.slug} className="work-card">
              <a href={`#work-${p.slug}`} className="work-card-link" aria-label={p.title}>
                <div className={`work-card-thumb work-card-thumb--${p.pillar}`}>
                  {p.heroImage ? (
                    <img src={p.heroImage} alt={p.title} loading="lazy" />
                  ) : (
                    <ProjectThumb project={p} />
                  )}
                </div>
                <div className="work-card-body">
                  <div className="work-card-meta">
                    <span className="work-card-year">{p.year}</span>
                    <span className="work-card-sep">·</span>
                    <span className="work-card-pillar">{PILLAR_LABEL[p.pillar]}</span>
                    <span className="work-card-sep">·</span>
                    <span className="work-card-role">{p.role}</span>
                  </div>
                  <h3 className="work-card-title">{p.title}</h3>
                  <p className="work-card-impact">{p.impact}</p>
                  <p className="work-card-summary">{p.summary}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {/* Archive — 컴팩트 리스트 */}
        {archive.length > 0 && (
          <div className="work-archive">
            <h3 className="work-archive-heading">Archive</h3>
            <ul className="work-archive-list">
              {archive.map(p => (
                <li key={p.slug} className="work-archive-item">
                  <a href={`#work-${p.slug}`} className="work-archive-link">
                    <span className="work-archive-year">{p.year}</span>
                    <span className="work-archive-title">{p.title}</span>
                    <span className="work-archive-pillar">{PILLAR_LABEL[p.pillar]}</span>
                    <span className="work-archive-arrow" aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

import { hero, projects } from '../../data/portfolioData';
import ProjectThumb from './ProjectThumb';
import './Hero.css';

const PILLAR_LABEL = {
  crm: 'CRM & Loyalty',
  engagement: 'Customer Engagement',
  dx: 'DX',
  brand: 'Brand Strategy',
  consulting: 'Brand Consulting',
};

/**
 * Hero — C2 Split layout
 * 좌: eyebrow + 3줄 영문 헤드라인 + 한글 서브 + 버튼 2개
 * 우: Featured 01 — 첫 번째 프로젝트 카드 (이미지 + 메타 + 케이스 읽기)
 */
export default function Hero() {
  const featured = projects[0];

  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        {/* 좌측 메시지 */}
        <div className="hero-main">
          <div className="hero-main-top">
            <p className="hero-eyebrow">{hero.eyebrow}</p>
            <h1 className="hero-title">
              {hero.titleLines.map((line, i) => (
                <span
                  key={i}
                  className={
                    line.accent
                      ? 'hero-title-line hero-title-line--accent'
                      : 'hero-title-line'
                  }
                >
                  {line.text}
                </span>
              ))}
            </h1>
          </div>

          <div className="hero-actions">
            {hero.buttons.map(btn => (
              <a
                key={btn.label}
                href={btn.href}
                className={`hero-btn ${btn.primary ? 'hero-btn--primary' : 'hero-btn--ghost'}`}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>

        {/* 우측 Featured */}
        <a href={`#work-${featured.slug}`} className="hero-featured" aria-label={featured.title}>
          <div className="hero-featured-tag">Featured / 01</div>

          <div className="hero-featured-image">
            {featured.heroImage ? (
              <img src={featured.heroImage} alt={featured.title} loading="lazy" />
            ) : (
              <ProjectThumb project={featured} />
            )}
          </div>

          <div className="hero-featured-meta">
            <h3 className="hero-featured-title">{featured.title}</h3>
            <div className="hero-featured-foot">
              <span className="hero-featured-sub">
                {PILLAR_LABEL[featured.pillar]} — {featured.year}
              </span>
              <span className="hero-featured-cta">케이스 읽기 →</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

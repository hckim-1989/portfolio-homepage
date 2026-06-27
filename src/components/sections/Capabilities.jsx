import { capabilities, getProjectBySlug } from '../../data/portfolioData';
import CapabilityIcon from './CapabilityIcon';
import './Capabilities.css';

/**
 * Capabilities — 4축 매트릭스
 * 각 pillar: 아이콘 + 라벨 + tagline + bullet + 대표 프로젝트 링크
 */
export default function Capabilities() {
  const lines = [
    { key: 1, text: capabilities.title.line1 },
    { key: 2, text: capabilities.title.line2 },
  ];

  return (
    <section id="capabilities" className="section capabilities">
      <div className="section-inner">
        <header className="capabilities-header">
          <p className="section-eyebrow">{capabilities.eyebrow}</p>
          <h2 className="section-title">
            {lines.map(line => (
              <span
                key={line.key}
                className={
                  line.key === capabilities.title.italicLine
                    ? 'section-title-line section-title-line--italic'
                    : 'section-title-line'
                }
              >
                {line.text}
              </span>
            ))}
          </h2>
        </header>

        <ul className="capabilities-grid">
          {capabilities.pillars.map(p => {
            const featured = getProjectBySlug(p.featuredProjectSlug);
            return (
              <li key={p.id} className={`capability capability--${p.id}`}>
                <CapabilityIcon pillarId={p.id} className="capability-icon" />
                <h3 className="capability-label">{p.label}</h3>
                <p className="capability-tagline">{p.tagline}</p>
                <ul className="capability-bullets">
                  {p.bullets.map(b => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {featured && (
                  <a
                    href={`#work-${featured.slug}`}
                    className="capability-featured"
                    title={`대표 프로젝트: ${featured.title}`}
                  >
                    <span className="capability-featured-label">대표 프로젝트</span>
                    <span className="capability-featured-title">{featured.title} →</span>
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

import { hero } from '../../data/portfolioData';
import './Hero.css';

/**
 * Hero — 첫 화면. 비대칭 grid 레이아웃.
 * 좌: 타이틀 + 서브 / 우: 메타 + 통계
 */
export default function Hero() {
  const lines = [
    { key: 1, text: hero.title.line1 },
    { key: 2, text: hero.title.line2 },
    { key: 3, text: hero.title.line3 },
  ];

  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <div className="hero-main">
          <p className="hero-eyebrow">{hero.eyebrow}</p>
          <h1 className="hero-title">
            {lines.map(line => (
              <span
                key={line.key}
                className={
                  line.key === hero.title.italicLine
                    ? 'hero-title-line hero-title-line--italic'
                    : 'hero-title-line'
                }
              >
                {line.text}
              </span>
            ))}
          </h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
        </div>

        <aside className="hero-side">
          <ul className="hero-stats">
            {hero.stats.map(s => (
              <li key={s.label} className="hero-stat">
                <span className="hero-stat-value">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

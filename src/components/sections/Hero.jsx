import { hero, profile } from '../../data/portfolioData';
import './Hero.css';

/**
 * Hero — C1 Featured Strip 형식
 * 좌: eyebrow(mono, sienna) + 영문 메인 헤드라인(accent 단어) + 한글 서브
 * 우: FOCUS 리스트 + Available 인디케이터
 */
export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <div className="hero-main">
          <p className="hero-eyebrow">{hero.eyebrow}</p>
          <h1 className="hero-title">
            {hero.titleEn.parts.map((p, i) => (
              <span
                key={i}
                className={p.accent ? 'hero-title-accent' : ''}
              >
                {p.text}
              </span>
            ))}
          </h1>
          <p className="hero-subtitle">{hero.subtitleKo}</p>
        </div>

        <aside className="hero-side">
          <div className="hero-focus-label">{hero.focus.label}</div>
          <ul className="hero-focus-list">
            {hero.focus.items.map(item => (
              <li key={item} className="hero-focus-item">{item}</li>
            ))}
          </ul>
          <div className="hero-available">
            <span className="hero-available-dot" aria-hidden="true">●</span>
            {hero.focus.available}
          </div>
        </aside>
      </div>
    </section>
  );
}

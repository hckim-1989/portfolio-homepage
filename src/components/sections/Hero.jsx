import { hero } from '../../data/portfolioData';
import './Hero.css';

/**
 * Hero — C2 Split layout
 * 좌: eyebrow + 3줄 영문 헤드라인 + 버튼 2개
 * 우: Snapshot Profile (PROFILE/Available, Experience 2-track,
 *     보조 지표, Focus 4행, Sector, Featured Case 하단)
 */
export default function Hero() {
  const snap = hero.snapshot;

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

        {/* 우측 Snapshot Profile */}
        <aside className="hero-snap">
          <div className="hero-snap-top">
            {/* 1. 라벨 행 */}
            <div className="hero-snap-label-row">
              <span className="hero-snap-label">PROFILE</span>
              {snap.status.available && (
                <span className="hero-snap-available">
                  <span className="hero-snap-available-dot" aria-hidden="true" />
                  {snap.status.label}
                </span>
              )}
            </div>

            {/* 2. Experience — 두 트랙 */}
            <div className="hero-snap-exp-header">
              <span className="hero-snap-mono-label">EXPERIENCE</span>
              <span className="hero-snap-mono-mute">{snap.experience.total}</span>
            </div>
            <div className="hero-snap-exp-grid">
              {snap.experience.tracks.map(t => (
                <div key={t.label} className="hero-snap-track">
                  <div className="hero-snap-track-value">
                    {t.value}
                    <span className={t.unitAccent ? 'hero-snap-track-unit hero-snap-track-unit--accent' : 'hero-snap-track-unit'}>
                      {t.unit}
                    </span>
                  </div>
                  <div className="hero-snap-track-label">{t.label}</div>
                </div>
              ))}
            </div>

            {/* 3. 보조 지표 */}
            <div className="hero-snap-metric-grid">
              {snap.metrics.map(m => (
                <div key={m.label} className="hero-snap-metric">
                  <span className="hero-snap-metric-value">
                    {m.value}
                    {m.unit && (
                      <span className="hero-snap-metric-unit">{m.unit}</span>
                    )}
                  </span>
                  <span className="hero-snap-mono-mute">{m.label}</span>
                </div>
              ))}
            </div>

            {/* 4. Focus — 역량 4행 */}
            <div className="hero-snap-focus">
              <div className="hero-snap-mono-label hero-snap-focus-header">FOCUS</div>
              {snap.focus.map((f, idx) => (
                <div
                  key={f.en}
                  className={`hero-snap-focus-row ${idx === snap.focus.length - 1 ? 'hero-snap-focus-row--last' : ''}`}
                >
                  <span className="hero-snap-focus-bullet" aria-hidden="true" />
                  <span className="hero-snap-focus-en">{f.en}</span>
                  <span className="hero-snap-mono-mute">{f.ko}</span>
                </div>
              ))}
            </div>

            {/* 5. Sector */}
            <div className="hero-snap-sector">
              <span className="hero-snap-mono-label">SECTOR</span>
              <span className="hero-snap-sector-value">{snap.sector}</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

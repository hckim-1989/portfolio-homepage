import { profile, pillars, secondaryNav } from '../data/portfolioData';
import './Masthead.css';

/**
 * Masthead — 단일 행 마스트헤드
 *
 * Props:
 *  - activePillar: 현재 선택된 pillar id (null이면 전체 표시)
 *  - onPillarClick: pillar 클릭 핸들러
 *
 * Active state 시그니처:
 *  - 클릭된 필터는 italic + letter-spacing 0.1em
 *  - 다시 클릭하면 해제 (전체로 복귀)
 */
export default function Masthead({ activePillar, onPillarClick }) {
  return (
    <header className="masthead">
      {/* 좌측 — 로고 (홈 링크) */}
      <a href="/" className="masthead-logo" aria-label="Home">
        {profile.initials}
      </a>

      {/* 중앙-좌 — pillar 필터 nav */}
      <nav className="masthead-filter-nav" aria-label="Project filter">
        {pillars.map(p => (
          <button
            key={p.id}
            className={`nav-btn ${activePillar === p.id ? 'active' : ''}`}
            onClick={() => onPillarClick(p.id)}
            aria-pressed={activePillar === p.id}
          >
            {p.label}
          </button>
        ))}
      </nav>

      {/* 중앙-우 — 이메일 (메타 정보) */}
      <a className="masthead-meta" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>

      {/* 우측 — secondary nav (About, LinkedIn) */}
      <nav className="masthead-secondary-nav" aria-label="Site navigation">
        {secondaryNav.map(item => (
          <a
            key={item.label}
            href={item.href}
            className="nav-btn"
            {...(item.external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {}
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

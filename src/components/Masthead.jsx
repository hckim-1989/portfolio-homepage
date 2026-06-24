import { profile, nav } from '../data/portfolioData';
import './Masthead.css';

/**
 * Masthead — Refined 형식 (Portfolio Home v5)
 *
 * 좌: 한글이름 / 영문이름 (슬래시는 시에나 액센트)
 * 우: nav 5개 (마지막 Contact는 muted)
 */
export default function Masthead() {
  return (
    <header className="masthead">
      <a href="#top" className="masthead-brand" aria-label={profile.nameEn}>
        <span className="masthead-brand-ko">{profile.nameKo}</span>
        <span className="masthead-brand-slash"> / </span>
        <span className="masthead-brand-en">{profile.nameEn}</span>
      </a>

      <nav className="masthead-nav" aria-label="Section navigation">
        {nav.map(item => (
          <a
            key={item.id}
            href={item.href}
            className={`nav-btn ${item.muted ? 'nav-btn--muted' : ''}`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

import { profile, nav } from '../data/portfolioData';
import './Masthead.css';

/**
 * Masthead — 앵커 nav 마스트헤드
 *
 * Sticky 상단 바. 단일 페이지 스크롤 IA에 맞춰 nav를 앵커 링크로 운영.
 * 기존 pillar 필터 → 섹션 앵커 nav로 변경.
 */
export default function Masthead() {
  return (
    <header className="masthead">
      <a href="#top" className="masthead-logo" aria-label="Top">
        {profile.initials}
      </a>

      <nav className="masthead-nav" aria-label="Section navigation">
        {nav.map(item => (
          <a key={item.id} href={item.href} className="nav-btn">
            {item.label}
          </a>
        ))}
      </nav>

      <a className="masthead-meta" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
    </header>
  );
}

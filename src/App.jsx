import Masthead from './components/Masthead';
import Hero from './components/sections/Hero';
import BrandConsulting from './components/sections/BrandConsulting';
import Capabilities from './components/sections/Capabilities';
import SelectedWork from './components/sections/SelectedWork';
import Timeline from './components/sections/Timeline';
import Notes from './components/sections/Notes';
import Contact from './components/sections/Contact';
import { profile } from './data/portfolioData';
import './styles/design-tokens.css';
import './styles/sections.css';

/**
 * App — 단일 페이지 스크롤 구조 (Phase 1)
 *
 * IA:
 *   Hero → Brand Consulting → Capabilities → Selected Work
 *        → Timeline (About 통합) → Notes (placeholder)
 *        → Contact → Footer
 *
 * 라우터 미도입. 모든 nav는 앵커 링크.
 * Phase 2에서 react-router-dom 도입 시 /work/[slug], /notes 등으로 분리 예정.
 */
export default function App() {
  return (
    <>
      <Masthead />
      <main>
        <Hero />
        <BrandConsulting />
        <Capabilities />
        <SelectedWork />
        <Timeline />
        <Notes />
        <Contact />
      </main>
      <footer className="site-footer">
        © {new Date().getFullYear()} {profile.nameEn} · {profile.role}
      </footer>
    </>
  );
}

import Masthead from './components/Masthead';
import Hero from './components/sections/Hero';
import SelectedWork from './components/sections/SelectedWork';
import BrandConsulting from './components/sections/BrandConsulting';
import Capabilities from './components/sections/Capabilities';
import Timeline from './components/sections/Timeline';
import Notes from './components/sections/Notes';
import Contact from './components/sections/Contact';
import { profile } from './data/portfolioData';
import './styles/design-tokens.css';
import './styles/sections.css';

/**
 * App — Refined IA (Hero → Work 즉시 노출)
 *
 *  Hero → Selected Work (Featured Strip)
 *       → Brand Consulting → Capabilities
 *       → Timeline (About 통합) → Notes (placeholder)
 *       → Contact → Footer
 *
 * Hero와 SelectedWork는 같은 surface bg로 묶여 "한 카드처럼" 보임.
 */
export default function App() {
  return (
    <>
      <Masthead />
      <main>
        <Hero />
        <SelectedWork />
        <BrandConsulting />
        <Capabilities />
        <Timeline />
        <Notes />
        <Contact />
      </main>
      <footer className="site-footer">
        © {new Date().getFullYear()} {profile.nameKo} / {profile.nameEn} · {profile.role}
      </footer>
    </>
  );
}

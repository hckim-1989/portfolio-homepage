import { useState } from 'react';
import Masthead from './components/Masthead';
import ProjectGrid from './components/ProjectGrid';
import './styles/design-tokens.css';

/**
 * App — 메인 앱 컴포넌트 (Phase 1: 홈페이지만)
 *
 * 라우팅 없이 단일 페이지로 시작.
 * About / Contact / Project Detail 페이지는 후속 단계에서 react-router-dom 추가.
 */
export default function App() {
  // 필터 상태 (null = 전체 표시, 'brand'/'crm'/'engagement' = 해당 pillar만)
  const [activePillar, setActivePillar] = useState(null);

  // 같은 pillar를 다시 클릭하면 해제 (전체로 복귀)
  const handlePillarClick = (pillarId) => {
    setActivePillar(prev => prev === pillarId ? null : pillarId);
  };

  return (
    <>
      <Masthead
        activePillar={activePillar}
        onPillarClick={handlePillarClick}
      />
      <ProjectGrid activePillar={activePillar} />
      <footer className="site-footer">
        © 2025 Heungchul Kim
      </footer>
    </>
  );
}

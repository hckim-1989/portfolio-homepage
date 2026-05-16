import { filterProjectsByPillar } from '../data/portfolioData';
import './ProjectGrid.css';

/**
 * ProjectGrid — 균등 3-column 프로젝트 그리드
 *
 * Props:
 *  - activePillar: 필터링할 pillar id (null이면 전체 표시)
 *
 * 동작:
 *  - 활성 pillar에 따라 자동 필터링
 *  - 각 타일은 hover 시 caption이 italic + letter-spacing 효과
 */
export default function ProjectGrid({ activePillar }) {
  const visibleProjects = filterProjectsByPillar(activePillar);

  return (
    <main className="project-grid" aria-label="Project archive">
      {visibleProjects.map(project => (
        <ProjectTile key={project.slug} project={project} />
      ))}
    </main>
  );
}

/**
 * ProjectTile — 단일 프로젝트 타일
 *
 * heroImage가 있으면 <img>로 표시,
 * 없으면 빈 회색 placeholder만 보여줌.
 * (나중에 portfolioData.js의 heroImage 경로만 채우면 자동 적용)
 */
function ProjectTile({ project }) {
  return (
    <a href={`/work/${project.slug}`} className="project-tile">
      <div className="project-image">
        {project.heroImage ? (
          <img
            src={project.heroImage}
            alt={project.title}
            loading="lazy"
          />
        ) : (
          <div className="project-image-placeholder" aria-hidden="true" />
        )}
      </div>
      <div className="project-caption">{project.title}</div>
    </a>
  );
}

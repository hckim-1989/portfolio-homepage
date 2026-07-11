/**
 * ProjectThumb — Refined 톤 (warm beige + sienna)
 * 모든 프로젝트 동일한 베이스 컬러, pillar별로는 패턴만 차별화
 */
const C = {
  bg: '#e7e3da',
  fg: '#b4532a',      // sienna
  ink: '#1a1814',
  inkSoft: '#56544e',
};

export default function ProjectThumb({ project }) {
  return (
    <svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className="project-thumb-svg"
      aria-hidden="true"
    >
      <rect width="800" height="600" fill={C.bg} />

      {project.pillar === 'brand' && (
        <>
          <circle cx="640" cy="120" r="220" fill={C.fg} opacity="0.14"/>
          <circle cx="640" cy="120" r="140" fill={C.fg} opacity="0.22"/>
          <circle cx="640" cy="120" r="70"  fill={C.fg} opacity="0.38"/>
        </>
      )}
      {project.pillar === 'crm' && (
        <>
          <circle cx="400" cy="300" r="240" fill="none" stroke={C.fg} strokeWidth="1.2" opacity="0.4"/>
          <circle cx="400" cy="300" r="170" fill="none" stroke={C.fg} strokeWidth="1.2" opacity="0.55"/>
          <circle cx="400" cy="300" r="100" fill="none" stroke={C.fg} strokeWidth="1.2" opacity="0.7"/>
          <circle cx="400" cy="300" r="40"  fill={C.fg} opacity="0.75"/>
        </>
      )}
      {project.pillar === 'engagement' && (
        <>
          <line x1="120" y1="120" x2="680" y2="480" stroke={C.fg} strokeWidth="1.2" opacity="0.4"/>
          <line x1="680" y1="120" x2="120" y2="480" stroke={C.fg} strokeWidth="1.2" opacity="0.4"/>
          <line x1="120" y1="300" x2="680" y2="300" stroke={C.fg} strokeWidth="1.2" opacity="0.4"/>
          <circle cx="120" cy="120" r="14" fill={C.fg}/>
          <circle cx="680" cy="120" r="14" fill={C.fg}/>
          <circle cx="120" cy="480" r="14" fill={C.fg}/>
          <circle cx="680" cy="480" r="14" fill={C.fg}/>
          <circle cx="400" cy="300" r="20" fill={C.bg} stroke={C.fg} strokeWidth="2"/>
        </>
      )}
      {project.pillar === 'dx' && (
        <>
          {/* Scattered squares merging into one — 디지털 통합 메타포 */}
          <rect x="120" y="80"  width="80" height="80" fill="none" stroke={C.fg} strokeWidth="1.5" opacity="0.45"/>
          <rect x="220" y="80"  width="80" height="80" fill="none" stroke={C.fg} strokeWidth="1.5" opacity="0.30"/>
          <rect x="120" y="180" width="80" height="80" fill="none" stroke={C.fg} strokeWidth="1.5" opacity="0.30"/>
          <rect x="380" y="240" width="280" height="240" fill={C.fg} opacity="0.85"/>
          <path d="M455 365 L495 405 L575 320" fill="none" stroke={C.bg} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        </>
      )}
      {project.pillar === 'product' && (
        <>
          {/* Product Lifecycle — Launch → Grow → Sustain */}
          <line x1="120" y1="300" x2="680" y2="300" stroke={C.fg} strokeWidth="1.5" opacity="0.4"/>
          <circle cx="120" cy="300" r="40" fill={C.fg} opacity="0.85"/>
          <circle cx="400" cy="300" r="60" fill="none" stroke={C.fg} strokeWidth="2" opacity="0.65"/>
          <circle cx="680" cy="300" r="28" fill="none" stroke={C.fg} strokeWidth="1.5" opacity="0.5"/>
        </>
      )}
      {project.pillar === 'consulting' && (
        <>
          {/* Consulting — interlocking arcs (handcraft + brand) */}
          <path d="M 200 460 Q 200 200 460 200" fill="none" stroke={C.fg} strokeWidth="1.5" opacity="0.45"/>
          <path d="M 340 460 Q 340 340 460 340" fill="none" stroke={C.fg} strokeWidth="1.5" opacity="0.6"/>
          <circle cx="600" cy="200" r="100" fill={C.fg} opacity="0.18"/>
          <circle cx="600" cy="200" r="55"  fill={C.fg} opacity="0.5"/>
        </>
      )}
    </svg>
  );
}

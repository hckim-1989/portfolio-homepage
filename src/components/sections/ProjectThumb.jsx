/**
 * ProjectThumb — 추상 SVG 썸네일
 * NDA 우회 + 톤 통일. heroImage 채워지면 ProjectCard에서 분기 처리.
 */
const PALETTE = {
  brand:      { bg: '#F4ECE0', fg: '#C19A6B', ink: '#2A1F12' },
  crm:        { bg: '#E6EEF5', fg: '#1F4E79', ink: '#0E2440' },
  engagement: { bg: '#F5E7E1', fg: '#C7522A', ink: '#3A1A0E' },
};

export default function ProjectThumb({ project }) {
  const c = PALETTE[project.pillar] || PALETTE.brand;
  const word = (project.impact || project.title).split(' ').slice(0, 2).join(' ');
  const year = project.year;

  // pillar별로 다른 추상 패턴
  return (
    <svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className="project-thumb-svg"
      aria-hidden="true"
    >
      <rect width="800" height="600" fill={c.bg} />

      {project.pillar === 'brand' && (
        <>
          <circle cx="640" cy="120" r="220" fill={c.fg} opacity="0.18"/>
          <circle cx="640" cy="120" r="140" fill={c.fg} opacity="0.28"/>
          <circle cx="640" cy="120" r="70"  fill={c.fg} opacity="0.45"/>
        </>
      )}
      {project.pillar === 'crm' && (
        <>
          <circle cx="400" cy="300" r="240" fill="none" stroke={c.fg} strokeWidth="1.2" opacity="0.5"/>
          <circle cx="400" cy="300" r="170" fill="none" stroke={c.fg} strokeWidth="1.2" opacity="0.6"/>
          <circle cx="400" cy="300" r="100" fill="none" stroke={c.fg} strokeWidth="1.2" opacity="0.7"/>
          <circle cx="400" cy="300" r="40"  fill={c.fg} opacity="0.85"/>
        </>
      )}
      {project.pillar === 'engagement' && (
        <>
          <line x1="120" y1="120" x2="680" y2="480" stroke={c.fg} strokeWidth="1.2" opacity="0.5"/>
          <line x1="680" y1="120" x2="120" y2="480" stroke={c.fg} strokeWidth="1.2" opacity="0.5"/>
          <line x1="120" y1="300" x2="680" y2="300" stroke={c.fg} strokeWidth="1.2" opacity="0.5"/>
          <circle cx="120" cy="120" r="14" fill={c.fg}/>
          <circle cx="680" cy="120" r="14" fill={c.fg}/>
          <circle cx="120" cy="480" r="14" fill={c.fg}/>
          <circle cx="680" cy="480" r="14" fill={c.fg}/>
          <circle cx="400" cy="300" r="20" fill={c.bg} stroke={c.fg} strokeWidth="2"/>
        </>
      )}

      {/* 좌하단 키워드 라벨 */}
      <g fontFamily="Pretendard Variable, Pretendard, Inter, sans-serif">
        <text x="40" y="540" fontSize="14" fontWeight="500" letterSpacing="2.4" fill={c.ink} opacity="0.6">
          {year.toUpperCase()}
        </text>
        <text x="40" y="572" fontSize="20" fontStyle="italic" fill={c.ink} opacity="0.85">
          {word}
        </text>
      </g>
    </svg>
  );
}

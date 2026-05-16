// ============================================
// Portfolio Data
// 모든 콘텐츠는 이 파일에서 관리됩니다.
// [TODO] 마커가 있는 부분을 본인 정보로 채우세요.
// ============================================

export const profile = {
  initials: 'HK',
  nameKo: '김형철',
  nameEn: 'Heungchul Kim',
  email: 'heungchul@email.com',                  // [TODO] 실제 이메일
  linkedin: 'https://linkedin.com/in/heungchul', // [TODO] 실제 LinkedIn URL
  resumeUrl: '/Heungchul_Kim_Resume.pdf',         // [TODO] 실제 이력서 PDF 경로
};

// 마스트헤드의 필터 nav 라벨 (영문 통일 — italic 적용 위해)
export const pillars = [
  { id: 'brand',      label: 'Brand' },
  { id: 'crm',        label: 'CRM' },
  { id: 'engagement', label: 'Customer Engagement' },
];

// 마스트헤드 우측 secondary nav
export const secondaryNav = [
  { label: 'About',    href: '/about',                              external: false },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/heungchul',   external: true  }, // [TODO]
];

// 프로젝트 데이터
// heroImage: 빈 문자열이면 회색 placeholder가 표시됨
//            나중에 이미지 경로(예: '/images/projects/toyota.jpg')를 넣으면 자동 적용
export const projects = [
  {
    slug: 'toyota-crown-launch',
    title: 'Toyota Crown Brand Launch',     // [TODO] 실제 프로젝트명
    pillar: 'brand',
    year: 2023,
    heroImage: '',                          // [TODO] 추후 이미지 경로
    // ── Project detail 페이지용 (후속 단계) ──
    client: 'Toyota Motor Korea',           // [TODO]
    role: 'Brand Manager, Lead',            // [TODO]
    description: '',                         // [TODO] 한 단락 본문 (work.ac 톤 - Short)
    detailImages: [],                        // [TODO] 추후 이미지 경로 배열 (3-5장)
  },
  {
    slug: 'coffee-loyalty-program',
    title: 'Coffee Loyalty Program',        // [TODO]
    pillar: 'crm',
    year: 2022,
    heroImage: '',
    client: '[TODO]',
    role: '[TODO]',
    description: '',
    detailImages: [],
  },
  {
    slug: 'renewal-flow-redesign',
    title: 'Renewal Flow Redesign',         // [TODO]
    pillar: 'engagement',
    year: 2024,
    heroImage: '',
    client: '[TODO]',
    role: '[TODO]',
    description: '',
    detailImages: [],
  },
  {
    slug: 'spring-brand-campaign',
    title: 'Spring Brand Campaign',         // [TODO]
    pillar: 'brand',
    year: 2021,
    heroImage: '',
    client: '[TODO]',
    role: '[TODO]',
    description: '',
    detailImages: [],
  },
  {
    slug: 'customer-journey-map',
    title: 'Customer Journey Map',          // [TODO]
    pillar: 'engagement',
    year: 2023,
    heroImage: '',
    client: '[TODO]',
    role: '[TODO]',
    description: '',
    detailImages: [],
  },
];

// 헬퍼: 특정 pillar로 필터링
export function filterProjectsByPillar(activePillarId) {
  if (!activePillarId) return projects;
  return projects.filter(p => p.pillar === activePillarId);
}

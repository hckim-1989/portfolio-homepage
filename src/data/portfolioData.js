// ============================================
// Portfolio Data — v5 (Refined design system)
// Single source of truth for site content.
// ============================================

export const profile = {
  initials: 'HK',
  nameKo: '김형철',
  nameEn: 'Heungchul Kim',
  role: 'Brand Strategist',
  location: 'Seoul',
  tenureFrom: 2017,
  email: 'heungkim2003@gmail.com',
  linkedin: '#',
  coffeeChat: '#',
  resumeUrl: '#',
  available: '2025',
};

// ── 마스트헤드 nav (Refined 5-link) ──
export const nav = [
  { id: 'work',     label: 'Work',     href: '#work' },
  { id: 'about',    label: 'About',    href: '#about' },
  { id: 'services', label: 'Services', href: '#consulting' },
  { id: 'journal',  label: 'Journal',  href: '#notes' },
  { id: 'contact',  label: 'Contact',  href: '#contact', muted: true },
];

// ── Hero (C2 Split — 좌: 카피+버튼 / 우: featured 케이스) ──
export const hero = {
  eyebrow: 'Brand & Marketing Strategist · Seoul',
  titleLines: [
    { text: 'From brand strategy', accent: false },
    { text: 'to customer', accent: false },
    { text: 'engagement.', accent: true },
  ],
  buttons: [
    { label: '프로젝트 보기', href: '#work', primary: true },
    { label: '이력서 PDF',    href: '#',     primary: false }, // [TODO] resumeUrl
  ],
};

// ── Independent Work · 개인 컨설팅 (Raison D'être 중심) ──
export const consulting = {
  eyebrow: 'Independent Work',
  title: {
    line1: '인하우스 9년의 시선을',
    line2: '작은 브랜드의 실전으로.',
    italicLine: 2,
  },
  body:
    '현재 진행 중인 개인 프로젝트 — 파티셰리 브랜드 Raison D\'être 5개 지점의 고객경험·브랜드·SNS·운영 체계를 통합 컨설팅. 인하우스에서 길러낸 관점을 작은 브랜드의 한정된 리소스 안에서도 작동하는 형태로 다시 설계.',
  badge: 'Currently consulting',
  client: 'Raison D\'être · 5개 지점 파티셰리',
  cta: {
    label: '컨설팅 의뢰·커피챗',
    href: '#contact',
  },
  services: [
    {
      title: 'Brand Identity',
      desc: '포지셔닝 · 톤앤매너 가이드 · 지점별 일관성',
    },
    {
      title: 'Customer Experience',
      desc: '지점 경험 설계 · 운영 도구 · 고객 접점 통합',
    },
    {
      title: 'SNS & Channel',
      desc: '콘텐츠 전략 · 채널 운영 · 일관성 가이드',
    },
    {
      title: 'Marketing Ops',
      desc: '실행 가능한 운영 체계 · 작은 리소스로 작동하는 구조',
    },
  ],
};

// ── Capabilities (4축 매트릭스) ──
export const capabilities = {
  eyebrow: 'What I Do',
  title: {
    line1: '네 개의 축으로',
    line2: '브랜드와 고객을 잇습니다.',
    italicLine: 2,
  },
  pillars: [
    {
      id: 'crm',
      label: 'CRM & Customer Loyalty',
      tagline: '데이터로 고객 관계를 자산화',
      bullets: [
        'Tiering · Segmentation (구매·행동 데이터 기반)',
        'Loyalty Loop · CLV 최적화',
        'Personalization · Engagement Operation',
      ],
      featuredProjectSlug: 'loyalty-program',
    },
    {
      id: 'engagement',
      label: 'Customer Engagement',
      tagline: '서비스 접점 데이터를 마케팅 자산으로',
      bullets: [
        '고객 여정 설계 · 세그먼트 대응',
        '서비스 접점 데이터 → 마케팅 연계',
        '연령·등급별 개인화 콘텐츠',
      ],
      featuredProjectSlug: 'customer-brand-journey',
    },
    {
      id: 'dx',
      label: 'DX',
      tagline: '오프라인을 디지털 1:1 채널로 통합',
      bullets: [
        'App / Web Renewal PM',
        '분산 데이터 통합 · 프로세스 디지털화',
        'Compliance · IA · Operations',
      ],
      featuredProjectSlug: 'after-service-dx',
    },
    {
      id: 'brand',
      label: 'Brand Strategy',
      tagline: '중장기 방향과 시장 진입을 설계',
      bullets: [
        'Positioning · Long-term Roadmap',
        'IMC Campaign · Cross-functional',
        'Launch → Grow → Sustain · Localization',
      ],
      featuredProjectSlug: 'brand-long-term-strategy',
    },
  ],
};

// ── Projects (v7 — 명사형 + bullets 구조) ──
// challenge/approach/outcomeQualitative 모두 string[] (불릿 항목 배열)
export const projects = [
  {
    slug: 'loyalty-program',
    id: 'project-loyalty',
    title: '브랜드 로열티 프로그램 구축',
    pillar: 'crm',
    year: '2024–2025',
    role: 'PM (프로젝트 총괄)',
    featured: true,
    summary:
      '구매·행동 데이터 기반 Tiering 재설계와 인게이지먼트 선순환 루프 구축으로, 일회성 CX의 데이터 기반 자산화 체계 전환.',
    impact: '일회성 CX → 데이터 기반 자산화 · CLV 제고',
    challenge: [
      '일회성 캠페인 중심 CRM의 한계',
      '지속가능한 로열티 모델 부재',
      '등급별 상시 차별화 경험 체계 미구축',
    ],
    approach: [
      '구매·행동 데이터 분석 기반 고객 Tiering 재설계',
      '등급 연계 인게이지먼트 프로그램 기획·운영',
      'CLV 최적화 위한 Loyalty Loop 설계 (데이터 → 세그먼트 → 경험 → 데이터)',
    ],
    outcomeQualitative: [
      '일회성 CX → 데이터 기반 자산화 체계 전환',
      'CLV 제고 기반 마련',
      '고객 데이터의 지속 축적·활용 구조 확보',
    ],
    outcomeMetrics: [
      { label: '등급 회원 / 인게이지먼트 참여율', value: '[TBD]' },
      { label: 'CLV 변화', value: '[TBD]' },
    ],
    client: 'Toyota Motor Korea',
    assets: '[확인 필요 — Tiering 구조도 / Loyalty Loop 도식 / 개인화 콘텐츠 샘플]',
  },
  {
    slug: 'after-service-dx',
    id: 'project-as-dx',
    title: '고객 애프터서비스 디지털 전환',
    pillar: 'dx',
    year: '2021 → 2026',
    role: 'PM (서비스 DX 총괄)',
    featured: true,
    summary:
      '대리점별 분산 데이터의 브랜드 앱 통합과 정비 프로세스 100% 디지털화로, 상시 1:1 접점 확보.',
    impact: '정비 예약 20% 온라인 · 앱 가입률 90% · MAU 100% 성장',
    challenge: [
      '대리점 파편화로 인한 고객 데이터 관리 부재',
      '높은 오프라인 운영 비용',
      '대리점별 흩어진 정비 이력·고객 정보',
    ],
    approach: [
      '대리점별 분산된 고객 데이터의 브랜드 앱 통합',
      '오프라인 정비 프로세스 100% 디지털화',
      'RFP·설계·런칭·운영 전 단계 PM 책임 (2021 첫 구축 → 2026 확장 일관)',
    ],
    outcomeQualitative: [
      '온라인 정비 예약 20% 전환 → 콜센터 효율화',
      '앱 가입률 90%, MAU 100% 성장 달성',
      '고객 데이터 단일화 → 마케팅·CRM 활용 기반',
    ],
    outcomeMetrics: [
      { label: '온라인 정비 예약 전환', value: '20%' },
      { label: '앱 가입률', value: '90%' },
      { label: 'MAU 성장', value: '100%' },
    ],
    client: 'Toyota Motor Korea',
    assets: '[확인 필요 — 앱 스크린샷 / IA / before-after / DX 프로세스 도식]',
  },
  {
    slug: 'product-lifecycle',
    id: 'project-lifecycle',
    title: '핵심 프로덕트 런칭 & 라이프사이클 관리',
    pillar: 'brand',
    year: '2019–2026 Q1',
    role: 'PM (Product Owner)',
    featured: true,
    summary:
      'Launch → Grow → Sustain 전 과정 PO 총괄과 Cross-functional 리더십, 글로벌 전략의 한국 시장 로컬라이제이션.',
    impact: '라이프사이클 거버넌스 · 일관된 브랜드 메시지 정착',
    challenge: [
      '본사·딜러·마케팅 간 목표 충돌',
      '단기 런칭 위주의 마케팅 한계',
      '단계별 메시지·미디어 거버넌스 부재',
    ],
    approach: [
      'Launch-Grow-Sustain 전 과정 PO 총괄',
      'Cross-functional 리더십으로 본사·딜러·마케팅 정렬',
      '한국 시장 맞춤 글로벌 전략 로컬라이제이션',
      '단계별 메시지·미디어 전략 일관 설계',
    ],
    outcomeQualitative: [
      '라이프사이클 전 주기 단일 오너십 확립',
      '일관된 브랜드 메시지 정착',
      '라이프사이클 거버넌스 체계 구축',
    ],
    outcomeMetrics: [
      { label: '사전예약 / 판매 달성률', value: '[TBD]' },
      { label: '캠페인 도달·전환', value: '[TBD]' },
    ],
    client: 'Toyota Motor Korea',
    assets: '[확인 필요 — 런칭 캠페인 / IMC 결과물 / 미디어 리포트]',
  },
  {
    slug: 'brand-long-term-strategy',
    id: 'project-electrified',
    title: '브랜드 중장기 전략 (Electrified)',
    pillar: 'brand',
    year: '2025–Present',
    role: 'TFT 코어 멤버',
    featured: false,
    isOngoing: true,
    summary:
      '전동화 전환 속 라이프스타일 기반 브랜드 가치 정립과 글로벌-한국 시장 간 전략적 갭 해소.',
    impact: '전동화 단계별 시나리오 · 경쟁 대비 차별화된 로드맵',
    challenge: [
      '단순 기술·스펙이 아닌 라이프스타일 기반 미래 방향성 정의 필요',
      '본사 글로벌 전략과 한국 시장 특성 간 전략적 갭',
      '전동화 전환 속 브랜드 차별화 부재',
    ],
    approach: [
      'TFT 코어로 브랜드 포지셔닝·인프라 전략 기획',
      '고객 라이프스타일 안에서 전동화 기술의 브랜드 가치화',
      '글로벌-한국 시장 간 전략적 갭 해소',
    ],
    outcomeQualitative: [
      '전동화 전환 단계별 시나리오 확립',
      '경쟁 브랜드 대비 차별화된 브랜드 로드맵 정립',
      '글로벌 전략의 한국 시장 적합화 완료',
    ],
    outcomeMetrics: [
      { label: '경영진 승인 로드맵', value: '진행 중' },
      { label: '채택 시나리오', value: '[확인 후 입력]' },
    ],
    client: 'Toyota Motor Korea',
    assets: '[확인 필요 — 기밀 가능성 높음, 공개 가능한 요약·도식만 선별]',
  },
  {
    slug: 'customer-brand-journey',
    id: 'project-cbj',
    title: '고객 브랜드 여정 서비스 기획',
    pillar: 'engagement',
    year: '2017–2019',
    role: '기획 지원',
    featured: false,
    summary:
      '차량 입고 프로세스 최적화 및 연령별 세그먼트 대응 지원, 서비스 접점 데이터와 마케팅 전략 연계 체계 수립.',
    impact: 'CRM·멤버십 등 데이터 기반 사고의 커리어 출발점',
    challenge: [
      '서비스 접점 데이터의 마케팅 미활용',
      '연령대별 고객 니즈 대응 전략 부재',
    ],
    approach: [
      '차량 입고 프로세스 최적화 지원',
      '연령별 세그먼트 대응 전략 수립 지원',
      '서비스 접점 데이터와 마케팅 전략 연계 체계 수립',
    ],
    outcomeQualitative: [
      'CRM·멤버십 등 데이터 기반 사고의 커리어 기반 마련',
      '이후 모든 프로젝트의 출발점이 된 경험',
    ],
    outcomeMetrics: [
      { label: '입고 운영 효율 / 세그먼트 대응', value: '[TBD]' },
    ],
    client: 'Toyota Motor Korea',
    assets: '[확인 필요 — 초기 경력이라 자료 없을 가능성]',
  },
  // ── 06. 개인 프로젝트 — 레종데트르 ──
  {
    slug: 'raison-detre-consulting',
    id: 'project-raison',
    title: 'Raison D\'être — 브랜드·CX·SNS 컨설팅',
    pillar: 'consulting',
    year: '2025–Present',
    role: 'Independent Consultant',
    featured: false,
    isOngoing: true,
    isPersonal: true,
    summary:
      '5개 지점 파티셰리 브랜드의 고객경험·SNS·브랜드·마케팅을 통합 컨설팅. 인하우스 9년의 관점을 작은 브랜드에 적용한 개인 프로젝트.',
    impact: '브랜드 정체성 · 고객 경험 · 채널 통합 컨설팅 (개인 프로젝트)',
    challenge: [
      '5개 지점 운영의 일관된 브랜드 경험 부재',
      'SNS·오프라인·고객 데이터의 분리된 운영',
      '소규모 브랜드의 한정된 리소스로 운영 가능한 체계 필요',
    ],
    approach: [
      '브랜드 정체성 정리 + 톤앤매너 가이드',
      '지점별 고객 경험 설계 · 운영 도구 (스케줄러 등) 구축',
      'SNS 콘텐츠 전략 + 채널 일관성 가이드',
      '실행 가능한 마케팅 운영 체계 설계',
    ],
    outcomeQualitative: [
      '인하우스 9년의 시선으로 소규모 브랜드에 적용 가능한 컨설팅 모델 정착',
      '브랜드·경험·운영·SNS의 통합 관점 제공',
    ],
    outcomeMetrics: [
      { label: '운영 지점', value: '5개' },
      { label: '담당 영역', value: 'CX · Brand · SNS · 운영' },
    ],
    client: 'Raison D\'être (Patisserie)',
    assets: '[비공개 — 클라이언트 협의]',
  },
];

// ── About ──
export const about = {
  eyebrow: 'About',
  title: {
    line1: '한 직무 안에서 쌓아온,',
    line2: '다층의 경험.',
    italicLine: 2,
  },
  company: 'Toyota Motor Korea · Toyota / Lexus 브랜드',
  tenure: '2017 → Present',
  body:
    'Toyota Motor Korea에서 Toyota·Lexus 두 브랜드의 마케팅 한 직무를 9년간 담당. 브랜드 전략과 IMC 캠페인의 기획·집행, 공식 디지털 채널의 리뉴얼·운영, 프리미엄 멤버십 프로그램의 설계·CRM 운영, 멤버십 연계 고객 경험 프로그램 기획까지 — 마케팅의 여러 영역을 단일 PM 또는 코어 멤버로 수행. 본사·세일즈·딜러·에이전시 4자 조율은 그 과정에서 자연스러워진 일상.',
};

// ── Timeline (5단계 커리어) ──
export const timeline = [
  {
    id: 'timeline-1',
    year: '2025',
    yearDisplay: '2025 → Present',
    isPresent: true,
    title: '브랜드 중장기 전략 수립 (Electrified)',
    description:
      '전동화 전환을 포함한 브랜드 중장기 로드맵 수립. TFT 코어 멤버로 브랜드 포지셔닝, 단계별 시나리오, 인프라 전략 기획. 본사 글로벌 전략을 한국 시장에 적합화.',
    pillars: ['brand', 'crm'],
  },
  {
    id: 'timeline-2',
    year: '2024',
    yearDisplay: '2024 → 2025',
    isPresent: false,
    title: '브랜드 로열티 프로그램 구축',
    description:
      '구매·행동 데이터 기반 고객 Tiering 재설계 + 인게이지먼트 선순환 루프(Loyalty Loop) 구축. CLV 최적화를 목표로 데이터 → 세그먼트 → 경험 → 다시 데이터로 이어지는 자산화 체계 마련.',
    pillars: ['crm'],
  },
  {
    id: 'timeline-3',
    year: '2021',
    yearDisplay: '2021 → 2026',
    isPresent: false,
    title: '고객 애프터서비스 디지털 전환',
    description:
      '대리점별 분산된 고객 데이터를 브랜드 앱으로 통합, 오프라인 정비 프로세스 100% 디지털화. 정비 예약 20% 온라인 전환, 앱 가입률 90%, MAU 100% 성장 달성.',
    pillars: ['dx'],
  },
  {
    id: 'timeline-4',
    year: '2019',
    yearDisplay: '2019 → 2026 Q1',
    isPresent: false,
    title: '핵심 프로덕트 런칭 & 라이프사이클 관리',
    description:
      'Launch → Grow → Sustain 전 과정 Product Owner 총괄. Cross-functional 리더십으로 본사·딜러·마케팅 정렬. 한국 시장 맞춤 글로벌 전략 로컬라이제이션으로 라이프사이클 거버넌스 체계 구축.',
    pillars: ['brand'],
  },
  {
    id: 'timeline-5',
    year: '2017',
    yearDisplay: '2017 → 2019',
    isPresent: false,
    title: '고객 브랜드 여정 서비스 기획',
    description:
      '차량 입고 프로세스 최적화 및 연령별 세그먼트 대응 전략 지원. 서비스 접점 데이터를 마케팅 전략과 연계하는 체계 수립 — 이후 모든 프로젝트의 출발점이 된 데이터 기반 사고.',
    pillars: ['engagement'],
  },
];

// ── Notes (블로그 자리만) ──
export const notes = {
  enabled: false,
  eyebrow: 'Notes',
  title: {
    line1: '브랜드와 마케팅에 대한,',
    line2: '나의 시선.',
    italicLine: 2,
  },
  comingSoon: '곧 시작합니다. 자동차 마케팅 · CRM 운영 · 본사-딜러 조율에서 길어 올린 관점을 정리해 올릴 예정입니다.',
  posts: [],
};

// ── Contact ──
export const contact = {
  eyebrow: 'Contact',
  title: {
    line1: '다음 브랜드 이야기,',
    line2: '함께 만들어볼까요.',
    italicLine: 2,
  },
  body: '프로젝트 문의, 협업, 커피챗 — 어떤 주제든 편하게 연락 주세요. 영업일 기준 2일 안에 회신드립니다.',
  channels: [
    {
      id: 'email',
      label: 'Email',
      value: 'heungkim2003@gmail.com',
      href: 'mailto:heungkim2003@gmail.com',
      primary: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'in/heungchul-kim',
      href: '#',                 // [TODO] LinkedIn URL
      external: true,
    },
    {
      id: 'coffee',
      label: 'Coffee Chat',
      value: '15분 캘리들리',
      href: '#',                 // [TODO] Calendly 링크
      external: true,
    },
  ],
};

// ── 헬퍼 ──
export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter(p => p.featured);
}

export function getArchiveProjects() {
  return projects.filter(p => !p.featured);
}

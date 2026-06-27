// ============================================
// Portfolio Data — v5 (Refined design system)
// Single source of truth for site content.
// ============================================

export const profile = {
  initials: 'HK',
  nameKo: '김흥철',
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
  subtitleKo:
    '브랜드 전략부터 디지털 CRM과 고객 경험 프로그램까지 — 마케팅 한 직무를 단일 PM으로 책임져 온 9년의 기록.',
  buttons: [
    { label: '프로젝트 보기', href: '#work', primary: true },
    { label: '이력서 PDF',    href: '#',     primary: false }, // [TODO] resumeUrl
  ],
};

// ── Brand Consulting (옵션 C: 자기 정체성 + 의뢰 CTA) ──
export const consulting = {
  eyebrow: 'Brand Consulting',
  title: {
    line1: '인하우스에서 길러낸 시선으로,',
    line2: '브랜드의 다음 한 걸음을 함께 그립니다.',
    italicLine: 2,
  },
  body:
    '본사·세일즈·딜러·에이전시 사이의 4자 조율, 브랜드 중장기 로드맵, CRM·멤버십 설계, 디지털 1:1 채널 운영 — 9년간 한 자리에서 책임진 경험을 외부 브랜드에도 적용합니다. 단발성 컨설팅이 아닌, "실행까지 함께 갈 수 있는 관점"을 제공합니다.',
  badge: 'Available for Consulting',
  cta: {
    label: '커피챗 신청하기',
    href: '#contact',
  },
  services: [
    {
      title: 'Brand Strategy',
      desc: '포지셔닝 · 중장기 로드맵 · IMC 캠페인 설계',
    },
    {
      title: 'CRM & Loyalty',
      desc: '멤버십·등급 체계 설계 · 인게이지먼트 프로그램 운영',
    },
    {
      title: 'Digital CX',
      desc: '앱·웹 리뉴얼 PM · 개인화 · 고객 데이터 자산화',
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
        'Single Source of Truth · 데이터 통합',
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

// ── Projects (v6 — Google Docs "포트폴리오 프로젝트 콘텐츠" 기반) ──
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
      '구매·행동 데이터 분석 기반 고객 세그먼테이션(Tiering)을 재설계하고 인게이지먼트 선순환 루프(Loyalty Loop)를 구축해, 일회성 CX를 데이터 기반 자산화 체계로 전환했다.',
    impact: '일회성 CX → 데이터 기반 자산화 · CLV 제고',
    challenge:
      '일회성 캠페인 중심 CRM의 한계를 극복하고 지속가능한 로열티 모델이 필요했다. 고객 데이터가 자산으로 축적되는 구조를 만들고, 등급별로 차별화된 경험을 상시 제공할 수 있는 체계가 부재했다.',
    approach:
      '구매·행동 데이터 분석을 토대로 고객 세그먼테이션(Tiering)을 재설계하고, 등급과 연계된 인게이지먼트 프로그램을 기획·운영했다. CLV 최적화를 목표로 인게이지먼트 선순환 루프(Loyalty Loop)를 설계해, 데이터 → 세그먼트 → 경험 → 다시 데이터로 이어지는 구조를 구축했다.',
    outcomeQualitative:
      '일회성 CX를 데이터 기반 자산화 체계로 전환하여 고객 생애 가치(CLV) 제고 기반 마련.',
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
      '대리점별 분산된 고객 데이터를 브랜드 앱으로 통합(Single Source of Truth)하고, 오프라인 정비 프로세스를 100% 디지털화하여 상시 접점을 확보했다.',
    impact: '정비 예약 20% 온라인 전환 · 앱 가입률 90% · MAU 100% 성장',
    challenge:
      '오프라인·대리점 파편화로 고객 데이터 관리가 부재하고 운영 비용이 높았다. 정비 예약·이력·고객 정보가 대리점별로 흩어져 있어 통합된 고객 뷰가 불가능했다.',
    approach:
      '대리점별 분산된 고객 데이터를 브랜드 앱으로 통합해 Single Source of Truth를 구축했다. 오프라인 정비 프로세스를 100% 디지털화해 상시 접점을 확보하고, RFP·설계·런칭·운영 전 단계를 PM으로 책임지며 2021년 첫 구축부터 2026년 확장까지 일관되게 끌고 갔다.',
    outcomeQualitative:
      '전체 정비 예약의 20%를 온라인으로 전환해 콜센터 효율화. 앱 가입률 90%, MAU 100% 성장 달성. 분산되어 있던 고객 데이터의 단일화로 마케팅·CRM 활용 기반 확보.',
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
      'Launch → Grow → Sustain 전 과정을 Product Owner로 총괄하며, 본사·딜러·마케팅 간 Cross-functional 리더십을 발휘하고 글로벌 전략을 한국 시장에 로컬라이제이션했다.',
    impact: '라이프사이클 거버넌스 체계 구축 · 일관된 브랜드 메시지 정착',
    challenge:
      '이해관계자(본사·딜러·마케팅) 간 목표 충돌과 단기 런칭 위주의 마케팅 한계가 있었다. 프로덕트 하나가 시장에 안착해 성장·유지되기까지 단계별로 다른 메시지·미디어가 필요하지만, 일관된 거버넌스가 부재했다.',
    approach:
      'Launch-Grow-Sustain 전 과정을 Product Owner로 총괄하며 Cross-functional 리더십을 발휘했다. 한국 시장 특성에 맞춰 글로벌 전략을 로컬라이제이션(Localization)하고, 본사·딜러·마케팅의 목표를 정렬해 단계별 메시지·미디어 전략을 일관되게 설계했다.',
    outcomeQualitative:
      '라이프사이클 전체를 관통하는 거버넌스 체계 구축 및 일관된 브랜드 메시지 정착. 단발 런칭이 아닌 전 주기 단일 오너십.',
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
      '전동화 전환 속에서 단순 기술·스펙이 아닌 고객 라이프스타일 안에서 브랜드 가치로 발현되는 방향성을 정립하고, 글로벌 전략과 한국 시장 간 전략적 갭을 해소했다.',
    impact: '전동화 단계별 시나리오 확립 · 경쟁 브랜드 대비 차별화된 로드맵',
    challenge:
      '전동화 전환 속에서 단순 기술·스펙 나열이 아닌 고객 라이프스타일에 맞춘 미래 방향성 정의가 필요했다. 본사 글로벌 전략과 한국 시장 특성 간 전략적 갭(Gap) 해소가 핵심 과제.',
    approach:
      'TFT 코어 멤버로 브랜드 포지셔닝과 인프라 전략을 기획했다. 단순 스펙이 아닌 고객 라이프스타일 안에서 전동화 기술이 브랜드 가치로 발현되는 방향성을 정립하고, 글로벌 전략과 한국 시장 간 전략적 갭을 해소했다.',
    outcomeQualitative:
      '전동화 전환의 명확한 단계별 시나리오 확립 및 시장 경쟁 브랜드 대비 차별화된 브랜드 로드맵 정립.',
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
      '차량 입고 프로세스 최적화와 연령별 세그먼트 대응 전략을 지원하고, 서비스 접점 데이터를 마케팅 전략과 연계하는 체계를 수립했다.',
    impact: 'CRM·멤버십 등 데이터 기반 사고의 커리어 출발점',
    challenge:
      '서비스 접점에서 발생하는 고객 데이터가 마케팅 관점에서 활용되지 못하고 있었다. 연령대별로 다른 고객 니즈에 맞춘 대응 전략도 부재했다.',
    approach:
      '차량 입고 프로세스를 최적화하고 연령별 세그먼트 대응 전략 수립을 지원했다. 서비스 접점에서 수집되는 데이터를 마케팅 전략과 연계하는 체계를 수립해, 흩어져 있던 접점 데이터를 마케팅 관점으로 연결했다.',
    outcomeQualitative:
      'CRM·멤버십 등 고객 중심 데이터 기반 사고의 커리어 기반 마련. 이후 모든 프로젝트의 출발점이 된 경험.',
    outcomeMetrics: [
      { label: '입고 운영 효율 / 세그먼트 대응', value: '[TBD]' },
    ],
    client: 'Toyota Motor Korea',
    assets: '[확인 필요 — 초기 경력이라 자료 없을 가능성]',
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
    'Toyota Motor Korea에서 Toyota·Lexus 두 브랜드의 마케팅 한 직무를 9년간 책임져 왔습니다. 브랜드 전략과 IMC 캠페인의 기획·집행, 공식 디지털 채널의 리뉴얼과 운영, 프리미엄 멤버십 프로그램의 설계와 CRM 운영, 그리고 멤버십과 연계된 고객 경험 프로그램의 기획까지 — 마케팅의 여러 영역을 단일 PM 또는 코어 멤버로 책임져 왔습니다. 본사·세일즈·딜러·에이전시 사이의 4자 조율은 그 과정에서 자연스러워진 일상입니다.',
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
      '대리점별 분산된 고객 데이터를 브랜드 앱으로 통합(Single Source of Truth). 오프라인 정비 프로세스 100% 디지털화. 정비 예약 20% 온라인 전환, 앱 가입률 90%, MAU 100% 성장 달성.',
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

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

// ── Hero (영문 메인 + 한글 서브, 단어 강조) ──
export const hero = {
  eyebrow: 'Brand & Marketing Strategist · Seoul',
  titleEn: {
    parts: [
      { text: 'From brand strategy ', accent: false },
      { text: 'to customer ', accent: false },
      { text: 'engagement.', accent: true },
    ],
  },
  subtitleKo:
    '브랜드 전략부터 디지털 CRM과 고객 경험 프로그램까지 — 마케팅 한 직무 안의 여러 영역을 단일 PM으로 책임져 온 9년의 기록.',
  focus: {
    label: 'FOCUS',
    items: [
      'Brand Strategy',
      'CRM & Loyalty',
      'Customer Engagement',
    ],
    available: 'Available 2025',
  },
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

// ── Capabilities (3축 매트릭스) ──
export const capabilities = {
  eyebrow: 'What I Do',
  title: {
    line1: '세 개의 축으로',
    line2: '브랜드와 고객을 잇습니다.',
    italicLine: 2,
  },
  pillars: [
    {
      id: 'brand',
      label: 'Brand Strategy',
      tagline: '브랜드의 중장기 방향과 시장 진입을 설계',
      bullets: [
        'Brand Positioning · Long-term Roadmap',
        'IMC Campaign Planning & Execution',
        'Product Launch (Launch → Grow → Sustain)',
      ],
      featuredProjectSlug: 'brand-long-term-strategy',
    },
    {
      id: 'crm',
      label: 'CRM & Loyalty',
      tagline: '데이터로 고객 관계를 자산화',
      bullets: [
        'Premium Tier Program Design',
        'Engagement Program Operation',
        'Personalization & Segmentation',
      ],
      featuredProjectSlug: 'loyalty-engagement-program',
    },
    {
      id: 'engagement',
      label: 'Customer Engagement',
      tagline: '오프라인 경험을 디지털 1:1로 확장',
      bullets: [
        'App / Web Renewal PM',
        'IA & Content Architecture',
        'Compliance · Operations',
      ],
      featuredProjectSlug: 'brand-app-renewal',
    },
  ],
};

// ── Projects (5개, projects.md 기반) ──
export const projects = [
  {
    slug: 'loyalty-engagement-program',
    id: 'project-loyalty',
    title: '고객 등급 프로그램 & Engagement',
    pillar: 'crm',
    year: '2024–2025',
    role: 'PM',
    featured: true,
    summary:
      '프리미엄 고객 등급 체계와 등급 연계 인게이지먼트 프로그램을 설계·운영해, 일회성 행사형 CX를 상시 운영형 1:1 자산화 체계로 전환했다.',
    impact: '일회성 행사 → 상시 1:1 자산화 체계 전환',
    challenge:
      '기존 고객 경험은 일회성 행사 중심이라 고객 데이터가 자산으로 축적되지 못하고 매번 리셋됐다. 프리미엄 고객을 지속적으로 식별·관리하고, 등급에 따라 차별화된 경험을 상시 제공할 수 있는 구조가 필요했다.',
    approach:
      '프리미엄 고객 등급 체계를 새로 설계하고, 등급과 연계된 인게이지먼트 프로그램을 기획·운영했다. RFP 기반으로 운영 파트너를 선정·계약하고, 약관·동의서를 정비해 데이터 활용 기반을 마련했다. 등급별 개인화 콘텐츠까지 직접 기획했으며, 일회성 이벤트를 상시 운영형 1:1 커뮤니케이션 체계로 재설계해 고객 데이터가 누적·활용되는 구조로 전환했다.',
    outcomeQualitative:
      '일회성 행사형 CX → 상시 운영형 1:1 자산화 체계로 전환, 고객 데이터의 지속 축적 기반 확보',
    outcomeMetrics: [
      { label: '등급 회원 수', value: '[TBD]' },
      { label: '인게이지먼트 참여율', value: '[TBD]' },
      { label: '재방문·리텐션 변화', value: '[TBD]' },
    ],
    client: 'Toyota Motor Korea',
    assets: '[확인 필요 — 프로그램 구조도 / 등급 체계 도식 / 개인화 콘텐츠 샘플]',
  },
  {
    slug: 'brand-app-renewal',
    id: 'project-app',
    title: '브랜드 애플리케이션 리뉴얼',
    pillar: 'engagement',
    year: '2021',
    role: 'PM',
    featured: true,
    summary:
      '브랜드 공식 디지털 애플리케이션의 통합 리뉴얼을 RFP·설계·런칭·운영 전 단계에서 PM으로 책임지고, 오프라인 중심 프리미엄 경험을 디지털 1:1 채널로 확장했다.',
    impact: '오프라인 프리미엄 경험 → 디지털 1:1 상시 채널',
    challenge:
      '프리미엄 브랜드 경험이 오프라인 접점에 집중돼 있어, 디지털에서 고객과 1:1로 연결되는 상시 채널이 부재했다. 분산된 디지털 기능을 하나의 공식 애플리케이션으로 통합하고 사용성을 재설계할 필요가 있었다.',
    approach:
      'RFP를 작성해 에이전시를 선정하고, IA와 콘텐츠 구조를 설계했다. 약관·개인정보 항목을 검토·정비해 컴플라이언스를 확보했으며, 런칭 이후 운영까지 전 단계를 단일 PM으로 책임졌다. 오프라인 중심의 프리미엄 경험을 디지털 채널로 옮겨 고객과 상시 연결되는 1:1 접점을 구축했다.',
    outcomeQualitative:
      '오프라인 중심 경험 → 디지털 1:1 상시 채널로 확장, 분산된 기능의 단일 앱 통합',
    outcomeMetrics: [
      { label: '가입자·다운로드', value: '[TBD]' },
      { label: 'MAU·활성 사용자', value: '[TBD]' },
      { label: '주요 기능 사용률', value: '[TBD]' },
    ],
    client: 'Toyota Motor Korea',
    assets: '[확인 필요 — 앱 스크린샷 / IA 설계 문서 / before-after]',
  },
  {
    slug: 'product-lifecycle',
    id: 'project-lifecycle',
    title: '프로덕트 런칭 & 라이프사이클 관리',
    pillar: 'brand',
    year: '2019–2026 1Q',
    role: 'Product Owner',
    featured: true,
    summary:
      '핵심 프로덕트의 Launch → Grow → Sustain 전 단계를 Product Owner로 담당하고, 본사·세일즈·딜러·에이전시 4자를 조율하며 시장 여정 전체를 책임졌다.',
    impact: 'Launch → Grow → Sustain 단일 오너십',
    challenge:
      '프로덕트 하나가 시장에 안착해 성장·유지되기까지는 런칭 이벤트만으로 부족하며, 단계별로 다른 메시지와 미디어 전략이 필요하다. 동시에 본사·세일즈·딜러·에이전시 등 이해관계자가 많아 일관된 방향 정렬이 핵심 과제였다.',
    approach:
      '사전예약·프레스·채널 지원물·360° IMC로 런칭을 설계하고, 인마켓 단계에서는 확장 미디어로 수요를 키웠다. 중기에는 리프레시·세대교체 메시지로 제품 수명을 관리했다. Product Owner로서 Launch→Grow→Sustain 전 구간을 일관된 관점으로 끌고 가며, 4자 이해관계자를 지속적으로 조율했다.',
    outcomeQualitative:
      '단발 런칭이 아닌 Launch→Grow→Sustain 전 주기를 단일 오너십으로 관리, 다자 이해관계자 정렬 체계화',
    outcomeMetrics: [
      { label: '사전예약 실적', value: '[TBD]' },
      { label: '런칭 후 판매·목표 달성률', value: '[TBD]' },
      { label: '캠페인 도달·전환', value: '[TBD]' },
    ],
    client: 'Toyota Motor Korea',
    assets: '[확인 필요 — 런칭 캠페인 / IMC 채널 / 미디어 리포트]',
  },
  {
    slug: 'brand-long-term-strategy',
    id: 'project-electrified',
    title: '브랜드 중장기 전략 (Electrified)',
    pillar: 'brand',
    year: '2025–Present',
    role: 'TFT Core Member',
    featured: false,
    isOngoing: true,
    summary:
      '전동화 전환을 포함한 브랜드 중장기 로드맵을 TFT 코어 멤버로 수립하고, 본사 글로벌 전략을 한국 시장에 적합화했다.',
    impact: '전동화 포함 중장기 로드맵 정립 (진행 중)',
    challenge:
      '전동화로 시장 환경이 빠르게 바뀌는 가운데, 단기 캠페인을 넘어 브랜드의 중장기 방향성을 정의할 필요가 있었다. 본사의 글로벌 전략을 한국 시장 특성에 맞게 재해석하는 것이 핵심 과제였다.',
    approach:
      'TFT 코어 멤버로 브랜드 포지셔닝, 단계별 전환 시나리오, 인프라 전략을 기획했다. 본사 글로벌 전략을 한국 시장 맥락에 맞게 적합화하고, 전동화 전환 로드맵을 단계별로 구조화했다. (진행 중 프로젝트)',
    outcomeQualitative:
      '전동화를 포함한 브랜드 중장기 로드맵·포지셔닝·단계별 시나리오 정립, 글로벌 전략의 한국 시장 적합화',
    outcomeMetrics: [
      { label: '경영진 승인 로드맵', value: '진행 중' },
      { label: '채택 시나리오', value: '[확인 후 입력]' },
    ],
    client: 'Toyota Motor Korea',
    assets: '[확인 필요 — 기밀 가능성 높음, 공개 가능한 요약·도식만 선별]',
  },
  {
    slug: 'after-service',
    id: 'project-as',
    title: '고객 애프터 서비스 기획',
    pillar: 'crm',
    year: '2017–2019',
    role: '지원',
    featured: false,
    summary:
      '차량 입고 운영과 연령별 고객 세그먼트 대응 전략 수립을 지원하며, 서비스 접점 데이터를 마케팅 전략과 연결한 고객 중심 경력의 출발점.',
    impact: '고객 중심 커리어의 출발점',
    challenge:
      '서비스 접점에서 발생하는 고객 데이터가 마케팅 관점에서 활용되지 못하고 있었다. 차량 입고 운영을 효율화하고, 연령대별로 다른 고객 니즈에 맞춰 대응할 전략이 필요했다.',
    approach:
      '차량 입고 운영 프로세스를 지원하고, 연령별 고객 세그먼트에 따른 대응 전략 수립을 도왔다. 서비스 접점에서 수집되는 데이터를 마케팅 전략과 연결하는 관점을 적용했다. 이 경험이 이후 멤버십·CRM·인게이지먼트로 이어지는 고객 중심 사고의 기반이 됐다.',
    outcomeQualitative:
      '서비스 접점 데이터를 마케팅 전략과 연결, 이후 CRM·멤버십·인게이지먼트로 이어지는 고객 중심 커리어의 출발점',
    outcomeMetrics: [
      { label: '입고 운영 효율', value: '[TBD]' },
      { label: '세그먼트 대응 결과', value: '[TBD]' },
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
    title: '고객 등급 프로그램 & Engagement 프로그램 개발',
    description:
      '프리미엄 고객 등급 체계 개발과 등급 연계 인게이지먼트 프로그램 기획·운영. 일회성 행사형 CX를 상시 운영형 1:1 자산화 체계로 전환. RFP 기반 파트너 선정·계약, 약관·동의서 정비, 개인화 콘텐츠 기획까지.',
    pillars: ['crm', 'engagement'],
  },
  {
    id: 'timeline-3',
    year: '2021',
    yearDisplay: '2021',
    isPresent: false,
    title: '브랜드 애플리케이션 리뉴얼',
    description:
      '브랜드 공식 디지털 애플리케이션 통합 리뉴얼 PM. RFP 작성, 에이전시 선정, IA·콘텐츠 설계, 약관·개인정보 검토부터 런칭 운영까지 전 단계 책임. 오프라인 중심 프리미엄 경험을 디지털 1:1 채널로 확장.',
    pillars: ['engagement'],
  },
  {
    id: 'timeline-4',
    year: '2019',
    yearDisplay: '2019 → 2026 1Q',
    isPresent: false,
    title: '프로덕트 런칭 & 라이프사이클 관리',
    description:
      '핵심 프로덕트의 Launch → Grow → Sustain Product Owner. 사전예약·프레스·채널 지원물·360° IMC 런칭부터 인마켓 확장 미디어, 중기 리프레시·세대교체 메시지까지. 본사·세일즈·딜러·에이전시 4자 조율로 프로덕트의 시장 여정 전체 책임.',
    pillars: ['brand'],
  },
  {
    id: 'timeline-5',
    year: '2017',
    yearDisplay: '2017 → 2019',
    isPresent: false,
    title: '고객 애프터 서비스 기획',
    description:
      '차량 입고 운영 및 연령별 고객 세그먼트 대응 전략 수립 지원. 서비스 접점 데이터를 마케팅 전략과 연결하는 첫 경력 — 이후 멤버십·CRM·인게이지먼트로 이어지는 고객 중심 사고의 출발점.',
    pillars: ['crm'],
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

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
  resumes: {
    ko: '/resumes/Resume_Heungchul_Kim_KO.pdf',
    en: '/resumes/Resume_Heungchul_Kim_EN.pdf',
  },
  available: '2025',
};

// ── 마스트헤드 nav (Refined 5-link) ──
export const nav = [
  { id: 'work',     label: 'Work',     href: '#work' },
  { id: 'about',    label: 'About',    href: '#about' },
  { id: 'services', label: 'Services', href: '#consulting' },
  { id: 'journal',  label: 'Notes',    href: '#notes' },
  { id: 'contact',  label: 'Contact',  href: '#contact', muted: true },
];

// ── Hero (C2 Split — 좌: 카피+버튼 / 우: Snapshot 프로필 패널) ──
export const hero = {
  eyebrow: 'Brand & Marketing Strategist · Seoul',
  titleLines: [
    { text: 'From brand strategy', accent: false },
    { text: 'to customer', accent: false },
    { text: 'engagement.', accent: true },
  ],
  buttons: [
    { label: '프로젝트 보기', href: '#work',                                  primary: true },
    { label: '이력서 PDF',    href: '/resumes/Resume_Heungchul_Kim_KO.pdf',   primary: false, external: true },
  ],
  // 우측 스냅샷 프로필 — 5초 안에 ① 경력/레벨 ② 핵심 역량 ③ 산업 ④ 다음 행동
  snapshot: {
    status: { available: true, label: 'AVAILABLE' },
    experience: {
      total: '9년+ TOTAL',
      tracks: [
        { value: '6', unit: '년+', unitAccent: true,  label: 'Brand Marketing' },
        { value: '3', unit: '년',  unitAccent: false, label: 'After Service 기획' },
      ],
    },
    metrics: [
      { value: '5', unit: '+', unitAccent: true, label: '대표 프로젝트' },
      { value: '1', label: '브랜드 컨설팅' },
    ],
    focus: [
      { en: 'Brand Strategy',                       ko: '전략·포지셔닝' },
      { en: 'Digital Transformation',                ko: 'DX' },
      { en: 'Customer Engagement & CRM',             ko: 'CX·CRM' },
      { en: 'Integrated Marketing Communications',   ko: 'IMC 수립·실행' },
    ],
    sector: 'Automotive · F&B',
    featured: {
      eyebrow: 'FEATURED CASE / 01',
      title: '브랜드 로열티 프로그램 구축',
      href: '#work-loyalty-program',
    },
  },
};

// ── Independent Work · 개인 컨설팅 (Raison D'être 중심) ──
export const consulting = {
  eyebrow: 'Independent Work',
  title: {
    line1: '인하우스 9년의 관점을,',
    line2: '소규모 브랜드의 실전으로.',
    italicLine: 2,
  },
  body:
    '5개 지점 파티셰리 브랜드 Raison D\'être의 브랜드·CX·SNS·운영을 통합 컨설팅. 인하우스 9년의 관점을 소규모 브랜드의 한정된 리소스 안에서도 작동하는 형태로 재설계.',
  badge: 'Currently consulting',
  client: 'Raison D\'être · 5개 지점 파티셰리',
  cta: {
    label: '컨설팅 의뢰',
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

// ── Capabilities (5축 매트릭스) ──
export const capabilities = {
  eyebrow: 'What I Do',
  title: {
    line1: '다섯 개의 축으로',
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
      label: 'Digital Transformation',
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
        'Localization · 글로벌 → 한국 시장 적합화',
      ],
      featuredProjectSlug: 'brand-long-term-strategy',
    },
    {
      id: 'product',
      label: 'Product Ownership & Lifecycle',
      tagline: '런칭부터 성장·유지까지 전 과정을 책임',
      bullets: [
        'Launch → Grow → Sustain 전 주기 오너십',
        'Cross-functional 정렬 · 이해관계자 조율',
        '한국 시장 맞춤 글로벌 전략 로컬라이제이션',
      ],
      featuredProjectSlug: 'product-lifecycle',
    },
  ],
};

// ── Projects (v7 — 명사형 + bullets 구조) ──
// challenge/approach/outcomeQualitative 모두 string[] (불릿 항목 배열)
export const projects = [
  {
    slug: 'loyalty-program',
    id: 'project-loyalty',
    title: '브랜드 로열티 프로그램 구축 — Lexus Amazing Members',
    pillar: 'crm',
    year: '2024–2025',
    role: 'PM (프로젝트 총괄)',
    featured: true,
    summary:
      'Lexus 글로벌 로열티 프로그램 Encore의 한국 시장 현지화 — \'Lexus Amazing Members\' 설계·런칭을 PM으로 총괄했습니다. 구매·행동 데이터로 고객 등급을 재설계하고 재구매로 이어지는 로열티 구조를 구축해, 일회성 CX를 반복 가능한 관계 자산으로 전환하고 CLV를 최적화했습니다.',
    impact: 'VIP 케어 이미지 +3.0p',
    challenge: [
      '일회성 캠페인 중심 CRM의 한계',
      '지속가능한 로열티 모델 부재',
      '등급별 상시 차별화 경험 체계 미구축',
    ],
    approach: [
      '글로벌 Encore의 한국 시장 현지화 — \'Lexus Amazing Members\' 프로그램 설계·런칭 (PM)',
      '구매·행동 데이터 기반 고객 등급 재설계',
      '재구매로 이어지는 로열티 구조 구축',
      '일회성 CX → 반복 가능한 관계 자산 전환 (CLV 최적화)',
    ],
    outcomeQualitative: [
      '\'Lexus Amazing Members\' 프로그램 성공적 런칭 (글로벌 Encore 한국 현지화)',
      'VIP 케어 이미지 지표 목표 초과 달성',
      '해당 카테고리에서 Audi 대비 브랜드 우위 확보',
    ],
    outcomeMetrics: [
      { label: 'VIP 케어 이미지', value: '12.8 → 15.8 (+3.0p)' },
      { label: '목표 대비', value: '14.6 초과 달성' },
      { label: '카테고리 순위', value: 'Audi 추월' },
    ],
    outcomeMetricsNote: '내부 브랜드 트래킹 서베이 기준',
    client: 'Toyota Motor Korea',
    assets: '[확인 필요 — 프로그램 구조도 / 등급 체계 도식 / 개인화 콘텐츠 샘플]',
  },
  {
    slug: 'after-service-dx',
    id: 'project-as-dx',
    title: '고객 애프터서비스 디지털 전환',
    pillar: 'dx',
    year: '2021–2026',
    role: 'PM (서비스 DX 총괄)',
    featured: true,
    summary:
      '대리점별로 흩어진 고객 데이터를 브랜드 앱으로 통합하고, 오프라인 100% 의존이던 정비 예약을 온라인 20%로 전환했습니다. 신차 고객 약 90%(2023 기준)가 앱에 가입했고 전체 회원 약 9만·MAU 1.5–2만을 달성했습니다.',
    impact: '오프라인 100% → 온라인 20% · 신차 90% 가입 · 회원 9만',
    challenge: [
      '온라인 상에서의 에프터서비스 경험 제공 툴 부재',
      '오프라인 100% 의존으로 인한 높은 운영 비용',
      '대리점별 흩어진 정비 이력·고객 정보',
    ],
    approach: [
      '대리점별 분산된 고객 데이터의 브랜드 앱 통합',
      '오프라인 정비 프로세스 100% 디지털화',
      'RFP·설계·런칭·운영 전 단계 PM 책임 (2021 첫 구축 → 2026 확장 일관)',
    ],
    outcomeQualitative: [
      '오프라인 100% 의존 → 온라인 정비 예약 20% 달성 (콜센터 효율화)',
      '신차 고객 약 90%(2023 기준) 앱 가입, 전체 회원 약 9만',
      '고객 데이터 단일화 → 마케팅·CRM 활용 기반',
    ],
    outcomeMetrics: [
      { label: '온라인 정비 예약', value: '20% (오프라인 100% → )' },
      { label: '신차 고객 앱 가입률', value: '약 90% (2023)' },
      { label: '전체 회원 · MAU', value: '약 9만 · 1.5–2만' },
    ],
    client: 'Toyota Motor Korea',
    assets: '[확인 필요 — 앱 스크린샷 / IA / before-after / DX 프로세스 도식]',
  },
  {
    slug: 'product-lifecycle',
    id: 'project-lifecycle',
    title: '핵심 프로덕트 런칭 & 라이프사이클 관리 — Lexus RX · LM',
    pillar: 'product',
    year: '2019–2026 Q1',
    role: 'PM (Product Owner)',
    featured: true,
    summary:
      'Lexus RX와 LM의 런칭부터 라이프사이클 관리까지 Product Owner로 총괄했습니다. RX는 사전계약 계획 대비 131%, LM은 5개월 사전계약 목표 100%를 달성하고 프리미엄 브랜드 이미지 지표를 19.5 → 22.4로 끌어올렸습니다.',
    impact: 'RX 사전계약 131% · LM 5개월 100% · 프리미엄 이미지 19.5 → 22.4',
    challenge: [
      '본사·딜러·마케팅 간 목표 충돌',
      '단기 런칭 위주의 마케팅 한계',
      '단계별 메시지·미디어 거버넌스 부재',
    ],
    approach: [
      'RX·LM Launch-Grow-Sustain 전 과정 PO 총괄',
      'Cross-functional 리더십으로 본사·딜러·마케팅 정렬',
      '한국 시장 맞춤 글로벌 전략 로컬라이제이션',
      '단계별 메시지·미디어 전략 일관 설계',
    ],
    outcomeQualitative: [
      'RX 사전계약 계획 대비 131%',
      'LM 5개월 사전계약 목표 100% 달성',
      '프리미엄 브랜드 이미지 19.5 → 22.4',
    ],
    outcomeMetrics: [
      { label: 'RX 사전계약', value: '131%' },
      { label: 'LM 사전계약', value: '5개월 100% 달성' },
      { label: '프리미엄 이미지', value: '19.5 → 22.4' },
    ],
    outcomeMetricsNote: '전년 Audi 수준 근접',
    client: 'Toyota Motor Korea',
    assets: '[확인 필요 — 런칭 캠페인 / IMC 결과물 / 미디어 리포트]',
  },
  {
    slug: 'brand-long-term-strategy',
    id: 'project-electrified',
    title: '브랜드 중장기 전략 (Electrified)',
    pillar: 'brand',
    year: '2025–현재',
    role: '전동화 TFT 코어 (2021 EV CFT →)',
    featured: false,
    isOngoing: true,
    summary:
      '2021년 EV CFT 참여부터 현재 전동화 TFT 코어 멤버까지, 전동화 전환을 일관되게 관여해 왔습니다. 단계별 시장 진입 시나리오와 인프라 전략을 설계하고, 경쟁사와 차별화된 브랜드 로드맵을 정립했습니다.',
    impact: '전동화 단계별 시나리오 · 경쟁 대비 차별화된 로드맵',
    challenge: [
      '단순 기술·스펙이 아닌 라이프스타일 기반 미래 방향성 정의 필요',
      '본사 글로벌 전략과 한국 시장 특성 간 전략적 갭',
      '전동화 전환 속 브랜드 차별화 부재',
    ],
    approach: [
      '2021 EV CFT 참여 → 2025 TFT 코어까지 전동화 이슈에 연속 관여',
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
      '정비·상담 등 서비스 접점에서 나온 데이터를 마케팅 전략과 연결하는 체계를 세웠습니다. 연령별 세그먼트에 맞춰 대응하며, 이후 데이터 기반 의사결정의 토대를 만들었습니다.',
    impact: '데이터 기반 의사결정의 토대 · 커리어 출발점',
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
    title: '브랜드 컨설팅',
    pillar: 'consulting',
    year: '2025–현재',
    role: 'Independent Consultant',
    featured: false,
    isOngoing: true,
    isPersonal: true,
    summary:
      '5개 지점 파티셰리의 브랜드·CX·SNS·운영을 통합 컨설팅. 인하우스 9년의 관점을 소규모 브랜드의 한정된 리소스 안에서도 작동하는 형태로 재설계.',
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
      '인하우스 9년의 관점을 소규모 브랜드에 적용 가능한 컨설팅 모델 정착',
      '브랜드·경험·운영·SNS의 통합 관점 제공',
    ],
    outcomeMetrics: [
      { label: '운영 지점', value: '5개' },
      { label: '담당 영역', value: 'CX · Brand · SNS · 운영' },
    ],
    client: 'Raison D\'être · 5개 지점 파티셰리',
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
  company: 'Toyota Motor Korea · Brand & Marketing PM',
  tenure: '2017–현재 · Seoul',
  body:
    'Toyota Motor Korea에서 9년. Toyota·Lexus 브랜드의 고객 관계와 프로덕트 라이프사이클을 함께 맡아 왔습니다. 서비스 접점에서 나온 데이터를 세그먼트·Tiering·로열티 구조로 전환해 CLV를 최적화했고, 프로덕트 런칭부터 성장·유지까지 전 과정을 직접 책임졌습니다. 대표 프로젝트는 두 가지입니다. 구매·행동 데이터로 고객 등급 프로그램을 재설계해 고객 관계를 자산화했고, 애프터서비스 디지털 전환에서는 분산된 대리점 데이터를 브랜드 앱으로 통합해 정비 프로세스를 100% 디지털화하고 앱 가입률 90%·MAU 2배를 달성했습니다. 글로벌 본사의 브랜드 방향을 한국 시장에 맞는 실행 전략으로 풀어내는 것이 커리어 전반의 일관된 역할이었습니다.',
};

// ── Background (Education / Languages / Tools & Skills) ──
export const background = {
  eyebrow: 'Background',
  education: {
    label: 'Education',
    school: '건국대학교',
    line: '경영학과 · 학사 · 2016 졸업',
  },
  languages: {
    label: 'Languages',
    value: '한국어 (Native) · 영어 (Fluent)',
  },
  skills: {
    label: 'Tools & Skills',
    items: [
      {
        title: 'Documentation',
        text: 'Excel · PowerPoint · Word — 기획서·보고서·데이터 자료 작성 (고급)',
      },
      {
        title: 'AI & Automation',
        text: 'ChatGPT · Claude 등 생성형 AI 활용(리서치·기획·콘텐츠 자동화), 노코드 기반 개인 포트폴리오 웹사이트 구축 및 오퍼레이션 자동화 도구 개발',
      },
    ],
  },
};

// ── Timeline (5단계 커리어) ──
export const timeline = [
  {
    id: 'timeline-1',
    year: '2025',
    yearDisplay: '2025–현재',
    isPresent: true,
    title: '브랜드 중장기 전략 수립 (Electrified)',
    description:
      '2021 EV CFT 참여 → 현재 전동화 TFT 코어 멤버. 브랜드 포지셔닝, 단계별 시나리오, 인프라 전략을 기획하고 본사 글로벌 전략을 한국 시장에 적합화.',
    pillars: ['brand'],
  },
  {
    id: 'timeline-2',
    year: '2024',
    yearDisplay: '2024–2025',
    isPresent: false,
    title: '브랜드 로열티 프로그램 구축',
    description:
      '구매·행동 데이터 기반 고객 Tiering 재설계 + 인게이지먼트 선순환 루프(Loyalty Loop) 구축. CLV 최적화를 목표로 데이터 → 세그먼트 → 경험 → 다시 데이터로 이어지는 자산화 체계 마련.',
    pillars: ['crm'],
  },
  {
    id: 'timeline-3',
    year: '2021',
    yearDisplay: '2021–2026',
    isPresent: false,
    title: '고객 애프터서비스 디지털 전환',
    description:
      '대리점별로 흩어진 고객 데이터를 브랜드 앱으로 통합, 오프라인 정비 프로세스 100% 디지털화. 오프라인 100% → 온라인 정비 예약 20%, 신차 고객 약 90%(2023 기준) 앱 가입, 전체 회원 9만·MAU 1.5–2만 달성.',
    pillars: ['dx'],
  },
  {
    id: 'timeline-4',
    year: '2019',
    yearDisplay: '2019–2026 Q1',
    isPresent: false,
    title: '핵심 프로덕트 런칭 & 라이프사이클 관리',
    description:
      'Launch → Grow → Sustain 전 과정 Product Owner 총괄. Cross-functional 리더십으로 본사·딜러·마케팅 정렬. 한국 시장 맞춤 글로벌 전략 로컬라이제이션.',
    pillars: ['product'],
  },
  {
    id: 'timeline-5',
    year: '2017',
    yearDisplay: '2017–2019',
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
  eyebrow: 'Notes & Idea',
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
      id: 'kakao',
      label: 'KakaoTalk',
      value: 'kimheungchul',
      static: true,   // 표시 전용 — 링크/CTA 없음
    },
    {
      id: 'resume-ko',
      label: 'Resume · KO',
      value: '이력서 (한국어) 다운로드',
      href: '/resumes/Resume_Heungchul_Kim_KO.pdf',
      external: true,
    },
    {
      id: 'resume-en',
      label: 'Resume · EN',
      value: 'Resume (English) Download',
      href: '/resumes/Resume_Heungchul_Kim_EN.pdf',
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

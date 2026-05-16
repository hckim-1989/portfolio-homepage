/**
 * portfolioData.js
 *
 * Single source of truth for the portfolio site content.
 * Sections: projects, timeline, about, notes, contact.
 *
 * NOTE: project-1 ~ project-3 were not included in the source fragment.
 * Stubs are provided below — replace placeholder copy when available.
 */

export const portfolioData = {
  nav: [
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "timeline", label: "Timeline", href: "#timeline" },
    { id: "about", label: "About", href: "#about" },
    { id: "notes", label: "Notes", href: "#notes" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Brand Campaign · Digital CRM · Customer Engagement",
    title: {
      line1: "브랜드 캠페인을 기획하고,",
      line2: "디지털 CRM을 설계하며,",
      line3: "고객 경험을 잇는다.",
      italicLine: 3,
    },
    subtitle:
      "브랜드 전략부터 디지털 채널 운영, 멤버십·CRM 설계, 고객 경험 프로그램까지 — 마케팅 한 직무 안의 여러 영역을 단일 PM으로 책임져 온 기록.",
    meta: "Marketing PM · 2017 → Present",
  },

  projects: [
    // TODO: project-1 — fill in from source
    {
      id: "project-1",
      featured: false,
      meta: "TODO — Year · Pillar",
      title: "TODO — 프로젝트 제목",
      thumbnailVariant: "paper",
      thumbnailPlaceholder: "TODO",
      shortDescription: "TODO — 한 줄 설명",
      pillars: ["lifecycle"],
    },
    // TODO: project-2 — fill in from source
    {
      id: "project-2",
      featured: false,
      meta: "TODO — Year · Pillar",
      title: "TODO — 프로젝트 제목",
      thumbnailVariant: "warm",
      thumbnailPlaceholder: "TODO",
      shortDescription: "TODO — 한 줄 설명",
      pillars: ["customer"],
    },
    // TODO: project-3 — fill in from source
    {
      id: "project-3",
      featured: false,
      meta: "TODO — Year · Pillar",
      title: "TODO — 프로젝트 제목",
      thumbnailVariant: "paper",
      thumbnailPlaceholder: "TODO",
      shortDescription: "TODO — 한 줄 설명",
      pillars: ["digital"],
    },
    {
      id: "project-4",
      featured: true,
      meta: "2025 — Present · Lifecycle · Customer",
      title: "브랜드 중장기 전략 (Electrified)",
      thumbnailVariant: "paper",
      thumbnailPlaceholder: "STRATEGY",
      shortDescription: "전동화 전환을 포함한 브랜드 중장기 로드맵 TFT 코어",
      pillars: ["lifecycle", "customer"],
    },
    {
      id: "project-5",
      featured: true,
      meta: "2017 — 2019 · Customer",
      title: "고객 애프터 서비스 기획",
      thumbnailVariant: "warm",
      thumbnailPlaceholder: "AFTER SERVICE",
      shortDescription: "고객 데이터·접점 운영 기반 마케팅 전략의 출발점",
      pillars: ["customer"],
    },
  ],

  timeline: [
    {
      id: "timeline-1",
      year: "2025",
      yearDisplay: "2025 → Present",
      isPresent: true,
      title: "브랜드 중장기 전략 수립 (Electrified)",
      description:
        "전동화 전환을 포함한 브랜드 중장기 로드맵 수립. TFT 코어 멤버로 브랜드 포지셔닝, 단계별 시나리오, 인프라 전략 기획. 본사 글로벌 전략을 한국 시장에 적합화.",
      pillars: ["lifecycle", "customer"],
    },
    {
      id: "timeline-2",
      year: "2024",
      yearDisplay: "2024 → 2025",
      isPresent: false,
      title: "고객 등급 프로그램 & Engagement 프로그램 개발",
      description:
        "프리미엄 고객 등급 체계 개발과 등급 연계 인게이지먼트 프로그램 기획·운영. 일회성 행사형 CX를 상시 운영형 1:1 자산화 체계로 전환. RFP 기반 파트너 선정·계약, 약관·동의서 정비, 개인화 콘텐츠 기획까지.",
      pillars: ["customer", "digital"],
    },
    {
      id: "timeline-3",
      year: "2021",
      yearDisplay: "2021",
      isPresent: false,
      title: "브랜드 애플리케이션 리뉴얼",
      description:
        "브랜드 공식 디지털 애플리케이션 통합 리뉴얼 PM. RFP 작성, 에이전시 선정, IA·콘텐츠 설계, 약관·개인정보 검토부터 런칭 운영까지 전 단계 책임. 오프라인 중심 프리미엄 경험을 디지털 1:1 채널로 확장.",
      pillars: ["digital"],
    },
    {
      id: "timeline-4",
      year: "2019",
      yearDisplay: "2019 → 2026 1Q",
      isPresent: false,
      title: "프로덕트 런칭 & 라이프사이클 관리",
      description:
        "핵심 프로덕트의 Launch → Grow → Sustain Product Owner. 사전예약·프레스·채널 지원물·360° IMC 런칭부터 인마켓 확장 미디어, 중기 리프레시·세대교체 메시지까지. 본사·세일즈·딜러·에이전시 4자 조율으로 프로덕트의 시장 여정 전체 책임.",
      pillars: ["lifecycle"],
    },
    {
      id: "timeline-5",
      year: "2017",
      yearDisplay: "2017 → 2019",
      isPresent: false,
      title: "고객 애프터 서비스 기획",
      description:
        "차량 입고 운영 및 연령별 고객 세그먼트 대응 전략 수립 지원. 서비스 접점 데이터를 마케팅 전략과 연결하는 첫 경력 — 이후 멤버십·CRM·인게이지먼트로 이어지는 고객 중심 사고의 출발점.",
      pillars: ["customer"],
    },
  ],

  about: {
    eyebrow: "About",
    title: {
      line1: "브랜드 캠페인을 기획하고,",
      line2: "디지털 CRM을 설계하며,",
      line3: "고객 경험을 잇는다.",
      italicLine: 3,
    },
    body: "브랜드 전략과 IMC 캠페인의 기획·집행, 공식 디지털 채널의 리뉴얼과 운영, 프리미엄 멤버십 프로그램의 설계와 CRM 운영, 그리고 멤버십과 연계된 고객 경험 프로그램의 기획까지 — 마케팅이라는 한 직무 안의 여러 영역을 단일 PM 또는 코어 멤버로 책임져 왔습니다. 본사·세일즈·딜러·에이전시 사이의 4자 조율은 그 과정에서 자연스러워진 일상입니다.",
    portrait: {
      image: "/images/portrait.jpg",
      placeholder: "Portrait · B&W or warm-graded",
      style: "warm-graded",
    },
  },

  notes: {
    enabled: false,
    eyebrow: "Notes",
    title: "Recent Writings",
    posts: [],
  },

  contact: {
    eyebrow: "Contact",
    // TODO — source fragment ended at `eyebrow`. Replace placeholder copy when final text is available.
    title: {
      line1: "다음 브랜드 이야기,",
      line2: "함께 만들어볼까요.",
      italicLine: 2,
    },
    body: "프로젝트 문의, 협업, 커피챗 — 어떤 주제든 편하게 메일 주세요. 영업일 기준 2일 안에 회신드립니다.",
    email: "heungkim2003@gmail.com",
    socials: [
      { id: "linkedin", label: "LinkedIn", href: "#" },
      { id: "github", label: "GitHub", href: "#" },
    ],
  },
};

export default portfolioData;

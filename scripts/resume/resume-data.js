// Resume content — v17 (homepage v16 최종본과 일치)
// KO / EN 두 언어

export const RESUME_DATA = {
  ko: {
    name: '김형철',
    latin: 'Heungchul Kim',
    role: 'Brand & Marketing Strategist',
    loc: 'Seoul',
    email: 'heungkim2003@gmail.com',
    portfolio: 'portfolio-homepage-liart.vercel.app',
    kakao: 'kimheungchul',

    L_profile: 'PROFILE',
    L_expertise: 'EXPERTISE & PROJECTS',
    L_consulting: 'BRAND CONSULTING',
    L_education: 'EDUCATION',
    L_languages: 'LANGUAGES',
    L_skills: 'TOOLS & SKILLS',
    L_contact: 'CONTACT',

    profile:
      'Toyota Motor Korea에서 9년. Toyota·Lexus 브랜드의 고객 관계와 프로덕트 라이프사이클을 함께 맡아 왔습니다. 서비스 접점에서 나온 데이터를 세그먼트·Tiering·로열티 구조로 전환해 CLV를 최적화했고, 프로덕트 런칭부터 성장·유지까지 전 과정을 직접 책임졌습니다. 대표 프로젝트는 두 가지입니다. Lexus 글로벌 로열티 프로그램 Encore의 한국 현지화로 \'Lexus Amazing Members\'를 설계·런칭했고, 애프터서비스 디지털 전환에서는 분산된 대리점 데이터를 브랜드 앱으로 통합해 정비 프로세스를 100% 디지털화하고 신차 고객 약 90%(2025 기준) 앱 가입·전체 회원 약 9만·MAU 1.5–2만을 달성했습니다.',

    employer: 'Toyota Motor Korea · Brand & Marketing PM · 2017–현재 · Seoul',

    pillars: [
      {
        title: 'CRM & Customer Loyalty',
        tagline: '데이터로 고객 관계를 자산화',
        items: [
          {
            period: '2024–2025',
            title: '브랜드 로열티 프로그램 구축 — Lexus Amazing Members',
            badge: '',
            text:
              '글로벌 Encore를 부분 수정해 적용하는 대신 한국형 프로그램을 별도로 설계하는 안을 HQ에 제안해 승인 — \'Lexus Amazing Members\' 설계와 런칭을 PM으로 총괄. 첫 대상을 플래그십 고객으로 한정해 반응을 검증한 뒤 전 모델로 확장했습니다. VIP 케어 이미지 12.8 → 15.8 (+3.0p, 목표 14.6 초과, 카테고리 Audi 추월, 내부 브랜드 트래킹 서베이 기준).',
          },
        ],
      },
      {
        title: 'Customer Engagement',
        tagline: '서비스 접점 데이터를 마케팅 자산으로',
        items: [
          {
            period: '2017–2019',
            title: '고객 브랜드 여정 서비스 기획',
            badge: '',
            text:
              '정비·상담 등 서비스 접점에서 나온 데이터를 마케팅 전략과 연결하는 체계를 세웠습니다. 연령별 세그먼트에 맞춰 대응하며, 이후 데이터 기반 의사결정의 토대를 만들었습니다.',
          },
        ],
      },
      {
        title: 'Digital Transformation',
        tagline: '오프라인을 디지털 1:1 채널로 통합',
        items: [
          {
            period: '2021–2026',
            title: '고객 애프터서비스 디지털 전환',
            badge: '',
            text:
              '대리점별로 흩어진 고객 데이터를 브랜드 앱으로 통합하고, 오프라인 100% 의존이던 정비 예약을 온라인 20%로 전환했습니다. 신차 고객 약 90%(2025 기준) 앱 가입, 전체 회원 약 9만·MAU 1.5–2만 달성.',
          },
        ],
      },
      {
        title: 'Brand Strategy',
        tagline: '중장기 방향과 시장 진입을 설계',
        items: [
          {
            period: '2025–현재',
            title: '브랜드 중장기 전략 (Electrified)',
            badge: '진행 중',
            text:
              '2021 EV CFT 참여부터 현재 전동화 TFT 코어 멤버까지 전동화 전환에 연속 관여. 단계별 시장 진입 시나리오와 인프라 전략을 설계하고, 경쟁사와 차별화된 브랜드 로드맵을 정립했습니다.',
          },
        ],
      },
      {
        title: 'Product Ownership & Lifecycle',
        tagline: '런칭부터 성장·유지까지 전 과정을 책임',
        items: [
          {
            period: '2019–2026 Q1',
            title: '핵심 프로덕트 런칭 & 라이프사이클 관리 — Lexus RX · LM',
            badge: '',
            text:
              'Lexus RX와 LM의 Product Owner로 총괄. RX 사전계약 계획 대비 131%, LM 5개월 사전계약 목표 100% 달성. 프리미엄 브랜드 이미지 19.5 → 22.4로 상승.',
          },
        ],
      },
    ],

    consulting: {
      name: 'Raison D’être',
      period: '2020–현재',
      meta: 'Patisserie · Independent Consultant · 개인 프로젝트',
      summary:
        '상품성은 뛰어나지만 고객에게 어떻게 다가갈지가 과제였던 개인 파티셰리 브랜드에, 맛 이상의 경험을 제공하는 방향으로 브랜드, CX, SNS, 운영을 아우르는 통합 컨설팅을 제안하고 실행까지 담당. 매장 1개에서 3개로 확장하는 과정에 참여 (서울 주요 상권), 인스타그램 팔로워 1만 달성.',
      services: ['Brand Identity', 'Customer Experience', 'SNS & Channel', 'Marketing Ops'],
    },

    education: { school: '건국대학교', line: '경영학과 · 학사 · 2016 졸업' },
    languages: '한국어 (Native) · 영어 (Fluent)',

    skills: [
      {
        label: 'Documentation',
        text: 'Excel · PowerPoint · Word — 기획서·보고서·데이터 자료 작성 (고급)',
      },
      {
        label: 'AI & Automation',
        text:
          'ChatGPT · Claude 등 생성형 AI 활용(리서치·기획·콘텐츠 자동화), 노코드 기반 개인 포트폴리오 웹사이트 구축 및 오퍼레이션 자동화 도구 개발',
      },
    ],

    footL: '© 2026 김형철 · Heungchul Kim',
    footR: 'Brand & Marketing Strategist',
  },

  en: {
    name: 'Heungchul Kim',
    latin: '김형철',
    role: 'Brand & Marketing Strategist',
    loc: 'Seoul',
    email: 'heungkim2003@gmail.com',
    portfolio: 'portfolio-homepage-liart.vercel.app',
    kakao: 'kimheungchul',

    L_profile: 'PROFILE',
    L_expertise: 'EXPERTISE & PROJECTS',
    L_consulting: 'BRAND CONSULTING',
    L_education: 'EDUCATION',
    L_languages: 'LANGUAGES',
    L_skills: 'TOOLS & SKILLS',
    L_contact: 'CONTACT',

    profile:
      'Nine years at Toyota Motor Korea. Owned both customer relationships and product lifecycle across the Toyota and Lexus brands. Turned service-touchpoint data into segmentation, tiering and loyalty structures to optimize CLV, and took full ownership of products from launch through growth and retention. Two flagship projects: localized Lexus’s global loyalty program Encore into ‘Lexus Amazing Members,’ and led an after-sales DX that unified fragmented dealer data into the brand app — digitizing 100% of the service process and reaching ~90% new-car app sign-up (2025), ~90k total members and 15k–20k MAU.',

    employer: 'Toyota Motor Korea · Brand & Marketing PM · 2017–Present · Seoul',

    pillars: [
      {
        title: 'CRM & Customer Loyalty',
        tagline: 'Turning customer relationships into data assets',
        items: [
          {
            period: '2024–2025',
            title: 'Brand Loyalty Program — Lexus Amazing Members',
            badge: '',
            text:
              'Proposed to HQ a Korea-specific program designed from the ground up — rather than adapting the global Encore — and won approval; led the design and launch of ‘Lexus Amazing Members’ as PM. Started with flagship-model customers to validate response, then expanded to all models. VIP-care brand image 12.8 → 15.8 (+3.0p, exceeded 14.6 target, overtook Audi in category — internal brand tracking survey).',
          },
        ],
      },
      {
        title: 'Customer Engagement',
        tagline: 'Service-touchpoint data into marketing assets',
        items: [
          {
            period: '2017–2019',
            title: 'Customer Brand Journey Service',
            badge: '',
            text:
              'Built a system linking service-touchpoint data — from maintenance and consultation — to marketing strategy. Responded by age-based segment, laying the groundwork for later data-driven decisions.',
          },
        ],
      },
      {
        title: 'Digital Transformation',
        tagline: 'Unifying offline into a digital 1:1 channel',
        items: [
          {
            period: '2021–2026',
            title: 'Customer After-Sales DX',
            badge: '',
            text:
              'Unified customer data scattered across dealers into the brand app and converted service booking from 100% offline to 20% online. Achieved ~90% new-car app sign-up (2025), ~90k total members and 15k–20k MAU.',
          },
        ],
      },
      {
        title: 'Brand Strategy',
        tagline: 'Designing long-term direction & market entry',
        items: [
          {
            period: '2025–Present',
            title: 'Brand Mid/Long-Term Strategy (Electrified)',
            badge: 'In progress',
            text:
              'Engaged in electrification from the 2021 EV CFT through the current TFT as a core member. Designed phased market-entry scenarios and infrastructure strategy, and established a brand roadmap differentiated from competitors.',
          },
        ],
      },
      {
        title: 'Product Ownership & Lifecycle',
        tagline: 'Owning products from launch through growth & retention',
        items: [
          {
            period: '2019–2026 Q1',
            title: 'Core Product Launch & Lifecycle — Lexus RX · LM',
            badge: '',
            text:
              'Owned Lexus RX and LM as Product Owner. RX pre-orders 131% of plan; LM hit 100% of the 5-month pre-order target. Premium brand image lifted from 19.5 → 22.4.',
          },
        ],
      },
    ],

    consulting: {
      name: 'Raison D’être',
      period: '2020–Present',
      meta: 'Patisserie · Independent Consultant · Personal project',
      summary:
        'Integrated consulting across brand, CX, SNS and operations for an independent patisserie with strong products but no clear way to reach customers — proposing and executing an experience-first direction beyond taste. Participated in the brand’s expansion from one store to three across key Seoul districts; grew Instagram to 10k followers.',
      services: ['Brand Identity', 'Customer Experience', 'SNS & Channel', 'Marketing Ops'],
    },

    education: { school: 'Konkuk University', line: 'B.B.A., Business Administration · Graduated 2016' },
    languages: 'Korean (Native) · English (Fluent)',

    skills: [
      {
        label: 'Documentation',
        text: 'Excel · PowerPoint · Word — proposals, reports & data decks (advanced)',
      },
      {
        label: 'AI & Automation',
        text:
          'Generative AI (ChatGPT, Claude) for research, planning & content automation; built a personal portfolio website and AI-powered operations-automation tools (no-code)',
      },
    ],

    footL: '© 2026 Heungchul Kim · 김형철',
    footR: 'Brand & Marketing Strategist',
  },
};

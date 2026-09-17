// KO resume data — 표 구조 (사용자 최종본 문구 기준, 전동화 TFT 행은 사용자 결정으로 제외)
// 레이아웃: render-resume-table.js (EN과 동일 디자인 시스템)

export const RESUME_KO = {
  name: '김형철',
  latin: 'Heungchul Kim',
  loc: 'Seoul',
  email: 'heungkim2003@gmail.com',
  portfolio: 'portfolio-homepage-liart.vercel.app',
  kakao: 'kimheungchul',

  L_profile: 'PROFILE',

  profile:
    '한 브랜드에서 9년, 브랜드와 고객 마케팅을 맡아 네 개 부서를 거치며 매번 새로운 영역에 도전했습니다. 그렇게 쌓인 경험을 회사 밖에서도 써 보고 싶어 2020년부터 개인 매장 컨설팅을 시작했고, 지금도 이어가고 있습니다. 익숙한 자리에 머무는 대신 다음 것을 시도하는 선택을 해 왔고, 그 선택의 무게를 알기에 제가 내린 결정은 끝까지 책임집니다. 압도적인 성과는 존중과 긍정적인 자세에서 나온다고 믿습니다. 아직 해 보지 않은 영역에서 결과를 만드는 것이 제가 일에서 얻는 가장 큰 보람이고, 그래서 앞으로도 새로운 영역에 도전하며 그 결과를 끝까지 책임지는 사람으로 성장하고 싶습니다.',

  sections: [
    {
      label: 'WORK EXPERIENCE',
      org: 'Toyota Motor Korea, Seoul',
      period: '2017 – 현재',
      role: 'Brand & Marketing PM, Lexus',
      table: {
        headers: ['핵심 역량', '프로젝트', '성과'],
        rows: [
          {
            competency: 'Go-to-Market 전략',
            items: [
              {
                project: '플래그십 모델 런칭 총괄 (2024)',
                result: '사전계약 목표 100% 달성, 프리미엄 브랜드 이미지 +2.9p (19.5 → 22.4)',
              },
              {
                project: '주력 SUV 모델 런칭 (2022)',
                result: '사전계약 131% 달성, 목표 초과',
              },
            ],
          },
          {
            competency: '고객 세그먼테이션과 CRM 전략',
            items: [
              {
                project: 'Lexus Amazing Members 설계와 런칭 (2024–2025)',
                result: 'VIP 케어 이미지 +3.0p (12.8 → 15.8), 카테고리 내 Audi 추월',
              },
            ],
          },
          {
            competency: '디지털 채널 PM',
            items: [
              {
                project: '브랜드 앱 통합 (2021–2026)',
                result: '정비 예약 온라인 전환 0 → 20%, 신차 오너 가입 약 90%, 회원 약 9만',
              },
            ],
          },
        ],
      },
    },
    {
      label: 'INDEPENDENT CONSULTING',
      org: '개인 파티셰리 브랜드, Seoul',
      period: '2020 – 현재',
      role: 'Brand Consultant',
      table: {
        headers: ['핵심 역량', '프로젝트', '성과'],
        rows: [
          {
            competency: '브랜드 컨설팅',
            items: [
              {
                project: '브랜드, CX, SNS, 운영 통합 컨설팅',
                result: '서울 주요 상권 매장 확장 참여, 인스타그램 팔로워 1만',
              },
            ],
          },
        ],
      },
    },
  ],

  education: { label: 'EDUCATION', school: '건국대학교', line: '경영학과, 학사, 2016 졸업' },
  languages: { label: 'LANGUAGES', value: '한국어 Native, 영어 Fluent' },
  tools: {
    label: 'TOOLS',
    value:
      'ChatGPT, Claude 등 생성형 AI 활용(리서치, 기획, 콘텐츠 자동화), 노코드 기반 개인 포트폴리오 웹사이트 구축 및 오퍼레이션 자동화 도구 개발',
  },

  footer: '© 2026 김형철 Heungchul Kim',
};

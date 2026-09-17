// EN resume data — table layout, mirrors the 국문 최종본 구조
// (PROFILE / WORK EXPERIENCE 표 / INDEPENDENT CONSULTING 표 / EDUCATION / LANGUAGES / TOOLS)
// 전동화(TFT) 항목은 사용자 결정으로 제외

export const RESUME_EN = {
  name: 'Heungchul Kim',
  latin: '김형철',
  loc: 'Seoul',
  email: 'heungkim2003@gmail.com',
  portfolio: 'portfolio-homepage-liart.vercel.app',
  kakao: 'kimheungchul',

  L_profile: 'PROFILE',

  profile:
    'Nine years at one brand, working across four departments in brand and customer marketing — each move a step into new territory. Wanting to apply that experience beyond the company, I began consulting for an independent store in 2020 and continue that work today. I have chosen the next challenge over staying comfortable, and because I know the weight of that choice, I see every decision through to the end. I believe outstanding results come from respect and a positive attitude. Delivering results in areas that are new to me is what I find most rewarding, and I intend to keep growing that way — taking on the unfamiliar and owning the outcome.',

  sections: [
    {
      label: 'WORK EXPERIENCE',
      org: 'Toyota Motor Korea, Seoul',
      period: '2017 – Present',
      role: 'Brand & Marketing PM, Lexus',
      table: {
        headers: ['Core Competency', 'Project', 'Results'],
        rows: [
          {
            competency: 'Go-to-Market Strategy',
            items: [
              {
                project: 'Flagship model launch (2024)',
                result: 'Pre-orders hit 100% of target; premium brand image +2.9p (19.5 → 22.4)',
              },
              {
                project: 'Core SUV model launch (2022)',
                result: 'Pre-orders 131% of plan, exceeding target',
              },
            ],
          },
          {
            competency: 'Customer Segmentation & CRM Strategy',
            items: [
              {
                project: 'Design & launch of Lexus Amazing Members (2024–2025)',
                result: 'VIP-care brand image +3.0p (12.8 → 15.8), overtook Audi in the category',
              },
            ],
          },
          {
            competency: 'Digital Channel PM',
            items: [
              {
                project: 'Brand app integration (2021–2026)',
                result: 'Online service booking 0 → 20%; ~90% new-car owner sign-up; ~90k members',
              },
            ],
          },
        ],
      },
    },
    {
      label: 'INDEPENDENT CONSULTING',
      org: 'Independent patisserie brand, Seoul',
      period: '2020 – Present',
      role: 'Brand Consultant',
      table: {
        headers: ['Core Competency', 'Project', 'Results'],
        rows: [
          {
            competency: 'Brand Consulting',
            items: [
              {
                project: 'Integrated consulting across brand, CX, social media and operations',
                result: 'Store expansion across Seoul’s major retail districts; 10k Instagram followers',
              },
            ],
          },
        ],
      },
    },
  ],

  education: { label: 'EDUCATION', school: 'Konkuk University', line: 'B.B.A. in Business Administration, 2016' },
  languages: { label: 'LANGUAGES', value: 'Korean (native), English (fluent)' },
  tools: {
    label: 'TOOLS',
    value:
      'Generative AI (ChatGPT, Claude) for research, planning and content automation; built a personal portfolio website and AI-powered operations automation tools (no-code)',
  },

  footer: '© 2026 Heungchul Kim 김형철',
};

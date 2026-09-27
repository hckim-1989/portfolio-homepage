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
    'Nine years at one brand, working across four departments in brand and customer marketing, each move a step into new territory. Wanting to apply that experience beyond the company, I began consulting for an independent store in 2020 and continue that work today. I have chosen the next challenge over staying comfortable, and because I know the weight of that choice, I see every decision through to the end. I believe outstanding results come from respect and a positive attitude. Delivering results in areas that are new to me is what I find most rewarding, and I intend to keep growing that way: taking on the unfamiliar and owning the outcome.',

  sections: [
    {
      label: 'WORK EXPERIENCE',
      org: 'Toyota Motor Korea, Seoul',
      period: '2017 - Present',
      role: 'Brand & Marketing PM, Lexus',
      table: {
        headers: ['Core Competency', 'Project', 'Results'],
        rows: [
          {
            competency: 'Go-to-Market Strategy',
            items: [
              {
                project: 'Flagship model launch (2024)',
                desc: 'Redefined the launch goal from sales volume to brand image; the validated two-phase process became the standard for later launches',
                results: [
                  { v: '100%', t: 'of the 5-month pre-order target' },
                  { v: '+2.9p', t: 'premium brand image, 19.5 → 22.4' },
                ],
              },
              {
                project: 'Core SUV model launch (2022)',
                results: [{ v: '131%', t: 'pre-orders vs. plan' }],
              },
            ],
          },
          {
            competency: 'Customer Segmentation & CRM Strategy',
            items: [
              {
                project: 'Design & launch of Lexus Amazing Members (2024-2025)',
                desc: 'Owner-only three-tier structure with experiential benefits, designed around Korean owner expectations and validated with flagship owners first',
                results: [
                  { v: '+3.0p', t: 'VIP-care image, 12.8 → 15.8' },
                  { v: 'Overtook', t: 'a competing premium brand in the category' },
                ],
              },
            ],
          },
          {
            competency: 'Digital Channel PM',
            items: [
              {
                project: 'Brand app integration (2021-2026)',
                desc: 'Built app sign-up into vehicle delivery, moved maintenance booking online, linked KPIs to dealer evaluations',
                results: [
                  { v: '0 → 20%', t: 'online maintenance booking' },
                  { v: '~90%', t: 'new-car owner sign-up, ~90k members' },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      label: 'INDEPENDENT CONSULTING',
      org: 'Independent patisserie brand, Seoul',
      period: '2020 - Present',
      role: 'Brand Consultant',
      table: {
        headers: ['Core Competency', 'Project', 'Results'],
        rows: [
          {
            competency: 'Brand Consulting',
            items: [
              {
                project: 'Integrated consulting across brand, CX, social media and operations',
                desc: 'Established the brand identity, landed TV appearances and department-store pop-ups, designed expansion around a single production base',
                results: [
                  { v: 'Store expansion', t: 'across Seoul’s major retail districts' },
                  { v: '10k', t: 'Instagram followers' },
                ],
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

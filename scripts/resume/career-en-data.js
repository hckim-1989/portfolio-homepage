// EN career doc data — 국문 최종본(career-data.js)의 영문 대응
// 공통 틀: Background & Problem (As-Is/To-Be/Gap) / Approach / Target & Action Plan / Results & Follow-through

export const CAREER_EN = {
  docTitle: 'Career History',
  subtitle: 'Heungchul Kim 김형철',

  name: 'Heungchul Kim',
  latin: '김형철',
  loc: 'Seoul',
  email: 'heungkim2003@gmail.com',
  portfolio: 'portfolio-homepage-liart.vercel.app',
  kakao: 'kimheungchul',

  L_summary: 'SUMMARY',

  summaryTable: {
    headers: ['Project', 'Core Competency', 'Key Results'],
    rows: [
      ['Brand flagship model launch', 'Go-to-Market Strategy', 'Pre-orders hit 100% of target; premium brand image +2.9p (19.5 → 22.4)'],
      ['Premium customer loyalty program', 'Customer Segmentation & CRM Strategy', 'VIP-care image +3.0p (12.8 → 15.8), overtook Audi in the category'],
      ['Brand app integration PM', 'Digital Channel PM', 'Online service booking 0 → 20%; ~90% new-car owner sign-up; ~90k members'],
      ['Integrated brand consulting for an independent café', 'Brand Consulting', 'Store expansion across Seoul’s major retail districts; 10k Instagram followers'],
    ],
  },

  projects: [
    {
      num: '01',
      title: 'Brand Flagship Model Launch',
      period: '2024',
      sections: [
        {
          label: 'Background & Problem',
          rows: [
            { tag: 'As-Is', text: 'A new customer persona with purchase motivations different from existing lineup owners; dealers had no experience selling to this persona' },
            { tag: 'To-Be', text: 'Raise awareness of the flagship model and contribute to sales' },
            { tag: 'Gap', text: 'Persona definition and a dealer sales-message standard' },
          ],
        },
        {
          label: 'Approach',
          steps: [
            { title: 'Dual KPIs', desc: 'Set pre-order volume and premium image metrics together, benchmarked against competing premium brands’ prior-year figures' },
            { title: 'Persona redefinition', desc: 'Defined the target as luxury-lifestyle consumers instead of relying on purchase history' },
            { title: 'Two-phase launch', desc: 'Ran a June pre-launch to secure pre-orders and read market response, then locked the July official-launch messaging on that basis' },
            { title: 'Journey integration', desc: 'Designed awareness through advertising, contact through experience programs, and conversion through dealers' },
            { title: 'Dealer standardization', desc: 'Standardized sales messaging with model sales kits, matched to online content' },
          ],
        },
        {
          label: 'Target & Action Plan',
          bullets: [
            'Target: hit the 5-month pre-order goal; premium brand image 19.5 → 22.2 (2024)',
            'Integrated design of the launch plan, advertising strategy and customer experience programs',
            'Ran pre-launch and official launch as two phases',
            'Produced and distributed model sales kits and model content for online channels and dealers',
            'Established the two-phase launch process with related teams',
          ],
        },
        {
          label: 'Results & Follow-through',
          bullets: [
            'Hit 100% of the 5-month pre-order goal; premium brand image 22.4 (target 22.2)',
            'Applied the two-phase launch process to subsequent model launches; sales kits became the standard format',
          ],
        },
      ],
    },
    {
      num: '02',
      title: 'Premium Customer Loyalty Program (Lexus Amazing Members)',
      period: '2024–2025',
      sections: [
        {
          label: 'Background & Problem',
          rows: [
            { tag: 'As-Is', text: 'The global loyalty program did not match Korean owners’ expectations; VIP-care image at 12.8, behind competing premium brands' },
            { tag: 'To-Be', text: 'Owner perception that the premium experience continues after purchase' },
            { tag: 'Gap', text: 'No tiers or benefits designed around Korean owners' },
          ],
        },
        {
          label: 'Approach',
          steps: [
            { title: 'Owner segmentation', desc: 'Classified owners by three criteria — purchase model, purchase timing, relationship status' },
            { title: 'Owner-only three-tier structure', desc: 'Three tiers — first flagship delivery, any-model delivery, and repurchase with continued service visits; no entry tier for non-owners' },
            { title: 'Experiential benefits', desc: 'Built benefits as lifestyle experience programs instead of price discounts, preserving premium positioning' },
            { title: 'App-only operation', desc: 'Limited tier status checks and benefit use to the brand app, driving app sign-ups and building owner data' },
            { title: 'Flagship-first rollout', desc: 'Proposed a Korea-specific design to HQ and won approval; applied to flagship owners first, using response data to time the all-model expansion' },
          ],
        },
        {
          label: 'Target & Action Plan',
          bullets: [
            'Target: VIP-care image 12.8 → 14.6 (2024); validate with flagship owners, then expand to all models',
            'Tier redesign based on purchase and service data',
            'Design and operation of tier-specific lifestyle programs',
            'Content production; system and dealer readiness',
          ],
        },
        {
          label: 'Results & Follow-through',
          bullets: [
            'VIP-care image 15.8 (exceeded 14.6 target); overtook Audi in the category (internal brand tracking survey)',
            'Expanded the tier and benefit structure validated with flagship owners to owners of all models',
          ],
        },
      ],
    },
    {
      num: '03',
      title: 'Brand App Integration PM',
      period: '2021–2026',
      sections: [
        {
          label: 'Background & Problem',
          rows: [
            { tag: 'As-Is', text: 'Owner data scattered across dealers; service touchpoints including maintenance booking 100% offline' },
            { tag: 'To-Be', text: 'A 1:1 connection between brand and owner; post-purchase service moved online' },
            { tag: 'Gap', text: 'Data integration and service digitization' },
          ],
        },
        {
          label: 'Approach',
          steps: [
            { title: 'Sign-up at delivery', desc: 'Built app sign-up into the vehicle delivery process, then made the app the only place to check loyalty tiers — strengthening the reason to join' },
            { title: 'Maintenance booking first', desc: 'Formed app-usage habits at the highest-frequency touchpoint, accumulating service-visit history as customer data' },
            { title: 'Two fixed KPIs', desc: 'New-car owner registration rate and online booking share; feature development ordered by KPI contribution, not by request order' },
            { title: 'Mileage integration', desc: 'Points earned at five touchpoints — new sign-up, referral, repurchase, service visit, online shopping' },
            { title: 'Phased integration', desc: 'Brought dealer data together step by step, working with the product organization and dealers' },
          ],
        },
        {
          label: 'Target & Action Plan',
          bullets: [
            'Target: 90% new-car owner app sign-up; 20% online booking share',
            'Integrated dealer-held owner data into the brand app',
            'Moved service touchpoints online, starting with maintenance booking',
            'Integrated the loyalty program and mileage into the app',
            'App redesign',
          ],
        },
        {
          label: 'Results & Follow-through',
          bullets: [
            'Online booking share 20%; ~90% new-car owner app sign-up (as of 2025); ~90k total members; 15k–20k MAU',
            'Expanded the unified app into the common platform for subsequent loyalty and service programs',
          ],
        },
      ],
    },
    {
      num: '04',
      title: 'Integrated Brand Consulting for an Independent Café',
      period: '2020–Present',
      sections: [
        {
          label: 'Background & Problem',
          rows: [
            { tag: 'As-Is', text: 'During COVID: proven products but no way to reach customers, and survival at stake' },
            { tag: 'To-Be', text: 'A brand recognized as an experience beyond taste, with stable operations and expansion built on that recognition' },
            { tag: 'Gap', text: 'No channel to reach customers, no structure to expand' },
          ],
        },
        {
          label: 'Approach',
          steps: [
            { title: 'Designed for a small brand', desc: 'No ad budget, no marketing staff, one to two hours a day — chose only methods sustainable under those conditions' },
            { title: 'Exposure through external collaborations', desc: 'Proposed and landed TV appearances, department-store pop-ups and similar opportunities instead of paid advertising; that visibility triggered the store expansion' },
            { title: 'Production efficiency', desc: 'Unified logo, packaging and store tone first, then expanded sales locations from a single production base' },
          ],
        },
        {
          label: 'Target & Action Plan',
          bullets: [
            'Target: no quantitative goal — stable operations and expansion, starting from survival through COVID',
            'Redesigned logo, packaging and store tone',
            'Proposed and ran external collaborations such as TV appearances and department-store pop-ups',
            'Established Instagram content tone and operating principles',
          ],
        },
        {
          label: 'Results & Follow-through',
          bullets: [
            'Participated in store expansion across Seoul’s major retail districts through brand, collaboration and operations design; 10k Instagram followers',
            'Kept one brand standard — no store-specific menus or promotions — so the experience stays consistent as stores grow',
          ],
        },
      ],
    },
  ],

  footL: '© 2026 Heungchul Kim 김형철',
  footR: '',
};

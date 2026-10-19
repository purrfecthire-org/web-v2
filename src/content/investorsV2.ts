import type { Lang } from './index';
import { BOOKING_B2B } from './links';

// Portfolio support is a proposed engagement format, not a claim of an
// existing fund partnership. Confirm scope, fees and cadence per engagement.
// Do not add partner logos, portfolio results or case studies without sources.
export const INVESTORS_SEARCH_READ = BOOKING_B2B;

export interface InvestorsV2Content {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    headline: string;
    body: string;
    cta: string;
    note: string;
    prompt: { label: string; title: string; body: string; items: string[] };
  };
  audience: { eyebrow: string; headline: string; body: string };
  support: {
    eyebrow: string;
    headline: string;
    areas: { id: string; title: string; body: string }[];
  };
  founders: { eyebrow: string; headline: string; body: string; items: { title: string; body: string }[] };
  officeHours: { eyebrow: string; headline: string; body: string; detailLabel: string; points: string[]; note: string };
  approach: { eyebrow: string; headline: string; body: string };
  evidence: { eyebrow: string; headline: string; body: string; links: { title: string; body: string; label: string; href: string; ctaId: string }[] };
  questions: { eyebrow: string; headline: string; items: { question: string; answer: string }[] };
  close: { headline: string; body: string; cta: string; note: string };
}

export const investorsV2En: InvestorsV2Content = {
  meta: {
    title: 'Portfolio hiring support for investors | Purrfect Hire',
    description: 'Help portfolio founders define critical roles, understand the relevant market and assess senior candidates. Discuss Search Calibration, executive search and an agreed office-hours format.',
  },
  hero: {
    eyebrow: 'For investors · Portfolio hiring',
    headline: 'Help your founders make the hire the company needs next.',
    body: 'Senior and executive hiring support for funds, platform teams and talent partners. Start with the business problem behind the role.',
    cta: 'Discuss portfolio hiring',
    note: 'A free 20-minute introductory call. No commitment.',
    prompt: {
      label: 'Start here',
      title: 'What does this hire need to change?',
      body: 'Examine the search before committing resources.',
      items: [
        'The role’s problem and stage.',
        'The relevant talent market.',
        'The evidence a decision needs.',
      ],
    },
  },
  audience: {
    eyebrow: 'For your platform team',
    headline: 'Hiring support grounded in the company.',
    body: 'Help founders define a leadership role, reach an unfamiliar market or compare candidates. We work with the hiring team to establish what the decision requires.',
  },
  support: {
    eyebrow: 'Ways to support your portfolio',
    headline: 'Start with the hiring decision.',
    areas: [
      {
        id: '01',
        title: 'Search Calibration',
        body: 'Define the role, relevant market and assessment questions against the company’s stage and problem. Included in the search engagement, with no separate Calibration purchase.',
      },
      {
        id: '02',
        title: 'Critical senior searches',
        body: 'Senior and executive searches across engineering, product, go-to-market and leadership, with candidate recommendations showing evidence and open questions.',
      },
      {
        id: '03',
        title: 'Founder office hours',
        body: 'Focused conversations for founders facing a changing role, uncertain assessment or stalled search, with a next step within the scope agreed with your team.',
      },
    ],
  },
  founders: {
    eyebrow: 'What reaches the founder',
    headline: 'Context for the next hiring decision.',
    body: 'For a specific hiring problem, the agreed scope can include:',
    items: [
      { title: 'A clearer role', body: 'The required change, decisions and scope the company can support.' },
      { title: 'A read on the market', body: 'Where the profile sits, candidate expectations and reasons to consider the company.' },
      { title: 'A way to assess the evidence', body: 'Role-specific questions separating observed evidence, reported experience and what remains untested.' },
      { title: 'A considered next step', body: 'A reasoned recommendation: revise the role, improve assessment or open a search.' },
    ],
  },
  officeHours: {
    detailLabel: 'How office hours work',
    eyebrow: 'An agreed format',
    headline: 'Office hours around a real hiring question.',
    body: 'We can design office hours for your portfolio. Agree eligibility, schedule and scope with Purrfect before introducing the format to founders.',
    points: [
      'Start with a live role or decision.',
      'Identify the evidence or action needed next.',
      'Scope deeper assessment or search separately with the company.',
    ],
    note: 'Agree cadence, availability, fees and follow-on support with your team.',
  },
  approach: {
    eyebrow: 'Working with your team',
    headline: 'Scope and responsibilities.',
    body: 'Agree responsibilities, fees and introductions with your team. Tell founders what is included before starting; any search is agreed directly with the company.',
  },
  evidence: {
    eyebrow: 'Look at the work',
    headline: 'See how we approach a search.',
    body: 'Explore our search approach and evidence before discussing an arrangement.',
    links: [
      {
        title: 'Search Calibration',
        body: 'How we examine the role, market and assessment questions.',
        label: 'See how we calibrate a search',
        href: '/search-calibration',
        ctaId: 'investors-search-calibration',
      },
      {
        title: 'A search example',
        body: 'An anonymized backend search and its documented follow-up.',
        label: 'See the search example',
        href: '/for-companies#selected-searches',
        ctaId: 'investors-selected-searches',
      },
    ],
  },
  questions: {
    eyebrow: 'Before we begin',
    headline: 'Agree these upfront.',
    items: [
      {
        question: 'Is this an exclusive portfolio arrangement?',
        answer: 'Each company decides whether to commission a search; an introduction creates no obligation.',
      },
      {
        question: 'Who pays for the work?',
        answer: 'Search engagements use a success fee or a monthly team. Agree portfolio support scope and fees separately.',
      },
      {
        question: 'What information is shared with the fund?',
        answer: 'Agree reporting boundaries with the people involved. Hiring information, candidate details and private advisory remain confidential unless sharing is specifically agreed.',
      },
    ],
  },
  close: {
    headline: 'Which portfolio hiring decision needs a clearer read?',
    body: 'Bring the companies, roles and hiring obstacles. We’ll discuss where to start.',
    cta: 'Discuss portfolio hiring',
    note: 'Start with a free initial read. Agree scope and terms before an engagement.',
  },
};

export const getInvestorsV2 = (_lang: Lang): InvestorsV2Content => investorsV2En;

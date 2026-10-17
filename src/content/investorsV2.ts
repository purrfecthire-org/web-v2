import type { Lang } from './index';

// Portfolio support is a proposed engagement format, not a claim of an
// existing fund partnership. Confirm scope, fees and cadence per engagement.
// Do not add partner logos, portfolio results or case studies without sources.
export const INVESTORS_SEARCH_READ = '/search-read?audience=investors';

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
    areas: { id: string; title: string; body: string; outcomeLabel: string; outcome: string }[];
  };
  founders: { eyebrow: string; headline: string; body: string; items: { title: string; body: string }[] };
  officeHours: { eyebrow: string; headline: string; body: string; points: string[]; note: string };
  approach: { eyebrow: string; headline: string; steps: { title: string; body: string }[] };
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
    body: 'Senior and executive hiring support for funds, platform teams and talent partners. Start with the role and the business problem, then decide what kind of support the company needs.',
    cta: 'Discuss portfolio hiring',
    note: 'Tell us about the companies you support and the hiring decisions they are facing.',
    prompt: {
      label: 'A useful place to start',
      title: 'What does this hire need to change?',
      body: 'We help founders examine the search before committing time and resources to it.',
      items: [
        'The problem and stage behind the role.',
        'The market the company needs to reach.',
        'The evidence that would support a hiring decision.',
      ],
    },
  },
  audience: {
    eyebrow: 'For your platform team',
    headline: 'A hiring conversation grounded in the company’s operating reality.',
    body: 'Portfolio companies can need different kinds of help at different moments: defining a leadership role, reaching a market they do not know or assessing people whose experience is hard to compare. We work with the founder and the relevant hiring team to establish what the decision requires.',
  },
  support: {
    eyebrow: 'Ways to support your portfolio',
    headline: 'Start with the decision your founders need to make.',
    areas: [
      {
        id: '01',
        title: 'Search Calibration',
        body: 'Pressure-test an open role against the company’s stage, the problem it must solve and the relevant talent market.',
        outcomeLabel: 'The founder gets',
        outcome: 'An initial view of the profile, candidate expectations, what may move the right people and the questions that should guide evaluation.',
      },
      {
        id: '02',
        title: 'Critical senior searches',
        body: 'Work through a senior or executive search across engineering, product, go-to-market or leadership. Define the requirements, approach the relevant market and assess the evidence.',
        outcomeLabel: 'The founder gets',
        outcome: 'A search built around the business problem, with candidate recommendations that make the evidence and open questions visible.',
      },
      {
        id: '03',
        title: 'Founder office hours',
        body: 'Agree a format with your platform team for founders to bring a live hiring question: a changing role, an uncertain assessment or a search that has stalled.',
        outcomeLabel: 'The founder gets',
        outcome: 'A focused conversation and a clearer next step. Scope, scheduling and any follow-on work are agreed with your team.',
      },
    ],
  },
  founders: {
    eyebrow: 'What reaches the founder',
    headline: 'Practical context for the next hiring decision.',
    body: 'The starting point is a specific role or hiring problem. Depending on the agreed scope, the work can include:',
    items: [
      { title: 'A clearer role', body: 'What the person needs to change, the decisions they will face and the scope the company can support today.' },
      { title: 'A read on the market', body: 'Where the profile sits, what candidates are likely to expect and what could make the opportunity relevant to them.' },
      { title: 'A way to assess the evidence', body: 'Questions tied to the role, with a clear distinction between what was observed, what was reported and what remains to be validated.' },
      { title: 'A considered next step', body: 'Whether to revise the role, improve the assessment or open a dedicated search, with the reasoning behind that recommendation.' },
    ],
  },
  officeHours: {
    eyebrow: 'A format we can agree together',
    headline: 'Office hours with a real hiring question at the centre.',
    body: 'We can design a focused office-hours format around the needs of your portfolio. The fund and Purrfect agree who it serves, how it is scheduled and what is included before introducing it to founders.',
    points: [
      'A live role or hiring decision provides the starting context.',
      'The conversation identifies the question, evidence or action that would move the decision forward.',
      'Any deeper assessment or search is scoped separately with the company.',
    ],
    note: 'Cadence, availability, fees and follow-on support depend on the arrangement agreed with your team.',
  },
  approach: {
    eyebrow: 'Working with your team',
    headline: 'Agree the format. Keep the founder’s decision clear.',
    steps: [
      { title: 'Understand the portfolio need', body: 'Discuss the stages, roles and recurring hiring questions your team is seeing. Choose where a more detailed read would be useful.' },
      { title: 'Set the scope', body: 'Agree the format, responsibilities, fees and introduction process. Founders should know what the conversation includes before it starts.' },
      { title: 'Work with the company', body: 'Examine the hiring problem with the founder. If a search is appropriate, agree the engagement directly and keep the company involved in the decisions.' },
    ],
  },
  evidence: {
    eyebrow: 'Look at the work',
    headline: 'See how we approach a search.',
    body: 'Explore the questions that shape a search and the evidence behind our work before discussing a portfolio arrangement.',
    links: [
      {
        title: 'Search Calibration',
        body: 'How we examine the role, the market and the questions that will guide the search.',
        label: 'Explore Search Calibration',
        href: '/search-calibration',
        ctaId: 'investors-search-calibration',
      },
      {
        title: 'Selected searches',
        body: 'The company context, hiring problem and work behind selected searches.',
        label: 'See selected searches',
        href: '/for-companies#selected-searches',
        ctaId: 'investors-selected-searches',
      },
    ],
  },
  questions: {
    eyebrow: 'Before we begin',
    headline: 'A few points to agree upfront.',
    items: [
      {
        question: 'Is this an exclusive portfolio arrangement?',
        answer: 'We discuss the arrangement with your team. A founder introduction does not require the company to commission a search, and each company decides whether the proposed support fits.',
      },
      {
        question: 'Who pays for the work?',
        answer: 'We agree the scope, fees and commissioning party before work begins. A portfolio-level format and a search commissioned by an individual company can have different terms.',
      },
      {
        question: 'What information is shared with the fund?',
        answer: 'We agree the purpose and boundaries of any reporting with the people involved. Company hiring information, candidate details and private advisory conversations remain confidential unless there is a specific, agreed reason to share them.',
      },
    ],
  },
  close: {
    headline: 'Where could a clearer hiring decision help your portfolio?',
    body: 'Tell us about the companies you support, the roles in question and where your team sees founders getting stuck. We can discuss the right starting point.',
    cta: 'Discuss portfolio hiring',
    note: 'Start with the portfolio need. Scope and terms are agreed before an engagement begins.',
  },
};

export const getInvestorsV2 = (_lang: Lang): InvestorsV2Content => investorsV2En;

import type { Lang } from './index';

export const SEARCH_CALIBRATION_CTA = '/search-read';

// The planning exercise and candidate below are explicitly fictional. The
// salary references alone come from the linked public job advertisements,
// reviewed 17 October 2026. No client or candidate outcome is represented.
export const searchCalibrationEn = {
  meta: {
    title: 'Search Calibration · Define the hire before the search | Purrfect Hire',
    description: 'Before you open the search, define the problem, the evidence and the relevant talent market. See an illustrative Search Calibration and discuss your role with Purrfect Hire.',
  },
  hero: {
    eyebrow: 'Before the search',
    headline: 'Search Calibration.',
    body: 'Before you open the search, we help you define what this person must solve, what evidence proves they can do it and where that talent sits.',
    cta: 'Get a Search Calibration',
    note: 'Bring the role and the problem behind it. We agree the scope before work begins.',
  },
  deliverables: {
    eyebrow: 'What we work through',
    headline: 'A clearer decision before you start sourcing.',
    items: [
      { title: 'The problem and the role', body: 'What needs to change, the seniority required and which responsibilities belong together.' },
      { title: 'The evidence', body: 'What someone would need to demonstrate, with three questions to guide an initial assessment.' },
      { title: 'The relevant market', body: 'Where to look, what the working model requires and which compensation assumptions need checking.' },
      { title: 'The recommendation', body: 'What to keep, change or validate in the role before committing to the search.' },
    ],
  },
  sample: {
    eyebrow: 'See the thinking',
    headline: 'An illustrative Search Calibration.',
    disclosure: 'Illustrative example. Fictional company; this is a planning exercise, not a client case.',
    title: 'Founding Engineer · Seed-stage startup',
    context: 'A fictional software startup needs a hands-on engineer to ship its product and customer integrations in San Francisco.',
    facts: [
      { label: 'Company stage', value: 'Seed' },
      { label: 'Role under discussion', value: 'Founding Engineer' },
      { label: 'Working model', value: 'In person · San Francisco' },
    ],
    problem: {
      label: 'The business problem',
      body: 'The founders need to turn customer requests into a product that can be shipped and supported. Integrations are interrupting core product work. The draft role combines product engineering, integration delivery, architecture and responsibility for managing a future engineering team.',
    },
    role: {
      label: 'The role hypothesis',
      body: 'Start with a senior, hands-on individual contributor who can own a product area and its integrations from definition through production. The founder retains people management and hiring-plan decisions. Revisit the leadership mandate when there is a team and a management problem to solve.',
    },
    market: {
      label: 'Where to look',
      body: 'Search the San Francisco market for engineers who have shipped full-stack products and external integrations in small teams. Confirm willingness to work in person early. Examine direct contribution, customer contact and production responsibility before filtering by an employer name.',
    },
    compensation: {
      label: 'A compensation assumption to test',
      range: 'USD 150,000–250,000 annual base + equity',
      body: 'An initial planning range for this fictional role, subject to the final scope, working model and equity terms. It is informed by the public advertisements below. These are advertised reference points, not a market-wide benchmark or a compensation commitment.',
      date: 'Public advertisements reviewed 17 October 2026. Advertisements can change.',
      sources: [
        {
          label: 'Paradigm · Founding Engineer · Y Combinator Jobs',
          href: 'https://www.ycombinator.com/companies/paradigm/jobs/nFNWweP-founding-engineer',
          note: 'San Francisco. The posting states a USD 150,000–250,000 base range and describes equity separately.',
        },
        {
          label: 'Ploy · Founding Engineer · Y Combinator Jobs',
          href: 'https://www.ycombinator.com/companies/ploy/jobs/XsX0ycv-founding-engineer',
          note: 'San Francisco. The posting lists USD 150,000–250,000; its headline does not specify the base/equity split.',
        },
      ],
      relationship: 'The links are public research references. They do not imply a client relationship or endorsement.',
    },
    evidence: {
      label: 'Evidence the role would require',
      items: [
        'Direct responsibility for shipping and supporting a product or integration, with a clear account of the decisions and work done personally.',
        'An example of choosing a smaller technical solution under customer or business constraints, including what was deliberately left out.',
        'A production problem they investigated and resolved, explaining the symptoms, diagnosis, recovery and prevention.',
        'A way of working with founders or customers that turns incomplete requests into a usable technical plan.',
      ],
    },
    questions: {
      label: 'Three questions we would start with',
      items: [
        'Walk us through a product integration you shipped. Which decisions and implementation were yours, what context was missing and what happened after release?',
        'A customer integration is blocking launch while the core product is still changing. What would you investigate first, and how would you decide what to ship?',
        'In this company, which engineering responsibilities would you take on yourself and which would you need the founder to retain? What would you leave unbuilt for now?',
      ],
    },
    risks: {
      label: 'Risks in the current brief',
      items: [
        'The company is combining a people-management mandate with a full-time building role before defining the team the person would manage.',
        'An executive title may attract candidates expecting resources or authority the company cannot yet provide.',
        'Unclear integration priorities could turn the hire into a reactive delivery function and leave core product ownership unresolved.',
      ],
    },
    recommendation: {
      label: 'Our recommendation in this exercise',
      title: 'Redefine the role before opening the search.',
      body: 'Prioritize a hands-on Senior IC mandate focused on product delivery and integrations. Clarify the founder’s responsibilities, the initial technical scope and the equity proposal. Assess the ability to grow into broader responsibility through evidence; keep a future management role separate from the work needed today.',
      limit: 'This exercise demonstrates a way to reason about a role. It does not represent a live vacancy, a real candidate recommendation or a promise of introductions.',
    },
  },
  next: {
    headline: 'What should your next hire actually solve?',
    body: 'Tell us about the role, the stage of the company and the decision you need to make. We will discuss the right scope for a Search Calibration.',
    cta: 'Get a Search Calibration',
    secondary: 'See an illustrative candidate brief',
    secondaryHref: '/candidate-brief-sample',
  },
};

export const candidateBriefSampleEn = {
  meta: {
    title: 'Illustrative candidate brief · Head of Engineering | Purrfect Hire',
    description: 'A clearly labelled fictional Head of Engineering brief showing the recommendation, observed evidence, relevant patterns, risks and questions still to validate.',
  },
  hero: {
    eyebrow: 'The recommendation format',
    headline: 'A candidate brief you can question.',
    body: 'See how a recommendation can connect the role, the evidence and the next assessment. The company, candidate and assessment below are fictional.',
    disclosure: 'Illustrative example. Fictional candidate and company. No real person, client search or hiring outcome is represented.',
  },
  document: {
    label: 'Illustrative candidate recommendation',
    title: 'Head of Engineering',
    facts: [
      { label: 'Company context', value: 'Fictional Series A software company' },
      { label: 'Role mandate', value: 'Hands-on engineering leadership' },
      { label: 'Recommendation', value: 'Advance conditionally' },
    ],
    sections: [
      {
        title: 'Why this person',
        body: 'The fictional role needs a leader who can stay close to product and architecture while giving a small engineering team clearer direction. This candidate’s account describes that combination in an early-stage environment.',
      },
      {
        title: 'Evidence observed',
        body: 'In the fictional assessment, the candidate traced a production issue from customer symptoms to a diagnosis, explained the decision to simplify an integration and identified which implementation work they completed personally. They also described an architectural choice they would now change.',
      },
      {
        title: 'What they owned',
        body: 'The account attributes technical planning, architecture decisions and direct product implementation to the candidate. Their description of hiring and people management is self-reported and still needs independent validation.',
      },
      {
        title: 'Relevant pattern',
        body: 'They appear comfortable moving between technical detail and the product problem. Their reasoning favours a small solution that can be tested, with explicit attention to what the team can maintain.',
      },
      {
        title: 'Why this company',
        body: 'In this fictional conversation, the candidate connects the company’s customer problem with work they want to own. That is stated interest. Validate their understanding of the constraints, the work they would choose to do and the conditions behind a mutual commitment.',
      },
      {
        title: 'Risks',
        body: 'The exercise does not establish that they can develop other engineering leaders or operate across multiple locations. Their approach may depend on direct founder access, which this role may not always provide.',
      },
      {
        title: 'Still to validate',
        body: 'Use a technical conversation to examine an unfamiliar integration problem. Ask a former founder or manager to distinguish personal contribution from team output. Seek a direct report’s account of how the candidate set expectations and handled disagreement.',
      },
      {
        title: 'Recommendation and next step',
        body: 'Advance to a focused technical conversation and structured references if the company confirms that hands-on leadership is the immediate mandate. Keep the recommendation conditional on evidence of developing others and on agreement about the founder’s decision-making role.',
      },
    ],
    footer: 'Fictional example throughout. It demonstrates the structure of an assessment, not a verified person or result.',
  },
  close: {
    headline: 'Which evidence would make your hiring decision clearer?',
    body: 'Bring the role and what it needs to change. We can discuss how the search and assessment should work.',
    cta: 'Discuss a candidate brief',
    back: 'Explore Search Calibration',
    backHref: '/search-calibration',
  },
};

export const getSearchCalibration = (_lang: Lang) => searchCalibrationEn;
export const getCandidateBriefSample = (_lang: Lang) => candidateBriefSampleEn;

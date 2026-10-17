import type { Lang } from './index';

// Product evidence: Product / Career Compounding and its Staff IC Lab,
// Organizational Influence and Constructive Confrontation materials.
// Describe the work without publishing a participant's private situation.
// Commercial proposal from Kate, 17 October 2026: USD 5,000 with a longer duration.
// Six months remains an internal proposal. Agree duration and meeting scope before purchase.
export const CAREER_COMPOUNDING_HREF = '/career-compounding';
export const CAREER_COMPOUNDING_EMAIL = 'go@purrfecthire.com';
export const DISCUSS_CAREER_COMPOUNDING =
  `mailto:${CAREER_COMPOUNDING_EMAIL}?subject=${encodeURIComponent('Career Compounding enquiry')}&body=${encodeURIComponent(
    'Hi Kate,\n\nI would like to discuss Career Compounding.\n\nMy current role and company:\nWhat I want to change in my role:\nOne situation I would like to work through:\n\nThanks,\n',
  )}`;

export interface CareerCompoundingV2Content {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    headline: string;
    body: string;
    cta: string;
    note: string;
    prompt: { eyebrow: string; title: string; items: string[]; closing: string };
  };
  audience: { eyebrow: string; headline: string; body: string; situations: string[] };
  work: {
    eyebrow: string;
    headline: string;
    intro: string;
    areas: { id: string; title: string; body: string; outputLabel: string; output: string }[];
  };
  approach: {
    eyebrow: string;
    headline: string;
    steps: { title: string; body: string }[];
    scope: string;
    privacy: string;
  };
  questions: { eyebrow: string; headline: string; items: { question: string; answer: string }[] };
  close: { eyebrow: string; headline: string; body: string; cta: string; note: string; emailLabel: string };
}

export const careerCompoundingV2En: CareerCompoundingV2Content = {
  meta: {
    title: 'Career Compounding · Grow in your role | Purrfect Hire',
    description:
      'Private advisory for senior professionals growing inside their current role. Work through real decisions, business problems and difficult conversations to build impact, influence and scope.',
  },
  hero: {
    eyebrow: 'Career Compounding · Private advisory',
    headline: 'Turn the role you have into a stronger career.',
    body: 'For senior professionals taking on larger problems and building more impact in their current role.',
    cta: 'Discuss Career Compounding',
    note: 'USD 5,000. Ongoing advisory, with duration and meetings agreed before you commit.',
    prompt: {
      eyebrow: 'Start with your work',
      title: 'Bring one live problem.',
      items: [
        'A business outcome to improve.',
        'A decision that needs support.',
        'A difficult conversation to prepare.',
      ],
      closing: 'Use your work to examine how you think, decide and collaborate.',
    },
  },
  audience: {
    eyebrow: 'Who this is for',
    headline: 'What would justify more scope in your current role?',
    body: 'Work toward a larger mandate, stronger influence or problems beyond your function, with a thinking partner alongside you.',
    situations: [
      'Understand what would justify more responsibility.',
      'Move decisions across competing priorities.',
      'Build evidence for a conversation about scope, progression or compensation.',
    ],
  },
  work: {
    eyebrow: 'The work',
    headline: 'Three areas to work on.',
    intro: 'Your situation determines the focus. The work can produce practical material like the examples below.',
    areas: [
      {
        id: '01',
        title: 'Business impact',
        body: 'Define the outcome, establish a baseline and find what blocks progress. Decide where your contribution matters.',
        outputLabel: 'A practical output',
        output: 'An outcome, baseline and next experiment, with a review of what changed.',
      },
      {
        id: '02',
        title: 'Organizational influence',
        body: 'Map the authority, context and evidence behind an important decision. Prepare a recommendation people can act on.',
        outputLabel: 'A practical output',
        output: 'A decision map and recommendation: problem, evidence, action and risk.',
      },
      {
        id: '03',
        title: 'Judgment under pressure',
        body: 'Separate facts from interpretation. Find missing context and prepare a response that moves a difficult conversation forward.',
        outputLabel: 'A practical output',
        output: 'A conversation plan and a review of the decision and learning.',
      },
    ],
  },
  approach: {
    eyebrow: 'How we work',
    headline: 'Learn through your current role.',
    steps: [
      {
        title: 'Choose the situation',
        body: 'Bring Kate a live problem. Identify what needs to change and the evidence needed to decide.',
      },
      {
        title: 'Put the decision to work',
        body: 'Test the assumption, have the conversation or try the agreed approach inside your role.',
      },
      {
        title: 'Review what changed',
        body: 'Review your contribution, the response and the outcome. Decide what to keep or change.',
      },
    ],
    scope: 'USD 5,000. Agree focus, duration and meetings before starting, with real work between conversations.',
    privacy: 'Your engagement is confidential. Share only permitted context; we protect private information about the people and companies involved.',
  },
  questions: {
    eyebrow: 'Before you decide',
    headline: 'Which support fits?',
    items: [
      {
        question: 'How does this relate to Offer Accelerator?',
        answer: 'Offer Accelerator supports your next move: market strategy, hiring processes, offers and negotiation. Career Compounding develops your impact in your current role. Previous OA participation is optional.',
      },
      {
        question: 'What should I bring to the first conversation?',
        answer: 'Your responsibilities, what you want to become capable of and one live situation. A short outline is enough.',
      },
      {
        question: 'What does progress look like?',
        answer: 'Look for better decisions, clearer conversations and evidence of your contribution. Progress depends on your execution and company context. Promotions, pay and hiring decisions remain with the company.',
      },
    ],
  },
  close: {
    eyebrow: 'Your next step',
    headline: 'What problem do you want to grow into?',
    body: 'Share your role and one live situation. We’ll discuss fit and the scope of the work.',
    cta: 'Discuss Career Compounding',
    note: 'USD 5,000. Opens your email app to discuss fit, scope and duration before you commit.',
    emailLabel: 'Or email',
  },
};

export const getCareerCompoundingV2 = (_lang: Lang): CareerCompoundingV2Content => careerCompoundingV2En;

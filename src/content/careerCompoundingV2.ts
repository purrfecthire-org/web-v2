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
    body: 'For senior professionals who want to take on larger problems, make better decisions and increase their impact inside their current role.',
    cta: 'Discuss Career Compounding',
    note: 'USD 5,000. An ongoing engagement built around your work. We agree the duration and meeting plan before you commit.',
    prompt: {
      eyebrow: 'Start with your work',
      title: 'Bring one live problem.',
      items: [
        'A business outcome you need to improve.',
        'A decision that needs support across the company.',
        'A difficult conversation you need to have.',
      ],
      closing: 'We use the situations in your role to examine how you think, decide and work with others.',
    },
  },
  audience: {
    eyebrow: 'Who this is for',
    headline: 'You have the role. What do you want to become capable of?',
    body: 'Your next step may be a larger mandate, stronger influence or the ability to handle a problem that reaches beyond your own function. Career Compounding gives you a thinking partner as you work through that step.',
    situations: [
      'You are doing strong work and want to understand what would justify more responsibility.',
      'You need to move decisions with people whose priorities differ from yours.',
      'You want clearer evidence of the value you create before a conversation about scope, progression or compensation.',
    ],
  },
  work: {
    eyebrow: 'The work',
    headline: 'Three areas we can work on together.',
    intro: 'We choose the focus from the situations you bring. These are examples of the work and the practical material it can produce.',
    areas: [
      {
        id: '01',
        title: 'Business impact',
        body: 'Define the outcome that matters, understand the starting point and examine what is holding progress back. Use that to decide where your contribution will make a difference.',
        outputLabel: 'A practical output',
        output: 'A clear outcome, baseline and next experiment, with a way to review what changed.',
      },
      {
        id: '02',
        title: 'Organizational influence',
        body: 'Understand how an important decision actually gets made: who has authority, who holds the context and what evidence could move the conversation. Prepare a recommendation people can act on.',
        outputLabel: 'A practical output',
        output: 'A map of one real decision and a concise recommendation covering the problem, evidence, proposed action and risk.',
      },
      {
        id: '03',
        title: 'Judgment under pressure',
        body: 'Work through disagreement, uncertainty and difficult conversations. Separate what happened from your interpretation, find the context you are missing and choose a response that helps the work move forward.',
        outputLabel: 'A practical output',
        output: 'A plan for a real conversation, followed by a review of the decision and what you learned.',
      },
    ],
  },
  approach: {
    eyebrow: 'How we work',
    headline: 'The learning happens in the role you already have.',
    steps: [
      {
        title: 'Choose the situation',
        body: 'Bring a current business problem or decision. With Kate, identify what needs to change and which evidence would help you decide what to do.',
      },
      {
        title: 'Put the decision to work',
        body: 'Carry out the agreed action inside your role. That may mean testing an assumption, having a conversation or changing how you approach a problem.',
      },
      {
        title: 'Review what changed',
        body: 'Return with what happened. Examine your contribution, the response and the outcome, then decide what to keep, change or try next.',
      },
    ],
    scope: 'USD 5,000. We work from the decisions you are making in your role, with real work between conversations. We agree the focus, duration and meeting plan before starting.',
    privacy: 'Your advisory engagement is confidential. We work with context you are permitted to share and protect the private information of the people and companies involved.',
  },
  questions: {
    eyebrow: 'Before you decide',
    headline: 'Which kind of support fits your situation?',
    items: [
      {
        question: 'How does this relate to Offer Accelerator?',
        answer: 'Offer Accelerator focuses on your next career move: market strategy, hiring processes, offers and negotiation. Career Compounding focuses on how you grow and operate inside your current role. You can discuss Career Compounding without having taken Offer Accelerator.',
      },
      {
        question: 'What should I bring to the first conversation?',
        answer: 'Your current responsibilities, what you want to become capable of and one live situation you would like to work through. An outline is enough to start discussing the right scope.',
      },
      {
        question: 'What does progress look like?',
        answer: 'We look at the work: a better informed decision, a conversation that produces clarity, an outcome you can explain or stronger evidence of your contribution. Progress also depends on the actions you take and the context of your company. Promotions, compensation changes and hiring decisions remain with the company.',
      },
    ],
  },
  close: {
    eyebrow: 'Your next step',
    headline: 'What is the problem you want to grow into?',
    body: 'Tell us about your role and one situation you want to work through. We will discuss whether Career Compounding fits and what the engagement would involve.',
    cta: 'Discuss Career Compounding',
    note: 'USD 5,000. The button opens your email app so we can discuss fit and agree the scope and duration before you commit.',
    emailLabel: 'Or email',
  },
};

export const getCareerCompoundingV2 = (_lang: Lang): CareerCompoundingV2Content => careerCompoundingV2En;

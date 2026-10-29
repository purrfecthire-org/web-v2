import type { Lang } from './index';
import { WHATSAPP_CAREER_COMPOUNDING } from './links';

// Program confirmed 19 October 2026; all sessions are one hour per Kate,
// 29 October 2026. This supersedes the earlier 90/75-minute schedule.
// CC and Offer Accelerator are independent products for different career decisions.
export const CAREER_COMPOUNDING_HREF = '/career-compounding';
export const CAREER_COMPOUNDING_EMAIL = 'go@purrfecthire.com';
export const DISCUSS_CAREER_COMPOUNDING = WHATSAPP_CAREER_COMPOUNDING;

export interface CareerCompoundingV2Content {
  meta: { title: string; description: string };
  hero: { eyebrow: string; headline: string; body: string; audience: string; cta: string; note: string; facts: { value: string; label: string }[] };
  work: { eyebrow: string; headline: string; intro: string; areas: { id: string; title: string; body: string; outputLabel: string; output: string }[] };
  progress: { title: string; body: string; dimensions: { title: string; body: string }[] };
  scope: { eyebrow: string; headline: string; price: string; summary: string; items: { title: string; body: string }[]; privacy: string };
  questions: { items: { question: string; answer: string }[] };
  close: { eyebrow: string; headline: string; body: string; cta: string; note: string; emailLabel: string };
}

export const careerCompoundingV2En: CareerCompoundingV2Content = {
  meta: {
    title: 'Career Compounding · Advisory for the work in front of you | Purrfect Hire',
    description: 'Private advisory with Kate around a real challenge in your current role. Nine one-hour sessions, eight checkpoints and a private hub over six months. USD 5,000.',
  },
  hero: {
    eyebrow: 'Career Compounding · Private career advisory',
    headline: 'Work through the decisions your role demands.',
    body: 'Private advisory with Kate around a real challenge in your current role. Clarify your options, prepare your next move and review what changes.',
    audience: 'For experienced professionals facing a decision, stakeholder challenge or execution problem.',
    cta: 'Discuss your challenge',
    note: 'USD 5,000 for the program. Offer Accelerator is not a prerequisite.',
    facts: [
      { value: '6 months', label: 'Working on real business challenges' },
      { value: '9 × 1 hour', label: 'Private 1:1 conversations with Kate' },
      { value: '8 checkpoints', label: 'Asynchronous feedback between sessions' },
      { value: 'About 3 weeks', label: 'Between conversations' },
    ],
  },
  work: {
    eyebrow: 'The work',
    headline: 'Bring the work you are accountable for.',
    intro: 'Examine the problem, assumptions and trade-offs. Agree what to try, then review the evidence and adjust.',
    areas: [
      { id: '01', title: 'Ownership and execution', body: 'Define the problem, establish a baseline and decide where to act.', outputLabel: 'Your output', output: 'A clear outcome, decisions you owned, experiments and a record of what changed.' },
      { id: '02', title: 'Organizational influence', body: 'Map stakeholders, authority and competing priorities. Build a recommendation people can act on.', outputLabel: 'Your output', output: 'A stakeholder map, a reasoned recommendation and evidence of your contribution to progress.' },
      { id: '03', title: 'Judgment under pressure', body: 'Test assumptions, examine trade-offs and decide with incomplete information.', outputLabel: 'Your output', output: 'A decision brief, feedback on your reasoning and what you would repeat or change.' },
    ],
  },
  progress: {
    title: 'What would show that the work is helping?',
    body: 'We establish a baseline in the diagnostic and review the evidence throughout the program. The final session examines what changed and which larger problem you are ready to take on next.',
    dimensions: [
      { title: 'Decision quality', body: 'Clearer reasoning, alternatives and trade-offs grounded in evidence.' },
      { title: 'Business impact', body: 'Observable results, with your contribution distinguished from the team’s work.' },
      { title: 'Influence', body: 'A stronger ability to align stakeholders and move decisions into action.' },
      { title: 'Autonomy', body: 'Greater ownership of complex work, including knowing when to seek context or escalate.' },
    ],
  },
  scope: {
    eyebrow: 'The program',
    headline: 'Six months. One continuous body of work.',
    price: 'USD 5,000',
    summary: 'Nine one-hour private sessions with Kate, with approximately three weeks between conversations. Eight asynchronous checkpoints connect the work between sessions.',
    items: [
      { title: 'One-hour diagnostic', body: 'Examine how you operate today, your strengths and constraints. Select a real, high-impact challenge and establish development priorities.' },
      { title: 'Seven one-hour execution sessions', body: 'Work through actual decisions, trade-offs, stakeholders, blockers, results and feedback, approximately every three weeks.' },
      { title: 'One-hour final review', body: 'Review evidence of impact, capabilities developed and your next professional challenge.' },
      { title: 'Eight asynchronous checkpoints', body: 'One between each pair of sessions. Bring a decision, situation or relevant deliverable to unblock the next action. Checkpoint feedback arrives within two business days.' },
      { title: 'A private, personalized hub', body: 'Keep a living record of the problem, decisions, experiments, feedback, progress and evidence of impact.' },
      { title: 'A real professional challenge', body: 'The program follows work inside your organization. If you resolve the challenge before the program ends, we choose the next one.' },
    ],
    privacy: 'Your engagement is confidential. Share only context you are permitted to share; protect private information about the people and companies involved.',
  },
  questions: {
    items: [
      { question: 'I already have an MBA or leadership training. What would we work on?', answer: 'Bring a challenge from your current role. We examine the decision, stakeholders and trade-offs, agree what to try, then review the evidence. Your existing knowledge is the starting point.' },
      { question: 'How do we check whether Kate is the right advisor for my challenge?', answer: 'Share your role, challenge and the help you need before joining. We check whether Kate’s experience fits. A specialist problem may need a specialist advisor.' },
      { question: 'Do I need to complete Offer Accelerator first?', answer: 'No. The products are independent. Offer Accelerator supports your next career move. Career Compounding works on challenges in your current role.' },
      { question: 'Does the program guarantee a promotion or pay increase?', answer: 'No. We assess progress through better-grounded decisions, observable business results, influence and autonomy. Promotions, salary increases and outcomes controlled by third parties are not guaranteed.' },
      { question: 'What should I bring to the first conversation?', answer: 'Your current role, a business challenge you can act on and what a meaningful improvement would look like. You carry out the work inside your organization.' },
    ],
  },
  close: {
    eyebrow: 'Your next step',
    headline: 'Which problem would stretch how you operate?',
    body: 'Share your role and the challenge in front of you. We will discuss whether Career Compounding is the right fit.',
    cta: 'Message us on WhatsApp',
    note: 'Opens a WhatsApp conversation. Your message is sent only when you choose to send it.',
    emailLabel: 'Or email',
  },
};

export const getCareerCompoundingV2 = (_lang: Lang): CareerCompoundingV2Content => careerCompoundingV2En;

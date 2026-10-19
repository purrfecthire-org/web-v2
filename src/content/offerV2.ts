// ─────────────────────────────────────────────────────────────────────────
// Offer Accelerator. Launch copy, 14 October 2026 brief.
// The product page: who it is for, what decisions it helps with, how the
// team works, what is included and for how long, what it costs, how to
// apply.
//
// Commercial terms confirmed by Kate, 14 October 2026: USD 2,000 flat,
// eight sessions in total, and support through each new hiring process
// afterwards until the person is placed, while they actively carry out the
// agreed plan. Never "from", never a month limit, never eight new sessions
// per process, unlimited calls, a guaranteed hire or 24/7 availability.
// Response times and an inactivity policy are not defined, so neither is
// published. No internal review notes on the page: pendings live in the
// team doc.
//
// Applications use the confirmed go@purrfecthire.com inbox. The shared
// APPLY_OFFER in links.ts opens the public OA inquiry form.
// Release verification: preserve Daniel's existing quote; confirm its
// original source, English wording, attribution and written permission.
// ─────────────────────────────────────────────────────────────────────────
import type { Lang } from './index';

export interface OfferV2Content {
  meta: { title: string; description: string };
  hero: { eyebrow: string; headline: string; sub: string; cta: string; package: string };
  question: { eyebrow: string; headline: string; body: string; who: string };
  deliverables: { eyebrow: string; headline: string; body: string; items: { title: string; body: string }[] };
  fit: { eyebrow: string; headline: string; body: string; commitmentTitle: string; commitment: string };
  method: { eyebrow: string; headline: string; steps: { id: string; title: string; body: string }[] };
  access: { headline: string; body: string; limit: string };
  firewall: { headline: string; lead: string; body: string[]; more: string };
  includes: { eyebrow: string; headline: string; items: string[]; closing: string };
  behind: { eyebrow: string; headline: string; body: string[] };
  proof: { eyebrow: string; headline: string; quote: string; name: string; role: string };
  investment: { eyebrow: string; headline: string; price: string; next: string };
  faq: { eyebrow: string; headline: string; items: { question: string; answer: string }[] };
  apply: { headline: string; body: string; cta: string; howNote: string; steps: { title: string; body: string }[] };
  editorial: string;
}

export const offerV2En: OfferV2Content = {
  meta: {
    title: 'Offer Accelerator · Private market advisory | Purrfect Hire',
    description:
      'Private market advisory for senior professionals making high-stakes career moves. Understand how the market reads your experience, where the evidence supports your level, and where your next move has the highest leverage.',
  },
  hero: {
    eyebrow: 'Offer Accelerator · Private market advisory',
    headline: 'Make your signal impossible to miss.',
    sub: 'Private market advisory for senior professionals making high-stakes career moves. Understand how the market reads your experience, where the evidence supports your level, and where your next move has the highest leverage.',
    cta: 'Apply to Offer Accelerator',
    package: 'Eight 1:1 sessions: one diagnostic and seven with Kate. Continued process support while you execute the agreed plan.',
  },
  question: {
    eyebrow: 'The real question',
    headline: 'Find out what level the market can actually validate.',
    body: 'You may be operating above the level the market is assigning you. Or the evidence may not support the move yet. We help you know the difference.',
    who: 'For senior professionals with real scope and results who are about to make a decision that sets the next few years: an offer, a negotiation, a market change, a move between IC and management, or a jump in level.',
  },
  deliverables: {
    eyebrow: 'The work you can use',
    headline: 'A strategy you can put to work in a real process.',
    body: 'Your private Career Journal holds the strategy, evidence and materials we build around your diagnostic and active opportunities.',
    items: [
      { title: 'Criteria for your next move', body: 'Define your target role, scope, market, compensation and conditions.' },
      { title: 'Evidence of your contribution', body: 'Make your decisions, contribution and results specific enough to examine.' },
      { title: 'A focused company map', body: 'Identify relevant companies, decision makers and reasons to start a conversation.' },
      { title: 'One workspace for each process', body: 'Keep research, preparation, feedback and decisions together for each opportunity.' },
      { title: 'Interview practice with feedback', body: 'Prepare for real interviews and cases. Get specific feedback on reasoning and evidence.' },
      { title: 'An offer and negotiation decision', body: 'Assess scope, compensation and fit. Build a negotiation approach for the actual offer.' },
    ],
  },
  fit: {
    eyebrow: 'Who this is for',
    headline: 'You have experience to examine and a move to make.',
    body: 'Senior ICs, leaders and former founders changing company, market or scope. Join with an active process or a search to define.',
    commitmentTitle: 'Your part of the work',
    commitment: 'Bring accurate evidence and carry out the agreed plan: research, outreach, applications and interviews. We prepare with you and use market feedback to refine the approach.',
  },
  method: {
    eyebrow: 'How we work',
    headline: 'From a diagnostic to active decisions.',
    steps: [
      { id: '01', title: 'Diagnose', body: 'How the market reads you today, and whether the gap is visibility or evidence.' },
      { id: '02', title: 'Clarify the signal', body: 'Make the strongest evidence of your scope, judgment and outcomes visible, and identify what is still missing.' },
      { id: '03', title: 'Pressure-test', body: 'Test that signal against real companies, conversations, interviews, business cases and compensation.' },
      { id: '04', title: 'Create access', body: 'Build relationships and reach the people who can create the right opportunity.' },
    ],
  },
  access: {
    headline: 'What creating access means.',
    body: 'Identify companies where your experience solves a relevant problem. Use evidence to start conversations with decision makers, including before a role is posted.',
    limit: 'Introductions depend on relevance and the consent of the people involved.',
  },
  firewall: {
    headline: 'Confidential advisory. Consistent evaluation.',
    lead: 'Advisory engagements are confidential. Participation in Offer Accelerator does not change how candidates are assessed in Purrfect client searches.',
    more: 'What this means in practice',
    body: [
      'You can be considered for a real vacancy if you meet its requirements. The recommendation rests on the same role requirements and evidence standards that apply to everyone else.',
      'We protect both sides: no private rubrics, no interview answers, no confidential client information and no private advisory notes are shared.',
      'Being considered in a Purrfect search is free. Offer Accelerator is never required.',
    ],
  },
  includes: {
    eyebrow: 'What is included',
    headline: 'Eight sessions, and a team with you until you land.',
    items: [
      'Eight 1:1 sessions in total, one diagnostic and seven with Kate',
      'Personalized materials and agreed next actions in your private Career Journal',
      'A weekly check-in with the team',
      'Direct support over WhatsApp and email',
      'After the eight sessions, support through each new hiring process until you secure your next role, while you actively carry out the agreed plan. This follow-up does not add another set of eight sessions or unlimited calls.',
    ],
    closing: 'The sessions establish the strategy and prepare you to act. Support continues as real opportunities develop, from reviewing a role to interpreting feedback and deciding on an offer.',
  },
  behind: {
    eyebrow: 'Where our read comes from',
    headline: 'Built from the market as it is hiring today.',
    body: [
      'Purrfect works every week with early-stage companies and senior talent across the US, Europe and Latin America. Our perspective comes from current searches, compensation conversations, hiring processes and direct exposure to how senior talent is evaluated.',
      'That experience helps us examine the scope a role actually carries, the evidence a company needs and the questions worth asking before you commit.',
    ],
  },
  proof: {
    eyebrow: 'Proof',
    headline: 'In their words.',
    quote:
      'I did not join because I was struggling to find work. I joined because this time I wanted the job I took to be the one I chose, not the one the market chose for me.',
    name: 'Daniel Contreras',
    role: 'Product Designer, 10 years in technology and product',
  },
  investment: {
    eyebrow: 'Investment',
    headline: 'A considered investment in your next move.',
    price: 'USD 2,000',
    next: 'Eight sessions, followed by support through each new hiring process until you secure your next role, while you actively carry out the agreed plan.',
  },
  faq: {
    eyebrow: 'Before you decide',
    headline: 'The practical questions.',
    items: [
      { question: 'Can I take part while working full-time?', answer: 'Yes. We plan the work around your situation. You need time between sessions to research companies, contact people, prepare materials and carry out the actions we agree.' },
      { question: 'Can I join if I already have an interview or offer?', answer: 'Yes. We review whether the engagement fits the decision you need to make before confirming how to proceed.' },
      { question: 'Is a job or salary increase guaranteed?', answer: 'No. We commit to the agreed preparation, feedback and follow-up. Hiring decisions rest with companies, and progress also depends on your execution and the opportunities available in the market.' },
      { question: 'How do I get support between sessions?', answer: 'Use WhatsApp and email to share updates, questions and materials, alongside the weekly team check-in. We agree priorities around the processes you are working on. Support does not mean 24/7 availability.' },
    ],
  },
  apply: {
    headline: 'Apply to Offer Accelerator.',
    body: 'Tell us where you are and what the next move has to change.',
    cta: 'Apply to Offer Accelerator',
    howNote: 'Send your context through the short form. No payment is taken when you apply.',
    steps: [
      { title: 'Send the context', body: 'Your LinkedIn profile, email and what you want to change.' },
      { title: 'We review the fit', body: 'The team reviews your situation and asks for the context needed to assess whether Offer Accelerator fits your next move.' },
      { title: 'Agree how to begin', body: 'If there is a fit, we confirm the scope, USD 2,000 fixed fee and next steps with you before payment and scheduling.' },
    ],
  },
  editorial: 'Your career has advisors too.',
};

export const getOfferV2 = (_lang: Lang): OfferV2Content => offerV2En;

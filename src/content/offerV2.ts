// ─────────────────────────────────────────────────────────────────────────
// Offer Accelerator v2 (rebrand prototype). The product page: who it is for,
// what decisions it helps with, how the team works, what is included and for
// how long, what it costs, how to apply.
//
// Decisions still open, marked in the page as internal notes:
//   · Price: one truth needed, USD 2,000 or from USD 2,000.
//   · Scope after the eight core sessions.
//   · Capacity: only state a limit if it is a real operating constraint.
// ─────────────────────────────────────────────────────────────────────────
import type { Lang } from './index';

export interface OfferV2Content {
  meta: { title: string; description: string };
  hero: { eyebrow: string; headline: string; sub: string; cta: string; photoNote: string };
  question: { eyebrow: string; headline: string; body: string; who: string };
  method: { eyebrow: string; headline: string; steps: { id: string; title: string; body: string }[] };
  access: { headline: string; body: string; limit: string };
  firewall: { headline: string; lead: string; body: string[]; more: string; status: string };
  includes: { eyebrow: string; headline: string; items: string[]; closing: string; scopeNote: string };
  behind: { eyebrow: string; headline: string; body: string[] };
  proof: { eyebrow: string; headline: string; quote: string; name: string; role: string; translationNote: string; pending: string };
  investment: { eyebrow: string; headline: string; price: string; next: string; priceNote: string };
  apply: { headline: string; body: string; cta: string; capacityNote: string };
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
    photoNote: '[REAL TALENT PHOTO — working environment]',
  },
  question: {
    eyebrow: 'The real question',
    headline: 'Find out what level the market can actually support.',
    body: 'You may be operating above the level the market is assigning you. Or the evidence may not support the move yet. We help you know the difference.',
    who: 'For senior professionals with real scope and results who are about to make a decision that sets the next few years: an offer, a negotiation, a market change, a move between IC and management, or a jump in level.',
  },
  method: {
    eyebrow: 'How we work',
    headline: 'Four steps.',
    steps: [
      { id: '01', title: 'Diagnose', body: 'How the market reads you today, and whether the gap is visibility or evidence.' },
      { id: '02', title: 'Clarify the signal', body: 'Make the strongest evidence of your scope, judgment and outcomes visible, and identify what is still missing.' },
      { id: '03', title: 'Pressure-test', body: 'Test that signal against real companies, conversations, interviews, business cases and compensation.' },
      { id: '04', title: 'Create access', body: 'Build relationships and reach the people who can create the right opportunity.' },
    ],
  },
  access: {
    headline: 'What creating access means.',
    body: 'Identify the companies where your experience is unusually relevant. Spot the problems before a role is posted. Reach founders, hiring managers and decision makers with a credible reason to talk. Turn real evidence of your work into conversations. Use introductions where they legitimately exist.',
    limit: 'It does not mean buying access to Purrfect client searches.',
  },
  firewall: {
    headline: 'Independent advice. Consistent evaluation.',
    lead: 'Participation in Offer Accelerator does not give candidates preferential treatment in Purrfect-managed searches.',
    more: 'How we keep the two sides apart',
    body: [
      'If you enter a search we manage, we pause advisory on that specific process, including offer negotiation. We explain this upfront and agree with you on disclosure to the hiring company before presenting your candidacy.',
      'Applications to our open roles are free. Offer Accelerator is never required.',
    ],
    status: 'Publish only once the internal practice is written and in use.',
  },
  includes: {
    eyebrow: 'What is included',
    headline: 'Eight core sessions, and a team thinking with you.',
    items: [
      'Eight core 1:1 sessions, one diagnostic and seven with Kate',
      'Personalized material after each session',
      'A weekly check-in with the team',
      'Direct support over WhatsApp and email',
      'Opportunity validation before you commit your time to a process',
      'Decision support through active processes: understand what the role requires, which evidence to bring forward and whether the opportunity fits your priorities',
      'Support through final rounds, offers and negotiation',
    ],
    closing: 'The value is not the eight sessions. It is having a team thinking with you through the decisions that matter.',
    scopeNote: 'Pending before publishing, as three explicit lines on this list: how long the engagement lasts, what WhatsApp and email cover and in what response time, and what opportunity validation reviews and hands over. Do not publish open-ended accompaniment.',
  },
  behind: {
    eyebrow: 'Where our read comes from',
    headline: 'Built from the market as it is hiring today.',
    body: [
      'Purrfect works every week with early-stage companies and senior talent across the US, Europe and Latin America. Our perspective comes from current searches, compensation conversations, hiring processes and direct exposure to how senior talent is evaluated.',
      'We use that market context to advise you. We never share confidential client information, and paying for Offer Accelerator never changes the bar in a Purrfect search.',
    ],
  },
  proof: {
    eyebrow: 'Proof',
    headline: 'In their words.',
    quote:
      'I did not join because I was struggling to find work. I joined because this time I wanted the job I took to be the one I chose, not the one the market chose for me.',
    name: 'Daniel Contreras',
    role: 'Product Designer, 10 years in technology and product',
    translationNote: 'Translated from Spanish, approved by Daniel.',
    pending: 'Pending from Daniel: company, and role and level before and after, plus his photo.',
  },
  investment: {
    eyebrow: 'Investment',
    headline: 'A considered investment in your next move.',
    price: 'USD 2,000',
    next: 'Every engagement starts with a diagnostic call, so we scope your situation before you commit.',
    priceNote: 'Decision pending: one truth across the whole site, USD 2,000 flat or from USD 2,000. The Pricing page currently says from.',
  },
  apply: {
    headline: 'Apply to Offer Accelerator.',
    body: 'Tell us where you are and what the next move has to change. The diagnostic call comes first.',
    cta: 'Apply to Offer Accelerator',
    capacityNote: 'Capacity line omitted on purpose. Add it only if the limit is a real operating constraint, and say why.',
  },
  editorial: 'Your career has advisors too.',
};

export const getOfferV2 = (_lang: Lang): OfferV2Content => offerV2En;

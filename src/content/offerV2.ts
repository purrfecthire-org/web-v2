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
// Applications: there is no confirmed application URL for launch, so the
// four buttons open an email application, flagged next to the button. Swap
// APPLY_HREF for the form URL the day it exists.
// ─────────────────────────────────────────────────────────────────────────
import type { Lang } from './index';

export const APPLY_HREF =
  'mailto:hiring@purrfecthire.com?subject=Offer%20Accelerator%20application';

export interface OfferV2Content {
  meta: { title: string; description: string };
  hero: { eyebrow: string; headline: string; sub: string; cta: string };
  question: { eyebrow: string; headline: string; body: string; who: string };
  method: { eyebrow: string; headline: string; steps: { id: string; title: string; body: string }[] };
  access: { headline: string; body: string; limit: string };
  firewall: { headline: string; lead: string; body: string[]; more: string };
  includes: { eyebrow: string; headline: string; items: string[]; closing: string };
  behind: { eyebrow: string; headline: string; body: string[] };
  proof: { eyebrow: string; headline: string; quote: string; name: string; role: string; translationNote: string };
  investment: { eyebrow: string; headline: string; price: string; next: string };
  apply: { headline: string; body: string; cta: string; howNote: string };
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
  },
  question: {
    eyebrow: 'The real question',
    headline: 'Find out what level the market can actually validate.',
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
      'Personalized material after each session',
      'A weekly check-in with the team',
      'Direct support over WhatsApp and email',
      'Opportunity validation before you commit your time to a process',
      'Decision support through active processes: understand what the role requires, which evidence to bring forward and whether the opportunity fits your priorities',
      'Support through final rounds, offers and negotiation',
      'After the eight sessions, support through each new hiring process until you secure your next role, while you actively carry out the agreed plan',
    ],
    closing: 'We review opportunities, prepare for interviews, assess feedback and support negotiations. You keep us informed as your search progresses.',
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
  },
  investment: {
    eyebrow: 'Investment',
    headline: 'A considered investment in your next move.',
    price: 'USD 2,000',
    next: 'Eight sessions, followed by support through each new hiring process until you secure your next role, while you actively carry out the agreed plan.',
  },
  apply: {
    headline: 'Apply to Offer Accelerator.',
    body: 'Tell us where you are and what the next move has to change.',
    cta: 'Apply to Offer Accelerator',
    howNote: 'Applications open in your email app. You can also write to hiring@purrfecthire.com.',
  },
  editorial: 'Your career has advisors too.',
};

export const getOfferV2 = (_lang: Lang): OfferV2Content => offerV2En;

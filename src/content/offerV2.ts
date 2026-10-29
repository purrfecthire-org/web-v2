// Prospective offer selected 29 October 2026. Existing agreements retain
// their terms. Eight one-hour sessions total: an independent diagnostic with
// Kate, then seven with the advisor named before continuation, scheduled
// within twelve weeks of the agreed continuation date. Weekly team check-ins
// apply to that core window. Active-process follow-up continues until the
// client starts the next role, subject to the agreed plan and weekly scope.
// No new set of sessions per process, unlimited calls or employment guarantee.
import type { Lang } from './index';
import { DIAGNOSTIC_ENTRY, OFFER_ACCELERATOR, diagnosticCreditCopy } from './advisoryOffers';

export interface OfferV2Content {
  meta: { title: string; description: string };
  hero: { eyebrow: string; headline: string; sub: string; cta: string; package: string };
  question: { eyebrow: string; headline: string; body: string; who: string };
  deliverables: { eyebrow: string; headline: string; body: string; items: { title: string; body: string; note?: string }[] };
  fit: { eyebrow: string; headline: string; body: string; commitmentTitle: string; commitment: string };
  method: { eyebrow: string; headline: string; steps: { id: string; title: string; body: string }[] };
  access: { headline: string; body: string; limit: string };
  firewall: { headline: string; lead: string; body: string[]; more: string };
  includes: { eyebrow: string; headline: string; items: string[]; closing: string };
  behind: { eyebrow: string; headline: string; body: string[] };
  proof: { eyebrow: string; headline: string; quote: string; name: string; role: string; linkedin: string };
  investment: { eyebrow: string; headline: string; price: string; note: string; next: string };
  faq: { eyebrow: string; headline: string; items: { question: string; answer: string }[] };
  apply: { headline: string; body: string; cta: string; howNote: string; steps: { title: string; body: string }[] };
  editorial: string;
}

export const offerV2En: OfferV2Content = {
  meta: {
    title: 'Offer Accelerator · Private career advisory | Purrfect Hire',
    description:
      `Private advisory for your next career move. ${OFFER_ACCELERATOR.sessionCount} one-hour sessions total, with active-process support until you start your next role. ${OFFER_ACCELERATOR.priceLabel}.`,
  },
  hero: {
    eyebrow: 'Offer Accelerator · Private career advisory',
    headline: 'Make your signal impossible to miss.',
    sub: 'Private advisory for senior professionals changing company, market or scope. Sharpen your positioning, prepare for interviews and work through offer decisions.',
    cta: 'Apply to Offer Accelerator',
    package: `${OFFER_ACCELERATOR.sessionCount} one-hour sessions total: a diagnostic with Kate, then seven with your confirmed advisor. Core sessions run over ${OFFER_ACCELERATOR.coreSessionWindowLabel}; active-process follow-up continues until your next role starts.`,
  },
  question: {
    eyebrow: 'The real question',
    headline: 'Find out what level the market can actually validate.',
    body: 'You may be operating above the level the market is assigning you. Or the evidence may not support the move yet. We help you know the difference.',
    who: 'For senior professionals with real scope and results who are about to make a decision that sets the next few years: an offer, a negotiation, a market change, a move between IC and management, or a jump in level.',
  },
  deliverables: {
    eyebrow: 'The work you can use',
    headline: 'Prepare for the search, the interviews and the offer.',
    body: 'Your private Career Journal holds the strategy, evidence and materials we build around your diagnostic and active opportunities.',
    items: [
      { title: 'Criteria for your next move', body: 'Define your target role, scope, market, compensation and conditions.' },
      { title: 'Evidence of your contribution', body: 'Make your decisions, contribution and results specific enough to examine.' },
      { title: 'A focused company map', body: 'Identify relevant companies, decision makers and reasons to start a conversation, including before a role is posted.', note: 'Introductions depend on relevance and the consent of the people involved.' },
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
    headline: `${OFFER_ACCELERATOR.sessionCount} sessions. Support through your next move.`,
    items: [
      'A one-hour diagnostic with Kate and seven one-hour sessions with the senior Purrfect advisor named before continuation',
      'Personalized materials and agreed next actions in your private Career Journal',
      OFFER_ACCELERATOR.coreSupportSummary,
      OFFER_ACCELERATOR.prioritySupportSummary,
      `${OFFER_ACCELERATOR.ongoingProcessSupportSummary} The remaining ${OFFER_ACCELERATOR.remainingSessionCount} core sessions are scheduled within ${OFFER_ACCELERATOR.coreSessionWindowLabel} from the agreed continuation date. Follow-up does not restart the sessions or include unlimited calls or 24/7 availability.`,
    ],
    closing: 'The core sessions build your approach. Ongoing feedback helps you apply it to active interviews and offers.',
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
      'I joined because this time I wanted the job I took to be the one I chose, not the one the market chose for me.',
    name: 'Daniel Contreras',
    role: 'Product Designer, 10 years in technology and product',
    linkedin: 'https://www.linkedin.com/in/strategic-designer/',
  },
  investment: {
    eyebrow: 'Investment',
    headline: 'A considered investment in your next move.',
    price: OFFER_ACCELERATOR.priceLabel,
    note: `Start with a ${DIAGNOSTIC_ENTRY.priceLabel} diagnostic. Continue on the same challenge within ${DIAGNOSTIC_ENTRY.creditWindowDays} days after it and it counts toward your program.`,
    next: `${OFFER_ACCELERATOR.sessionCount} one-hour sessions total, a private Career Journal and active-process follow-up until you start your next role, while you execute the agreed plan.`,
  },
  faq: {
    eyebrow: 'Before you decide',
    headline: 'The practical questions.',
    items: [
      { question: 'Can I take part while working full-time?', answer: 'Yes. We plan the work around your situation. You need time between sessions to research companies, contact people, prepare materials and carry out the actions we agree.' },
      { question: 'Can I join if I already have an interview or offer?', answer: 'Yes. We review whether the engagement fits the decision you need to make before confirming how to proceed.' },
      { question: 'Is a job or salary increase guaranteed?', answer: 'No. We commit to the agreed preparation, feedback and follow-up. Hiring decisions rest with companies, and progress also depends on your execution and the opportunities available in the market.' },
      { question: 'How do I get support between sessions?', answer: OFFER_ACCELERATOR.supportSummary },
      { question: 'Can I start with one session?', answer: `${diagnosticCreditCopy(OFFER_ACCELERATOR)} The diagnostic includes a short written decision and next-step brief. We agree your advisor, scope, schedule, payment and rescheduling terms in writing before you pay the balance.` },
      { question: 'What happens after the core sessions?', answer: `${OFFER_ACCELERATOR.ongoingProcessSupportSummary} ${OFFER_ACCELERATOR.prioritySupportSummary} This does not add another set of eight sessions. New full research or CV rewrites are outside post-core follow-up; extra live sessions and work outside the scope are agreed separately.` },
    ],
  },
  apply: {
    headline: 'Apply to Offer Accelerator.',
    body: 'Tell us where you are and what the next move has to change.',
    cta: 'Apply to Offer Accelerator',
    howNote: 'Send your context through the short form. No payment is taken when you apply.',
    steps: [
      { title: 'We review the fit', body: 'The team reviews your situation and asks for the context needed to assess whether Offer Accelerator fits your next move.' },
      { title: 'Start with Kate', body: `Begin with a one-hour diagnostic for ${DIAGNOSTIC_ENTRY.priceLabel}, with a short written decision and next-step brief. There is no obligation to buy the program.` },
      { title: 'Choose whether to continue', body: `If we continue on the same challenge within ${DIAGNOSTIC_ENTRY.creditWindowDays} days after the diagnostic, it counts as session one and is credited once. We agree the advisor and written terms before you separately authorize the ${OFFER_ACCELERATOR.remainingBalanceLabel} balance.` },
    ],
  },
  editorial: 'Your career has advisors too.',
};

export const getOfferV2 = (_lang: Lang): OfferV2Content => offerV2En;

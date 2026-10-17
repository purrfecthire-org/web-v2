// Talent services and free client searches. Updated 17 October 2026.
// Release verification: Career Compounding is USD 5,000. Its proposed
// six-month duration still needs an explicit operational confirmation; do
// not publish that duration here as an approved term.
// Existing Daniel copy is preserved. Verify the original source, English
// wording, role attribution and written publication permission before release.
import type { Lang } from './index';
import { SESSION_1_1, CONSIDERED_FREE } from './links';

export { SESSION_1_1 as SESSION_MAILTO, CONSIDERED_FREE } from './links';

export interface TalentV2Content {
  meta: { title: string; description: string };
  hero: { eyebrow: string; headline: string; sub: string; audience: string; cta: string; href: string; secondary: { label: string; href: string } };
  problem: { eyebrow: string; headline: string; body: string };
  work: { eyebrow: string; headline: string; items: { title: string; body: string }[]; note: string; cta: string; example: { label: string; headline: string; steps: { title: string; body: string }[] } };
  firewall: { headline: string; lead: string; body: string[]; more: string };
  proof: {
    eyebrow: string;
    headline: string;
    voice: { quote: string; name: string; role: string };
  };
  paths: {
    eyebrow: string; headline: string;
    items: { name: string; body: string; price?: string; cta: string; href: string; note?: string }[];
    free: { body: string; cta: string; href: string };
  };
  close: { headline: string; body: string; cta: string; href: string };
}

export const talentV2En: TalentV2Content = {
  meta: {
    title: 'For talent. Make your signal impossible to miss | Purrfect Hire',
    description:
      'For senior professionals competing for high-impact opportunities across the US, Europe and Latin America. Understand how the market reads your experience and which level the evidence supports.',
  },
  hero: {
    eyebrow: 'For talent',
    headline: 'Make your signal impossible to miss.',
    sub: 'You may be operating above the level the market is assigning you. Or the evidence may not support the move yet. We help you know the difference.',
    audience:
      'For senior professionals across the US, Europe and Latin America.',
    cta: 'Explore Offer Accelerator',
    href: '/offer-acceleration',
    secondary: { label: 'Explore Career Compounding', href: '/career-compounding' },
  },
  problem: {
    eyebrow: 'The real question',
    headline: 'Experience and market signal are not the same thing.',
    body:
      'We examine the decisions you owned and the results you can substantiate. Then we test which level and opportunities that evidence supports.',
  },
  work: {
    eyebrow: 'The Offer Accelerator method',
    headline: 'Start with a diagnostic. Work on the decision ahead.',
    items: [
      { title: 'Diagnose the next move', body: 'Examine your experience, target market and the decision ahead. Set the priorities.' },
      { title: 'Make your contribution assessable', body: 'Show what you owned, what changed and what still needs to be tested.' },
      { title: 'Build your market strategy', body: 'Find companies where your experience solves a relevant problem. Build a reason to start the conversation.' },
      { title: 'Work through real processes', body: 'Prepare for interviews, examine feedback and assess offers against your goals.' },
    ],
    note: 'See the full scope and application on the Offer Accelerator page.',
    cta: 'Explore Offer Accelerator',
    example: {
      label: 'Illustrative exercise',
      headline: 'Make a claim someone can examine.',
      steps: [
        { title: 'The starting point', body: '“I led a cross-functional launch.”' },
        { title: 'The questions', body: 'Which decision was yours? What did others own? What changed, and which part can you substantiate?' },
        { title: 'The work you leave with', body: 'A specific account of your contribution, its context and the limits of the evidence.' },
      ],
    },
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
  proof: {
    eyebrow: 'Proof',
    headline: 'In their own words.',
    voice: {
      quote:
        'I did not join because I was struggling to find work. I joined because this time I wanted the job I took to be the one I chose, not the one the market chose for me.',
      name: 'Daniel Contreras',
      role: 'Product Designer, 10 years in technology and product',
    },
  },
  paths: {
    eyebrow: 'Ways in',
    headline: 'Support for the decision in front of you.',
    items: [
      {
        name: 'Offer Accelerator',
        body: 'For your next career move. Assess your level, choose your market and work through interviews and offers. Eight sessions, then process support while you execute the agreed plan.',
        price: 'USD 2,000',
        cta: 'Explore Offer Accelerator',
        href: '/offer-acceleration',
      },
      {
        name: 'Career Compounding',
        body: 'Grow inside your current role. Work on business impact, influence and decisions that support greater responsibility.',
        price: 'USD 5,000',
        cta: 'Explore Career Compounding',
        href: '/career-compounding',
      },
      {
        name: '1:1 Strategic Session',
        body: 'For one active process, a negotiation or a specific career decision.',
        price: 'USD 300',
        cta: 'Email to request a session',
        href: SESSION_1_1,
        note: 'Opens your email app. Include your role, LinkedIn and decision.',
      },
    ],
    free: {
      body: 'Apply to open roles for free. Paid advisory is never required and does not change how you are assessed.',
      cta: 'Browse open roles',
      href: '/roles',
    },
  },
  close: {
    headline: 'Choose the support your next decision needs.',
    body: 'Compare support for a career move, growth in your current role or one specific decision.',
    cta: 'Explore Offer Accelerator',
    href: '/offer-acceleration',
  },
};

export const getTalentV2 = (_lang: Lang): TalentV2Content => talentV2En;

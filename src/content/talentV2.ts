// ─────────────────────────────────────────────────────────────────────────
// For Talent. Launch copy, 14 October 2026 brief.
// Entry point to the ecosystem, not the Offer Accelerator product page:
// enough for someone senior to recognise their own problem, then click
// through.
// Rules: no coaching language, no program detail, no promise of
// introductions, no assumption that the person is already at the next level.
// Pricing policy (Oct 2026): B2B shows no price anywhere; the Offer
// Accelerator number lives only on its own page; the 1:1 session, the
// lowest-friction entry, shows its price here.
// Open roles is out of this release: no live destination with real vacancies
// at launch, so the card and the nav entry are withdrawn and the two
// remaining ways in stand on their own.
// ─────────────────────────────────────────────────────────────────────────
import type { Lang } from './index';
import { SESSION_1_1, CONSIDERED_FREE } from './links';

export { SESSION_1_1 as SESSION_MAILTO, CONSIDERED_FREE } from './links';

export interface TalentV2Content {
  meta: { title: string; description: string };
  hero: { eyebrow: string; headline: string; sub: string; audience: string; cta: string };
  problem: { eyebrow: string; headline: string; body: string };
  work: { eyebrow: string; headline: string; items: { title: string; body: string }[]; note: string; cta: string };
  firewall: { headline: string; lead: string; body: string[]; more: string };
  proof: {
    eyebrow: string;
    headline: string;
    voice: { quote: string; name: string; role: string };
  };
  paths: {
    eyebrow: string; headline: string;
    items: { name: string; body: string; cta: string; href: string; note?: string }[];
    free: { body: string; cta: string; href: string };
  };
  close: { headline: string; body: string; cta: string };
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
      'For senior professionals competing for high-impact opportunities across the US, Europe and Latin America.',
    cta: 'Explore Offer Accelerator',
  },
  problem: {
    eyebrow: 'The real question',
    headline: 'Experience and market signal are not the same thing.',
    body:
      'You can have the scope, judgment and results of a senior leader and still be read one level below. Sometimes the gap is what the market can see. Sometimes the evidence itself is not strong enough yet. We help you find out which one it is.',
  },
  work: {
    eyebrow: 'What changes',
    headline: 'Four things we work on with you.',
    items: [
      { title: 'Calibrate your level', body: 'Where your experience sits against the market you want to compete in.' },
      { title: 'Surface the evidence', body: 'What demonstrates your level, and what is still missing.' },
      { title: 'Build your market strategy', body: 'The companies, problems and moments where your experience is unusually relevant.' },
      { title: 'Create access', body: 'How to reach the people who decide, with a credible reason to talk.' },
    ],
    note: 'The method, what is included, the scope and the price live on the Offer Accelerator page.',
    cta: 'Explore Offer Accelerator',
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
    headline: 'Two ways to work with us.',
    items: [
      {
        name: 'Offer Accelerator',
        body: 'Our flagship advisory for senior professionals repositioning toward opportunities that match the level their evidence supports.',
        cta: 'Explore Offer Accelerator',
        href: '/offer-acceleration',
      },
      {
        name: '1:1 Strategic Session',
        body: 'For an active process, a negotiation or a specific career decision. USD 300.',
        cta: 'Request a session',
        href: SESSION_1_1,
        note: 'Sessions are requested by email. The button opens your email app with the three things we need: your current role, your LinkedIn and the decision you want to work on.',
      },
    ],
    free: {
      body: 'Being considered in a Purrfect search is free, and Offer Accelerator is never required. Send us your profile and we will come back to you when a search fits.',
      cta: 'Be considered for our searches',
      href: CONSIDERED_FREE,
    },
  },
  close: {
    headline: 'Let\'s assess your next move.',
    body: 'Understand what your experience supports, what is missing and where to focus next.',
    cta: 'Explore Offer Accelerator',
  },
};

export const getTalentV2 = (_lang: Lang): TalentV2Content => talentV2En;

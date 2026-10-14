// ─────────────────────────────────────────────────────────────────────────
// For Talent v2 (rebrand prototype). Entry point to the ecosystem, not the
// Offer Accelerator product page: enough for someone senior to recognise
// their own problem, then click through.
// Rules: no coaching language, no program detail, no promise of
// introductions, no assumption that the person is already at the next level.
// Pricing policy (Oct 2026): B2B shows no price anywhere; the Offer
// Accelerator number lives only on its own page; the 1:1 session, the
// lowest-friction entry, shows its price here; applying to roles is free.
// The firewall block is public only once the internal practice exists.
// ─────────────────────────────────────────────────────────────────────────
import type { Lang } from './index';

export interface TalentV2Content {
  meta: { title: string; description: string };
  hero: { eyebrow: string; headline: string; sub: string; audience: string; cta: string; photoNote: string };
  problem: { eyebrow: string; headline: string; body: string };
  work: { eyebrow: string; headline: string; items: { title: string; body: string }[]; note: string; cta: string };
  firewall: { headline: string; body: string[]; status: string };
  proof: {
    eyebrow: string;
    headline: string;
    note: string;
    results: { arc: string; detail: string; pending: string }[];
    voiceLabel: string;
    voice: { quote: string; name: string; role: string; translationNote: string; pending: string };
  };
  paths: { eyebrow: string; headline: string; items: { name: string; body: string; cta: string; href: string }[] };
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
    photoNote: '[REAL TALENT PHOTO — Offer Accelerator outcome, working environment]',
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
      {
        title: 'Calibrate your level',
        body: 'Understand where your experience actually sits against the market you want to compete in.',
      },
      {
        title: 'Surface the evidence',
        body: 'Identify the ownership, judgment and outcomes that demonstrate your level, and be clear about where the evidence is still missing.',
      },
      {
        title: 'Build your market strategy',
        body: 'Identify the companies, problems and moments where your experience is unusually relevant.',
      },
      {
        title: 'Create access',
        body: 'Reach founders, hiring managers and decision makers with a credible reason to talk, including before a role is publicly open.',
      },
    ],
    note: 'The method, what is included and how to apply live on the Offer Accelerator page.',
    cta: 'Explore Offer Accelerator',
  },
  firewall: {
    headline: 'Independent advice. Consistent evaluation.',
    body: [
      'Offer Accelerator provides career advisory. Participation in Offer Accelerator does not give candidates preferential treatment in Purrfect-managed searches.',
      'If you enter a search we manage, we pause advisory on that specific process, including offer negotiation. We explain this upfront and agree with you on disclosure to the hiring company before presenting your candidacy.',
      'Applications to our open roles are free. Offer Accelerator is never required.',
    ],
    status: 'Publish only once the internal practice is written and in use.',
  },
  proof: {
    eyebrow: 'Proof',
    headline: 'What changed for them.',
    note: 'Each case shows level and scope, the company, the access that did not exist before, and compensation only where the person authorised it. Nothing is published without written permission.',
    results: [
      {
        arc: 'DevOps · $9k → $15k per month',
        detail: 'Four months.',
        pending: 'Pending: currency, whether the two figures are comparable, the conditions on both sides, and written permission.',
      },
      {
        arc: 'Founder → Head of Product',
        detail: '[PENDING — the role, the company and what they became responsible for]',
        pending: 'Pending: the actual change of role, company and responsibilities, plus written permission. Positioning is not a result.',
      },
    ],
    voiceLabel: 'In their own words',
    voice: {
      quote:
        'I did not join because I was struggling to find work. I joined because this time I wanted the job I took to be the one I chose, not the one the market chose for me.',
      name: 'Daniel Contreras',
      role: 'Product Designer, 10 years in technology and product',
      translationNote: 'Translated from Spanish, approved by Daniel.',
      pending: 'Pending from Daniel: company, role and level before and after, and his photo.',
    },
  },
  paths: {
    eyebrow: 'Ways in',
    headline: 'Three ways to work with us.',
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
        cta: 'Book a session',
        href: '/career-sessions',
      },
      {
        name: 'Open roles',
        body: 'The searches we are currently running for clients. Applying is free, and Offer Accelerator is never required.',
        cta: 'Browse open roles',
        href: '/roles',
      },
    ],
  },
  close: {
    headline: 'Let\'s assess your next move.',
    body: 'Understand what your experience supports, what is missing and where to focus next.',
    cta: 'Explore Offer Accelerator',
  },
};

export const getTalentV2 = (_lang: Lang): TalentV2Content => talentV2En;

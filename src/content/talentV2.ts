// ─────────────────────────────────────────────────────────────────────────
// For Talent v2 (rebrand prototype). Entry point to the ecosystem, not the
// Offer Accelerator product page: enough for someone senior to recognise
// their own problem, then click through.
// Rules: no coaching language, no program detail, no pricing, no promise of
// introductions, no assumption that the person is already at the next level.
// The firewall block is public only once the internal practice exists.
// ─────────────────────────────────────────────────────────────────────────
import type { Lang } from './index';

export interface TalentV2Content {
  meta: { title: string; description: string };
  hero: { eyebrow: string; headline: string; sub: string; audience: string; cta: string; photoNote: string };
  problem: { eyebrow: string; headline: string; body: string };
  work: { eyebrow: string; headline: string; items: { title: string; body: string }[]; note: string; cta: string };
  firewall: { headline: string; body: string[]; status: string };
  proof: { eyebrow: string; headline: string; note: string; slots: string[] };
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
    sub: 'You may already be operating at the next level. The question is whether the market can see the evidence.',
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
      'Offer Accelerator provides career advisory. It does not provide preferential access to Purrfect searches or influence hiring decisions.',
      'If you enter a search we manage, we pause advisory on that specific process, including offer negotiation. We explain this upfront and agree with you on disclosure to the hiring company before presenting your candidacy.',
      'Applications to our open roles are free. Offer Accelerator is never required.',
    ],
    status: 'Publish only once the internal practice is written and in use.',
  },
  proof: {
    eyebrow: 'Proof',
    headline: 'What changed for them.',
    note: 'Each case shows level and scope, the company, the access that did not exist before, and compensation only where the person authorised it. Nothing is published without written permission.',
    slots: [
      '[PROOF PENDING — level or scope change]',
      '[PROOF PENDING — access to a company that was out of reach]',
      '[PROOF PENDING — scope increase in the same company]',
    ],
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
        body: 'For an active process, a negotiation or a specific career decision.',
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
    headline: 'Tell us how you want the market to read you.',
    body: 'We will tell you what we think it reads today.',
    cta: 'Explore Offer Accelerator',
  },
};

export const getTalentV2 = (_lang: Lang): TalentV2Content => talentV2En;

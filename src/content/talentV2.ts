import type { Lang } from './index';
import { SESSION_1_1, CONSIDERED_FREE } from './links';

export { SESSION_1_1 as SESSION_MAILTO, CONSIDERED_FREE } from './links';

export interface TalentV2Content {
  meta: { title: string; description: string };
  hero: { eyebrow: string; headline: string; sub: string; audience: string; cta: string; href: string };
  paths: {
    eyebrow: string; headline: string;
    items: { name: string; body: string; price: string; cta: string; href: string; note?: string; proof?: { label: string; href: string } }[];
    free: { body: string; cta: string; href: string };
  };
  firewall: { headline: string; lead: string };
  proof: { headline: string };
}

export const talentV2En: TalentV2Content = {
  meta: {
    title: 'For talent · Career advisory | Purrfect Hire',
    description: 'For senior professionals across the US, Europe and Latin America. Compare support for a career move, growth in your current role or one specific decision.',
  },
  hero: {
    eyebrow: 'For talent',
    headline: 'Make your next career decision with clarity.',
    sub: 'Compare support for a career move, growth in your current role or one specific decision.',
    audience: 'For senior professionals across the US, Europe and Latin America.',
    cta: 'Compare options',
    href: '#ways-in',
  },
  paths: {
    eyebrow: 'Choose your support',
    headline: 'Support for the decision in front of you.',
    items: [
      {
        name: 'Offer Accelerator',
        body: 'For your next career move. Assess your level, choose your market and work through interviews and offers. Eight sessions, then process support while you execute the agreed plan.',
        price: 'USD 2,000',
        cta: 'Explore Offer Accelerator',
        href: '/offer-acceleration',
        proof: { label: 'Read participant experiences', href: '/offer-acceleration/#voices' },
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
  firewall: {
    headline: 'Confidential advisory. Consistent evaluation.',
    lead: 'Advisory engagements are confidential. Participation in Offer Accelerator does not change how candidates are assessed in Purrfect client searches.',
  },
  proof: { headline: 'In their own words.' },
};

export const getTalentV2 = (_lang: Lang): TalentV2Content => talentV2En;

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
    sub: 'Choose by the work you need to do: compete for your next opportunity, grow in your current role, or work through one decision.',
    audience: 'Career advice informed by our work on both sides of hiring: founders defining the role and senior professionals competing for it.',
    cta: 'Compare options',
    href: '#ways-in',
  },
  paths: {
    eyebrow: 'Choose your support',
    headline: 'Support for the decision in front of you.',
    items: [
      {
        name: 'Offer Accelerator',
        body: 'Compete for your next opportunity with sharper positioning, targeted outreach and preparation for interviews, offers and negotiation. Work with a senior advisor, with process support while you actively execute the agreed plan.',
        price: 'USD 2,000 to 8,000',
        note: 'Eight one-hour sessions. Final investment depends on seniority and location.',
        cta: 'Explore Offer Accelerator',
        href: '/offer-acceleration',
        proof: { label: 'Read participant experiences', href: '/offer-acceleration/#voices' },
      },
      {
        name: 'Career Compounding',
        body: 'Make stronger decisions in the role you have. Work with Kate on a real business challenge, with preparation and feedback as you put the plan into practice.',
        price: 'USD 5,000',
        note: 'Nine one-hour sessions and eight asynchronous checkpoints over six months. Offer Accelerator is optional.',
        cta: 'Explore Career Compounding',
        href: '/career-compounding',
      },
      {
        name: '1:1 Strategic Session',
        body: 'Work through one interview, offer, negotiation or career decision with Kate. Leave with agreed next steps.',
        price: 'USD 300',
        cta: 'Request a session on WhatsApp',
        href: SESSION_1_1,
        note: 'One private hour with Kate.',
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

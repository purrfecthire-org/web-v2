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
        body: 'Choose this when you are changing company, market or scope. Build your positioning and work through outreach, interviews, offers and negotiation. One diagnostic and seven sessions with a senior consultant, followed by process support while you execute the agreed plan.',
        price: 'USD 2,000 to 8,000',
        note: 'Final investment depends on seniority and location.',
        cta: 'Explore Offer Accelerator',
        href: '/offer-acceleration',
        proof: { label: 'Read participant experiences', href: '/offer-acceleration/#voices' },
      },
      {
        name: 'Career Compounding',
        body: 'Choose this when you have a role and a real business challenge. Work on decisions, stakeholders and execution inside your company. Six months, nine sessions with Kate and eight asynchronous checkpoints. Offer Accelerator is optional.',
        price: 'USD 5,000',
        cta: 'Explore Career Compounding',
        href: '/career-compounding',
      },
      {
        name: '1:1 Strategic Session',
        body: 'Choose this for one interview, offer, negotiation or career decision. A focused conversation with Kate to examine it and agree your next steps.',
        price: 'USD 300',
        cta: 'Request a session on WhatsApp',
        href: SESSION_1_1,
        note: 'Include your role, LinkedIn and the question you want to work on.',
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

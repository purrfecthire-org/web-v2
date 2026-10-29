import type { Lang } from './index';
import { SESSION_1_1, CONSIDERED_FREE } from './links';
import { STRATEGIC_SESSION, OFFER_ACCELERATOR, CAREER_COMPOUNDING, DIAGNOSTIC_ENTRY } from './advisoryOffers';

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
        body: 'Plan your next move with focused positioning, outreach, interview preparation and negotiation. Start with Kate; continue with your confirmed senior advisor.',
        price: OFFER_ACCELERATOR.priceLabel,
        note: `${OFFER_ACCELERATOR.sessionCount} one-hour sessions total. Active-process follow-up until you start your next role, while you execute the agreed plan.`,
        cta: 'Explore Offer Accelerator',
        href: '/offer-acceleration',
        proof: { label: 'Read participant experiences', href: '/offer-acceleration/#voices' },
      },
      {
        name: 'Career Compounding',
        body: 'Work with Kate on people, influence and execution in your current role. Test your decisions on a challenge you can act on.',
        price: CAREER_COMPOUNDING.priceLabel,
        note: `${CAREER_COMPOUNDING.sessionCount} one-hour sessions total. ${CAREER_COMPOUNDING.durationLabel} and ${CAREER_COMPOUNDING.checkpointCount} checkpoints after continuation. Offer Accelerator is optional.`,
        cta: 'Explore Career Compounding',
        href: '/career-compounding',
      },
      {
        name: '1:1 Strategic Session',
        body: 'Work through one interview, offer, negotiation or career decision with Kate. Leave with a short written decision and next steps.',
        price: STRATEGIC_SESSION.priceLabel,
        cta: 'Request a session on WhatsApp',
        href: SESSION_1_1,
        note: `One private hour. Program credit for the same challenge within ${DIAGNOSTIC_ENTRY.creditWindowDays} days after this session.`,
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

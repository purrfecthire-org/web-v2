import type { Lang } from './index';

// The home page is an audience router with compact shared brand evidence.
// Each audience's offer and methodology live on its own page; English is
// the approved public language.
export const homeV2En = {
  meta: {
    title: 'Purrfect Hire | Senior search and career advisory',
    description: 'Senior and executive search for companies. Private career advisory for senior professionals. Choose the decision you are making.',
  },
  hero: {
    eyebrow: 'US, Europe and Latin America',
    headline: 'We know what to look for before the value is obvious.',
    sub: 'For companies making a critical hire, and senior professionals making a high-stakes career move.',
    companies: { label: 'For companies', promise: 'Reduce the risk of a critical hire.', detail: 'Senior and executive search.' },
    talent: { label: 'For talent', promise: 'Compete for your next senior opportunity.', detail: 'Private career advisory.' },
    choose: 'Choose your path',
    bookingCta: 'Book a founders call',
    whatsappCta: 'WhatsApp',
    photoAlt: 'Three people discussing work around a table.',
  },
  proof: { eyebrow: 'Trusted by founders at' },
  kate: {
    eyebrow: 'Purrfect Hire',
    headline: 'Founded by Kate Forero.',
    body: 'Kate led recruiting at Addi, working closely with its CTO. Today she brings that experience to consequential hiring and career decisions.',
    ctaCompanies: 'For companies',
    ctaTalent: 'For talent',
  },
};

export const getHomeV2 = (_lang: Lang) => homeV2En;

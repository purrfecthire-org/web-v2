import type { Lang } from './index';

// The home page is an audience router. Each audience's offer and proof live
// on its own page; English is the approved public language.
export const homeV2En = {
  meta: {
    title: 'Purrfect Hire | Senior search and career advisory',
    description: 'Senior and executive search for companies. Private career advisory for senior professionals. Choose the decision you are making.',
  },
  hero: {
    eyebrow: 'US, Europe and Latin America',
    headline: 'We know what to look for before the value is obvious.',
    sub: 'Choose the decision you’re making.',
    companies: { label: 'For companies', promise: 'Reduce the risk of a critical hire.', detail: 'Senior and executive search.' },
    talent: { label: 'For talent', promise: 'Compete for your next senior opportunity.', detail: 'Private career advisory.' },
    choose: 'Choose your path',
    photoAlt: 'Three people discussing work around a table.',
  },
  kate: {
    eyebrow: 'Purrfect Hire',
    headline: 'Founded by Kate Forero.',
    body: 'Kate led recruiting at Addi, working closely with its CTO. That experience shapes a belief at the heart of Purrfect Hire: understand the person, the problem and the context before making the decision.',
    ctaCompanies: 'For companies',
    ctaTalent: 'For talent',
  },
};

export const getHomeV2 = (_lang: Lang) => homeV2En;

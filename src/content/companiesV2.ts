// ─────────────────────────────────────────────────────────────────────────
// For Companies v2 (rebrand prototype). Same structure and method as the
// approved restructure, moved onto the new system: light hero with a lateral
// photograph, Midnight for the single weighted moment, Sand as the surface.
// Nothing here carries a figure that is not verified.
// ─────────────────────────────────────────────────────────────────────────
import type { Lang } from './index';

export interface CompaniesV2Content {
  meta: { title: string; description: string };
  hero: { eyebrow: string; headline: string; sub: string; credential: string; cta: string };
  problem: { eyebrow: string; headline: string; body: string[] };
  lenses: { eyebrow: string; headline: string; sub: string; items: { title: string; body: string }[] };
  method: { eyebrow: string; headline: string; steps: { id: string; title: string; body: string }[] };
  evidence: { eyebrow: string; headline: string; sub: string; items: string[] };
  proof: {
    eyebrow: string;
    arc: string;
    meta: string;
    body: string;
    pending: string;
    quote: string;
    name: string;
    role: string;
    logosLabel: string;
  };
  models: { eyebrow: string; headline: string; items: { name: string; note: string }[]; cta: string };
  kate: { eyebrow: string; headline: string; body: string; cta: string };
  close: { headline: string; body: string; cta: string; email: string };
}

export const companiesV2En: CompaniesV2Content = {
  meta: {
    title: 'For companies. Build smaller, stronger teams | Purrfect Hire',
    description:
      'Senior hires for early-stage companies, with the performance, judgment and slope to grow beyond the role. Evidence on every candidate.',
  },
  hero: {
    eyebrow: 'For companies',
    headline: 'Build smaller, stronger teams.',
    sub: 'Senior and executive hires across engineering, product, go-to-market and leadership, for people with the judgment, ownership and ability to grow as the company changes.',
    credential: 'VC-backed startups, seed to Series B · The search follows the market, working model and language of the role',
    cta: 'Start a search',
  },
  problem: {
    eyebrow: 'Why this hire is hard',
    headline: 'The wrong senior hire costs more than time. It changes what your company can build.',
    body: [
      'Having done the work before is the easy part to check. What decides the hire is how someone decides, how much they take on without being asked, what they do when the context is missing, and whether they can grow at the speed the company is growing.',
      'The job also changes while you are hiring for it.',
    ],
  },
  lenses: {
    eyebrow: 'What we look for',
    headline: 'Four things you get from working with us.',
    sub: 'A résumé tells you where someone was standing. This is how we find out what they did there.',
    items: [
      { title: 'Hires that grow with the company', body: 'We look at what they actually owned, how they decide, and whether they can grow as the company changes.' },
      { title: 'A read on the search before sourcing', body: 'We review the problem and the stage of the company before we open the search.' },
      { title: 'A read on the role, before any commitment', body: 'We tell you what the role actually requires, and what it will take to fill it, before anything is signed.' },
      { title: 'Evidence on every candidate', body: 'We meet each person before presenting them, and the recommendation separates what we observed, what was stated and what we could not validate.' },
    ],
  },
  method: {
    eyebrow: 'How we work',
    headline: 'Four steps.',
    steps: [
      { id: '01', title: 'Understand the company', body: 'We learn what the role actually needs to change, how your team operates and what success looks like six months from now.' },
      { id: '02', title: 'Calibrate the bar', body: 'We define the evidence, behaviors and trade-offs that matter before opening the search.' },
      { id: '03', title: 'Find and assess', body: 'We source globally and test candidates against the actual problem, not only the job description.' },
      { id: '04', title: 'Learn from outcomes', body: 'Every hire, pass and miss improves how we calibrate the next search.' },
    ],
  },
  evidence: {
    eyebrow: 'What you get',
    headline: 'Evidence on every candidate.',
    sub: 'For every candidate we present, you receive a written assessment of their experience, the evidence behind our recommendation and what remains unverified.',
    pending: 'Pending before publishing: one real anonymised example, and the search lead approving the report and confirming the delivery standard. Until then this section stays in review.',
    items: [
      'What we saw',
      'What they owned',
      'Where the evidence is strongest',
      'What we did not validate',
      'Risks and open questions',
    ],
  },
  proof: {
    eyebrow: 'Built for what comes next',
    arc: 'Product Lead → Director of Product',
    meta: 'Two years · San Francisco startup',
    body: 'We placed a Product Lead at an early-stage San Francisco startup. Within two years they had grown into Director of Product. That is the hire we look for: someone who solves the problem in front of them today and grows into what the company needs next.',
    pending: 'Pending before publishing: confirm the facts and the written permission, including whether the city can be named.',
    quote: 'Purrfect Hire adapted to our processes and to each specific role. They\'re a real search partner, not just a pipeline.',
    name: 'Fabián Torres',
    role: 'CEO, Trébol (CO)',
    logosLabel: 'Trusted by founders at',
  },
  models: {
    eyebrow: 'Working together',
    headline: 'Two ways to work together, depending on the search and the hiring volume.',
    items: [
      { name: 'Success fee', note: 'You pay only when you hire.' },
      { name: 'All You Can Hire', note: 'Several urgent roles at once, on a monthly fee instead of a percentage.' },
    ],
    cta: 'Scope it on a call',
  },
  kate: {
    eyebrow: 'Who is behind the searches',
    headline: 'Built from inside early-stage companies.',
    body: 'Kate led recruiting through Addi\'s growth, from an early-stage team to almost 500 people, post-Series B. Purrfect Hire came out of seeing first hand which hires scale with a company and which ones stall.',
    cta: 'Meet Kate',
  },
  close: {
    headline: 'Tell us what this hire needs to change.',
    body: 'We will tell you what we think the search actually requires.',
    cta: 'Start a search',
    email: 'hiring@purrfecthire.com',
  },
};

export const getCompaniesV2 = (_lang: Lang): CompaniesV2Content => companiesV2En;

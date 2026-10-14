// ─────────────────────────────────────────────────────────────────────────
// For Companies. Launch copy, 14 October 2026 brief.
// Light hero with a lateral photograph, Midnight for the single weighted
// moment, Ivory as the surface.
// Rules baked in: no fee and no percentages, no retainer, no placement or
// retention metrics, no figure that is not verified, no em dashes, no
// "not X, it's Y". No internal review notes: pendings live in the team doc.
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
      'Senior and executive search for VC-backed startups across engineering, product, go-to-market and leadership. Evidence on every candidate.',
  },
  hero: {
    eyebrow: 'For companies',
    headline: 'Build smaller, stronger teams.',
    sub: 'Senior and executive search across engineering, product, go-to-market and leadership. We assess the ownership, judgment and capacity to grow that each role requires.',
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
      { title: 'A read on the role, before any commitment', body: 'Before you commit, we give you a read on where the profile sits in the market, what it pays, what moves candidates and the three questions we would screen with.' },
      { title: 'Evidence on every candidate', body: 'We meet each person before presenting them, and the recommendation separates what we observed, what they owned and what remains to be validated.' },
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
    sub: 'We meet each person before presenting them. Our recommendation explains what we observed, what they owned and what remains to be validated.',
    items: [
      'What we saw',
      'What they owned',
      'Where the evidence is strongest',
      'What we did not validate',
      'Risks and open questions',
    ],
  },
  proof: {
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
    body: 'Kate led recruiting at Addi. Today, Purrfect Hire runs senior and executive searches for VC-backed companies across the US, Europe and Latin America.',
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

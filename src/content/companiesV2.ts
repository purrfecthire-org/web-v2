import type { Lang } from './index';

// Conversion brief, October 2026. Keep all primary actions on BOOKING_B2B.
// Evidence gaps for PR review:
// - The brief's Head of Engineering example is illustrative, not a real case.
//   The page shows only the structure until a sourced, anonymized brief exists.
// - Selected searches contain only the documented brief, assessment feedback
//   or post-hire feedback. Missing outcomes and candidate-level evidence are omitted.
//   The requested fintech/product case had no matching source; the sourced
//   technical product example is Series A energy infrastructure.
// - Keep the existing Fabian testimonial. Additional testimonials need a
//   verified author and source before joining proof.voices.
// - No ADDI headcount figure, calendar duration, fee percentage or performance
//   metric is asserted. The booking destination is managed in content/links.ts.

export interface CompanySearchCase {
  title: string;
  company: string;
  stage: string;
  role: string;
  problem: string;
  intervention: string;
  outcome?: string;
  evidence?: string;
}

export interface CompaniesV2Content {
  meta: { title: string; description: string };
  hero: { eyebrow: string; headline: string; sub: string; credential: string; cta: string; microcopy: string };
  situations: { eyebrow: string; headline: string; items: { title: string; body: string }[] };
  read: { eyebrow: string; headline: string; body: string; items: string[]; cta: string; microcopy: string };
  evidence: { eyebrow: string; headline: string; body: string; label: string; items: { title: string; body: string }[]; cta: string };
  selectedSearches: { eyebrow: string; headline: string; problemLabel: string; interventionLabel: string; outcomeLabel: string; items: CompanySearchCase[] };
  method: { eyebrow: string; headline: string; steps: { id: string; title: string; body: string }[] };
  proof: { eyebrow: string; headline: string; voices: { quote: string; name: string; role: string; photo: string; photoWebp: string }[]; logosLabel: string; markets: string };
  models: { eyebrow: string; headline: string; items: { name: string; note: string }[]; recommendation: string; cta: string };
  kate: { eyebrow: string; headline: string; body: string[]; cta: string };
  close: { headline: string; body: string; cta: string; email: string; emailLabel: string; howNote: string };
  photo: { heroAlt: string; kateAlt: string };
}

export const companiesV2En: CompaniesV2Content = {
  meta: {
    title: 'Senior and executive search for startups | Purrfect Hire',
    description: 'Senior and executive search for seed to Series B startups. Get an initial read on the role, the market and the evidence your search needs before you commit.',
  },
  hero: {
    eyebrow: 'For founders',
    headline: 'Hire someone who chooses to build with you.',
    sub: 'Senior and executive search for venture-backed companies. We assess what a person can build, why this company matters to them and the evidence behind both.',
    credential: 'Searches across the US, Europe and Latin America.',
    cta: 'Get a read on your search',
    microcopy: 'Tell us the role and what it needs to change. We’ll tell you what we think the search actually requires.',
  },
  situations: {
    eyebrow: 'When founders bring us in',
    headline: 'The role is open. The real hiring bar is not always clear.',
    items: [
      { title: 'The role keeps changing', body: 'The company is moving faster than the job description, and the person hired today will inherit a different problem six months from now.' },
      { title: 'Inbound is producing résumés, not conviction', body: 'Candidates meet the stated requirements, but none feels like someone you would build the company around.' },
      { title: 'The people you want are not applying', body: 'The strongest candidates are performing elsewhere and need a specific reason to consider your company.' },
      { title: 'You need a builder, not an inheritor', body: 'The role requires someone who can create the function while still doing the work.' },
      { title: 'The hire has to outgrow the role', body: 'You need evidence that the person can expand their scope as the company grows, not only succeed in the job as it exists today.' },
    ],
  },
  read: {
    eyebrow: 'Before the search',
    headline: 'Search Calibration. Before you commit.',
    body: 'Before you open the search, we help you define what this person must solve, what evidence proves they can do it and where that talent sits.',
    items: [
      'Where the profile sits in the market',
      'What strong candidates are likely to expect',
      'What may move them',
      'The three questions we would use to test the hiring bar',
    ],
    cta: 'Get a Search Calibration',
    microcopy: 'No deck or commitment required. We’ll use the call to pressure-test the role and tell you what we think the search requires.',
  },
  evidence: {
    eyebrow: 'What you receive',
    headline: 'A recommendation you can challenge.',
    body: 'We show you the evidence behind a recommendation, the limits of that evidence and what still needs to be tested.',
    label: 'Inside a candidate brief',
    items: [
      { title: 'Evidence observed', body: 'What the person demonstrated in our screen, including what they solved independently and where they needed a hint.' },
      { title: 'What they owned', body: 'The decisions, work and outcomes we can attribute to the person, with the context in which they operated.' },
      { title: 'Strongest signal', body: 'Which evidence matters most for the problem this role needs to solve, and why.' },
      { title: 'Why this company', body: 'The person’s reasons for considering your company, their understanding of the work and the conditions that would make the decision mutual.' },
      { title: 'Risk', body: 'Where the experience or evidence leaves uncertainty for your company’s next stage.' },
      { title: 'Still to validate', body: 'What we could not test and the questions that should guide the next conversation.' },
    ],
    cta: 'See a sample candidate brief',
  },
  selectedSearches: {
    eyebrow: 'Selected searches',
    headline: 'What the search looked like from the inside.',
    problemLabel: 'The problem',
    interventionLabel: 'Search approach',
    outcomeLabel: 'Outcome',
    items: [
      {
        title: 'Finding the technical requirement behind a product title.',
        company: 'Energy infrastructure', stage: 'Series A', role: 'Technical Product Manager',
        problem: 'The role needed to translate data centre requirements into power-system specifications and a product roadmap. General software product experience did not establish that technical depth.',
        intervention: 'The brief focused on the intersection of power systems, data centre infrastructure and technical product ownership.',
        evidence: 'Experience with electrical systems, customer requirements, product decisions and field deployments. A software PM title alone did not answer those questions.',
      },
      {
        title: 'Checking the recommendation after the person joins.',
        company: 'Consumer privacy technology', stage: '', role: 'Backend Engineer',
        problem: 'A senior engineering search for a product working with personal data.',
        intervention: 'The search included a backend hire and follow-up with the client after the person joined. We keep post-hire feedback distinct from evidence gathered during selection.',
        outcome: 'The client reported positive performance after the hire. This is feedback from that point in time, rather than a retention statistic.',
      },
      {
        title: 'Backend strength did not answer the whole brief.',
        company: 'Early-stage startup', stage: '', role: 'Founding Full-Stack Engineer',
        problem: 'Candidates demonstrated backend strength in technical assessments, while the role also required strong frontend delivery and product interface quality.',
        intervention: 'The assessment feedback made React, TypeScript, frontend architecture, performance and interface quality explicit requirements for the search.',
        evidence: 'Work spanning backend logic, API integration and the user interface. The assessment needed to expose which parts the person could deliver independently.',
      },
    ],
  },
  method: {
    eyebrow: 'How we work',
    headline: 'A search that gets clearer as we learn.',
    steps: [
      { id: '01', title: 'Define the real bar', body: 'We identify what this person needs to change, what success looks like six months in and which trade-offs the role requires.' },
      { id: '02', title: 'Reach and assess', body: 'We approach the relevant market directly and assess candidates against the problem, not only the job description.' },
      { id: '03', title: 'Calibrate until the evidence is clear', body: 'Every candidate, pass and interview outcome improves the search. You see what we are learning and what we would change.' },
    ],
  },
  proof: {
    eyebrow: 'From the founders we work with',
    headline: 'A search partner who understands the role.',
    voices: [
      {
        quote: "Purrfect Hire adapted to our processes and to each specific role. They're a real search partner, not just a pipeline.",
        name: 'Fabián Torres',
        role: 'CEO, Trébol (CO)',
        photo: '/brand/fabian-torres.jpg',
        photoWebp: '/brand/fabian-torres.webp',
      },
    ],
    logosLabel: 'Trusted by founders at',
    markets: 'Searches across the US, Europe and Latin America.',
  },
  models: {
    eyebrow: 'Working together',
    headline: 'The model follows your hiring plan.',
    items: [
      { name: 'Success fee', note: 'For a specific search. No upfront fee. You pay only when you hire.' },
      { name: 'Dedicated hiring partnership', note: 'For companies building several roles at once. A dedicated team and a monthly fee instead of a percentage per hire.' },
    ],
    recommendation: 'We recommend the model after understanding the hiring plan.',
    cta: 'Discuss the right model',
  },
  kate: {
    eyebrow: 'Who is behind the search',
    headline: 'Built from inside an early-stage company.',
    body: [
      'Before founding Purrfect Hire, Kate helped scale recruiting at Addi while working closely with its CTO. That experience shaped how Purrfect evaluates ownership, judgment and the capacity to grow beyond an initial role.',
      'Today, Purrfect works with founders building teams across the US, Europe and Latin America.',
    ],
    cta: 'Meet Kate',
  },
  close: {
    headline: 'What does this hire need to change?',
    body: 'Tell us the role, the company stage and what has made the search difficult. We’ll tell you what we think the market and hiring bar require.',
    cta: 'Get a read on your search',
    email: 'go@purrfecthire.com',
    emailLabel: 'Prefer email? Write to',
    howNote: '20 minutes. No deck or commitment required.',
  },
  photo: {
    heroAlt: 'People discussing work at a table in an office.',
    kateAlt: 'Kate Forero',
  },
};

export const getCompaniesV2 = (_lang: Lang): CompaniesV2Content => companiesV2En;

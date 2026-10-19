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
// - No ADDI headcount figure, fee percentage or performance metric is asserted.
//   The approved initial read is a free 20-minute introductory call.
//   The booking destination is managed in content/links.ts.

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
  hero: { eyebrow: string; headline: string; sub: string; credential: string; cta: string; whatsappCta: string; microcopy: string };
  situations: { eyebrow: string; headline: string; items: { title: string; body: string }[] };
  read: { eyebrow: string; headline: string; sampleLabel: string; body: string; items: string[]; cta: string; microcopy: string };
  evidence: { eyebrow: string; headline: string; body: string; label: string; items: { title: string; body: string }[]; cta: string };
  selectedSearches: { eyebrow: string; headline: string; problemLabel: string; interventionLabel: string; outcomeLabel: string; items: CompanySearchCase[] };
  method: { eyebrow: string; headline: string; steps: { id: string; title: string; body: string }[] };
  proof: { eyebrow: string; headline: string; voices: { quote: string; name: string; role: string; excerptLabel?: string; context?: string; photo?: string; photoWebp?: string }[]; logosLabel: string; markets: string };
  models: { eyebrow: string; headline: string; items: { name: string; note: string }[]; cta: string };
  kate: { eyebrow: string; headline: string; body: string[]; cta: string };
  close: { headline: string; body: string; cta: string; email: string; emailLabel: string };
  photo: { heroAlt: string; kateAlt: string };
}

export const companiesV2En: CompaniesV2Content = {
  meta: {
    title: 'Senior and executive search for startups | Purrfect Hire',
    description: 'Senior and executive search for venture-backed companies. Get an initial read on the role, the market and the evidence your search needs before you commit.',
  },
  hero: {
    eyebrow: 'For founders',
    headline: 'Hire someone who chooses to build with you.',
    sub: 'Senior and executive search for venture-backed companies. We assess what people can build, why they choose your company and the evidence for both.',
    credential: 'Searches across the US, Europe and Latin America.',
    whatsappCta: 'Message us on WhatsApp',
    cta: 'Book a 20-minute founders call',
    microcopy: 'A free 20-minute introductory call. No commitment.',
  },
  situations: {
    eyebrow: 'When founders bring us in',
    headline: 'When a search needs a closer look.',
    items: [
      { title: 'The role keeps changing', body: 'The company is changing faster than the job description. The hire must keep up.' },
      { title: 'Inbound is producing résumés, not conviction', body: 'Applicants meet the requirements. You still lack conviction about building with them.' },
      { title: 'The people you want are not applying', body: 'They are performing elsewhere. Your company needs to give them a reason to move.' },
      { title: 'You need a builder, not an inheritor', body: 'Someone needs to build the function and do the work.' },
      { title: 'The hire has to outgrow the role', body: 'You need evidence their scope can grow with the company.' },
    ],
  },
  read: {
    eyebrow: 'Before the search',
    headline: 'Search Calibration. Part of defining the search.',
    sampleLabel: 'See a Search Calibration',
    body: 'Before you open the search, we help you define what this person must solve, what evidence proves they can do it and where that talent sits.',
    items: [
      'Where the profile sits',
      'What candidates expect',
      'What may move them',
      'Three questions to test the requirements',
    ],
    cta: 'Book a 20-minute founders call',
    microcopy: 'Included in search definition, with no separate purchase.',
  },
  evidence: {
    eyebrow: 'What you receive',
    headline: 'A recommendation you can challenge.',
    body: 'See the evidence, its limits and what still needs testing.',
    label: 'Inside a candidate brief',
    items: [
      { title: 'Evidence observed', body: 'What they demonstrated, solved independently or needed a hint to complete.' },
      { title: 'What they owned', body: 'Their decisions, work and outcomes, in context.' },
      { title: 'Strongest signal', body: 'The evidence most relevant to your problem, and why.' },
      { title: 'Why this company', body: 'Ask them to explain your constraints, the work they would do themselves and their conditions for joining. Separate stated motives from observed evidence.' },
      { title: 'Risk', body: 'Uncertainty about their fit for your next stage.' },
      { title: 'Still to validate', body: 'What remains untested, and the next questions to ask.' },
    ],
    cta: 'See a sample candidate brief',
  },
  selectedSearches: {
    eyebrow: 'Real searches · anonymized',
    headline: 'What the search looked like from the inside.',
    problemLabel: 'The problem',
    interventionLabel: 'Search approach',
    outcomeLabel: 'Outcome',
    items: [
      {
        title: 'The technical requirement behind a product title.',
        company: 'Energy infrastructure', stage: 'Series A', role: 'Technical Product Manager',
        problem: 'The role combined data centre requirements, power-system specifications and a technical roadmap. Software PM experience alone was insufficient.',
        intervention: 'The brief required power systems, data centre infrastructure and technical product ownership.',
        evidence: 'Electrical systems, customer requirements, product decisions and field deployments.',
      },
      {
        title: 'Checking the hire after joining.',
        company: 'Consumer privacy technology', stage: '', role: 'Backend Engineer',
        problem: 'A senior engineering search for a product working with personal data.',
        intervention: 'A backend hire was followed by client feedback, kept separate from evidence gathered during selection.',
        outcome: 'The client reported positive performance after joining. It was a point-in-time assessment.',
      },
      {
        title: 'Backend strength, frontend gaps.',
        company: 'Early-stage startup', stage: '', role: 'Founding Full-Stack Engineer',
        problem: 'Technical assessments showed backend strength. The role also required strong frontend delivery and interface quality.',
        intervention: 'Assessment feedback specified React, TypeScript, frontend architecture, performance and interface quality.',
        evidence: 'Backend logic, API integration and UI delivery, with independent contribution made explicit.',
      },
    ],
  },
  method: {
    eyebrow: 'How we work',
    headline: 'From role definition to recommendation.',
    steps: [
      { id: '01', title: 'Define the real bar', body: 'Define what must change, success six months in and the role’s constraints.' },
      { id: '02', title: 'Reach and assess', body: 'Approach the relevant market. Assess candidates against the business problem.' },
      { id: '03', title: 'Calibrate until the evidence is clear', body: 'Each assessment informs the search. You see what we learn and recommend changing.' },
    ],
  },
  proof: {
    eyebrow: 'Client feedback',
    headline: 'What clients say about the work.',
    voices: [
      {
        quote: "Purrfect Hire adapted to our processes and to each specific role. They're a real search partner, not just a pipeline.",
        name: 'Fabián Torres',
        role: 'CEO, Trébol (CO)',
        photo: '/brand/fabian-torres.jpg',
        photoWebp: '/brand/fabian-torres.webp',
      },
      {
        // Original feedback: Notion 3f988cc78f96812db8d0e67567c41bd7.
        // Exact excerpt; do not infer a job title that the source does not give.
        quote: 'made it really easy for me to focus on why this would be a suitable candidate',
        name: 'Michelle Paredes',
        role: 'Viva',
        context: 'On the explanation accompanying a candidate · November 2023',
      },
      {
        // Original post-hire feedback: 3f988cc78f968139b5f8cf9784bac87e.
        // The named hire is deliberately omitted from this exact excerpt.
        quote: 'integrated to the team and is productive, we’re pleased with him',
        name: 'Chen Atlas',
        role: 'Co-founder & CTO, Optery',
        excerptLabel: 'Excerpt from client feedback',
        context: 'After a Purrfect hire joined the team · February 2025',
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
      { name: 'Dedicated hiring partnership', note: 'A dedicated team for several roles, paid monthly.' },
    ],
    cta: 'Book a 20-minute founders call',
  },
  kate: {
    eyebrow: 'Who is behind the search',
    headline: 'Built from inside an early-stage company.',
    body: [
      'Kate helped scale recruiting at Addi alongside its CTO before founding Purrfect. That experience shapes how we assess ownership, judgment and growth.',
      'Today, Purrfect works with founders across the US, Europe and Latin America.',
    ],
    cta: 'Meet Kate',
  },
  close: {
    headline: 'What does this hire need to change?',
    body: 'Tell us the role, company stage and where the search is stuck. We’ll give you our read.',
    cta: 'Book a 20-minute founders call',
    email: 'go@purrfecthire.com',
    emailLabel: 'Prefer email? Write to',
  },
  photo: {
    heroAlt: 'People discussing work at a table in an office.',
    kateAlt: 'Kate Forero',
  },
};

export const getCompaniesV2 = (_lang: Lang): CompaniesV2Content => companiesV2En;

// ─────────────────────────────────────────────────────────────────────────────
// Role / Position detail data model + one sample role.
//
// PRODUCT RULE — company identity is NEVER revealed.
// There are intentionally NO identifying fields here: no company name, website,
// logo, domain, or social links. The backend never sends them and the front end
// never stores them. The page describes the company richly (industry, strengths,
// stage, awards) to make a candidate fall in love with it, but the only label ever
// shown is `companyLabel` — a generic placeholder like "Confidential Company".
//
// CONDITIONAL RENDERING — every optional field (`?`) must be hidden entirely when
// absent. No empty tags, no placeholder boxes. If `ycBatch` is missing, no YC badge
// renders; if `interviewProcess` is missing, the whole timeline section disappears.
// ─────────────────────────────────────────────────────────────────────────────

export interface RoleAward {
  label: string; // "Best Place to Work"
  year?: string; // "2024"
  source?: string; // "Glassdoor" | "Comparably" | "Great Place to Work"
}

export interface RoleStage {
  name: string; // "Intro / Culture Call"
  duration?: string; // "30 min"
  group: 'internal' | 'client'; // internal = Purrfect Hire stage, client = company stage
  detail?: string; // optional one-liner about the stage
}

export interface Role {
  /** Role title — the only company-adjacent text shown is `companyLabel`. */
  title: string;
  /** Generic, non-identifying label. Never a real company name. */
  companyLabel: string;

  // ── Availability ──────────────────────────────────────────────────────────
  countries: string[]; // ["LatAm"] or ["Colombia", "Mexico"] — one or many
  states?: string[]; // ["Bogotá", "Cali", "Medellín"] — optional, one or many
  employmentType: string; // "Full-time" | "Part-time"
  modality: string; // "Remote" | "Hybrid" | "On-site"
  englishLevel?: string; // "C1 · Advanced" — optional, also echoed in requirements

  // ── Company (descriptive only, front-end only, NON-identifying) ────────────
  company: {
    description: string; // the "fall in love" paragraph
    industry?: string;
    strengths?: string[]; // highlight pills
    size?: string; // "50–200 people"
    founded?: string; // "2019"
    funding?: string; // "$25M · Series A"
    ycBatch?: string; // "W23" → emphasized Y Combinator badge when present
    awards?: RoleAward[];
  };

  // ── The role ───────────────────────────────────────────────────────────────
  roleDescription: string; // what they're building / the profile they want
  skills?: string[]; // ["Python", "TypeScript", "LLMs"]
  requirements: {
    mandatory: string[];
    niceToHave?: string[];
  };

  // ── Optional ────────────────────────────────────────────────────────────────
  interviewProcess?: RoleStage[];

  // ── CTA ──────────────────────────────────────────────────────────────────────
  applyEmail?: string;
}

/**
 * One fully-populated sample role. Every optional field is filled so each design
 * variant can demonstrate its full range. Swap individual fields to `undefined`
 * to verify the conditional-rendering (hide-when-absent) behavior.
 */
export const roleSample: Role = {
  title: 'Senior AI / Backend Engineer',
  companyLabel: 'Confidential Company',

  countries: ['Colombia', 'LatAm'],
  states: ['Bogotá', 'Medellín', 'Cali'],
  employmentType: 'Full-time',
  modality: 'Remote',
  englishLevel: 'C1 · Advanced',

  company: {
    description:
      'A fast-growing developer-tools startup building the infrastructure layer that lets ' +
      'product teams ship LLM-powered features without standing up their own ML platform. ' +
      'Backed by top-tier US investors, the team is small, senior, and ships to production ' +
      'every day — engineers own problems end to end, from API design to the metrics dashboard.',
    industry: 'Developer Tools · AI Infrastructure',
    strengths: [
      'Senior-only engineering team',
      'Async, low-meeting culture',
      'Ship-to-prod daily',
      'Real equity, early stage',
      'Strong staff-engineer mentorship',
    ],
    size: '20–50 people',
    founded: '2021',
    funding: '$18M · Series A',
    ycBatch: 'W23',
    awards: [
      { label: 'Best Place to Work', year: '2024', source: 'Comparably' },
      { label: 'Top Startups to Watch', year: '2024', source: 'Forbes' },
      { label: '4.7★ Culture Rating', source: 'Glassdoor' },
    ],
  },

  roleDescription:
    'You will own core services in the platform that orchestrates model calls, caching, and ' +
    'evaluation pipelines at scale. We are looking for a pragmatic backend engineer who is ' +
    'comfortable in an ambiguous, fast-moving environment, cares about clean APIs and ' +
    'observability, and is excited to go deep on applied LLM systems. You will work directly ' +
    'with the founders and have a real say in architecture decisions.',
  skills: ['Python', 'TypeScript', 'PostgreSQL', 'LLMs', 'AWS', 'Docker', 'Kubernetes'],
  requirements: {
    mandatory: [
      '5+ years building and operating production backend services',
      'Strong Python and solid TypeScript',
      'Experience designing and scaling REST / async APIs',
      'Comfortable owning features end to end in a small team',
      'Professional working English (written and spoken)',
    ],
    niceToHave: [
      'Hands-on experience with LLM / RAG pipelines',
      'Familiarity with vector databases (pgvector, Pinecone, etc.)',
      'Prior early-stage / YC startup experience',
      'Contributions to open-source developer tools',
    ],
  },

  interviewProcess: [
    {
      name: 'Intro / Culture Call',
      duration: '30 min',
      group: 'internal',
      detail: 'A relaxed conversation with Purrfect Hire to align on goals and expectations.',
    },
    {
      name: 'Technical Screen',
      duration: '60 min',
      group: 'internal',
      detail: 'Live discussion of past systems you have built — no whiteboard trivia.',
    },
    {
      name: 'Take-home / Pairing',
      duration: '90 min',
      group: 'client',
      detail: 'A short, realistic task reviewed together with the company team.',
    },
    {
      name: 'Founder Conversation',
      duration: '45 min',
      group: 'client',
      detail: 'Meet the founders, dig into the roadmap, and ask anything.',
    },
  ],

  applyEmail: 'talent@purrfecthire.com',
};

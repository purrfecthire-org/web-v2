// ─────────────────────────────────────────────────────────────────────────
// Home v3 (rebrand). Six blocks: hero router with a brand layer, trust
// strip, For Companies (primary audience), For Talent (four lines), shared
// point of view, Kate.
// Copy rules baked in: no fee, no unverified figures (160+ and 80% are out
// until each has a written definition), no coaching or program detail on
// the Home, no promise of introductions, no em dashes, no "not X, it's Y".
// ─────────────────────────────────────────────────────────────────────────
import type { Lang } from './index';

export interface HomeV2Content {
  meta: { title: string; description: string };
  nav: { companies: string; talent: string; roles: string; kate: string; cta: string };
  hero: {
    headline: string;
    sub: string;
    companies: { label: string; promise: string };
    talent: { label: string; promise: string };
    photoNote: string;
  };
  trust: { label: string; evidence: string };
  companies: {
    eyebrow: string;
    headline: string;
    intro: string;
    hard: string;
    pov: string;
    evidence: string;
    quoteLabel: string;
    cta: string;
  };
  talent: {
    eyebrow: string;
    headline: string;
    body: string;
    sub: string;
    cta: string;
    catNote: string;
    storyNote: string;
  };
  belief: { eyebrow: string; statement: string; forCompanies: string; forTalent: string };
  kate: { eyebrow: string; headline: string; body: string; ctaCompanies: string; ctaTalent: string; photoNote: string };
  footer: { legal: string; privacy: string; linkedin: string };
}

export const homeV2En: HomeV2Content = {
  meta: {
    title: 'Purrfect Hire. Senior hires for startups between seed and Series B',
    description:
      'Senior hires for startups between seed and Series B. Evidence on every candidate.',
  },
  nav: {
    companies: 'For companies',
    talent: 'For talent',
    roles: 'Open roles',
    kate: 'Kate',
    cta: 'Start a search',
  },
  hero: {
    headline: 'Exceptional people build extraordinary things.',
    sub: 'Purrfect Hire is a global talent boutique for early-stage companies. We run senior searches across the US, Europe and Latin America, matching exceptional people to the problem, stage and operating context of the company.',
    companies: { label: 'For companies', promise: 'Build smaller, stronger teams.' },
    talent: { label: 'For talent', promise: 'Make your signal impossible to miss.' },
    photoNote: '[REAL TEAM PHOTO — Purrfect or a client team, candid, natural light]',
  },
  trust: {
    label: 'Trusted by founders at',
    evidence: 'Evidence on every candidate.',
  },
  companies: {
    eyebrow: 'For companies',
    headline: 'Build smaller, stronger teams.',
    intro:
      'Senior hires across engineering, product, go-to-market and leadership.',
    hard:
      'Early-stage roles change while you are hiring for them.',
    pov:
      'We look beyond whether someone can do the job today: what they actually owned, how they make decisions, how fast they learn and whether their slope matches where the company is going.',
    evidence: 'Every candidate comes with evidence.',
    quoteLabel: 'A client, in his words',
    casePhotoNote: '[REAL CLIENT PHOTO — Head of Customer Operations, working environment]',
    cta: 'See how we work with companies',
  },
  talent: {
    eyebrow: 'For talent',
    headline: 'Make your signal impossible to miss.',
    body: 'You may be operating above the level the market is assigning you. Or the evidence may not support the move yet.',
    sub: 'We help senior professionals understand how the market reads their experience, which level the evidence actually supports, and what is still missing.',
    cta: 'Explore Offer Accelerator',
    catNote: '[REAL TALENT PHOTO — Offer Accelerator outcome, working environment]',
    storyNote: 'Story pending. One real professional, with written permission. Level or scope change, not only compensation.',
  },
  belief: {
    eyebrow: 'What we believe',
    statement:
      'Better talent decisions come from better signal, deeper context and stronger judgment.',
    forCompanies: 'For companies: we help you tell real signal from noise.',
    forTalent: 'For talent: we help you find what your evidence supports, and make it visible.',
  },
  kate: {
    eyebrow: 'Purrfect Hire',
    headline: 'Founded by Kate Forero.',
    body: 'Kate led recruiting at Addi through two years of growth, to almost 500 people, post-Series B. Today Purrfect Hire runs senior searches globally for early-stage companies, including teams backed by YC, a16z and Sequoia.',
    ctaCompanies: 'For companies',
    ctaTalent: 'For talent',
    photoNote: '[REAL KATE PHOTO — documentary, not a corporate headshot]',
  },
  footer: { legal: '© 2026 Purrfect Hire', privacy: 'Privacy', linkedin: 'LinkedIn' },
};

export const homeV2Es: HomeV2Content = {
  meta: {
    title: 'Purrfect Hire. Hires senior para startups entre seed y Serie B',
    description: 'Hires senior para startups entre seed y Serie B. Evidencia de cada candidato.',
  },
  nav: {
    companies: 'Para empresas',
    talent: 'Para talento',
    roles: 'Roles abiertos',
    kate: 'Kate',
    cta: 'Iniciar una búsqueda',
  },
  hero: {
    headline: 'Las personas excepcionales construyen cosas extraordinarias.',
    sub: 'Purrfect Hire es una boutique de talento global para compañías early-stage. Hacemos búsquedas senior en US, Europa y Latinoamérica, conectando personas excepcionales con el problema, la etapa y el contexto operativo de la compañía.',
    companies: { label: 'Para empresas', promise: 'Equipos más pequeños y más fuertes.' },
    talent: { label: 'Para talento', promise: 'Haz que tu señal sea imposible de ignorar.' },
    photoNote: '[REAL TEAM PHOTO — Purrfect o equipo cliente, candid, luz natural]',
  },
  trust: {
    label: 'Confían en nosotros founders de',
    evidence: 'Evidencia de cada candidato.',
  },
  companies: {
    eyebrow: 'Para empresas',
    headline: 'Equipos más pequeños y más fuertes.',
    intro:
      'Hires senior en ingeniería, producto, go-to-market y liderazgo.',
    hard:
      'En early-stage, el rol cambia mientras lo estás contratando.',
    pov:
      'Miramos más allá de si alguien puede hacer el trabajo hoy: qué fue realmente suyo, cómo toma decisiones, qué tan rápido aprende y si su pendiente acompaña hacia dónde va la compañía.',
    evidence: 'Cada candidato llega con evidencia.',
    quoteLabel: 'Un cliente, con sus palabras',
    casePhotoNote: '[REAL CLIENT PHOTO — Head of Customer Operations, entorno de trabajo]',
    cta: 'Cómo trabajamos con empresas',
  },
  talent: {
    eyebrow: 'Para talento',
    headline: 'Haz que tu señal sea imposible de ignorar.',
    body: 'Quizás operas por encima del nivel que el mercado te asigna. O quizás la evidencia todavía no sostiene el salto.',
    sub: 'Ayudamos a profesionales senior a entender cómo lee el mercado su experiencia, qué nivel sostiene la evidencia hoy y qué falta por demostrar.',
    cta: 'Conoce Offer Accelerator',
    catNote: '[REAL TALENT PHOTO — resultado de Offer Accelerator, entorno de trabajo]',
    storyNote: 'Historia pendiente. Una persona real, con permiso escrito. Cambio de nivel o de scope, no solo compensación.',
  },
  belief: {
    eyebrow: 'En qué creemos',
    statement:
      'Las mejores decisiones de talento salen de mejor señal, más contexto y mejor criterio.',
    forCompanies: 'Para empresas: te ayudamos a distinguir la señal real del ruido.',
    forTalent: 'Para talento: te ayudamos a ver qué sostiene tu evidencia, y a hacerla visible.',
  },
  kate: {
    eyebrow: 'Purrfect Hire',
    headline: 'Fundada por Kate Forero.',
    body: 'Kate lideró el recruiting de Addi durante dos años de crecimiento, hasta casi 500 personas, después de la Serie B. Hoy Purrfect Hire hace búsquedas senior globalmente para compañías early-stage, incluidos equipos respaldados por YC, a16z y Sequoia.',
    ctaCompanies: 'Para empresas',
    ctaTalent: 'Para talento',
    photoNote: '[REAL KATE PHOTO — documental, no headshot corporativo]',
  },
  footer: { legal: '© 2026 Purrfect Hire', privacy: 'Privacidad', linkedin: 'LinkedIn' },
};

export const getHomeV2 = (lang: Lang): HomeV2Content => (lang === 'es' ? homeV2Es : homeV2En);

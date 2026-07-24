// ─────────────────────────────────────────────────────────────────────────
// /kate — the living credential (Jul 2026 architecture doc).
// The arc: Colombia → ADDI 15→400 → Purrfect Hire → hiring today for YC-,
// a16z- and Sequoia-backed founders. The most photographic page of the
// site; until the shoot delivers the rest of the shot list, every image
// slot (hero + all chapters) reuses the one approved photo we have
// (/sessions/kate.jpeg) so the page never shows an empty frame. Captions
// still describe what each real photo will show once it exists, so the
// slot's intent stays legible.
// Rendered by KatePage.astro; EN at /kate, ES at /es/kate.
// ─────────────────────────────────────────────────────────────────────────

import { FOUNDERS_CALENDLY } from './pricing';

export const KATE_LINKEDIN = 'https://www.linkedin.com/in/kathforero/';
export const KATE_PHOTO = '/sessions/kate.jpeg';

const wa = (text: string) => `https://wa.me/16283588776?text=${encodeURIComponent(text)}`;

export interface KateChapter {
  tag: string;
  title: string;
  body: string;
  /** Image path — defaults to KATE_PHOTO until the shoot delivers this chapter's real shot */
  image: string;
  /** Caption describing what this slot shows (the real photo once it exists) */
  caption: string;
}

export interface KateContent {
  lang: 'en' | 'es';
  path: string;
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    /** Caption under the hero photo */
    placeholderCaption: string;
  };
  stats: { value: string; label: string }[];
  arcTitle: string;
  chapters: KateChapter[];
  linkedin: {
    title: string;
    body: string;
    profileLabel: string;
    /** Post embeds pending: described placeholder cards */
    postPlaceholders: string[];
  };
  ctas: {
    title: string;
    founders: { title: string; body: string; label: string; href: string };
    talent: { title: string; body: string; label: string; href: string };
  };
}

export const kateEn: KateContent = {
  lang: 'en',
  path: '/kate',

  meta: {
    title: 'Kate Forero · The person founders trust with the hire | Purrfect Hire',
    description:
      'Kate Forero scaled ADDI from 15 to 400 people, founded Purrfect Hire, and hires today for YC-, a16z- and Sequoia-backed founders. 160+ senior placements, 80% still in the role after 2 years. 297K people follow how she evaluates.',
  },

  hero: {
    eyebrow: 'Kate Forero · Founder',
    headline: 'The credential is a person.',
    sub: 'Every service we sell, to founders and to talent, runs on the same asset: Kate reads how startup founders actually evaluate, because she hires for them every week.',
    placeholderCaption: 'Kate Forero, founder of Purrfect Hire.',
  },

  stats: [
    { value: '160+', label: 'senior placements' },
    { value: '80%', label: 'still in the role after 2 years' },
    { value: '10+', label: 'years reading how founders evaluate' },
    { value: '297K', label: 'LinkedIn followers' },
  ],

  arcTitle: 'The arc',
  chapters: [
    {
      tag: '01 · Colombia',
      title: 'The bar was learned the hard way',
      body: 'Kate built her career in Colombia\'s tech ecosystem, more than a decade recruiting for the companies where a wrong senior hire costs runway, not just time. That is where she learned to separate what interviews reward from what teams actually need.',
      image: KATE_PHOTO,
      caption:
        'Photo pending: tech event in Colombia with Kate and the team, everyone in company sweaters.',
    },
    {
      tag: '02 · ADDI',
      title: '15 people to 400',
      body: 'At ADDI, one of LATAM\'s fastest-scaling startups, Kate helped take the team from 15 to 400. Scaling at that speed forces the question every founder eventually asks: why do skilled hires fail? The answer, culture fit read early, became her method.',
      image: KATE_PHOTO,
      caption:
        'Photo pending: Kate teaching a public session, a virtual course where she shares the criteria in the open.',
    },
    {
      tag: '03 · Purrfect Hire',
      title: 'Hiring today for YC, a16z and Sequoia founders',
      body: 'She founded Purrfect Hire to run that method as a closed loop: map the founder\'s real bar, place against it, and train senior talent against the same standard. 160+ placements later, 80% are still in the seat after two years.',
      image: KATE_PHOTO,
      caption: 'Kate at work, the same person founders call and candidates train with.',
    },
  ],

  linkedin: {
    title: '297K people follow how she evaluates',
    body: 'Kate publishes the criteria in the open: how founders read profiles, what filters senior candidates out, what an offer negotiation actually rewards. The method is public; the application is 1:1.',
    profileLabel: 'Follow Kate on LinkedIn →',
    postPlaceholders: [
      'Embed pending: one of Kate\'s top posts on how founders actually read a senior profile.',
      'Embed pending: a post breaking down a real offer negotiation, anonymized.',
    ],
  },

  ctas: {
    title: 'Two ways to use the credential',
    founders: {
      title: "You're hiring",
      body: 'Map your real bar and see calibrated candidates in under 4 weeks. Exact terms in a 20-minute call.',
      label: 'Book a 20-min call',
      href: FOUNDERS_CALENDLY,
    },
    talent: {
      title: "You're growing",
      body: 'One hour with Kate on your interview, offer or narrative. $300, in Spanish or English.',
      label: 'Book a 1:1 session',
      href: '/career-sessions',
    },
  },
};

export const kateEs: KateContent = {
  lang: 'es',
  path: '/es/kate',

  meta: {
    title: 'Kate Forero · La persona a la que los founders le confían el hire | Purrfect Hire',
    description:
      'Kate Forero escaló ADDI de 15 a 400 personas, fundó Purrfect Hire y hoy contrata para founders respaldados por YC, a16z y Sequoia. 160+ placements senior, 80% sigue en el rol a los 2 años. 297K personas siguen cómo evalúa.',
  },

  hero: {
    eyebrow: 'Kate Forero · Founder',
    headline: 'La credencial es una persona.',
    sub: 'Todo lo que vendemos, a founders y a talento, corre sobre el mismo activo: Kate lee cómo evalúan los founders de startups de verdad, porque contrata para ellos cada semana.',
    placeholderCaption: 'Kate Forero, founder de Purrfect Hire.',
  },

  stats: [
    { value: '160+', label: 'placements senior' },
    { value: '80%', label: 'sigue en el rol a los 2 años' },
    { value: '10+', label: 'años leyendo cómo evalúan los founders' },
    { value: '297K', label: 'seguidores en LinkedIn' },
  ],

  arcTitle: 'El arco',
  chapters: [
    {
      tag: '01 · Colombia',
      title: 'El bar se aprendió a la brava',
      body: 'Kate construyó su carrera en el ecosistema tech de Colombia, con más de una década reclutando para compañías donde un hire senior equivocado cuesta runway, no solo tiempo. Ahí aprendió a separar lo que premian las entrevistas de lo que los equipos necesitan de verdad.',
      image: KATE_PHOTO,
      caption:
        'Foto pendiente: evento de tecnología en Colombia con Kate y el equipo, todos con el sweater de la compañía.',
    },
    {
      tag: '02 · ADDI',
      title: 'De 15 personas a 400',
      body: 'En ADDI, una de las startups que más rápido escaló en LATAM, Kate ayudó a llevar el equipo de 15 a 400. Escalar a esa velocidad obliga a la pregunta que todo founder termina haciéndose: ¿por qué fallan los hires con skills? La respuesta, leer el culture fit temprano, se volvió su método.',
      image: KATE_PHOTO,
      caption:
        'Foto pendiente: Kate dando una sesión pública, un curso virtual donde comparte los criterios en abierto.',
    },
    {
      tag: '03 · Purrfect Hire',
      title: 'Hoy contrata para founders de YC, a16z y Sequoia',
      body: 'Fundó Purrfect Hire para operar ese método como un circuito cerrado: mapear el bar real del founder, colocar contra ese bar y entrenar talento senior contra el mismo estándar. 160+ placements después, el 80% sigue en la silla a los dos años.',
      image: KATE_PHOTO,
      caption: 'Kate trabajando, la misma persona a la que llaman los founders y con la que entrenan los candidatos.',
    },
  ],

  linkedin: {
    title: '297K personas siguen cómo evalúa',
    body: 'Kate publica los criterios en abierto: cómo leen los founders un perfil, qué filtra a los candidatos senior, qué premia de verdad una negociación de oferta. El método es público; la aplicación es 1:1.',
    profileLabel: 'Sigue a Kate en LinkedIn →',
    postPlaceholders: [
      'Embed pendiente: uno de los mejores posts de Kate sobre cómo leen los founders un perfil senior.',
      'Embed pendiente: un post desarmando una negociación de oferta real, anonimizada.',
    ],
  },

  ctas: {
    title: 'Dos formas de usar la credencial',
    founders: {
      title: 'Estás contratando',
      body: 'Mapea tu bar real y ve candidatos calibrados en menos de 4 semanas. Términos exactos en un call de 20 minutos.',
      label: 'Agenda un call de 20 min',
      href: FOUNDERS_CALENDLY,
    },
    talent: {
      title: 'Estás creciendo',
      body: 'Una hora con Kate sobre tu entrevista, tu oferta o tu narrativa. $300, en español o en inglés.',
      label: 'Agenda una sesión 1:1',
      href: '/es/career-sessions',
    },
  },
};

/**
 * Kate strip on the home page — the flywheel made visible before the footer
 * (photo 1:1, credential line, link to /kate).
 */
export interface KateStripContent {
  title: string;
  body: string;
  label: string;
  href: string;
  alt: string;
}

export const kateStripEn: KateStripContent = {
  title: 'We work both sides of the table.',
  body: 'The talent we place trains against the same bar we use to evaluate for you. Kate Forero hires for YC-, a16z- and Sequoia-backed founders, and coaches senior talent against that exact standard.',
  label: 'Meet Kate →',
  href: '/kate',
  alt: 'Kate Forero',
};

export const kateStripEs: KateStripContent = {
  title: 'Trabajamos las dos caras de la mesa.',
  body: 'El talento que colocamos entrena contra el mismo bar con el que evaluamos para ti. Kate Forero contrata para founders respaldados por YC, a16z y Sequoia, y entrena talento senior contra ese mismo estándar.',
  label: 'Conoce a Kate →',
  href: '/es/kate',
  alt: 'Kate Forero',
};

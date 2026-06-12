export type Lang = 'en' | 'es';

export interface LandingContent {
  lang: Lang;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    logo: string;
    links: { label: string; href: string }[];
    cta: string;
  };
  hero: {
    headline: string;
    headlineAccent: string;
    subheadline: string;
    stats: { value: string; suffix: string; suffixLeft?: string; label: string }[];
    ctaPrimary: string;
    ctaSecondary: string;
    ctaShowMore: string;
    ctaFounders: string;
    ctaTalent: string;
    trustLabel: string;
    chart: {
      skillsLabel: string;
      cultureLabel: string;
      exitLabel: string;
      monthStart: string;
      monthMid: string;
      monthEnd: string;
    };
  };
  why2026: {
    eyebrow: string;
    headline: string;
    body: string[];
    closing: string;
  };
  audienceSplit: {
    headline: string;
    subheadline: string;
    founders: {
      eyebrow: string;
      headline: string;
      body: string;
      bullets: { label: string; text: string }[];
      cta: string;
    };
    talent: {
      eyebrow: string;
      headline: string;
      body: string;
      bullets: { label: string; text: string }[];
      cta: string;
    };
  };
  offerAcceleration: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    blocks: { title: string; items: string[] }[];
    closing: string;
    cta: string;
    ctaSubline: string;
  };
  engine: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    steps: {
      id: string;
      title: string;
      description: string;
      badge?: string;
    }[];
  };
  culture: {
    headline: string;
    body: string[];
    quotes: { text: string; attribution: string }[];
  };
  testimonials: {
    eyebrow: string;
    headline: string;
    featured: {
      quote: string;
      name: string;
      role: string;
      badge: string;
    };
    grid: {
      quote: string;
      name: string;
      role: string;
      badge: string;
    }[];
    candidateTestimonial: {
      quote: string;
      name: string;
      role: string;
      badge: string;
    };
  };
  roles: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    contextLine: string;
    cards: {
      tag: string;
      title: string;
      stage: string;
      comp: string;
      stack: string[];
      cta: string;
    }[];
    closingText: string;
    closingEmail: string;
  };
  cta: {
    headline: string;
    subheadline: string;
    ctaHire: string;
    ctaTalent: string;
    contactLine: string;
  };
  footer: {
    links: { label: string; href: string }[];
    legal: string;
  };
}

export const content_en: LandingContent = {
  lang: 'en',

  meta: {
    title: 'Purrfect Hire — Senior hires for YC and a16z founders',
    description: 'We place senior LATAM talent at YC and a16z startups where getting the hire wrong costs months of runway. 160+ placements. 80% retention at 24 months.',
  },

  nav: {
    logo: 'Purrfect Hire',
    links: [
      { label: 'For founders', href: '#audience' },
      { label: 'For talent', href: '#audience' },
      { label: 'How it works', href: '#engine' },
      { label: 'Open roles', href: '#roles' },
    ],
    cta: 'Get your first match',
  },

  hero: {
    headline: 'Skills get people hired.',
    headlineAccent: 'Culture fit makes them stay.',
    subheadline: 'We place senior LATAM talent at YC and a16z startups where getting the hire wrong costs months of runway you can\'t recover.',
    stats: [
      { value: '160', suffix: '+', label: 'placements' },
      { value: '80', suffix: '%', label: 'stay 2+ years' },
      { value: '4', suffixLeft: '<', suffix: 'wks', label: 'to first hire' },
    ],
    ctaPrimary: 'Get your first match',
    ctaSecondary: 'See how it works',
    ctaShowMore: 'Show me more',
    ctaFounders: 'For founders',
    ctaTalent: 'For talent',
    trustLabel: 'Trusted by founders at',
    chart: {
      skillsLabel: 'Skills alone',
      cultureLabel: 'Skills + culture fit',
      exitLabel: 'Quits',
      monthStart: 'Month 1',
      monthMid: 'Month 6',
      monthEnd: 'Month 12',
    },
  },

  why2026: {
    eyebrow: '2026',
    headline: 'Any tool can source. None of them know who\'ll stay.',
    body: [
      'Prism finds profiles. Contra fills contracts. Metaview transcribes interviews.',
      'None of them have been inside 160+ startups, learning where hires actually break.',
      'We have. And we train the talent we place against that signal — before they ever meet you.',
    ],
    closing: 'That\'s not a keyword filter. That\'s a conversation.',
  },

  audienceSplit: {
    headline: 'Two sides. One engine.',
    subheadline: 'Most recruiting works on one side. We work on both — and that\'s where the signal compounds.',
    founders: {
      eyebrow: 'FOR FOUNDERS',
      headline: 'Your real bar isn\'t in the JD.',
      body: 'We map how you actually evaluate, then place people already calibrated to that.',
      bullets: [
        { label: 'The problem', text: 'Strong resume. Strong interview. Wrong in week four.' },
        { label: 'Our work', text: 'We map your culture before we open the pipeline.' },
        { label: 'The result', text: 'Less noise. Faster decisions. People who last.' },
      ],
      cta: 'See how we hire for you →',
    },
    talent: {
      eyebrow: 'FOR TALENT',
      headline: 'You\'re not losing offers. You\'re missing signal.',
      body: 'We train senior LATAM professionals against the real bar of the companies they want to join.',
      bullets: [
        { label: 'The problem', text: 'Generic prep. No context. Filtered out without knowing why.' },
        { label: 'Our work', text: 'You train against real signal from active companies.' },
        { label: 'The result', text: 'You get introduced. Not filtered.' },
      ],
      cta: 'Join the network →',
    },
  },

  offerAcceleration: {
    eyebrow: 'FOR TALENT · COACHING PROGRAM',
    headline: 'Senior in skills. Stuck in offers.',
    subheadline: 'Offer Acceleration is an 8-session program for senior LATAM professionals who already have the skills — but need the strategy, the network, and the criteria to land an offer at a US startup that actually matters.',
    blocks: [
      {
        title: 'You\'re the right fit if:',
        items: [
          'You have 5+ years of experience and consistent results',
          'You\'ve applied to US roles and either get filtered out or get offers below your level',
          'You know the technical bar isn\'t your problem — getting in front of the right founders is',
          'You\'re ready to build career strategy, not just send more applications',
        ],
      },
      {
        title: 'Across 8 sessions:',
        items: [
          '1:1 coaching with senior recruiters who place at YC and a16z portfolios',
          'Real signal from active searches: how US founders actually evaluate',
          'Positioning, narrative, and interview calibration against real startup bars',
          'Direct intros when there\'s a fit — not generic referrals',
        ],
      },
      {
        title: 'By the end:',
        items: [
          'You stop applying. You start being introduced.',
          'You stop pitching skills. You start landing on the right table.',
          'You stop getting filtered. You start getting hired where you wanted to be.',
        ],
      },
    ],
    closing: 'Built by recruiters who\'ve placed 160+ senior hires at YC and a16z portfolios. We know exactly where the bar is. Now we share it with you.',
    cta: 'Apply for Offer Acceleration →',
    ctaSubline: 'Limited cohorts. Application required.',
  },

  engine: {
    eyebrow: 'HOW IT WORKS',
    headline: 'One system. Two flywheels. Compounding signal.',
    subheadline: 'The closed loop other recruiters can\'t replicate.',
    steps: [
      {
        id: '01',
        title: 'We go deep into how startups actually operate.',
        description: 'Not the JD. The real bar — what they reward, what breaks in week three, why the last hire didn\'t work.',
      },
      {
        id: '02',
        title: 'That signal trains the talent we place.',
        description: 'Specific calibration: how this type of company moves, decides, and evaluates under pressure.',
      },
      {
        id: '03',
        title: 'Candidates arrive already aligned.',
        description: 'Less time explaining context. Less friction in week one. Faster time to value.',
        badge: 'Under 4 weeks to first placement',
      },
      {
        id: '04',
        title: 'Every outcome sharpens the model.',
        description: 'Hire, pass, early churn — all of it feeds back. The system gets more precise with every cycle.',
      },
    ],
  },

  culture: {
    headline: 'The interview isn\'t where hires fail. Week four is.',
    body: [
      '46% of new hires fail within 18 months. 89% of those failures are due to culture and attitude misalignment — not skills.',
      'In a team of 10, one wrong person doesn\'t just underperform. They slow everyone else down, erode trust, and force your best people to absorb the gap.',
    ],
    quotes: [
      {
        text: 'Founders attribute exits to performance. The real cause is a process that never captured the actual culture.',
        attribution: 'ANDREESSEN HOROWITZ',
      },
      {
        text: 'Your first 10 hires write the culture. They define how decisions get made when you\'re not in the room.',
        attribution: 'Y COMBINATOR',
      },
    ],
  },

  testimonials: {
    eyebrow: 'WHAT FOUNDERS SAY',
    headline: 'What happens when culture fit is the starting point, not the final check.',
    featured: {
      quote: 'The people we\'ve hired through Purrfect Hire didn\'t just continue working — they were promoted to roles of greater responsibility because of how well they adapted to our culture.',
      name: 'Micaela Crosta',
      role: 'Head of Customer Operations, OutDo (US)',
      badge: 'Client',
    },
    grid: [
      {
        quote: 'A process that understands the culture of companies and the personality of candidates allows cultural matches from moment zero.',
        name: 'Andrés F. Hortúa',
        role: 'Head of Growth, Bolsiyo (CO)',
        badge: 'Client',
      },
      {
        quote: 'Purrfect Hire adapted to our processes and to each specific role. They\'re a real search partner — not just a pipeline.',
        name: 'Fabián Torres',
        role: 'CEO, Trébol (CO)',
        badge: 'Client',
      },
      {
        quote: 'Their experience and industry knowledge made the final selection easy. They got us the best candidates.',
        name: 'Camilo Rodríguez',
        role: 'Sales Director, Ed-Machina (AR)',
        badge: 'Client',
      },
    ],
    candidateTestimonial: {
      quote: 'I\'ve never been in such a supportive process. The team was attentive at every moment. I knew exactly where I stood.',
      name: 'Diana Arteaga',
      role: 'Customer Service Lead, Konta (MX)',
      badge: 'Candidate · Placed in 16 days',
    },
  },

  roles: {
    eyebrow: 'ACTIVE SEARCHES',
    headline: 'Senior roles at high-growth startups.',
    subheadline: 'Curated. Calibrated. Active right now.',
    contextLine: 'Company names confidential until intro.',
    cards: [
      {
        tag: 'Engineering · Remote',
        title: 'Founding Engineer',
        stage: 'YC W26 portfolio · Seed-stage',
        comp: '$130k–$170k + equity',
        stack: ['TypeScript', 'Postgres', 'AWS'],
        cta: 'Apply now →',
      },
      {
        tag: 'AI/ML · Hybrid (SF)',
        title: 'Senior ML Engineer',
        stage: 'a16z portfolio · Series A',
        comp: '$160k–$200k + equity',
        stack: ['Python', 'PyTorch', 'LLMs'],
        cta: 'Apply now →',
      },
      {
        tag: 'Sales · Remote LATAM',
        title: 'Founding Account Executive',
        stage: 'YC W25 portfolio · Post-Seed',
        comp: '$90k–$130k + commission',
        stack: ['B2B SaaS', 'Outbound', 'US clients'],
        cta: 'Apply now →',
      },
    ],
    closingText: 'Don\'t see a fit? Send us your profile. We place proactively.',
    closingEmail: 'hiring@purrfecthire.com',
  },

  cta: {
    headline: 'Tell us how your team actually works.',
    subheadline: 'Or tell us where you want to go. The first conversation is fast and honest.',
    ctaHire: 'I need to hire',
    ctaTalent: 'I want to get placed',
    contactLine: 'hiring@purrfecthire.com',
  },

  footer: {
    links: [
      { label: 'Terms', href: '#' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/purrfect-hire' },
      { label: 'Open roles', href: '#roles' },
    ],
    legal: '© 2026 Purrfect Hire',
  },
};

export const content_es: LandingContent = {
  lang: 'es',

  meta: {
    title: 'Purrfect Hire — Hires senior para founders de YC y a16z',
    description: 'Conectamos talento senior de LATAM con startups de YC y a16z donde equivocarse en el hire cuesta meses de runway. 160+ contrataciones. 80% retención a 24 meses.',
  },

  nav: {
    logo: 'Purrfect Hire',
    links: [
      { label: 'Para founders', href: '#audience' },
      { label: 'Para talento', href: '#audience' },
      { label: 'Cómo funciona', href: '#engine' },
      { label: 'Roles abiertos', href: '#roles' },
    ],
    cta: 'Empieza tu búsqueda',
  },

  hero: {
    headline: 'Las skills te contratan.',
    headlineAccent: 'El fit cultural te hace quedarte.',
    subheadline: 'Conectamos talento senior de LATAM con startups de YC y a16z donde equivocarse en el hire cuesta meses de runway que no se recuperan.',
    stats: [
      { value: '160', suffix: '+', label: 'contrataciones' },
      { value: '80', suffix: '%', label: 'se quedan 2+ años' },
      { value: '4', suffixLeft: '<', suffix: 'sem', label: 'al primer hire' },
    ],
    ctaPrimary: 'Empieza tu búsqueda',
    ctaSecondary: 'Ver cómo funciona',
    ctaShowMore: 'Muéstrame más',
    ctaFounders: 'Para founders',
    ctaTalent: 'Para talento',
    trustLabel: 'Confían en nosotros founders de',
    chart: {
      skillsLabel: 'Solo skills',
      cultureLabel: 'Skills + fit cultural',
      exitLabel: 'Renuncia',
      monthStart: 'Mes 1',
      monthMid: 'Mes 6',
      monthEnd: 'Mes 12',
    },
  },

  why2026: {
    eyebrow: '2026',
    headline: 'Cualquier tool sourcea. Ninguna sabe quién se queda.',
    body: [
      'Prism encuentra perfiles. Contra llena contratos. Metaview transcribe entrevistas.',
      'Ninguna ha estado dentro de 160+ startups aprendiendo dónde se rompen los hires de verdad.',
      'Nosotros sí. Y entrenamos al talento que colocamos contra esa señal — antes de que te conozca.',
    ],
    closing: 'Eso no es un filtro de keywords. Es una conversación.',
  },

  audienceSplit: {
    headline: 'Dos lados. Un solo engine.',
    subheadline: 'La mayoría del recruiting opera de un solo lado. Nosotros operamos de los dos — y ahí es donde la señal compone.',
    founders: {
      eyebrow: 'PARA FOUNDERS',
      headline: 'Tu vara real no está en el JD.',
      body: 'Mapeamos cómo evalúas de verdad, y colocamos personas ya calibradas a eso.',
      bullets: [
        { label: 'El problema', text: 'CV fuerte. Entrevista fuerte. Equivocado en la semana cuatro.' },
        { label: 'Lo que hacemos', text: 'Mapeamos tu cultura antes de abrir el pipeline.' },
        { label: 'El resultado', text: 'Menos ruido. Decisiones más rápidas. Gente que se queda.' },
      ],
      cta: 'Cómo contratamos para ti →',
    },
    talent: {
      eyebrow: 'PARA TALENTO',
      headline: 'No estás perdiendo ofertas. Te falta señal.',
      body: 'Entrenamos a profesionales senior de LATAM contra la vara real de las empresas a las que quieren entrar.',
      bullets: [
        { label: 'El problema', text: 'Preparación genérica. Sin contexto. Filtrado sin saber por qué.' },
        { label: 'Lo que hacemos', text: 'Entrenas contra señal real de empresas activas.' },
        { label: 'El resultado', text: 'Te presentamos. No te filtran.' },
      ],
      cta: 'Únete a la red →',
    },
  },

  offerAcceleration: {
    eyebrow: 'PARA TALENTO · PROGRAMA DE COACHING',
    headline: 'Senior en skills. Atascado en ofertas.',
    subheadline: 'Offer Acceleration es un programa de 8 sesiones para profesionales senior de LATAM que ya tienen las skills — pero necesitan la estrategia, la red y el criterio para conseguir una oferta en una startup de US que valga la pena.',
    blocks: [
      {
        title: 'Eres el fit correcto si:',
        items: [
          'Tienes 5+ años de experiencia y resultados consistentes',
          'Has aplicado a roles en US y te filtran o te ofrecen menos de tu nivel',
          'Sabes que la vara técnica no es tu problema — llegar frente a los founders correctos sí lo es',
          'Estás listo para construir estrategia de carrera, no solo enviar más aplicaciones',
        ],
      },
      {
        title: 'En 8 sesiones:',
        items: [
          'Coaching 1:1 con recruiters senior que colocan en portfolios de YC y a16z',
          'Señal real de búsquedas activas: cómo evalúan los founders de US de verdad',
          'Posicionamiento, narrativa y calibración de entrevistas contra varas reales de startups',
          'Intros directas cuando hay fit — no referrals genéricos',
        ],
      },
      {
        title: 'Al final:',
        items: [
          'Dejas de aplicar. Empiezan a presentarte.',
          'Dejas de vender skills. Empiezas a llegar a la mesa correcta.',
          'Dejas de quedar filtrado. Empiezas a entrar donde querías estar.',
        ],
      },
    ],
    closing: 'Construido por recruiters que han colocado 160+ hires senior en portfolios de YC y a16z. Sabemos exactamente dónde está la vara. Ahora la compartimos contigo.',
    cta: 'Aplica a Offer Acceleration →',
    ctaSubline: 'Cohortes limitadas. Aplicación requerida.',
  },

  engine: {
    eyebrow: 'CÓMO FUNCIONA',
    headline: 'Un sistema. Dos flywheels. Señal que compone.',
    subheadline: 'El loop cerrado que otros recruiters no pueden replicar.',
    steps: [
      {
        id: '01',
        title: 'Entramos a fondo en cómo opera la startup.',
        description: 'No el JD. La vara real — qué premian, qué se rompe en la semana tres, por qué el último hire no funcionó.',
      },
      {
        id: '02',
        title: 'Esa señal entrena al talento que colocamos.',
        description: 'Calibración específica: cómo se mueve, decide y evalúa este tipo de empresa bajo presión.',
      },
      {
        id: '03',
        title: 'Los candidatos llegan ya alineados.',
        description: 'Menos tiempo explicando contexto. Menos fricción en la semana uno. Time-to-value más rápido.',
        badge: 'Menos de 4 semanas al primer hire',
      },
      {
        id: '04',
        title: 'Cada resultado afina el modelo.',
        description: 'Hire, no-hire, churn temprano — todo alimenta el sistema. Cada ciclo lo hace más preciso.',
      },
    ],
  },

  culture: {
    headline: 'La entrevista no es donde fallan los hires. La semana cuatro sí.',
    body: [
      '46% de los nuevos hires fallan en los primeros 18 meses. 89% de esas fallas son por desajuste cultural y de actitud — no por skills.',
      'En un equipo de 10, una persona equivocada no solo rinde menos. Frena al resto, erosiona la confianza, y obliga a tus mejores a cubrir el hueco.',
    ],
    quotes: [
      {
        text: 'Los founders atribuyen las salidas a performance. La causa real es un proceso que nunca capturó la cultura real.',
        attribution: 'ANDREESSEN HOROWITZ',
      },
      {
        text: 'Tus primeros 10 hires escriben la cultura. Definen cómo se toman las decisiones cuando no estás en la sala.',
        attribution: 'Y COMBINATOR',
      },
    ],
  },

  testimonials: {
    eyebrow: 'LO QUE DICEN LOS FOUNDERS',
    headline: 'Lo que pasa cuando el fit cultural es el punto de partida, no el último check.',
    featured: {
      quote: 'Las personas que hemos contratado a través de Purrfect Hire no solo siguen trabajando — han sido promovidas a roles de mayor responsabilidad por cómo se adaptaron a nuestra cultura.',
      name: 'Micaela Crosta',
      role: 'Head of Customer Operations, OutDo (US)',
      badge: 'Cliente',
    },
    grid: [
      {
        quote: 'Un proceso que entiende la cultura de las empresas y la personalidad de los candidatos permite matches culturales desde el momento cero.',
        name: 'Andrés F. Hortúa',
        role: 'Head of Growth, Bolsiyo (CO)',
        badge: 'Cliente',
      },
      {
        quote: 'Purrfect Hire se adaptó a nuestros procesos y a cada rol específico. Son un partner de búsqueda real — no solo un pipeline.',
        name: 'Fabián Torres',
        role: 'CEO, Trébol (CO)',
        badge: 'Cliente',
      },
      {
        quote: 'Su experiencia y conocimiento de industria hicieron fácil la selección final. Nos trajeron los mejores candidatos.',
        name: 'Camilo Rodríguez',
        role: 'Sales Director, Ed-Machina (AR)',
        badge: 'Cliente',
      },
    ],
    candidateTestimonial: {
      quote: 'Nunca había estado en un proceso tan acompañado. El equipo estuvo atento en cada momento. Sabía exactamente dónde estaba parada.',
      name: 'Diana Arteaga',
      role: 'Customer Service Lead, Konta (MX)',
      badge: 'Candidata · Colocada en 16 días',
    },
  },

  roles: {
    eyebrow: 'BÚSQUEDAS ACTIVAS',
    headline: 'Roles senior en startups de alto crecimiento.',
    subheadline: 'Curados. Calibrados. Activos ahora.',
    contextLine: 'Nombres de empresa confidenciales hasta la intro.',
    cards: [
      {
        tag: 'Engineering · Remote',
        title: 'Founding Engineer',
        stage: 'Portfolio YC W26 · Etapa Seed',
        comp: '$130k–$170k + equity',
        stack: ['TypeScript', 'Postgres', 'AWS'],
        cta: 'Aplicar ahora →',
      },
      {
        tag: 'AI/ML · Híbrido (SF)',
        title: 'Senior ML Engineer',
        stage: 'Portfolio a16z · Series A',
        comp: '$160k–$200k + equity',
        stack: ['Python', 'PyTorch', 'LLMs'],
        cta: 'Aplicar ahora →',
      },
      {
        tag: 'Sales · Remoto LATAM',
        title: 'Founding Account Executive',
        stage: 'Portfolio YC W25 · Post-Seed',
        comp: '$90k–$130k + comisión',
        stack: ['B2B SaaS', 'Outbound', 'Clientes US'],
        cta: 'Aplicar ahora →',
      },
    ],
    closingText: '¿No ves un fit? Envíanos tu perfil. Colocamos proactivamente.',
    closingEmail: 'hiring@purrfecthire.com',
  },

  cta: {
    headline: 'Cuéntanos cómo trabaja tu equipo de verdad.',
    subheadline: 'O cuéntanos a dónde quieres llegar. La primera conversación es rápida y honesta.',
    ctaHire: 'Necesito contratar',
    ctaTalent: 'Quiero ser contratado',
    contactLine: 'hiring@purrfecthire.com',
  },

  footer: {
    links: [
      { label: 'Términos', href: '#' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/purrfect-hire' },
      { label: 'Roles abiertos', href: '#roles' },
    ],
    legal: '© 2026 Purrfect Hire',
  },
};

export function getContent(lang: Lang): LandingContent {
  return lang === 'es' ? content_es : content_en;
}

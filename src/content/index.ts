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
  // V6 home. Copy for the two-lane default landing (/, /es/). Data-driven
  // blocks (stats, engine steps, roles, OA blocks) still come from the
  // sections above; this holds the strings that used to be hardcoded in the
  // V6 components so the home can be served bilingually.
  v6: {
    pathChooser: {
      eyebrow: string;
      lead: string;
      founders: { eyebrow: string; title: string; body: string; bullets: string[]; link: string };
      talent: { eyebrow: string; title: string; body: string; bullets: string[]; link: string };
    };
    foundersBlock: {
      tag: string;
      headline: string;
      sub: string;
      cultureQ: string;
      cultureA: string;
      engineQ: string;
      engineA: string;
      ctaBtn: string;
      ctaSub: string;
      faqHeading: string;
    };
    talentBlock: {
      tag: string;
      headline: string;
      sub: string;
      /** The full 4-rung ladder by commitment (Jul 2026 architecture). */
      ladder: { label: string; price: string; href: string }[];
      oaEyebrow: string;
      oaTitle: string;
      oaBody: string;
      oaLearnMore: string;
      oaApply: string;
      oaFaqHeading: string;
      rolesEyebrow: string;
      rolesTitle: string;
      rolesDesc: string;
      rolesBrowseAll: string;
    };
    founderFaqs: { q: string; a: string }[];
    talentFaqs: { q: string; a: string }[];
  };
}

export const content_en: LandingContent = {
  lang: 'en',

  meta: {
    title: 'Purrfect Hire. Senior hires for YC, a16z and Sequoia founders',
    description: 'We place senior LATAM talent at YC, a16z and Sequoia startups where getting the hire wrong costs months of runway. 160+ placements. 80% retention at 24 months.',
  },

  nav: {
    logo: 'Purrfect Hire',
    // Unified global nav (Jul 2026 architecture): same destinations on every
    // page, EN and ES mirrored.
    links: [
      { label: 'For founders', href: '/for-founders' },
      { label: 'For talent', href: '/for-talent' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Kate', href: '/kate' },
      { label: 'Open roles', href: '/roles' },
    ],
    cta: 'Get your first match',
  },

  hero: {
    headline: 'Skills get people hired.',
    headlineAccent: 'Culture fit makes them stay.',
    subheadline: 'We place senior LATAM talent at YC, a16z and Sequoia startups where getting the hire wrong costs months of runway you can\'t recover.',
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
      'We have. And we train the talent we place against that signal, before they ever meet you.',
    ],
    closing: 'That\'s not a keyword filter. That\'s a conversation.',
  },

  audienceSplit: {
    headline: 'Two sides. One engine.',
    subheadline: 'Most recruiting works on one side. We work on both, and that\'s where the signal compounds.',
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
    subheadline: 'Offer Acceleration is a 1:1 program for senior LATAM professionals who already have the skills, but need the strategy, the network, and the criteria to land an offer at a US startup that actually matters.',
    blocks: [
      {
        title: 'You\'re the right fit if:',
        items: [
          'You have 5+ years of experience and consistent results',
          'You\'ve applied to US roles and either get filtered out or get offers below your level',
          'You know the technical bar isn\'t your problem. Getting in front of the right founders is',
          'You\'re ready to build career strategy, not just send more applications',
        ],
      },
      {
        title: 'In the program:',
        items: [
          '1:1 coaching with senior recruiters who place at YC, a16z and Sequoia portfolios',
          'Real signal from active searches: how US founders actually evaluate',
          'Positioning, narrative, and interview calibration against real startup bars',
          'Direct intros when there\'s a fit, not generic referrals',
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
    closing: 'Built by recruiters who\'ve placed 160+ senior hires at YC, a16z and Sequoia portfolios. We know exactly where the bar is. Now we share it with you.',
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
        description: 'Not the JD. The real bar, what they reward, what breaks in week three, why the last hire didn\'t work.',
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
        description: 'Hire, pass, early churn, all of it feeds back. The system gets more precise with every cycle.',
      },
    ],
  },

  culture: {
    headline: 'The interview isn\'t where hires fail. Week four is.',
    body: [
      '46% of new hires fail within 18 months. 89% of those failures are due to culture and attitude misalignment, not skills.',
      'In a team of 10, one wrong person doesn\'t just underperform. They slow everyone else down, erode trust, and force your best people to absorb the gap.',
    ],
    quotes: [
      {
        text: 'Founders blame exits on performance. The real cause is usually a process that never read the culture.',
        attribution: 'OUR PRINCIPLE',
      },
      {
        text: 'Your first hires write the culture. They define how decisions get made when you\'re not in the room.',
        attribution: 'OUR PRINCIPLE',
      },
    ],
  },

  testimonials: {
    eyebrow: 'WHAT FOUNDERS SAY',
    headline: 'What happens when culture fit is the starting point, not the final check.',
    featured: {
      quote: 'The people we\'ve hired through Purrfect Hire didn\'t just continue working. They were promoted to roles of greater responsibility because of how well they adapted to our culture.',
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
        quote: 'Purrfect Hire adapted to our processes and to each specific role. They\'re a real search partner, not just a pipeline.',
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
      { label: 'Privacy', href: '/privacy-policy' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/purrfect-hire' },
      { label: 'Open roles', href: '/roles' },
    ],
    legal: '© 2026 Purrfect Hire',
  },

  v6: {
    pathChooser: {
      eyebrow: 'Start here',
      lead: 'Purrfect Hire is a closed-loop recruiting engine that places senior LATAM professionals at YC-, a16z- and Sequoia-backed startups. We work both sides of the table: Founders who are hiring and talent who want to grow.',
      founders: {
        eyebrow: 'For founders',
        title: "I'm hiring.",
        body: 'Find senior people who clear your real bar. And stay past week four.',
        bullets: [
          'We map how you actually evaluate before we open the pipeline.',
          'Calibrated candidates in front of you in under 4 weeks.',
          '80% of our placements are still there at 2+ years.',
        ],
        link: "See why we're the match →",
      },
      talent: {
        eyebrow: 'For talent',
        title: 'I want to grow.',
        body: 'Land an offer at a US startup that actually matters. Two clear paths.',
        bullets: [
          'Train against real signal from active US startup searches.',
          'Get introduced to founders, not filtered out by a keyword screen.',
          'Two ways in: the Offer Acceleration program or open roles.',
        ],
        link: 'See your options →',
      },
    },
    foundersBlock: {
      tag: 'For founders',
      headline: 'Senior hires who clear your bar. And stay past week four.',
      sub: 'Purrfect Hire places senior LATAM engineers, operators, and go-to-market hires at YC-, a16z- and Sequoia-backed startups. We map how your team actually evaluates, then put candidates already calibrated to that bar in front of you, typically in under four weeks. Less noise, faster decisions, and people who are still there two years later.',
      cultureQ: 'Why hire for culture fit, not just skills?',
      cultureA: "Because the interview isn't where hires fail. Week four is. 46% of new hires fail within 18 months, and 89% of those failures come down to culture and attitude misalignment, not a skills gap. In a team of ten, one wrong hire doesn't just underperform: they slow everyone down, erode trust, and force your best people to cover the gap. We start with fit, so it's the foundation rather than the final check.",
      engineQ: 'How the engine works',
      engineA: "It's a closed loop. We go deep on how a startup really operates, that signal trains the talent we place, candidates arrive already aligned, and every outcome feeds back to sharpen the model. Four steps:",
      ctaBtn: 'Talk to our team →',
      ctaSub: 'A fast, honest first call. No pipeline spam.',
      faqHeading: 'Questions from founders',
    },
    talentBlock: {
      tag: 'For talent',
      headline: 'Four ways in, by level of commitment.',
      sub: "You already have the skills. What's missing is the strategy, the network, and the criteria to get in front of the right founders. We train senior LATAM professionals against the real bar of YC-, a16z- and Sequoia-backed startups, so you stop getting filtered and start getting introduced.",
      ladder: [
        { label: 'Open roles', price: 'Free', href: '/for-talent#roles' },
        { label: '1:1 Session with Kate', price: '$200', href: '/career-sessions' },
        { label: 'Momentum', price: '$550/mo', href: '/career-momentum' },
        { label: 'Offer Acceleration', price: 'From $2,000', href: '/offer-acceleration' },
      ],
      oaEyebrow: 'Coaching program',
      oaTitle: 'Offer Acceleration',
      oaBody: 'Offer Acceleration is a 1:1 program for senior LATAM professionals who already have the skills but keep getting filtered out, or land offers below their level. By the end, you stop applying and start being introduced to the companies you actually want to join.',
      oaLearnMore: 'Learn more →',
      oaApply: 'Apply',
      oaFaqHeading: 'Questions about Offer Acceleration',
      rolesEyebrow: 'Active searches',
      rolesTitle: 'Open roles',
      rolesDesc: 'Senior roles at YC-, a16z- and Sequoia-backed startups, curated, calibrated, and active right now. Company names stay confidential until we make the intro.',
      rolesBrowseAll: 'Browse all roles →',
    },
    founderFaqs: [
      {
        q: 'How fast can you make a hire?',
        a: 'Typically under four weeks to a first placement. Because we map how your team actually evaluates before opening the pipeline, candidates arrive already calibrated to your bar, so you spend less time screening and more time deciding.',
      },
      {
        q: 'What roles and seniority do you place?',
        a: 'Senior LATAM professionals across engineering, AI/ML, and founding go-to-market roles, placed at Seed to Series A startups backed by Y Combinator, Andreessen Horowitz (a16z), and Sequoia. Roles are typically remote or hybrid at US market compensation plus equity.',
      },
      {
        q: 'How are you different from a typical recruiter?',
        a: 'We run a closed loop, not a pipeline. We map your real bar, what you reward and what breaks in week three, train the talent we place against it before they ever meet you, and feed every outcome back so the model gets sharper with each search.',
      },
      {
        q: 'What does it cost to work with you?',
        a: 'We focus on roles where a wrong hire costs months of runway. The fastest way to get exact terms is a short call, we will walk you through how we would run your search and what it involves before you commit to anything.',
      },
    ],
    talentFaqs: [
      {
        q: 'How long is the Offer Acceleration program?',
        a: 'It is a 1:1 coaching program with senior recruiters who place at YC, a16z and Sequoia portfolios. The number of sessions flexes to your execution speed. Together you build positioning, narrative, and interview calibration against the real bar of the companies you want to join.',
      },
      {
        q: 'Is Offer Acceleration right for me?',
        a: 'It is built for senior professionals with 5+ years of experience and consistent results who keep getting filtered out of US roles or receive offers below their level. If the technical bar is not your problem, getting in front of the right founders is, it fits.',
      },
      {
        q: 'Do you guarantee a job offer?',
        a: 'No. It is coaching plus direct introductions when there is a genuine fit, not a job board and not a guarantee. We share exactly where the bar is and put you in front of the right founders; landing the offer is the work we prepare you to win.',
      },
      {
        q: 'How do I join a cohort?',
        a: 'Cohorts are limited and require an application. Read the full program details, then apply, we review each application to confirm fit before inviting you into a cohort.',
      },
    ],
  },
};

export const content_es: LandingContent = {
  lang: 'es',

  meta: {
    title: 'Purrfect Hire. Hires senior para founders de YC, a16z y Sequoia',
    description: 'Conectamos talento senior de LATAM con startups de YC, a16z y Sequoia donde equivocarse en el hire cuesta meses de runway. 160+ contrataciones. 80% retención a 24 meses.',
  },

  nav: {
    logo: 'Purrfect Hire',
    // Nav global unificado (arquitectura Jul 2026), espejo del EN. Las páginas
    // for-founders / for-talent / roles aún no tienen versión ES.
    links: [
      { label: 'Para founders', href: '/for-founders' },
      { label: 'Para talento', href: '/for-talent' },
      { label: 'Precios', href: '/es/pricing' },
      { label: 'Kate', href: '/es/kate' },
      { label: 'Roles abiertos', href: '/roles' },
    ],
    cta: 'Empieza tu búsqueda',
  },

  hero: {
    headline: 'Las skills te contratan.',
    headlineAccent: 'El fit cultural te hace quedarte.',
    subheadline: 'Conectamos talento senior de LATAM con startups de YC, a16z y Sequoia donde equivocarse en el hire cuesta meses de runway que no se recuperan.',
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
      'Nosotros sí. Y entrenamos al talento que colocamos contra esa señal, antes de que te conozca.',
    ],
    closing: 'Eso no es un filtro de keywords. Es una conversación.',
  },

  audienceSplit: {
    headline: 'Dos lados. Un solo engine.',
    subheadline: 'La mayoría del recruiting opera de un solo lado. Nosotros operamos de los dos, y ahí es donde la señal compone.',
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
    subheadline: 'Offer Acceleration es un programa 1:1 para profesionales senior de LATAM que ya tienen las skills, pero necesitan la estrategia, la red y el criterio para conseguir una oferta en una startup de US que valga la pena.',
    blocks: [
      {
        title: 'Eres el fit correcto si:',
        items: [
          'Tienes 5+ años de experiencia y resultados consistentes',
          'Has aplicado a roles en US y te filtran o te ofrecen menos de tu nivel',
          'Sabes que la vara técnica no es tu problema. Llegar frente a los founders correctos sí lo es',
          'Estás listo para construir estrategia de carrera, no solo enviar más aplicaciones',
        ],
      },
      {
        title: 'En el programa:',
        items: [
          'Coaching 1:1 con recruiters senior que colocan en portfolios de YC, a16z y Sequoia',
          'Señal real de búsquedas activas: cómo evalúan los founders de US de verdad',
          'Posicionamiento, narrativa y calibración de entrevistas contra varas reales de startups',
          'Intros directas cuando hay fit, no referrals genéricos',
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
    closing: 'Construido por recruiters que han colocado 160+ hires senior en portfolios de YC, a16z y Sequoia. Sabemos exactamente dónde está la vara. Ahora la compartimos contigo.',
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
        description: 'No el JD. La vara real, qué premian, qué se rompe en la semana tres, por qué el último hire no funcionó.',
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
        description: 'Hire, no-hire, churn temprano, todo alimenta el sistema. Cada ciclo lo hace más preciso.',
      },
    ],
  },

  culture: {
    headline: 'La entrevista no es donde fallan los hires. La semana cuatro sí.',
    body: [
      '46% de los nuevos hires fallan en los primeros 18 meses. 89% de esas fallas son por desajuste cultural y de actitud, no por skills.',
      'En un equipo de 10, una persona equivocada no solo rinde menos. Frena al resto, erosiona la confianza, y obliga a tus mejores a cubrir el hueco.',
    ],
    quotes: [
      {
        text: 'Los founders culpan del churn al performance. La causa real suele ser un proceso que nunca leyó la cultura.',
        attribution: 'NUESTRO PRINCIPIO',
      },
      {
        text: 'Tus primeros hires escriben la cultura. Definen cómo se toman las decisiones cuando no estás en la sala.',
        attribution: 'NUESTRO PRINCIPIO',
      },
    ],
  },

  testimonials: {
    eyebrow: 'LO QUE DICEN LOS FOUNDERS',
    headline: 'Lo que pasa cuando el fit cultural es el punto de partida, no el último check.',
    featured: {
      quote: 'Las personas que hemos contratado a través de Purrfect Hire no solo siguen trabajando. Han sido promovidas a roles de mayor responsabilidad por cómo se adaptaron a nuestra cultura.',
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
        quote: 'Purrfect Hire se adaptó a nuestros procesos y a cada rol específico. Son un partner de búsqueda real, no solo un pipeline.',
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
      { label: 'Privacidad', href: '/es/privacy-policy' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/purrfect-hire' },
      { label: 'Roles abiertos', href: '/roles' },
    ],
    legal: '© 2026 Purrfect Hire',
  },

  v6: {
    pathChooser: {
      eyebrow: 'Empieza aquí',
      lead: 'Purrfect Hire es un motor de reclutamiento de ciclo cerrado que coloca a profesionales senior de LATAM en startups respaldadas por YC, a16z y Sequoia. Trabajamos en ambos lados de la mesa: founders que están contratando y talento que quiere crecer.',
      founders: {
        eyebrow: 'Para founders',
        title: 'Estoy contratando.',
        body: 'Encuentra gente senior que cumple tu verdadero estándar. Y que sigue ahí después de la semana cuatro.',
        bullets: [
          'Mapeamos cómo evalúas en realidad antes de abrir el pipeline.',
          'Candidatos calibrados frente a ti en menos de 4 semanas.',
          'El 80% de nuestras colocaciones sigue en su puesto a los 2+ años.',
        ],
        link: 'Descubre por qué somos el match →',
      },
      talent: {
        eyebrow: 'Para talento',
        title: 'Quiero crecer.',
        body: 'Consigue una oferta en una startup de EE. UU. que de verdad importa. Dos caminos claros.',
        bullets: [
          'Entrena con señales reales de búsquedas activas en startups de EE. UU.',
          'Llega a los founders por presentación, no te filtra un screening de keywords.',
          'Dos formas de entrar: el programa Offer Acceleration o las vacantes abiertas.',
        ],
        link: 'Mira tus opciones →',
      },
    },
    foundersBlock: {
      tag: 'Para founders',
      headline: 'Contrataciones senior que cumplen tu estándar. Y se quedan más allá de la semana cuatro.',
      sub: 'Purrfect Hire coloca ingenieros, operadores y perfiles de go-to-market senior de LATAM en startups respaldadas por YC, a16z y Sequoia. Mapeamos cómo evalúa tu equipo en realidad y ponemos frente a ti candidatos ya calibrados a ese estándar, normalmente en menos de cuatro semanas. Menos ruido, decisiones más rápidas y gente que sigue ahí dos años después.',
      cultureQ: '¿Por qué contratar por culture fit y no solo por habilidades?',
      cultureA: 'Porque la entrevista no es donde fallan las contrataciones. La semana cuatro sí. El 46% de las nuevas contrataciones fracasa en 18 meses, y el 89% de esos fracasos se debe a un desajuste de cultura y actitud, no a una brecha de habilidades. En un equipo de diez, una mala contratación no solo rinde por debajo: frena a todos, erosiona la confianza y obliga a tus mejores personas a cubrir el hueco. Empezamos por el fit, para que sea la base y no la última verificación.',
      engineQ: 'Cómo funciona el motor',
      engineA: 'Es un ciclo cerrado. Profundizamos en cómo opera de verdad una startup, esa señal entrena al talento que colocamos, los candidatos llegan ya alineados y cada resultado retroalimenta y afina el modelo. Cuatro pasos:',
      ctaBtn: 'Habla con nuestro equipo →',
      ctaSub: 'Una primera llamada rápida y honesta. Sin spam de pipeline.',
      faqHeading: 'Preguntas de founders',
    },
    talentBlock: {
      tag: 'Para talento',
      headline: 'Cuatro formas de entrar, según tu nivel de compromiso.',
      sub: 'Ya tienes las habilidades. Lo que falta es la estrategia, la red y los criterios para llegar a los founders correctos. Entrenamos a profesionales senior de LATAM frente al estándar real de las startups respaldadas por YC, a16z y Sequoia, para que dejes de ser filtrado y empieces a ser presentado.',
      ladder: [
        { label: 'Roles abiertos', price: 'Gratis', href: '/for-talent#roles' },
        { label: 'Sesión 1:1 con Kate', price: '$200', href: '/es/career-sessions' },
        { label: 'Momentum', price: '$550/mes', href: '/es/career-momentum' },
        { label: 'Offer Acceleration', price: 'Desde $2,000', href: '/offer-acceleration' },
      ],
      oaEyebrow: 'Programa de coaching',
      oaTitle: 'Offer Acceleration',
      oaBody: 'Offer Acceleration es un programa 1:1 para profesionales senior de LATAM que ya tienen las habilidades pero siguen siendo filtrados, o reciben ofertas por debajo de su nivel. Al terminar, dejas de aplicar y empiezas a ser presentado a las empresas a las que de verdad quieres entrar.',
      oaLearnMore: 'Conoce más →',
      oaApply: 'Aplicar',
      oaFaqHeading: 'Preguntas sobre Offer Acceleration',
      rolesEyebrow: 'Búsquedas activas',
      rolesTitle: 'Vacantes abiertas',
      rolesDesc: 'Roles senior en startups respaldadas por YC, a16z y Sequoia, seleccionados, calibrados y activos ahora mismo. Los nombres de las empresas se mantienen confidenciales hasta que hacemos la presentación.',
      rolesBrowseAll: 'Ver todas las vacantes →',
    },
    founderFaqs: [
      {
        q: '¿Qué tan rápido pueden cerrar una contratación?',
        a: 'Normalmente en menos de cuatro semanas hasta la primera colocación. Como mapeamos cómo evalúa tu equipo en realidad antes de abrir el pipeline, los candidatos llegan ya calibrados a tu estándar, así inviertes menos tiempo filtrando y más tiempo decidiendo.',
      },
      {
        q: '¿Qué roles y seniority colocan?',
        a: 'Profesionales senior de LATAM en ingeniería, IA/ML y roles fundacionales de go-to-market, colocados en startups de Seed a Serie A respaldadas por Y Combinator, Andreessen Horowitz (a16z) y Sequoia. Los roles suelen ser remotos o híbridos, con compensación de mercado de EE. UU. más equity.',
      },
      {
        q: '¿En qué se diferencian de un reclutador típico?',
        a: 'Operamos un ciclo cerrado, no un pipeline. Mapeamos tu estándar real, qué premias y qué se rompe en la semana tres, entrenamos al talento que colocamos frente a ese estándar antes de que te conozcan, y retroalimentamos cada resultado para que el modelo sea más preciso en cada búsqueda.',
      },
      {
        q: '¿Cuánto cuesta trabajar con ustedes?',
        a: 'Nos enfocamos en roles donde una mala contratación cuesta meses de runway. La forma más rápida de conocer los términos exactos es una llamada corta, te explicamos cómo correríamos tu búsqueda y qué implica antes de que te comprometas a nada.',
      },
    ],
    talentFaqs: [
      {
        q: '¿Cuánto dura el programa Offer Acceleration?',
        a: 'Es un programa 1:1 de coaching con reclutadores senior que colocan en portafolios de YC, a16z y Sequoia. El número de sesiones se ajusta a tu velocidad de ejecución. Juntos construyes posicionamiento, narrativa y calibración de entrevistas frente al estándar real de las empresas a las que quieres entrar.',
      },
      {
        q: '¿Offer Acceleration es para mí?',
        a: 'Está hecho para profesionales senior con 5+ años de experiencia y resultados consistentes que siguen siendo filtrados de roles en EE. UU. o reciben ofertas por debajo de su nivel. Si el estándar técnico no es tu problema, sino llegar a los founders correctos, encaja.',
      },
      {
        q: '¿Garantizan una oferta de trabajo?',
        a: 'No. Es coaching más presentaciones directas cuando hay un fit genuino, no es una bolsa de empleo ni una garantía. Te decimos exactamente dónde está el estándar y te ponemos frente a los founders correctos; conseguir la oferta es el trabajo para el que te preparamos.',
      },
      {
        q: '¿Cómo entro a una cohorte?',
        a: 'Las cohortes son limitadas y requieren aplicación. Lee los detalles completos del programa y luego aplica, revisamos cada aplicación para confirmar el fit antes de invitarte a una cohorte.',
      },
    ],
  },
};

export function getContent(lang: Lang): LandingContent {
  return lang === 'es' ? content_es : content_en;
}

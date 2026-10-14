export type Lang = 'en' | 'es';

export interface LandingContent {
  lang: Lang;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    logo: string;
    links: {
      label: string;
      href: string;
      /** Dropdown items shown under this link (desktop hover / mobile inline). */
      children?: { label: string; description: string; href: string }[];
    }[];
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
  };
  roles: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    contextLine: string;
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
  // Home router (Jul 2026). Copy for the 3-screen router home that replaced the
  // long two-lane scroll: claim → shared proof → bifurcation. Founders/talent
  // depth now lives on /for-founders and /for-talent; this block holds only the
  // strings the router screens need. Stats/logos are reused from the sections
  // above (hero.stats, hero.trustLabel, testimonials).
  homeRouter: {
    nav: { cta: string; ctaHref: string };
    hero: {
      // headline + headlineAccent reuse hero.headline / hero.headlineAccent.
      whoPre: string;
      whoHighlight: string; // YC, a16z and Sequoia — rendered in navy ink
      whoPost: string;
      ctaFounders: string;
      ctaTalent: string;
    };
    proof: {
      eyebrow: string;
      headline: string;
      lead: string; // single descriptive paragraph: what the engine is + both outcomes
      founderQuoteLabel: string;
    };
    fork: {
      eyebrow: string;
      headline: string;
      sub: string;
      founders: {
        label: string;
        title: string;
        promise: string;
        anchor: string;
        cta: string;
        ctaHref: string;
        escapePre: string;
        escapeLink: string;
        escapeHref: string;
      };
      talent: {
        label: string;
        title: string;
        promise: string;
        anchor: string;
        cta: string;
        ctaHref: string;
        escapePre: string;
        escapeLink: string;
        escapeHref: string;
      };
    };
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
    description: 'Senior hires for startups between seed and Series B. Evidence on every candidate.',
  },

  nav: {
    logo: 'Purrfect Hire',
    // Unified global nav (Jul 2026 architecture): same destinations on every
    // page, EN and ES mirrored. "For talent" carries a dropdown grouping the
    // talent-facing programs; "Open roles" also lives inside that dropdown and
    // as its own top-level link.
    links: [
      { label: 'For founders', href: '/for-founders' },
      {
        label: 'For talent',
        href: '/for-talent',
        children: [
          { label: 'Offer Acceleration', description: '8-session interview sprint', href: '/offer-acceleration' },
          { label: 'Career Momentum', description: 'Ongoing monthly coaching', href: '/career-momentum' },
          { label: 'Career Sessions', description: '1:1 sessions with Kate', href: '/career-sessions' },
          { label: 'Open roles', description: 'Apply to live searches', href: '/roles' },
        ],
      },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Kate', href: '/kate' },
    ],
    cta: 'Get your first match',
  },

  hero: {
    headline: 'Skills get people hired.',
    headlineAccent: 'Culture fit makes them stay.',
    subheadline: 'We place senior LATAM talent at YC, a16z and Sequoia startups where getting the hire wrong costs months of runway you can\'t recover.',
    stats: [
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
      'None of them have sat inside an early-stage startup, learning where hires actually break.',
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
        { label: 'The result', text: 'Your real level, visible to the right companies.' },
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
    closing: 'Built by recruiters who hire for YC, a16z and Sequoia portfolios. We know exactly where the bar is. Now we share it with you.',
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
        title: 'That signal calibrates the search, and the candidate.',
        description: 'We tell candidates the truth about how your team actually operates: the real bar, the pace, how decisions get made, what breaks in week three. Candidates in client searches never pay us. Ever. You pay only if you hire, and the guarantee means we carry the risk if the fit fails. Our incentive is not to place someone. It is to place someone who is still here in two years.',
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
      'Skills tell you what someone has done. They do not tell you how that person decides at 11pm on a Friday, or whether they ask for help before something breaks.',
      'In a team of ten, a wrong hire does not just underperform. They slow everyone down, erode trust, and force your best people to cover the gap. By the time it is obvious, you have burned four months of runway and the goodwill of the team.',
      'We run searches inside early-stage startups, and we track what happens after the offer, not just up to it.',
    ],
    // Self-attributed "OUR PRINCIPLE" quote cards removed (read as fake
    // testimonials); the argument now lives in the body copy above.
    quotes: [],
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
  },

  roles: {
    eyebrow: 'ACTIVE SEARCHES',
    headline: 'Senior roles at high-growth startups.',
    subheadline: 'Curated. Calibrated. Active right now.',
    contextLine: 'Company names confidential until intro.',
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
    ],
    legal: '© 2026 Purrfect Hire',
  },

  homeRouter: {
    nav: { cta: 'Talk to us', ctaHref: 'mailto:hiring@purrfecthire.com' },
    hero: {
      whoPre: 'Senior hires for startups between seed and Series B. ',
      whoHighlight: 'Evidence on every candidate.',
      whoPost: '',
      ctaFounders: 'I\'m hiring',
      ctaTalent: 'I want to get placed',
    },
    proof: {
      eyebrow: 'How we work',
      headline: 'Fewer mistakes on senior hires.',
      lead: 'We map how your team actually evaluates before we open the search, so the people you meet are already calibrated to your bar. Every candidate comes with evidence: what they solved on their own, where they needed a hint, what was not tested.',
      founderQuoteLabel: 'For founders',
    },
    fork: {
      eyebrow: 'Start here',
      headline: 'What brings you here?',
      sub: 'Two paths. Pick yours.',
      founders: {
        label: 'For founders',
        title: 'I\'m hiring.',
        promise: 'Senior people who clear your real bar. And stay past week four.',
        anchor: 'Evidence on every candidate.',
        cta: 'See how we hire for you',
        ctaHref: '/for-founders',
        escapePre: 'Already decided?',
        escapeLink: 'Email us',
        escapeHref: 'mailto:hiring@purrfecthire.com',
      },
      talent: {
        label: 'For talent',
        title: 'I want to grow.',
        promise: 'You may already be operating at the next level. The question is whether the market can see it.',
        anchor: 'Make your signal impossible to miss.',
        cta: 'See your paths',
        ctaHref: '/for-talent',
        escapePre: '',
        escapeLink: '',
        escapeHref: '',
      },
    },
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
          'Evidence on every candidate.',
        ],
        link: "See why we're the match →",
      },
      talent: {
        eyebrow: 'For talent',
        title: 'I want to grow.',
        body: 'Land an offer at a US startup that actually matters. Two clear paths.',
        bullets: [
          'Train against real signal from active US startup searches.',
          'Understand how the market reads your experience.',
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
      cultureA: "Because the interview isn't where hires fail. Week four is. Skills tell you what someone has done, not how they decide at 11pm on a Friday or whether they ask for help before something breaks. In a team of ten, a wrong hire slows everyone down, erodes trust, and forces your best people to cover the gap. We start with fit and track what happens after the offer, not just up to it.",
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
        { label: '1:1 Session with Kate', price: '$300', href: '/career-sessions' },
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
        a: 'Senior LATAM professionals across engineering, AI/ML, and founding go-to-market roles, placed at Seed to Series A startups, most of them Y Combinator backed, where a wrong hire costs months of runway. Roles are typically remote or hybrid at US market compensation plus equity.',
      },
      {
        q: 'How are you different from a typical recruiter?',
        a: 'We map your real bar before we open the search: what you reward and what breaks in week three. Then you meet only candidates measured against it, each with evidence of what they solved on their own and what was not tested.',
      },
      {
        q: 'What does it cost to work with you?',
        a: 'You pay only when you hire, and a 90-day replacement guarantee comes with it. If you have several urgent roles at once, All You Can Hire swaps the percentage for a monthly fee. Confidential C-level searches have a retained option. We scope all of it on a 20-minute call, before you commit to anything.',
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
    description: 'Hires senior para startups entre seed y Serie B. Evidencia de cada candidato.',
  },

  nav: {
    logo: 'Purrfect Hire',
    // Nav global unificado (arquitectura Jul 2026), espejo del EN. Las páginas
    // for-founders / for-talent aún no tienen versión ES. "Para talento" agrupa
    // los programas en un dropdown; "Roles abiertos" vive dentro del dropdown y
    // también como su propio link de primer nivel. Espejo exacto del EN.
    links: [
      { label: 'Para founders', href: '/for-founders' },
      {
        label: 'Para talento',
        href: '/for-talent',
        children: [
          { label: 'Offer Acceleration', description: 'Sprint de 8 sesiones para entrevistas', href: '/offer-acceleration' },
          { label: 'Career Momentum', description: 'Coaching mensual continuo', href: '/es/career-momentum' },
          { label: 'Career Sessions', description: 'Sesiones 1:1 con Kate', href: '/es/career-sessions' },
          { label: 'Roles abiertos', description: 'Postula a búsquedas activas', href: '/roles' },
        ],
      },
      { label: 'Precios', href: '/es/pricing' },
      { label: 'Kate', href: '/es/kate' },
    ],
    cta: 'Empieza tu búsqueda',
  },

  hero: {
    headline: 'Las skills te contratan.',
    headlineAccent: 'El fit cultural te hace quedarte.',
    subheadline: 'Conectamos talento senior de LATAM con startups de YC, a16z y Sequoia donde equivocarse en el hire cuesta meses de runway que no se recuperan.',
    stats: [
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
      'Ninguna ha estado dentro de una startup early-stage aprendiendo dónde se rompen los hires de verdad.',
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
        { label: 'El resultado', text: 'Tu nivel real, visible para las empresas correctas.' },
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
    closing: 'Construido por recruiters que contratan para portfolios de YC, a16z y Sequoia. Sabemos exactamente dónde está la vara. Ahora la compartimos contigo.',
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
        title: 'Esa señal calibra la búsqueda, y al candidato.',
        description: 'A los candidatos les decimos la verdad sobre cómo opera tu equipo: la vara real, el ritmo, cómo se toman las decisiones, qué se rompe en la semana tres. Los candidatos de búsquedas de clientes nunca nos pagan. Nunca. Tú pagas solo si contratas, y la garantía significa que nosotros cargamos el riesgo si el fit falla. Nuestro incentivo no es colocar a alguien. Es colocar a alguien que siga aquí en dos años.',
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
      'Los skills te dicen qué ha hecho una persona. No te dicen cómo decide un viernes a las 11pm, ni si pide ayuda antes de que algo se rompa.',
      'En un equipo de diez, un mal hire no solo rinde menos. Frena al resto, erosiona la confianza y obliga a tus mejores personas a cubrir el hueco. Para cuando es obvio, ya quemaste cuatro meses de runway y la buena voluntad del equipo.',
      'Corremos búsquedas dentro de startups early-stage, y medimos lo que pasa después de la oferta, no solo hasta ella.',
    ],
    // Tarjetas auto-citadas "NUESTRO PRINCIPIO" eliminadas (se leían como
    // testimonios falsos); el argumento vive ahora en el cuerpo de arriba.
    quotes: [],
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
  },

  roles: {
    eyebrow: 'BÚSQUEDAS ACTIVAS',
    headline: 'Roles senior en startups de alto crecimiento.',
    subheadline: 'Curados. Calibrados. Activos ahora.',
    contextLine: 'Nombres de empresa confidenciales hasta la intro.',
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
    ],
    legal: '© 2026 Purrfect Hire',
  },

  homeRouter: {
    nav: { cta: 'Hablemos', ctaHref: 'mailto:hiring@purrfecthire.com' },
    hero: {
      whoPre: 'Hires senior para startups entre seed y Serie B. ',
      whoHighlight: 'Evidencia de cada candidato.',
      whoPost: '',
      ctaFounders: 'Estoy contratando',
      ctaTalent: 'Quiero ser contratado',
    },
    proof: {
      eyebrow: 'Cómo trabajamos',
      headline: 'Menos errores en las contrataciones senior.',
      lead: 'Mapeamos cómo evalúa tu equipo de verdad antes de abrir la búsqueda, así que las personas que conoces ya vienen calibradas a tu estándar. Cada candidato llega con evidencia: qué resolvió solo, dónde necesitó una pista, qué no se probó.',
      founderQuoteLabel: 'Para founders',
    },
    fork: {
      eyebrow: 'Empieza aquí',
      headline: '¿Qué te trae por aquí?',
      sub: 'Dos caminos. Elige el tuyo.',
      founders: {
        label: 'Para founders',
        title: 'Estoy contratando.',
        promise: 'Gente senior que cumple tu vara real. Y que sigue ahí después de la semana cuatro.',
        anchor: 'Evidencia de cada candidato.',
        cta: 'Cómo contratamos para ti',
        ctaHref: '/for-founders',
        escapePre: '¿Ya decidiste?',
        escapeLink: 'Contacta a nuestro equipo',
        escapeHref: 'mailto:hiring@purrfecthire.com',
      },
      talent: {
        label: 'Para talento',
        title: 'Quiero crecer.',
        promise: 'Quizás ya operas en el siguiente nivel. La pregunta es si el mercado puede verlo.',
        anchor: 'Haz que tu señal sea imposible de ignorar.',
        cta: 'Mira tus opciones',
        ctaHref: '/for-talent',
        escapePre: '',
        escapeLink: '',
        escapeHref: '',
      },
    },
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
          'Evidencia de cada candidato.',
        ],
        link: 'Descubre por qué somos el match →',
      },
      talent: {
        eyebrow: 'Para talento',
        title: 'Quiero crecer.',
        body: 'Consigue una oferta en una startup de EE. UU. que de verdad importa. Dos caminos claros.',
        bullets: [
          'Entrena con señales reales de búsquedas activas en startups de EE. UU.',
          'Entiende cómo el mercado lee tu experiencia.',
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
      cultureA: 'Porque la entrevista no es donde fallan las contrataciones. La semana cuatro sí. Los skills te dicen qué ha hecho una persona, no cómo decide un viernes a las 11pm ni si pide ayuda antes de que algo se rompa. En un equipo de diez, un mal hire frena a todos, erosiona la confianza y obliga a tus mejores personas a cubrir el hueco. Empezamos por el fit y medimos lo que pasa después de la oferta, no solo hasta ella.',
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
        { label: 'Sesión 1:1 con Kate', price: '$300', href: '/es/career-sessions' },
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
        a: 'Profesionales senior de LATAM en ingeniería, IA/ML y roles fundacionales de go-to-market, colocados en startups de Seed a Serie A, la mayoría respaldadas por Y Combinator, donde una mala contratación cuesta meses de runway. Los roles suelen ser remotos o híbridos, con compensación de mercado de EE. UU. más equity.',
      },
      {
        q: '¿En qué se diferencian de un reclutador típico?',
        a: 'Mapeamos tu estándar real antes de abrir la búsqueda: qué premias y qué se rompe en la semana tres. Después solo conoces candidatos medidos contra ese estándar, cada uno con evidencia de qué resolvió solo y qué no se probó.',
      },
      {
        q: '¿Cuánto cuesta trabajar con ustedes?',
        a: 'Pagas solo cuando contratas, y la garantía de reemplazo a 90 días viene incluida. Si tienes varios roles urgentes a la vez, All You Can Hire cambia el porcentaje por una tarifa mensual. Las búsquedas C-level confidenciales tienen una opción retenida. Lo definimos todo en una llamada de 20 minutos, antes de que te comprometas a nada.',
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

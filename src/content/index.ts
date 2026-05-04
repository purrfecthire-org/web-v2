export type Lang = 'en' | 'es';

export interface Candidate {
  name: string;
  role: string;
  skills: string[];
  match: number;
}

export interface LandingContent {
  lang: Lang;
  nav: {
    logo: string;
    links: { label: string; href: string }[];
    cta: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineAccent: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    searchPlaceholder: string;
    candidates: Candidate[];
    matchLabel: string;
    reviewLabel: string;
  };
  engine: {
    badge: string;
    headline: string;
    subheadline: string;
    steps: { id: string; label: string; description: string }[];
    connectorLabel: string;
  };
  startups: {
    badge: string;
    headline: string;
    subheadline: string;
    statements: string[];
    benefits: { title: string; description: string }[];
    cta: string;
  };
  talent: {
    badge: string;
    headline: string;
    subheadline: string;
    before: { label: string; items: string[] };
    after: { label: string; items: string[] };
    cta: string;
    ctaSub: string;
  };
  whyItWorks: {
    badge: string;
    headline: string;
    subheadline: string;
    principles: { title: string; description: string; icon: string }[];
  };
  socialProof: {
    badge: string;
    headline: string;
    logos: { name: string; initials: string }[];
    testimonials: {
      quote: string;
      author: string;
      role: string;
      company: string;
    }[];
  };
  cta: {
    headline: string;
    headlineAccent: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    note: string;
  };
  footer: {
    tagline: string;
    links: { label: string; href: string }[];
    legal: string;
  };
}

export const content_en: LandingContent = {
  lang: 'en',

  nav: {
    logo: 'Purrfect Hire',
    links: [
      { label: 'How it works', href: '#engine' },
      { label: 'For startups', href: '#startups' },
      { label: 'For talent', href: '#talent' },
    ],
    cta: 'Get your first match',
  },

  hero: {
    badge: 'Category: Talent Intelligence Engine',
    headline: 'Skills get people hired.',
    headlineAccent: 'Culture fit makes them stay.',
    subheadline:
      'We map how your startup actually operates, how decisions get made, where momentum breaks, what your last mis-hire got wrong. Then we place people already aligned to that. Every hire sharpens the next one.',
    ctaPrimary: 'Get your first match',
    ctaSecondary: 'See the engine',
    searchPlaceholder: 'Search by role, signal, or company stage…',
    candidates: [
      {
        name: 'Sofia Reyes',
        role: 'Senior Frontend Engineer',
        skills: ['React', 'TypeScript', 'System Design'],
        match: 97,
      },
      {
        name: 'Marcus Chen',
        role: 'Full-Stack Engineer',
        skills: ['Node.js', 'PostgreSQL', 'AWS'],
        match: 94,
      },
      {
        name: 'Amara Osei',
        role: 'Backend Engineer',
        skills: ['Go', 'Kubernetes', 'gRPC'],
        match: 91,
      },
    ],
    matchLabel: 'match',
    reviewLabel: 'Review',
  },

  engine: {
    badge: 'One system. Continuous learning.',
    headline: 'Signal → Build → Match → Learn',
    subheadline:
      'This is not two businesses. It’s a closed-loop system. Every interaction compounds. Every hire sharpens the next one.',
    steps: [
      {
        id: '01',
        label: 'Extract signal',
        description:
          'We go beyond job descriptions and map how you actually evaluate. Decisions, tradeoffs, failure patterns — the real bar.',
      },
      {
        id: '02',
        label: 'Build talent',
        description:
          'We train candidates against that exact signal. Not generic prep — targeted development for real hiring environments.',
      },
      {
        id: '03',
        label: 'Match precisely',
        description:
          'You meet a small set of candidates already aligned with your expectations, constraints, and pace.',
      },
      {
        id: '04',
        label: 'Feed the system',
        description:
          'Every outcome — hire, reject, churn — feeds back into the model. The system compounds. Matches get sharper over time.',
      },
    ],
    connectorLabel: 'compounds',
  },

  startups: {
    badge: 'For startups',
    headline: 'Hiring breaks at the signal level.',
    subheadline:
      'Most processes look right on the surface — resumes, interviews, take-homes. The failure happens underneath: misaligned expectations.',
    statements: [
      'Strong resume. Strong interview. Weak execution in week four.',
      'Candidates optimize for passing — not for performing.',
      'Your real bar lives in your head. The market guesses.',
    ],
    benefits: [
      {
        title: 'We capture your real bar',
        description:
          'We model how you actually make hiring decisions — not how it’s written in your JD.',
      },
      {
        title: 'You meet prepared candidates',
        description:
          'Every candidate has already been shaped around your expectations before you meet them.',
      },
      {
        title: 'Faster, cleaner decisions',
        description:
          'Less noise, fewer interviews, higher confidence. You decide in days, not weeks.',
      },
      {
        title: 'Built for retention',
        description:
          'We optimize for performance after the hire, not just passing the interview.',
      },
    ],
    cta: 'See your matches',
  },

  talent: {
    badge: 'For talent',
    headline: 'You’re not losing jobs.',
    subheadline:
      'You’re missing signal. The best opportunities aren’t about applying more — they’re about aligning with how decisions are made.',
    before: {
      label: 'Before',
      items: [
        'Applying blindly to roles you don’t fully understand.',
        'Preparing with generic content disconnected from real startups.',
        'Getting filtered out without knowing why.',
        'Negotiating without leverage.',
      ],
    },
    after: {
      label: 'After',
      items: [
        'You train against real hiring signal from active startups.',
        'You understand exactly how you’ll be evaluated.',
        'You enter processes already aligned with expectations.',
        'You get introduced, not filtered.',
      ],
    },
    cta: 'Join the network',
    ctaSub: 'Selective. Limited cohorts.',
  },

  whyItWorks: {
    badge: 'Why this works',
    headline: 'Because it compounds.',
    subheadline:
      'Most recruiting resets every search. We don’t. We learn — and that changes everything.',
    principles: [
      {
        title: 'Shared data layer',
        description:
          'Hiring and training operate on the same underlying signal. That creates consistency no external recruiter can replicate.',
        icon: '◈',
      },
      {
        title: 'Continuous calibration',
        description:
          'Every interaction refines the model. We don’t guess better over time — we know better.',
        icon: '⬡',
      },
      {
        title: 'Flywheel effect',
        description:
          'Better signal → better training → stronger matches → more trust → deeper signal. Each cycle increases precision.',
        icon: '↑',
      },
      {
        title: 'Structural advantage',
        description:
          'Others choose between sourcing or training. We integrate both. That’s why this doesn’t break at scale.',
        icon: '◎',
      },
    ],
  },

  socialProof: {
    badge: 'Trusted by',
    headline: 'Founders who care about signal.',
    logos: [
      { name: 'Veritas Labs', initials: 'VL' },
      { name: 'Orion Systems', initials: 'OS' },
      { name: 'Meridian AI', initials: 'MA' },
      { name: 'Stride Protocol', initials: 'SP' },
      { name: 'Nexus Build', initials: 'NB' },
      { name: 'Apex Cloud', initials: 'AC' },
    ],
    testimonials: [
      {
        quote:
          "They didn’t send candidates. They sent people who already understood how we think. That changed the entire process.",
        author: 'Jenna Park',
        role: 'CTO',
        company: 'Meridian AI',
      },
      {
        quote:
          'The difference was obvious. Less explaining, less filtering, more alignment from day one.',
        author: 'Daniel Torres',
        role: 'VP Engineering',
        company: 'Stride Protocol',
      },
    ],
  },

  cta: {
    headline: 'Hiring should feel like',
    headlineAccent: 'matching, not searching.',
    subheadline:
      'We map your signal, show you how the system works, and let the results speak. No pitch.',
    ctaPrimary: 'Get your first match',
    ctaSecondary: 'Explore candidates',
    note: 'No upfront commitment.',
  },

  footer: {
    tagline: 'A talent intelligence engine.',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    legal: '© 2026 Purrfect Hire. All rights reserved.',
  },
};

export const content_es: LandingContent = {
  lang: 'es',

  nav: {
    logo: 'Purrfect Hire',
    links: [
      { label: 'Cómo funciona', href: '#engine' },
      { label: 'Para startups', href: '#startups' },
      { label: 'Para talento', href: '#talent' },
    ],
    cta: 'Ver tu primer match',
  },

  hero: {
    badge: 'Categoría: Talent Intelligence Engine',
    headline: 'No es recruiting.',
    headlineAccent: 'Las habilidades consiguen que las personas sean contratadas.',
    subheadline:
      'Mapeamos cómo opera realmente tu startup, cómo se toman las decisiones, dónde se rompe el impulso y qué salió mal con tu última mala contratación. Luego incorporamos personas que ya están alineadas con eso. Cada contratación mejora la siguiente.',
    ctaPrimary: 'Ver tu primer match',
    ctaSecondary: 'Ver el engine',
    searchPlaceholder: 'Buscar por rol, señal o etapa…',
    candidates: [
      {
        name: 'Sofia Reyes',
        role: 'Ingeniera Frontend Senior',
        skills: ['React', 'TypeScript', 'Diseño de sistemas'],
        match: 97,
      },
      {
        name: 'Marcus Chen',
        role: 'Ingeniero Full-Stack',
        skills: ['Node.js', 'PostgreSQL', 'AWS'],
        match: 94,
      },
      {
        name: 'Amara Osei',
        role: 'Ingeniera Backend',
        skills: ['Go', 'Kubernetes', 'gRPC'],
        match: 91,
      },
    ],
    matchLabel: 'match',
    reviewLabel: 'Revisar',
  },

  engine: {
    badge: 'Un sistema. Aprendizaje continuo.',
    headline: 'Señal → Construcción → Match → Aprendizaje',
    subheadline:
      'No son dos negocios. Es un sistema cerrado. Cada interacción se acumula. Cada contratación mejora la siguiente.',
    steps: [
      {
        id: '01',
        label: 'Extraemos señal',
        description:
          'Vamos más allá del JD y entendemos cómo realmente decides. Decisiones, tradeoffs, fallos.',
      },
      {
        id: '02',
        label: 'Construimos talento',
        description:
          'Entrenamos personas contra esa señal exacta. No preparación genérica — desarrollo dirigido.',
      },
      {
        id: '03',
        label: 'Hacemos el match',
        description:
          'Conoces candidatos ya alineados con tu forma de evaluar y operar.',
      },
      {
        id: '04',
        label: 'El sistema aprende',
        description:
          'Cada resultado retroalimenta el modelo. La precisión aumenta con cada ciclo.',
      },
    ],
    connectorLabel: 'se acumula',
  },

  startups: {
    badge: 'Para startups',
    headline: 'El problema no es el pipeline.',
    subheadline:
      'Es la señal. La mayoría de errores de contratación vienen de expectativas mal alineadas.',
    statements: [
      'Buen proceso. Mala ejecución después.',
      'Candidatos optimizan para pasar, no para rendir.',
      'Tu criterio real no está en el mercado.',
    ],
    benefits: [
      {
        title: 'Capturamos tu bar real',
        description:
          'Modelamos cómo tomas decisiones en la práctica, no en teoría.',
      },
      {
        title: 'Candidatos preparados',
        description:
          'Las personas que conoces ya están alineadas con tu forma de evaluar.',
      },
      {
        title: 'Decisiones más rápidas',
        description:
          'Menos ruido, más claridad. Decides en días.',
      },
      {
        title: 'Optimizado para retención',
        description:
          'Pensado para que funcione después de contratar.',
      },
    ],
    cta: 'Ver matches',
  },

  talent: {
    badge: 'Para talento',
    headline: 'No te faltan oportunidades.',
    subheadline:
      'Te falta alineación con la señal. Aplicar más no soluciona eso.',
    before: {
      label: 'Antes',
      items: [
        'Aplicar sin entender realmente el rol.',
        'Prepararte con contenido genérico.',
        'Ser filtrado sin contexto.',
        'Negociar sin claridad.',
      ],
    },
    after: {
      label: 'Después',
      items: [
        'Entrenas contra señal real de startups.',
        'Sabes exactamente cómo te evaluarán.',
        'Llegas alineado al proceso.',
        'Te introducen, no te filtran.',
      ],
    },
    cta: 'Unirme a la red',
    ctaSub: 'Selectivo. Cupos limitados.',
  },

  whyItWorks: {
    badge: 'Por qué funciona',
    headline: 'Porque se compone.',
    subheadline:
      'El recruiting tradicional reinicia cada búsqueda. Nosotros aprendemos.',
    principles: [
      {
        title: 'Capa de datos compartida',
        description:
          'Hiring y entrenamiento usan la misma señal. Eso crea consistencia.',
        icon: '◈',
      },
      {
        title: 'Calibración continua',
        description:
          'Cada interacción mejora el modelo.',
        icon: '⬡',
      },
      {
        title: 'Flywheel',
        description:
          'Mejor señal → mejor entrenamiento → mejores matches → más señal.',
        icon: '↑',
      },
      {
        title: 'Ventaja estructural',
        description:
          'Integramos lo que otros separan. Por eso escala.',
        icon: '◎',
      },
    ],
  },

  socialProof: {
    badge: 'De confianza',
    headline: 'Founders que entienden señal.',
    logos: [
      { name: 'Veritas Labs', initials: 'VL' },
      { name: 'Orion Systems', initials: 'OS' },
      { name: 'Meridian AI', initials: 'MA' },
      { name: 'Stride Protocol', initials: 'SP' },
      { name: 'Nexus Build', initials: 'NB' },
      { name: 'Apex Cloud', initials: 'AC' },
    ],
    testimonials: [
      {
        quote:
          'No enviaron candidatos. Enviaron personas que ya entendían cómo pensamos.',
        author: 'Jenna Park',
        role: 'CTO',
        company: 'Meridian AI',
      },
      {
        quote:
          'Menos ruido, más alineación desde el día uno.',
        author: 'Daniel Torres',
        role: 'VP de Ingeniería',
        company: 'Stride Protocol',
      },
    ],
  },

  cta: {
    headline: 'Contratar debería sentirse como',
    headlineAccent: 'hacer match, no buscar.',
    subheadline:
      'Mapeamos tu señal, te mostramos el sistema y decides.',
    ctaPrimary: 'Ver tu match',
    ctaSecondary: 'Explorar talento',
    note: 'Sin compromiso inicial.',
  },

  footer: {
    tagline: 'Un engine de talento.',
    links: [
      { label: 'Privacidad', href: '#' },
      { label: 'Términos', href: '#' },
      { label: 'Contacto', href: '#' },
    ],
    legal: '© 2026 Purrfect Hire.',
  },
};

export function getContent(lang: Lang): LandingContent {
  return lang === 'es' ? content_es : content_en;
}
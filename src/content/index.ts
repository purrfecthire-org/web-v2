export type Lang = 'en' | 'es';

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
    stats: { value: string; suffix: string; suffixLeft?: string; label: string }[];
    ctaAudienceLabel: string;
    ctaHire: string;
    ctaTalent: string;
    socialProofLabel: string;
  };
  audienceSplit: {
    headline: string;
    subheadline: string;
    startups: {
      badge: string;
      headline: string;
      description: string;
      problemLabel: string;
      problem: string;
      fixLabel: string;
      fix: string;
      resultLabel: string;
      result: string;
      cta: string;
    };
    talent: {
      badge: string;
      headline: string;
      description: string;
      problemLabel: string;
      problem: string;
      fixLabel: string;
      fix: string;
      resultLabel: string;
      result: string;
      cta: string;
    };
  };
  engine: {
    badge: string;
    headline: string;
    subheadline: string;
    joinNetworkCta: string;
    steps: {
      id: string;
      title: string;
      description: string;
      callout?: string;
      color: string;
    }[];
  };
  culture: {
    badge: string;
    headline: string;
    body1: string;
    body2: string;
    quotes: { text: string; author: string }[];
  };
  cta: {
    headline: string;
    headlineAccent: string;
    subheadline: string;
    ctaHire: string;
    ctaTalent: string;
    contactCompaniesLabel: string;
    contactCompaniesEmail: string;
    contactCandidatesLabel: string;
    contactCandidatesEmail: string;
  };
  testimonials: {
    badge: string;
    headline: string;
    items: {
      quote: string;
      name: string;
      role: string;
      company: string;
      flag: string;
      type: 'client' | 'candidate';
      timeToHire?: string;
    }[];
  };
  footer: {
    links: { label: string; href: string }[];
    legal: string;
  };
}

export const content_en: LandingContent = {
  lang: 'en',

  nav: {
    logo: 'Purrfect Hire',
    links: [
      { label: 'For startups', href: '#audience' },
      { label: 'For talent', href: '#audience' },
      { label: 'How it works', href: '#howItsWork' },
      { label: 'Open roles', href: '#roles' },
    ],
    cta: 'Get your first match',
  },

  hero: {
    badge: 'Category: Talent Intelligence Engine',
    headline: 'Skills get people hired.',
    headlineAccent: 'Culture fit makes them stay.',
    subheadline: 'We place people already aligned to how your startup works before the first call.',
    stats: [
      { value: '160', suffix: '+', label: 'placements across 3 continents' },
      { value: '80', suffix: '%', label: 'stay 2+ years' },
      { value: '4', suffixLeft: '<', suffix: 'wks', label: 'to first hire' },
    ],
    ctaAudienceLabel: 'Who are you?',
    ctaHire: 'I need to hire',
    ctaTalent: 'I want to get placed',
    socialProofLabel: 'Trusted by teams at',
  },

  audienceSplit: {
    headline: 'Two problems. One engine solving both.',
    subheadline:
      'Whether you\'re building a team or trying to join one, the gap is always the same: misaligned expectations about how the work actually happens. We close that gap, from both sides simultaneously.',
    startups: {
      badge: 'For startups',
      headline: 'Your real bar isn\'t in the JD. We extract it.',
      description:
        'We map how you actually evaluate then place people already calibrated to that. Before the first call.',
      problemLabel: 'The problem',
      problem: 'Strong resume. Strong interview. Wrong in week four',
      fixLabel: 'Our fix',
      fix: 'We map your culture before we open the pipeline.',
      resultLabel: 'The result',
      result: 'Less noise, faster decisions, people who last.',
      cta: 'See how we hire for you',
    },
    talent: {
      badge: 'For talent',
      headline: 'You\'re not losing jobs. You\'re missing signal.',
      description:
        'We train you against the real bar of the companies you want to join not generic prep.',
      problemLabel: 'The problem',
      problem: 'Generic prep. No context. Filtered out without knowing why.',
      fixLabel: 'Our fix',
      fix: 'You train against real signal from active companies',
      resultLabel: 'The result',
      result: 'You get introduced not filtered.',
      cta: 'Join the network',
    },
  },

  engine: {
    badge: 'The engine why it works.',
    headline: 'One system. Two flywheels. Compounding signal.',
    subheadline:
      'Most recruiting firms work on one side of the equation. We work on both and that creates information no external recruiter can structurally access.',
    joinNetworkCta: 'Join the network',
    steps: [
      {
        id: '01',
        title: 'We go deep into how a startup actually operates.',
        description:
          'Not the JD, the real bar. What they reward, what breaks in week three, why the last hire didn\'t work out.',
        color: '--color-matcha-300',
      },
      {
        id: '02',
        title: 'That signal feeds directly into how we train talent.',
        description:
          'Specific calibration how this type of company moves, decides, and evaluates under pressure.',
        color: '--color-slushie-800',
      },
      {
        id: '03',
        title: 'Candidates arrive already aligned.',
        description:
          'Less time explaining context. Less friction in week one. Faster time to value consistently under 4 weeks to first placement.',
        callout: 'Under 4 weeks to first placement',
        color: '--color-ube-300',
      },
      {
        id: '04',
        title: 'Every outcome sharpens the model.',
        description:
          'Hire, pass, early churn all of it feeds back in. The system gets more precise with every cycle. That\'s not a claim, it\'s how the engine is built.',
        color: '--color-pomegranate-400',
      },
    ],
  },

  culture: {
    badge: 'Why cultural fit backed by data',
    headline: 'The interview isn\'t where hires fail. Week four is.',
    body1:
      'A16z identifies it as the most misdiagnosed problem in early-stage hiring: founders attribute exits to performance, but the root cause is a process that never captured the actual culture. Research backs it up 46% of new hires fail within 18 months, and 89% of those failures are due to attitude and culture misalignment, not lack of skills.',
    body2:
      'In a team of 10, one wrong person doesn\'t just underperform. They slow everyone else down, erode trust, and force your best people to absorb the gap. YC puts it plainly: your first 10 hires write the culture. They define how decisions get made when you\'re not in the room.',
    quotes: [
      {
        text: 'Misaligned expectations are one of the most common and costly reasons early hires don\'t work out. Even one mis-hire can stall momentum and drain morale.',
        author: 'Andreessen Horowitz, on founding team hiring',
      },
      {
        text: 'Your culture is the way people behave when no one is watching. It shapes the decisions and actions of your team as you grow.',
        author: 'Paul Graham, Y Combinator',
      },
    ],
  },

  cta: {
    headline: 'Tell us how your team actually works.',
    headlineAccent: 'Or tell us where you want to go.',
    subheadline: 'Either way, the first conversation is fast and honest. We\'ll tell you if we can help, and how.',
    ctaHire: 'I need to hire',
    ctaTalent: 'I want to get placed',
    contactCompaniesLabel: 'Companies',
    contactCompaniesEmail: 'finance@purrfecthire.com',
    contactCandidatesLabel: 'Candidates',
    contactCandidatesEmail: 'hiring@purrfecthire.com',
  },

  testimonials: {
    badge: 'Social proof real testimonials',
    headline: 'What happens when culture fit is the starting point, not the final check.',
    items: [
      {
        quote: 'The people we\'ve hired through Purrfect Hire not only continue working and adding value they\'ve been promoted to roles of greater responsibility because of how well they adapted to our culture.',
        name: 'Micaela Crosta',
        role: 'Head of Customer Operations',
        company: 'OutDo',
        flag: '🇺🇸',
        type: 'client',
      },
      {
        quote: 'A process that understands the culture of companies and the personality of candidates allows cultural matches from moment zero. Candidates feel supported at every step.',
        name: 'Andrés F. Hortúa',
        role: 'Head of Growth',
        company: 'Bolsiyo',
        flag: '🇨🇴',
        type: 'client',
        timeToHire: '11 days',
      },
      {
        quote: 'Purrfect Hire adapted to our processes and to each specific role. They\'re a real search partner not just a pipeline.',
        name: 'Fabián Torres',
        role: 'CEO',
        company: 'Trébol',
        flag: '🇨🇴',
        type: 'client',
      },
      {
        quote: 'Thanks to their experience and industry knowledge, the final selection was somehow easy. They got us the best candidates.',
        name: 'Camilo Rodríguez',
        role: 'Sales Director',
        company: 'Ed-Machina',
        flag: '🇦🇷',
        type: 'client',
      },
      {
        quote: 'I\'ve never been in such a supportive process. The team was attentive at every moment I knew exactly where I stood.',
        name: 'Diana Arteaga',
        role: 'Customer Service Lead',
        company: 'Konta',
        flag: '🇲🇽',
        type: 'candidate',
        timeToHire: '16 days',
      },
    ],
  },

  footer: {
    links: [
      { label: 'Terms & Conditions', href: '#' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/purrfect-hire' },
      { label: 'Open roles', href: '#roles' },
    ],
    legal: '© 2026 Purrfect Hire.',
  },
};

export const content_es: LandingContent = {
  lang: 'es',

  nav: {
    logo: 'Purrfect Hire',
    links: [
      { label: 'Para startups', href: '#startups' },
      { label: 'Para talento', href: '#talent' },
      { label: 'Cómo funciona', href: '#engine' },
      { label: 'Roles abiertos', href: '#roles' },
    ],
    cta: 'Ver tu primer match',
  },

  hero: {
    badge: 'Categoría: Talent Intelligence Engine',
    headline: 'Las habilidades consiguen el empleo.',
    headlineAccent: 'El culture fit hace que se queden.',
    subheadline: 'Ubicamos personas que ya están alineadas con la forma en que opera tu startup, antes de la primera llamada.',
    stats: [
      { value: '160', suffix: '+', label: 'placements en 3 continentes' },
      { value: '80', suffix: '%', label: 'de las contrataciones permanecen 2+ años' },
      { value: '4', suffixLeft: '<', suffix: 'wks', label: 'para la primera contratación' },
    ],
    ctaAudienceLabel: '¿Quién eres?',
    ctaHire: 'Necesito contratar',
    ctaTalent: 'Quiero ser colocado',
    socialProofLabel: 'Confiado por equipos en',
  },

  audienceSplit: {
    headline: 'Dos problemas. Un engine resolviéndolos.',
    subheadline:
      'Ya sea que estés construyendo un equipo o buscando unirte a uno, la brecha siempre es la misma: expectativas desalineadas sobre cómo funciona el trabajo de verdad. Cerramos esa brecha desde ambos lados.',
    startups: {
      badge: 'Para startups',
      headline: 'Tu verdadera barra no está en la vacante. Nosotros la extraemos.',
      description:
        'Mapeamos cómo realmente evalúan en tu empresa y conectamos talento ya calibrado con eso. Antes de la primera llamada.',
      problemLabel: 'El problema',
      problem: 'Buen CV. Buena entrevista. Mala decisión en la cuarta semana.',
      fixLabel: 'Nuestra solución',
      fix: 'Entendemos tu cultura antes de abrir el pipeline.',
      resultLabel: 'El resultado',
      result: 'Menos ruido, decisiones más rápidas, personas que se quedan.',
      cta: 'Descubre cómo contratamos por ti',
    },
    talent: {
      badge: 'Para talento',
      headline: 'No estás perdiendo vacantes. Te está faltando señal.',
      description:
        'Te entrenamos con la verdadera barra de las empresas a las que quieres entrar, no con preparación genérica.',
      problemLabel: 'El problema',
      problem: 'Preparación genérica. Sin contexto. Filtrado sin saber por qué.',
      fixLabel: 'Nuestra solución',
      fix: 'Te entrenas con señales reales de empresas activas.',
      resultLabel: 'El resultado',
      result: 'Te presentan, no te filtran.',
      cta: 'Únete a la red',
    },
  },
  engine: {
    badge: 'El engine por qué funciona.',
    headline: 'Un sistema. Dos flywheels. Señal que se acumula.',
    subheadline:
      'La mayoría de las firmas de recruiting trabajan en un solo lado de la ecuación. Nosotros trabajamos en ambos y eso genera información a la que ningún recruiter externo puede acceder estructuralmente.',
    joinNetworkCta: 'Unirme a la red',
    steps: [
      {
        id: '01',
        title: 'Vamos profundo en cómo opera realmente una startup.',
        description:
          'No el JD, el bar real. Qué recompensan, qué se rompe en la semana tres, por qué la última contratación no funcionó.',
        color: '--color-matcha-300',
      },
      {
        id: '02',
        title: 'Esa señal alimenta directamente cómo entrenamos al talento.',
        description:
          'Calibración específica cómo este tipo de empresa se mueve, decide y evalúa bajo presión.',
        color: '--color-slushie-800',
      },
      {
        id: '03',
        title: 'Los candidatos llegan ya alineados.',
        description:
          'Menos tiempo explicando contexto. Menos fricción en la primera semana. Más rápido tiempo al valor consistentemente menos de 4 semanas hasta el primer placement.',
        callout: 'Menos de 4 semanas al primer placement',
        color: '--color-ube-300',
      },
      {
        id: '04',
        title: 'Cada resultado afina el modelo.',
        description:
          'Contratación, rechazo, churn temprano todo retroalimenta el sistema. El modelo se vuelve más preciso con cada ciclo. No es un claim, así está construido el engine.',
        color: '--color-pomegranate-400',
      },
    ],
  },

  culture: {
    badge: 'Por qué cultural fit respaldado por datos',
    headline: 'La entrevista no es donde fallan las contrataciones. La semana cuatro sí.',
    body1:
      'A16z lo identifica como el problema más mal diagnosticado en las contrataciones early-stage: los founders atribuyen las salidas al desempeño, pero la causa raíz es un proceso que nunca capturó la cultura real. La investigación lo respalda el 46% de los nuevos empleados fracasa en los primeros 18 meses, y el 89% de esos fracasos se debe a desalineación de actitud y cultura, no a falta de habilidades.',
    body2:
      'En un equipo de 10, una persona equivocada no solo rinde menos. Frena a todos los demás, erosiona la confianza y obliga a tus mejores personas a absorber la brecha. YC lo dice sin rodeos: tus primeros 10 hires escriben la cultura. Definen cómo se toman las decisiones cuando tú no estás en la sala.',
    quotes: [
      {
        text: 'Las expectativas desalineadas son una de las razones más comunes y costosas por las que los hires tempranos no funcionan. Incluso un mis-hire puede frenar el momentum y drenar la moral.',
        author: 'Andreessen Horowitz, sobre la contratación del equipo fundador',
      },
      {
        text: 'Tu cultura es la forma en que las personas se comportan cuando nadie las está mirando. Moldea las decisiones y acciones de tu equipo mientras creces.',
        author: 'Paul Graham, Y Combinator',
      },
    ],
  },

  cta: {
    headline: 'Cuéntanos cómo opera realmente tu equipo.',
    headlineAccent: 'O cuéntanos a dónde quieres llegar.',
    subheadline: 'De cualquier forma, la primera conversación es rápida y honesta. Te diremos si podemos ayudar, y cómo.',
    ctaHire: 'Necesito contratar',
    ctaTalent: 'Quiero ser colocado',
    contactCompaniesLabel: 'Empresas',
    contactCompaniesEmail: 'finance@purrfecthire.com',
    contactCandidatesLabel: 'Candidatos',
    contactCandidatesEmail: 'hiring@purrfecthire.com',
  },

  testimonials: {
    badge: 'Prueba social testimonios reales',
    headline: 'Lo que pasa cuando el culture fit es el punto de partida, no el check final.',
    items: [
      {
        quote: 'Las personas que contratamos a través de Purrfect Hire no solo siguen trabajando y aportando valor han sido promovidas a roles de mayor responsabilidad por lo bien que se adaptaron a nuestra cultura.',
        name: 'Micaela Crosta',
        role: 'Head of Customer Operations',
        company: 'OutDo',
        flag: '🇺🇸',
        type: 'client',
      },
      {
        quote: 'Un proceso que entiende la cultura de las empresas y la personalidad de los candidatos permite matches culturales desde el momento cero. Los candidatos se sienten apoyados en cada paso.',
        name: 'Andrés F. Hortúa',
        role: 'Head of Growth',
        company: 'Bolsiyo',
        flag: '🇨🇴',
        type: 'client',
        timeToHire: '11 días',
      },
      {
        quote: 'Purrfect Hire se adaptó a nuestros procesos y a cada rol específico. Son un verdadero socio de búsqueda no solo un pipeline.',
        name: 'Fabián Torres',
        role: 'CEO',
        company: 'Trébol',
        flag: '🇨🇴',
        type: 'client',
      },
      {
        quote: 'Gracias a su experiencia y conocimiento de la industria, la selección final fue de alguna manera fácil. Nos consiguieron los mejores candidatos.',
        name: 'Camilo Rodríguez',
        role: 'Sales Director',
        company: 'Ed-Machina',
        flag: '🇦🇷',
        type: 'client',
      },
      {
        quote: 'Nunca había estado en un proceso tan acompañado. El equipo estuvo atento en todo momento sabía exactamente en qué punto estaba.',
        name: 'Diana Arteaga',
        role: 'Customer Service Lead',
        company: 'Konta',
        flag: '🇲🇽',
        type: 'candidate',
        timeToHire: '16 días',
      },
    ],
  },

  footer: {
    links: [
      { label: 'Términos y condiciones', href: '#' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/purrfect-hire' },
      { label: 'Roles abiertos', href: '#roles' },
    ],
    legal: '© 2026 Purrfect Hire.',
  },
};

export function getContent(lang: Lang): LandingContent {
  return lang === 'es' ? content_es : content_en;
}
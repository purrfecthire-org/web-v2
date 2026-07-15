// ─────────────────────────────────────────────────────────────────────────
// Individual coaching offerings — shared content (EN + ES).
// Two products on the talent ladder (Jul 11 2026 pricing doc):
//   1. /career-sessions — 1:1 sessions with Kate at $200 USD/session (open
//      to anyone, not just program members). The $200 rung.
//   2. /career-momentum — Momentum: $550 USD/month, 2 sessions/month with
//      Kate + async review between sessions, 3-month minimum, entry after
//      at least one paid 1:1 session. The rung between the $200 session and
//      the $2,000+ Offer Acceleration program. (/momentum redirects here.)
// All four pages render through CoachingPage.astro.
// ─────────────────────────────────────────────────────────────────────────

export const coachingContact = {
  whatsappLabel: '+1 (628) 358-8776',
  email: 'hiring@purrfecthire.com',
  emailUrl: 'mailto:hiring@purrfecthire.com',
} as const;

export interface CoachingContent {
  lang: 'en' | 'es';
  path: string;
  /** Same product in the other language (language toggle target). */
  altPath: string;
  meta: { title: string; description: string };
  jsonLd: {
    serviceName: string;
    serviceDescription: string;
    price: string;
    priceUnit: string;
  };
  whatsappUrl: string;
  navCta: string;
  hero: {
    eyebrow: string;
    headline: string;
    para1: string;
    para2: string;
    stats: string[];
    /** Approved hero photo (career-sessions only until the shoot). */
    photo?: { src: string; alt: string };
    /** Honest scarcity line under the stats (career-sessions). */
    scarcity?: string;
  };
  /** 60-sec Kate video slot — described placeholder until it's recorded. */
  video?: { title: string; caption: string };
  forWho: { title: string; intro: string; items: string[] };
  cards: { title: string; intro: string; items: { title: string; body: string }[] };
  how: { title: string; intro: string; steps: { title: string; body: string }[]; close: string };
  price: { title: string; amount: string; note: string; bullets: string[] };
  faq: { title: string; items: { q: string; a: string }[] };
  final: { title: string; body: string; buttonWhatsapp: string; buttonEmail: string };
}

const wa = (text: string) => `https://wa.me/16283588776?text=${encodeURIComponent(text)}`;

// ══════════════════════════════════════════════════════════════════════════
// 1:1 sessions with Kate — $200 USD/session
// ══════════════════════════════════════════════════════════════════════════

export const careerSessionsEs: CoachingContent = {
  lang: 'es',
  path: '/es/career-sessions',
  altPath: '/career-sessions',

  meta: {
    title: 'Sesiones 1:1 con Kate Forero · Coaching de carrera | Purrfect Hire',
    description:
      'Sesiones individuales de coaching de carrera con Katerine Forero: diagnóstico de perfil, role play de entrevista en español o inglés, LinkedIn y CV, síndrome del impostor y negociación de oferta. $200 USD por sesión de una hora. Agenda por WhatsApp.',
  },

  jsonLd: {
    serviceName: 'Sesiones 1:1 de coaching de carrera con Kate Forero',
    serviceDescription:
      'Sesiones individuales de una hora con Katerine Forero, founder de Purrfect Hire: diagnóstico de carrera, role play de entrevista, revisión de LinkedIn y CV, síndrome del impostor y negociación de oferta. Abiertas a cualquier profesional, sin necesidad de entrar a un programa.',
    price: '200',
    priceUnit: 'por sesión de una hora',
  },

  whatsappUrl: wa('Hola, quiero agendar una sesión 1:1 con Kate.'),
  navCta: 'Agenda tu sesión · $200',

  hero: {
    eyebrow: 'Sesiones 1:1 · Coaching de carrera',
    headline: 'Una hora con quien contrata para founders de YC, a16z y Sequoia.',
    para1:
      'Kate Forero ha colocado 160+ perfiles senior en startups de US, Europa y LATAM, y lleva 10+ años leyendo cómo evalúan los founders de verdad. En una sesión 1:1 esa señal se aplica directo a tu caso: tu perfil, tu entrevista, tu negociación.',
    para2:
      'No necesitas entrar a un programa. Reservas la sesión que necesitas, cuando la necesitas, y sales con acciones concretas.',
    stats: [
      '$200 USD por sesión de 1 hora',
      '160+ placements en US, Europa y LATAM',
      'En español o en inglés',
    ],
    photo: { src: '/sessions/kate.jpeg', alt: 'Kate Forero' },
    scarcity:
      'Kate abre pocos cupos de sesión por semana: el resto de su agenda son searches activos para founders.',
  },

  video: {
    title: 'Qué pasa en una sesión, contado por Kate',
    caption:
      'Video pendiente (60 segundos): Kate a cámara explicando qué pasa en una sesión, con la honestidad de la FAQ: una sesión no te consigue trabajo, y desconfía de quien te lo prometa.',
  },

  forWho: {
    title: 'Para quién es',
    intro:
      'Para profesionales que tienen un problema puntual de carrera y quieren resolverlo con alguien que contrata todos los días, no con teoría genérica.',
    items: [
      'Tienes una entrevista cerca y quieres llegar preparado, no improvisando.',
      'Sospechas que tu perfil comunica menos de lo que vales y quieres una lectura honesta.',
      'Hay algo interno que te frena: síndrome del impostor, creencias limitantes, una narrativa que no cierra.',
      'Tienes una oferta sobre la mesa y no sabes si aceptar, aguantar o pedir más.',
    ],
  },

  cards: {
    title: 'Qué puedes trabajar en una sesión',
    intro: 'Cada sesión ataca un problema específico. Nos dices cuál es el tuyo y llegamos directo a él.',
    items: [
      {
        title: 'Diagnóstico de carrera',
        body: 'Una lectura honesta de dónde estás parado: qué comunica tu perfil, qué contradicciones tiene, a qué tier puedes apuntar de forma realista y cuál es tu siguiente movida.',
      },
      {
        title: 'Role play de entrevista',
        body: 'Kate simula al founder, al hiring manager o al panel, en español o en inglés. Sales con feedback puntual: qué respondiste bien, dónde te caes y cómo corregirlo antes de la entrevista real.',
      },
      {
        title: 'Preparación para un proceso activo',
        body: 'Ya tienes una entrevista agendada. Preparamos ese proceso específico: la empresa, el rol, las preguntas probables y la narrativa que ese comprador necesita escuchar.',
      },
      {
        title: 'LinkedIn, CV y narrativa',
        body: 'Revisión directa de cómo te presentas. Detectamos las contradicciones entre lo que dices y lo que buscas, y reposicionamos tu perfil para el nivel al que apuntas, no para el que tienes.',
      },
      {
        title: 'Síndrome del impostor y creencias limitantes',
        body: 'Cuando lo que te frena no es el mercado. Trabajamos la conversación interna que te hace cobrar menos, aplazar la movida o sabotear la entrevista que ya tenías ganada.',
      },
      {
        title: 'Negociación de oferta',
        body: 'Tienes una oferta o una contraoferta sobre la mesa. Definimos cuándo decir sí, cuándo aguantar y cómo pedir más sin romper el proceso.',
      },
    ],
  },

  how: {
    title: 'Cómo funciona',
    intro: 'Sin formularios largos ni llamadas de venta. Tres pasos y estás en sesión.',
    steps: [
      {
        title: 'Escríbenos por WhatsApp.',
        body: 'Cuéntanos en dos líneas qué quieres trabajar: la entrevista que tienes, la oferta que recibiste, la duda que te frena.',
      },
      {
        title: 'Confirmamos foco, horario y pago.',
        body: 'Te proponemos horario con Kate y confirmas tu cupo pagando la sesión. $200 USD, una hora, agenda cerrada.',
      },
      {
        title: 'Una hora de trabajo directo con Kate.',
        body: 'Sin diapositivas ni teoría descargada de un módulo. Entras con un caso, sales con feedback honesto y acciones concretas para ejecutar esta semana.',
      },
    ],
    close:
      'Si tu caso necesita más que una sesión, te lo decimos de frente: para continuidad mensual existe Momentum, y para un reposicionamiento completo, Offer Acceleration.',
  },

  price: {
    title: 'Inversión',
    amount: '$200 USD',
    note: 'Por sesión de una hora, 1:1 con Kate. Pagas al reservar. Sin suscripciones, sin permanencia, sin letra chica.',
    bullets: [
      'Sesión individual de 60 minutos por videollamada',
      'En español o en inglés, según lo que necesites entrenar',
      'Resumen de acuerdos y siguientes pasos al terminar',
    ],
  },

  faq: {
    title: 'Preguntas directas',
    items: [
      {
        q: '¿Cuánto cuesta una sesión de coaching de carrera con Kate?',
        a: 'Cada sesión 1:1 cuesta $200 USD y dura una hora. El pago se hace al reservar y confirma tu cupo en la agenda. No hay suscripciones ni paquetes obligatorios: pagas solo las sesiones que tomas.',
      },
      {
        q: '¿Necesito estar en un programa para tomar una sesión?',
        a: 'No. Las sesiones 1:1 están abiertas a cualquier profesional, esté o no en nuestros programas. Son el formato correcto cuando tienes un problema puntual: una entrevista, una oferta, un perfil que no comunica lo que vales.',
      },
      {
        q: '¿Las sesiones pueden ser en inglés?',
        a: 'Sí. Los role plays de entrevista se hacen en el idioma en que va a pasar la conversación real. Si tu proceso es con una startup de US, entrenamos en inglés, bajo la misma presión que vas a sentir en la entrevista.',
      },
      {
        q: '¿Cómo agendo y cómo pago?',
        a: 'Nos escribes por WhatsApp contando qué quieres trabajar. Te proponemos horario con Kate y te enviamos el link de pago. La sesión queda confirmada cuando el pago está hecho.',
      },
      {
        q: '¿Una sesión me consigue trabajo?',
        a: 'No, y desconfía de quien te lo prometa. Una sesión te da lectura honesta, entrenamiento real y una siguiente movida clara. Si lo que necesitas es un proceso completo de reposicionamiento y canal, ese es Offer Acceleration.',
      },
      {
        q: '¿Y si quiero continuidad después de la sesión?',
        a: 'Para eso existe Momentum: 2 sesiones al mes con Kate más revisión async de tus avances entre sesiones, a $550 USD/mes con mínimo de 3 meses. Se entra después de al menos una sesión 1:1. La sesión es el diagnóstico. Y para una transformación completa está Offer Acceleration, desde $2,000 USD.',
      },
    ],
  },

  final: {
    title: 'Un problema puntual no necesita un programa. Necesita una hora bien usada.',
    body: 'Escríbenos por WhatsApp con lo que quieres trabajar y te confirmamos el horario de tu sesión con Kate.',
    buttonWhatsapp: 'Agenda por WhatsApp',
    buttonEmail: 'Escríbenos por email',
  },
};

export const careerSessionsEn: CoachingContent = {
  lang: 'en',
  path: '/career-sessions',
  altPath: '/es/career-sessions',

  meta: {
    title: '1:1 Sessions with Kate Forero · Career coaching | Purrfect Hire',
    description:
      'Individual career-coaching sessions with Katerine Forero: profile diagnosis, interview role play in English or Spanish, LinkedIn and resume, impostor syndrome, and offer negotiation. $200 USD per one-hour session. Book via WhatsApp.',
  },

  jsonLd: {
    serviceName: '1:1 career coaching sessions with Kate Forero',
    serviceDescription:
      'Individual one-hour sessions with Katerine Forero, founder of Purrfect Hire: career diagnosis, interview role play, LinkedIn and resume review, impostor syndrome, and offer negotiation. Open to any professional, no program membership required.',
    price: '200',
    priceUnit: 'per one-hour session',
  },

  whatsappUrl: wa('Hi Kate, I want to book a 1:1 session.'),
  navCta: 'Book your session · $200',

  hero: {
    eyebrow: '1:1 Sessions · Career coaching',
    headline: 'One hour with the person who hires for YC, a16z and Sequoia founders.',
    para1:
      'Kate Forero has placed 160+ senior profiles at startups in the US, Europe and LATAM, and has spent 10+ years reading how founders actually evaluate. In a 1:1 session that signal is applied straight to your case: your profile, your interview, your negotiation.',
    para2:
      'No program required. You book the session you need, when you need it, and leave with concrete actions.',
    stats: [
      '$200 USD per 1-hour session',
      '160+ placements in the US, Europe and LATAM',
      'In English or Spanish',
    ],
    photo: { src: '/sessions/kate.jpeg', alt: 'Kate Forero' },
    scarcity:
      'Kate opens a handful of session slots each week: the rest of her calendar is active searches for founders.',
  },

  video: {
    title: 'What happens in a session, told by Kate',
    caption:
      'Video pending (60 seconds): Kate on camera explaining what happens in a session, with the honesty of the FAQ: a session does not get you a job, and you should distrust anyone who promises it will.',
  },

  forWho: {
    title: 'Who it is for',
    intro:
      'For professionals with one specific career problem who want to solve it with someone who hires every day, not with generic theory.',
    items: [
      'You have an interview coming up and want to arrive prepared, not improvising.',
      'You suspect your profile communicates less than you are worth and want an honest read.',
      'Something internal is holding you back: impostor syndrome, limiting beliefs, a narrative that does not land.',
      'You have an offer on the table and do not know whether to accept, hold, or ask for more.',
    ],
  },

  cards: {
    title: 'What you can work on in a session',
    intro: 'Each session attacks one specific problem. You tell us which one is yours and we go straight at it.',
    items: [
      {
        title: 'Career diagnosis',
        body: 'An honest read of where you stand: what your profile communicates, where it contradicts itself, what tier you can realistically aim for, and what your next move is.',
      },
      {
        title: 'Interview role play',
        body: 'Kate plays the founder, the hiring manager, or the panel, in English or Spanish. You leave with pointed feedback: what you answered well, where you fall, and how to fix it before the real interview.',
      },
      {
        title: 'Prep for an active process',
        body: 'You already have an interview scheduled. We prepare that specific process: the company, the role, the likely questions, and the narrative that buyer needs to hear.',
      },
      {
        title: 'LinkedIn, resume and narrative',
        body: 'A direct review of how you present yourself. We find the contradictions between what you say and what you want, and reposition your profile for the level you are aiming at, not the one you have.',
      },
      {
        title: 'Impostor syndrome and limiting beliefs',
        body: 'When what holds you back is not the market. We work on the internal conversation that makes you undercharge, postpone the move, or sabotage the interview you had already won.',
      },
      {
        title: 'Offer negotiation',
        body: 'You have an offer or a counteroffer on the table. We define when to say yes, when to hold, and how to ask for more without breaking the process.',
      },
    ],
  },

  how: {
    title: 'How it works',
    intro: 'No long forms, no sales calls. Three steps and you are in session.',
    steps: [
      {
        title: 'Message us on WhatsApp.',
        body: 'Tell us in two lines what you want to work on: the interview you have, the offer you received, the doubt holding you back.',
      },
      {
        title: 'We confirm focus, time and payment.',
        body: 'We propose a time with Kate and you confirm your spot by paying for the session. $200 USD, one hour, locked calendar.',
      },
      {
        title: 'One hour of direct work with Kate.',
        body: 'No slides, no canned theory. You come in with a case and leave with honest feedback and concrete actions to execute this week.',
      },
    ],
    close:
      'If your case needs more than one session, we tell you straight: Momentum exists for monthly continuity, and Offer Acceleration for a full repositioning.',
  },

  price: {
    title: 'Investment',
    amount: '$200 USD',
    note: 'Per one-hour session, 1:1 with Kate. You pay when you book. No subscriptions, no lock-in, no fine print.',
    bullets: [
      'Individual 60-minute session over video call',
      'In English or Spanish, depending on what you need to train',
      'Written summary of agreements and next steps afterward',
    ],
  },

  faq: {
    title: 'Straight questions',
    items: [
      {
        q: 'How much does a career coaching session with Kate cost?',
        a: 'Each 1:1 session costs $200 USD and lasts one hour. Payment is made when you book and confirms your spot. There are no subscriptions or mandatory packages: you pay only for the sessions you take.',
      },
      {
        q: 'Do I need to be in a program to take a session?',
        a: 'No. 1:1 sessions are open to any professional, in or out of our programs. They are the right format when you have one specific problem: an interview, an offer, a profile that does not communicate what you are worth.',
      },
      {
        q: 'Can sessions be in English?',
        a: 'Yes. Interview role plays happen in the language the real conversation will happen in. If your process is with a US startup, we train in English, under the same pressure you will feel in the interview.',
      },
      {
        q: 'How do I book and pay?',
        a: 'You message us on WhatsApp with what you want to work on. We propose a time with Kate and send you the payment link. The session is confirmed once payment is made.',
      },
      {
        q: 'Will one session get me a job?',
        a: 'No, and distrust anyone who promises it will. A session gives you an honest read, real training, and a clear next move. If what you need is a full repositioning process and channel, that is Offer Acceleration.',
      },
      {
        q: 'What if I want continuity after the session?',
        a: 'That is what Momentum is for: 2 sessions a month with Kate plus async review of your progress between sessions, at $550 USD/month with a 3-month minimum. Entry is after at least one 1:1 session. The session is the diagnosis. For a full transformation there is Offer Acceleration, from $2,000 USD.',
      },
    ],
  },

  final: {
    title: 'A specific problem does not need a program. It needs one well-used hour.',
    body: 'Message us on WhatsApp with what you want to work on and we will confirm the time of your session with Kate.',
    buttonWhatsapp: 'Book via WhatsApp',
    buttonEmail: 'Email us',
  },
};

// ══════════════════════════════════════════════════════════════════════════
// Momentum — $550 USD/month, 2 sessions/month with Kate, 3-month minimum,
// entry after at least one paid 1:1 session. (Replaces the old $100/month
// OA-alumni continuity product, Jul 11 2026 pricing doc.)
// ══════════════════════════════════════════════════════════════════════════

export const momentumEs: CoachingContent = {
  lang: 'es',
  path: '/es/career-momentum',
  altPath: '/career-momentum',

  meta: {
    title: 'Momentum · 2 sesiones al mes con Kate Forero | Purrfect Hire',
    description:
      'Momentum es el acompañamiento mensual de Purrfect Hire: 2 sesiones al mes con Kate Forero más revisión async de tus avances entre sesiones. $550 USD al mes, mínimo 3 meses. Se entra después de al menos una sesión 1:1.',
  },

  jsonLd: {
    serviceName: 'Momentum: acompañamiento mensual de carrera con Kate Forero',
    serviceDescription:
      'Suscripción mensual de coaching de carrera con Katerine Forero, founder de Purrfect Hire: 2 sesiones 1:1 al mes más revisión async de avances entre sesiones. Mínimo 3 meses. Entrada después de al menos una sesión 1:1.',
    price: '550',
    priceUnit: 'al mes, mínimo 3 meses',
  },

  whatsappUrl: wa('Hola, quiero activar Momentum.'),
  navCta: 'Activa Momentum',

  hero: {
    eyebrow: 'Momentum · Acompañamiento mensual',
    headline: 'Una sesión te da claridad. Momentum te da ritmo.',
    para1:
      'Dos sesiones al mes con Kate, y tus avances revisados async entre sesiones: los mensajes que vas a enviar, la narrativa que estás ajustando, el proceso que se movió esta semana. El contexto no se pierde entre sesiones: se acumula.',
    para2:
      'Se entra después de al menos una sesión 1:1. Esa primera sesión es el diagnóstico: nadie entra a recurrencia sin saber exactamente qué va a trabajar.',
    stats: [
      '$550 USD/mes, mínimo 3 meses',
      '2 sesiones al mes con Kate',
      'Revisión async entre sesiones',
    ],
  },

  forWho: {
    title: 'Para quién es',
    intro:
      'Para quien ya hizo una sesión, sabe qué tiene que mover, y quiere avance sostenido mes a mes, no un empujón aislado.',
    items: [
      'Hiciste una sesión 1:1 y quieres continuidad sin saltar a un programa de $2,000.',
      'Estás en medio de un cambio de nivel o de mercado y necesitas cadencia, no motivación.',
      'Tienes varios procesos activos y quieres a Kate leyendo cada movida antes de hacerla.',
      'Sabes que sin accountability quincenal el ritmo se te cae.',
    ],
  },

  cards: {
    title: 'Qué incluye tu mes',
    intro: 'La cadencia completa: sesión, ejecución revisada, sesión. Nada queda flotando.',
    items: [
      {
        title: '2 sesiones 1:1 al mes con Kate',
        body: 'Una hora cada una, foco definido de antemano, resumen de acuerdos al salir. El mismo formato de la sesión suelta, con contexto acumulado.',
      },
      {
        title: 'Revisión async entre sesiones',
        body: 'Avances, mensajes, narrativa, dudas puntuales: los envías entre sesiones y Kate los revisa. La ejecución no espera a la próxima videollamada.',
      },
      {
        title: 'Contexto que se acumula',
        body: 'No vuelves a explicar tu caso cada vez. Kate sigue tu búsqueda mes a mes: qué intentaste, qué respondió el mercado, qué toca ajustar.',
      },
      {
        title: 'Prioridad de agenda',
        body: 'Tus sesiones quedan fijadas con prioridad en el calendario de Kate, la misma agenda donde viven los searches activos para founders.',
      },
    ],
  },

  how: {
    title: 'Cómo funciona',
    intro: 'La entrada tiene un solo requisito: haber trabajado con Kate al menos una vez.',
    steps: [
      {
        title: 'Haces (o ya hiciste) una sesión 1:1.',
        body: 'Es el diagnóstico: $200 USD, una hora, un problema. Ahí se define si Momentum es tu siguiente paso y qué van a trabajar juntos.',
      },
      {
        title: 'Activas Momentum por WhatsApp.',
        body: '$550 USD al mes, mínimo 3 meses. Fijamos la cadencia de tus 2 sesiones mensuales desde la primera semana.',
      },
      {
        title: 'Sesión, ejecución revisada, sesión.',
        body: 'Cada mes: dos horas de trabajo directo con Kate y tus avances revisados async entre sesiones. Cada sesión arranca donde quedó la anterior.',
      },
    ],
    close:
      'Tres meses de Momentum son $1,650, deliberadamente debajo del programa completo. Si tu caso pide una transformación total, Offer Acceleration existe para eso.',
  },

  price: {
    title: 'Inversión',
    amount: '$550 USD / mes',
    note: 'Mínimo 3 meses. Se entra después de al menos una sesión 1:1 con Kate. Esa sesión es el diagnóstico.',
    bullets: [
      '2 sesiones 1:1 de una hora al mes con Kate',
      'Revisión async de avances entre sesiones',
      'En español o en inglés, según tu búsqueda',
    ],
  },

  faq: {
    title: 'Preguntas directas',
    items: [
      {
        q: '¿Qué es Momentum?',
        a: 'Es el acompañamiento mensual de Purrfect Hire: 2 sesiones 1:1 al mes con Kate Forero más revisión async de tus avances entre sesiones. Cuesta $550 USD al mes con un mínimo de 3 meses. Es el peldaño entre la sesión suelta de $200 y el programa Offer Acceleration de $2,000+.',
      },
      {
        q: '¿Por qué necesito una sesión 1:1 antes de entrar?',
        a: 'Porque la primera sesión es el diagnóstico. Antes de comprometerte a meses de trabajo, tú y Kate confirman que hay un plan que vale la pena sostener. También protege la agenda: nadie entra a recurrencia sin caso definido.',
      },
      {
        q: '¿Cuánto cuesta y hay permanencia mínima?',
        a: '$550 USD al mes, con permanencia mínima de 3 meses. Tres meses son $1,650, el tiempo mínimo para que una búsqueda seria muestre resultados medibles. Después del tercer mes continúas mes a mes.',
      },
      {
        q: '¿En qué se diferencia de una sesión suelta?',
        a: 'La sesión suelta resuelve un problema puntual: una hora, un foco, $200. Momentum es cadencia: dos sesiones al mes, avances revisados entre sesiones y contexto que se acumula. Si tu problema es de una hora, agenda una sesión. Si es de meses, Momentum.',
      },
      {
        q: '¿En qué se diferencia de Offer Acceleration?',
        a: 'Offer Acceleration es un reposicionamiento completo hacia startups de US: estrategia escrita, mapa de mercado, role plays, negociación e intros directas, desde $2,000 USD con aplicación y cupos limitados. Momentum es avance sostenido con Kate, sin el programa completo. Muchos pasan de Momentum a OA cuando el caso lo pide.',
      },
      {
        q: '¿Cómo empiezo?',
        a: 'Si ya hiciste una sesión 1:1 con Kate, nos escribes por WhatsApp y activamos tu mes desde la próxima semana. Si aún no la has hecho, agenda primero tu sesión de $200: es la puerta de entrada.',
      },
    ],
  },

  final: {
    title: 'La claridad sin ritmo se evapora.',
    body: 'Escríbenos por WhatsApp y dejamos fijada la cadencia de tu primer mes con Kate.',
    buttonWhatsapp: 'Activa Momentum por WhatsApp',
    buttonEmail: 'Escríbenos por email',
  },
};

export const momentumEn: CoachingContent = {
  lang: 'en',
  path: '/career-momentum',
  altPath: '/es/career-momentum',

  meta: {
    title: 'Momentum · 2 sessions a month with Kate Forero | Purrfect Hire',
    description:
      'Momentum is Purrfect Hire\'s monthly coaching cadence: 2 sessions a month with Kate Forero plus async review of your progress between sessions. $550 USD per month, 3-month minimum. Entry after at least one 1:1 session.',
  },

  jsonLd: {
    serviceName: 'Momentum: monthly career coaching with Kate Forero',
    serviceDescription:
      'Monthly career-coaching subscription with Katerine Forero, founder of Purrfect Hire: 2 one-hour 1:1 sessions per month plus async review of progress between sessions. 3-month minimum. Entry after at least one 1:1 session.',
    price: '550',
    priceUnit: 'per month, 3-month minimum',
  },

  whatsappUrl: wa('Hi, I want to start Momentum.'),
  navCta: 'Start Momentum',

  hero: {
    eyebrow: 'Momentum · Monthly coaching',
    headline: 'One session gives you clarity. Momentum gives you cadence.',
    para1:
      'Two sessions a month with Kate, and your progress reviewed async in between: the messages you are about to send, the narrative you are adjusting, the process that moved this week. Context does not get lost between sessions: it compounds.',
    para2:
      'Entry is after at least one 1:1 session. That first session is the diagnosis: nobody starts a recurring engagement without knowing exactly what they are working on.',
    stats: [
      '$550 USD/month, 3-month minimum',
      '2 sessions a month with Kate',
      'Async review between sessions',
    ],
  },

  forWho: {
    title: 'Who it is for',
    intro:
      'For someone who already did a session, knows what they need to move, and wants sustained month-over-month progress, not an isolated push.',
    items: [
      'You did a 1:1 session and want continuity without jumping to a $2,000 program.',
      'You are mid level-change or market-change and need cadence, not motivation.',
      'You have several active processes and want Kate reading every move before you make it.',
      'You know that without biweekly accountability your rhythm drops.',
    ],
  },

  cards: {
    title: 'What your month includes',
    intro: 'The full cadence: session, reviewed execution, session. Nothing is left floating.',
    items: [
      {
        title: '2 monthly 1:1 sessions with Kate',
        body: 'One hour each, focus defined in advance, written summary of agreements afterward. The same format as the single session, with compounding context.',
      },
      {
        title: 'Async review between sessions',
        body: 'Progress, messages, narrative, specific doubts: you send them between sessions and Kate reviews them. Execution does not wait for the next video call.',
      },
      {
        title: 'Context that compounds',
        body: 'You never re-explain your case. Kate follows your search month over month: what you tried, how the market answered, what to adjust next.',
      },
      {
        title: 'Calendar priority',
        body: 'Your sessions are locked with priority on Kate\'s calendar, the same calendar where active founder searches live.',
      },
    ],
  },

  how: {
    title: 'How it works',
    intro: 'Entry has a single requirement: having worked with Kate at least once.',
    steps: [
      {
        title: 'You take (or already took) a 1:1 session.',
        body: 'It is the diagnosis: $200 USD, one hour, one problem. There you both define whether Momentum is your next step and what you will work on together.',
      },
      {
        title: 'You start Momentum via WhatsApp.',
        body: '$550 USD per month, 3-month minimum. We lock the cadence of your 2 monthly sessions from week one.',
      },
      {
        title: 'Session, reviewed execution, session.',
        body: 'Every month: two hours of direct work with Kate and your progress reviewed async in between. Every session starts where the last one ended.',
      },
    ],
    close:
      'Three months of Momentum is $1,650, deliberately below the full program. If your case calls for a total transformation, that is what Offer Acceleration is for.',
  },

  price: {
    title: 'Investment',
    amount: '$550 USD / month',
    note: '3-month minimum. Entry after at least one 1:1 session with Kate. That session is the diagnosis.',
    bullets: [
      '2 one-hour 1:1 sessions per month with Kate',
      'Async review of progress between sessions',
      'In English or Spanish, depending on your search',
    ],
  },

  faq: {
    title: 'Straight questions',
    items: [
      {
        q: 'What is Momentum?',
        a: 'It is Purrfect Hire\'s monthly coaching cadence: 2 one-hour 1:1 sessions a month with Kate Forero plus async review of your progress between sessions. It costs $550 USD per month with a 3-month minimum. It is the rung between the $200 single session and the $2,000+ Offer Acceleration program.',
      },
      {
        q: 'Why do I need a 1:1 session before joining?',
        a: 'Because the first session is the diagnosis. Before committing to months of work, you and Kate confirm there is a plan worth sustaining. It also protects the calendar: nobody starts a recurring engagement without a defined case.',
      },
      {
        q: 'How much does it cost, and is there a minimum?',
        a: '$550 USD per month, with a 3-month minimum. Three months is $1,650, the minimum time for a serious search to show measurable results. After the third month you continue month to month.',
      },
      {
        q: 'How is it different from a single session?',
        a: 'A single session solves one specific problem: one hour, one focus, $200. Momentum is cadence: two sessions a month, progress reviewed in between, and context that compounds. If your problem fits in an hour, book a session. If it spans months, Momentum.',
      },
      {
        q: 'How is it different from Offer Acceleration?',
        a: 'Offer Acceleration is a full repositioning toward US startups: written strategy, market map, role plays, negotiation and direct intros, from $2,000 USD with an application and limited spots. Momentum is sustained progress with Kate without the full program. Many move from Momentum to OA when the case calls for it.',
      },
      {
        q: 'How do I start?',
        a: 'If you already did a 1:1 session with Kate, message us on WhatsApp and we activate your month starting next week. If you have not, book your $200 session first: it is the entry door.',
      },
    ],
  },

  final: {
    title: 'Clarity without cadence evaporates.',
    body: 'Message us on WhatsApp and we lock in the cadence of your first month with Kate.',
    buttonWhatsapp: 'Start Momentum via WhatsApp',
    buttonEmail: 'Email us',
  },
};

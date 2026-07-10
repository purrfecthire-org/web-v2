// ─────────────────────────────────────────────────────────────────────────
// Individual coaching offerings — shared content (ES).
// Two products defined in the Jul 9 2026 check-in:
//   1. /career-sessions — 1:1 sessions with Kate at $200 USD/session (open
//      to anyone, not just program members).
//   2. /career-momentum — $100 USD/month continuity subscription for people
//      who finished Offer Acceleration (weekly execution check-ins, curated
//      roles, pipeline tracking, interview role plays).
// Both pages render through CoachingPage.astro.
// ─────────────────────────────────────────────────────────────────────────

export const coachingContact = {
  whatsappLabel: '+1 (628) 358-8776',
  email: 'hiring@purrfecthire.com',
  emailUrl: 'mailto:hiring@purrfecthire.com',
} as const;

export interface CoachingContent {
  path: string;
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
  };
  forWho: { title: string; intro: string; items: string[] };
  cards: { title: string; intro: string; items: { title: string; body: string }[] };
  how: { title: string; intro: string; steps: { title: string; body: string }[]; close: string };
  price: { title: string; amount: string; note: string; bullets: string[] };
  faq: { title: string; items: { q: string; a: string }[] };
  final: { title: string; body: string; buttonWhatsapp: string; buttonEmail: string };
}

const wa = (text: string) => `https://wa.me/16283588776?text=${encodeURIComponent(text)}`;

// ── 1:1 sessions with Kate — $200 USD/session ────────────────────────────

export const careerSessionsContent: CoachingContent = {
  path: '/career-sessions',

  meta: {
    title: 'Sesiones 1:1 con Kate Forero — Coaching de carrera | Purrfect Hire',
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
  navCta: 'Agenda tu sesión',

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
    intro:
      'Cada sesión ataca un problema específico. Nos dices cuál es el tuyo y llegamos directo a él.',
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
      'Si tu caso necesita más que una sesión, te lo decimos de frente: para un proceso completo de reposicionamiento existe Offer Acceleration.',
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
        q: '¿Necesito estar en Offer Acceleration para tomar una sesión?',
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
        q: '¿En qué se diferencia de Offer Acceleration?',
        a: 'Offer Acceleration es un programa completo: estrategia escrita, mapa de mercado, posicionamiento, role plays y negociación, desde $2,000 USD. Las sesiones 1:1 son puntuales: una hora, un problema, $200 USD. Si empiezas por una sesión y luego quieres el programa, la conversación ya está empezada.',
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

// ── Career Momentum — $100 USD/month continuity subscription ─────────────

export const careerMomentumContent: CoachingContent = {
  path: '/career-momentum',

  meta: {
    title: 'Career Momentum — Acompañamiento mensual de búsqueda | Purrfect Hire',
    description:
      'Career Momentum es la suscripción mensual de Purrfect Hire para quienes terminaron Offer Acceleration: check-in semanal de ejecución, vacantes curadas avisadas a tiempo, pipeline con métricas y role plays cuando tienes entrevistas. $100 USD al mes, sin permanencia.',
  },

  jsonLd: {
    serviceName: 'Career Momentum — acompañamiento mensual de búsqueda de empleo',
    serviceDescription:
      'Suscripción mensual de acompañamiento para profesionales que completaron el programa Offer Acceleration de Purrfect Hire: check-in semanal de ejecución, vacantes curadas, seguimiento de pipeline con métricas, role plays de entrevista y soporte por WhatsApp.',
    price: '100',
    priceUnit: 'al mes',
  },

  whatsappUrl: wa('Hola, quiero activar mi suscripción Career Momentum.'),
  navCta: 'Activa tu suscripción',

  hero: {
    eyebrow: 'Career Momentum · Suscripción mensual',
    headline: 'Terminaste tus sesiones. La búsqueda sigue. El acompañamiento también.',
    para1:
      'Offer Acceleration te da la estrategia, los activos y el canal. Career Momentum mantiene la ejecución viva hasta que firmas: seguimiento semanal, vacantes curadas apenas se abren y un pipeline con métricas que no te deja perder el ritmo.',
    para2:
      'Es la continuidad del programa para quienes ya pasaron por él y quieren seguir acompañados, sin pagar un programa completo otra vez.',
    stats: [
      '$100 USD al mes',
      'Check-in semanal de ejecución',
      'Cancelas cuando quieras',
    ],
  },

  forWho: {
    title: 'Para quién es',
    intro: 'Career Momentum es exclusivo para quienes completaron Offer Acceleration.',
    items: [
      'Terminaste tus sesiones del programa y tu búsqueda sigue activa.',
      'Sabes exactamente qué hacer, pero sin seguimiento semanal el ritmo se cae.',
      'Quieres seguir recibiendo vacantes curadas y preparación de entrevistas mientras cierras tu oferta.',
      'Prefieres pagar por continuidad mes a mes que repetir un programa que ya hiciste.',
    ],
  },

  cards: {
    title: 'Qué incluye tu mes',
    intro:
      'Todo lo que en el programa mantiene los procesos avanzando, convertido en una suscripción simple.',
    items: [
      {
        title: 'Check-in semanal de ejecución',
        body: '15 minutos cada semana con el equipo: revisamos mensajes enviados, aplicaciones hechas, respuestas recibidas y entrevistas en curso. Lo que se mide, avanza.',
      },
      {
        title: 'Vacantes curadas, avisadas a tiempo',
        body: 'Roles ajustados a lo que buscas, avisados apenas se abren — no cuando ya tienen 100+ aplicantes. Calidad sobre volumen: pocas vacantes, todas relevantes.',
      },
      {
        title: 'Tu pipeline, con métricas',
        body: 'Tu búsqueda vive en un solo lugar: en qué etapa está cada proceso, qué sigue esta semana y qué está frenado. Nada se pierde en un Excel olvidado.',
      },
      {
        title: 'Role play cuando tienes entrevista',
        body: 'Si un proceso avanza, te preparamos para esa conversación antes de tenerla — en español o en inglés, según el idioma de la entrevista real.',
      },
      {
        title: 'Soporte directo por WhatsApp',
        body: 'Dudas entre semana, validación de oportunidades antes de aplicar y feedback después de cada entrevista.',
      },
      {
        title: 'Prioridad para sesiones 1:1 con Kate',
        body: 'Si tu caso pide trabajo estratégico profundo — negociación, narrativa, un proceso crítico — agendas una sesión con Kate con prioridad en su agenda.',
      },
    ],
  },

  how: {
    title: 'Cómo funciona',
    intro: 'Si vienes del programa, ya conoces la dinámica. Activarla toma un mensaje.',
    steps: [
      {
        title: 'Nos escribes por WhatsApp.',
        body: 'Nos dices que quieres continuar con Momentum y activamos tu suscripción de $100 USD al mes.',
      },
      {
        title: 'Fijamos tu check-in semanal.',
        body: 'Un espacio fijo de 15 minutos cada semana, el mismo día, a la misma hora. Tu pipeline y tus vacantes siguen vivos sin interrupciones.',
      },
      {
        title: 'Ejecutas con seguimiento hasta firmar.',
        body: 'Cada semana sales del check-in sabiendo qué mover. Cuando un proceso avanza, te preparamos. Cuando llega la oferta, la trabajamos.',
      },
    ],
    close: 'El objetivo de Momentum es que dejes de necesitarlo: cancelas el día que firmas.',
  },

  price: {
    title: 'Inversión',
    amount: '$100 USD / mes',
    note: 'Suscripción mensual, exclusiva para quienes completaron Offer Acceleration. Sin permanencia mínima: cancelas cuando quieras con un mensaje.',
    bullets: [
      'Check-in semanal de ejecución de 15 minutos',
      'Vacantes curadas + pipeline con métricas',
      'Role plays de entrevista y soporte por WhatsApp',
    ],
  },

  faq: {
    title: 'Preguntas directas',
    items: [
      {
        q: '¿Qué es Career Momentum?',
        a: 'Es la suscripción mensual de continuidad de Purrfect Hire: mantiene el acompañamiento de Offer Acceleration después de que terminas tus sesiones. Incluye check-in semanal de ejecución, vacantes curadas, seguimiento de pipeline con métricas y role plays cuando tienes entrevistas. Cuesta $100 USD al mes.',
      },
      {
        q: '¿Cuánto cuesta y hay permanencia mínima?',
        a: '$100 USD al mes, sin permanencia mínima y sin letra chica. Cancelas cuando quieras con un mensaje por WhatsApp antes de tu siguiente cobro. La mayoría cancela por la mejor razón posible: firmó su oferta.',
      },
      {
        q: '¿Puedo suscribirme sin haber hecho Offer Acceleration?',
        a: 'No. Momentum es la continuidad del programa: asume que ya tienes estrategia escrita, perfil reposicionado y canal abierto. Si aún no has pasado por el programa, tu punto de entrada es Offer Acceleration o una sesión 1:1 con Kate.',
      },
      {
        q: '¿Incluye sesiones con Kate?',
        a: 'Incluye el check-in semanal con el equipo y role plays de preparación cuando tienes entrevistas. Las sesiones estratégicas 1:1 con Kate se agendan aparte a $200 USD la hora, con prioridad de agenda por ser suscriptor.',
      },
      {
        q: '¿Cuántas vacantes me envían al mes?',
        a: 'Las que de verdad se ajustan a tu búsqueda — normalmente alrededor de dos por semana — avisadas apenas se abren, para que apliques antes de que el rol acumule cientos de aplicantes. No enviamos volumen: enviamos señal.',
      },
      {
        q: '¿Cómo cancelo la suscripción?',
        a: 'Con un mensaje por WhatsApp antes de tu siguiente cobro mensual. No hay formularios, no hay llamadas de retención. Si más adelante quieres volver, se reactiva igual de fácil.',
      },
    ],
  },

  final: {
    title: 'El offer no se firma solo. Se firma con ritmo.',
    body: 'Escríbenos por WhatsApp y tu check-in de la próxima semana ya queda agendado.',
    buttonWhatsapp: 'Activa Momentum por WhatsApp',
    buttonEmail: 'Escríbenos por email',
  },
};

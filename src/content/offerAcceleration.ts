// ─────────────────────────────────────────────────────────────────────────
// Offer Acceleration program — shared content (ES).
// Used by the /offer-acceleration design test versions (1–4).
// Once a final design is chosen, the surviving page keeps importing this.
// ─────────────────────────────────────────────────────────────────────────

export const oaContent = {
  meta: {
    title: 'Offer Acceleration — Purrfect Hire',
    description:
      'El programa 1:1 que convierte tu perfil en ofertas reales. 7 de cada 10 personas saltan de 1.5x a 3x su salario en máximo 4 meses.',
  },

  hero: {
    eyebrow: 'Offer Acceleration · Programa 1:1',
    headline: 'Tu perfil tiene techo más alto',
    headlineAccent: 'que tu salario actual.',
    subhead:
      'Ya hiciste el diagnóstico. Esta página existe para una sola cosa: que tomes la decisión hoy, no la próxima semana.',
    stats: [
      { value: '7/10', label: 'cierran en mejores condiciones' },
      { value: '1.5–3x', label: 'salto salarial típico' },
      { value: '4 meses', label: 'máximo para cerrar' },
      { value: '150+', label: 'placements en US, EU y LATAM' },
    ],
    ctaPrimary: 'Aplica al programa',
    ctaSecondary: 'Ver casos reales',
  },

  apply: {
    url: '/offer-acceleration/apply',
    label: 'Aplica al programa',
    labelFinal: 'Empieza tu aplicación',
  },

  cost: {
    title: 'El costo real de no decidir hoy',
    body: 'Si tu salto realista es de $4,000 USD/mes adicionales y postergas la decisión 3 meses, no perdiste $2,000 USD del programa.',
    highlight: 'Perdiste $12,000 USD que ya no vas a recuperar.',
    note: 'Esto no es urgencia inventada. Es aritmética.',
    quote:
      'El programa no es un gasto. Es la palanca que recupera su costo en 2 a 4 semanas y te paga el resto del año en dólares.',
  },

  investment: {
    title: 'Inversión',
    price: 'Desde $2,000 USD',
    priceNote: 'Pago único. Sin pagos recurrentes. Sin costos escondidos. Sin letra chica.',
    tableTitle: 'Lo que recuperas según tu seniority',
    tiers: [
      {
        seniority: 'Mid',
        current: '$1,500 – $2,500',
        jump: '$3,500 – $5,000',
        annual: '+$18K a +$36K',
        payback: '2–4 semanas',
      },
      {
        seniority: 'Senior',
        current: '$3,000 – $5,000',
        jump: '$6,000 – $8,500',
        annual: '+$24K a +$54K',
        payback: '2–3 semanas',
      },
      {
        seniority: 'Staff / Lead',
        current: '$6,000 – $8,000',
        jump: '$9,500 – $13,000',
        annual: '+$30K a +$72K',
        payback: '2–3 semanas',
      },
      {
        seniority: 'Principal / C-Level',
        current: '$9,000+',
        jump: '$14,000 – $18,000+',
        annual: '+$48K a +$96K+',
        payback: '1–2 semanas',
      },
    ],
    tableNote: 'Cifras en USD/mes. Salto realista en máximo 4 meses.',
    proof: '7 de cada 10 personas que pasan por el programa saltan de 1.5x a 3x su salario en máximo 4 meses.',
    payments: 'Tarjeta · Transferencia US · Transferencia Europa · PayPal',
  },

  cases: {
    title: 'No son promesas. Son casos cerrados.',
    items: [
      {
        metric: '$1,750 → $4,500',
        unit: 'USD/mes en 5 semanas',
        role: 'UX/UI Senior',
        story:
          'Más de un año en staff augmentation con un intermediario quedándose con la mitad. Reposicionamos perfil y mapeamos startups US contratando directo.',
        result: '+$33,000 USD adicionales al año.',
      },
      {
        metric: '2x salario',
        unit: 'en 4 semanas',
        role: 'Frontend Lead',
        story:
          'Estaba en empresa local sin saber que su perfil ya estaba listo para startup US Series B. Mapeamos 12 empresas específicas y cerró oferta directa.',
        result: 'De Senior IC a Lead, más cambio de geografía salarial.',
      },
      {
        metric: '$9,000',
        unit: 'USD/mes, un solo contrato',
        role: 'De dos trabajos a una oferta senior',
        story:
          'Mantenía full-time más freelance pesado para sostener $6,500 USD/mes. Reposicionamos para que un solo rol senior cubriera la suma.',
        result: 'Recuperó sus noches y fines de semana.',
      },
      {
        metric: '6 semanas',
        unit: 'hasta rol ejecutivo',
        role: 'Founder → Head of Product',
        story:
          'Cerró su startup y no sabía cómo volver al mercado sin que se leyera como fracaso. Construimos narrativa estratégica de founder en transición.',
        result: 'De founder sin claridad a rol ejecutivo.',
      },
    ],
  },

  deliverables: {
    title: 'Lo que te llevas',
    subhead:
      'Específico, escrito, ejecutable. Construido pieza por pieza para ti, no descargado de un módulo genérico.',
    items: [
      {
        title: 'Estrategia de carrera escrita',
        body: 'A qué tier apuntas, qué empresas, en qué timeline, con qué narrativa. Construida sobre tus cicatrices y tus medallas.',
      },
      {
        title: 'Mapa de mercado real',
        body: 'Empresas con nombre y apellido contratando hoy donde tu perfil encaja, con stage, geografía y rangos salariales.',
      },
      {
        title: 'LinkedIn y narrativa reconstruidos',
        body: 'Reescritos sobre tu historia real. Para que las oportunidades te lleguen a ti, no al revés.',
      },
      {
        title: 'Posicionamiento al tier que apuntas',
        body: 'La versión que comunica el rol que quieres, no el que tienes.',
      },
      {
        title: 'Role play 1:1 con Kate',
        body: 'Kate simula al founder, al hiring manager, al panel ejecutivo. Te entrena en la conversación real antes de que la tengas. Ahí es donde se gana el proceso.',
      },
      {
        title: 'Estrategia de negociación',
        body: 'Calibrada para tu caso, tu seniority y la empresa al frente. Cómo manejar contraofertas. Cuándo decir sí. Cuándo aguantar.',
      },
      {
        title: 'Una nueva forma de leer el mercado',
        body: 'La próxima movida ya no la haces a ciegas. Nunca más.',
      },
    ],
  },

  how: {
    title: 'Cómo trabajamos',
    facts: [
      {
        label: 'Duración',
        value: '3 a 6 semanas',
        detail: 'Según tu velocidad de ejecución. Tú marcas el ritmo, nosotros la dirección.',
      },
      {
        label: 'Sesiones',
        value: '6 sesiones 1:1 + 2 especiales',
        detail:
          '6 sesiones 1:1 con Kate con role play en vivo, 1 de mentalidad con invitado especial, 1 con advisor US/startups. Soporte continuo por WhatsApp y email.',
      },
      {
        label: 'Equipo',
        value: 'Kate + 5 personas',
        detail:
          'Kate Forero lidera cada sesión. 5 personas trabajando en paralelo en posicionamiento, mapeo de oportunidades y soporte estratégico.',
      },
    ],
    rhythm: {
      title: 'El ritmo importa',
      body: 'Las primeras 3 semanas armamos estrategia y posicionamiento sin aplicar a nada. Arreglamos el funnel antes de prender el volumen.',
    },
    quote: 'La meta no son 200 aplicaciones. Son 10 a 15 procesos con estrategia que cierran.',
  },

  who: {
    title: 'Quién te acompaña',
    kate: {
      name: 'Katerine Forero',
      role: 'Founder & CEO, Purrfect Hire',
      bio: '10+ años en talento y recruiting. En ADDI entró cuando eran 5 personas y lideró la operación de talento mientras escalaron a 500. Vive en Suiza. Opera entre LATAM, US y Europa todos los días.',
      quote: 'No optimizo para caer bien. Optimizo para que las cosas funcionen.',
    },
    team: {
      name: 'Purrfect Hire',
      bio: '5 personas trabajando detrás de cada caso. 150+ placements entre startups en US, Europa y LATAM. Trabajamos con founders de YC, Sequoia y a16z. Cohortes pequeñas. Atención real. Cero diluida.',
    },
  },

  faq: {
    title: 'Lo que probablemente estás pensando',
    items: [
      {
        q: '"Quiero esperar a ver qué pasa con el proceso en el que estoy."',
        a: 'Esperar a un solo proceso es exactamente el patrón que mantiene a la gente atrapada en su tier actual. La gente que cruza al otro lado arma 10 a 15 procesos en paralelo con estrategia.',
      },
      {
        q: '"No estoy seguro de que esto funcione en mi caso."',
        a: 'Ya pasaste por el diagnóstico. Si no encajaras, te lo habríamos dicho en esa llamada. 7 de cada 10 personas aterrizan en mejores condiciones — y los casos están arriba con cifras.',
      },
      {
        q: '"¿Puedo hacerlo trabajando full-time?"',
        a: 'Sí. La mayoría está exactamente así. Sesiones de 1 hora, fuera de horario laboral si lo necesitas. El formato 1:1 está hecho para gente ocupada.',
      },
      {
        q: '"¿Y si no he cerrado oferta dentro del programa?"',
        a: 'Seguimos contigo. No te dejamos a mitad de camino si los procesos están activos. La meta no es "terminar el programa", es que cierres bien.',
      },
      {
        q: '"Quiero renegociar donde estoy, no irme."',
        a: 'Funciona igual. Una parte real de los casos son personas subiendo salario y rol internamente con otra estrategia. Mismo enfoque, distinto destino.',
      },
      {
        q: '"Soy C-level o ejecutivo, ¿aplica para mí?"',
        a: 'Sí. Tenemos casos C-level (CTO, CIO, Chief AI). Para esos perfiles el foco cambia a posicionamiento estratégico, narrativa de liderazgo y mapeo de oportunidades C-level.',
      },
      {
        q: '"¿Cómo es el soporte entre sesiones?"',
        a: 'WhatsApp y email directo con Kate y el equipo. Validamos oportunidades antes de aplicar, revisamos drafts y damos feedback rápido después de entrevistas. No estás solo. Nunca.',
      },
      {
        q: '"¿Qué los hace diferentes de una comunidad u otros programas?"',
        a: 'Cada material sale construido sobre tus cicatrices y medallas específicas, no descargado de un módulo. Kate hace role play 1:1 contigo antes de la conversación real. Ese nivel de personalización no escala en cohortes grupales.',
      },
    ],
  },

  start: {
    title: 'Cómo arrancamos',
    note: '48 a 72 horas entre tu aplicación y la primera sesión.',
    steps: [
      { title: 'Completa tu aplicación', body: '5 pasos, menos de 5 minutos.' },
      { title: 'Agenda con nuestro equipo', body: 'Una llamada para alinear expectativas.' },
      { title: 'Reserva tu cupo y arrancamos', body: 'Sesión de mentalidad + primeras 1:1s.' },
    ],
    quote: 'La diferencia entre quien cruza y quien se queda no es talento. Es velocidad de decisión.',
  },

  contact: {
    whatsappLabel: '+1 (628) 358-8776',
    whatsappUrl: 'https://wa.me/16283588776',
    email: 'hiring@purrfecthire.com',
    emailUrl: 'mailto:hiring@purrfecthire.com',
    kateLinkedIn: 'https://www.linkedin.com/in/kathforero/',
    calendly: 'https://calendly.com/alison-ph/oa',
  },

  // ── Application funnel (multi-step form) ────────────────────────────────
  form: {
    title: 'Aplica a Offer Acceleration',
    subtitle: 'Cuéntanos quién eres y hacia dónde vas. Menos de 5 minutos.',
    stepLabel: 'Paso',
    of: 'de',
    next: 'Continuar',
    back: 'Atrás',
    submit: 'Enviar mi aplicación',
    minCharsHint: 'Mínimo 10 caracteres',
    steps: [
      {
        key: 'personal',
        title: 'Sobre ti',
        desc: 'Lo esencial para poder contactarte.',
      },
      {
        key: 'blockers',
        title: 'Tu situación',
        desc: 'Sin filtros. Mientras más honesto, mejor podemos ayudarte.',
      },
      {
        key: 'profile',
        title: 'Tu perfil',
        desc: 'Dónde estás parado hoy.',
      },
      {
        key: 'salary',
        title: 'Tu salario',
        desc: 'Cifras en USD mensuales. Esto calibra tu estrategia.',
      },
      {
        key: 'vision',
        title: 'Tu visión',
        desc: 'Hacia dónde quieres ir.',
      },
    ],
    fields: {
      name: { label: 'Nombre completo', placeholder: 'Tu nombre y apellido' },
      email: { label: 'Email', placeholder: 'tu@email.com' },
      phone: { label: 'Número de WhatsApp', placeholder: '+57 300 123 4567' },
      linkedin: { label: 'Perfil de LinkedIn', placeholder: 'linkedin.com/in/tu-perfil' },
      blockers: {
        label: '¿Por qué crees que estás perdiendo roles que podrías estar ganando?',
        placeholder: 'Procesos que se caen, entrevistas que no avanzan, ofertas por debajo de tu nivel…',
      },
      role: { label: '¿Cuál es tu rol actual?', placeholder: 'Ej. Senior Frontend Engineer' },
      english: {
        label: '¿Cuál es tu nivel de inglés?',
        options: ['Básico', 'Intermedio', 'Avanzado', 'Nativo / Bilingüe'],
        placeholder: 'Selecciona tu nivel',
      },
      currentSalary: { label: 'Salario actual (USD/mes)', placeholder: '2500' },
      expectedSalary: { label: 'Salario esperado (USD/mes)', placeholder: '6000' },
      vision: {
        label: '¿Cómo te ves en 1 año y en 5 años?',
        placeholder: 'En 1 año… En 5 años… Describe el rol, el tipo de empresa, el estilo de vida que buscas.',
      },
    },
    errors: {
      required: 'Este campo es obligatorio.',
      email: 'Ingresa un email válido.',
      minChars: 'Cuéntanos un poco más (mínimo 10 caracteres).',
      number: 'Ingresa un número válido en USD.',
    },
    analyzing: {
      title: 'Analizando tu aplicación',
      messages: [
        'Leyendo tus respuestas…',
        'Evaluando tu perfil contra el mercado…',
        'Calculando tu salto salarial realista…',
        'Preparando tu resultado…',
      ],
    },
    accepted: {
      eyebrow: 'Aplicación recibida',
      title: 'Tu perfil tiene potencial real en este programa.',
      body: 'El siguiente paso es una llamada corta con nuestro equipo para alinear expectativas y resolver tus dudas. Elige el horario que mejor te funcione.',
      calendlyName: 'Equipo Purrfect Hire',
      calendlyRole: 'Llamada de alineación · 30 min',
      calendlyCta: 'Agendar mi llamada',
      mvpNote: '¿Ya tuviste la llamada con el equipo?',
      mvpCta: 'Continuar a la reserva de tu cupo →',
    },
    rejected: {
      eyebrow: 'Aplicación recibida',
      title: 'Por ahora, este programa no es el mejor fit para ti.',
      body: 'Basado en tu momento actual y tus expectativas, hoy no podemos garantizarte el retorno que este programa promete — y no trabajamos así. Pero tu siguiente movida sí se puede preparar: sigamos en contacto.',
      linkedinName: 'Katerine Forero',
      linkedinRole: 'Founder & CEO, Purrfect Hire',
      linkedinCta: 'Seguir a Kate en LinkedIn',
    },
  },

  // ── Payment page (MVP — fake checkout) ─────────────────────────────────
  payment: {
    eyebrow: 'Reserva tu cupo · Offer Acceleration',
    title: 'Estás a un paso de arrancar',
    // MVP: hardcoded "personalized" data — in production this comes from the CRM
    customer: {
      name: 'María Fernanda González',
      email: 'maria.gonzalez@email.com',
    },
    emailNote: 'A este correo enviaremos tu factura y la confirmación.',
    summary: {
      title: 'Resumen de tu programa',
      items: [
        { label: 'Programa', value: 'Offer Acceleration 1:1' },
        { label: 'Sesiones', value: '6 sesiones 1:1 + 2 especiales' },
        { label: 'Duración', value: '3 a 6 semanas' },
        { label: 'Soporte', value: 'WhatsApp y email continuo' },
      ],
      totalLabel: 'Total · pago único',
      total: '$2,000 USD',
      note: 'No es una suscripción. Es un único pago por un programa que sucede una sola vez.',
    },
    methods: {
      title: 'Elige tu método de pago',
      stripe: {
        cardNumber: 'Número de tarjeta',
        expiry: 'Vencimiento',
        cvc: 'CVC',
        cardName: 'Nombre en la tarjeta',
        cardNamePlaceholder: 'Como aparece en la tarjeta',
      },
      paypal: {
        note: 'Al confirmar, serás redirigido a PayPal para completar el pago de forma segura.',
        emailLabel: 'Email de tu cuenta PayPal',
      },
      payoneer: {
        note: 'Al confirmar, serás redirigido a Payoneer para completar el pago de forma segura.',
        emailLabel: 'Email de tu cuenta Payoneer',
      },
    },
    checks: {
      terms: 'Acepto los términos y condiciones del programa.',
      sessions: 'Entiendo y acepto el número de sesiones incluidas (6 sesiones 1:1 + 2 sesiones especiales).',
    },
    confirm: 'Confirmar pago y reservar mi cupo',
    processing: 'Procesando tu pago de forma segura…',
    success: {
      title: '¡Tu cupo está reservado!',
      body: 'Bienvenido a Offer Acceleration. Nuestro equipo te contactará en breve para agendar tu sesión de mentalidad y tus primeras 1:1s.',
      detail: 'Enviamos la confirmación y tu factura a',
    },
  },
} as const;

export type OAContent = typeof oaContent;

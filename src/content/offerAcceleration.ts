// ─────────────────────────────────────────────────────────────────────────
// Offer Acceleration program — shared content (ES).
// Single source of copy for /offer-acceleration (OfferAccelerationV5.astro).
// Positioning follows the Notion brief "Offer Acceleration | Website V2 —
// Private Career Advisory": brand headlines stay in English (verbatim from
// the brief), body copy is Spanish. Testimonial `paragraphs` remain verbatim
// quotes — never paraphrase those.
// ─────────────────────────────────────────────────────────────────────────

export const oaContent = {
  meta: {
    title: 'Offer Acceleration · Private Career Advisory | Purrfect Hire',
    description:
      'Private Career Advisory para senior operators. Toma el movimiento correcto en nivel, mercado, posicionamiento y compensación con un equipo que se sienta en ambos lados de la mesa de contratación. 160+ placements en US, Europa y LATAM.',
  },

  hero: {
    eyebrow: 'Offer Acceleration',
    headline: 'Your career has advisors too.',
    category: 'Private Career Advisory for senior operators.',
    para1:
      'Toma el movimiento correcto en nivel, mercado, posicionamiento y compensación, con un equipo que se sienta en ambos lados de la mesa de contratación.',
    stats: [
      '160+ placements en US, Europa y LATAM',
      'Trabajamos directo con founders y startups respaldadas por YC, a16z y Sequoia',
    ],
  },

  apply: {
    url: '/offer-acceleration/apply',
    label: 'Aplica a Offer Acceleration',
    labelFinal: 'Aplica a Offer Acceleration',
  },

  // ── Authority statement right below the hero ───────────────────────────
  inside: {
    title: "We don't study the hiring market from the outside. We're inside it.",
    body1:
      'Ayudamos a founders a decidir a quién contratar. Y ayudamos a senior operators a entender cómo convertirse en la persona que esos founders quieren contratar.',
    body2:
      'Cada búsqueda que hacemos para una startup mejora nuestra lectura del mercado: qué señales compra, qué genera dudas, qué lleva a alguien a una entrevista y qué hace que una empresa esté dispuesta a pagar más.',
  },

  // ── The core differentiator: both sides of the table ───────────────────
  bothSides: {
    title: 'One market. Both sides of the table.',
    founder: {
      kicker: 'Founder side',
      lead: 'Estamos en conversaciones con founders y hiring teams que nos cuentan:',
      bullets: [
        'qué problemas necesitan sacar de su plato;',
        'por qué entrevistan a una persona y descartan a otra;',
        'qué significa seniority dentro de su compañía;',
        'qué señales les generan confianza;',
        'dónde están subiendo la barra;',
        'cuánto están dispuestos a pagar por determinados perfiles.',
      ],
    },
    talent: {
      kicker: 'Talent side',
      lead: 'Convertimos esa información en decisiones concretas para tu carrera:',
      bullets: [
        'dónde competir;',
        'qué nivel defender;',
        'cómo contar tu experiencia;',
        'qué gaps cerrar;',
        'cómo entrar a las conversaciones correctas;',
        'cómo ganar una entrevista, una oferta o una negociación importante.',
      ],
    },
    close: "We see things candidates normally don't get to see.",
  },

  // ── Who this is for (wider than "unemployed / job hunting") ────────────
  fit: {
    title: "Your career may have outgrown the story you're telling about it.",
    lead: 'Probablemente esto es para ti si…',
    items: [
      'Has crecido más rápido que tu título o tu compensación.',
      'Tienes un buen rol, pero no sabes si debería ser tu siguiente capítulo.',
      'Dejaste una empresa o startup y necesitas reconstruir cómo el mercado interpreta tu historia.',
      'Quieres competir en US o Europa y no sabes dónde encaja realmente tu perfil.',
      'Estás considerando Staff, management, C-level, founder o un cambio importante.',
      'Llegas a entrevistas, pero no estás convirtiendo tu experiencia en una decisión de contratación.',
      'Tienes una oferta y necesitas entender compensación, equity, riesgo y upside.',
      'Sabes que puedes estar jugando en otro nivel, pero no tienes claridad sobre cuál es el movimiento correcto.',
    ],
    close: "You don't need to be job hunting to need a career strategy.",
  },

  // ── The feedback loop candidates don't have access to ──────────────────
  see: {
    title: "What we see that candidates normally don't.",
    body1:
      'Cada semana estamos en conversaciones que los candidatos normalmente no escuchan: founders explicándonos por qué un candidato les genera confianza, hiring managers contándonos por qué otro senior no pasó, empresas calibrando cuánto están dispuestas a pagar, equipos definiendo qué significa Staff, Head o C-level en su contexto.',
    body2: 'Offer Acceleration convierte esa información en decisiones sobre tu carrera.',
    proof: '160+ placements. Founders y startups respaldadas por YC, a16z y Sequoia. Un solo feedback loop.',
  },

  // ── Candidate testimonials (replaces the old "cases" section on the page).
  // `paragraphs` is Alejandro's testimonial verbatim: never paraphrase, trim
  // or reword it. `pull2` and the labels are site copy and can be edited
  // freely. `highlights[i]` must be an exact substring of `paragraphs[i]` —
  // the component wraps it for emphasis at render time.
  testimonials: {
    title: 'En palabras de quienes ya lo vivieron',
    // Two stories, each with a different kind of proof: Alejandro is named
    // and verifiable (face + LinkedIn); Meri chose to share her story in
    // audio, first name only. The intro must describe exactly that — never
    // promise more verifiability than each story actually offers.
    intro:
      'Dos historias reales, cada una contada a su manera: una con nombre, cara y perfil que puedes verificar; la otra en la voz de su protagonista.',
    verifiedLabel: 'Historia real · perfil verificable',
    linkedinCta: 'Ver perfil en LinkedIn',
    readMore: 'Leer la historia completa',
    readLess: 'Cerrar historia',
    items: [
      {
        kicker: 'Historia 01 · Con nombre y perfil verificable',
        name: 'Alejandro Eljadue',
        linkedin: 'https://www.linkedin.com/in/aeljaduetarud/',
        // `photoWebp` is served first (smaller, faster); `photo` (JPG) is the
        // <picture> fallback for browsers without WebP support.
        photoWebp: '/testimonials/alejandro-eljadue.webp',
        photo: '/testimonials/alejandro-eljadue.jpg',
        photoAlt: 'Alejandro Eljadue, alumno del programa Offer Acceleration',
        pull2: 'Te enseña una metodología para tomar el control de tu carrera.',
        paragraphs: [
          'Antes de entrar al programa estaba invirtiendo muchísimo tiempo aplicando a vacantes, pero sentía que mi búsqueda dependía más de la suerte que de una estrategia. Sabía que tenía experiencia, pero no estaba logrando generar el tipo de conversaciones que quería con las empresas.',
          'Lo que cambió fue mi forma de posicionarme. Aprendí a comunicar mi impacto con mucha más claridad, a enfocar mi búsqueda en oportunidades donde realmente tenía fit y a prepararme para que cada entrevista sumara, en lugar de improvisar.',
          'Eso hizo que dejara de perseguir oportunidades y empezara a atraer conversaciones mucho más relevantes, hasta encontrar una posición alineada con lo que estaba buscando.',
          'Lo que más valoro de Purrfect Hire es que no te entrega una lista de consejos o un CV bonito. Te enseña una metodología para tomar el control de tu carrera y entender cómo piensan las empresas cuando contratan. Es el tipo de aprendizaje que sigue siendo útil mucho después de conseguir el siguiente trabajo.',
        ],
        highlights: [
          'mi búsqueda dependía más de la suerte que de una estrategia',
          'Lo que cambió fue mi forma de posicionarme.',
          'dejara de perseguir oportunidades y empezara a atraer conversaciones mucho más relevantes',
          'una metodología para tomar el control de tu carrera',
        ],
      },
    ],
    // ── Voice testimonial (Meri) ─────────────────────────────────────────
    // Meri asked not to record a video, not to publish her last name, and
    // to appear first-name-only — the audio IS the proof, so the card leads
    // with the player instead of a photo. `paragraphs` is the literal
    // transcript of the audio (only punctuation normalized): never
    // paraphrase, trim or reword it — anyone can press play and compare.
    // `pull` is her verbatim sentence; `highlights[i]` must be an exact
    // substring of `paragraphs[i]`.
    voice: {
      kicker: 'Historia 02 · En su propia voz',
      name: 'Meri',
      role: 'Alumna del programa',
      pull: 'Desde que me inscribí hasta que encontré trabajo pasaron tres semanas.',
      audioSrc: '/testimonials/meri-testimonio.mp3',
      audioDuration: '1:43',
      audioLabel: 'Escucha su historia',
      privacyNote:
        'Meri prefirió contar su historia en audio y compartir solo su nombre. La voz es suya; el resultado, también.',
      transcriptMore: 'Leer la transcripción',
      transcriptLess: 'Cerrar transcripción',
      transcriptNote: 'Transcripción literal del audio.',
      paragraphs: [
        'Hace unos meses hubo un corte de personal en mi trabajo y me tocó a mí y me quedé sin trabajo, y empecé a aplicar a varios trabajos, o bueno, a varias posiciones, vacantes, etcétera, pero no recibía respuesta. En LinkedIn me encontré a Kate y le escribí, me explicó cómo funcionaba el programa y decidí darle una oportunidad.',
        'Desde que me inscribí hasta que encontré trabajo pasaron tres semanas, o un poquito menos de un mes, básicamente. La verdad es que increíble. En cuanto empecé a trabajar con ella, a los dos, tres días empecé a recibir entrevistas. Empecé a hacer varias. Me ayudó a prepararme para todas las entrevistas.',
        'Cuando llegó una de esas entrevistas, una de esas propuestas que era un trabajo que me interesaba, ella me ayudó con todo el proceso: prepararme para cada entrevista, para cada reto que me habían puesto, a negociar mi sueldo, etc. Y la verdad es que encontré un trabajo espectacular. Soy muy feliz. Y se lo debo todo a Kate, la verdad. Es un gran equipo.',
        'Son súper dedicados. Saben muchísimo de lo que están haciendo y recomiendo ampliamente que trabajen con ella. He recomendado a varias personas. No sé si han terminado usando el servicio, pero 100% recomendable.',
      ],
      highlights: [
        'pero no recibía respuesta',
        'a los dos, tres días empecé a recibir entrevistas',
        'encontré un trabajo espectacular',
        '100% recomendable',
      ],
    },
  },

  // ── Anonymous outcome cases ────────────────────────────────────────────
  // Proof-of-transformation cases in the brief's ideal format: before →
  // decision/intervention → after. Names are withheld at the clients'
  // request (see `disclaimer`), so each card leads with the outcome, not
  // the person.
  cases: {
    title: 'Antes, la decisión, y el después',
    intro:
      'Casos reales del programa: dónde estaba cada persona, qué decidimos cambiar y qué consiguió. Los números son reales. Cada caso es la misma mecánica: leer bien el mercado, reposicionar el perfil y entrar a las conversaciones correctas.',
    labels: {
      before: 'Antes',
      after: 'Después',
      action: 'Intervención',
    },
    items: [
      {
        role: 'Senior UX/UI Designer',
        problem:
          'Llevaba más de un año en staff augmentation, con un intermediario quedándose con la otra mitad de su tarifa: cobraba la mitad de lo que ya valía.',
        action: 'Lo pusimos directo frente a startups US contratando sin intermediario.',
        result: 'De $1,750 a $4,500',
        resultNote: '+$33,000 al año. Mismo talento, otro posicionamiento.',
      },
      {
        role: 'Frontend Lead',
        problem:
          'Estancado en una empresa local sin saber que su perfil ya calificaba para una Series B en US.',
        action:
          'Mapeamos 12 empresas y entró por la puerta directa al fundador, no por la cola de aplicaciones.',
        result: 'Duplicó su ingreso',
        resultNote: 'De Senior IC a Lead, con cambio de geografía salarial.',
      },
      {
        role: 'Senior IC con dos trabajos',
        problem: 'Sostenía un full-time más freelance pesado para juntar $6,500 al mes.',
        action: 'Lo reposicionamos para que un solo rol senior cubriera la suma.',
        result: 'De $6,500 a $9,000',
        resultNote: 'En un solo contrato, y recuperó sus noches y sus fines de semana.',
      },
      {
        role: 'Founder → Head of Product',
        problem: 'Cerró su startup y no sabía cómo volver al mercado.',
        action:
          'Construimos la narrativa de founder en transición y lo posicionamos a nivel ejecutivo.',
        result: 'Cerró un Head of Product',
        resultNote: 'Sin que su etapa de founder se leyera como un fracaso.',
      },
    ],
    disclaimer:
      'Algunos de nuestros clientes prefieren mantener su identidad privada, por acuerdos de confidencialidad o porque siguen trabajando en las empresas donde consiguieron estas oportunidades.',
  },

  how: {
    title: 'Cómo funciona el advisory',
    intro:
      'No es una secuencia de sesiones ni un curso. Son las cinco decisiones importantes que tomamos contigo, cada una con un entregable tangible.',
    outputLabel: 'Output',
    bullets: [
      {
        title: 'Where should you play?',
        body: 'Definimos qué rol, nivel, mercado, geografía y tipo de compañía tienen sentido para la carrera que ya construiste y para la que quieres construir.',
        output: 'Career Market Map',
      },
      {
        title: 'What are you actually worth?',
        body: 'Identificamos el nivel que puedes defender con evidencia, cómo se compara tu compensación y qué upside existe en distintos caminos.',
        output: 'Compensation & Level Benchmark',
      },
      {
        title: 'How is the market reading you?',
        body: 'Evaluamos cómo te leería hoy un founder, recruiter o hiring manager en los primeros segundos, y dónde hay distancia entre tu nivel real y las señales que estás enviando.',
        output: 'Founder Readiness Score',
      },
      {
        title: 'How do you get into the right rooms?',
        body: 'Diseñamos empresas objetivo, personas, canales, networking, intros y estrategia de entrada. No se trata de 200 aplicaciones: se trata de estar en las conversaciones correctas.',
        output: 'Target Market + Access Strategy',
      },
      {
        title: 'How do you win the decision?',
        body: 'Trabajamos founder conversations, entrevistas, storytelling, final rounds, ofertas, equity y negociación.',
        output: 'Interview & Negotiation War Room',
      },
    ],
    close: "The market can't recognize an evolution you haven't learned to explain.",
  },

  // ── Real-time execution: the advisory shows up when the decision does ──
  execution: {
    title: 'Advice when the decision actually matters.',
    intro: 'Las sesiones construyen la estrategia. El advisory entra cuando aparece una decisión real.',
    rooms: [
      {
        name: 'Interview War Room',
        body: 'Si aparece una entrevista importante — founder interview, panel o final round — entramos a preparar esa oportunidad específica.',
      },
      {
        name: 'Offer / Deal Desk',
        body: 'Cuando llega una oferta trabajamos base, bonus, equity, vesting, beneficios, riesgo de compañía, BATNA, contrapropuesta y la conversación de negociación.',
      },
      {
        name: 'Career Decision Room',
        body: 'Cuando aparece una decisión de dirección, analizamos el trade-off: aceptar, quedarse, cambiar de mercado, management vs IC, startup vs corporate.',
      },
    ],
  },

  // ── Price narrative: the cost of a bad decision, not a salary promise ──
  price: {
    title: 'A bad career decision can cost much more than $2,000.',
    lead: 'Ejemplos que vemos cada semana:',
    items: [
      'Aceptar un rol por debajo de tu nivel.',
      'Negociar $20K a $40K menos de lo que el mercado habría pagado.',
      'Entrar a la startup equivocada.',
      'Pasar 18 meses construyendo experiencia que no te acerca al siguiente nivel.',
      'Aceptar management cuando tu mejor trayectoria era IC.',
      'Ejercer equity sin entender realmente el riesgo.',
      'Rechazar una oportunidad buena porque no sabes evaluar el upside.',
    ],
    close: 'The biggest decisions in a senior career are valuable enough not to make alone.',
    price: 'Inversión: desde $2,000 USD.',
    priceNote: 'Pago único. Sin recurrencias, sin costos escondidos, sin letra chica.',
  },

  who: {
    title: 'Built inside a recruiting company, not a coaching company.',
    team: {
      name: 'Purrfect Hire.',
      bio: 'Llevamos más de tres años trabajando directamente con startups y founders para contratar talento, con 160+ placements entre US, Europa y LATAM. Cada búsqueda nos enseña cómo cambia el mercado, qué señales están comprando los founders, dónde están subiendo la barra y por qué dos perfiles con experiencia similar producen decisiones completamente distintas. Offer Acceleration nació para llevar ese feedback loop al otro lado de la mesa.',
    },
    kate: {
      name: 'Katerine Forero.',
      role: 'Founder, Purrfect Hire · Advisor',
      bio: '10+ años en talento y recruiting. Entró a ADDI cuando eran 15 personas y lideró la operación de talento mientras escalaron a +400. Hoy vive en Suiza, opera entre LATAM, US y Europa, y conecta cada advisory con las decisiones reales de contratación que ve todas las semanas.',
      quote: 'No optimizo para caer bien. Optimizo para que las cosas funcionen.',
    },
  },

  format: {
    title: 'Formato',
    body: '8 sesiones semanales: 1 de diagnóstico + 7 sesiones 1:1 con Kate, con role play en vivo. Dos sesiones especiales: una de mentalidad con invitado, una con advisor de US y startups. Weekly de seguimiento con el equipo, y soporte directo por WhatsApp y email: validamos oportunidades antes de aplicar, revisamos drafts, damos feedback después de cada entrevista. El pipeline arranca la primera semana.',
  },

  // ── Post-program accompaniment: what changes after session 8 ───────────
  after: {
    title: "The advisory doesn't end when the sessions do.",
    body1:
      'Las sesiones construyen la estrategia. Después volvemos a entrar cuando la decisión importa: una founder interview, un final round, una oferta sobre la mesa, una negociación abierta o un cambio de dirección.',
    body2:
      'No necesitas otra sesión porque llegó el martes. Necesitas un advisor cuando tienes una decisión real enfrente. Mientras tanto, el material no caduca, el weekly con el equipo sigue igual y por WhatsApp nos escribes cuando lo necesites.',
    body3:
      'No prometemos empleo ni garantizamos una oferta. Prometemos acompañamiento, criterio, preparación y ejecución en los momentos que deciden tu carrera.',
  },

  faq: {
    title: 'Preguntas directas',
    items: [
      {
        q: '¿Esto es career coaching?',
        a: 'No. Es Private Career Advisory construido dentro de una empresa de recruiting. Trabajamos todas las semanas con los founders y hiring managers que toman las decisiones de contratación, y usamos ese acceso para que tomes mejores decisiones sobre tu carrera.',
      },
      {
        q: '¿Ustedes me consiguen el trabajo?',
        a: 'No, y desconfía de quien te lo prometa. Construimos contigo la estrategia, el posicionamiento y la preparación, y entramos contigo a las decisiones importantes: entrevistas, ofertas, negociación. Las conversaciones las tienes tú; el criterio lo construimos juntos.',
      },
      {
        q: 'No estoy buscando trabajo activamente. ¿Tiene sentido?',
        a: 'Sí. No necesitas estar buscando empleo para necesitar una estrategia de carrera. Una parte real de los casos son personas con buen rol que quieren claridad sobre su siguiente movimiento, renegociar internamente o evaluar una oferta que les llegó.',
      },
      {
        q: '¿Funciona si estoy full-time?',
        a: 'Sí, es el caso de la mayoría. Sesiones de una hora, fuera de horario si hace falta. El formato 1:1 está hecho para gente ocupada.',
      },
      {
        q: 'Soy C-level.',
        a: 'Aplica. Tenemos casos CTO, CIO y Chief AI. El foco cambia a posicionamiento estratégico, narrativa de liderazgo y mapeo de oportunidades a ese nivel.',
      },
    ],
  },

  final: {
    title: 'Your career has advisors too.',
    body: '48 a 72 horas entre tu aplicación y la primera conversación. Completas tu aplicación, agendas con el equipo y arrancamos.',
    button: 'Aplica a Offer Acceleration',
  },

  contact: {
    whatsappLabel: '+1 (628) 358-8776',
    whatsappUrl: 'https://wa.me/16283588776',
    email: 'hiring@purrfecthire.com',
    emailUrl: 'mailto:hiring@purrfecthire.com',
    kateLinkedIn: 'https://www.linkedin.com/in/kathforero/',
    calendly: 'https://calendly.com/katefs1/offer-a/',
  },

  // ── Application funnel (multi-step form) ────────────────────────────────
  form: {
    title: 'Formulario de Aplicación',
    // Reassurance pill under the title: a light time estimate, nothing more.
    fillTime: '≈ 4 min',
    stepLabel: 'Paso',
    of: 'de',
    next: 'Continuar',
    back: 'Atrás',
    submit: 'Enviar mi aplicación',
    // Static hint shown before the user starts typing (both bounds, friendly
    // tone). The live char count/color feedback while typing is computed in
    // the client script from each textarea's data-min/data-max attributes.
    minCharsHint: 'Entre 10 y 600 caracteres',
    steps: [
      {
        key: 'personal',
        title: 'Sobre ti',
        desc: 'Lo esencial para poder contactarte.',
      },
      {
        key: 'profile',
        title: 'Tu perfil',
        desc: 'Dónde estás parado hoy.',
      },
      {
        key: 'objective',
        title: 'Tu objetivo',
        desc: 'Qué buscas y hacia dónde apuntas.',
      },
      {
        key: 'numbers',
        title: 'Números y tiempos',
        desc: 'Esto calibra tu estrategia. Cifras en USD mensuales.',
      },
      {
        key: 'vision',
        title: 'Tu visión',
        desc: 'Hacia dónde quieres ir y qué tan listo estás.',
      },
    ],
    fields: {
      // ── Step 1 · Sobre ti ────────────────────────────────────────────────
      name: { label: 'Nombre completo', placeholder: 'Tu nombre y apellido' },
      email: { label: 'Email', placeholder: 'tu@email.com' },
      phone: { label: 'Número de WhatsApp', placeholder: '+57 300 123 4567' },
      linkedin: { label: 'Perfil de LinkedIn', placeholder: 'linkedin.com/in/tu-perfil' },
      // Options below carry {key, label}. `key` is the stable, backend-owned
      // contract (source/oa_applications/domain/form_options.py in ats-backend
      // — see the Notion "OA Apply Form — Option Key Registry" cross-system
      // contract). `label` is this portal's own copy and may be reworded
      // freely; only the key list must stay in sync with the backend's
      // active keys. This is a deliberate hardcoded mirror (not fetched from
      // an endpoint) — see ats-backend/docs/oa_form_option_keys.md.
      country: {
        label: 'País de residencia',
        placeholder: 'Selecciona tu país',
        // Rendered as a grouped <select> (optgroups). LATAM first, since that
        // is where most applicants apply from. `key` = ISO 3166-1 alpha-2
        // code (matches ats-backend's `countries.code`), not a custom enum.
        groups: [
          {
            label: 'LATAM',
            options: [
              { key: 'AR', label: 'Argentina' },
              { key: 'BO', label: 'Bolivia' },
              { key: 'BR', label: 'Brasil' },
              { key: 'CL', label: 'Chile' },
              { key: 'CO', label: 'Colombia' },
              { key: 'CR', label: 'Costa Rica' },
              { key: 'CU', label: 'Cuba' },
              { key: 'EC', label: 'Ecuador' },
              { key: 'SV', label: 'El Salvador' },
              { key: 'GT', label: 'Guatemala' },
              { key: 'HN', label: 'Honduras' },
              { key: 'MX', label: 'México' },
              { key: 'NI', label: 'Nicaragua' },
              { key: 'PA', label: 'Panamá' },
              { key: 'PY', label: 'Paraguay' },
              { key: 'PE', label: 'Perú' },
              { key: 'PR', label: 'Puerto Rico' },
              { key: 'DO', label: 'República Dominicana' },
              { key: 'UY', label: 'Uruguay' },
              { key: 'VE', label: 'Venezuela' },
            ],
          },
          {
            label: 'Europa',
            options: [
              { key: 'ES', label: 'España' },
              { key: 'PT', label: 'Portugal' },
            ],
          },
          {
            label: 'Otros',
            options: [
              { key: 'US', label: 'Estados Unidos' },
              { key: 'CA', label: 'Canadá' },
              { key: 'GB', label: 'Reino Unido' },
              { key: 'NG', label: 'Nigeria' },
              { key: 'IN', label: 'India' },
              { key: 'other', label: 'Otro país' },
            ],
          },
        ],
      },

      // ── Step 2 · Tu perfil ───────────────────────────────────────────────
      role: { label: '¿Cuál es tu rol actual?', placeholder: 'Ej. Senior Frontend Engineer' },
      seniority: {
        label: '¿Cuál es tu nivel / seniority?',
        placeholder: 'Selecciona tu nivel',
        options: [
          { key: 'ic', label: 'Individual Contributor (junior / mid)' },
          { key: 'senior_ic', label: 'Senior (Senior IC)' },
          { key: 'staff_lead_manager', label: 'Staff / Lead / Manager' },
          { key: 'principal_director', label: 'Principal / Director' },
          { key: 'c_level_vp_head', label: 'C-Level / VP / Head of' },
        ],
      },
      english: {
        label: '¿Cuál es tu nivel de inglés?',
        // english_level keeps the pre-existing lenient-normalization contract
        // (ats-backend normalizes this label server-side) — not a key here.
        options: ['Básico', 'Intermedio', 'Avanzado', 'Nativo / Bilingüe'],
        placeholder: 'Selecciona tu nivel',
      },

      // ── Step 3 · Tu objetivo ─────────────────────────────────────────────
      objective: {
        label: '¿Qué buscas lograr con este programa?',
        hint: 'Puedes elegir varias.',
        // `exclusive` clears the rest when selected (and vice versa).
        exclusive: 'unclear',
        options: [
          { key: 'change_industry', label: 'Cambiar de industria (por ejemplo, de una tradicional a tech)' },
          { key: 'change_role_or_career', label: 'Cambiar de rol o carrera (pivote profesional)' },
          { key: 'same_role_industry_usd_offer', label: 'Mantener mi rol e industria, pero conseguir una oferta en USD' },
          { key: 'level_up_seniority', label: 'Subir de nivel / seniority en mi mismo campo' },
          { key: 'unclear', label: 'Aún no lo tengo claro' },
        ],
      },
      targetRoles: {
        label: '¿Qué roles estás buscando?',
        placeholder: 'Ej. Senior Backend Engineer, Product Manager',
        // Character bounds + counter, same style as the textareas below.
        charsHint: 'Entre 3 y 100 caracteres',
      },
      companies: {
        label: '¿Qué tipo de empresas estás buscando?',
        hint: 'Puedes elegir varias.',
        exclusive: 'unsure',
        options: [
          { key: 'us_startups_yc_a16z', label: 'Startups en EE. UU. (YC / a16z)' },
          { key: 'latam_startups', label: 'Startups en LATAM' },
          { key: 'scaleups_series_b_plus', label: 'Scale-ups / empresas en crecimiento (Series B+)' },
          { key: 'big_tech_corporate', label: 'Big Tech / Corporativos (Rappi, Mercado Libre, Amazon, Globant)' },
          { key: 'remote_global_usd', label: 'Empresas remotas globales que pagan en USD' },
          { key: 'saas_product_tech', label: 'SaaS / empresas de producto tech' },
          { key: 'unsure', label: 'Aún no lo sé' },
        ],
      },

      // ── Step 4 · Números y tiempos ───────────────────────────────────────
      currentIncome: {
        label: 'Ingreso mensual actual (aprox. USD)',
        placeholder: 'Selecciona un rango',
        options: [
          { key: 'lt_1500', label: 'Menos de $1,500' },
          { key: '1500_3000', label: '$1,500 a $3,000' },
          { key: '3000_4500', label: '$3,000 a $4,500' },
          { key: '4500_6000', label: '$4,500 a $6,000' },
          { key: 'gt_6000', label: '$6,000+' },
        ],
      },
      targetSalary: {
        label: 'Salario mensual objetivo (USD, meta a 6 meses)',
        placeholder: 'Selecciona un rango',
        options: [
          { key: '3000_5000', label: '$3K a $5K' },
          { key: '5000_7000', label: '$5K a $7K' },
          { key: '7000_9000', label: '$7K a $9K' },
          { key: '9000_12000', label: '$9K a $12K' },
          { key: 'gt_12000', label: '$12K+' },
        ],
      },
      timeline: {
        label: '¿Para cuándo quieres asegurar una oferta en USD?',
        placeholder: 'Selecciona una opción',
        options: [
          { key: 'asap', label: 'Lo antes posible' },
          { key: '30_days', label: 'En 30 días' },
          { key: '60_days', label: 'En 60 días' },
          { key: 'exploring', label: 'Explorando' },
        ],
      },
      usInterviews: {
        label: '¿Has entrevistado con startups de EE. UU. antes?',
        placeholder: 'Selecciona una opción',
        options: [
          { key: 'none_yet', label: 'No, todavía no' },
          { key: 'failed_early_rounds', label: 'Sí, pero no pasé las primeras rondas' },
          { key: 'reached_final_no_offer', label: 'Sí, llegué a etapas finales pero no cerré oferta' },
          { key: 'closed_offer', label: 'Sí, y cerré al menos una oferta' },
        ],
      },

      // ── Step 5 · Tu visión ───────────────────────────────────────────────
      blockers: {
        label: '¿Por qué crees que estás perdiendo roles que podrías estar ganando?',
        placeholder: 'Procesos que se caen, entrevistas que no avanzan, ofertas por debajo de tu nivel…',
      },
      vision: {
        label: '¿Cómo te ves en 1 año y en 5 años?',
        placeholder: 'En 1 año… En 5 años… Describe el rol, el tipo de empresa, el estilo de vida que buscas.',
      },
      commitment: {
        label: 'Es un programa privado y selectivo, con una inversión desde $2,000 USD. ¿Cómo lo ves?',
        placeholder: 'Selecciona una opción',
        options: [
          { key: 'ready_to_invest', label: 'Sí, estoy listo para invertir' },
          { key: 'has_questions', label: 'Tengo algunas preguntas primero' },
          { key: 'not_for_me_now', label: 'Por ahora no es para mí' },
        ],
      },
    },
    errors: {
      required: 'Este campo es obligatorio.',
      email: 'Ingresa un email válido.',
      // {min}/{max} are filled from each field's own data-min/data-max.
      minChars: 'Cuéntanos un poco más (mínimo {min} caracteres).',
      maxChars: 'Escríbelo un poco más corto (máximo {max} caracteres).',
      number: 'Ingresa un número válido en USD.',
      selectOne: 'Selecciona al menos una opción.',
    },
    // Post-submit loading overlay. Two phases; the animated dots ("." → ".." →
    // "...") are rendered by CSS, so phrases are stored WITHOUT the ellipsis.
    // EN + ES: the apply page picks the object matching its lang.
    loading: {
      en: {
        phase1: 'Sending request',
        phase2: 'Analyzing your response',
      },
      es: {
        phase1: 'Enviando solicitud',
        phase2: 'Analizando tu respuesta',
      },
    },
    // Neutral result when the backend answers status: 'pending'.
    pending: {
      en: {
        eyebrow: 'Application received',
        title: 'We received your application.',
        body: 'Our team is reviewing it right now. We will contact you by email or WhatsApp within the next 48 hours with your next step.',
      },
      es: {
        eyebrow: 'Aplicación recibida',
        title: 'Recibimos tu aplicación.',
        body: 'Nuestro equipo la está revisando en este momento. Te contactaremos por email o WhatsApp en las próximas 48 horas con tu siguiente paso.',
      },
    },
    // Inline error state when the submission request fails (network / HTTP).
    error: {
      en: {
        eyebrow: 'Something went wrong',
        title: 'We could not send your application.',
        body: 'There was a connection problem and your application did not go through. Your answers are still here, try again in a few seconds.',
        retry: 'Try again',
      },
      es: {
        eyebrow: 'Algo salió mal',
        title: 'No pudimos enviar tu aplicación.',
        body: 'Hubo un problema de conexión y tu aplicación no llegó. Tus respuestas siguen aquí, inténtalo de nuevo en unos segundos.',
        retry: 'Intentar de nuevo',
      },
    },
    accepted: {
      eyebrow: 'Aplicación recibida',
      title: 'Tu perfil tiene potencial real en este programa.',
      body: 'El siguiente paso es una llamada corta con nuestro equipo para alinear expectativas y resolver tus dudas. Elige el horario que mejor te funcione.',
      calendlyName: 'Equipo Purrfect Hire',
      calendlyRole: 'Llamada de alineación · 15 min',
      calendlyCta: 'Agendar mi llamada',
    },
    rejected: {
      eyebrow: 'Aplicación recibida',
      title: 'Por ahora, este programa no es el mejor fit para ti.',
      body: 'Basado en tu momento actual y tus expectativas, hoy no podemos garantizarte el retorno que este programa promete. Y no trabajamos así. Pero tu siguiente movida sí se puede preparar: sigamos en contacto.',
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
        { label: 'Sesiones', value: '8 sesiones: 1 diagnóstico + 7 con Kate, más 2 especiales' },
        { label: 'Duración', value: '8 semanas + acompañamiento hasta que te ubiques' },
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
      sessions: 'Entiendo y acepto el número de sesiones incluidas (8 sesiones: 1 de diagnóstico + 7 con Kate, más 2 sesiones especiales).',
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

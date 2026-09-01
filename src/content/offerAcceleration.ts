// ─────────────────────────────────────────────────────────────────────────
// Offer Acceleration program — shared content (ES).
// Single source of copy for /offer-acceleration (OfferAccelerationV5.astro).
// Positioning: "Private Career Advisory para profesionales senior".
// Editorial rules (Kate's V2.1 feedback): Spanish throughout; English only
// for the three brand phrases ("Your career has advisors too", "We sit on
// both sides of the hiring table", "Built inside a recruiting company, not
// a coaching company") and for product IP names (Career Market Map, ...).
// Reduce aggressively — headlines, short lines, evidence, outputs. One
// idea per section; the both-sides advantage appears exactly once.
// Meri's `paragraphs` are a verbatim audio transcript — never paraphrase.
// ─────────────────────────────────────────────────────────────────────────

export const oaContent = {
  meta: {
    title: 'Offer Acceleration · Private Career Advisory | Purrfect Hire',
    description:
      'Private Career Advisory para profesionales senior. Un equipo que se sienta en ambos lados de la mesa de contratación: 160+ placements con startups de YC, a16z y Sequoia. Inversión: USD 2,000.',
  },

  hero: {
    eyebrow: 'Offer Acceleration',
    headline: 'Your career has advisors too.',
    category: 'Private Career Advisory para profesionales senior.',
    para1:
      'Toma el movimiento correcto en nivel, mercado, posicionamiento y compensación, con un equipo que contrata con founders todas las semanas.',
  },

  apply: {
    url: '/offer-acceleration/apply',
    label: 'Aplicar a Offer Acceleration',
    labelFinal: 'Aplicar a Offer Acceleration',
  },

  // ── The one advantage section: both sides of the table + proof ─────────
  advantage: {
    title: 'We sit on both sides of the hiring table.',
    body:
      'Llevamos más de 3 años contratando talento directamente con founders y startups. No estudiamos desde afuera qué quieren: trabajamos con ellos, y convertimos ese conocimiento en advisory para tu carrera.',
    founder: {
      kicker: 'Lado founder',
      lead: 'Lo que escuchamos cada semana:',
      bullets: [
        'por qué entrevistan a una persona y descartan a otra;',
        'qué significa seniority dentro de cada compañía;',
        'qué señales les generan confianza;',
        'cuánto están dispuestos a pagar por determinados perfiles.',
      ],
    },
    talent: {
      kicker: 'Lado talento',
      lead: 'Lo que eso decide en tu carrera:',
      bullets: [
        'dónde competir y qué nivel defender;',
        'cómo contar tu experiencia;',
        'cómo entrar a las conversaciones correctas;',
        'cómo ganar una entrevista, una oferta o una negociación.',
      ],
    },
    proof: [
      '160+ placements en US, Europa y LATAM',
      'Startups respaldadas por YC, a16z y Sequoia',
      '3+ años del lado que contrata',
    ],
  },

  // ── Who this is for ────────────────────────────────────────────────────
  fit: {
    title: 'Tu nivel creció más rápido que la forma en que el mercado te está leyendo.',
    lead:
      'Offer Acceleration es para profesionales senior — Senior, Staff, Head, C-level o ex-founders, muchos ganando USD 4K–8K+ — con o sin trabajo hoy. Probablemente es para ti si…',
    items: [
      'Tu título o tu compensación se quedaron atrás de tu nivel real.',
      'Tienes un buen rol, pero no tienes claro tu siguiente capítulo.',
      'Quieres competir en US o Europa y no sabes dónde encaja tu perfil.',
      'Estás considerando Staff, management, C-level o volver al mercado después de ser founder.',
      'Tienes una oferta sobre la mesa y necesitas criterio sobre compensación, equity y riesgo.',
      'Llegas a entrevistas, pero no se convierten en decisiones de contratación.',
    ],
    close: 'No necesitas estar buscando trabajo para necesitar una estrategia de carrera.',
  },

  // ── Real results: two senior cases + Meri's voice testimonial ──────────
  // Case selection rule (V2.1 feedback): the "before" state must also read
  // senior — never publish a case whose starting point undercuts the
  // premium ICP (USD 4K–8K+). Fewer excellent cases beat many mediocre
  // ones. Meri's `paragraphs` are the literal transcript of her audio
  // (only punctuation normalized): never paraphrase, trim or reword —
  // anyone can press play and compare. `pull` is her verbatim sentence;
  // `highlights[i]` must be an exact substring of `paragraphs[i]`.
  results: {
    title: 'Resultados reales',
    labels: {
      before: 'Antes',
      after: 'Después',
    },
    cases: [
      {
        role: 'Senior IC',
        before: 'Combinaba un full-time y freelance pesado para generar USD 6,500 al mes.',
        after: 'USD 9,000 en un solo contrato',
        afterNote: 'Y recuperó sus noches y sus fines de semana.',
      },
      {
        role: 'Founder → Head of Product',
        before:
          'Cerró su startup y necesitaba traducir su experiencia de founder a una narrativa que el mercado leyera a nivel ejecutivo.',
        after: 'Cerró un rol de Head of Product',
        afterNote: 'Sin que su etapa de founder se leyera como un fracaso.',
      },
    ],
    voice: {
      kicker: 'En su propia voz',
      name: 'Meri',
      role: 'Después de un layoff, cerró un nuevo rol en menos de un mes',
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
    close:
      'El objetivo no es conseguir cualquier oferta. Es hacer que tu siguiente movimiento esté a la altura de la carrera que ya construiste.',
    disclaimer: 'Los nombres de algunos casos se mantienen privados por acuerdos de confidencialidad.',
  },

  // ── What we build together: five decisions, five deliverables ──────────
  build: {
    title: 'Qué construimos contigo',
    intro: 'Cinco decisiones, cada una con un entregable concreto.',
    outputLabel: 'Entregable',
    bullets: [
      {
        title: '¿Dónde deberías competir?',
        body: 'Rol, nivel, mercado, geografía y tipo de compañía para la carrera que ya construiste.',
        output: 'Career Market Map',
      },
      {
        title: '¿Cuánto vales hoy en el mercado?',
        body: 'El nivel que puedes defender con evidencia y el upside real en distintos caminos.',
        output: 'Compensation & Level Benchmark',
      },
      {
        title: '¿Cómo te está leyendo el mercado?',
        body: 'Cómo te leería hoy un founder en los primeros segundos, y qué señales están por debajo de tu nivel real.',
        output: 'Founder Readiness Score',
      },
      {
        title: '¿Cómo entras a las conversaciones correctas?',
        body: 'Empresas objetivo, canales, intros y estrategia de entrada. No 200 aplicaciones: las conversaciones correctas.',
        output: 'Target Market + Access Strategy',
      },
      {
        title: '¿Cómo ganas la decisión?',
        body: 'Entrevistas, final rounds, storytelling, ofertas, equity y negociación.',
        output: 'Interview & Negotiation War Room',
      },
    ],
  },

  // ── Support during real processes (sessions build; advisory executes) ──
  support: {
    title: 'Acompañamiento durante procesos reales',
    intro: 'Las sesiones construyen la estrategia. El advisory entra cuando aparece una decisión real:',
    rooms: [
      {
        name: 'Interview War Room',
        body: 'Una founder interview, un panel o un final round: preparamos contigo esa oportunidad específica.',
      },
      {
        name: 'Offer / Deal Desk',
        body: 'Llega una oferta: base, bonus, equity, vesting, riesgo, contrapropuesta y la conversación de negociación.',
      },
      {
        name: 'Career Decision Room',
        body: 'Una decisión de dirección: aceptar, quedarse, cambiar de mercado, management vs IC.',
      },
    ],
    note: 'No prometemos empleo ni garantizamos ofertas: prometemos criterio, preparación y ejecución cuando la decisión está enfrente.',
  },

  // ── What's included (the value is the team, not the session count) ─────
  includes: {
    title: 'Qué incluye',
    lead: 'El valor no está en las 8 sesiones. Está en tener un equipo pensando contigo durante las decisiones importantes de tu carrera.',
    items: [
      '8 sesiones 1:1 — 1 de diagnóstico + 7 con Kate',
      'Material personalizado después de cada sesión',
      'Weekly de seguimiento con el equipo',
      'Soporte directo por WhatsApp y email',
      'Validación de oportunidades antes de aplicar',
      'Preparación de procesos reales, entrevista por entrevista',
      'Acompañamiento en final rounds, ofertas y negociación',
    ],
  },

  // ── Investment: premium and secure, no over-justification ──────────────
  investment: {
    title: 'Tu próximo movimiento puede cambiar años de tu carrera.',
    body: 'Una oferta, una compensación, equity, un cambio de mercado o una decisión entre IC y management merecen suficiente criterio para no decidirse en solitario.',
    price: 'Inversión: USD 2,000.',
    priceNote: 'Pago único.',
  },

  who: {
    title: 'Built inside a recruiting company, not a coaching company.',
    team: {
      name: 'Purrfect Hire.',
      bio: 'Somos una empresa de recruiting: más de tres años contratando talento directamente con founders y startups. Offer Acceleration lleva ese conocimiento — qué señales compran los founders y por qué — al otro lado de la mesa.',
    },
    kate: {
      name: 'Katerine Forero.',
      role: 'Founder, Purrfect Hire · Advisor',
      bio: '10+ años en talento y recruiting. Entró a ADDI cuando eran 15 personas y lideró la operación de talento hasta +400. Opera entre LATAM, US y Europa, y conecta cada advisory con las decisiones de contratación que ve cada semana.',
    },
  },

  faq: {
    title: 'Preguntas directas',
    items: [
      {
        q: '¿Esto es career coaching?',
        a: 'No. Es un advisory construido dentro de una empresa de recruiting: trabajamos cada semana con los founders y hiring managers que toman las decisiones de contratación, y usamos ese acceso para tus decisiones de carrera.',
      },
      {
        q: '¿Ustedes me consiguen el trabajo?',
        a: 'No, y desconfía de quien te lo prometa. Construimos contigo estrategia, posicionamiento y preparación, y entramos contigo a entrevistas, ofertas y negociación. Las conversaciones las tienes tú; el criterio lo construimos juntos.',
      },
      {
        q: 'No estoy buscando trabajo activamente. ¿Tiene sentido?',
        a: 'Sí. Una parte real de los casos son personas con buen rol que quieren claridad sobre su siguiente movimiento, renegociar internamente o evaluar una oferta que les llegó.',
      },
      {
        q: '¿Funciona si trabajo full-time?',
        a: 'Sí, es el caso de la mayoría. Sesiones de una hora, fuera de horario si hace falta.',
      },
    ],
  },

  final: {
    title: 'Your career has advisors too.',
    body: '48 a 72 horas entre tu aplicación y la primera conversación.',
    button: 'Aplicar a Offer Acceleration',
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

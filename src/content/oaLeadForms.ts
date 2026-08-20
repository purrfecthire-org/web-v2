// ─────────────────────────────────────────────────────────────────────────
// Offer Acceleration · lead-capture pages (ES).
//
// Three short, NOINDEX landing pages used as the destination of LinkedIn
// posts. They are NOT linked from the nav or footer: each one is pasted into
// a specific post or DM depending on the audience (see `audience` below).
//
// Funnel:  LinkedIn post → one of these pages → micro form → "recibimos tu
// aplicación". No Calendly, no pricing, no salary question, and no AI
// analysis on submit (unlike /offer-acceleration/apply, which scores the
// applicant and branches accepted/rejected). Here every successful submit
// shows the same neutral confirmation.
//
// Option `key`s are the backend-owned contract, shared across all three
// variants (see `OBJECTIVE_KEYS` / `BLOCKER_KEYS` below). Labels are this
// portal's copy and may be reworded freely; only the key list must stay in
// sync with ats-backend.
// ─────────────────────────────────────────────────────────────────────────

/** Variant slug ⇄ payload discriminator. Sent as `variant` on every lead. */
export type OALeadVariant = 'preguntas' | 'te_suena' | 'espejo';

/**
 * Shared objective enum. Four keys are reused verbatim from the OA apply
 * form's `objective` field (offerAcceleration.ts); the rest are new to these
 * pages and must be added to the backend's option-key registry.
 */
export const OBJECTIVE_KEYS = [
  'change_industry', // reused
  'change_role_or_career', // reused
  'same_role_industry_usd_offer', // reused
  'level_up_seniority', // reused
  'freelance_to_stable_role', // new
  'chaos_to_structure', // new
  'undervalued_at_current_job', // new
  'unclear', // reused
  'other', // new
] as const;

/** Shared blocker enum. All four keys are new to these pages. */
export const BLOCKER_KEYS = [
  'no_recruiter_contact',
  'interviews_not_closing',
  'cannot_tell_my_story',
  'english_under_pressure',
] as const;

export type ObjectiveKey = (typeof OBJECTIVE_KEYS)[number];
export type BlockerKey = (typeof BLOCKER_KEYS)[number];

export interface OALeadOption {
  key: string;
  label: string;
}

export interface OALeadFormCopy {
  /** Small line above the first field. */
  hint: string;
  linkedin: { label: string; placeholder: string };
  objective: { label: string; options: OALeadOption[] };
  /** Omitted on the `espejo` variant, which asks a single question. */
  blocker?: { label: string; options: OALeadOption[] };
  contact: { label: string; optional: string; email: string; phone: string; note: string };
  submit: string;
  errors: { required: string };
  privacy: string;
  success: { eyebrow: string; title: string; body: string };
  error: { eyebrow: string; title: string; body: string; retry: string };
}

// ── Blocker options: identical copy on every variant that shows them ─────
const BLOCKER_OPTIONS: OALeadOption[] = [
  { key: 'no_recruiter_contact', label: 'Casi no me contactan recruiters' },
  { key: 'interviews_not_closing', label: 'Llego a entrevistas pero no cierro' },
  { key: 'cannot_tell_my_story', label: 'No sé cómo contar mi historia' },
  { key: 'english_under_pressure', label: 'El inglés bajo presión' },
];

// ── Objective options, phrased as a next move (variants A and C) ─────────
const MOVE_OPTIONS: OALeadOption[] = [
  { key: 'change_industry', label: 'Cambiar de industria hacia tech' },
  { key: 'change_role_or_career', label: 'Cambiar de rol o de carrera' },
  { key: 'same_role_industry_usd_offer', label: 'Mantener mi rol, pero cobrar en USD' },
  { key: 'level_up_seniority', label: 'Subir de nivel o seniority' },
  { key: 'freelance_to_stable_role', label: 'Salir del freelance a un rol estable' },
  { key: 'unclear', label: 'Aún no lo tengo claro' },
];

// ── Shared form chrome: identical on the three pages ─────────────────────
const CONTACT_COPY = {
  label: '¿Cómo te contactamos?',
  optional: '(opcional)',
  email: 'Email',
  phone: 'WhatsApp',
  note: 'Si nos dejas uno de los dos, te respondemos más rápido. Si no, te escribimos por LinkedIn.',
};

const SUCCESS_COPY = {
  eyebrow: 'Aplicación recibida',
  title: 'Recibimos tu aplicación.',
  body: 'Nuestro equipo va a revisar tu perfil y te contactaremos pronto con el siguiente paso.',
};

const ERROR_COPY = {
  eyebrow: 'Algo salió mal',
  title: 'No pudimos enviar tu aplicación.',
  body: 'Hubo un problema de conexión y tu aplicación no llegó. Tus respuestas siguen aquí, inténtalo de nuevo en unos segundos.',
  retry: 'Intentar de nuevo',
};

const ERRORS = { required: 'Completa tu LinkedIn y elige una opción.' };

const PRIVACY =
  'Usamos tus datos solo para preparar tu caso y contactarte. Nada se publica, nada se comparte.';

const FOOTER = 'Purrfect Hire · 160+ placements en US, Europa y LATAM';

// ═════════════════════════════════════════════════════════════════════════
// Variant A · /offer-acceleration/preguntas
// ═════════════════════════════════════════════════════════════════════════
export const oaPreguntas = {
  variant: 'preguntas' as OALeadVariant,
  path: '/offer-acceleration/preguntas',
  /** Internal note: which LinkedIn audience this page is for. Not rendered. */
  audience:
    'Gente con muchos años en la misma empresa, que no busca activamente y no sabe que el sourcing cambió.',
  meta: {
    title: 'Las cinco preguntas · Offer Acceleration',
    description:
      'Antes de escribirte, un recruiter ya respondió cinco preguntas sobre ti mirando solo tu perfil. Estas son.',
  },
  hero: {
    eyebrow: 'Offer Acceleration',
    headline: 'Antes de escribirte, un recruiter ya respondió cinco preguntas sobre ti. Sin ti.',
    lede: 'Cuando una startup US busca a alguien de tu nivel, nadie lee aplicaciones. Alguien busca perfiles y descarta en segundos. Estas son las preguntas con las que te leen, y con las que casi siempre te descartan sin que te enteres.',
  },
  questions: [
    {
      q: 'Cuando un recruiter busca tu rol, ¿sales en los primeros resultados o en el puesto 1,045?',
      body: 'Una búsqueda devuelve miles de perfiles. El recruiter revisa una página, quizá dos, y arma su lista con esos. Del puesto 50 hacia abajo nadie llega, por bueno que seas.',
    },
    {
      q: '¿Tu título habla de tu pasado o de tu siguiente rol?',
      body: 'El título es lo primero que se lee y lo primero que descarta. La mayoría lo escribe mirando hacia atrás.',
    },
    {
      q: '¿Tu experiencia muestra resultados o responsabilidades?',
      body: '«Encargado de» y «responsable de» se leen muy distinto a un número. Quien busca decide en segundos cuál de los dos eres.',
    },
    {
      q: '¿Tu historia se lee como una decisión o como una casualidad?',
      body: 'Cambio de industria, años de freelance, una startup que cerró. Todo eso suma o resta según cómo esté contado. El recruiter no te va a preguntar: va a asumir.',
    },
    {
      q: '¿Tu perfil da señales de que tu inglés aguanta una entrevista con presión?',
      body: 'No el inglés del CV. El de una conversación en vivo con la persona que firma. El recruiter busca esas señales antes de gastar una llamada.',
    },
  ],
  cases: {
    title: 'Y pesan doble si tu siguiente movimiento es de los difíciles:',
    items: [
      'Entrar a tech desde una industria tradicional',
      'Pasar de freelance a un rol estable sin bajar ingreso',
      'Saltar de una empresa local a una startup US en USD',
      'Cambiar de rol o de carrera',
      'Subir de nivel en lo que ya haces',
      'Volver al mercado después de un recorte',
    ],
  },
  apply: {
    title: 'No vamos a responder estas preguntas aquí.',
    body: 'Las respondemos sobre tu perfil, en una llamada de 15 minutos con nuestro equipo. Para llegar a ella solo necesitamos tu LinkedIn y dos respuestas. Así los 15 minutos son sobre tu caso, no sobre presentaciones.',
    dark: false,
  },
  form: {
    hint: 'Sin CV, sin ensayos, sin preguntas de salario. Menos de un minuto.',
    linkedin: { label: 'Tu perfil de LinkedIn', placeholder: 'linkedin.com/in/tu-perfil' },
    objective: { label: '¿Cuál describe mejor tu próximo movimiento?', options: MOVE_OPTIONS },
    blocker: { label: '¿Qué es lo que más te frena hoy?', options: BLOCKER_OPTIONS },
    contact: CONTACT_COPY,
    submit: 'Quiero que lean mi perfil',
    errors: ERRORS,
    privacy: PRIVACY,
    success: SUCCESS_COPY,
    error: ERROR_COPY,
  } satisfies OALeadFormCopy,
  footer: FOOTER,
} as const;

// ═════════════════════════════════════════════════════════════════════════
// Variant B · /offer-acceleration/te-suena
// ═════════════════════════════════════════════════════════════════════════
export const oaTeSuena = {
  variant: 'te_suena' as OALeadVariant,
  path: '/offer-acceleration/te-suena',
  audience:
    'Audiencia amplia o de intención difusa: gente que no sabe nombrar qué quiere cambiar. La página se lo nombra.',
  meta: {
    title: '¿Te suena? · Offer Acceleration',
    description:
      'Cinco situaciones, cinco preguntas. La que te incomode es la tuya, y es de la que hablamos en 15 minutos.',
  },
  hero: {
    eyebrow: 'Offer Acceleration',
    headline: 'Esta página es para cinco personas. Si eres una de ellas, vas a saberlo en 30 segundos.',
    lede: 'No te vamos a explicar un programa. Te vamos a hacer cinco preguntas. La que te incomode, esa es la tuya.',
  },
  // `tint` maps to the .oal-persona--N background in the component.
  situations: [
    {
      tint: 1,
      kicker: 'De industria tradicional a tech',
      q: '¿Quién decidió qué cuenta como experiencia en tu perfil: tú, o el que lo lee en 20 segundos?',
      body: 'Años haciendo bien tu trabajo en banca, seguros, retail o logística. Aplicaste a tech un par de veces, no pasó nada, y concluiste que te falta experiencia. La pregunta de arriba dice otra cosa.',
    },
    {
      tint: 2,
      kicker: 'De freelance a un rol estable',
      q: '¿Tu trayectoria está contada como un negocio que operaste, o como una lista de proyectos sueltos?',
      body: 'Facturas bien, pero cada mes arranca en cero y quieres un solo equipo sin ganar menos. Un recruiter solo va a leer una de esas dos versiones. Hoy no elegiste cuál.',
    },
    {
      tint: 3,
      kicker: 'De empresa local a startup US',
      q: '¿Sabes qué escribe el recruiter de una Series B en su buscador cuando necesita tu rol?',
      body: 'Tu mismo rol en una empresa US paga dos o tres veces más, y lo sabes. Pero esas ofertas no te llegan. De esa frase en el buscador depende que existas para ellos.',
    },
    {
      tint: 4,
      kicker: 'Del caos a una estructura',
      q: '¿Tu perfil dice qué rol mereces, o deja que el lector adivine?',
      body: 'Empresa chica, todos hacen de todo, y tú sostienes media operación. «Hago de todo» no se traduce solo a un cargo concreto, y adivinar casi siempre termina en un cargo más chico.',
    },
    {
      tint: 5,
      kicker: 'Haces más y ganas lo mismo',
      q: '¿Cuánto vale tu mismo desempeño en una empresa que sí paga por él?',
      body: 'El proyecto que salió bien lo sostuviste tú. En la evaluación te felicitaron, te dieron más trabajo y el aumento quedó para el próximo ciclo. Esa cifra existe y todavía no la conoces.',
    },
  ],
  apply: {
    title: '¿Cuál te incomodó?',
    body: 'Ese es el punto de partida de una llamada de 15 minutos con nuestro equipo, sobre tu caso, no sobre nosotros. Para llegar preparados pedimos tu LinkedIn y dos respuestas. Nada más.',
    /** The one dark section on this page (design system: max one per page). */
    dark: true,
  },
  form: {
    hint: 'Menos de un minuto. Sin CV, sin preguntas de salario.',
    linkedin: { label: 'Tu perfil de LinkedIn', placeholder: 'linkedin.com/in/tu-perfil' },
    objective: {
      label: '¿Cuál de las cinco situaciones es la tuya?',
      // Situation-shaped labels, mapped onto the shared objective enum.
      options: [
        { key: 'change_industry', label: 'De industria tradicional a tech' },
        { key: 'freelance_to_stable_role', label: 'De freelance a un rol estable' },
        { key: 'same_role_industry_usd_offer', label: 'De empresa local a startup US' },
        { key: 'chaos_to_structure', label: 'Del caos a una estructura' },
        { key: 'undervalued_at_current_job', label: 'Hago más y gano lo mismo' },
        { key: 'other', label: 'Otra parecida' },
      ],
    },
    blocker: { label: '¿Qué es lo que más te frena hoy?', options: BLOCKER_OPTIONS },
    contact: CONTACT_COPY,
    submit: 'Enviar mi aplicación',
    errors: ERRORS,
    privacy: PRIVACY,
    success: SUCCESS_COPY,
    error: ERROR_COPY,
  } satisfies OALeadFormCopy,
  footer: FOOTER,
} as const;

// ═════════════════════════════════════════════════════════════════════════
// Variant C · /offer-acceleration/espejo
// ═════════════════════════════════════════════════════════════════════════
export const oaEspejo = {
  variant: 'espejo' as OALeadVariant,
  path: '/offer-acceleration/espejo',
  audience:
    'Audiencia tibia que ya conoce a Kate: seguidores, gente que comenta sus posts, referidos. Y la respuesta a un DM cuando no queremos mandar Calendly directo.',
  meta: {
    title: 'El espejo · Offer Acceleration',
    description:
      'Siete preguntas que un recruiter responde sobre ti en menos de un minuto. Respóndelas honesto y vas a saber por qué no te están llamando.',
  },
  hero: {
    eyebrow: 'Offer Acceleration',
    headline: 'Siete preguntas. Respóndelas honesto y vas a saber por qué no te están llamando.',
    lede: 'No voy a explicarte un programa. Prefiero hacerte las preguntas que un recruiter responde sobre ti en menos de un minuto, cada vez que tu perfil aparece, o no aparece, en su búsqueda.',
    signature: 'Kate · Founder, Purrfect Hire',
  },
  // `id` is the stable key each answer is reported under in the payload's
  // `audit` object. Never renumber: the backend stores them by id.
  audit: {
    options: [
      { value: 'yes', label: 'Sí' },
      { value: 'no', label: 'No' },
      { value: 'unknown', label: 'No lo sé' },
    ],
    questions: [
      { id: 'keywords', q: '¿Sabes con qué palabras te buscaría un recruiter, y si tu perfil las tiene?' },
      { id: 'headline', q: '¿Tu título de LinkedIn está escrito para tu siguiente rol, no para el que ya tienes?' },
      { id: 'results', q: '¿Tu experiencia muestra números y resultados, no funciones?' },
      { id: 'story', q: '¿Puedes contar tu cambio, de industria, de freelance o de país, en un minuto y sin que suene a excusa?' },
      { id: 'us_interview', q: '¿Sabes qué mide realmente una entrevista con una startup US?' },
      { id: 'salary_answer', q: '¿Tienes una respuesta lista para «¿cuál es tu expectativa salarial?»' },
      { id: 'referral', q: '¿Alguien dentro del mercado al que apuntas puede dar tu nombre?' },
    ],
    verdict: {
      idle: 'Responde las siete y te digo qué veo.',
      // {answered} / {total} / {count} are replaced at runtime.
      partial: 'Llevas <strong>{answered} de {total}</strong>. Sigue, que las que faltan son las que más pesan.',
      clean:
        '<strong>Siete de siete.</strong> O ya tienes todo resuelto, o respondiste rápido. Si es lo primero, la llamada te sirve para afinar, no para arrancar. Si es lo segundo, vuelve a leerlas despacio.',
      redOne: '<strong>1 respuesta en rojo.</strong> ',
      redMany: '<strong>{count} respuestas en rojo.</strong> ',
      redTail:
        'Ninguna es falta de talento. Son filtros que un recruiter aplica en segundos, y cada uno te está costando entrevistas que nunca te enteraste de haber perdido. Eso es lo que revisamos en la llamada de 15 minutos: cuáles son los tuyos y cómo se corrigen.',
    },
  },
  apply: {
    title: 'De esas respuestas hablamos en 15 minutos.',
    body: 'Cada respuesta en rojo es un filtro que hoy decide por ti, sin avisarte. En una llamada corta con nuestro equipo revisamos cuáles son los tuyos y qué tan caros te están saliendo. Para prepararla solo necesito una cosa y una respuesta.',
    dark: false,
  },
  form: {
    hint: 'Una sola pregunta. Sin CV, sin salario, sin ensayos.',
    linkedin: { label: 'Tu perfil de LinkedIn', placeholder: 'linkedin.com/in/tu-perfil' },
    objective: { label: '¿Cuál describe mejor tu próximo movimiento?', options: MOVE_OPTIONS },
    // No blocker question here: the self-audit above already produced richer
    // signal than a single blocker chip could.
    contact: CONTACT_COPY,
    submit: 'Enviar',
    errors: ERRORS,
    privacy: PRIVACY,
    success: {
      eyebrow: 'Aplicación recibida',
      title: 'Recibimos tu aplicación.',
      body: 'Voy a revisar tu perfil y te contactaremos pronto con el siguiente paso. Kate.',
    },
    error: ERROR_COPY,
  } satisfies OALeadFormCopy,
  footer: FOOTER,
} as const;

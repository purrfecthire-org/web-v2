// ─────────────────────────────────────────────────────────────────────────
// /pricing — one page, two doors (Jul 2026 architecture doc).
// B2B rule: publish the structure, never the exact %. One guarantee number.
// B2C rule: prices always public — they filter and remove friction.
// Rendered by PricingPage.astro; EN at /pricing, ES at /es/pricing.
// ─────────────────────────────────────────────────────────────────────────

export const FOUNDERS_CALENDLY = 'https://calendly.com/purrfecthire/5';

const wa = (text: string) => `https://wa.me/16283588776?text=${encodeURIComponent(text)}`;

export interface PricingPlan {
  name: string;
  rows: { label: string; value: string; strong?: boolean }[];
  detailHref?: string;
  detailLabel?: string;
}

export interface PricingContent {
  lang: 'en' | 'es';
  path: string;
  meta: { title: string; description: string };
  hero: { eyebrow: string; headline: string; sub: string };
  selector: { hiring: string; growing: string };
  b2b: {
    title: string;
    intro: string;
    plans: PricingPlan[];
    ctaLabel: string;
    ctaHref: string;
    ctaNote: string;
    flywheel: string;
  };
  b2c: {
    title: string;
    intro: string;
    kateCaption: string;
    plans: PricingPlan[];
    freeLine: { before: string; label: string; href: string; after: string };
    ctaLabel: string;
    ctaHref: string;
    ctaNote: string;
  };
}

export const pricingEn: PricingContent = {
  lang: 'en',
  path: '/pricing',

  meta: {
    title: 'Pricing · startup recruiting and career coaching | Purrfect Hire',
    description:
      'How much does a recruiter for startups cost? Three B2B models (success fee, All You Can Hire from $9,000/month, embedded search) and public career-coaching prices: $300 sessions, Momentum at $550/month, Offer Acceleration from $2,000.',
  },

  hero: {
    eyebrow: 'Pricing',
    headline: 'One credential, two ways to use it.',
    sub: 'We hire for YC-, a16z- and Sequoia-backed founders. Founders buy that judgment to hire; talent trains against it to get hired. Pick your side.',
  },

  selector: { hiring: "I'm hiring", growing: "I'm growing my career" },

  b2b: {
    title: 'For founders',
    intro:
      'Structure is public; exact terms are a 20-minute conversation. One guarantee standard across web and contracts.',
    plans: [
      {
        name: 'Success Fee',
        rows: [
          { label: 'For whom', value: '1–2 critical hires a year' },
          { label: 'Model', value: 'You pay only when you hire. A percentage of first-year salary.' },
          { label: 'Includes', value: 'Mapping of your real bar, calibrated candidates in under 4 weeks' },
          { label: 'Guarantee', value: '90-day replacement' },
          { label: 'Price', value: 'Exact terms in a 20-min call', strong: true },
        ],
      },
      {
        name: 'All You Can Hire',
        rows: [
          { label: 'For whom', value: '4–6+ senior hires a year' },
          { label: 'Model', value: 'Flat monthly fee. Up to 6 senior hires in 12 months.' },
          {
            label: 'Includes',
            value: 'Dedicated recruiter, always-on pipeline, no re-briefing, priority on our calendar',
          },
          { label: 'Guarantee', value: 'Included while the subscription is active' },
          {
            label: 'Price',
            value: 'From $9,000 USD/month, annual commitment · $11,000/month quarterly',
            strong: true,
          },
          { label: 'Extra hires (7+)', value: 'Reduced flat fee per additional hire' },
        ],
      },
      {
        name: 'Embedded Search',
        rows: [
          { label: 'For whom', value: 'The role that defines the company (CTO, founding exec)' },
          { label: 'Model', value: 'Dedicated search with retainer + success fee' },
          {
            label: 'Includes',
            value: 'Kate directly on the search, full market map, compensation calibrated with real data',
          },
          { label: 'Guarantee', value: '120-day replacement' },
          { label: 'Price', value: 'Direct conversation', strong: true },
        ],
      },
    ],
    ctaLabel: 'Book a 20-min call',
    ctaHref: FOUNDERS_CALENDLY,
    ctaNote: 'No deck, no discovery maze. You leave the call with exact terms.',
    flywheel:
      'We work both sides of the table. The talent we place trains against the same bar we use to evaluate for you.',
  },

  b2c: {
    title: 'For talent',
    intro:
      'Prices are public on purpose: they filter, and they remove friction. Every rung is with Kate, the person founders trust to make the hire.',
    kateCaption:
      'Kate Forero. 160+ senior placements, 10+ years reading how founders actually evaluate.',
    plans: [
      {
        name: '1:1 Session',
        rows: [
          { label: 'For whom', value: 'One specific problem: interview, offer, narrative, limiting beliefs' },
          { label: 'Format', value: '1 hour with Kate, single focus, written summary of agreements' },
          { label: 'Price', value: '$300 USD', strong: true },
          { label: 'How to start', value: 'WhatsApp, payment when you book' },
        ],
        detailHref: '/career-sessions',
        detailLabel: 'See session details →',
      },
      {
        name: 'Momentum',
        rows: [
          { label: 'For whom', value: 'Sustained progress, month over month' },
          { label: 'Format', value: '2 sessions/month with Kate + async review of progress between sessions' },
          { label: 'Price', value: '$550 USD/month, 3-month minimum', strong: true },
          { label: 'How to start', value: 'After at least one 1:1 session' },
        ],
        detailHref: '/career-momentum',
        detailLabel: 'See Momentum details →',
      },
      {
        name: 'Offer Acceleration',
        rows: [
          { label: 'For whom', value: 'A full repositioning toward US startups' },
          {
            label: 'Format',
            value: '1:1 program: written strategy, market map, role plays, negotiation, direct intros',
          },
          { label: 'Price', value: 'From $2,000 USD', strong: true },
          { label: 'How to start', value: 'Application, limited spots' },
        ],
        detailHref: '/offer-acceleration',
        detailLabel: 'See the program →',
      },
    ],
    freeLine: {
      before: 'Not ready to invest? ',
      label: 'Browse open roles',
      href: '/roles',
      after: '. Applying is free, and every search is live.',
    },
    ctaLabel: 'Book your session · $300',
    ctaHref: wa('Hi Kate, I want to book a 1:1 session.'),
    ctaNote: 'WhatsApp, payment when you book. In Spanish or English.',
  },
};

export const pricingEs: PricingContent = {
  lang: 'es',
  path: '/es/pricing',

  meta: {
    title: 'Precios · recruiting para startups y coaching de carrera | Purrfect Hire',
    description:
      '¿Cuánto cuesta un recruiter para startups? Tres modelos B2B (success fee, All You Can Hire desde $9,000/mes, embedded search) y precios públicos de coaching: sesiones de $300, Momentum a $550/mes y Offer Acceleration desde $2,000.',
  },

  hero: {
    eyebrow: 'Precios',
    headline: 'Una credencial, dos formas de usarla.',
    sub: 'Contratamos para founders respaldados por YC, a16z y Sequoia. Los founders compran ese criterio para contratar; el talento entrena contra ese mismo estándar para ser contratado. Elige tu lado.',
  },

  selector: { hiring: 'Estoy contratando', growing: 'Estoy creciendo' },

  b2b: {
    title: 'Para founders',
    intro:
      'La estructura es pública; los términos exactos son una conversación de 20 minutos. Una sola garantía estándar en web y contratos.',
    plans: [
      {
        name: 'Success Fee',
        rows: [
          { label: 'Para quién', value: '1–2 hires críticos al año' },
          { label: 'Modelo', value: 'Pagas solo cuando contratas. Un porcentaje del salario del primer año.' },
          { label: 'Incluye', value: 'Mapeo de tu bar real, candidatos calibrados en menos de 4 semanas' },
          { label: 'Garantía', value: 'Reemplazo a 90 días' },
          { label: 'Precio', value: 'Términos exactos en un call de 20 min', strong: true },
        ],
      },
      {
        name: 'All You Can Hire',
        rows: [
          { label: 'Para quién', value: '4–6+ hires senior al año' },
          { label: 'Modelo', value: 'Fee mensual fijo. Hasta 6 hires senior en 12 meses.' },
          {
            label: 'Incluye',
            value: 'Recruiter dedicado, pipeline siempre activo, sin re-briefing, prioridad de agenda',
          },
          { label: 'Garantía', value: 'Incluida mientras la suscripción está activa' },
          {
            label: 'Precio',
            value: 'Desde $9,000 USD/mes con compromiso anual · $11,000/mes trimestral',
            strong: true,
          },
          { label: 'Hire adicional (7+)', value: 'Fee flat reducido por hire extra' },
        ],
      },
      {
        name: 'Embedded Search',
        rows: [
          { label: 'Para quién', value: 'El rol que define la compañía (CTO, founding exec)' },
          { label: 'Modelo', value: 'Búsqueda dedicada con retainer + success fee' },
          {
            label: 'Incluye',
            value: 'Kate directamente en el search, mapa de mercado completo, compensación calibrada con datos reales',
          },
          { label: 'Garantía', value: 'Reemplazo a 120 días' },
          { label: 'Precio', value: 'Conversación directa', strong: true },
        ],
      },
    ],
    ctaLabel: 'Agenda un call de 20 min',
    ctaHref: FOUNDERS_CALENDLY,
    ctaNote: 'Sin deck y sin laberinto de discovery. Sales del call con términos exactos.',
    flywheel:
      'Trabajamos las dos caras de la mesa. El talento que colocamos entrena contra el mismo bar con el que evaluamos para ti.',
  },

  b2c: {
    title: 'Para talento',
    intro:
      'Los precios son públicos a propósito: filtran y eliminan fricción. Cada peldaño es con Kate, la persona a la que los founders le confían el hire.',
    kateCaption:
      'Kate Forero. 160+ placements senior, 10+ años leyendo cómo evalúan los founders de verdad.',
    plans: [
      {
        name: 'Sesión 1:1',
        rows: [
          { label: 'Para quién', value: 'Un problema puntual: entrevista, oferta, narrativa, creencias limitantes' },
          { label: 'Formato', value: '1 hora con Kate, foco único, resumen de acuerdos por escrito' },
          { label: 'Precio', value: '$300 USD', strong: true },
          { label: 'Entrada', value: 'WhatsApp, pago al reservar' },
        ],
        detailHref: '/es/career-sessions',
        detailLabel: 'Ver detalles de la sesión →',
      },
      {
        name: 'Momentum',
        rows: [
          { label: 'Para quién', value: 'Avance sostenido mes a mes' },
          { label: 'Formato', value: '2 sesiones/mes con Kate + revisión async de avances entre sesiones' },
          { label: 'Precio', value: '$550 USD/mes, mínimo 3 meses', strong: true },
          { label: 'Entrada', value: 'Después de al menos 1 sesión 1:1' },
        ],
        detailHref: '/es/career-momentum',
        detailLabel: 'Ver detalles de Momentum →',
      },
      {
        name: 'Offer Acceleration',
        rows: [
          { label: 'Para quién', value: 'Reposicionamiento completo hacia startups de US' },
          {
            label: 'Formato',
            value: 'Programa 1:1: estrategia escrita, mapa de mercado, role plays, negociación, intros directas',
          },
          { label: 'Precio', value: 'Desde $2,000 USD', strong: true },
          { label: 'Entrada', value: 'Aplicación, cupos limitados' },
        ],
        detailHref: '/offer-acceleration',
        detailLabel: 'Ver el programa →',
      },
    ],
    freeLine: {
      before: '¿Aún no quieres invertir? ',
      label: 'Mira los roles abiertos',
      href: '/roles',
      after: '. Aplicar es gratis y cada búsqueda está activa.',
    },
    ctaLabel: 'Agenda tu sesión · $300',
    ctaHref: wa('Hola Kate, quiero agendar una sesión 1:1.'),
    ctaNote: 'Por WhatsApp, pago al reservar. En español o en inglés.',
  },
};

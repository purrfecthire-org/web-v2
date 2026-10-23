// Destinations confirmed by Kate, 17 October 2026.
export const FOUNDERS_CALENDAR = 'https://cal.com/purrfect-hire/founders-call';
// Founders can book directly; /search-read remains an optional explanatory route.
export const BOOKING_B2B = FOUNDERS_CALENDAR;
export const WHATSAPP_B2B = 'https://wa.me/18312245188?text=Hi%20Kate%2C%20I%27d%20like%20to%20discuss%20a%20senior%20hire%20for%20my%20company.';
// Kate confirmed this business number for advisory enquiries on 19 October 2026.
export const WHATSAPP_CAREER_COMPOUNDING = `https://wa.me/18312245188?text=${encodeURIComponent('Hi Kate, I would like to discuss Career Compounding. My current role and company: \nThe business challenge I want to work on: ')}`;

/** Single inbox for the whole site. */
export const CONTACT_EMAIL = 'go@purrfecthire.com';

/** Public company accounts, verified against onboarding and public profiles. */
export const SOCIAL_LINKS = [
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/purrfecthirehr/' },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/purrfecthirehr' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/purrfect-hire/' },
  { id: 'x', label: 'X', href: 'https://x.com/purrfecthire' },
] as const;

/**
 * Offer Accelerator inquiry. Its public OA intake stores a receipt;
 * receipt is not acceptance or a promise of review timing.
 */
export const APPLY_OFFER = '/offer-acceleration/apply';

/** Request a 1:1 session directly; the email inbox remains an alternative. */
export const SESSION_1_1 =
  `https://wa.me/18312245188?text=${encodeURIComponent('Hi Kate, I would like to request a 1:1 Strategic Session. My current role: \nMy LinkedIn: \nThe question I want to work on: ')}`;

/** Free consideration when no published role fits. */
export const CONSIDERED_FREE =
  'mailto:go@purrfecthire.com?subject=Considered%20for%20Purrfect%20searches&body=Hi%20Kate%2C%0A%0AI%20would%20like%20to%20be%20considered%20for%20Purrfect%20searches.%0A%0ACurrent%20role%20and%20company%3A%0ALinkedIn%3A%0AThe%20kind%20of%20role%20I%20am%20looking%20for%3A%0A%0AThanks%2C%0A';

/** The approved policy, same URL on all four pages. */
export const PRIVACY = '/privacy-policy';

/** Kate now lives in a Home block, not on a page of her own. */
export const KATE = '/#kate';

export const PAGE_COMPANIES = '/for-companies';
export const PAGE_TALENT = '/for-talent';
export const PAGE_OFFER = '/offer-acceleration';

export const PAGE_ROLES = '/roles';
export const PAGE_CAREER_COMPOUNDING = '/career-compounding';

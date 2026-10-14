// ─────────────────────────────────────────────────────────────────────────
// Launch destinations, in one place.
// Every outbound link on the four commercial pages resolves here, so an
// audit is one file and a swap is one line.
//
// Status, 14 October 2026:
//  · BOOKING_B2B  live. Calendly event "Purrfect hire | Builder fit call",
//    the same one the previous For Founders page used.
//  · APPLY_OFFER  email application. There is no confirmed Offer application
//    URL for launch, and the long form at /offer-acceleration/apply posts to
//    an ATS backend that is not publicly deployed, so with no endpoint
//    configured it shows the applicant an accepted screen and sends the
//    application nowhere. Email until a form actually delivers.
//  · SESSION_1_1  email request, same reason. There is no live session
//    calendar to point at.
//  · B2B and Offer bookings never share a destination.
// ─────────────────────────────────────────────────────────────────────────

/**
 * B2B first contact. Companies hero, models and close, plus the Home and
 * Companies nav CTAs: seven buttons, one destination.
 *
 * Was calendly.com/purrfecthire/5, an event that mixes Offer, candidates,
 * cultural fit and hiring, so a founder pressing "Discuss your hire" landed
 * on a calendar that was not theirs. Email until the companies-only calendar
 * exists: swapping this one line moves all seven at once.
 *
 * The calendar to create:
 *   Title      Purrfect Hire | Senior hiring discussion
 *   Questions  company · open role
 *   Logo       brand/logo/logo-horizontal-midnight.svg
 *
 * B2B and Offer never share a destination: different subject lines keep the
 * two inboxes legible even while both are email.
 */
export const BOOKING_B2B =
  'mailto:hiring@purrfecthire.com?subject=Discuss%20your%20hire&body=Hi%20Kate%2C%0A%0AI%20would%20like%20to%20discuss%20a%20hire.%0A%0ACompany%3A%0ARole%20we%20are%20opening%3A%0AWhat%20this%20hire%20has%20to%20change%3A%0A%0AThanks%2C%0A';

/** Single inbox for the whole site. */
export const CONTACT_EMAIL = 'hiring@purrfecthire.com';

/**
 * Offer Accelerator application. The body asks for the three things we need to
 * reply usefully, so the first email is not an empty "I'm interested".
 * Swap for the form URL the day it exists.
 */
export const APPLY_OFFER =
  'mailto:hiring@purrfecthire.com?subject=Offer%20Accelerator%20application&body=Hi%20Kate%2C%0A%0AI%20would%20like%20to%20apply%20to%20Offer%20Accelerator.%0A%0ACurrent%20role%20and%20company%3A%0ALinkedIn%3A%0AThe%20decision%20I%20want%20to%20work%20on%3A%0A%0AThanks%2C%0A';

/** 1:1 Strategic Session request, same three questions. */
export const SESSION_1_1 =
  'mailto:hiring@purrfecthire.com?subject=1%3A1%20Strategic%20Session&body=Hi%20Kate%2C%0A%0AI%20would%20like%20to%20request%20a%201%3A1%20Strategic%20Session.%0A%0ACurrent%20role%20and%20company%3A%0ALinkedIn%3A%0AThe%20decision%20I%20want%20to%20work%20on%3A%0A%0AThanks%2C%0A';

/**
 * The free route. /roles used to take free applications and now redirects to
 * For Talent, so For Talent has to carry a free destination of its own.
 */
export const CONSIDERED_FREE =
  'mailto:hiring@purrfecthire.com?subject=Considered%20for%20Purrfect%20searches&body=Hi%20Kate%2C%0A%0AI%20would%20like%20to%20be%20considered%20for%20Purrfect%20searches.%0A%0ACurrent%20role%20and%20company%3A%0ALinkedIn%3A%0AThe%20kind%20of%20role%20I%20am%20looking%20for%3A%0A%0AThanks%2C%0A';

/** The approved policy, same URL on all four pages. */
export const PRIVACY = '/privacy-policy';

/** Kate now lives in a Home block, not on a page of her own. */
export const KATE = '/#kate';

export const PAGE_COMPANIES = '/for-companies';
export const PAGE_TALENT = '/for-talent';
export const PAGE_OFFER = '/offer-acceleration';

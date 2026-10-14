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

/** B2B scoping call. Companies hero, models, close, and the Home nav CTA. */
export const BOOKING_B2B = 'https://calendly.com/purrfecthire/5';

/** Single inbox for the whole site. */
export const CONTACT_EMAIL = 'hiring@purrfecthire.com';

/** Offer Accelerator application. Swap for the form URL the day it exists. */
export const APPLY_OFFER =
  'mailto:hiring@purrfecthire.com?subject=Offer%20Accelerator%20application';

/** 1:1 Strategic Session request. */
export const SESSION_1_1 =
  'mailto:hiring@purrfecthire.com?subject=1%3A1%20Strategic%20Session';

/** The approved policy, same URL on all four pages. */
export const PRIVACY = '/privacy-policy';

/** Kate now lives in a Home block, not on a page of her own. */
export const KATE = '/#kate';

export const PAGE_COMPANIES = '/for-companies';
export const PAGE_TALENT = '/for-talent';
export const PAGE_OFFER = '/offer-acceleration';

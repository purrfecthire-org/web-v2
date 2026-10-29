/**
 * Prospective advisory terms selected after the user's authorization to revise
 * prices and scope on 29 October 2026. Existing clients keep their agreements.
 * These are product facts, not a payment, credit-redemption or billing system.
 */
export const PRIVATE_SESSION_MINUTES = 60;

const usd = (amount: number): string => `USD ${amount.toLocaleString('en-US')}`;
const diagnosticPriceUsd = 300;
const offerPriceUsd = 5000;
const compoundingPriceUsd = 5000;
const offerCoreSupportSummary = 'A weekly written team progress check-in during the core session window.';
const offerPrioritySupportSummary = 'One consolidated priority review per week across your active hiring processes via WhatsApp or email, including after the core. Bring one question or short document excerpt. Brief clarifications on the same decision are included; new research or live calls are separately agreed.';
const offerOngoingProcessSupportSummary = 'Follow-up continues until you start your next role while you actively execute the agreed plan and pursue hiring processes.';
const offerSupportLimitsSummary = 'Extra sessions and out-of-scope work are separately agreed. Follow-up does not add a fresh set of eight sessions or unlimited calls. No 24/7 availability, automatic renewal or automatic charges.';

export const STRATEGIC_SESSION = {
  name: '1:1 Strategic Session',
  priceUsd: diagnosticPriceUsd,
  priceLabel: usd(diagnosticPriceUsd),
  sessionCount: 1,
  sessionMinutes: PRIVATE_SESSION_MINUTES,
  advisor: 'Kate',
  writtenBrief: 'A short written decision and next-step brief.',
} as const;

export const OFFER_ACCELERATOR = {
  name: 'Offer Accelerator',
  priceUsd: offerPriceUsd,
  priceLabel: usd(offerPriceUsd),
  sessionCount: 8,
  sessionMinutes: PRIVATE_SESSION_MINUTES,
  diagnosticSessionCount: 1,
  executionSessionCount: 7,
  remainingSessionCount: 7,
  coreSessionWindowWeeks: 12,
  coreSessionWindowLabel: '12 weeks',
  // Compatibility labels describe the core session window, not a support cutoff.
  durationWeeks: 12,
  durationLabel: '12 weeks',
  supportClock: 'agreed continuation date',
  remainingBalanceUsd: offerPriceUsd - diagnosticPriceUsd,
  remainingBalanceLabel: usd(offerPriceUsd - diagnosticPriceUsd),
  advisor: 'Diagnostic with Kate, then seven sessions with a named senior Purrfect advisor',
  weeklyPriorityItemLimit: 1,
  weeklyPriorityReviewLimit: 1,
  sameDecisionClarificationsIncluded: true,
  weeklyProgressCheckInFormat: 'written',
  coreSupportSummary: offerCoreSupportSummary,
  prioritySupportSummary: offerPrioritySupportSummary,
  ongoingProcessSupportSummary: offerOngoingProcessSupportSummary,
  supportSummary: `${offerCoreSupportSummary} ${offerOngoingProcessSupportSummary} ${offerPrioritySupportSummary} ${offerSupportLimitsSummary}`,
  continuationSummary: `Your remaining 7 sessions are scheduled within 12 weeks from the date agreed when you continue. ${offerOngoingProcessSupportSummary}`,
} as const;

export const CAREER_COMPOUNDING = {
  name: 'Career Compounding',
  priceUsd: compoundingPriceUsd,
  priceLabel: usd(compoundingPriceUsd),
  sessionCount: 9,
  sessionMinutes: PRIVATE_SESSION_MINUTES,
  diagnosticSessionCount: 1,
  executionSessionCount: 7,
  finalReviewSessionCount: 1,
  remainingSessionCount: 8,
  durationMonths: 6,
  durationLabel: '6 months',
  supportClock: 'agreed continuation date',
  checkpointCount: 8,
  checkpointFeedbackBusinessDays: 2,
  remainingBalanceUsd: compoundingPriceUsd - diagnosticPriceUsd,
  remainingBalanceLabel: usd(compoundingPriceUsd - diagnosticPriceUsd),
  advisor: 'Kate',
  continuationSummary: 'Your remaining 8 sessions and 6 months of program support start on the date agreed when you continue.',
} as const;

export const DIAGNOSTIC_ENTRY = {
  priceUsd: diagnosticPriceUsd,
  priceLabel: usd(diagnosticPriceUsd),
  advisor: 'Kate',
  sessionMinutes: PRIVATE_SESSION_MINUTES,
  creditWindowDays: 30,
  creditUses: 1,
  requiresSameChallenge: true,
  countsAsFirstProgramSession: true,
  automaticBalanceCharge: false,
} as const;

/** Copy only; the client separately agrees enrollment and payment terms. */
export function diagnosticCreditCopy(program: { name: string; remainingBalanceLabel: string; continuationSummary: string }): string {
  return `Start with one hour with Kate for ${DIAGNOSTIC_ENTRY.priceLabel}. Continue on the same challenge within ${DIAGNOSTIC_ENTRY.creditWindowDays} days after the diagnostic: that hour counts as session one, and the ${DIAGNOSTIC_ENTRY.priceLabel} is credited once. The remaining balance for ${program.name} is ${program.remainingBalanceLabel}. ${program.continuationSummary} There is no obligation to continue or automatic balance charge. New engagements only; existing agreements retain their terms.`;
}

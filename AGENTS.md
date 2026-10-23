# Purrfect Hire web

## Current architecture

The public site is English-only. Active pages use Astro and the shared
src/components/v2/Shell.astro with Fraunces and Inter. Older Schibsted,
navy-only and bilingual components are historical and are not the current
visual reference. Follow the user's current instructions over older references.

- Home presents the brand and routes visitors to Companies or Talent.
- Home uses a warm full-background editorial city scene with a separate mobile
  composition. Generated editorial imagery is illustrative, never client or team
  evidence. Talent compares products immediately; Offer uses an editorial
  text-and-scope hero instead of repeating an office conversation photograph.
- Companies explains critical hiring and books directly at
  https://cal.com/purrfect-hire/founders-call.
- Talent compares Offer Accelerator, Career Compounding and a strategic session.
- Offer owns its methodology, participant evidence and commercial conditions.
- Career Compounding supports growth inside the participant's current role.
- Calibration and Candidate Brief are optional fictional work samples.
- /search/* describes hiring criteria; /roles/* contains actual vacancies.
- Applications are free; Roles does not promote paid advisory in its footer.
- Work with us receives expressions of interest by email, not an ATS form.
- Insights contains short educational articles with separate founder and talent
  paths. Keep private source provenance outside the website repository. Public
  examples are explicitly illustrative; do not turn private conversations into
  identifiable cases or publish source links, quotes or unverified outcomes.

The product name is Offer Accelerator. Preserve /offer-acceleration and the
legacy redirects in astro.config.mjs. Keep B2B and B2C narratives separate.

## Design and evidence

Use Shell tokens: Ivory canvas, Midnight text/contrast, small Stone surfaces
and contained purple actions. Prefer editorial rows and photography to repeated
card grids. Do not introduce ad hoc font or spacing values. Display sizes are
40/56/64px; sections 30/40px; body 17px; UI 15px. Containers are 80rem with
24/48px gutters; legal content is intentionally narrower.

Keep the original black Kate portrait once in Home, at most 160px wide, without
retouching its files. The full linked client collection lives in Home, in neutral
ink, in one horizontal row moving from right to left, with pause and
reduced-motion support. Client history
does not mean that every company is hiring now.

Never invent clients, outcomes, salary uplifts, endorsements or testimonials.
Do not reintroduce 160+/80% claims or unsupported Addi headcounts. Preserve
attribution, confidentiality, fictional-example labels and source dates.
Public prose has no em or en dashes. Normalize incoming role text through the
existing Markdown utilities without changing URLs or code literals.

## Conditions and intake

- OA: from USD 2,000. Final investment depends on seniority and location and
  is confirmed before enrollment (Kate, 23 October 2026). No unapproved tiers.
  One diagnostic and seven sessions with Kate; follow-up per
  process while actively executing the agreed plan. No job, salary, unlimited-call
  or 24/7 guarantee.
- Career Compounding: USD 5,000 over six months; nine private sessions with Kate:
  one 90-minute diagnostic, seven 75-minute execution sessions approximately
  three weeks apart, one 90-minute final review. Eight asynchronous checkpoints,
  one between each pair of sessions, receive feedback within two business days.
  Includes a private personalized hub and real work inside the participant's
  organization. Independent entry; Offer Accelerator is not a prerequisite.
  No promotion, pay increase or third-party outcome guarantee. The two-business-day
  commitment applies to checkpoint feedback, not all messages or unlimited access.
- Internal team mental health benefit: one-on-one sessions every two weeks with
  an experienced psychologist from Universidad de los Andes, fully covered by
  Purrfect. This is not a benefit for advisory clients.
- Strategic session: USD 300, requested via the confirmed WhatsApp number.
- Career Compounding and strategic-session enquiries can use WhatsApp
  +1 (831) 224-5188, confirmed by Kate on 19 October 2026. Email remains
  an alternative; a WhatsApp click does not mean a message was sent or received.
- B2B has no public numeric prices or fee percentages.
- Contact: go@purrfecthire.com.
- Advisory provides no preference in client searches. Participation and private
  notes remain confidential. Applying to vacancies is free.

The public ATS API is https://ats-backend-mu.vercel.app. Roles and OA inquiry
use existing contracts. Do not claim B2B, internal applications, Slack, Notion or
analytics integrations without evidence. Receipt screens require a validated
persisted receipt, not a generic 2xx. Preserve X-Request-Id, endpoint validation
and non-PII error reporting. Keep secrets out of code and PUBLIC_* variables.

## Verification and publication

Use pnpm and Node >=22.12. Build with the current public API so vacancy detail
pages are generated. Do not publish an empty snapshot after an API failure.
Run the existing tests in tests/*.test.ts. Check internal links, anchors,
redirects and assets. Inspect complete pages at 375, 768, 1280 and 1920px.
Respect reduced motion, keyboard focus and the original portrait assets.
Both intake forms require a valid UUID and received status before confirmation.
Capture and lock the draft while sending, restore its original editable state on
failure, and retain request ID and timing for an unchanged retry. These client
behaviors do not prove backend deduplication.
Do not send real applications or book meetings as routine QA.

When publication is authorized, use a PR and the existing GitHub Pages workflow.
Preserve the previous deployment for recovery.

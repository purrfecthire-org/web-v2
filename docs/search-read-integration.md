# Search Read: intake and commercial measurement handoff

Status: implementation handoff for the review branch, 17 October 2026. This document does not activate a backend, a CRM sync, emails, Slack notifications or analytics.

## Current behaviour

The site is static. The current implementation lives in:

- `src/components/search-read/SearchRead.astro`: feature gate, fields, submission state and calendar handoff.
- `src/lib/searchRead.ts`: POST request and strict receipt validation.
- `src/content/links.ts`: `/search-read` and the current founders calendar, `https://cal.com/purrfect-hire/founders-call`.
- `src/layouts/Layout.astro`: flag-gated analytics and query-string attribution propagation.
- `tests/search-read.test.ts`: basic request and receipt tests.

`PUBLIC_B2B_LEAD_ENDPOINT` is unset by default. In this mode `/search-read` presents the working founders-calendar link and a secondary email option. It does not render the intake form, POST a lead or claim that a request was saved. A calendar click is not a booking.

When the variable contains an exact endpoint URL, the page renders the intake form. After JavaScript initialises, the submit button becomes usable. The page displays the saved-context message and embeds the calendar only after a successful HTTP response containing a valid stored receipt. A generic `200 { "ok": true }` does not unlock that state.

This flag is evaluated at build time. Deploying a backend alone does not enable the form: the site needs a rebuild with the public endpoint configured. `PUBLIC_*` values are visible in the browser; they must never contain API tokens or secrets.

## Decide the commercial source of truth first

An internal Notion decision dated 6 July reports that sales moved to Amplemarket and that the ATS CRM approach was dropped. That decision is historical evidence; it does not confirm today's account configuration, pipeline ownership or an active website-to-Amplemarket sync.

Before implementation, the commercial owner must confirm:

1. Which system owns the lead, company, opportunity stage and closed-client record today.
2. Whether that system is Amplemarket, another CRM, or an agreed combination with clear ownership.
3. Which approved integration can create or update records and which fields it accepts.
4. How a website receipt, calendar booking and commercial opportunity will be linked without exposing private identifiers in public URLs.

Use a server-side adapter behind the agreed public intake URL. That adapter may write to Amplemarket if its supported API and the account's permissions meet the requirements. It may instead persist an intake record and use a durable outbox for a later CRM write. This branch does not establish an ATS route, an Amplemarket endpoint or a campaign-ID mapping. The helper describes a proposed adapter contract, not an existing service.

## Proposed intake contract

The following is the contract expected by the current client. The endpoint URL must be supplied by the backend owner after deployment; do not invent a route from the examples in other product flows.

### Request

Use `POST` over HTTPS in production, with:

```http
Content-Type: application/json
X-Request-Id: <UUID for this unchanged submission>
```

Example body using test data:

```json
{
  "work_email": "founder@example.com",
  "company": "Example Startup",
  "role": "Founding Engineer",
  "hire_change": "Own product delivery and customer integrations.",
  "needed_by": "Next quarter",
  "audience": "founder",
  "attribution": {
    "landing_page": "/for-companies",
    "utm_source": "linkedin",
    "utm_medium": "outbound",
    "utm_campaign": "founder_signal_oct26"
  }
}
```

| Field | Current client behaviour | Required server behaviour |
| --- | --- | --- |
| `work_email` | Required email input; trimmed; maximum 254 characters | Validate type, length and usable email syntax. A business-email label does not justify rejecting legitimate domains without an agreed policy. |
| `company` | Required; trimmed; maximum 200 characters | Validate a non-empty bounded string. For the investor audience, this field means fund. |
| `role` | Required; trimmed; maximum 200 characters | Validate a non-empty bounded string. For an investor, it may describe the portfolio hiring need. |
| `hire_change` | Required textarea; trimmed; maximum 2,000 characters | Validate a non-empty bounded string and treat it as untrusted text. |
| `needed_by` | Optional free text; maximum 200 characters | Validate an optional bounded string; do not assume a machine-readable date. |
| `audience` | `founder` by default; `investor` when the URL has `audience=investors` | Allow only the two singular enum values. |
| `attribution` | Path plus a small UTM allowlist | Validate keys, types and lengths independently; never trust browser filtering alone. |
| `website` | Honeypot field. The current browser abandons submission when it is filled and does not include it in a normal request. | If a caller supplies this optional field, validate and handle abuse on the server. The browser check alone provides no protection against direct POSTs. |

The client sends JSON with `credentials: "omit"` and a 20-second request timeout. No public authentication token is expected. Validate the entire request on the server; HTML constraints and TypeScript interfaces are not a server boundary.

### Successful persistence receipt

Return `201` for a newly persisted intake, or `200` when returning the original result of an idempotent retry:

```json
{
  "data": {
    "id": "stable-intake-receipt-id",
    "status": "received"
  }
}
```

`data.id` must be a non-empty, stable identifier for an actual persisted record. `status: "received"` is valid only after durable persistence succeeds. Do not return it for a received network packet, a fire-and-forget CRM request or an in-memory queue.

A persisted intake plus a durable delivery task can justify “received” even while CRM sync is pending. In that design, distinguish intake receipt, downstream sync status and CRM identifier internally. A receipt does not prove that a CRM contact or sales opportunity already exists.

The current browser uses the returned ID only to verify confirmation. It does not yet pass that ID to the calendar or otherwise join a booking to the intake. That linkage needs a server-backed, privacy-preserving implementation and an acceptance test before end-to-end attribution can be claimed.

### Error handling

- `400` or `422`: invalid input. The current browser displays a generic validation message and keeps the form available.
- `429`: rate limit. Return a sensible `Retry-After`; the current browser treats this as unavailable and does not yet display a dedicated wait message.
- `5xx`, network failure, timeout, malformed JSON, or a response without the valid receipt: no saved-context screen and no successful-submission event.
- A `202` response with a pending status must not unlock the calendar. If processing must be asynchronous, implement an explicit receipt-confirmation flow before changing the existing success rule.

Return bounded error codes and safe field names if needed. Do not return stack traces, provider tokens, the submitted body or private CRM details. The browser currently ignores response error text, so improved field-level errors would require a separate frontend change.

## Server adapter requirements

1. **Persistence and idempotency:** use `X-Request-Id` as an idempotency key, stored with a request fingerprint and the original receipt. An unchanged retry must return the same receipt without duplicate contacts, tasks or emails. Reject reuse with materially different content. Agree the retention window explicitly. Commit the intake and any delivery task atomically.
2. **Client retry behaviour:** the current form keeps its UUID when retrying unchanged input and generates a new UUID after any input edit. Test a timeout after persistence: a repeated request must still resolve to the existing record.
3. **CORS:** allow only the intended production origin and approved preview/development origins. Handle preflight for `POST`, `Content-Type` and `X-Request-Id`. Do not require cookies. CORS is not a substitute for validation or abuse controls.
4. **Abuse control:** enforce request/body limits, rate limits and server-side validation. Handle honeypot signals without creating a commercial lead. Add stronger controls only if operational evidence warrants them.
5. **Secret handling:** keep CRM, Amplemarket, Cal webhook, email and Slack credentials on the server. Do not put tokens in a `PUBLIC_*` variable, browser code, a query string or committed configuration.
6. **Failure recovery:** record downstream failures internally, retry through a durable queue/outbox where applicable, and surface delivery failures to the operational owner. A silent CRM failure must not disappear behind a browser success state.
7. **Data handling:** agree access, retention, deletion and reporting boundaries for intake content. Keep raw form data out of generic application logs, analytics and error-reporting payloads.

## Calendar events: click, load and confirmed booking are different

The direct fallback link opens Cal.com. With intake enabled and receipt confirmed, the current page assigns the calendar iframe URL and emits `calendar_viewed` after the iframe's `load` event. That is a UI-loading signal, not evidence of a successful booking or even that every calendar control rendered correctly.

Configure a server receiver for the appropriate booking lifecycle webhook on the actual Cal.com event. Verify the provider's current signing/authentication requirements and event schema when implementing it. Do not guess a webhook path, signature-header name or payload field from this document.

The receiver must:

- Authenticate each delivery using the provider's documented method and protect against replay.
- Deduplicate by the provider's stable booking/event identifier and event type.
- Persist the confirmed booking and its relationship to the intake or commercial record.
- Emit `call_booked` only after a genuine booking confirmation has been verified and saved.
- Distinguish a new booking, reschedule and cancellation so retries or reschedules cannot inflate the new-booking count.
- Keep attendee email, name, company and booking answers out of analytics. Private matching belongs in the server/CRM integration.

Do not interpret an iframe message from an unknown origin, a calendar link click, a loaded frame, or a thank-you URL visit as `call_booked`. If the calendar supports an agreed opaque correlation field, validate it end to end; the current website does not implement such a contract.

## Attribution and funnel measurement

The current attribution mechanism uses URL parameters. There is no confirmed Amplemarket `campaign_id` contract and no basis to claim an active CRM campaign sync.

- Allowed UTM keys: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`.
- The browser accepts values containing letters, digits, underscores, periods, spaces and hyphens, from 1 to 100 characters.
- The shared layout propagates accepted UTMs to other same-origin paths and preserves an `entry_path` when a campaign value is propagated.
- The intake calls that path `attribution.landing_page`; it strips the query string and bounds the path length. The server must normalise this value again and reject malformed paths.
- The calendar handoff currently forwards only `utm_source`, `utm_medium` and `utm_campaign`. It does not forward the receipt ID, `entry_path`, `utm_content` or `utm_term`.
- There is no country field and no implemented first-touch store across separate sessions. Do not infer that either is already available.
- Never put email addresses, names, company-specific private context or hiring notes into UTM values. Character filtering does not detect sensitive content.

`PUBLIC_ANALYTICS_SRC` separately controls whether analytics loads. Without it, frontend events are not transmitted to an analytics provider. Do not enable or install a provider as a side effect of setting the intake endpoint.

| Event | Evidence required | Current status |
| --- | --- | --- |
| `company_page_view` | A page in the `companies` journey was viewed | Emitted by the shared layout when analytics is enabled. This journey also covers investor/service pages; it is not limited to `/for-companies`. |
| `search_read_cta_click` | A tracked link to `/search-read` was clicked | Implemented for elements with `data-cta`, when analytics is enabled. |
| `search_form_started` | Input occurred in the rendered intake form | Implemented once per page instance; absent in flag-off mode. |
| `search_form_submitted` | The strict persisted receipt was returned | Implemented; a raw submit action or arbitrary `2xx` is insufficient. |
| `calendar_viewed` | The post-receipt iframe fired `load` | Implemented as a limited UI signal. The flag-off link does not emit this event. |
| `call_booked` | A verified booking lifecycle event was saved | Not connected by this branch; requires the server webhook. |
| `qualified_opportunity` | The commercial owner/system recorded the agreed qualification state | Requires a verified commercial source and deduplicated stage transition. |
| `client_closed` | The commercial owner/system recorded the agreed closed-client state | Requires a verified commercial source and deduplicated stage transition. |

Define the business meaning of qualified and closed with the commercial owner. Neither state can be inferred from traffic, a submitted form or a booked call. Agree how reversals, reopening and multiple roles at one company are represented before reporting conversion rates.

The current intake error handler reports a generic stage and error code rather than form values. Audit the broader error reporter before enabling it: the shared layout now omits query strings and fragments from its page URL. Review unexpected exception content before enabling logging. Analytics should receive only approved event metadata. No form values, CRM record IDs, receipt IDs, calendar attendee details or raw exception bodies belong in event properties or errors.

## Remaining implementation sequence

1. **Commercial owner:** confirm the source of truth, account ownership, qualification/closed definitions and required pipeline fields. Verify the July decision against the working sales process.
2. **Integration owner:** inspect the chosen system's supported interface and permissions. Document the exact field mapping, duplicate policy and whether a contact, company and/or opportunity is created. Keep any Amplemarket campaign mapping out until its contract is confirmed.
3. **Backend owner:** deploy the public server adapter with validation, persistence, idempotency, CORS, rate limits and safe errors. Provide the exact production and test URLs; do not repurpose an OA endpoint.
4. **Backend/commercial owners:** prove that a test receipt reaches the intended operational record or that durable retry recovers a simulated downstream failure. Make delivery status observable to the owner.
5. **Calendar owner:** confirm the founders-event duration, questions, notification behaviour and investor handling. Test booking, reschedule and cancellation. Configure and verify the webhook and private correlation scheme.
6. **Measurement owner:** configure the approved analytics provider separately, confirm privacy text, and verify frontend events without PII. Connect booking and commercial stage events from their real sources.
7. **Workflow owner:** decide whether acknowledgement email, Slack notification and an unbooked-lead follow-up are wanted. Specify recipients, trigger, timing, cancellation conditions and duplicate handling before implementation. Nothing in this branch enables those workflows.
8. **Release owner:** complete the acceptance tests below on a controlled test configuration, then rebuild with `PUBLIC_B2B_LEAD_ENDPOINT` set to the verified production URL. Keep the calendar fallback usable if the integration must be disabled.

## Acceptance tests

### Feature gate and form

- With no endpoint, `/search-read` shows the direct founders-calendar action; no intake POST is attempted and no saved-context claim appears.
- With a test endpoint, the form becomes usable after JavaScript initialisation. Required fields, optional timing and investor labels behave correctly.
- Invalid or whitespace-only required values are rejected by the server even if browser constraints are bypassed.
- A filled honeypot or automated direct POST does not produce a real commercial record or a false success receipt.
- Without JavaScript in the enabled mode, the user has the calendar fallback and no submission-success claim.

### Receipt, failure and retry

- A valid persisted receipt displays the calendar and fires `search_form_submitted` once for the successful submission.
- `200 { "ok": true }`, missing/blank IDs, a pending status, malformed JSON, validation error, rate limit, server error and network timeout never display “Your request is saved.”
- Failure retains entered context for retry and restores the submit button. The failure state reveals an independent direct-calendar link. The saved-context panel stays hidden, so no receipt is implied.
- A timeout after server persistence followed by an unchanged retry returns the same receipt and creates no duplicate record, notification or email.
- Editing input produces a new request ID; the server rejects an old idempotency key paired with different content.

### Attribution and privacy

- A controlled UTM test travels from a landing page through internal navigation to intake, retaining the expected query allowlist and landing path.
- Invalid/oversized parameters are rejected or dropped. Email-like or other sensitive input is never deliberately used as a UTM test value sent to analytics.
- Calendar URLs receive only the implemented UTM subset until an explicit correlation contract is added.
- Browser network inspection and server logs show no form PII in analytics/error events and no public secrets. Test unexpected-error paths as well as expected validation failures.

### Booking, commercial stages and operations

- Clicking or loading the calendar does not create `call_booked`.
- A verified booking webhook creates one saved booking and one deduplicated booked event; replay creates neither duplicates nor extra conversions.
- Rescheduling and cancellation update the same booking lifecycle and the reporting convention agreed by the team.
- A qualification change and a closed-client change come from the confirmed commercial record and can be traced to it privately.
- A CRM outage leaves an observable, retryable delivery state; recovery preserves the original receipt and duplicate policy.
- Any separately approved email/Slack/follow-up workflow is tested for one-time delivery, correct destination and suppression after booking. Do not mark these workflows complete merely because the intake endpoint works.

The intake integration is complete only when persistence, operational delivery, real bookings and agreed commercial outcomes can be reconciled. The existing calendar-only mode remains a valid working fallback while these connections are unfinished.

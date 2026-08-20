# OA lead-capture — frontend/backend contract

Branch: `feat/oa-lead-forms` (same branch name in the portal and in `ats-backend`).

The portal side is implemented and merged into that branch. This document is
the spec the backend implements against. Nothing here is live yet: with
`PUBLIC_API_ENDPOINT` unset the pages make zero network calls and show the
confirmation card directly, so the portal can ship before the endpoint exists.

## What these pages are

Three short landing pages used as the destination of LinkedIn posts. They are
**not** the Offer Acceleration application. Their only job is to move an ICP
reader to a 15-minute call without handing out a Calendly link, which today
fills the calendar with people outside the ICP.

| Path | Variant key | Audience it is posted to |
|---|---|---|
| `/offer-acceleration/preguntas` | `preguntas` | Long tenure at one company, not actively looking |
| `/offer-acceleration/te-suena` | `te_suena` | Broad or unclear intent, cannot name what they want to change |
| `/offer-acceleration/espejo` | `espejo` | Warm audience: followers, commenters, referrals, DM replies |

All three are `noindex, nofollow`, excluded from the sitemap and unlinked from
the nav and footer.

## Endpoint

```
POST {PUBLIC_API_ENDPOINT}/public/oa/leads
Content-Type: application/json
X-Request-Id: <uuid v4>
```

This is a **new** endpoint, separate from `POST /public/oa/applications`.
Do not reuse the applications table: the shapes and the lifecycle differ.

### Request body

```json
{
  "linkedin": "linkedin.com/in/someone",
  "objective": "same_role_industry_usd_offer",
  "blocker": "interviews_not_closing",
  "email": "someone@example.com",
  "phone": null,
  "audit": null,
  "variant": "preguntas",
  "source": "portal",
  "locale": "es",
  "fill_time_ms": 7911,
  "website": ""
}
```

| Field | Type | Notes |
|---|---|---|
| `linkedin` | string, required | Free text, trimmed. Not validated as a URL client-side; people paste handles, full URLs and `www.` variants. Normalize server-side. |
| `objective` | string, required | One key from the objective enum below. |
| `blocker` | string \| null | One key from the blocker enum. Always `null` on `espejo`, which does not ask it. |
| `email` | string \| null | Optional. `null`, never `""`, when skipped. |
| `phone` | string \| null | Optional WhatsApp number. `null`, never `""`, when skipped. |
| `audit` | object \| null | Only sent by `espejo`. See below. `null` on the other two variants. |
| `variant` | string, required | `preguntas` \| `te_suena` \| `espejo`. Which page produced the lead. |
| `source` | string | Always `"portal"`, matching the existing logging contract. |
| `locale` | string | Always `"es"` today. The pages are Spanish-only; an EN route would send `"en"`. |
| `fill_time_ms` | integer | Milliseconds from first render to submit. Useful as a bot signal: a human takes seconds, not milliseconds. |
| `website` | string | **Honeypot.** Must arrive empty. If non-empty, reject the lead (return 2xx so the bot sees success, but do not store it). |

At least one of `email`, `phone` may be absent; `linkedin` is the guaranteed
contact channel and the success copy promises contact "por email o LinkedIn".

### `audit` object (variant `espejo` only)

The seven self-audit answers, keyed by stable question id. Each value is
`"yes"`, `"no"` or `"unknown"`. Partially answered audits are sent as-is, and
the key is omitted for unanswered questions. The whole object is `null` if the
reader answered nothing.

```json
{
  "keywords":      "yes",
  "headline":      "no",
  "results":       "unknown",
  "story":         "yes",
  "us_interview":  "no",
  "salary_answer": "yes",
  "referral":      "unknown"
}
```

Question ids, in page order, and what each one asks:

| id | Question |
|---|---|
| `keywords` | Knows the search terms a recruiter would use, and whether the profile has them |
| `headline` | LinkedIn headline written for the next role, not the current one |
| `results` | Experience shows numbers and results rather than duties |
| `story` | Can tell their change of industry / freelance / country in a minute without it sounding like an excuse |
| `us_interview` | Knows what a US startup interview actually measures |
| `salary_answer` | Has an answer ready for "what is your salary expectation?" |
| `referral` | Someone inside the target market can vouch for them |

Anything that is not `"yes"` is shown to the reader in red as a gap. This is
copy, not a score, and no scoring happens client-side. The value to the team is
that whoever takes the call already knows which filters the person flagged.

### Response

```json
{ "data": { "id": "<lead id>", "status": "received" } }
```

The portal only checks `res.ok`. Any 2xx shows the same confirmation card
("Recibimos tu aplicación"), any non-2xx shows a retry card. **There is no
accepted/rejected branch here** — that is deliberate. Unlike the OA apply form,
these pages must never tell someone they are not a fit; the whole design goal
is that the reader does not feel judged. If you later want scoring, do it
server-side and keep it out of the response.

## Option key registry additions

`objective` reuses four keys already in the OA apply form's `objective` field
and adds five. Labels differ per page; only the keys are the contract.

| Key | Status |
|---|---|
| `change_industry` | reused |
| `change_role_or_career` | reused |
| `same_role_industry_usd_offer` | reused |
| `level_up_seniority` | reused |
| `unclear` | reused |
| `freelance_to_stable_role` | **new** |
| `chaos_to_structure` | **new** |
| `undervalued_at_current_job` | **new** |
| `other` | **new** |

`blocker` is a new enum, all four keys new:

| Key | Meaning |
|---|---|
| `no_recruiter_contact` | Recruiters rarely reach out |
| `interviews_not_closing` | Reaches interviews but does not close |
| `cannot_tell_my_story` | Cannot narrate their own trajectory |
| `english_under_pressure` | English under interview pressure |

Not every variant renders every key: `preguntas` and `espejo` show the six
"next move" options, `te_suena` shows six situation-shaped options. Accept the
full union on all variants so copy can be reworded without a backend change.

## Constraints the backend should honor

1. **Reject on a non-empty `website`,** but answer 2xx. Silent rejection keeps
   bots from probing for the check.
2. **Treat `fill_time_ms` under ~2000 as suspicious.** A human cannot read the
   page and fill the form that fast.
3. **Never email the applicant an automated rejection.** These leads are worked
   by hand.
4. **Store `variant`.** It is the whole point of shipping three pages: it tells
   us which LinkedIn framing converts, and it tells whoever takes the call
   which framing the person already read.
5. **No PII in logs.** The portal reports submit failures to
   `POST {PUBLIC_LOG_ENDPOINT}/logs/client` with only the HTTP status, the
   request id and the variant. Keep server-side logging to the same standard.
6. **CORS** must allow the portal origin for `POST` with the `X-Request-Id`
   header, otherwise every submission fails the preflight.
7. **Rate limit by IP.** These URLs are posted publicly on LinkedIn.

## Turning it on

Set `PUBLIC_API_ENDPOINT` in the portal's build environment once the endpoint
is deployed. No portal code change is needed: the pages read the same env var
the OA apply form and the roles pages already use. Until then the forms are
inert and confirm to the reader without sending anything, so publishing the
pages early costs nothing.

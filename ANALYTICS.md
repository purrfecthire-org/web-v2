# Purrfect Hire · Behavioural Analytics Design

> Status: **design only, not implemented.** Decisions locked 2026-08-03.
> Spans two repos: this marketing site (beacon) and the ATS backend (ingest, storage, reporting).

## 1. Decisions

| Decision | Choice | Consequence |
|---|---|---|
| Consent banner | **No** | Cookieless architecture is mandatory, not optional |
| Legal basis | GDPR Art. 6(1)(f) legitimate interest | A written LIA must exist before go-live |
| Where data lives | **Custom, inside the ATS** | No third-party analytics processor, no DPA to sign |
| Session replay / heatmaps | **Out of scope** | Aggregate signals only: scroll, section visibility, clicks |
| Paid ad pixels (Meta, LinkedIn, Google) | **None** | Revisit this whole document if that changes |
| Country | Yes, from Vercel geo headers | IP never persisted |

**The one rule that everything else follows from:** nothing is ever written to or read from
the visitor's device. No cookie, no `localStorage`, no `sessionStorage`, no IndexedDB, no
fingerprinting. The moment any of those appear, ePrivacy Art. 5(3) fires and a consent
banner becomes legally mandatory. There is exactly one exception, documented in §9.

## 2. Legal basis, in short

Two separate regimes, both must be cleared.

**ePrivacy Directive Art. 5(3)**, implemented in Estonia's Electronic Communications Act:
consent is required to store information on, or read information from, terminal equipment.
This is not about personal data, it is about the device. Analytics never qualifies for the
"strictly necessary" exemption. By storing nothing on the device, this article is not
triggered and no banner is required.

Note that the EDPB's Guidelines 2/2023 (final, October 2024) read Art. 5(3) broadly:
tracking pixels and URL-embedded identifiers are also caught. The rule is "no identifier
that lives on or is extracted from the device", not merely "no cookie file".

**GDPR Art. 6**: IP address is personal data (CJEU *Breyer*, C-582/14), so a lawful basis
is still needed even with no banner. That basis is legitimate interest, and it cannot
substitute for consent under Art. 5(3). It only works because we avoided the storage.

**GDPR Art. 13**: transparency is unconditional. The privacy policy must describe this
system accurately whether or not a banner exists. Informing is mandatory; asking is not.

**GDPR Art. 21**: under legitimate interest, the visitor has an absolute right to object.
An opt-out must exist. See §9.

Direction of travel: the ePrivacy Regulation was withdrawn in Feb 2025; the Digital Omnibus
(Nov 2025, in trilogue as of mid-2026) proposes an EU-wide exemption for first-party
aggregated audience measurement plus binding browser-level signals. This design is already
compatible with both.

### Conditions this design must keep true

These are what make the legitimate-interest balancing test pass. Breaking any one of them
reopens the banner question.

1. First party only. No data leaves Purrfect Hire infrastructure.
2. Aggregated reporting. No screen in the ATS ever shows an individual visitor's journey.
3. No cross-site tracking. Measurement is scoped to `purrfecthire.com`.
4. No joining web events to an identified person (applicant, candidate, client contact).
5. No raw IP, no raw user-agent string, no email, no form field values, persisted anywhere.
6. Session linkage capped at 24 hours by construction (§4).
7. Retention: raw events 90 days, aggregates indefinitely.
8. A functioning opt-out (§9).

Point 4 deserves emphasis. It is technically trivial to stamp a `session_hash` onto a
submitted application and unlock "this candidate read the pricing page twice". Doing so
converts anonymous audience measurement into individual profiling, changes the lawful-basis
analysis entirely, and would require consent. The ingest endpoint and the applications
endpoint must stay architecturally separate.

## 3. Architecture

The site is deployed to **GitHub Pages**: fully static, no server, no middleware, no access
to server logs. Every signal must therefore be a client-side beacon to an external ingest.
That ingest is the existing ATS on Vercel.

```
  Browser (purrfecthire.com, GitHub Pages)
    src/layouts/Layout.astro
      inline beacon script, ~1.5 KB, no dependencies
      buffers events in memory, flushes via navigator.sendBeacon
        │
        │  POST {PUBLIC_ANALYTICS_ENDPOINT}/public/events
        │  X-Request-Id: <uuid>
        ▼
  ATS backend (Vercel)
    edge: reads x-vercel-ip-country, discards IP after rate-limit check
    validates against event allowlist, filters bots, computes session_hash
        │
        ▼
  Postgres (EU region)
    web_events (raw, 90d)  ──nightly rollup──▶  web_events_daily, funnel_daily (kept)
        │
        ▼
  ATS dashboard: founder funnel · talent funnel · section drop-off
```

### Env gating

Follows the existing `PUBLIC_LOG_ENDPOINT` pattern exactly: when
`PUBLIC_ANALYTICS_ENDPOINT` is unset or empty, the entire block no-ops and the site makes
zero network calls. A separate variable from `PUBLIC_API_ENDPOINT` so analytics can be
disabled without taking down the roles list or the application forms.

```
# .env.example addition
# PUBLIC_ANALYTICS_ENDPOINT=https://api.purrfecthire.com
```

## 4. Session identity without touching the device

Computed **server-side**, on ingest:

```
session_hash = sha256( daily_salt || client_ip || user_agent || site_id )
```

- `daily_salt` is generated on the server, rotated every 24 hours, and the previous salt is
  destroyed. It never reaches the browser.
- `client_ip` and `user_agent` exist only in memory for the duration of the hash. Neither is
  ever written to disk or to the database.
- Once the salt rotates, yesterday's hashes are unlinkable to today's. Sessions cannot span
  more than 24 hours as a matter of mathematics rather than policy.

This is the mechanism that makes funnels possible with no banner. It is also why
cross-day journeys and returning-visitor metrics are genuinely unavailable: that is the
trade, and it was made deliberately.

Salt rotation must not be a naive `date()` boundary, or every session straddling midnight
UTC breaks. Keep the previous salt available for a 2-hour grace window when resolving an
incoming hash, then discard it.

## 5. Event taxonomy

Fourteen events. Deliberately small: every event must map to a business question someone
will actually act on. Adding a fifteenth requires naming the decision it informs.

| Event | Properties | Question it answers |
|---|---|---|
| `page_view` | `path`, `locale`, `referrer_host`, `utm_*` | Traffic, entry points, sources |
| `section_view` | `section_id`, `path` | Which sections are actually seen |
| `scroll_depth` | `bucket` (25/50/75/100), `path` | Where reading stops |
| `cta_click` | `cta_id`, `section_id`, `destination` | Which CTA copy and placement wins |
| `nav_click` | `link_id` | What founders vs talent go looking for |
| `lang_toggle` | `from`, `to`, `path` | Is the ES audience larger than assumed |
| `pricing_tier_view` | `tier_id` | Which price point holds attention |
| `role_list_view` | `result_count` | |
| `role_detail_view` | `role_slug` | Which roles pull traffic |
| `form_start` | `form_id` | Top of the form funnel |
| `form_field_complete` | `form_id`, `field_name` | **Where the form dies** |
| `form_abandon` | `form_id`, `last_field` | |
| `form_submit_attempt` | `form_id` | Attempted vs succeeded, catches validation walls |
| `form_submit_success` | `form_id` | True conversion |
| `outbound_click` | `destination_host` | Calendly, LinkedIn, WhatsApp |

**`form_field_complete` carries field NAMES only, never field VALUES.** This is the single
highest-risk event in the taxonomy. It must be implemented against an explicit allowlist of
field names, and the ingest must reject any payload whose `props` contain a value resembling
an email, phone number or free text.

### The two funnels being instrumented

**Founders** (B2B, low volume, high value):
`/` or `/for-founders` → `/pricing` → `/kate` → book-a-call `outbound_click`

Primary question: of founders who reach `/pricing`, what share click the CTA, and does
having read `/kate` first change that rate? If it does, Kate's credibility belongs inline on
the pricing page. Secondary: do they scroll past "Why 2026 is Different", or is the
positioning argument losing them.

**Talent** (B2C, higher volume):
`/` or `/for-talent` → `/offer-acceleration` → `/offer-acceleration/apply` → submit
and separately `/roles` → `/roles/[slug]` → apply

Primary question: of people who open the OA apply form, how many submit, and which field is
the cliff. `src/pages/offer-acceleration/apply.astro` is a long form; field-level
abandonment turns that into a one-afternoon fix.

## 6. Wire contract

Mirrors the existing `/logs/client` envelope so both endpoints feel like one API.

```
POST {PUBLIC_ANALYTICS_ENDPOINT}/public/events
Content-Type: application/json
X-Request-Id: <uuid v4>

{
  "events": [
    {
      "event_id":   "<uuid v4, client-generated, for idempotent retry>",
      "event_name": "cta_click",
      "occurred_at": "2026-08-03T14:22:31.004Z",
      "path":       "/pricing",
      "locale":     "en",
      "referrer_host": "google.com",
      "viewport":   "lg",
      "props":      { "cta_id": "pricing_primary", "section_id": "tiers" }
    }
  ]
}
```

- Max 20 events per request, matching the existing `logs/client` cap.
- `event_id` is client-generated so `sendBeacon` retries and duplicate flushes dedup on a
  unique index rather than double-counting.
- Query strings are stripped from `path` except for `utm_*` parameters, which are lifted
  into `props` on `page_view` only.
- `referrer_host` is the host only. Full referrer URLs can carry search queries and
  occasionally personal data, so they are never sent.
- Response is `204 No Content`. The beacon ignores the body entirely.

Failures report through the existing shared reporter at `{PUBLIC_LOG_ENDPOINT}/logs/client`
with `source: "portal"`, per the convention in `CLAUDE.md`. Guard against the obvious loop:
a failing analytics call must not itself generate an analytics event.

## 7. Storage

```sql
-- raw, 90 day retention
web_events (
  event_id        uuid primary key,      -- client-generated, dedups retries
  occurred_at     timestamptz not null,
  received_at     timestamptz not null,
  session_hash    text not null,         -- 24h rotating, see §4
  event_name      text not null,         -- allowlist-enforced
  path            text not null,
  locale          text,                  -- 'en' | 'es'
  referrer_host   text,                  -- host only
  country         text,                  -- x-vercel-ip-country, IP discarded
  device_class    text,                  -- 'mobile' | 'tablet' | 'desktop'
  viewport_bucket text,
  props           jsonb                  -- schema-validated per event_name
)
-- index on (occurred_at), (session_hash, occurred_at), (event_name, occurred_at)
```

Columns that must never exist here: `ip`, `user_agent`, `user_id`, `candidate_id`,
`email`, `referrer` (full URL). If a column cannot be justified against a named business
question, it does not get added.

Nightly rollups, retained indefinitely:

- `web_events_daily` — day, path, locale, country, device_class, event_name, count,
  distinct sessions
- `funnel_daily` — day, funnel_id (`founders` | `talent_oa` | `talent_roles`), step_index,
  sessions_entered, sessions_advanced
- `section_engagement_daily` — day, path, section_id, views, median dwell ms, scroll pass rate

Raw rows older than 90 days are deleted by a scheduled job. The aggregates are what the
dashboard reads, which is both a privacy property and a performance one.

**Region: the database must be in the EU.** The Supabase project currently on the account
(`lxjsnxamzqnmzidffltb`) is in `us-east-2`. If analytics lands there, a US transfer joins
the analysis for no benefit whatsoever. Pick an EU region at creation time; it cannot be
changed later.

## 8. Ingest hardening

In priority order. Items 3 and 4 are the ones custom builds consistently underestimate:
without bot filtering, 30 to 50% of "traffic" is crawlers and every number is fiction.

1. **Origin allowlist.** Reject anything whose `Origin` is not `https://purrfecthire.com`.
   CORS configured to match. Note this is a speed bump, not security: it stops casual noise.
2. **Payload limits.** Max 20 events, max 8 KB body, max 40 chars per property value.
3. **Event allowlist.** `event_name` must be one of the fourteen. `props` validated against
   a per-event schema, unknown keys dropped rather than stored. This stops a scraper writing
   arbitrary rows into the table.
4. **Bot filtering**, layered:
   - Server: user-agent regex (`bot|crawl|spider|slurp|headless|lighthouse|pingdom|curl|
     wget|python-requests|axios|node-fetch|preview`), applied before hashing.
   - Client: skip entirely when `navigator.webdriver` is true.
   - Client: skip when the document is prerendering or `visibilityState` is `hidden` at load.
   - Server: discard sessions that produced only a `page_view` and nothing else within
     500 ms, which is the signature of a headless fetch.
5. **Rate limiting.** Per session_hash (200 events/hour) and per IP (60 requests/minute).
   The IP is used transiently for the limit check and never persisted, which is consistent
   with §1.
6. **Idempotency.** Unique index on `event_id`, conflicts ignored.
7. **Clock skew.** Reject `occurred_at` more than 24 hours from `received_at`; clamp small
   deviations rather than trusting client clocks.

## 9. Opt-out, and the one permitted device write

Legitimate interest carries an absolute right to object (GDPR Art. 21), so an opt-out is
mandatory. It lives in the privacy policy as a visible control, in both EN and ES.

Implementation: clicking opt-out writes `ph_analytics_optout=1` to `localStorage`, and the
beacon checks for it before doing anything.

This is the single exception to the no-device-storage rule, and it is defensible: the write
happens only at the user's explicit request, in direct service of a function they asked for,
which is the "strictly necessary" exemption in Art. 5(3). It never happens for a visitor who
has not opted out, so the default path remains storage-free. Document the reasoning in the
LIA so it is not mistaken later for an inconsistency.

Additionally, and for free: honour `navigator.globalPrivacyControl` and `DNT: 1` by not
sending. Cheap, strengthens the balancing test, and forward-compatible with the Digital
Omnibus proposal to make browser-level signals binding.

## 10. Client beacon constraints

`CLAUDE.md` sets a hard performance bar and this script must not breach it.

- **Inline in `src/layouts/Layout.astro`**, alongside the existing scroll-reveal observer
  and error reporter. No new dependency, no separate request, no framework island.
- **Budget: under 2 KB** of shipped script. If it grows past that, cut events.
- **Batch, never fire per event.** Buffer in memory; flush on `visibilitychange` →
  `hidden`, on `pagehide`, and on a 15-second idle timer. A per-event request would wreck
  the mobile LCP the whole project has been optimised for.
- **`navigator.sendBeacon`, with `fetch(..., {keepalive: true})` as fallback**, reusing the
  exact pattern already at `Layout.astro:125`.
- **Reuse the single shared IntersectionObserver** for `section_view` and `scroll_depth`
  rather than adding a second one. `CLAUDE.md` is explicit that per-component observers are
  not allowed, and the same reasoning applies here.
- **Wrapped in try/catch throughout.** The beacon must never be able to break the page. Same
  discipline as the error reporter.
- Passive scroll listeners only, `requestIdleCallback` for non-urgent work.

## 11. Documentation changes required before go-live

**The privacy policy currently over-declares and must be rewritten.**
`src/pages/privacy-policy.astro:60` claims collection of "IP address, browser type, pages
visited, and referring URLs, collected through cookies and similar technologies", and line 95
claims sharing with "analytics and messaging providers such as Meta". None of that is true
today, and none of it will be true under this design. Both EN and ES versions need to
describe: what is measured, that it is first-party and aggregated, that no cookies are used,
that no data is shared, the 90-day raw retention, the legitimate-interest basis, and the
opt-out control.

**Write the LIA.** One page: the interest (improving a site that serves two distinct
audiences), the necessity (no less intrusive way to find drop-off), the balancing (no
identifiers, no device storage, no sharing, capped linkage, opt-out available). Keep it on
file. This is the document that justifies the absence of a banner.

**Unrelated but blocking, in my view:** `src/layouts/Layout.astro:65-70` loads
Schibsted Grotesk from `fonts.googleapis.com`, transmitting every visitor's IP to Google in
the US on every page load. A Munich court ruled this a GDPR violation in Jan 2022 and it
drove a wave of German claim letters. Self-hosting via `@fontsource` fixes it and improves
LCP. It would be strange to ship a privacy-preserving measurement system onto a page that
leaks IPs to Google for a font.

## 12. Build order

| Phase | Scope | Rough effort |
|---|---|---|
| 0 | Self-host fonts. Rewrite both privacy policies. Write the LIA. | ~1 day |
| 1 | ATS: `POST /public/events`, salt rotation, bot filter, allowlist, `web_events` table in an EU region | 2 to 3 days |
| 2 | Site: inline beacon in `Layout.astro`, `page_view` + `cta_click` + `scroll_depth` only | 1 day |
| 3 | Site: remaining events, notably the form funnel on the OA apply page | 1 day |
| 4 | ATS: nightly rollup jobs, retention job | 1 day |
| 5 | ATS: dashboard, founder funnel · talent funnel · section drop-off | 2 to 3 days |

Ship phases 1 and 2 first and let them run for two weeks before building the dashboard.
Raw SQL against `web_events` will answer the early questions, and two weeks of real traffic
will change your mind about which charts are worth building.

## 13. Open questions for the ATS side

1. What language and framework is the ATS backend, and does it already have a job scheduler
   for the rollup and retention jobs?
2. Which database, and what region is it actually in?
3. Is there an existing admin dashboard surface these charts can live in, or does one need
   building?
4. Does `POST /logs/client` already have rate limiting and an origin allowlist that
   `/public/events` can reuse?
5. Is there an existing migration workflow for schema changes?

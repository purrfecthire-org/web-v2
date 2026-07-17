// ─────────────────────────────────────────────────────────────────────────────
// Public Roles portal — shared types, fetchers, formatters and card renderer.
//
// This module is used in BOTH contexts:
//   • build time (Astro frontmatter / getStaticPaths) — prerender for SEO
//   • client time (inline <script> refresh) — pick up mid-week publishes
// so it must stay framework-free (no Astro imports) and rely only on globals
// available in Node ≥22 and the browser (fetch, crypto.randomUUID).
//
// Field names mirror EXACTLY the backend contract in
// ats-backend/docs/BC_PublicRolesPortal.md — do not rename without updating it.
// Company identity is NEVER present in these DTOs; `company_label` is the only
// company-adjacent string ever shown.
// ─────────────────────────────────────────────────────────────────────────────

import { renderMarkdown } from './markdown';

export interface PublicSalary {
  min: number | null;
  max: number | null;
  currency: string | null;
}

export interface PublicAward {
  label: string;
  year?: string | null;
  source?: string | null;
}

export interface PublicCompanyProfile {
  industry: string | null;
  size: string | null;
  founded: string | null;
  funding: string | null;
  yc_batch: string | null;
  strengths: string[];
  awards: PublicAward[];
}

export interface PublicRoleListItem {
  slug: string;
  title: string;
  company_label: string;
  location: string | null;
  country: string | null;
  country_code: string | null;
  work_model: 'remote' | 'hybrid' | 'on-site' | null;
  contract_type: string | null;
  salary: PublicSalary | null;
  tags: string[];
  english_level: string | null;
  yc_batch: string | null;
  posted_at: string;
}

export interface PublicRoleDetail extends PublicRoleListItem {
  public_description: string;
  company_profile: PublicCompanyProfile | null;
  apply_path: string;
}

// ── Config ───────────────────────────────────────────────────────────────────

/** Backend base URL (trailing slashes stripped). Empty string ⇒ no backend. */
export function apiBase(): string {
  return String(import.meta.env.PUBLIC_API_ENDPOINT ?? '').replace(/\/+$/, '');
}

/** Log intake base URL (optional, best-effort failure reporting). */
export function logBase(): string {
  return String(import.meta.env.PUBLIC_LOG_ENDPOINT ?? '').replace(/\/+$/, '');
}

function requestId(): string {
  try {
    return globalThis.crypto.randomUUID();
  } catch {
    // Fallback for exotic runtimes without crypto.randomUUID.
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (ch) => {
      const r = (Math.random() * 16) | 0;
      const v = ch === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}

// ── Fetchers (used build-time AND client-time) ───────────────────────────────

/** GET /public/roles → PublicRoleListItem[]. Throws on missing config / non-2xx. */
export async function fetchRoles(): Promise<PublicRoleListItem[]> {
  const base = apiBase();
  if (!base) throw new Error('PUBLIC_API_ENDPOINT is not set');
  const res = await fetch(`${base}/public/roles`, {
    headers: { 'X-Request-Id': requestId() },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  return Array.isArray(json?.data) ? (json.data as PublicRoleListItem[]) : [];
}

/** Error thrown by fetchRole() on a non-2xx response; carries the HTTP status
 *  so callers can special-case 404 (role unpublished/closed) vs other failures
 *  (network/5xx) without parsing the message string. */
export class FetchRoleError extends Error {
  status: number;
  constructor(status: number) {
    super(`HTTP ${status}`);
    this.name = 'FetchRoleError';
    this.status = status;
  }
}

/** GET /public/roles/{slug} → PublicRoleDetail. Throws on missing config / non-2xx. */
export async function fetchRole(slug: string): Promise<PublicRoleDetail> {
  const base = apiBase();
  if (!base) throw new Error('PUBLIC_API_ENDPOINT is not set');
  const res = await fetch(`${base}/public/roles/${encodeURIComponent(slug)}`, {
    headers: { 'X-Request-Id': requestId() },
  });
  if (!res.ok) throw new FetchRoleError(res.status);
  const json = await res.json();
  if (!json?.data) throw new Error('Malformed response envelope');
  return json.data as PublicRoleDetail;
}

// ── Formatters ───────────────────────────────────────────────────────────────

export function escapeHtml(s: string): string {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** "remote" + "Full-time" → "Remote · Full-time"; hide absent parts. */
export function workContractLine(r: {
  work_model: string | null;
  contract_type: string | null;
}): string | null {
  const parts: string[] = [];
  if (r.work_model) parts.push(capitalize(r.work_model));
  if (r.contract_type) parts.push(r.contract_type);
  return parts.length ? parts.join(' · ') : null;
}

/** Salary → "80,000–120,000 USD"; null ⇒ null (never a placeholder). */
export function formatSalary(s: PublicSalary | null | undefined): string | null {
  if (!s) return null;
  const { min, max, currency } = s;
  if (min == null && max == null) return null;
  const cur = currency ? ` ${currency}` : '';
  const n = (v: number) => v.toLocaleString('en-US');
  if (min != null && max != null) return `${n(min)}–${n(max)}${cur}`;
  if (min != null) return `From ${n(min)}${cur}`;
  return `Up to ${n(max as number)}${cur}`;
}

/** ISO date → "New" / "3d ago" / "2w ago" / "1mo ago". */
export function formatPosted(iso: string): string {
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return '';
  const days = Math.floor((Date.now() - then) / 86_400_000);
  if (days <= 0) return 'New';
  if (days === 1) return '1d ago';
  if (days < 7) return `${days}d ago`;
  const weeks = Math.floor(days / 7);
  if (days < 30) return weeks === 1 ? '1w ago' : `${weeks}w ago`;
  const months = Math.floor(days / 30);
  return months <= 1 ? '1mo ago' : `${months}mo ago`;
}

// ── Card renderer (single source of truth for build + client) ────────────────

const PIN_SVG =
  '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">' +
  '<path d="M7 1.5C4.51 1.5 2.5 3.51 2.5 6c0 3.75 4.5 6.5 4.5 6.5S11.5 9.75 11.5 6c0-2.49-2.01-4.5-4.5-4.5Zm0 6.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" fill="currentColor"/></svg>';

const ARROW_SVG =
  '<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
  '<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/** Full <a> card markup for one role. Used both at build time (set:html) and by
 *  the client refresh script, so the two never drift. All dynamic strings are
 *  HTML-escaped. */
export function roleCardHTML(r: PublicRoleListItem): string {
  const segs: string[] = [];
  if (r.location) segs.push(`<span class="rl__meta">${PIN_SVG}${escapeHtml(r.location)}</span>`);
  const wl = workContractLine(r);
  if (wl) segs.push(`<span class="rl__meta">${escapeHtml(wl)}</span>`);
  const sal = formatSalary(r.salary);
  if (sal) segs.push(`<span class="rl__meta rl__meta--salary">${escapeHtml(sal)}</span>`);
  const metaRow = segs.join('<span class="rl__meta-dot" aria-hidden="true"></span>');

  const tags = (r.tags ?? [])
    .map((t) => `<span class="rl__tag">${escapeHtml(t)}</span>`)
    .join('');

  const ycBadge = r.yc_batch
    ? '<span class="rl__yc"><span class="rl__yc-mark" aria-hidden="true">Y</span>YC</span>'
    : '';
  const englishPill = r.english_level
    ? `<span class="rl__english">English ${escapeHtml(r.english_level)}</span>`
    : '';

  return (
    `<a href="/roles/${encodeURIComponent(r.slug)}" class="rl__card">` +
    '<div class="rl__card-accent" aria-hidden="true"></div>' +
    '<div class="rl__card-top">' +
    `<span class="rl__card-company">${escapeHtml(r.company_label)}</span>` +
    `<span class="rl__card-posted">${escapeHtml(formatPosted(r.posted_at))}</span>` +
    '</div>' +
    `<h2 class="rl__card-title">${escapeHtml(r.title)}</h2>` +
    (metaRow ? `<div class="rl__card-meta">${metaRow}</div>` : '') +
    (tags ? `<div class="rl__tags">${tags}</div>` : '') +
    '<div class="rl__card-foot">' +
    `<div class="rl__badges">${ycBadge}${englishPill}</div>` +
    `<span class="rl__view">View role ${ARROW_SVG}</span>` +
    '</div>' +
    '</a>'
  );
}

// ── Teaser card renderers (home + for-talent "open roles" sections) ─────────
// Same field-mapping/hide-when-null rules as roleCardHTML above, but matched
// to each section's own distinct markup/CSS (never the /roles grid card).
// Company identity rule applies here too: company_label is always shown
// generically (when shown at all) — these two teasers don't show it.

/** `.v6-talent__role` scroller card (V6TalentBlock.astro, home page). */
export function v6RoleTeaserHTML(r: PublicRoleListItem): string {
  const topSegs: string[] = [];
  const wl = workContractLine(r);
  if (wl) topSegs.push(`<span class="v6-talent__role-tag eyebrow">${escapeHtml(wl)}</span>`);
  const sal = formatSalary(r.salary);
  if (sal) topSegs.push(`<span class="v6-talent__role-comp">${escapeHtml(sal)}</span>`);
  const top = topSegs.length ? `<div class="v6-talent__role-top">${topSegs.join('')}</div>` : '';

  const stage = r.location
    ? `<p class="v6-talent__role-stage caption">${escapeHtml(r.location)}</p>`
    : '';

  const stack = (r.tags ?? [])
    .map((t) => `<span class="v6-talent__skill">${escapeHtml(t)}</span>`)
    .join('');

  return (
    `<a href="/roles/${encodeURIComponent(r.slug)}" class="v6-talent__role" ` +
    `aria-label="${escapeHtml(r.title)} — View role">` +
    top +
    `<h4 class="v6-talent__role-title">${escapeHtml(r.title)}</h4>` +
    stage +
    (stack ? `<div class="v6-talent__role-stack">${stack}</div>` : '') +
    '</a>'
  );
}

/** `.ft-roles__card` grid card (TalentBody.astro, /for-talent page). */
export function ftRoleCardHTML(r: PublicRoleListItem): string {
  const metaSegs: string[] = [];
  if (r.location) metaSegs.push(escapeHtml(r.location));
  const wl = workContractLine(r);
  if (wl) metaSegs.push(escapeHtml(wl));
  const meta = metaSegs.join(' · ');

  const sal = formatSalary(r.salary);
  const compHtml = sal ? `<span class="ft-roles__card-comp">${escapeHtml(sal)}</span>` : '';

  const stack = (r.tags ?? [])
    .map((t) => `<span class="ft-roles__skill">${escapeHtml(t)}</span>`)
    .join('');

  return (
    '<article class="ft-roles__card">' +
    '<div class="ft-roles__card-head">' +
    `<span class="ft-roles__card-title">${escapeHtml(r.title)}</span>` +
    compHtml +
    '</div>' +
    (meta ? `<span class="ft-roles__card-meta caption">${meta}</span>` : '') +
    (stack ? `<div class="ft-roles__card-stack">${stack}</div>` : '') +
    `<a href="/roles/${encodeURIComponent(r.slug)}" class="ft-roles__card-cta">View role →</a>` +
    '</article>'
  );
}

// ── Detail renderers (single source of truth for build + client) ────────────
// RoleDetailV2.astro renders these at BUILD time via set:html; the client
// refresh script (same component) calls them again after fetchRole() resolves
// and swaps the two container innerHTMLs. The apply FORM markup (fields,
// honeypot, submit handling) is NOT part of these renderers — it stays static
// in RoleDetailV2.astro and is never replaced, so its listeners always work.
// HIDE-ABSENT-FIELDS RULE applies here exactly as it does at build time.

const AWARD_SVG =
  '<svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">' +
  '<path d="M7 1.5 8.7 5l3.8.5-2.8 2.7.7 3.8L7 10.2 3.6 12l.7-3.8L1.5 5.5 5.3 5 7 1.5Z" fill="currentColor"/></svg>';

const CHECK_SVG =
  '<svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">' +
  '<path d="M11.5 4 6 9.5 3 6.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const ENGLISH_SVG =
  '<svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">' +
  '<circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="1.2"/>' +
  '<path d="M1.5 7h11M7 1.5c1.6 1.6 1.6 9.4 0 11M7 1.5c-1.6 1.6-1.6 9.4 0 11" stroke="currentColor" stroke-width="1.1"/></svg>';

function factLi(key: string, val: string, accent = false): string {
  return (
    '<li class="rv2__fact">' +
    `<span class="rv2__fact-key">${escapeHtml(key)}</span>` +
    `<span class="rv2__fact-val${accent ? ' rv2__fact-val--accent' : ''}">${escapeHtml(val)}</span>` +
    '</li>'
  );
}

/** Contents of `.rv2__rail-inner` (company/title/facts/YC badge/apply anchor). */
export function roleRailHTML(role: PublicRoleDetail): string {
  const cp = role.company_profile;
  const workLine = workContractLine(role);
  const salaryText = formatSalary(role.salary);
  const ycBatch = cp?.yc_batch ?? role.yc_batch ?? null;

  const facts: string[] = [];
  if (role.location) facts.push(factLi('Location', role.location));
  if (workLine) facts.push(factLi('Work type', workLine));
  if (salaryText) facts.push(factLi('Salary', salaryText));
  if (role.english_level) facts.push(factLi('English', role.english_level, true));
  if (cp?.size) facts.push(factLi('Team', cp.size));
  if (cp?.founded) facts.push(factLi('Founded', cp.founded));
  if (cp?.funding) facts.push(factLi('Funding', cp.funding));

  const ycHtml = ycBatch
    ? `<span class="rv2__yc"><span class="rv2__yc-mark" aria-hidden="true">Y</span>Y Combinator · ${escapeHtml(ycBatch)}</span>`
    : '';

  return (
    `<span class="rv2__company">${escapeHtml(role.company_label)}</span>` +
    `<h1 class="rv2__title">${escapeHtml(role.title)}</h1>` +
    `<ul class="rv2__facts">${facts.join('')}</ul>` +
    ycHtml +
    `<a href="#apply" class="rv2__apply">Apply for this role${ARROW_SVG}</a>` +
    '<p class="rv2__rail-note">Company details are shared after your intro call.</p>'
  );
}

/** Contents of `#rv2-readonly` (Company + Role sections, no apply form). */
export function roleReadOnlyContentHTML(role: PublicRoleDetail): string {
  const cp = role.company_profile;
  const descHtml = renderMarkdown(role.public_description);

  let companySection = '';
  if (cp) {
    const awards = (cp.awards ?? [])
      .map(
        (a) =>
          `<span class="rv2__award">${AWARD_SVG}${escapeHtml(a.label)}` +
          `${a.year ? ` ${escapeHtml(a.year)}` : ''}${a.source ? ` · ${escapeHtml(a.source)}` : ''}</span>`
      )
      .join('');
    const strengths = (cp.strengths ?? [])
      .map((s) => `<span class="rv2__strength">${CHECK_SVG}${escapeHtml(s)}</span>`)
      .join('');

    companySection =
      '<section class="rv2__block">' +
      '<span class="rv2__eyebrow">The Company</span>' +
      (cp.industry ? `<p class="rv2__industry">${escapeHtml(cp.industry)}</p>` : '') +
      (awards ? `<div class="rv2__awards">${awards}</div>` : '') +
      (strengths ? `<div class="rv2__strengths">${strengths}</div>` : '') +
      '</section>' +
      '<div class="rv2__rule" aria-hidden="true"></div>';
  }

  const tags = (role.tags ?? [])
    .map((t) => `<span class="rv2__skill">${escapeHtml(t)}</span>`)
    .join('');

  const englishBlock = role.english_level
    ? `<div class="rv2__english">${ENGLISH_SVG}Minimum English required: <strong>${escapeHtml(role.english_level)}</strong></div>`
    : '';

  const roleSection =
    '<section class="rv2__block">' +
    '<span class="rv2__eyebrow rv2__eyebrow--role">The Role</span>' +
    (tags ? `<div class="rv2__skills">${tags}</div>` : '') +
    `<div class="rv2__prose">${descHtml}</div>` +
    englishBlock +
    '</section>';

  return companySection + roleSection + '<div class="rv2__rule" aria-hidden="true"></div>';
}

// ── Best-effort failure reporting (mirrors the site logging contract) ────────

/** Report a failed portal network call to {PUBLIC_LOG_ENDPOINT}/logs/client.
 *  Never includes PII — only a message + context. No-ops when unconfigured. */
export function reportClientError(message: string, context: Record<string, unknown> = {}): void {
  const base = logBase();
  if (!base) return;
  try {
    fetch(`${base}/logs/client`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      body: JSON.stringify({
        entries: [
          {
            level: 'error',
            message: String(message).slice(0, 2000),
            source: 'portal',
            url: typeof location !== 'undefined' ? location.origin + location.pathname : undefined,
            occurred_at: new Date().toISOString(),
            context,
          },
        ],
      }),
    }).catch(() => {});
  } catch {
    /* reporter must never break the page */
  }
}

// ── Client refresh wiring (shared by /roles, the home teaser, and the
//    for-talent teaser) ───────────────────────────────────────────────────
// All three sections show a prerendered (or empty-state) snapshot at build
// time, then re-fetch on load behind a skeleton so mid-week publishes appear
// without a rebuild. The show-skeleton / fetch / swap-in / restore-on-failure
// sequence is identical across them — only the container ids and the card
// renderer differ — so it lives here once instead of three times.

export interface RolesRefreshConfig {
  /** Element whose innerHTML gets replaced with rendered cards. */
  containerId: string;
  /** Empty-state element, shown when the fetch resolves to zero roles. */
  emptyId?: string;
  /** Skeleton element, shown while the fetch is in flight. */
  skeletonId?: string;
  /** Optional "N open roles" counter element, updated with the fresh count. */
  countId?: string;
  /** Renders one role's card markup (e.g. v6RoleTeaserHTML, roleCardHTML). */
  render: (role: PublicRoleListItem) => string;
  /** Short tag used in the best-effort error report (e.g. "home_roles_teaser"). */
  stage: string;
}

/** Wires up the fetch-on-load refresh for a roles section. Never throws —
 *  on any failure it restores whatever was already visible (prerendered
 *  cards or empty state) rather than leaving a blank section. */
export function initRolesRefresh(config: RolesRefreshConfig): void {
  const { containerId, emptyId, skeletonId, countId, render, stage } = config;
  const container = document.getElementById(containerId);
  if (!container) return;
  const empty = emptyId ? document.getElementById(emptyId) : null;
  const skeleton = skeletonId ? document.getElementById(skeletonId) : null;
  const count = countId ? document.getElementById(countId) : null;

  // Remember the prerendered visibility so a failed fetch can restore it
  // exactly, instead of guessing.
  const hadContainerHidden = container.hasAttribute('hidden');
  const hadEmptyHidden = empty?.hasAttribute('hidden') ?? true;

  skeleton?.removeAttribute('hidden');
  container.setAttribute('hidden', '');
  empty?.setAttribute('hidden', '');

  fetchRoles()
    .then((roles) => {
      if (!Array.isArray(roles)) throw new Error('Malformed roles response');
      container.innerHTML = roles.map(render).join('');
      if (count) count.textContent = String(roles.length);
      if (roles.length > 0) {
        container.removeAttribute('hidden');
        empty?.setAttribute('hidden', '');
      } else {
        container.setAttribute('hidden', '');
        empty?.removeAttribute('hidden');
      }
    })
    .catch((err) => {
      if (!hadContainerHidden) container.removeAttribute('hidden');
      if (!hadEmptyHidden) empty?.removeAttribute('hidden');
      reportClientError(`roles refresh failed: ${(err as Error)?.message ?? err}`, { stage });
    })
    .finally(() => {
      skeleton?.setAttribute('hidden', '');
    });
}

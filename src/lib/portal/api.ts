/**
 * Portal API client — the ONLY network layer for the /app/* candidate portal.
 *
 * Contract (ATS backend, see ats-backend/docs/api_response_contract.md):
 * - Portal success responses are plain DTOs (no envelope).
 * - Errors are `{ error: { code, message, status, details } }` → thrown as PortalApiError.
 * - Access token lives in memory (module-level) with a sessionStorage fallback so a
 *   hard reload within the tab survives; the rotating refresh token is an HttpOnly
 *   cookie scoped to /portal/auth (credentials are ONLY sent on /portal/auth/* calls).
 * - Every request carries an X-Request-Id (UUID4) per the site logging convention;
 *   network/5xx failures are reported fire-and-forget to {PUBLIC_LOG_ENDPOINT}/logs/client.
 */

export const BACKEND_URL: string = (
  (import.meta.env.PUBLIC_BACKEND_URL as string | undefined) || 'http://localhost:8000'
).replace(/\/+$/, '');

const TOKEN_KEY = 'ph_portal_token';
const PROFILE_KEY = 'ph_portal_profile';

// ── Types (mirror backend portal DTOs — allowlisted fields only) ────────────

export interface PortalProfile {
  first_name: string;
  cohort_code: string | null;
  read_only: boolean;
}

export interface PortalMe extends PortalProfile {
  notion_hub_url: string | null;
}

export interface PortalSession {
  id: string;
  kind: 'mentalidad' | 'diagnostico' | 'module' | 'feedback' | 'ad_hoc';
  label: string | null;
  sequence_number: number | null;
  scheduled_at: string | null;
  occurred_at: string | null;
  status: 'scheduled' | 'done' | 'rescheduled' | 'cancelled' | 'no_show';
  content_links: string[];
}

export interface PortalSessions {
  sessions: PortalSession[];
  next_session_at: string | null;
  next_session_label: string | null;
  notion_hub_url: string | null;
}

export interface PortalRole {
  id: string;
  company: string;
  role_title: string | null;
  job_url: string | null;
  priority: string | null;
  location_type: string | null;
  sponsorship: string | null;
  relocation: boolean | null;
  company_stage: string | null;
  industries: string[] | null;
  salary_range: string | null;
  contact_name: string | null;
  contact_linkedin: string | null;
  channel: string | null;
  candidate_pitch_company: string | null;
  candidate_pitch_role: string | null;
  application_stage: string;
  notes: string | null;
  next_action: string | null;
  next_action_at: string | null;
  added_by_me: boolean;
  shared_at: string | null;
  applied_at: string | null;
  created_at: string;
}

export interface PortalAddRoleRequest {
  company: string;
  role_title?: string | null;
  job_url?: string | null;
  location_type?: string | null;
  salary_range?: string | null;
  notes?: string | null;
}

interface TokenResponse {
  access_token: string;
  token_type: string;
  first_name: string;
  cohort_code: string | null;
  read_only: boolean;
}

// ── Error type ───────────────────────────────────────────────────────────────

export class PortalApiError extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string,
    public details: unknown = null,
  ) {
    super(message);
    this.name = 'PortalApiError';
  }
}

// ── Auth store (memory + sessionStorage fallback) ───────────────────────────

let accessToken: string | null = null;

export function getToken(): string | null {
  if (accessToken) return accessToken;
  try {
    accessToken = sessionStorage.getItem(TOKEN_KEY);
  } catch {
    /* storage unavailable → memory-only */
  }
  return accessToken;
}

export function getProfile(): PortalProfile | null {
  try {
    const raw = sessionStorage.getItem(PROFILE_KEY);
    return raw ? (JSON.parse(raw) as PortalProfile) : null;
  } catch {
    return null;
  }
}

function storeSession(token: TokenResponse): PortalProfile {
  const profile: PortalProfile = {
    first_name: token.first_name,
    cohort_code: token.cohort_code,
    read_only: token.read_only,
  };
  accessToken = token.access_token;
  try {
    sessionStorage.setItem(TOKEN_KEY, token.access_token);
    sessionStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } catch {
    /* memory-only session */
  }
  return profile;
}

export function clearSession(): void {
  accessToken = null;
  try {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(PROFILE_KEY);
  } catch {
    /* no-op */
  }
}

export function redirectToLogin(): void {
  window.location.href = '/app';
}

// ── Internals ────────────────────────────────────────────────────────────────

function newRequestId(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
}

/** Fire-and-forget failure report to the shared /logs/client endpoint. */
function reportFailure(message: string, context: Record<string, unknown>): void {
  try {
    const endpoint = import.meta.env.PUBLIC_LOG_ENDPOINT as string | undefined;
    if (!endpoint) return;
    const body = JSON.stringify({
      entries: [
        {
          level: 'error',
          message: message.slice(0, 2000),
          source: 'portal',
          url: window.location.href,
          occurred_at: new Date().toISOString(),
          context,
        },
      ],
    });
    fetch(`${endpoint.replace(/\/+$/, '')}/logs/client`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    }).catch(() => {});
  } catch {
    /* reporter must never break the app */
  }
}

async function toError(res: Response): Promise<PortalApiError> {
  let code = 'UNKNOWN_ERROR';
  let message = `Error ${res.status}`;
  let details: unknown = null;
  try {
    const body = await res.json();
    if (body?.error) {
      code = body.error.code ?? code;
      message = body.error.message ?? message;
      details = body.error.details ?? null;
    } else if (body?.detail) {
      message = typeof body.detail === 'string' ? body.detail : message;
    }
  } catch {
    /* non-JSON error body */
  }
  if (res.status >= 500) {
    reportFailure(`Portal API ${res.status} ${code}`, { path: new URL(res.url).pathname });
  }
  return new PortalApiError(res.status, code, message, details);
}

async function parseBody<T>(res: Response): Promise<T> {
  if (res.status === 204) return undefined as T;
  return (await res.json()) as T;
}

function send(path: string, init: RequestInit, withCredentials: boolean): Promise<Response> {
  const headers = new Headers(init.headers ?? {});
  headers.set('X-Request-Id', newRequestId());
  if (init.body != null && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }
  const token = getToken();
  if (token && !withCredentials) headers.set('Authorization', `Bearer ${token}`);
  return fetch(`${BACKEND_URL}${path}`, {
    ...init,
    headers,
    // Cookies travel ONLY on /portal/auth/* (refresh cookie path).
    credentials: withCredentials ? 'include' : 'omit',
  });
}

// ── Refresh (single-flight so parallel 401s share one attempt) ──────────────

let refreshInFlight: Promise<PortalProfile | null> | null = null;

export function refreshSession(): Promise<PortalProfile | null> {
  if (!refreshInFlight) {
    refreshInFlight = (async () => {
      try {
        const res = await send('/portal/auth/refresh', { method: 'POST' }, true);
        if (!res.ok) return null;
        return storeSession(await parseBody<TokenResponse>(res));
      } catch {
        return null;
      } finally {
        // allow a future refresh once this one settles
        setTimeout(() => {
          refreshInFlight = null;
        }, 0);
      }
    })();
  }
  return refreshInFlight;
}

// ── Public fetch wrapper (authenticated, refresh-retry once) ────────────────

export async function apiFetch<T>(path: string, init: RequestInit = {}): Promise<T> {
  let res: Response;
  try {
    res = await send(path, init, false);
  } catch (e) {
    reportFailure(`Portal API network failure: ${String(e)}`, { path });
    throw new PortalApiError(0, 'NETWORK_ERROR', 'No pudimos conectar con el servidor. Revisa tu conexión.');
  }
  if (res.status === 401) {
    const refreshed = await refreshSession();
    if (!refreshed) {
      clearSession();
      redirectToLogin();
      throw new PortalApiError(401, 'SESSION_EXPIRED', 'Tu sesión expiró.');
    }
    res = await send(path, init, false);
    if (res.status === 401) {
      clearSession();
      redirectToLogin();
      throw new PortalApiError(401, 'SESSION_EXPIRED', 'Tu sesión expiró.');
    }
  }
  if (!res.ok) throw await toError(res);
  return parseBody<T>(res);
}

// ── Auth flows ───────────────────────────────────────────────────────────────

async function loginWith(path: string, payload: unknown): Promise<PortalProfile> {
  let res: Response;
  try {
    res = await send(path, { method: 'POST', body: JSON.stringify(payload) }, true);
  } catch (e) {
    reportFailure(`Portal login network failure: ${String(e)}`, { path });
    throw new PortalApiError(0, 'NETWORK_ERROR', 'No pudimos conectar con el servidor. Revisa tu conexión.');
  }
  if (!res.ok) throw await toError(res);
  return storeSession(await parseBody<TokenResponse>(res));
}

export function loginWithGoogle(idToken: string): Promise<PortalProfile> {
  return loginWith('/portal/auth/google', { id_token: idToken });
}

export function loginDev(email: string): Promise<PortalProfile> {
  return loginWith('/portal/auth/dev-login', { email });
}

export async function logout(): Promise<void> {
  try {
    await send('/portal/auth/logout', { method: 'POST' }, true);
  } catch {
    /* best-effort — the local session is cleared regardless */
  } finally {
    clearSession();
  }
}

/**
 * Page guard: resolves the current profile, trying one silent refresh when there
 * is no access token in this tab. Redirects to /app when there is no session.
 */
export async function requireSession(): Promise<PortalProfile> {
  const token = getToken();
  const profile = getProfile();
  if (token && profile) return profile;
  const refreshed = await refreshSession();
  if (refreshed) return refreshed;
  clearSession();
  redirectToLogin();
  return new Promise<never>(() => {}); // never resolves — navigation is underway
}

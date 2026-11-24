// Screening questions: types, the ONE escaping renderer (build + client refresh)
// and the client mirror of the backend validation rules. Re-exported from
// roles.ts. Kept in its own module so node:test can load it directly.
import { normalizePublicText } from './markdown.ts';

function escapeHtml(s: string): string {
  return normalizePublicText(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export type PublicQuestionType = 'text' | 'url' | 'single_choice' | 'multi_choice';

export interface PublicQuestionOption {
  key: string;
  label: string;
}

/** One screening question, allow-listed by the backend public DTO. */
export interface PublicQuestion {
  id: string;
  type: PublicQuestionType;
  label: string;
  hint: string | null;
  required: boolean;
  max_length: number | null;
  options: PublicQuestionOption[] | null;
}

// ── Screening questions (single source of truth for build + client) ─────────
// Rendered after the CV field. Every label/hint/option string is escaped here;
// the page script only reads values back and never builds markup from them.

/** Length as the backend counts it: Unicode code points, so an emoji is 1. */
export function codePointLength(value: string): number {
  return [...value].length;
}

export const DEFAULT_TEXT_LIMIT = 500;
export const URL_LIMIT = 500;

/** DOM-id-safe form of a server question id (also used in selectors). */
export function questionDomId(id: string): string {
  return `rv2-q-${String(id).replace(/[^A-Za-z0-9_-]/g, '_')}`;
}

export function questionLimit(q: Pick<PublicQuestion, 'max_length'>): number {
  return q.max_length && q.max_length > 0 ? q.max_length : DEFAULT_TEXT_LIMIT;
}

export function counterText(value: string, limit: number): string {
  return `${codePointLength(value)} / ${limit}`;
}

/** Live counter state: the text ("712 / 700") and whether it is over the
 *  limit (counted in code points, like the backend). Untrimmed on purpose:
 *  it mirrors exactly what the applicant sees while typing. */
export function counterState(value: string, limit: number): { text: string; over: boolean } {
  return { text: counterText(value, limit), over: codePointLength(value) > limit };
}

/** Client mirror of the backend rules. Returns an error message or null.
 *  `value` is the trimmed text, or the chosen option keys for choice types. */
export function screeningAnswerError(q: PublicQuestion, value: string | string[]): string | null {
  const keys = new Set((q.options ?? []).map((o) => o.key));
  if (q.type === 'single_choice' || q.type === 'multi_choice') {
    const chosen = Array.isArray(value) ? value : value ? [value] : [];
    if (chosen.length === 0) return q.required ? 'Please choose an option.' : null;
    if (q.type === 'single_choice' && chosen.length !== 1) return 'Please choose one option.';
    if (new Set(chosen).size !== chosen.length || chosen.some((k) => !keys.has(k))) {
      return 'Please choose from the listed options.';
    }
    return null;
  }
  const text = (Array.isArray(value) ? value.join('') : value).trim();
  if (!text) return q.required ? 'Please answer this question.' : null;
  if (q.type === 'url') {
    if (codePointLength(text) > URL_LIMIT) return `Please keep the link to ${URL_LIMIT} characters or fewer.`;
    try {
      const u = new URL(text);
      if ((u.protocol !== 'http:' && u.protocol !== 'https:') || !u.hostname) throw new Error('scheme');
    } catch {
      return 'Please enter a full link starting with http:// or https://.';
    }
    return null;
  }
  const limit = questionLimit(q);
  if (codePointLength(text) > limit) return `Please keep this answer to ${limit} characters or fewer.`;
  return null;
}

function questionHeadHTML(q: PublicQuestion, domId: string, tag: 'label' | 'legend'): string {
  const mark = q.required ? ' *' : '';
  return tag === 'label'
    ? `<label for="${domId}">${escapeHtml(q.label)}${mark}</label>`
    : `<legend>${escapeHtml(q.label)}${mark}</legend>`;
}

function questionHTML(q: PublicQuestion): string {
  const domId = questionDomId(q.id);
  const hintId = `${domId}-hint`;
  const errId = `${domId}-error`;
  const describedBy = `${q.hint ? `${hintId} ` : ''}${errId}`;
  const hint = q.hint ? `<span class="rv2__f-hint" id="${hintId}">${escapeHtml(q.hint)}</span>` : '';
  const err = `<span class="rv2__f-err" id="${errId}" data-err-for="${domId}"></span>`;
  const attrs =
    `data-qid="${escapeHtml(q.id)}" data-qtype="${escapeHtml(q.type)}" data-required="${q.required ? '1' : '0'}"`;

  if (q.type === 'single_choice' || q.type === 'multi_choice') {
    const radio = q.type === 'single_choice';
    const opts = (q.options ?? [])
      .map((o, i) => {
        const oid = `${domId}-o${i}`;
        return (
          '<span class="rv2__opt">' +
          `<input type="${radio ? 'radio' : 'checkbox'}" id="${oid}" name="${domId}" value="${escapeHtml(o.key)}" />` +
          `<label for="${oid}">${escapeHtml(o.label)}</label>` +
          '</span>'
        );
      })
      .join('');
    return (
      `<fieldset class="rv2__f rv2__f--full rv2__q rv2__q--group" id="${domId}" ${attrs} aria-describedby="${describedBy}">` +
      questionHeadHTML(q, domId, 'legend') +
      hint +
      `<div class="rv2__opts">${opts}</div>` +
      err +
      '</fieldset>'
    );
  }

  if (q.type === 'url') {
    return (
      `<div class="rv2__f rv2__f--full rv2__q" ${attrs}>` +
      questionHeadHTML(q, domId, 'label') +
      hint +
      `<input type="url" id="${domId}" data-q-input inputmode="url" autocomplete="off" placeholder="https://…" aria-describedby="${describedBy}" />` +
      err +
      '</div>'
    );
  }

  // text: NO maxlength attribute, so over-limit input is visible and explained
  // instead of silently truncated (matters for pasted text and emoji).
  const limit = questionLimit(q);
  const countId = `${domId}-count`;
  return (
    `<div class="rv2__f rv2__f--full rv2__q" ${attrs} data-max="${limit}">` +
    questionHeadHTML(q, domId, 'label') +
    hint +
    `<textarea id="${domId}" data-q-input rows="4" aria-describedby="${describedBy} ${countId}"></textarea>` +
    `<span class="rv2__f-count" id="${countId}" data-q-count>${counterText('', limit)}</span>` +
    err +
    '</div>'
  );
}

/** Markup for the questions block; empty string when the role has none. */
export function roleQuestionsHTML(questions: PublicQuestion[] | null | undefined): string {
  if (!Array.isArray(questions) || questions.length === 0) return '';
  return questions.map(questionHTML).join('');
}


/** Build the `screening_answers` object the backend expects.
 *  single_choice → one option-key string; multi_choice → array of keys;
 *  text/url → trimmed string. Empty optional answers are omitted.
 *  `readValue` returns the raw control state: text, or the checked keys. */
export function buildScreeningAnswers(
  questions: PublicQuestion[],
  readValue: (q: PublicQuestion) => string | string[],
): Record<string, string | string[]> {
  const answers: Record<string, string | string[]> = {};
  for (const q of questions) {
    const raw = readValue(q);
    if (q.type === 'multi_choice') {
      const keys = Array.isArray(raw) ? raw : raw ? [raw] : [];
      if (keys.length > 0) answers[q.id] = keys;
    } else if (q.type === 'single_choice') {
      const key = Array.isArray(raw) ? (raw[0] ?? '') : raw;
      if (key) answers[q.id] = key;
    } else {
      const text = (Array.isArray(raw) ? raw.join('') : raw).trim();
      if (text) answers[q.id] = text;
    }
  }
  return answers;
}

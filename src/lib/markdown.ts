// ─────────────────────────────────────────────────────────────────────────────
// Minimal, dependency-free, SAFE markdown → HTML renderer.
//
// Used to render the public JD (`public_description`) coming from the backend.
// Because the source is untrusted, we escape ALL HTML first, THEN apply a small
// markdown subset on the escaped text, and only allow sanitized link targets.
// No raw HTML from the source can ever reach the DOM.
//
// Supported: #/##/### headings, unordered (-, *) & ordered (1.) lists,
// **bold**, *italic* / _italic_, `code`, [text](url) links, blank-line paragraphs.
// ─────────────────────────────────────────────────────────────────────────────

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function sanitizeUrl(url: string): string | null {
  const u = url.trim();
  if (/^(https?:|mailto:)/i.test(u)) return u;
  if (u.startsWith('/') || u.startsWith('#')) return u;
  return null; // drop javascript:, data:, etc.
}

/** Inline formatting on already-escaped text. */
function inline(text: string): string {
  let out = text;
  // Links [label](url) — url is already HTML-escaped; sanitize the scheme.
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, label, url) => {
    const safe = sanitizeUrl(String(url).replace(/&amp;/g, '&'));
    if (!safe) return label;
    return `<a href="${escapeHtml(safe)}" target="_blank" rel="noopener nofollow">${label}</a>`;
  });
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
  out = out.replace(/(^|[^_])_([^_\n]+)_/g, '$1<em>$2</em>');
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
  return out;
}

export function renderMarkdown(src: string | null | undefined): string {
  if (!src) return '';
  const lines = escapeHtml(src.replace(/\r\n/g, '\n')).split('\n');
  const out: string[] = [];
  let listType: 'ul' | 'ol' | null = null;
  let para: string[] = [];

  const closeList = () => {
    if (listType) {
      out.push(`</${listType}>`);
      listType = null;
    }
  };
  const flushPara = () => {
    if (para.length) {
      out.push(`<p>${inline(para.join(' '))}</p>`);
      para = [];
    }
  };

  for (const line of lines) {
    const t = line.trim();
    if (!t) {
      flushPara();
      closeList();
      continue;
    }
    let m: RegExpMatchArray | null;
    if ((m = t.match(/^(#{1,3})\s+(.*)$/))) {
      flushPara();
      closeList();
      const level = m[1].length;
      out.push(`<h${level}>${inline(m[2])}</h${level}>`);
    } else if ((m = t.match(/^[-*]\s+(.*)$/))) {
      flushPara();
      if (listType !== 'ul') {
        closeList();
        out.push('<ul>');
        listType = 'ul';
      }
      out.push(`<li>${inline(m[1])}</li>`);
    } else if ((m = t.match(/^\d+\.\s+(.*)$/))) {
      flushPara();
      if (listType !== 'ol') {
        closeList();
        out.push('<ol>');
        listType = 'ol';
      }
      out.push(`<li>${inline(m[1])}</li>`);
    } else {
      closeList();
      para.push(t);
    }
  }
  flushPara();
  closeList();
  return out.join('\n');
}

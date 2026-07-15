// ─────────────────────────────────────────────────────────────────────────
// Turns the first mention of each named term in a trusted content string
// into a link, leaving the rest as plain text. Used to cross-reference a
// sibling product (e.g. "Offer Acceleration") from inside another product's
// body copy without hand-writing markup into every content string.
// Only the FIRST occurrence of each term is linked, in the order given, so
// a page never ends up with the same product linked twice.
// ─────────────────────────────────────────────────────────────────────────

export interface TextLink {
  term: string;
  href: string;
}

export type TextSegment = string | { text: string; href: string };

export function linkifyFirst(text: string, links: TextLink[]): TextSegment[] {
  let segments: TextSegment[] = [text];

  for (const { term, href } of links) {
    const next: TextSegment[] = [];
    let replaced = false;

    for (const seg of segments) {
      if (replaced || typeof seg !== 'string') {
        next.push(seg);
        continue;
      }
      const idx = seg.indexOf(term);
      if (idx === -1) {
        next.push(seg);
        continue;
      }
      const before = seg.slice(0, idx);
      const after = seg.slice(idx + term.length);
      if (before) next.push(before);
      next.push({ text: term, href });
      if (after) next.push(after);
      replaced = true;
    }
    segments = next;
  }

  return segments;
}

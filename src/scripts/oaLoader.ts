// ── OA loader runtime controller ──────────────────────────────────────────
// Drives an OALoader.astro instance (any of the 8 variants) through the two
// loading phases. The markup carries everything it needs (data-variant,
// data-p1/data-p2 phrases, step rows), so the controller is variant-agnostic
// except for the typewriter effect (variant 6) and the progress bar fill
// (variant 3). Dots animation is pure CSS and needs no JS.
//
// Used by /offer-acceleration/apply (real submission) and by the internal
// preview gallery /oa/loading-designs (fake cycles).

export interface OALoaderHandle {
  /** Switch to phase 0 ("Sending request") or 1 ("Analyzing your response"). */
  setPhase(i: 0 | 1): void;
  /** Return to the idle state (used by the gallery between plays). */
  reset(): void;
  /** Stop any timers (call when hiding the overlay). */
  destroy(): void;
}

export function createOALoader(root: HTMLElement): OALoaderHandle {
  const variant = Number(root.dataset.variant || '1');
  const phrases = [root.dataset.p1 ?? '', root.dataset.p2 ?? ''];
  const textEl = root.querySelector<HTMLElement>('.oal__text');
  const barFill = root.querySelector<HTMLElement>('.oal__bar-fill');
  let typeTimer: ReturnType<typeof setInterval> | undefined;

  function stopTyping(): void {
    if (typeTimer !== undefined) clearInterval(typeTimer);
    typeTimer = undefined;
    root.classList.remove('is-typing');
  }

  function typewrite(phrase: string): void {
    if (!textEl) return;
    stopTyping();
    root.classList.add('is-typing');
    textEl.textContent = '';
    let n = 0;
    typeTimer = setInterval(() => {
      n++;
      textEl.textContent = phrase.slice(0, n);
      if (n >= phrase.length) stopTyping();
    }, 42);
  }

  function setPhase(i: 0 | 1): void {
    root.dataset.phase = String(i);

    // Step rows (variants 3 and 7): mark previous phases done, current active.
    root.querySelectorAll<HTMLElement>('[data-step]').forEach((el) => {
      const s = Number(el.dataset.step);
      el.classList.toggle('is-active', s === i);
      el.classList.toggle('is-done', s < i);
    });

    // Progress bar (variant 3): a long CSS transition does the creeping.
    if (barFill) barFill.style.width = i === 0 ? '18%' : '92%';

    // Single-phrase variants: swap the phrase (typed for variant 6).
    if (textEl) {
      if (variant === 6) typewrite(phrases[i]);
      else textEl.textContent = phrases[i];
    }
  }

  function reset(): void {
    stopTyping();
    delete root.dataset.phase;
    root.querySelectorAll<HTMLElement>('[data-step]').forEach((el) => {
      el.classList.toggle('is-active', el.dataset.step === '0');
      el.classList.remove('is-done');
    });
    if (barFill) barFill.style.width = '6%';
    if (textEl) textEl.textContent = phrases[0];
  }

  return { setPhase, reset, destroy: stopTyping };
}

/**
 * Randomized phase timings per the loading contract:
 *   phase 1: 0.5–1.1 s · phase 2: 4–6 s · total clamped to 5–8 s.
 */
export function pickTimings(): { phase1Ms: number; totalMs: number } {
  const phase1Ms = 500 + Math.random() * 600;
  const phase2Ms = 4000 + Math.random() * 2000;
  const totalMs = Math.min(8000, Math.max(5000, phase1Ms + phase2Ms));
  return { phase1Ms, totalMs };
}

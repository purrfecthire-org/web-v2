interface SubmissionAttempt {
  readonly requestId: string;
  readonly fillTimeMs: number;
}

function newRequestId(): string {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (character) => {
    const random = Math.floor(Math.random() * 16);
    return (character === 'x' ? random : (random & 3) | 8).toString(16);
  });
}

/** No applicant values or files are stored; only an attempt's request metadata. */
export function createSubmissionAttempts() {
  let attempt: SubmissionAttempt | undefined;
  return {
    current(elapsedMs: number): SubmissionAttempt {
      return attempt ??= Object.freeze({
        requestId: newRequestId(),
        fillTimeMs: Math.min(86_400_000, Math.max(0, Number.isFinite(elapsedMs) ? Math.trunc(elapsedMs) : 0)),
      });
    },
    invalidate(): void {
      attempt = undefined;
    },
  };
}

/** Call after capturing FormData. Values and FileLists are never replaced. */
export function lockSubmissionFields(form: HTMLFormElement): () => void {
  const previous = Array.from(form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('input, select, textarea'))
    .map((field) => ({ field, disabled: field.disabled }));
  previous.forEach(({ field }) => { field.disabled = true; });
  return () => {
    previous.forEach(({ field, disabled }) => { field.disabled = disabled; });
  };
}

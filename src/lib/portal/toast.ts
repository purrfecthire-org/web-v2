/**
 * Minimal top-center toast, consistent with the design system: white card,
 * hairline border, 12px radius, navy ink. No dependencies.
 */

type ToastKind = 'info' | 'success' | 'error';

const STYLE_ID = 'ph-toast-style';
const HOST_ID = 'ph-toast-host';

const CSS = `
#${HOST_ID} {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  pointer-events: none;
  width: min(92vw, 420px);
}
.ph-toast {
  pointer-events: auto;
  width: 100%;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  padding: 12px 16px;
  font-family: 'Schibsted Grotesk', system-ui, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: #1C1C1C;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  opacity: 0;
  transform: translateY(-8px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.ph-toast.ph-toast--visible { opacity: 1; transform: translateY(0); }
.ph-toast--error { border-color: #B4231F; color: #B4231F; }
.ph-toast--success { border-color: #29285F; color: #29285F; }
`;

function host(): HTMLElement {
  if (!document.getElementById(STYLE_ID)) {
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = CSS;
    document.head.appendChild(style);
  }
  let el = document.getElementById(HOST_ID);
  if (!el) {
    el = document.createElement('div');
    el.id = HOST_ID;
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    document.body.appendChild(el);
  }
  return el;
}

export function showToast(message: string, kind: ToastKind = 'info', durationMs = 4000): void {
  const el = document.createElement('div');
  el.className = `ph-toast ph-toast--${kind}`;
  el.textContent = message;
  host().appendChild(el);
  requestAnimationFrame(() => el.classList.add('ph-toast--visible'));
  window.setTimeout(() => {
    el.classList.remove('ph-toast--visible');
    window.setTimeout(() => el.remove(), 300);
  }, durationMs);
}

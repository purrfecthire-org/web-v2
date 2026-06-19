# Design System — Purrfect Hire 2026 (Kate's system)

## 1. Visual Theme

Clean, premium, editorial. The audience is YC, a16z and Sequoia founders who live in
Linear, Vercel, and Mercury — they read "serious" as clear, confident, and well-typeset,
not loud. **Presence comes from size, contrast, and a real human photo — not from
saturation.** One brand color (navy) acting as ink; everything else is white and gray.
Restrained and present, never flashy.

Core rules:
- **Single brand color**: navy `#29285F` (`--ink`), used sparingly so it reads expensive.
- **Flat backgrounds only** — no gradients, no aurora blobs. White canvas.
- **No shadows** — elevation is communicated with a 1px hairline border.
- **One dark section** per page maximum, for rhythm.
- The old electric-blue accent (`#3C2BDC`) is **removed**.

## 2. CSS Variables

Tokens are defined in two mirrored places:
- `src/styles/tailwind.css` → `@theme` (generates Tailwind utilities, `--color-*`)
- `src/styles/global.scss` → `:root` (Kate's bare-name aliases for hand-written CSS)

```css
:root {
  --ink:      #29285F;          /* navy de marca: tinta — the only brand color */
  --text:     #1C1C1C;          /* body copy */
  --muted:    #6B6B6B;          /* secondary text, labels, footer */
  --bg:       #FFFFFF;          /* page + card background */
  --bg-soft:  #FCFCFB;          /* optional alternating sections */
  --line:     rgba(0,0,0,0.08); /* hairline borders + dividers */
  --dark:     #29285F;          /* the single dark section background */
  --on-dark:  #F3EFE6;          /* cream text over the dark section */
  --radius:   12px;             /* one radius for buttons, cards, inputs */
}
```

Where each goes:

| Token       | Where |
|-------------|-------|
| `--ink`     | Logo, headlines, stat numbers, key links, primary button, dark section |
| `--text`    | Paragraphs |
| `--muted`   | Subtitles, labels, footer |
| `--bg`      | Backgrounds and cards |
| `--line`    | Card borders and dividers |
| `--on-dark` | Text over the navy dark section |

## 3. Font

**Schibsted Grotesk** — free on Google Fonts, more character than stock Inter. Loaded in
`Layout.astro`. Two weights only: **400** (regular) and **500** (medium). No heavy bold.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500&display=swap" rel="stylesheet">
```

```css
body { font-family: 'Schibsted Grotesk', system-ui, sans-serif; }
```

Everything in **sentence case**. Only eyebrow labels are uppercase.

## 4. Typography Scale

| Use                | Size                      | Weight | Line-height | Extra |
|--------------------|---------------------------|--------|-------------|-------|
| H1 (hero)          | `clamp(38px, 5vw, 56px)`  | 500    | 1.02        | `letter-spacing:-0.02em` |
| H2 (sections)      | `clamp(26px, 3vw, 34px)`  | 500    | 1.1         | `letter-spacing:-0.01em` |
| H3 (cards/steps)   | 20px                      | 500    | 1.3         | |
| Hero subcopy       | 18px                      | 400    | 1.6         | |
| Body               | 16px                      | 400    | 1.6         | |
| Label / eyebrow    | 12px                      | 500    | 1           | uppercase, `letter-spacing:0.06em` |
| Stat number        | 24px                      | 500    | 1.1         | |
| Button             | 15px                      | 500    | 1           | |

## 5. Buttons (12px radius — not pills)

```css
.btn-primary {
  background: var(--ink);
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  padding: 12px 24px;
  border-radius: var(--radius);
  border: none;
}
.btn-primary:hover { background: #1E1D47; }

.btn-secondary {
  background: transparent;
  color: var(--ink);
  font-size: 15px;
  font-weight: 500;
  padding: 12px 24px;
  border-radius: var(--radius);
  border: 1px solid var(--line);
}
```

## 6. Cards

```css
.card {
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 24px;
}
```

No `box-shadow` anywhere. If elevation is needed, use the hairline border.

## 7. Section Backgrounds

All sections are flat `var(--bg)` (white), with `var(--bg-soft)` as an optional alternating
tone. **No gradients, no colored section backgrounds**, except the single dark section.

## 8. The single dark section

Pick ONE section per page and set `background: var(--dark)` with `color: var(--on-dark)`.
Exactly one — it gives the page weight without becoming heavy. (On the OA page this is the
"Quién está detrás" founder bio.)

## 9. The hero photo

Half the "presence" lives here. One real, authentic human photo (people we placed, or Kate)
— never stock. Corners use `var(--radius)`, no shadow, no colored border. If the real photo
isn't ready at publish time, leave a clean `var(--bg-soft)` placeholder — never re-add stock.

## 10. Spacing, borders, radius

- **Shadows:** none. Replace any `box-shadow` with `border: 1px solid var(--line)`.
- **Radius:** single `var(--radius)` (12px) on buttons, cards, inputs.
- **Section vertical padding:** ≥80px desktop, 48px mobile.
- **Max content width:** ~1100px, centered.

## 11. Logo wall ("Trusted by founders at")

Uniform grayscale for cohesion: `filter: grayscale(1); opacity: 0.55;`, on hover `opacity: 1;`.

## 12. Voice

Direct, concrete, warm without being soft. Sounds like a person who was in the room, not a
brochure. Avoid: "potenciar", "soluciones integrales", "sinergia", "de clase mundial",
"experiencia sin fisuras", "revolucionario", and anything that reads machine-written. No
em-dashes (—) in copy — use a period or comma.

## 13. Responsive Breakpoints

- Mobile: <640px
- Tablet: <768px
- Desktop: <1024px / <1280px

Test mobile (375px), tablet (768px), desktop (1280px), and wide (1920px+) before shipping.

## 14. Key Rules (quick reference)

- One brand color: navy `#29285F`. No purple, no electric blue.
- Backgrounds flat white. No gradients, no auroras.
- No shadows — hairline borders only.
- 12px radius everywhere (buttons are NOT pills).
- Font: Schibsted Grotesk, weights 400/500, sentence case.
- One dark section per page, max.
- Hero photo: real human, never stock; clean placeholder if not ready.
- No em-dashes in copy.

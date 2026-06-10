# Design System — Purrfect Hire 2026

## 1. Visual Theme

Clean, premium, founder-to-founder. Minimal and modern — inspired by high-end SaaS (Linear/Vercel quality). Warm cream backgrounds with white cards. No colored section backgrounds, no playful animations. Professional and sharp.

## 2. CSS Variables

```css
:root {
  /* Typography */
  --font-sans: 'Inter', Arial, sans-serif;

  /* Backgrounds */
  --color-bg:        #FAF9F7;
  --color-surface:   #FFFFFF;

  /* Text */
  --color-text-primary:    #0F0F0F;
  --color-text-secondary:  #5C5C5C;
  --color-text-tertiary:   #A3A3A3;

  /* Border */
  --color-border:    #E5E5E1;

  /* Brand */
  --color-navy:      #0D0857;
  --color-accent:    #3C2BDC;

  /* Buttons */
  --btn-primary:        #0F0F0F;
  --btn-primary-hover:  #3C2BDC;
}
```

## 3. Font

**Inter** — loaded via Google Fonts or @fontsource. Weights: 400 (body), 500 (headings, buttons, UI), 700 (emphasis).

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
```

## 4. Typography Scale

| Use               | Weight | Desktop | Mobile |
|--------------------|--------|---------|--------|
| H1 (hero)          | 500    | 52px    | 34px   |
| H2 (sections)      | 500    | 36px    | 26px   |
| H3 (cards/steps)   | 500    | 20px    | 18px   |
| Body               | 400    | 16px    | 15px   |
| Eyebrow / Labels   | 500    | 11px    | 11px   |
| Buttons            | 500    | 14px    | 14px   |

## 5. Buttons

### Primary
```css
.btn-primary {
  background-color: #0F0F0F;
  color: #FFFFFF;
  border-radius: 999px;
  padding: 12px 24px;
  font-weight: 500;
  font-size: 14px;
  transition: background-color 0.2s;
}
.btn-primary:hover {
  background-color: #3C2BDC;
}
```

### Secondary
```css
.btn-secondary {
  background-color: transparent;
  color: #0F0F0F;
  border: 1px solid #E5E5E1;
  border-radius: 999px;
  padding: 12px 24px;
  font-weight: 500;
  font-size: 14px;
}
```

## 6. Cards

```css
.card {
  background-color: #FFFFFF;
  border: 1px solid #E5E5E1;
  border-radius: 12px;
  padding: 24px;
}
```

## 7. Section Backgrounds

**All sections:** `background-color: #FAF9F7`

No colored backgrounds (no green, purple, black sections). Only white cards with subtle border on the cream canvas.

## 8. Component Styles

### Hero Metrics (no boxes)
```css
.metrics-container {
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
}
.metric {
  background: none;
  border: none;
  padding: 0;
}
.metric-divider {
  width: 1px;
  height: 40px;
  background-color: #E5E5E1;
}
```

### Step Numbers (Engine section)
```css
.step-number {
  background-color: #E8E6F8;
  color: #3C2BDC;
  border-radius: 8px;
  padding: 4px 8px;
  font-weight: 500;
  font-size: 11px;
}
```

### Badge ("Under 4 weeks")
```css
.badge {
  background: transparent;
  border: 1px solid #E5E5E1;
  color: #5C5C5C;
  border-radius: 999px;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 500;
}
```

### Offer Acceleration Blocks
```css
.offer-block {
  background-color: #FFFFFF;
  border: 1px solid #E5E5E1;
  border-radius: 12px;
  padding: 28px;
}
.offer-block-title {
  font-weight: 500;
  color: #0F0F0F;
  font-size: 18px;
  margin-bottom: 16px;
}
.offer-block-list {
  color: #5C5C5C;
  font-size: 15px;
  line-height: 1.6;
}
```

### Quote Cards (Culture section)
```css
.quote-card {
  background-color: #FFFFFF;
  border: 1px solid #E5E5E1;
  border-radius: 12px;
  padding: 24px;
}
.quote-attribution {
  text-transform: uppercase;
  color: #A3A3A3;
  font-size: 11px;
  font-weight: 500;
}
```

## 9. Language Toggle

- Position: header right
- Format: `EN | ES` (plain text, no flags)
- Default: EN
- Active: weight 500, color `#0F0F0F`
- Inactive: weight 400, color `#A3A3A3`

## 10. Eyebrow Labels

```css
.eyebrow {
  text-transform: uppercase;
  color: #A3A3A3;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.05em;
}
```

## 11. Responsive Breakpoints

- Mobile: <640px
- Tablet: <768px
- Desktop: <1024px / <1280px

Max container width: 80rem (1280px).

## 12. Key Rules

- All backgrounds = `#FAF9F7`
- Cards: white with `#E5E5E1` border + 12px radius
- Buttons: pill shape (999px radius)
- Step numbers: all same color (`#3C2BDC` on `#E8E6F8`)
- Badge "Under 4 weeks": no yellow background
- Font: Inter only (not Roboto, not Geist, not Roobert)
- No "Developed by" credit in footer
- Metrics in hero: plain text with 1px vertical dividers, no boxes

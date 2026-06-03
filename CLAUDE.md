# Purrfect Hire V2 — Landing Page

## Project Overview

Purrfect Hire is a closed-loop hiring engine for YC and a16z startups. This is the marketing landing page — bilingual (EN/ES), built with Astro 6, Tailwind CSS 4, and SCSS.

## Tech Stack

- **Framework:** Astro 6.1.6 (SSR, static output)
- **Styling:** Tailwind CSS 4.2 + SCSS (component-scoped)
- **Font:** Inter (via @fontsource/inter) — weight 400, 500, 700
- **i18n:** Astro built-in routing (`/` = EN, `/es/` = ES) + centralized content in `src/content/index.ts`
- **Node:** >=22.12.0
- **Package manager:** pnpm

## Architecture

```
src/
├── components/     # Astro components (one per section)
├── content/        # i18n content objects (index.ts)
├── layouts/        # Layout.astro (meta, fonts, global styles)
├── pages/          # index.astro (EN) + es/index.astro (ES)
└── styles/         # tailwind.css, global.scss, typography.scss, breakpoints.scss
public/
├── logos/          # Brand logo
└── carrousel/     # Client logo SVGs/PNGs
```

## Key Commands

```sh
pnpm dev          # Dev server at localhost:4321
pnpm build        # Production build to ./dist/
pnpm preview      # Preview production build
```

## Content System

All text lives in `src/content/index.ts`. Components receive content via props — no hardcoded strings. The `getContent(lang)` function returns the correct language object.

## Design System

See `DESIGN.md` for the complete design specification. Key points:
- Font: Inter (not Roobert)
- Background: `#FAF9F7` (warm cream) for all sections
- Cards: white `#FFFFFF` with `#E5E5E1` border, 12px radius
- Buttons: pill shape (999px radius), black bg with purple hover (`#3C2BDC`)
- Accent color: `#3C2BDC` (purple-blue)

## Page Sections (in order)

1. **Nav** — Sticky, logo left, links center, language toggle + CTA right
2. **Hero** — H1 headline, subheadline, metrics (plain text + dividers), dual CTAs, trust logos
3. **Why 2026 is Different** — Positioning against AI tools (Prism, Contra, Metaview)
4. **Two Sides, One Engine** — Dual cards: For Founders / For Talent
5. **Offer Acceleration** — 8-session coaching program for talent (with application form)
6. **The Engine** — 4-step process (01-04) with pills
7. **Why Culture Fit** — Stats + a16z/YC quotes in cards
8. **Testimonials** — Featured + grid of 3 + candidate testimonial
9. **Active Searches** — Role cards (anonymous companies)
10. **Final CTA** — Dual buttons: hire / get placed
11. **Footer** — Logo, links, copyright

## Conventions

- BEM CSS naming inside component `<style>` tags
- SCSS mixins for responsive breakpoints (`@include max-sm`, `@include max-md`, etc.)
- CSS custom properties for design tokens
- Intersection Observer for scroll animations

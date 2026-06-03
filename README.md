# Purrfect Hire — Landing Page

Marketing landing page for [Purrfect Hire](https://purrfecthire.com), a closed-loop hiring engine that places senior LATAM talent at YC and a16z startups.

## Stack

- [Astro 6](https://astro.build) — Static site framework
- [Tailwind CSS 4](https://tailwindcss.com) — Utility-first CSS
- [SCSS](https://sass-lang.com) — Component-scoped styles
- [Inter](https://rsms.me/inter/) — Typography

## Getting Started

```sh
pnpm install
pnpm dev
```

Dev server runs at `http://localhost:4321`.

## Build

```sh
pnpm build
pnpm preview
```

## i18n

- English: `/` (default)
- Spanish: `/es/`

All content is centralized in `src/content/index.ts`. Toggle in the header switches between `EN | ES`.

## Project Structure

```
src/
├── components/     # Section components
├── content/        # Bilingual content objects
├── layouts/        # Base HTML layout
├── pages/          # Route pages (EN + ES)
└── styles/         # Design tokens, typography, breakpoints
public/
├── logos/          # Brand assets
└── carrousel/     # Client logos
```

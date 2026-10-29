# Purrfect Hire web

English-language commercial site built with Astro and deployed through the
existing GitHub Pages workflow. Active pages share `src/components/v2/Shell.astro`
and follow For Talent's warm editorial visual system: Fraunces, Inter, Ivory,
Midnight and contained purple actions. See `AGENTS.md` for current product facts,
evidence boundaries and intake behavior.

## Develop

Use Node >=22.12 and the pnpm version in package.json.

```sh
pnpm install --frozen-lockfile
PUBLIC_API_ENDPOINT=https://ats-backend-mu.vercel.app pnpm dev
```

## Verify and build

```sh
node --experimental-strip-types --test tests/*.test.ts
PUBLIC_API_ENDPOINT=https://ats-backend-mu.vercel.app pnpm build
```

The build retrieves the current public vacancies and emits their detail pages.
An API failure aborts the build, preserving the previous deployment. Do not
publish an empty or fabricated snapshot to work around an outage.

## Main routes

- `/`: brand and two paths, Companies and Talent.
- `/for-companies/`: hiring decisions, evidence and direct booking.
- `/for-talent/`: compare three advisory options, scope and investment.
- `/offer-acceleration/`: Offer Accelerator, its work, terms and inquiry.
- `/career-compounding/`: growth inside the current role.
- `/roles/`: free applications to actual client vacancies.
- `/work-with-us/`: culture and expressions of interest by email.
- `/insights/`: founder and talent articles.

Legacy and Spanish URLs redirect through astro.config.mjs. The public site is
English-only. Keep advisory, client hiring and internal team journeys separate.

## Publication

Prepare a pull request and use the existing Pages workflow when publication is
authorized. Preserve the previous deployed commit for recovery. Check complete
pages at 375, 768, 1280 and 1920px, including forms and reduced-motion behavior.

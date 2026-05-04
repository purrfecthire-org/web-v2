You are a senior product designer and frontend engineer with experience building high-converting SaaS landing pages for venture-backed startups.

Your task is to design and implement a **premium, non-generic, product-driven landing page** for a startup called **Purrfect Hire**, using Astro (SSR), Tailwind CSS, and TypeScript.

This must feel like a real Silicon Valley product.
Not a template. Not generic AI output.

---

# 🧠 CONTEXT

Purrfect Hire is NOT a recruiting agency.

It is a **closed-loop hiring engine**:

* We work with startups → extract real hiring signals
* We use those signals → train talent
* That talent performs better → improves hiring outcomes
* That feeds back → improving the system

This is a **compounding system**, not two separate businesses.

The UI must communicate:

* Speed
* Precision
* Deep understanding of hiring
* Strong execution

Tone:

* Founder to founder
* Direct
* Sharp
* No fluff
* No buzzwords
* No corporate feel

---

# 🎯 GOAL

Build a landing page that:

* Feels like a real product (not just marketing)
* Shows how the system works visually
* Converts startup founders
* Builds trust instantly
* Is fully responsive
* Is ready for dynamic content (Supabase, multi-language)

---

# 🧱 TECH STACK

* Astro (SSR)
* TypeScript
* Tailwind CSS
* No client-heavy frameworks unless necessary

---

# 🎨 DESIGN SYSTEM

## Style

* Minimal, modern, premium
* Inspired by high-end SaaS (Linear / Vercel quality)
* Product-first (UI visible early)
* Clean, with strong spacing

---

## Layout

* Max width: 1200–1280px
* Centered content
* Grid-based
* Consistent vertical rhythm

---

## Responsive Design (CRITICAL)

Must be designed mobile-first and scale up.

Breakpoints:

* Mobile (default)
* md
* lg
* xl

Requirements:

* Hero stacks vertically on mobile
* Product mock becomes scrollable or simplified
* No horizontal overflow
* Tap-friendly spacing
* Typography scales properly
* Sections adapt, not just shrink

---

## 🎨 COLOR SYSTEM (TOKENS REQUIRED)

Use CSS variables:

:root {
--color-bg: ...
--color-surface: ...
--color-primary: ...
--color-secondary: ...
--color-accent: ...
--color-text: ...
--color-muted: ...
--color-border: ...
}

Tailwind must map to these tokens.

The system must allow easy theme switching by changing variables only.

Default:

* Light background
* Indigo / deep blue primary
* Neutral grays
* Subtle gradients

---

# 🌍 INTERNATIONALIZATION (VERY IMPORTANT)

The app must support **English (en) and Spanish (es)**.

Content will come from Supabase later, where each record has:

* lang: 'en' | 'es'

---

## REQUIREMENTS

1. Create a language system:

Example:

type Lang = 'en' | 'es';

2. Content must be structured like:

interface LandingContent {
lang: Lang;
hero: {...}
engine: {...}
startups: {...}
talent: {...}
whyItWorks: {...}
socialProof: {...}
cta: {...}
}

3. Create two content objects:

export const content_en: LandingContent = { ... }
export const content_es: LandingContent = { ... }

4. Create a simple resolver:

function getContent(lang: Lang): LandingContent

5. NO hardcoded strings in components

6. UI must allow easy switching (e.g. prop or query param)

---

# 🧩 PAGE STRUCTURE

---

## 1. HERO (PRODUCT-FIRST)

Must include:

* Headline
* Subheadline
* Primary CTA
* Secondary CTA

AND:

A realistic **product UI mock**:

* Search input:
  “Search candidates…”

* Candidate cards:

  * Name
  * Role
  * Skills (tags)
  * Match %
  * CTA

This should feel like a real interface.

---

## 2. THE ENGINE

This is the core differentiator.

Design as a **visual system**, not text-heavy:

* Flow diagram:
  Input → Signal → Training → Placement → Feedback

* Minimal text

* Clean layout (horizontal or circular)

---

## 3. FOR STARTUPS

* Sharp, direct messaging
* No paragraphs

Layout:

* Left: strong statements
* Right: structured bullets/cards

---

## 4. FOR TALENT

* Focus on transformation
* Clear before/after feeling
* Strong credibility

---

## 5. WHY THIS WORKS

* Strategic explanation
* 3–4 principles (cards or grid)
* Must feel like a structural advantage

---

## 6. SOCIAL PROOF

* Logo grid
* Testimonials

Clean, high trust design

---

## 7. FINAL CTA

* Strong closing
* One clear action

---

# 🧩 COMPONENTS

Create reusable components:

* HeroSection
* ProductMock
* EngineDiagram
* SectionWrapper
* FeatureCard
* TestimonialCard
* CTASection

---

# ⚡ UX PRINCIPLES

* Show, don’t tell
* Scannable content
* Clear hierarchy
* Fast perception of value

---

# 🚫 AVOID

* Generic layouts
* Long paragraphs
* Corporate tone
* Over-explaining
* Empty hero

---

# ⚡ MICRO-INTERACTIONS

* Hover states
* Smooth transitions
* Subtle animations

---

# 📁 FILE STRUCTURE

* /components
* /layouts
* /styles
* /content (multi-language ready)

---

# 🧠 FINAL EXPECTATION

The result must feel like:

* A real startup product
* High taste (spacing, typography, hierarchy)
* Built by someone who understands design deeply

Not:

* Template
* Generic SaaS
* AI-looking UI

---

# OUTPUT

* Full Astro page
* Components
* Tailwind config with tokens
* i18n-ready content system
* Clean, production-ready code

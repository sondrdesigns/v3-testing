# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev       # Start dev server at localhost:3000

# Production
npm run build     # Build for production
npm run start     # Start production server

# Linting
npm run lint      # Run ESLint
```

## Architecture

This is a **Next.js 16 App Router** marketing site for Sondr Designs — a web design/development agency.

### Directory Structure

- `app/` — App Router pages. Each route is a folder with `page.tsx` and optionally `layout.tsx`.
  - Routes: `/`, `/contact`, `/services`, `/work`, `/studio`, `/thank-you`, `/privacy-policy`
- `components/layout/` — `Navbar` and `Footer`, rendered in the root layout for every page.
- `components/sections/` — Home page section components (`HomeHero`, `HomeStats`, `HomePortfolio`, `HomeServices`, `HomeCTA`). Some sections are reused on inner pages (e.g. `HomeServices` is used on `/services`).
- `components/ui/` — Reusable primitives: `Button`, `Container`, `SectionHeading`, `CustomCursor`.
- `lib/data.ts` — Single source of truth for all site content: `services`, `projects`, `team`, and `stats` arrays with TypeScript interfaces.
- `lib/metadata.ts` — `generateSeo()` helper for per-page Open Graph / Twitter metadata.
- `lib/utils.ts` — `cn()` (clsx + tailwind-merge) and `formatPhone()`.

### Key Conventions

**Tailwind CSS v4** — Uses `@import "tailwindcss"` syntax and `@theme {}` blocks in `globals.css`. Do not use Tailwind v3 config file patterns.

**Brand tokens** (defined in `globals.css` `@theme`):
- `brand-primary` = `#000000`
- `brand-secondary` = `#ffffff`
- `brand-accent` = `#004DFF` (vibrant blue)
- Custom utility: `section-padding`

**Animations** — GSAP is used for all animations. Wrap GSAP calls in `gsap.context()` and return `ctx.revert()` for cleanup. Use `@gsap/react` for React integration. The `CustomCursor` uses `gsap.quickTo` and is hidden on touch devices.

**Client components** — Any component using GSAP, `useState`, or `useEffect` needs `"use client"` at the top. Pages with Calendly (`react-calendly`) must be client components and gate the `InlineWidget` behind a `mounted` state to avoid SSR issues.

**Images** — External images from `images.unsplash.com` are whitelisted in `next.config.ts`. Use Next.js `<Image>` with `fill` and appropriate `sizes`.

**Forms** — Contact form submits to Formspree (`https://formspree.io/f/mojnoawy`) via native HTML `action/method`. Includes a honeypot field and `_next` redirect to `/thank-you`.

**SEO** — Use `generateSeo()` from `lib/metadata.ts` to export `metadata` from each page's server component.

**Updating content** — All services, projects, team members, and stats live in `lib/data.ts`. Add or modify entries there; pages consume these arrays directly.

# SEO Full Audit Report — sondrdesigns.com
**Date:** 2026-03-25 | **Framework:** Next.js 16 App Router | **Audited by:** 6-agent parallel analysis

---

## Overall SEO Health Score: 41 / 100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 25% | 54/100 | 13.5 |
| Content Quality / E-E-A-T | 25% | 38/100 | 9.5 |
| On-Page SEO | 20% | 45/100 | 9.0 |
| Schema / Structured Data | 10% | 0/100 | 0.0 |
| Performance (Core Web Vitals) | 10% | 55/100 | 5.5 |
| Images | 5% | 55/100 | 2.75 |
| AI Search Readiness | 5% | 18/100 | 0.9 |
| **Total** | | | **41/100** |

---

## Executive Summary

**Business:** Sondr Designs — web design & development agency, Honolulu, Hawaii
**Pages crawled:** /, /work, /services, /studio, /contact, /privacy-policy (6 indexable + /thank-you)

The site is visually strong and technically well-built at the framework level — Next.js best practices, self-hosted fonts, proper image sizing, correct GSAP cleanup, HTTPS throughout. However, the SEO foundation has significant structural gaps that limit organic discoverability regardless of design quality.

### Top 5 Critical Issues
1. **No sitemap.xml** — robots.txt references a 404 sitemap, blocking accelerated URL discovery
2. **Zero schema/JSON-LD** — no LocalBusiness, Organization, WebSite, or Service markup anywhere
3. **Home page title is brand-only** ("Sondr Designs") — no keywords, no location
4. **Critically thin content** — Studio page is ~45 words; Work page is ~60 words; no team bios, no case studies
5. **Above-fold elements start at `opacity: 0`** — GSAP entrance delay pushes LCP to 1.8–2.8s on mobile

### Top 5 Quick Wins
1. Create `app/sitemap.ts` — 15 minutes, immediate crawl benefit
2. Fix duplicate brand names in Studio and Contact page titles — 5 minutes
3. Add OG image to `generateSeo()` — 1 hour, improves all social shares instantly
4. Add `noindex` to `/thank-you` — 5 minutes
5. Add `LocalBusiness` + `WebSite` JSON-LD to root layout — 30 minutes, unlocks Knowledge Panel eligibility

---

## 1. Technical SEO — 54/100

### Critical
| Issue | Detail | Fix |
|-------|--------|-----|
| No sitemap.xml | `app/sitemap.ts` does not exist; robots.ts references a 404 URL | Create `app/sitemap.ts` with `MetadataRoute.Sitemap` |
| Duplicate brand in titles | Studio: "The Studio \| Sondr Designs \| Sondr Designs" — Contact: same pattern | Pass only the page portion to `generateSeo()`, not "Page \| Brand" |
| Home title brand-only | `app/page.tsx` exports no metadata; root fallback is "Sondr Designs" only | Export `metadata` from `app/page.tsx` with keyword-rich title + canonical |
| `/thank-you` not noindexed | No `robots: { index: false }` on the form success page | Add metadata export with noindex to `app/thank-you/page.tsx` |

### High
| Issue | Detail |
|-------|--------|
| No OG images anywhere | `generateSeo()` sets `twitter.card: "summary_large_image"` but never sets `openGraph.images` — social shares are blank |
| Services metadata conflict | `app/services/page.tsx` AND `app/services/layout.tsx` both export metadata; page wins with the weaker "Services" title |
| JS rendering risk | Hero and contact elements start at `opacity: 0` — Googlebot may index invisible content |
| `/privacy-policy` has no metadata | Inherits generic root title "Sondr Designs" |

### Medium
| Issue | Detail |
|-------|--------|
| No `llms.txt` | No guidance for AI crawlers (Perplexity, SearchGPT, ClaudeBot) |
| No IndexNow | Bing/Yandex don't get instant notification on publish |
| Minimal alt text | Portfolio images use `alt={project.client}` (e.g., "Blend") — no descriptive context |
| Web manifest icons | Both icons are `"purpose": "maskable"` only — missing `"any"` purpose |
| iClosed script, no CMP | Third-party script loads without cookie consent mechanism |

### Passes ✓
- HTTPS sitewide, clean URL structure, `lang="en"` on `<html>`, `next/font` self-hosting, `rel="noopener noreferrer"` on all external links, consistent internal nav linking, Web App Manifest present

---

## 2. Content Quality / E-E-A-T — 38/100

### E-E-A-T Breakdown

| Dimension | Score | Key Gap |
|-----------|-------|---------|
| Experience | 12/20 | 2 portfolio projects, no case studies, unattributed "30% Conversion Boost" stat |
| Expertise | 10/25 | No team bios, surface-level service descriptions, no methodology documentation |
| Authoritativeness | 8/25 | No testimonials, no client logos, no press/awards, no third-party citations |
| Trustworthiness | 15/30 | Has email + phone, but no physical address, no sourced stats, no schema |

### Word Count vs Minimum Thresholds

| Page | Estimated Words | Minimum | Status |
|------|----------------|---------|--------|
| Homepage | ~180 | 500 | FAIL |
| /services | ~310 | 800 | FAIL |
| /work | ~60 | N/A (gallery) | CRITICAL |
| /studio | ~45 | 500 | CRITICAL |
| /contact | ~90 | 500 | FAIL |

### Top Content Fixes
1. Add team bios to `lib/data.ts` — add `bio: string` and `credentials: string[]` fields to `TeamMember`
2. Build case study pages (`/work/khm-tutoring`, `/work/blend`) with problem/approach/results structure
3. Add client testimonials — a `Testimonial` interface in `lib/data.ts`, displayed on Homepage + Services
4. Add a physical address to contact page and footer
5. Source the homepage stats — add brief attribution per stat (e.g., "KHM Tutoring, 60-day post-launch")
6. Add FAQ sections to /services and /contact pages
7. Home title + location keywords ("web design Honolulu" / "Hawaii web agency") appear nowhere in any content

### AI Citation Readiness — 18/100
- No JSON-LD schema of any kind
- No sourced/attributed facts AI systems can quote
- No FAQ content for AI Overviews eligibility
- Team members are named but have no linked profiles or bios making them citable entities

---

## 3. Schema / Structured Data — 0/100

**Zero structured data on any page.** Full implementation guide below.

### Priority Order

| Priority | Schema Type | Page | Impact |
|----------|------------|------|--------|
| 1 | `LocalBusiness` + `ProfessionalService` | `app/layout.tsx` | Local pack eligibility |
| 2 | `WebSite` with `SearchAction` | `app/layout.tsx` | Sitelinks search box signal |
| 3 | `BreadcrumbList` | All inner pages | Breadcrumb rich results in SERPs |
| 4 | `Service` (ItemList) | `/services` | Service entity clarity |
| 5 | `Person` (team) | `/studio` | E-E-A-T, Knowledge Panel |
| 6 | `ItemList` (portfolio) | `/work` | Entity clarity for projects |

### Implementation Note
For `"use client"` pages (`/studio`, `/work`, `/contact`), add JSON-LD via a server component layout wrapper:
```tsx
// In app/studio/layout.tsx (server component)
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObject) }}
/>
```

The full generated JSON-LD for all 6 schema types is available in the Schema agent output.

---

## 4. Performance / Core Web Vitals — 55/100

### LCP — Predicted: 1.2s–2.8s (Borderline / Needs Improvement on mobile)

**Biggest risk:** `HomeHero.tsx` and `ContactPage` use `gsap.fromTo(".element", { opacity: 0 }, ...)` with a `delay: 0.2`. GSAP sets opacity to 0 after hydration, meaning the LCP candidate is invisible until the tween completes. On P75 mobile this pushes LCP to 1.8–2.8s.

**Also:** `PaintReveal.tsx` (team photos on `/studio`) loads images as CSS `background-image`, bypassing Next.js preload, srcset, and AVIF/WebP optimisation.

**Fix:** Replace `fromTo` with GSAP `to()` (set initial opacity via CSS class, not via GSAP). Remove the 0.2s delay on hero elements. Fix PaintReveal to use `<Image>` components.

### INP — Predicted: 80ms–280ms (At risk on /studio)
`PaintReveal.tsx` calls `setStamps` on every raw pointer event with no RAF throttle, with up to 60 simultaneous Framer Motion animated SVG elements. Wrap `setStamps` in a `requestAnimationFrame` gate.

### CLS — Predicted: 0.02–0.06 (Good)
`aspect-[4/5]` wrappers on all `<Image fill>` components prevent layout shift. iClosed iframe has `height: 620px` hardcoded — conditional risk if widget renders taller.

### Other Performance Issues

| Issue | Impact | Fix |
|-------|--------|-----|
| Dual animation libraries | Framer Motion (~45KB gz) + GSAP (~27KB gz) on `/studio` | Replace `PaintReveal` Framer Motion with GSAP |
| No AVIF format | Missing 20–30% image size reduction | Add `formats: ['image/avif', 'image/webp']` to `next.config.ts` |
| No `preconnect` for iClosed | Extra DNS/TCP latency on contact page | Add `<link rel="preconnect" href="https://app.iclosed.io">` |
| Dead `--font-kufam` in globals.css | Confusing dead code | Replace with `var(--font-inter)` or remove |
| Scroll listener without throttle in Navbar | Minor INP risk | Acceptable in React 19 but worth noting |

### Strengths ✓
- `next/font` self-hosting — zero third-party font request
- `gsap.context()` + `ctx.revert()` everywhere — no memory leaks
- `gsap.quickTo` for cursor — optimal high-frequency pattern
- Formspree as native HTML form — zero JS overhead
- `strategy="lazyOnload"` on iClosed script — doesn't block initial render
- Correct `sizes` on all `<Image fill>` components

---

## 5. Images — 55/100

| Check | Status |
|-------|--------|
| `next/image` with `fill` + `sizes` | ✓ Pass — used consistently |
| `priority` on above-fold images | ✓ Pass — navbar logo and first 4 work cards |
| `aspect-ratio` wrappers for CLS | ✓ Pass |
| Descriptive alt text | ✗ Fail — `alt="Blend"`, `alt="KHM Tutoring"` |
| AVIF format enabled | ✗ Fail — not in `next.config.ts` |
| PaintReveal CSS background | ✗ Fail — bypasses all Next.js optimisation |
| OG image exists | ✗ Fail — none |
| Navbar logo format | ✗ Minor — PNG instead of SVG/WebP |

---

## 6. Visual / Mobile — 72/100

### Above the Fold
- Desktop: Hero heading visible, but **no CTA above the fold** — CTA section is at the bottom of the page
- Mobile: Heading visible at `text-5xl`, but stats row and any CTA are below fold
- The conversion path is: Hero → Stats → Portfolio → Services → CTA (5 scroll steps)
- Estimated 50–70% of visitors never reach the CTA at scroll position 5

### Color Contrast Risk
- `#004DFF` (brand accent) on `#000000` (black bg) = ~3.5:1 contrast ratio
- WCAG AA requires 4.5:1 for normal text — **fails** for body-size accent text on dark backgrounds
- Fix: use `#4D82FF` on dark backgrounds (~5.5:1)

### Mobile Issues
- Hamburger touch target may be ~40px (borderline below 48px minimum)
- iClosed iframe may create scroll-trap on iOS Safari
- Work page filter bar (now non-sticky): mobile users can't re-filter without scrolling to top

### Recommendations
1. Add a CTA button to the hero section ("Start a Project" or "See Our Work")
2. Add a "Start a Project" button to the navbar (sticky, visible on all pages)
3. Fix accent color contrast on dark backgrounds
4. Reserve explicit height for iClosed iframe to prevent CLS
5. Add `prefers-reduced-motion` guards to GSAP animations

---

## 7. AI Search Readiness — 18/100

| Signal | Status |
|--------|--------|
| JSON-LD schema | ✗ None |
| llms.txt | ✗ Missing |
| Quotable sourced facts | ✗ None — all stats unattributed |
| FAQ content | ✗ None |
| Named entities with profiles | ✗ Team named but no bios/links |
| AI crawler accessibility | ✓ robots.txt allows all |
| HTTPS | ✓ |
| Canonical URLs | ✓ (on most pages) |

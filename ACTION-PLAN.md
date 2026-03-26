# SEO Action Plan — sondrdesigns.com
**Generated:** 2026-03-25 | **Health Score:** 41/100

---

## CRITICAL — Fix Immediately

### C1. Create `app/sitemap.ts`
**Impact:** Fixes broken robots.txt reference, enables accelerated URL discovery
**Time:** 15 min

```typescript
// app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://sondrdesigns.com',         lastModified: new Date() },
    { url: 'https://sondrdesigns.com/work',     lastModified: new Date() },
    { url: 'https://sondrdesigns.com/services', lastModified: new Date() },
    { url: 'https://sondrdesigns.com/studio',   lastModified: new Date() },
    { url: 'https://sondrdesigns.com/contact',  lastModified: new Date() },
    { url: 'https://sondrdesigns.com/privacy-policy', lastModified: new Date() },
  ]
}
```
After deploying, submit `https://sondrdesigns.com/sitemap.xml` in Google Search Console.

---

### C2. Fix duplicate brand name in page titles
**Impact:** Fixes "The Studio | Sondr Designs | Sondr Designs" and "Contact Us | Sondr Designs | Sondr Designs"
**Time:** 5 min

In `app/studio/layout.tsx` — change `title` arg from `"The Studio | Sondr Designs"` to `"The Studio"`.
In `app/contact/layout.tsx` — change `title` arg from `"Contact Us | Sondr Designs"` to `"Contact Us"`.

---

### C3. Add keyword-rich title to homepage
**Impact:** Home page currently indexed as just "Sondr Designs" — no location, no keywords
**Time:** 10 min

Add to `app/page.tsx`:
```typescript
import { generateSeo } from "@/lib/metadata"

export const metadata = generateSeo({
  title: "Web Design & Development Agency — Honolulu, Hawaii",
  description: "Sondr Designs builds high-performance websites, conversion-focused design, and SEO for businesses in Hawaii and beyond. Get a free consultation.",
  path: "/",
})
```

---

### C4. Noindex `/thank-you`
**Impact:** Prevents form success page from being indexed
**Time:** 5 min

Add to `app/thank-you/page.tsx`:
```typescript
import type { Metadata } from 'next'
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}
```

---

## HIGH — Fix Within 1 Week

### H1. Add `LocalBusiness` + `WebSite` JSON-LD to root layout
**Impact:** Local pack eligibility, Knowledge Panel, AI citation readiness
**Time:** 30 min

Add to `app/layout.tsx` (inside the returned JSX):
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://sondrdesigns.com/#organization",
    "name": "Sondr Designs",
    "url": "https://sondrdesigns.com",
    "telephone": "+18087219350",
    "email": "studio@sondrdesigns.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Honolulu",
      "addressRegion": "HI",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.instagram.com/sondr.designs/",
      "https://www.linkedin.com/company/sondrdesigns/",
      "https://www.facebook.com/people/Sondr-Designs/61583928612114/"
    ],
    "logo": { "@type": "ImageObject", "url": "https://sondrdesigns.com/logo.webp" }
  }) }}
/>
```

---

### H2. Add OG image to `generateSeo()`
**Impact:** All social shares (LinkedIn, Facebook, iMessage, Slack) currently show no preview image
**Time:** 1 hour

1. Create a 1200×630px branded image at `/public/og-image.png`
2. In `lib/metadata.ts`, add to the returned object:
```typescript
openGraph: {
  // ...existing fields...
  images: [{ url: 'https://sondrdesigns.com/og-image.png', width: 1200, height: 630 }],
},
twitter: {
  // ...existing fields...
  images: ['https://sondrdesigns.com/og-image.png'],
},
```

---

### H3. Fix Services page metadata conflict
**Impact:** Page-level "Services" title overrides the stronger layout-level title
**Time:** 5 min

In `app/services/page.tsx` — delete the `export const metadata` block entirely. The layout's richer title will take effect.

---

### H4. Add metadata to missing pages
**Impact:** `/privacy-policy` currently indexed as "Sondr Designs"
**Time:** 15 min

Add `export const metadata = generateSeo({ title: "Privacy Policy", path: "/privacy-policy" })` to `app/privacy-policy/page.tsx`.

---

### H5. Fix GSAP `opacity: 0` LCP issue
**Impact:** Hero and contact page LCP is 1.8–2.8s on mobile due to GSAP opacity delay
**Time:** 30 min

In `components/sections/HomeHero.tsx` and `app/contact/page.tsx`:
- Change `gsap.fromTo(".element", { opacity: 0, y: 50 }, {...})` to `gsap.from(".element", { opacity: 0, y: 50, ... })`
- Remove `delay: 0.2` from all hero timeline tweens
- Add `opacity: 0` as an initial CSS class to those elements so the start state is set before hydration

---

### H6. Create `app/contact/layout.tsx` and `app/studio/layout.tsx`
**Impact:** These pages are `"use client"` so cannot export metadata directly
**Time:** 20 min each

```typescript
// app/contact/layout.tsx (and mirror for studio)
import { generateSeo } from "@/lib/metadata"
export const metadata = generateSeo({
  title: "Contact Us",
  description: "Ready to grow your business? Schedule a consultation with Sondr Designs.",
  path: "/contact",
})
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://app.iclosed.io" />
      {children}
    </>
  )
}
```

---

## MEDIUM — Fix Within 1 Month

### M1. Add team bios to `lib/data.ts`
**Impact:** Studio page is ~45 words — critically thin. Biggest E-E-A-T gap.
**Time:** 1–2 hours (writing + dev)

Add `bio: string` and optionally `linkedIn: string` to the `TeamMember` interface. Write 100–150 words per team member covering specializations, background, and experience. Render bios on the Studio page.

---

### M2. Add client testimonials
**Impact:** Zero third-party authority signals currently exist
**Time:** 2–3 hours (writing + dev)

Add a `Testimonial` interface to `lib/data.ts`:
```typescript
interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}
```
Build a testimonials section for Homepage and Services page. Even 2–3 real attributed testimonials dramatically improve E-E-A-T scoring.

---

### M3. Build internal case study pages
**Impact:** Currently all portfolio links go offsite — no indexed case study content on the domain
**Time:** 4–8 hours

Add routes `/work/[slug]` with proper `generateStaticParams`. Each page should document: the brief, the approach, and measured results with attribution. Update `Project` interface in `lib/data.ts` to support richer case study fields.

---

### M4. Add `BreadcrumbList` + `Service` schema
**Impact:** Breadcrumb rich results in SERPs, service entity clarity
**Time:** 45 min

Add BreadcrumbList to each inner page layout. Add Service ItemList to `app/services/page.tsx`. Full JSON-LD code in FULL-AUDIT-REPORT.md.

---

### M5. Add `Person` schema for team members
**Impact:** Team entity disambiguation, E-E-A-T support
**Time:** 20 min

Add to `app/studio/layout.tsx`. Full JSON-LD code in FULL-AUDIT-REPORT.md. Include `sameAs` links to LinkedIn profiles for maximum impact.

---

### M6. Add AVIF to `next.config.ts`
**Impact:** 20–30% smaller images with no markup changes
**Time:** 5 min

```typescript
images: {
  formats: ['image/avif', 'image/webp'],
  remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
},
```

---

### M7. Create `/public/llms.txt`
**Impact:** Guidance for Perplexity, SearchGPT, ClaudeBot — especially relevant since Sondr offers GEO as a service
**Time:** 30 min

Plain text file describing the business, services, location, and contact. Format mirrors `robots.txt` conventions.

---

### M8. Add hero CTA button
**Impact:** Currently 0 CTAs above the fold — reduces bounce → improves engagement signals
**Time:** 30 min

Add a button to `HomeHero.tsx` (e.g., "Start a Project" linking to `/contact` or "See Our Work" linking to `/work`).

---

### M9. Add physical address to contact page and footer
**Impact:** Trust signal for local SEO, required for `LocalBusiness` schema accuracy
**Time:** 20 min

Add address to `app/contact/page.tsx` contact details section and to the `Footer.tsx` component.

---

### M10. Fix accent color contrast
**Impact:** `#004DFF` on `#000000` = 3.5:1 — fails WCAG AA for normal-size text
**Time:** 15 min

For body-size text/links on dark backgrounds, use `#4D82FF` (~5.5:1 on black) instead of `#004DFF`.

---

### M11. Improve portfolio image alt text
**Impact:** Accessibility + Google Image Search
**Time:** 10 min

In `lib/data.ts`, add an `imageAlt: string` field to the `Project` interface with descriptive text. Example: `"KHM Tutoring — Hawaii K-12 tutoring service website homepage"`.

---

### M12. Throttle `PaintReveal` pointer events
**Impact:** INP risk on `/studio` — up to 60 Framer Motion elements updating on raw pointer events
**Time:** 1 hour

Wrap `setStamps` in a `requestAnimationFrame` gate. See FULL-AUDIT-REPORT.md Performance section for code pattern.

---

## LOW — Backlog

| # | Task | Time | File |
|---|------|------|------|
| L1 | Add `twitter.site` and `twitter.creator` to `generateSeo()` | 5 min | `lib/metadata.ts` |
| L2 | Fix dead `--font-kufam` in `globals.css` line 24 → `var(--font-inter)` | 5 min | `app/globals.css` |
| L3 | Fix web manifest icons — add `"purpose": "any maskable"` | 10 min | `public/site.webmanifest` |
| L4 | Implement IndexNow for Bing/Yandex instant indexing | 1 hour | `app/api/` + Vercel deploy hook |
| L5 | Evaluate removing Framer Motion — replace `PaintReveal` with GSAP | 2–4 hours | `components/ui/PaintReveal.tsx` |
| L6 | Add navbar "Start a Project" sticky CTA button | 30 min | `components/layout/Navbar.tsx` |
| L7 | Add `preconnect` for iClosed origin in contact layout | 5 min | `app/contact/layout.tsx` |
| L8 | Rewrite home meta description to be query-intent matched, not brand copy | 15 min | `app/layout.tsx` |
| L9 | Source homepage stats with attribution notes | 30 min | `lib/data.ts` + `HomeStats.tsx` |
| L10 | Add FAQ sections to `/services` and `/contact` | 2 hours | Content + dev |
| L11 | Consider adding a `/blog` route for long-term topical authority | Ongoing | `app/blog/` |

---

## Summary: Expected Score After Fixes

| Phase | Actions | Projected Score |
|-------|---------|----------------|
| Current | — | 41/100 |
| After Critical (C1–C4) | Sitemap, titles, noindex | ~50/100 |
| After High (H1–H6) | Schema foundation, OG image, LCP fix, metadata | ~63/100 |
| After Medium (M1–M12) | Bios, testimonials, case studies, more schema, CTAs | ~75/100 |
| After Low (L1–L11) | Polish, blog, IndexNow | ~82/100 |

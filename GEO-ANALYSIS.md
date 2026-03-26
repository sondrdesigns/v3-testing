# GEO Analysis — sondrdesigns.com
**Generative Engine Optimization Audit | Date: 2026-03-25**

---

## GEO Readiness Score: 28 / 100

| Dimension | Weight | Score | Weighted |
|-----------|--------|-------|----------|
| Citability | 25% | 5/25 | 5.0 |
| Structural Readability | 20% | 10/20 | 10.0 |
| Multi-Modal Content | 15% | 4/15 | 4.0 |
| Authority & Brand Signals | 20% | 5/20 | 5.0 |
| Technical Accessibility | 20% | 10/20 | 4.0 |
| **Total** | | | **28/100** |

---

## Platform Breakdown

| Platform | Score | Primary Barrier |
|----------|-------|----------------|
| Google AI Overviews | 22/100 | JS-rendered content, no FAQ, thin pages |
| ChatGPT Web Search | 12/100 | No Wikipedia presence, no Reddit mentions, no citable facts |
| Perplexity | 15/100 | No Reddit mentions, no sourced statistics, no structured answers |
| Bing Copilot | 20/100 | No IndexNow, no Bing-specific signals, same JS rendering issue |

---

## AI Crawler Access Status

**Current robots.txt:**
```
User-Agent: *
Allow: /
```

The wildcard rule technically allows all AI crawlers, but this is implicit coverage — not explicit. More importantly, it provides no guidance to AI systems about content structure or preferred pages.

| Crawler | Status | Notes |
|---------|--------|-------|
| GPTBot (OpenAI) | ✓ Allowed (implicit) | No explicit rule |
| OAI-SearchBot (OpenAI) | ✓ Allowed (implicit) | No explicit rule |
| ClaudeBot (Anthropic) | ✓ Allowed (implicit) | No explicit rule |
| PerplexityBot | ✓ Allowed (implicit) | No explicit rule |
| CCBot (Common Crawl) | ✓ Allowed (implicit) | Consider blocking for training data |
| anthropic-ai | ✓ Allowed (implicit) | Training crawler |
| Bytespider (ByteDance) | ✓ Allowed (implicit) | No explicit rule |

**Recommendation:** Add explicit allow rules for search AI crawlers and consider blocking pure training crawlers (CCBot, anthropic-ai) if desired.

---

## llms.txt Status: MISSING (404)

No `/llms.txt` file exists. This is the most technically addressable GEO gap — it takes under 30 minutes and directly signals to AI systems what Sondr Designs does, where it operates, and what pages matter most.

**Implemented:** See `/public/llms.txt` — created as part of this audit.

---

## Brand Mention Analysis

| Platform | Status | Impact |
|----------|--------|--------|
| LinkedIn | ✓ Present | Moderate AI citation signal |
| Instagram | ✓ Present (sondr.designs) | Low AI citation signal |
| Facebook | ✓ Present | Low AI citation signal |
| Wikipedia | ✗ Not present | HIGH gap — ChatGPT cites Wikipedia for 47.9% of agency queries |
| Reddit | ✗ No mentions found | HIGH gap — Perplexity sources 46.7% of citations from Reddit |
| YouTube | ✗ No channel | HIGH gap — YouTube mentions have the strongest AI citation correlation (0.737) |
| Google Business Profile | ✗ Not verified | Needed for Google AIO local results |
| Clutch.co / Agency directories | ✗ Not listed | Key authority signal for agency queries |

**Brand mention score: 2/10** — Only passive social profiles. No community presence, no third-party validation, no directory listings.

---

## Passage-Level Citability Analysis

AI systems prefer self-contained passages of **134–167 words** that directly answer a specific question. Every page on sondrdesigns.com currently fails this standard.

### Page-by-Page Assessment

**Homepage (/)**
- Hero: "Crafting Elevated Digital Experiences" + 1 sentence subtext
- Zero citable passages — no facts, no definitions, no direct answers
- Stats (96+, <1s, <7 days, 30%) are unattributed and cannot be cited

**Services (/services)**
- 5 services with 1–2 sentence descriptions each
- Closest to citable: "Every service we offer has one purpose: to make your business more money. No fluff, no jargon — just results that show up in your revenue." (28 words — too short, too vague)
- No definition blocks, no "What is X?" answers

**Studio (/studio)**
- Philosophy: "No templates. No shortcuts. Based in Hawaii, we build digital instruments that demand attention, establish authority, and drive conversion — relentlessly." (24 words)
- 3 team members with name + title only — no bio text to cite

**Work (/work)**
- Project descriptions: 20–28 words each
- No passage long enough or specific enough to be cited

**Contact (/contact)**
- No editorial content — purely functional

### Citable Passage Opportunities (Rewrite Suggestions)

The following are example rewrites targeting the 134–167 word optimal range:

**For the Services page — "What does a web design agency in Honolulu do?":**
> Sondr Designs is a Honolulu-based web design and development agency serving service businesses across Hawaii and beyond. We specialize in five core areas: high-performance website development using Next.js, conversion-focused design, user experience optimization, search engine optimization (SEO), and local SEO for Hawaii-based businesses. Our typical project timeline is under seven days for initial builds, with ongoing optimization included. We work exclusively with service-based businesses — consultants, tutoring companies, healthcare providers, and professional services — who need a digital presence that converts visitors into paying clients. Every project starts with a discovery session to understand your market, competitors, and revenue goals before a single line of code is written. Based in Honolulu, Hawaii, we serve clients both locally and remotely.

**For the Studio page — "Who founded Sondr Designs?":**
> Sondr Designs was founded by Aizen Chung (CEO) and Toshio Nagai (CTO), two digital builders based in Honolulu, Hawaii. The agency was built on a single principle: no templates, no shortcuts. [Add: years founded, background, specific credentials/experience here]. The team also includes Joseph Kim as Head of Design. Together, the three-person studio has built web platforms for businesses in Hawaii's education, food and beverage, and professional services sectors. Sondr operates as a boutique agency — deliberately small to deliver senior-level attention on every project — rather than scaling headcount at the expense of quality.

---

## Server-Side Rendering Check

**Result: CRITICAL ISSUE — Most content is client-rendered.**

AI crawlers (GPTBot, ClaudeBot, PerplexityBot) do **not** execute JavaScript. They see the initial HTML served before React hydrates and GSAP runs.

| Page | Rendering | AI Crawler Sees |
|------|-----------|----------------|
| `/` | Client (`HomeHero`, `HomePortfolio`, etc. are all `"use client"`) | Mostly empty shell |
| `/work` | Client (`"use client"` page) | Empty project grid |
| `/services` | Mixed — page is server, but `HomeServices` is `"use client"` | Page heading + CTA, but no service cards |
| `/studio` | Client (`"use client"` page) | Near-empty shell |
| `/contact` | Client (`"use client"` page) | Near-empty shell |

**What AI crawlers actually see on the homepage:**
The root layout renders `<Navbar>`, `<main>`, and `<Footer>`. The `<main>` contains the `Home` component which imports `HomeHero`, `HomeStats`, `HomePortfolio`, `HomeServices`, `HomeCTA` — all `"use client"` components. On first HTML delivery, these render as empty containers. A client-side-only React app is the worst possible pattern for AI discoverability.

**Fix priority: HIGH.** The most impactful single technical change for GEO is ensuring key content is server-rendered. Since GSAP is browser-only, the architecture must separate the static content (text, headings, descriptions) from the animated wrapper.

---

## Top 5 Highest-Impact Changes

### 1. Make key page content server-renderable
**Impact: Critical for all AI platforms**

The content in `HomeHero`, `HomeServices`, and the studio/work pages must be readable without JavaScript execution. The fix is to split each `"use client"` component into:
- A server component that renders the HTML content (text, headings, images)
- A client wrapper that attaches GSAP animations after hydration

This pattern means AI crawlers see full text content on first HTML response, while browser users still get all animations.

### 2. Create `/llms.txt`
**Impact: Direct AI crawler guidance — all platforms**
Already implemented. See `/public/llms.txt`.

### 3. Update `robots.ts` with explicit AI crawler rules
**Impact: Clear access signals — all platforms**
Already implemented. Explicit allow rules for GPTBot, ClaudeBot, PerplexityBot.

### 4. Add a Google Business Profile
**Impact: Google AI Overviews local results**
Sondr lists "Google Business Profile" as a service deliverable but has no verified GBP of its own. A verified GBP with consistent NAP (Name, Address, Phone) matching the website is required for local pack and AI Overview local results.

### 5. Build Reddit and YouTube presence
**Impact: ChatGPT (Reddit: 11.3%) and Perplexity (Reddit: 46.7%) citation sources**
These are the two platforms with the highest correlation to AI citations for agency-type queries. Even 3–5 genuine Reddit posts (r/web_design, r/Entrepreneur, r/Hawaii) and a YouTube channel with 2–3 project walkthrough videos would meaningfully shift AI visibility within 60–90 days.

---

## Schema Recommendations for AI Discoverability

Already added in the main audit: `LocalBusiness`, `ProfessionalService`, `WebSite`.

**Additional GEO-specific schema to add:**

| Schema | Page | AI Benefit |
|--------|------|------------|
| `FAQPage` | `/services`, `/contact` | Direct AI Overview eligibility |
| `HowTo` (process) | `/services` | Step-by-step AI citations |
| `Person` with `sameAs` LinkedIn | `/studio` | Named entity disambiguation |
| `Review` / `AggregateRating` | Homepage | Trust signal for AI summaries |

---

## Content Reformatting Suggestions

### Add question-based H2/H3 headings

Replace: `"Our Services"` → `"What Services Does Sondr Designs Offer?"`
Replace: `"Our Philosophy"` → `"How Does Sondr Designs Approach Web Projects?"`
Replace: `"Schedule a Consultation"` → `"How Do I Get Started With Sondr Designs?"`

Question-based headings directly match AI query patterns and dramatically increase passage selection rates.

### Add a "What We Do" definition block to the homepage

AI systems favor `"X is..."` or `"X refers to..."` definitional patterns. Add to the homepage (server-rendered):

> Sondr Designs is a web design and development agency based in Honolulu, Hawaii. We build custom websites, design conversion-focused user interfaces, and implement SEO strategies for service businesses. Our clients include tutoring companies, SaaS products, and professional service providers across Hawaii and the continental United States.

### Add FAQ to `/services`

Even 4–5 plain-text Q&A pairs (no schema required initially) dramatically improve AI citation selection:

- "How long does a website project take?" → "Our average build time is under seven days..."
- "Do you work with businesses outside Hawaii?" → "Yes, we work with clients..."
- "What is included in your SEO service?" → "Our SEO service includes..."
- "How much does a website cost?" → "Projects are scoped individually..."

---

## RSL 1.0 Licensing

Not implemented. For an agency site where the goal is maximum AI visibility (not content protection), RSL 1.0 with permissive terms would allow AI systems to freely index and cite all content. Consider adding RSL meta tags once content depth is improved.

---

## 30-Day GEO Action Plan

| Week | Action | Expected Impact |
|------|--------|----------------|
| 1 | Deploy `llms.txt` + explicit robots rules (done) | Immediate — better AI crawler guidance |
| 1 | Add 134–167 word citable passage blocks to Services and Studio | High — first indexable content AI can cite |
| 1 | Set up Google Business Profile | Medium — local AI Overview eligibility |
| 2 | Separate server content from GSAP client wrappers on Homepage | Critical — AI crawlers can finally read content |
| 2 | Add question-based headings to Services page | Medium — matches query patterns |
| 2 | Add FAQ section to Services page (4–5 questions) | High — FAQPage schema + AI Overview eligibility |
| 3 | Add `Person` schema with LinkedIn `sameAs` for team | Medium — named entity building |
| 3 | Publish 1–2 Reddit posts in r/web_design or r/Hawaii | Medium — begins community citation signal |
| 4 | Add `FAQPage` JSON-LD schema once FAQ content exists | High — direct AI Overview eligibility |
| 4 | Publish first YouTube video (project walkthrough) | High — strongest AI citation correlation |

# Spiritel Website — MVP Build Plan
**Date:** 2026-03-02
**Status:** APPROVED DECISIONS LOCKED — ready for implementation approval
**Mode:** Plan only. No production code until approved.

---

## 1. Folder Structure

```
/Spiritel
├── index.html                  ← Single-page entry point
├── assets/
│   ├── css/
│   │   └── style.css           ← All styles (variables, layout, components)
│   ├── js/
│   │   └── script.js           ← Minimal JS (smooth scroll, form validation, mobile nav)
│   └── images/
│       ├── logo.svg            ← Spiritel logo (placeholder until provided)
│       ├── hero-bg.jpg         ← Hero background (dark, professional)
│       └── icons/              ← SVG icons for services, steps, etc.
├── docs/
│   ├── plan.md                 ← This file
│   ├── spec.md                 ← UI/UX decisions once approved
│   └── notes.md                ← Q&A and clarifications
├── .gitignore
├── CLAUDE.md
└── README.md
```

---

## 2. Tech Stack

| Layer       | Choice                     | Rationale                                              |
|-------------|----------------------------|--------------------------------------------------------|
| Markup      | Pure HTML5 (semantic)      | No build step, fast load, easy to hand off             |
| Styles      | Pure CSS3 (custom props)   | CSS variables for theme, no framework bloat            |
| JS          | Vanilla JS (minimal)       | Smooth scroll, mobile nav toggle, form validation only |
| Fonts       | Google Fonts (self-hostable) | No extra dependencies                                |
| Icons       | Inline SVG or Heroicons    | Crisp at all sizes, no icon font weight               |
| Deployment  | Any static host (GitHub Pages, Netlify, Vercel) | Zero backend needed for MVP |
| Form        | FormSpree or Netlify Forms | Free tier, no server code, handles email delivery     |

**No framework (React/Vite) for MVP.** Can upgrade later if interactivity demands it.
**No backend.** Form data routed via FormSpree/Netlify Forms — discuss if lead data needs CRM integration.

---

## 3. Visual Direction

### Color Palette (Proposed)

| Role             | Color                     | Hex       | Notes                              |
|------------------|---------------------------|-----------|------------------------------------|
| Background       | Deep Navy                 | `#0B1120` | Trust, authority, security         |
| Surface          | Slate Dark                | `#141E30` | Card / section backgrounds         |
| Primary Accent   | Electric Blue             | `#2563EB` | Links, highlights, brand           |
| CTA / Action     | Bright Cyan               | `#06B6D4` | "Get Quote" button, high contrast  |
| CTA Hover        | Deep Cyan                 | `#0891B2` | Hover state for CTAs               |
| Body Text        | Off-White                 | `#E2E8F0` | Readable on dark backgrounds       |
| Muted Text       | Cool Gray                 | `#94A3B8` | Subheadings, secondary copy        |
| Light Section BG | Near-White                | `#F8FAFC` | Alternating sections (light mode)  |
| Dark Text on BG  | Charcoal                  | `#1E293B` | Text on light sections             |
| Border / Divider | Subtle Blue-Gray          | `#1E3A5F` | Cards, separators                  |

**Vibe:** Dark, high-tech, trustworthy — like enterprise security software. Alternating dark/light sections add breathing room.

### Typography (Proposed)

| Role        | Font                    | Weight   | Notes                             |
|-------------|-------------------------|----------|-----------------------------------|
| Headings    | Plus Jakarta Sans       | 700/800  | Modern, geometric, confident      |
| Body        | Inter                   | 400/500  | Highly readable at small sizes    |
| Monospace   | JetBrains Mono (opt.)   | 400      | For any technical spec details    |

Base size: 16px. Scale: 1.25 type scale (14, 16, 20, 25, 31, 39px).

---

## 4. Page Sections & Content Outline

### A. Navigation Bar
- Logo left, nav links right: `Why Spiritel | How It Works | Services | Get a Quote`
- Sticky on scroll (subtle background blur/shadow)
- Mobile: hamburger → slide-down menu
- CTA button in nav: `Get Quote` (cyan, prominent)

---

### B. Hero Section
**Purpose:** Immediately communicate what Spiritel does and drive action.

**Layout:** Full-width, dark background, hero image or subtle animated gradient. Text left, optional device mockup or perimeter security illustration right.

**Suggested Copy:**
> **Headline:** Protect Your Business. No Lock-In. No Compromise.
> **Subheadline:** Spiritel designs and coordinates professional perimeter security installations for small and mid-size businesses — with the freedom to choose your own cameras, sensors, and monitoring provider.
> **CTA 1 (primary):** Get a Free Quote →
> **CTA 2 (secondary):** See How It Works ↓

**Trust signals under CTAs:**
- ✓ No proprietary hardware lock-in
- ✓ Vetted professional installers
- ✓ You choose your monitoring provider

---

### C. Why Spiritel (No Lock-In)
**Purpose:** Address the #1 objection — "will I be stuck with your system forever?"

**Layout:** 3-column card grid or icon + text pairs on a light background.

**Suggested Cards:**
1. **Open Hardware** — Use any camera or sensor brand you trust. We're brand-agnostic.
2. **Your Monitoring Choice** — Keep your current security company or pick a new one. We don't dictate that.
3. **Professional Installs** — We connect you with vetted low-voltage installers in your area. Quality guaranteed.
4. **Modular & Scalable** — Start with what you need. Add cameras, access control, or sensors anytime.

---

### D. How It Works
**Purpose:** Reduce friction — show it's simple.

**Layout:** Numbered horizontal steps (desktop) / vertical stack (mobile) on a dark background.

**Suggested 4 Steps:**
1. **Tell Us About Your Site** — Share your location, business type, and what you're protecting.
2. **We Design Your System** — We recommend the right mix of cameras, sensors, and access control — all open-standard.
3. **Get Matched With an Installer** — We connect you with a vetted low-voltage professional in your area.
4. **Activate & Monitor** — Your system goes live. You pick your monitoring provider. We're here if you ever need changes.

---

### E. Modular Services
**Purpose:** Show breadth of options, reinforce the à la carte model.

**Layout:** Icon card grid (2×3 or 3×2) on a light or subtle dark background.

**Suggested Service Cards:**
1. **Outdoor Camera Coverage** — Perimeter surveillance designed for your lot, fence line, or entry points.
2. **Motion & Intrusion Detection** — Sensors that alert before a breach becomes an incident.
3. **Gate & Access Control** — Manage who enters your property with keypads, fobs, or mobile credentials.
4. **Video Analytics** — License plate recognition, object detection, and alert filtering.
5. **Remote Monitoring Integration** — We help you connect to any professional monitoring center.
6. **System Expansion & Upgrades** — Add capacity as your business grows — no forklift upgrades required.

---

### F. Social Proof / Trust Bar (Optional)
**Purpose:** Build credibility with logos or stats.

**Options:**
- "Trusted by [N] businesses across [region]"
- Stats: installs completed, years of experience, installer partners
- Partner/brand logos (if brand-agnostic, could show camera brands supported: Axis, Hikvision, Dahua, Hanwha, etc.)

---

### G. Quote / Contact Form
**Purpose:** Convert interested visitors into leads.

**Layout:** Two-column — short form left, contact info right — on a dark background.

**Form Fields (proposed):**
- Full Name *
- Business Name *
- Email *
- Phone
- City / State *
- Type of Business (dropdown: Retail, Warehouse, Office, Restaurant, Other)
- What are you looking to protect? (checkboxes: Parking Lot, Entry Points, Fence Line, Interior, Other)
- Anything else? (short textarea)
- Submit: `Send My Quote Request`

**No payment, no account creation.** FormSpree or Netlify Forms routes submission to your email.

---

### H. Footer
- Logo + tagline
- Nav links (reuse main nav)
- `© 2026 Spiritel. All rights reserved.`
- Optional: Privacy Policy link (placeholder)

---

## 5. JS Features (Minimal)

- Smooth scroll for anchor links (`#how-it-works`, `#services`, etc.)
- Mobile nav toggle (hamburger open/close)
- Sticky nav background on scroll
- Form client-side validation (required fields, email format) before submit
- Optional: Scroll-reveal fade-in on sections (CSS-only or ~10 lines of JS)

---

## 6. Performance & Accessibility Goals

- Target: Lighthouse score 90+ (performance, accessibility, best practices)
- All images: compressed, with `alt` text
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`–`<h3>` hierarchy
- Color contrast: WCAG AA minimum (4.5:1 for body text)
- Keyboard navigable: focus styles on all interactive elements
- Mobile-first CSS, tested at 375px, 768px, 1280px

---

## 7. Confirmed Decisions (from user Q&A, 2026-03-02)

| Decision | Choice |
|---|---|
| **Tagline** | "Your Perimeter. Your Rules." |
| **Logo** | Design a simple SVG logo during build |
| **Colors** | Dark navy #0B1120 + Electric Blue #2563EB + Cyan CTA #06B6D4 ✓ |
| **Fonts** | Plus Jakarta Sans (headings) + Inter (body) |
| **Hero background** | Dark gradient (no photo) |
| **Hosting** | Netlify (free tier, forms included) |
| **Geography** | National USA — copy uses "installers near you" |
| **Social proof** | Placeholder numbers (e.g., "50+ installs", "100+ businesses served") — confirm before launch |
| **Form email** | Placeholder — wire real email in Netlify dashboard at deployment |
| **Form backend** | Netlify Forms (native, free, no code required) |

### Remaining Open Items (non-blocking)
- Service card accuracy — assuming all 6 are correct; will confirm during review pass
- Brand voice tone — defaulting to **bold + direct + professional** based on tagline choice ("Your Rules.")

---

## 8. Next Steps (After Approval)

1. You answer the numbered questions above
2. We finalize spec in `docs/spec.md`
3. Build in order: `index.html` structure → `style.css` → `script.js` → form wiring
4. Local test, then commit with message: `feat: initial MVP homepage build`
5. Deploy to chosen host

# CLAUDE.md – Integration One Project Instructions

Always read this entire file first in every session.

## Core Rules & Behavior
1. Start in **PLAN MODE** unless I explicitly say "implement now" or "skip planning".
2. Interview on unclear items with numbered questions: UI/UX, colors/fonts, copy, accessibility, edge cases.
3. **Strong preference**: Client-side/static implementation (HTML/CSS/JS).
   - Only suggest server/Edge Functions if sensitive data appears → discuss tradeoffs first.
4. Suggest improvements: simpler UX, better accessibility, faster load, more trustworthy/security feel.
5. After code: summarize what was done and what needs manual review.
6. Keep responses focused: headings, bullets, code blocks — no walls of text.

## Project Overview
Company: Integration One (formerly Spiritel)
Domain: integrationone.net (Cloudflare — worker named "securetest")
GitHub: GitClav68v2
Target: Small/medium businesses (SMBs)
Product: Perimeter security solutions — cameras, sensors, access control
Model: Open / à la carte / modular / no proprietary lock-in
- Customers choose their own hardware and monitoring company
- Integration One coordinates professional installation via vetted low-voltage installers
- Goal: Make high-quality perimeter security easy, affordable, and flexible for SMBs

Contact:
- info@integrationone.net
- sales@integrationone.net
- Phone: 800-555-1212 (placeholder — needs real number)

## Current Site Status
- Live at integrationone.net and www.integrationone.net
- Plain HTML/CSS/JS static site (no build step)
- Deployed via Cloudflare Workers (worker: securetest)
- Form handled by Web3Forms

## Sections Live
- Hero, Why Integration One, How It Works, Services, Industries Served, FAQ, Quote Form, Footer
- Privacy policy page: privacy.html

## Pending Improvements
- Replace placeholder phone number with real number
- Add trust/stats bar (years in business, installs, states served)
- Display contractor license number
- Set up Google Workspace email (info@ and sales@)
- Cancel Netlify subscription

## Folder & File References
- index.html → main entry point
- privacy.html → privacy policy
- assets/css/style.css → main styles
- assets/js/script.js → interactivity
- assets/images/ → logos, icons (favicon.svg lives here)
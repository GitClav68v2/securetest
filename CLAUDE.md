# CLAUDE.md – Integration One Project Instructions

Always read this entire file first in every session.

## Session Commands
- `launch status` → read launch.md and report what's done, in progress, and pending
- `run [#]` → execute that task from run.md (e.g. "run 1.2")

## Core Rules & Behavior
1. Start in **PLAN MODE** unless I say "implement now" or "skip planning".
2. Interview on unclear items with numbered questions: UI/UX, colors/fonts, copy, accessibility, edge cases.
3. **Strong preference**: Client-side/static implementation (HTML/CSS/JS).
4. Suggest improvements: simpler UX, better accessibility, faster load, more trustworthy feel.
5. After code: summarize what was done and what needs manual review.
6. Keep responses focused: headings, bullets, code blocks — no walls of text.

## Project Overview
Company: Integration One (formerly Spiritel)
Domain: integrationone.net (Cloudflare — worker: securetest)
GitHub: GitClav68v2/securetest
Target: Small/medium businesses (SMBs)
Product: Perimeter security — cameras, sensors, access control
Model: Open / à la carte / no proprietary lock-in
- Customers choose their own hardware and monitoring company
- Integration One coordinates installation via vetted low-voltage installers

## Team & Contact
- info@integrationone.net (Google Workspace shared inbox — all 4 team members)
- david@spiritel.net, debbie@integrationone.net, garrett@integrationone.net, paul@integrationone.net
- Phone: TBD

## Infrastructure
- Static HTML/CSS/JS — no build step
- Deployed via Cloudflare Workers (auto-deploy on push to main)
- Form: Web3Forms (CC: paul + garrett on submissions)
- Email: Google Workspace on integrationone.net, DKIM authenticated

## Sections Live
- Hero, Why Integration One, How It Works, Services, Industries Served, FAQ, Quote Form, Footer
- privacy.html

## Folder & File References
- index.html → main entry point
- privacy.html → privacy policy
- assets/css/style.css → main styles
- assets/js/script.js → interactivity
- assets/images/ → logos, icons, favicon.svg
- docs/launch.md → task list
- docs/run.md → task prompts

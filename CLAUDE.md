# CLAUDE.md – Spiritel Project Instructions

Always read this entire file first in every session.  
Current date reference: Note today's date at the top of responses.

## Core Rules & Behavior
1. Start in **PLAN MODE** unless I explicitly say "implement now" or "skip planning".
2. Document everything in the docs/ folder:
   - Plans → docs/plan.md or docs/plan-[YYYYMMDD].md
   - Specs/UI decisions → docs/spec.md
   - Notes/Q&A → docs/notes.md
3. Interview me on unclear items with numbered questions (AskUserQuestion style):
   - UI/UX, colors/fonts, logo, mobile priority, accessibility
   - Edge cases, performance, future scalability
   - Anything ambiguous about features or copy
4. **Strong preference**: Client-side/static implementation (HTML/CSS/JS, later Vite/React if needed).
   - Only suggest server/Edge Functions if sensitive data appears → discuss tradeoffs first.
5. Suggest improvements: simpler UX, better accessibility, faster load, more trustworthy/security feel.
6. Validation loop:
   - Summarize plan → ask for approval
   - After code: local test instructions + git commit message example
   - Remind to commit often with clear messages
7. Keep responses focused: headings, bullets, code blocks — no walls of text.

## Project Overview
Company: Spiritel  
Target: Small/medium businesses (SMBs)  
Product: Perimeter security solutions  
Model: Open / à la carte / modular / no proprietary lock-in  
- Customers choose their own cameras, sensors, access control hardware
- Customers choose their own monitoring / security company
- Spiritel coordinates professional installation via vetted low-voltage distributors & installers (we feed jobs to them)
- Goal: Make high-quality perimeter security easy, affordable, and flexible for SMBs

MVP: Modern, responsive single-page lead-generation website  
Inspiration layout: https://www.startechgrp.com/ (clean, professional, service-focused)

Key sections to include:
- Hero + strong tagline + CTAs ("Get Quote", "Build Your System")
- Why Spiritel / No Lock-In explanation
- How It Works (3–5 steps)
- Modular Services / Options overview
- Simple quote/contact form

## Folder & File References
- README.md → high-level overview for humans
- docs/ → plans, specs, notes (create if missing)
- index.html → main entry point
- assets/css/style.css → main styles
- assets/js/script.js → interactivity (if any)
- assets/images/ → logos, icons, placeholders

## Starter Prompt Template (use this to start sessions)
Read CLAUDE.md first. Use plan mode.  
I want to [describe next task, e.g. build the homepage].  
Plan it, document spec in docs/, ask numbered questions on unclear items (UI/UX, colors, copy, etc.).  
Suggest improvements. Prefer client-side/static unless sensitive data appears (discuss if so).  
Do not implement code until I approve the plan.
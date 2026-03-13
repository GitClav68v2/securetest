# Integration One — Launch Task List

## How to Use
- Say `launch status` → Claude reports progress
- Say `run [#]` → Claude executes that task

---

## 1. Site Content (Waiting on Info)
- [ ] 1.1 Add real phone number to nav, footer, and quote form
- [ ] 1.2 Add trust/stats bar (years in business, installs completed, states served)
- [ ] 1.3 Display contractor license number in footer or about section

## 2. New Pages
- [ ] 2.1 Build products page — security cameras and equipment with photos
      - Waiting on: product photos from David
      - Layout: grid of product cards with image, name, short description

## 3. Housekeeping
- [ ] 3.1 Cancel Netlify subscription
- [ ] 3.2 Update Web3Forms account name from "Infospiritel" to "Integration One"

## 4. Customer Portal (Phase 2 — Planned)
**Stack:** Supabase (auth + database + file storage) + Stripe (payments) + Vercel (hosting)
**Status:** Architecture design phase

### 4.1 Architecture & Setup
- [ ] 4.1.1 Create Supabase project
- [ ] 4.1.2 Design database schema (customers, invoices, payments)
- [ ] 4.1.3 Set up Supabase storage bucket for PDF invoices
- [ ] 4.1.4 Create Vercel project and link to GitHub

### 4.2 Authentication
- [ ] 4.2.1 Customer login — email/password + Google OAuth
- [ ] 4.2.2 Admin login — separate role for team members
- [ ] 4.2.3 Row Level Security — customers only see their own invoices

### 4.3 Customer-Facing Portal
- [ ] 4.3.1 Login page
- [ ] 4.3.2 Customer dashboard — list of invoices (date, amount, status)
- [ ] 4.3.3 Invoice detail — PDF viewer/download
- [ ] 4.3.4 Payment flow via Stripe (pay outstanding invoice online)

### 4.4 Admin Panel
- [ ] 4.4.1 Admin dashboard — list all customers
- [ ] 4.4.2 Upload PDF invoice and assign to customer
- [ ] 4.4.3 Mark invoice as paid / track payment status

### 4.5 Integration
- [ ] 4.5.1 Link "Customer Login" from integrationone.net nav
- [ ] 4.5.2 Email notification to customer when new invoice is uploaded

## 5. Future Enhancements
- [ ] 5.1 Add Google Analytics or similar
- [ ] 5.2 CRM integration for quote form leads

---

## Completed
- [x] Site live at integrationone.net
- [x] Auto-deploy via GitHub Actions → Cloudflare Workers
- [x] Sales email removed
- [x] Phone number auto-format on quote form
- [x] Web3Forms CC to paul + garrett
- [x] Google Workspace email for integrationone.net (DKIM authenticated)
- [x] info@ shared inbox with full team

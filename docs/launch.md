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

## 4. Customer Portal
**Stack:** Supabase + Stripe + Vercel
**Live at:** portal.integrationone.net
**Repo:** GitClav68v2/integration-one-portal

### 4.1–4.4 Core Portal ✅ Complete
- [x] 4.1.1 Supabase project created
- [x] 4.1.2 Database schema (customers, invoices tables with RLS)
- [x] 4.1.3 Supabase storage bucket for PDF invoices
- [x] 4.1.4 Vercel project deployed + custom domain
- [x] 4.2.1 Customer login — email/password + Google OAuth
- [x] 4.2.2 Admin login — dcclav@gmail.com routes to admin panel
- [x] 4.2.3 Row Level Security — customers only see their own data
- [x] 4.3.1 Login page
- [x] 4.3.2 Customer dashboard — invoice list with status badges
- [x] 4.3.3 Invoice detail — PDF download via signed URL
- [x] 4.4.1 Admin dashboard — list all customers with invoice counts
- [x] 4.4.2 Admin customer page — add invoices + upload PDFs
- [x] 4.5.1 "Client Login" link added to integrationone.net nav

### 4.5 Remaining Portal Tasks
- [ ] 4.5.2 Add Customer form (+ Add Customer button needs a page)
- [ ] 4.5.3 Email notification to customer when new invoice is uploaded (Resend)
- [ ] 4.5.4 Set up Supabase Auth redirect URLs for portal.integrationone.net
- [ ] 4.5.5 Stripe payment integration (pay invoice online)

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
- [x] Customer portal live at portal.integrationone.net
- [x] "Client Login" link in integrationone.net nav

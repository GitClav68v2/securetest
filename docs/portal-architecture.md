# Integration One — Customer Portal Architecture

**Date:** 2026-03-13
**Status:** PLAN — No code until approved
**URL:** portal.integrationone.net

---

## Overview

A secure customer portal where Integration One clients log in to view invoices, download PDFs, and pay online. Separate from the marketing site but linked from the main nav.

---

## Tech Stack

| Layer | Service | Purpose | Cost |
|-------|---------|---------|------|
| Hosting | Vercel | Serves the portal app | Free tier |
| Frontend | React + Vite | Single-page app | Free |
| Auth | Supabase Auth | Login (email/password + Google) | Free tier |
| Database | Supabase Postgres | Customers, invoices, payments | Free tier |
| File Storage | Supabase Storage | PDF invoice files | Free up to 1GB |
| Payments | Stripe | Full and partial invoice payments | 2.9% + 30¢/transaction |
| Email | Resend | Invoice uploaded + payment notifications | Free up to 3k/month |

**Estimated monthly cost to start: $0** (until volume grows)

---

## Database Schema

### customers
| Field | Type | Notes |
|-------|------|-------|
| id | uuid | Primary key |
| account_number | text | Unique, e.g. IO-0001 |
| business_name | text | |
| contact_name | text | |
| email | text | Login email |
| phone | text | |
| created_at | timestamp | |

### invoices
| Field | Type | Notes |
|-------|------|-------|
| id | uuid | Primary key |
| customer_id | uuid | FK → customers |
| invoice_number | text | e.g. INV-2026-001 |
| invoice_date | date | |
| due_date | date | |
| amount_total | numeric | Full invoice amount |
| amount_paid | numeric | Running total paid |
| status | enum | unpaid / partial / paid |
| pdf_path | text | Path in Supabase storage bucket |
| notes | text | Internal notes |
| created_at | timestamp | |

### payments
| Field | Type | Notes |
|-------|------|-------|
| id | uuid | Primary key |
| invoice_id | uuid | FK → invoices |
| customer_id | uuid | FK → customers |
| amount | numeric | Amount of this payment |
| stripe_payment_id | text | Stripe PaymentIntent ID |
| paid_at | timestamp | |

---

## Auth Flow

### Customer Login
1. Customer goes to portal.integrationone.net
2. Logs in with email/password or Google
3. Supabase Auth issues a session token
4. Row Level Security (RLS) ensures they only see their own invoices

### Admin Login
- Same login page, different role
- Admin role set in Supabase (custom claim)
- Admin sees all customers and all invoices
- Team members: david, debbie, garrett, paul

### Security
- RLS on all tables — customers cannot access other customers' data
- PDF files in private storage bucket — accessed via signed URLs (expire after 1 hour)
- Admin-only write access to invoices and customer records

---

## File Storage Structure

```
supabase/storage/invoices/
└── {customer_id}/
    └── {invoice_id}.pdf
```

- Private bucket — no public access
- Signed URLs generated on demand for download
- Uploaded by admin only

---

## Stripe Payment Flow

1. Customer views unpaid/partial invoice
2. Clicks "Pay Now" — enters amount (full or partial)
3. Portal calls Supabase Edge Function → creates Stripe PaymentIntent
4. Stripe Elements collects card details (PCI compliant, card data never touches our server)
5. Payment confirmed → Edge Function updates invoice `amount_paid` and `status`
6. Email receipt sent via Resend

---

## Email Notifications (via Resend)

| Trigger | Recipient | Content |
|---------|-----------|---------|
| New invoice uploaded | Customer | "You have a new invoice — log in to view" |
| Payment received | Customer | Receipt with amount and invoice number |
| Payment received | Admin (info@integrationone.net) | Alert with customer name and amount |

---

## Portal Pages

### Customer-Facing
- `/login` — Email/password + Google login
- `/dashboard` — List of all invoices (number, date, amount, status)
- `/invoice/[id]` — Invoice detail: PDF viewer, payment history, Pay Now button

### Admin-Facing
- `/admin` — List all customers
- `/admin/customers/[id]` — Customer detail + invoice list
- `/admin/invoices/new` — Upload PDF, set invoice details, assign to customer
- `/admin/invoices/[id]` — Edit invoice, view payment history

---

## How Portal Connects to Marketing Site

- Add "Client Login" link to integrationone.net nav (top right, subtle)
- Links to portal.integrationone.net
- Vercel handles the subdomain — DNS CNAME added in Cloudflare

---

## Setup Sequence (When Ready to Build)

1. Create accounts: Supabase, Vercel, Stripe, Resend
2. Set up Supabase project — run migrations, enable Auth, create storage bucket
3. Set up Vercel project — link to new GitHub repo (separate from marketing site)
4. Configure Cloudflare DNS → portal.integrationone.net CNAME to Vercel
5. Build frontend (React + Vite) — login, dashboard, invoice pages
6. Build admin panel
7. Wire Stripe payments via Supabase Edge Functions
8. Wire Resend email notifications
9. Test end-to-end, then launch

---

## Confirmed Decisions
- Account number format: IO-0001, IO-0002, IO-0003...
- Customers can update their own contact info in the portal
- Password reset: self-service (Supabase handles this natively)

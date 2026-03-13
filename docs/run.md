# Integration One — Task Prompts

Run a task by saying "run [#]" — Claude will execute it using the prompt below.

---

## 1. Site Content

**run 1.1** — Add phone number
> Add the phone number [NUMBER] to the nav, footer, and quote form placeholder. Replace all instances of the placeholder number and the tel: href links.

**run 1.2** — Add trust/stats bar
> Build a trust/stats bar section between the Hero and Why Integration One sections. Include: [YEARS] years in business, [INSTALLS] installs completed, [STATES] states served. Match the existing dark/light section pattern. Keep it minimal — 3 stats, bold numbers, short labels.

**run 1.3** — Add contractor license number
> Add the contractor license number [LICENSE#] to the footer. Small text, near the copyright line. Format: "License #XXXXXX"

---

## 2. New Pages

**run 2.1** — Build products page
> Build a new products.html page in the same style as index.html. Layout: responsive grid of product cards — each card has a photo, product name, and 1-2 line description. Navigation should link to it. Products to include: [David to provide list and photos — drop images in assets/images/products/]

---

## 3. Housekeeping

**run 3.1** — Cancel Netlify
> Reminder: Log into netlify.com and cancel the subscription manually. Claude cannot do this.

**run 3.2** — Rename Web3Forms
> Log into web3forms.com, find the "Infospiritel" form, rename it to "Integration One".

---

## 4. Customer Portal

**run 4.5.2** — Add Customer form
> In the portal project (/Volumes/iMac RAID/Claude/Integration One Portal), build the Add Customer page at src/pages/AdminNewCustomer.jsx. It should have a form with fields: business_name, contact_name, email, phone, account_number (auto-suggest next IO-XXXX). On submit, insert into Supabase customers table and redirect to /admin. Wire the "+ Add Customer" button in AdminDashboard.jsx to navigate to /admin/customers/new.

**run 4.5.3** — Email notifications via Resend
> Set up email notifications using Resend so that when an admin uploads an invoice PDF for a customer, the customer receives an email with their invoice details and a link to portal.integrationone.net. Use a Supabase Edge Function triggered on invoice insert/update.

**run 4.5.4** — Set Supabase Auth redirect URLs
> In Supabase Auth settings, add portal.integrationone.net to the allowed redirect URLs so that password reset and magic link emails work correctly on the live domain (not just localhost).

**run 4.5.5** — Stripe payment integration
> Integrate Stripe into the portal so customers can pay invoices online. Use Stripe Checkout for full or partial payments. Create a Supabase Edge Function to generate a Stripe Checkout session. Update Invoice.jsx to show a "Pay Now" button that calls the edge function. On success, update invoice status and amount_paid in the database.

# Next.js | TypeScript App for the non-profit organisation Frigear.

An all-in-one high-performance SaaS application.

# Features

- Secure user management and authentication
- Powerful data access & management tooling on top of PostgreSQL
- Integration with Stripe Checkout and Stripe customer portal
- Automatic syncing of pricing plans and subscription statuses Stripe webhooks

# Want to support this open source volunteer project? - Use the contact form through the webapp here:

- [Frigear App][https://frigear.nu]



# Local development

1. `git clone https://github.com/s1xp4ck/frigear-sub-payments.git`
2. `cd frigear-sub-payments`
3. `pnpm i`
4. `pnpm vercel env pull` (you might have to sign in and choose the project)
5. `pnpm supabase start`
6. `pnpm dev`
5. Open `http://localhost:3000` in your browser.`
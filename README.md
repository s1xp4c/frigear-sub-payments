# Next.js | TypeScript App for the non-profit organisation Frigear.

An all-in-one high-performance SaaS application.

## Features

- Secure user management and authentication
- Powerful data access & management tooling on top of PostgreSQL
- Integration with Stripe Checkout and Stripe customer portal
- Automatic syncing of pricing plans and subscription statuses Stripe webhooks

> Want to support this open source volunteer project? Contact us here: [Frigear App](https://frigear.nu)

## Local development

When you use the local supabase instance, you need to have [Docker](https://www.docker.com/) installed, and fill the
database yourself.

### Using local supabase instance:

1. `git clone https://github.com/s1xp4ck/frigear-sub-payments.git`
2. `cd frigear-sub-payments`
3. `pnpm i`
4. `pnpm supabase start` <small>(you might have to update the supabase anon key in the .env.local file after)</small>
5. `cp .env.example .env.local`
6. `pnpm dev`
7. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Using production database:

1. `git clone https://github.com/s1xp4ck/frigear-sub-payments.git`
2. `cd frigear-sub-payments`
3. `pnpm i`
4. `pnpm vercel env pull` <small>(you might have to sign in and choose the project)</small>
5. `pnpm dev`
6. Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note**: You will have to do `pnpm vercel env pull` or create the `.env.local` file before you can run the project.
# Ralph-Matthew-Punzalan

Personal portfolio for R4lph Matthew Punzalan — front-end development, UI/UX design, and featured project work.

## Setup

```bash
npm install
npm run dev
```

## Contact form (Supabase + Gmail)

### Step 1 — SQL Editor (Supabase)

1. Open [Supabase Dashboard](https://supabase.com/dashboard) → your project  
2. Go to **SQL Editor → New query**  
3. Paste the full contents of `supabase/contact_messages.sql`  
4. Click **Run**  
5. Confirm under **Table Editor** that `contact_messages` exists  

This stores every submission. It does **not** send email by itself.

### Step 2 — Gmail notifications (Web3Forms)

1. Go to [web3forms.com](https://web3forms.com)  
2. Enter **ralphmatthewpunzalan23@gmail.com** and create an access key  
3. Check your **Gmail inbox** for the key  
4. Add to `.env.local` and Vercel:

| Variable | Purpose |
|----------|---------|
| `VITE_SUPABASE_URL` | Saves messages to Supabase |
| `VITE_SUPABASE_ANON_KEY` | Supabase client (public, protected by RLS) |
| `VITE_WEB3FORMS_ACCESS_KEY` | Sends each submission to your Gmail |

### What happens when someone submits

1. Message is **saved** in Supabase → `contact_messages`  
2. Web3Forms **emails your Gmail** with their name, email, subject, and message  
3. You can **Reply** in Gmail directly to the visitor (reply-to is set to their email)

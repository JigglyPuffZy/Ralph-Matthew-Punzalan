-- =============================================================================
-- CONTACT FORM SETUP — paste this entire file in Supabase SQL Editor → Run
-- =============================================================================
--
-- What this does:
--   • Creates the contact_messages table (stores every form submission)
--   • Lets visitors INSERT only (your site contact form)
--   • Blocks public reads (only you see messages in Supabase dashboard)
--
-- Gmail notifications are NOT sent by SQL.
-- After running this script, set up Web3Forms with ralphmatthewpunzalan23@gmail.com
-- and add VITE_WEB3FORMS_ACCESS_KEY to .env.local + Vercel.
-- =============================================================================

-- 1. Table
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) >= 1),
  email text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  subject text not null check (char_length(trim(subject)) >= 1),
  message text not null check (char_length(trim(message)) >= 1),
  created_at timestamptz not null default now()
);

comment on table public.contact_messages is
  'Portfolio contact form submissions. Email alerts go to Gmail via Web3Forms in the app.';

-- 2. Index (newest first in Table Editor)
create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

-- 3. Row Level Security
alter table public.contact_messages enable row level security;

-- 4. Policies (safe to re-run)
drop policy if exists "Anyone can send a contact message" on public.contact_messages;
drop policy if exists "No public reads on contact messages" on public.contact_messages;

create policy "Anyone can send a contact message"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (true);

create policy "No public reads on contact messages"
  on public.contact_messages
  for select
  to anon, authenticated
  using (false);

-- 5. Permissions for the contact form (anon = visitors on your site)
grant usage on schema public to anon, authenticated;
grant insert on public.contact_messages to anon, authenticated;

-- 6. Quick check — should return column names (run after the script)
-- select column_name, data_type from information_schema.columns
-- where table_schema = 'public' and table_name = 'contact_messages';

-- Run this in Supabase: SQL Editor → New query → Run

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

-- Allow visitors to submit the contact form (insert only)
create policy "Anyone can send a contact message"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (true);

-- Only you (logged into Supabase dashboard / service role) read messages
create policy "No public reads on contact messages"
  on public.contact_messages
  for select
  to anon, authenticated
  using (false);

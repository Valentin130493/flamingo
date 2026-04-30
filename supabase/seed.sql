-- Enable pg_graphql extension (run once in Dashboard → Database → Extensions)
-- create extension if not exists pg_graphql;

-- ─── Schema ────────────────────────────────────────────────────────────────

create table if not exists users (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  avatar_url text
);

create table if not exists issues (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  description text,
  status      text not null default 'open'
                check (status in ('open', 'in_progress', 'done', 'cancelled')),
  priority    text not null default 'medium'
                check (priority in ('urgent', 'high', 'medium', 'low')),
  assignee_id uuid references users(id) on delete set null,
  created_at  timestamptz not null default now()
);

create table if not exists comments (
  id         uuid primary key default gen_random_uuid(),
  issue_id   uuid not null references issues(id) on delete cascade,
  body       text not null,
  author_id  uuid not null references users(id) on delete restrict,
  created_at timestamptz not null default now()
);

create table if not exists labels (
  id    uuid primary key default gen_random_uuid(),
  name  text not null unique,
  color text not null default '#6b7280'
);

create table if not exists issue_labels (
  issue_id uuid not null references issues(id) on delete cascade,
  label_id uuid not null references labels(id) on delete cascade,
  primary key (issue_id, label_id)
);

-- ─── Indexes ────────────────────────────────────────────────────────────────

create index if not exists issues_status_idx    on issues(status);
create index if not exists issues_priority_idx  on issues(priority);
create index if not exists issues_created_at_idx on issues(created_at desc);
create index if not exists comments_issue_id_idx on comments(issue_id);

-- ─── Seed data ──────────────────────────────────────────────────────────────

insert into users (id, name, avatar_url) values
  ('11111111-0000-0000-0000-000000000001', 'Alice',   null),
  ('11111111-0000-0000-0000-000000000002', 'Bob',     null),
  ('11111111-0000-0000-0000-000000000003', 'Charlie', null)
on conflict do nothing;

insert into labels (name, color) values
  ('bug',         '#ef4444'),
  ('feature',     '#3b82f6'),
  ('improvement', '#8b5cf6'),
  ('docs',        '#10b981'),
  ('urgent',      '#f97316')
on conflict do nothing;

insert into issues (id, title, description, status, priority, assignee_id, created_at) values
  ('22222222-0000-0000-0000-000000000001', 'Login page crashes on mobile', 'Reproducible on Safari iOS 17. Stack trace in Sentry event #12345.', 'open',        'urgent', '11111111-0000-0000-0000-000000000001', now() - interval '3 days'),
  ('22222222-0000-0000-0000-000000000002', 'Add dark mode toggle',          'Users have been requesting dark mode for months.', 'in_progress',  'medium', '11111111-0000-0000-0000-000000000002', now() - interval '2 days'),
  ('22222222-0000-0000-0000-000000000003', 'Improve search performance',    'Full-text search takes >2 s on large datasets.', 'open',          'high',   '11111111-0000-0000-0000-000000000003', now() - interval '1 day'),
  ('22222222-0000-0000-0000-000000000004', 'Update README',                 null, 'done',          'low',    null, now() - interval '5 days'),
  ('22222222-0000-0000-0000-000000000005', 'Fix pagination offset bug',     'Off-by-one in cursor calculation.', 'open',        'high',   '11111111-0000-0000-0000-000000000001', now() - interval '6 hours'),
  ('22222222-0000-0000-0000-000000000006', 'Add email notifications',       'Notify users on issue assignment and status change.', 'open', 'medium', '11111111-0000-0000-0000-000000000002', now() - interval '4 days'),
  ('22222222-0000-0000-0000-000000000007', 'Keyboard shortcuts',            'Add keyboard shortcuts for common actions.', 'in_progress', 'low', '11111111-0000-0000-0000-000000000003', now() - interval '7 days'),
  ('22222222-0000-0000-0000-000000000008', 'Export issues to CSV',          'Allow bulk export for reporting.', 'open', 'medium', null, now() - interval '8 days'),
  ('22222222-0000-0000-0000-000000000009', 'Fix XSS in comment renderer',   'Markdown renderer does not sanitize script tags.', 'open', 'urgent', '11111111-0000-0000-0000-000000000001', now() - interval '1 hour'),
  ('22222222-0000-0000-0000-000000000010', 'Migrate to PostgreSQL 16',      'Upgrade database version for performance improvements.', 'done', 'high', '11111111-0000-0000-0000-000000000002', now() - interval '10 days'),
  ('22222222-0000-0000-0000-000000000011', 'Audit log for admin actions',   'Track all admin mutations with timestamps.', 'open', 'high', '11111111-0000-0000-0000-000000000003', now() - interval '11 days'),
  ('22222222-0000-0000-0000-000000000012', 'Mobile responsive layout',      'Issues list is broken on screens under 375px.', 'in_progress', 'high', '11111111-0000-0000-0000-000000000001', now() - interval '2 hours'),
  ('22222222-0000-0000-0000-000000000013', 'Add issue attachments',         'Support file uploads attached to issues.', 'open', 'medium', null, now() - interval '12 days'),
  ('22222222-0000-0000-0000-000000000014', 'Rate limiting on API',          'Prevent abuse by adding rate limits to mutations.', 'open', 'high', '11111111-0000-0000-0000-000000000002', now() - interval '13 days'),
  ('22222222-0000-0000-0000-000000000015', 'Onboarding checklist',          'Guide new users through initial setup.', 'cancelled', 'low', null, now() - interval '20 days'),
  ('22222222-0000-0000-0000-000000000016', 'Cache GraphQL responses',       'Add Redis caching layer for expensive queries.', 'open', 'medium', '11111111-0000-0000-0000-000000000003', now() - interval '14 days'),
  ('22222222-0000-0000-0000-000000000017', 'Fix N+1 query in issue list',   'Each issue fires a separate users query.', 'done', 'urgent', '11111111-0000-0000-0000-000000000001', now() - interval '15 days'),
  ('22222222-0000-0000-0000-000000000018', 'Implement issue templates',     'Pre-fill issue forms for common bug/feature types.', 'open', 'low', null, now() - interval '16 days'),
  ('22222222-0000-0000-0000-000000000019', 'Stale issue auto-close',        'Automatically close issues with no activity for 90 days.', 'open', 'low', '11111111-0000-0000-0000-000000000002', now() - interval '17 days'),
  ('22222222-0000-0000-0000-000000000020', 'Two-factor authentication',     'Add TOTP-based 2FA for all user accounts.', 'in_progress', 'urgent', '11111111-0000-0000-0000-000000000003', now() - interval '18 days')
on conflict do nothing;

-- Wire up some labels
insert into issue_labels (issue_id, label_id)
select i.id, l.id from issues i, labels l
where (i.title = 'Login page crashes on mobile'  and l.name in ('bug', 'urgent'))
   or (i.title = 'Add dark mode toggle'           and l.name = 'feature')
   or (i.title = 'Improve search performance'     and l.name = 'improvement')
   or (i.title = 'Update README'                  and l.name = 'docs')
   or (i.title = 'Fix pagination offset bug'      and l.name = 'bug')
   or (i.title = 'Add email notifications'        and l.name = 'feature')
   or (i.title = 'Keyboard shortcuts'             and l.name = 'improvement')
   or (i.title = 'Fix XSS in comment renderer'    and l.name in ('bug', 'urgent'))
   or (i.title = 'Migrate to PostgreSQL 16'       and l.name = 'improvement')
   or (i.title = 'Audit log for admin actions'    and l.name = 'feature')
   or (i.title = 'Mobile responsive layout'       and l.name = 'bug')
   or (i.title = 'Rate limiting on API'           and l.name in ('feature', 'improvement'))
   or (i.title = 'Cache GraphQL responses'        and l.name = 'improvement')
   or (i.title = 'Fix N+1 query in issue list'    and l.name in ('bug', 'improvement'))
   or (i.title = 'Two-factor authentication'      and l.name in ('feature', 'urgent'))
on conflict do nothing;

insert into comments (issue_id, body, author_id, created_at) values
  ('22222222-0000-0000-0000-000000000001', 'Confirmed on my iPhone 14. The crash happens immediately after form submit.', '11111111-0000-0000-0000-000000000002', now() - interval '2 days'),
  ('22222222-0000-0000-0000-000000000001', 'Looking into it. Might be related to the form hydration patch from last week.', '11111111-0000-0000-0000-000000000001', now() - interval '1 day'),
  ('22222222-0000-0000-0000-000000000002', 'Design mockups are ready. Will start implementation tomorrow.', '11111111-0000-0000-0000-000000000002', now() - interval '12 hours')
on conflict do nothing;

-- ─── Row Level Security (permissive for demo) ────────────────────────────────
-- Disable RLS on all tables so the anon key can read/write without policies.
-- In production you would enable RLS and add proper policies.

alter table users         disable row level security;
alter table issues        disable row level security;
alter table comments      disable row level security;
alter table labels        disable row level security;
alter table issue_labels  disable row level security;

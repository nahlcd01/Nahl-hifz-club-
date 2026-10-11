-- NAHL Hifz Club — Supabase schema
-- Run this in Supabase SQL Editor.

create extension if not exists pgcrypto;

create table if not exists students (
  id uuid primary key default gen_random_uuid(),
  nickname text not null,
  class_id text not null,
  pin_hash text not null,
  photo_url text,
  stars int not null default 0,
  teacher_id uuid,
  created_at timestamptz not null default now()
);
create unique index if not exists students_nickname_lower on students (lower(nickname));

create table if not exists teachers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  class_id text not null,
  pin_hash text not null,
  photo_url text,
  title text not null default 'Ustad',
  created_at timestamptz not null default now()
);
create unique index if not exists teachers_email_lower on teachers (lower(email));

create table if not exists submissions (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references students(id) on delete cascade,
  surah_no int not null,
  status text not null default 'pending',
  media_url text,
  media_type text,
  drive_file_id text,
  created_at timestamptz not null default now(),
  reviewed_at timestamptz
);

create table if not exists tracker_rows (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references students(id) on delete cascade,
  date date not null default current_date,
  surah text not null,
  verse_from text,
  verse_to text,
  target int,
  activity text default 'Memorisation',
  actual text,
  recent text,
  older text,
  accuracy text,
  status text default 'Not Started',
  note text,
  created_at timestamptz not null default now()
);

create table if not exists teacher_notes (
  id uuid primary key default gen_random_uuid(),
  teacher_name text,
  class_id text not null,
  title text not null,
  body text not null,
  created_at timestamptz not null default now()
);

create table if not exists salah_logs (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references students(id) on delete cascade,
  date date not null default current_date,
  fajr boolean default false,
  dhuhr boolean default false,
  asr boolean default false,
  maghrib boolean default false,
  isha boolean default false,
  unique (student_id, date)
);

alter table students enable row level security;
alter table teachers enable row level security;
alter table submissions enable row level security;
alter table tracker_rows enable row level security;
alter table teacher_notes enable row level security;
alter table salah_logs enable row level security;

-- Preview policies: open read/write with the anon key.
-- Tighten these before a public launch.
create policy "students all" on students for all using (true) with check (true);
create policy "teachers all" on teachers for all using (true) with check (true);
create policy "submissions all" on submissions for all using (true) with check (true);
create policy "tracker all" on tracker_rows for all using (true) with check (true);
create policy "notes all" on teacher_notes for all using (true) with check (true);
create policy "salah all" on salah_logs for all using (true) with check (true);

create or replace function student_signup(p_name text, p_pin text, p_class text, p_photo text)
returns students language plpgsql security definer as $$
declare rec students;
begin
  if p_name is null or length(trim(p_name)) = 0 then
    raise exception 'Choose a nickname';
  end if;
  if p_pin !~ '^[0-9]{4}$' then
    raise exception 'PIN must be 4 digits';
  end if;
  insert into students (nickname, class_id, pin_hash, photo_url)
  values (trim(p_name), p_class, crypt(p_pin, gen_salt('bf')), p_photo)
  returning * into rec;
  return rec;
end $$;

create or replace function student_login(p_name text, p_pin text)
returns students language plpgsql security definer as $$
declare rec students;
begin
  select * into rec from students
  where lower(nickname) = lower(trim(p_name))
    and pin_hash = crypt(p_pin, pin_hash);
  if rec.id is null then
    raise exception 'Name or PIN is incorrect';
  end if;
  return rec;
end $$;

create or replace function teacher_signup(p_name text, p_email text, p_pin text, p_class text, p_photo text, p_title text)
returns teachers language plpgsql security definer as $$
declare rec teachers;
begin
  if p_email !~* '^[^@]+@gmail\.com$' then
    raise exception 'Enter a Gmail address';
  end if;
  if p_pin !~ '^[0-9]{4}$' then
    raise exception 'PIN must be 4 digits';
  end if;
  insert into teachers (name, email, class_id, pin_hash, photo_url, title)
  values (trim(p_name), lower(trim(p_email)), p_class, crypt(p_pin, gen_salt('bf')), p_photo, coalesce(p_title, 'Ustad'))
  returning * into rec;
  return rec;
end $$;

create or replace function teacher_login(p_name text, p_pin text)
returns teachers language plpgsql security definer as $$
declare rec teachers;
begin
  select * into rec from teachers
  where (lower(name) = lower(trim(p_name)) or lower(email) = lower(trim(p_name)))
    and pin_hash = crypt(p_pin, pin_hash);
  if rec.id is null then
    raise exception 'Name, Gmail or PIN is incorrect';
  end if;
  return rec;
end $$;

insert into storage.buckets (id, name, public)
values ('photos', 'photos', true)
on conflict (id) do nothing;

create table public.profiles (
    id uuid primary key references auth.users(id) on delete cascade,

    full_name text,

    gender text,

    age integer,

    height_cm integer,

    weight_kg numeric(5,2),

    goal text,

    activity_level text,

    created_at timestamptz not null default now(),

    updated_at timestamptz not null default now()
);

create index idx_profiles_goal
on public.profiles(goal);
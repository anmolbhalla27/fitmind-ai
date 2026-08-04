create table public.body_measurements (

    id uuid primary key default gen_random_uuid(),

    user_id uuid not null references auth.users(id) on delete cascade,

    weight_kg numeric(5,2),

    body_fat numeric(5,2),

    chest_cm numeric(5,2),

    waist_cm numeric(5,2),

    hips_cm numeric(5,2),

    biceps_cm numeric(5,2),

    measured_at timestamptz default now()
);

create index idx_body_measurements_user
on public.body_measurements(user_id);
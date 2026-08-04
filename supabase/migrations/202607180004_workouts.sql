create table public.workouts (

    id uuid primary key default gen_random_uuid(),

    user_id uuid not null references auth.users(id) on delete cascade,

    title text not null,

    description text,

    created_at timestamptz default now()
);

create table public.workout_exercises (

    id uuid primary key default gen_random_uuid(),

    workout_id uuid not null references public.workouts(id) on delete cascade,

    exercise_id bigint not null references public.exercises(id),

    sets integer not null,

    reps integer not null,

    rest_seconds integer,

    exercise_order integer not null
);

create table public.workout_logs (

    id uuid primary key default gen_random_uuid(),

    user_id uuid not null references auth.users(id) on delete cascade,

    workout_id uuid references public.workouts(id),

    duration_minutes integer,

    calories integer,

    completed_at timestamptz default now()
);

create index idx_workouts_user
on public.workouts(user_id);

create index idx_workout_logs_user
on public.workout_logs(user_id);

alter table public.workouts
add column updated_at timestamptz default now();
create table public.workout_sessions (
    id uuid primary key default gen_random_uuid(),

    user_id uuid not null references auth.users(id) on delete cascade,

    workout_id uuid not null references public.workouts(id) on delete cascade,

    started_at timestamptz not null default now(),

    completed_at timestamptz,

    duration_minutes integer
);

create index idx_workout_sessions_user
on public.workout_sessions(user_id);

create index idx_workout_sessions_workout
on public.workout_sessions(workout_id);
create table public.workout_session_exercises (
    id uuid primary key default gen_random_uuid(),

    session_id uuid not null
        references public.workout_sessions(id)
        on delete cascade,

    workout_exercise_id uuid not null
        references public.workout_exercises(id)
        on delete cascade,

    exercise_order integer not null
);

create index idx_session_exercises_session
on public.workout_session_exercises(session_id);
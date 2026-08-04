create table public.workout_session_sets (
    id uuid primary key default gen_random_uuid(),

    session_exercise_id uuid not null
        references public.workout_session_exercises(id)
        on delete cascade,

    set_number integer not null,

    target_reps integer not null,

    actual_reps integer,

    target_rest_seconds integer,

    actual_weight numeric(6,2),

    completed boolean not null default false
);

create index idx_session_sets_session_exercise
on public.workout_session_sets(session_exercise_id);
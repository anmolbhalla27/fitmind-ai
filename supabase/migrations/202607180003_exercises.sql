create table public.exercise_categories (

    id bigserial primary key,

    name text not null unique,

    created_at timestamptz default now()
);

create table public.exercises (

    id bigserial primary key,

    category_id bigint not null references public.exercise_categories(id),

    name text not null,

    equipment text,

    instructions text,

    created_at timestamptz default now()
);

create index idx_exercises_category
on public.exercises(category_id);

alter table public.exercises
add constraint uq_exercise_name unique (name);
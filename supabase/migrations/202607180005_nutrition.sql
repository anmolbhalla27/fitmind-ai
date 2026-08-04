create table public.nutrition_logs (

    id uuid primary key default gen_random_uuid(),

    user_id uuid not null references auth.users(id) on delete cascade,

    meal_type text not null,

    food_name text not null,

    protein numeric(6,2),

    carbs numeric(6,2),

    fat numeric(6,2),

    calories integer,

    logged_at timestamptz default now()
);

create index idx_nutrition_user
on public.nutrition_logs(user_id);
-- ============================================================
-- ENABLE RLS
-- ============================================================

alter table public.profiles enable row level security;

alter table public.workouts enable row level security;

alter table public.workout_exercises enable row level security;

alter table public.workout_logs enable row level security;

alter table public.nutrition_logs enable row level security;

alter table public.body_measurements enable row level security;

alter table public.ai_conversations enable row level security;

alter table public.ai_messages enable row level security;

alter table public.exercise_categories enable row level security;

alter table public.exercises enable row level security;


-- ============================================================
-- DROP EXISTING POLICIES (SAFE FOR RE-RUNS)
-- ============================================================

drop policy if exists "Users manage own profile" on public.profiles;

drop policy if exists "Users manage own workouts" on public.workouts;

drop policy if exists "Users manage own workout exercises" on public.workout_exercises;

drop policy if exists "Users manage own workout logs" on public.workout_logs;

drop policy if exists "Users manage own nutrition logs" on public.nutrition_logs;

drop policy if exists "Users manage own body measurements" on public.body_measurements;

drop policy if exists "Users manage own conversations" on public.ai_conversations;

drop policy if exists "Users manage own ai messages" on public.ai_messages;

drop policy if exists "Anyone can read exercise categories" on public.exercise_categories;

drop policy if exists "Anyone can read exercises" on public.exercises;


-- ============================================================
-- PROFILES
-- ============================================================

create policy "Users manage own profile"
on public.profiles
for all
using (
    auth.uid() = id
)
with check (
    auth.uid() = id
);


-- ============================================================
-- WORKOUTS
-- ============================================================

create policy "Users manage own workouts"
on public.workouts
for all
using (
    auth.uid() = user_id
)
with check (
    auth.uid() = user_id
);


-- ============================================================
-- WORKOUT EXERCISES
-- ============================================================

create policy "Users manage own workout exercises"
on public.workout_exercises
for all
using (
    exists (
        select 1
        from public.workouts w
        where w.id = workout_id
        and w.user_id = auth.uid()
    )
)
with check (
    exists (
        select 1
        from public.workouts w
        where w.id = workout_id
        and w.user_id = auth.uid()
    )
);


-- ============================================================
-- WORKOUT LOGS
-- ============================================================

create policy "Users manage own workout logs"
on public.workout_logs
for all
using (
    auth.uid() = user_id
)
with check (
    auth.uid() = user_id
);


-- ============================================================
-- NUTRITION LOGS
-- ============================================================

create policy "Users manage own nutrition logs"
on public.nutrition_logs
for all
using (
    auth.uid() = user_id
)
with check (
    auth.uid() = user_id
);


-- ============================================================
-- BODY MEASUREMENTS
-- ============================================================

create policy "Users manage own body measurements"
on public.body_measurements
for all
using (
    auth.uid() = user_id
)
with check (
    auth.uid() = user_id
);


-- ============================================================
-- AI CONVERSATIONS
-- ============================================================

create policy "Users manage own conversations"
on public.ai_conversations
for all
using (
    auth.uid() = user_id
)
with check (
    auth.uid() = user_id
);


-- ============================================================
-- AI MESSAGES
-- ============================================================

create policy "Users manage own ai messages"
on public.ai_messages
for all
using (
    exists (
        select 1
        from public.ai_conversations c
        where c.id = conversation_id
        and c.user_id = auth.uid()
    )
)
with check (
    exists (
        select 1
        from public.ai_conversations c
        where c.id = conversation_id
        and c.user_id = auth.uid()
    )
);


-- ============================================================
-- SHARED TABLES
-- Everyone can read exercises
-- Only service role can modify
-- ============================================================

create policy "Anyone can read exercise categories"
on public.exercise_categories
for select
using (true);

create policy "Anyone can read exercises"
on public.exercises
for select
using (true);


-- ============================================================
-- SERVICE ROLE WRITE ACCESS
-- ============================================================

create policy "Service role manages exercise categories"
on public.exercise_categories
for all
using (
    auth.role() = 'service_role'
)
with check (
    auth.role() = 'service_role'
);

create policy "Service role manages exercises"
on public.exercises
for all
using (
    auth.role() = 'service_role'
)
with check (
    auth.role() = 'service_role'
);
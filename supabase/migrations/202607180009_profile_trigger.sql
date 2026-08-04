-- ============================================================
-- FUNCTION
-- Automatically create profile after signup
-- ============================================================

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin

    insert into public.profiles (
        id,
        full_name,
        created_at,
        updated_at
    )
    values (
        new.id,
        new.raw_user_meta_data ->> 'name',
        now(),
        now()
    );

    return new;

end;
$$;

-- ============================================================
-- TRIGGER
-- ============================================================

drop trigger if exists on_auth_user_created
on auth.users;

create trigger on_auth_user_created
after insert
on auth.users
for each row
execute procedure public.handle_new_user();
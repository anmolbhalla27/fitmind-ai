create table public.ai_conversations (

    id uuid primary key default gen_random_uuid(),

    user_id uuid not null references auth.users(id) on delete cascade,

    title text,

    created_at timestamptz default now()
);

create table public.ai_messages (

    id uuid primary key default gen_random_uuid(),

    conversation_id uuid not null references public.ai_conversations(id) on delete cascade,

    role text not null,

    content text not null,

    created_at timestamptz default now()
);

create index idx_ai_conversation_user
on public.ai_conversations(user_id);
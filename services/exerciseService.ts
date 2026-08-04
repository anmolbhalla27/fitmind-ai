import { supabase } from "@/lib/supabase/browser";

import { Exercise } from "@/types/exercise";

async function getCurrentUserId() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error("User not authenticated.");
  }

  return user.id;
}

export async function getExercises(): Promise<Exercise[]> {
  await getCurrentUserId();

  const { data, error } = await supabase
    .from("exercises")
    .select(`
      *,
      category:exercise_categories(
        id,
        name
      )
    `)
    .order("name");

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function searchExercises(
  search: string
): Promise<Exercise[]> {
  await getCurrentUserId();

  let query = supabase
    .from("exercises")
    .select(`
      *,
      category:exercise_categories(
        id,
        name
      )
    `)
    .order("name");

  if (search.trim()) {
    query = query.ilike("name", `%${search}%`);
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function getExercise(
  id: string
): Promise<Exercise> {
  await getCurrentUserId();

  const { data, error } = await supabase
    .from("exercises")
    .select(`
      *,
      category:exercise_categories(
        id,
        name
      )
    `)
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}
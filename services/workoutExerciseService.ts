import { supabase } from "@/lib/supabase/browser";

import {
  CreateWorkoutExerciseRequest,
  WorkoutExercise,
  UpdateWorkoutExerciseRequest,
} from "@/types/workoutExercise";

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

export async function createWorkoutExercise(
  request: CreateWorkoutExerciseRequest
): Promise<WorkoutExercise> {
  await getCurrentUserId();

  const { data, error } = await supabase
    .from("workout_exercises")
    .insert(request)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getWorkoutExercises(
  workoutId: string
): Promise<WorkoutExercise[]> {
  await getCurrentUserId();

  const { data, error } = await supabase
    .from("workout_exercises")
    .select(`
      *,
      exercise:exercises(
        *,
        category:exercise_categories(
          id,
          name
        )
      )
    `)
    .eq("workout_id", workoutId)
    .order("exercise_order");

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function deleteWorkoutExercise(id: string): Promise<void> {
  const { error } = await supabase
    .from("workout_exercises")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }
}

export async function updateWorkoutExercise(
  id: string,
  request: UpdateWorkoutExerciseRequest
): Promise<WorkoutExercise> {
  const { data, error } = await supabase
    .from("workout_exercises")
    .update(request)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}
import { supabase } from "@/lib/supabase/browser";

import {
  WorkoutSessionSet,
  CreateWorkoutSessionSetRequest,
} from "@/types/workoutSessionSet";

export async function createWorkoutSessionSet(
  request: CreateWorkoutSessionSetRequest
): Promise<WorkoutSessionSet> {
  const { data, error } = await supabase
    .from("workout_session_sets")
    .insert(request)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getWorkoutSessionSets(
  sessionExerciseId: string
): Promise<WorkoutSessionSet[]> {
  const { data, error } = await supabase
    .from("workout_session_sets")
    .select("*")
    .eq("session_exercise_id", sessionExerciseId)
    .order("set_number");

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function updateWorkoutSessionSet(
  id: string,
  updates: Partial<
    Pick<
      WorkoutSessionSet,
      "actual_reps" | "actual_weight" | "completed"
    >
  >
): Promise<WorkoutSessionSet> {
  const { data, error } = await supabase
    .from("workout_session_sets")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}
import { supabase } from "@/lib/supabase/browser";

import {
  WorkoutSessionExercise,
  CreateWorkoutSessionExerciseRequest,
} from "@/types/workoutSessionExercise";

export async function createWorkoutSessionExercise(
  request: CreateWorkoutSessionExerciseRequest
): Promise<WorkoutSessionExercise> {
  const { data, error } = await supabase
    .from("workout_session_exercises")
    .insert(request)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getWorkoutSessionExercises(
  sessionId: string
): Promise<WorkoutSessionExercise[]> {
  const { data, error } = await supabase
    .from("workout_session_exercises")
    .select("*")
    .eq("session_id", sessionId)
    .order("exercise_order");

  if (error) {
    throw error;
  }

  return data ?? [];
}
import { supabase } from "@/lib/supabase/browser";

import {
  WorkoutSession,
  CreateWorkoutSessionRequest,
} from "@/types/workoutSession";

export async function startWorkout(
  request: CreateWorkoutSessionRequest
): Promise<WorkoutSession> {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError) {
    throw authError;
  }

  if (!user) {
    throw new Error("User not authenticated");
  }

  const { data, error } = await supabase
    .from("workout_sessions")
    .insert({
      user_id: user.id,
      workout_id: request.workout_id,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function completeWorkout(
  sessionId: string,
  durationMinutes: number
): Promise<WorkoutSession> {
  const { data, error } = await supabase
    .from("workout_sessions")
    .update({
      completed_at: new Date().toISOString(),
      duration_minutes: durationMinutes,
    })
    .eq("id", sessionId)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getWorkoutSession(
  sessionId: string
): Promise<WorkoutSession> {
  const { data, error } = await supabase
    .from("workout_sessions")
    .select("*")
    .eq("id", sessionId)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getWorkoutSessions(
  workoutId?: string
): Promise<WorkoutSession[]> {
  let query = supabase
    .from("workout_sessions")
    .select("*")
    .order("started_at", { ascending: false });

  if (workoutId) {
    query = query.eq("workout_id", workoutId);
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function getActiveWorkoutSession(
  workoutId: string
): Promise<WorkoutSession | null> {
  const { data, error } = await supabase
    .from("workout_sessions")
    .select("*")
    .eq("workout_id", workoutId)
    .is("completed_at", null)
    .order("started_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}
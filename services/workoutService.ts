import { supabase } from "@/lib/supabase/browser";
import {
  Workout,
  CreateWorkoutRequest,
} from "@/types/workout";

async function getCurrentUserId() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error("User not authenticated");
  }

  return user.id;
}

export async function getWorkouts(): Promise<Workout[]> {
  const userId = await getCurrentUserId();

  const { data, error } = await supabase
    .from("workouts")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", {
      ascending: false,
    });

  if (error) throw error;

  return data;
}

export async function getWorkout(
  id: string
): Promise<Workout> {
  const userId = await getCurrentUserId();

  const { data, error } = await supabase
    .from("workouts")
    .select("*")
    .eq("id", id)
    .eq("user_id", userId)
    .single();

  if (error) throw error;

  return data;
}

export async function createWorkout(
  request: CreateWorkoutRequest
) {
  const userId = await getCurrentUserId();

  const { data, error } = await supabase
    .from("workouts")
    .insert({
      ...request,
      user_id: userId,
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function updateWorkout(
  id: string,
  request: CreateWorkoutRequest
) {
  const userId = await getCurrentUserId();

  const { data, error } = await supabase
    .from("workouts")
    .update(request)
    .eq("id", id)
    .eq("user_id", userId)
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function deleteWorkout(id: string) {
  const userId = await getCurrentUserId();

  const { error } = await supabase
    .from("workouts")
    .delete()
    .eq("id", id)
    .eq("user_id", userId);

  if (error) throw error;
}
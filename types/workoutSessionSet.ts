export interface WorkoutSessionSet {
  id: string;
  session_exercise_id: string;
  set_number: number;
  target_reps: number;
  actual_reps: number | null;
  target_rest_seconds: number | null;
  actual_weight: number | null;
  completed: boolean;
}

export interface CreateWorkoutSessionSetRequest {
  session_exercise_id: string;
  set_number: number;
  target_reps: number;
  target_rest_seconds: number | null;
}
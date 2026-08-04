export interface WorkoutSession {
  id: string;
  user_id: string;
  workout_id: string;
  started_at: string;
  completed_at: string | null;
  duration_minutes: number | null;
}

export interface CreateWorkoutSessionRequest {
  workout_id: string;
}

export interface CompleteWorkoutSessionRequest {
  duration_minutes: number;
}
export interface Workout {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  created_at: string;
  updated_at?: string;
}

export interface CreateWorkoutRequest {
  title: string;
  description?: string;
}
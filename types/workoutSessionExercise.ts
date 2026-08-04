export interface WorkoutSessionExercise {
  id: string;
  session_id: string;
  workout_exercise_id: string;
  exercise_order: number;
}

export interface CreateWorkoutSessionExerciseRequest {
  session_id: string;
  workout_exercise_id: string;
  exercise_order: number;
}
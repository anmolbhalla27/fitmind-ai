import { Exercise } from "./exercise";

export interface WorkoutExercise {
  id: string;
  workout_id: string;
  exercise_id: string;

  sets: number;
  reps: number;
  rest_seconds: number;
  exercise_order: number;

  exercise?: Exercise;
}

export interface CreateWorkoutExerciseRequest {
  workout_id: string;
  exercise_id: string;

  sets: number;
  reps: number;
  rest_seconds: number;

  exercise_order: number;
}

export interface UpdateWorkoutExerciseRequest {
  sets: number;
  reps: number;
  rest_seconds: number | null;
}
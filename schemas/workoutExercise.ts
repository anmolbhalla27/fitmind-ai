import { z } from "zod";

export const workoutExerciseSchema = z.object({
  sets: z.coerce.number().min(1).max(20),

  reps: z.coerce.number().min(1).max(100),

  rest_seconds: z.coerce.number().min(0).max(600),
});

export type WorkoutExerciseFormInput =
  z.input<typeof workoutExerciseSchema>;

export type WorkoutExerciseFormData =
  z.output<typeof workoutExerciseSchema>;
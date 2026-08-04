import { z } from "zod";

export const workoutSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters")
    .max(100),

  description: z
    .string()
    .trim()
    .max(500)
    .optional()
    .or(z.literal("")),
});

export type WorkoutFormInput = z.input<typeof workoutSchema>;
export type WorkoutFormData = z.output<typeof workoutSchema>;
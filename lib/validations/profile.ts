import { z } from "zod";

export const profileSchema = z.object({
  full_name: z.string().min(2, "Full name is required"),
  gender: z.string().min(1, "Please select a gender"),
  age: z.coerce.number().min(13).max(100),
  height_cm: z.coerce.number().min(100).max(250),
  weight_kg: z.coerce.number().min(25).max(300),
  goal: z.string().min(1),
  activity_level: z.string().min(1),
});

export type ProfileFormInput = z.input<typeof profileSchema>;
export type ProfileFormData = z.output<typeof profileSchema>;
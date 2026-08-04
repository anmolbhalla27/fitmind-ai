export interface Profile {
  id: string;

  full_name: string | null;

  gender: string | null;

  age: number | null;

  height_cm: number | null;

  weight_kg: number | null;

  goal: string | null;

  activity_level: string | null;

  created_at: string;

  updated_at: string;
}
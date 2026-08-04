export interface ExerciseCategory {
  id: string;
  name: string;
}

export interface Exercise {
  id: string;
  category_id: string;
  name: string;
  equipment: string | null;
  instructions: string | null;
  created_at: string;

  category?: ExerciseCategory;
}
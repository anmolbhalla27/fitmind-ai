"use client";

import { Exercise } from "@/types/exercise";

interface ExerciseSearchItemProps {
  exercise: Exercise;
  onSelect: (exercise: Exercise) => void;
}

export default function ExerciseSearchItem({
  exercise,
  onSelect,
}: ExerciseSearchItemProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(exercise)}
      className="w-full rounded-lg border border-transparent p-4 text-left transition hover:border-zinc-700 hover:bg-zinc-800"
    >
      <div className="font-medium text-white">
        {exercise.name}
      </div>

      <div className="mt-1 text-sm text-zinc-400">
        {exercise.category?.name}

        {exercise.equipment &&
          ` • ${exercise.equipment}`}
      </div>
    </button>
  );
}
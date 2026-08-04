"use client";

import Button from "@/components/ui/button";
import { WorkoutExercise } from "@/types/workoutExercise";

interface WorkoutExerciseCardProps {
  workoutExercise: WorkoutExercise;
  onDelete: (id: string) => void;
}

export default function WorkoutExerciseCard({
  workoutExercise,
  onDelete,
}: WorkoutExerciseCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">
            {workoutExercise.exercise?.name}
          </h3>

          <p className="mt-1 text-sm text-zinc-400">
            {workoutExercise.exercise?.category?.name}
            {workoutExercise.exercise?.equipment &&
              ` • ${workoutExercise.exercise.equipment}`}
          </p>
        </div>

        <Button
          variant="danger"
          onClick={() => onDelete(workoutExercise.id)}
        >
          Delete
        </Button>
      </div>

      <div className="mt-5 flex flex-wrap gap-4 text-sm">
        <span className="rounded bg-zinc-800 px-3 py-1">
          {workoutExercise.sets} Sets
        </span>

        <span className="rounded bg-zinc-800 px-3 py-1">
          {workoutExercise.reps} Reps
        </span>

        <span className="rounded bg-zinc-800 px-3 py-1">
          {workoutExercise.rest_seconds ?? 0}s Rest
        </span>
      </div>
    </div>
  );
}
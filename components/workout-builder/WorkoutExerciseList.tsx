"use client";

import { WorkoutExercise } from "@/types/workoutExercise";

import WorkoutExerciseCard from "./WorkoutExerciseCard";

interface WorkoutExerciseListProps {
  exercises: WorkoutExercise[];
  onDelete: (id: string) => void;
}

export default function WorkoutExerciseList({
  exercises,
  onDelete,
}: WorkoutExerciseListProps) {
  if (!exercises.length) {
    return (
      <div className="mt-6 rounded-lg border border-dashed border-zinc-700 py-10 text-center text-zinc-400">
        No exercises added yet.
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-4">
      {exercises.map((exercise) => (
        <WorkoutExerciseCard
          key={exercise.id}
          workoutExercise={exercise}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
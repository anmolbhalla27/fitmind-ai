"use client";

import { Exercise } from "@/types/exercise";

import ExerciseSearchItem from "./ExerciseSearchItem";

interface ExerciseSearchResultsProps {
  exercises: Exercise[];
  onSelect: (exercise: Exercise) => void;
}

export default function ExerciseSearchResults({
  exercises,
  onSelect,
}: ExerciseSearchResultsProps) {
  if (!exercises.length) {
    return (
      <div className="py-8 text-center text-zinc-400">
        No exercises found.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {exercises.map((exercise) => (
        <ExerciseSearchItem
          key={exercise.id}
          exercise={exercise}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
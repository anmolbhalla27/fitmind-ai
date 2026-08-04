"use client";

import { useEffect, useState } from "react";

import Button from "@/components/ui/button";

import { Exercise } from "@/types/exercise";

import { useExercises } from "@/hooks/useExercises";

import ExerciseSearchInput from "./ExerciseSearchInput";
import ExerciseSearchResults from "./ExerciseSearchResults";

interface ExerciseSearchDialogProps {
  open: boolean;
  onClose: () => void;
  onSelect: (exercise: Exercise) => void;
}

export default function ExerciseSearchDialog({
  open,
  onClose,
  onSelect,
}: ExerciseSearchDialogProps) {
  const {
    exercises,
    loading,
    search,
  } = useExercises();

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    search(keyword);
  }, [keyword, search]);

  if (!open) {
    return null;
  }

  function handleSelect(exercise: Exercise) {
    onSelect(exercise);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="flex max-h-[80vh] w-full max-w-xl flex-col rounded-xl border border-zinc-800 bg-zinc-900 p-6">

        <h2 className="mb-4 text-xl font-semibold text-white">
          Add Exercise
        </h2>

        <ExerciseSearchInput
          value={keyword}
          onChange={setKeyword}
        />

        <div className="mt-6 flex-1 overflow-y-auto">
          {loading ? (
            <div className="py-8 text-center text-zinc-400">
              Loading...
            </div>
          ) : (
            <ExerciseSearchResults
              exercises={exercises}
              onSelect={handleSelect}
            />
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <Button
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
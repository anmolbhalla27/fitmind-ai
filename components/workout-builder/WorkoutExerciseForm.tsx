"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import FormField from "@/components/ui/FormField";

import { Exercise } from "@/types/exercise";

import {
  workoutExerciseSchema,
  WorkoutExerciseFormData,
  WorkoutExerciseFormInput,
} from "@/schemas/workoutExercise";

interface WorkoutExerciseFormProps {
  exercise: Exercise;
  onCancel: () => void;
  onSubmit: (
    data: WorkoutExerciseFormData
  ) => Promise<void>;
}

export default function WorkoutExerciseForm({
  exercise,
  onCancel,
  onSubmit,
}: WorkoutExerciseFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<
    WorkoutExerciseFormInput,
    unknown,
    WorkoutExerciseFormData
  >({
    resolver: zodResolver(workoutExerciseSchema),
    defaultValues: {
      sets: 3,
      reps: 10,
      rest_seconds: 60,
    },
  });

  useEffect(() => {
    reset({
      sets: 3,
      reps: 10,
      rest_seconds: 60,
    });
  }, [exercise, reset]);

  return (
    <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-950 p-6">
      <h3 className="text-lg font-semibold text-white">
        {exercise.name}
      </h3>

      <p className="mt-1 text-sm text-zinc-400">
        {exercise.category?.name}
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 space-y-4"
      >
        <FormField
          label="Sets"
          error={errors.sets?.message}
        >
          <Input
            type="number"
            {...register("sets")}
          />
        </FormField>

        <FormField
          label="Reps"
          error={errors.reps?.message}
        >
          <Input
            type="number"
            {...register("reps")}
          />
        </FormField>

        <FormField
          label="Rest (seconds)"
          error={errors.rest_seconds?.message}
        >
          <Input
            type="number"
            {...register("rest_seconds")}
          />
        </FormField>

        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            disabled={isSubmitting}
          >
            Save Exercise
          </Button>
        </div>
      </form>
    </div>
  );
}
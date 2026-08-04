"use client";

import { useCallback, useEffect, useState } from "react";

import {
  createWorkoutExercise,
  deleteWorkoutExercise,
  getWorkoutExercises,
  updateWorkoutExercise,
} from "@/services/workoutExerciseService";

import {
  CreateWorkoutExerciseRequest,
  UpdateWorkoutExerciseRequest,
  WorkoutExercise,
} from "@/types/workoutExercise";

export function useWorkoutExercises(workoutId: string) {
  const [exercises, setExercises] = useState<WorkoutExercise[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    if (!workoutId) {
      setExercises([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      const data = await getWorkoutExercises(workoutId);

      setExercises(data);
    } finally {
      setLoading(false);
    }
  }, [workoutId]);

  const addExercise = useCallback(
    async (request: CreateWorkoutExerciseRequest) => {
      const exercise = await createWorkoutExercise(request);

      await refresh();

      return exercise;
    },
    [refresh]
  );

  const updateExercise = useCallback(
    async (
      id: string,
      request: UpdateWorkoutExerciseRequest
    ) => {
      const exercise = await updateWorkoutExercise(id, request);

      await refresh();

      return exercise;
    },
    [refresh]
  );

  const removeExercise = useCallback(
    async (id: string) => {
      await deleteWorkoutExercise(id);

      await refresh();
    },
    [refresh]
  );

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    exercises,
    loading,
    refresh,
    addExercise,
    updateExercise,
    removeExercise,
  };
}
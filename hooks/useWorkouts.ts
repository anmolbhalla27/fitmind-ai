"use client";

import { useCallback, useEffect, useState } from "react";

import { Workout } from "@/types/workout";
import { getWorkouts } from "@/services/workoutService";

export function useWorkouts() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      setLoading(true);

      const data = await getWorkouts();

      setWorkouts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    workouts,
    loading,
    refresh,
  };
}
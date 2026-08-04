"use client";

import { useCallback, useEffect, useState } from "react";

import {
  getExercises,
  searchExercises,
} from "@/services/exerciseService";

import { Exercise } from "@/types/exercise";

export function useExercises() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      setLoading(true);

      const data = await getExercises();

      setExercises(data);
    } finally {
      setLoading(false);
    }
  }, []);

  const search = useCallback(async (keyword: string) => {
    try {
      setLoading(true);

      const data = await searchExercises(keyword);

      setExercises(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    exercises,
    loading,
    refresh,
    search,
  };
}
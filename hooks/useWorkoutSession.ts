"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import {
  completeWorkout,
  getActiveWorkoutSession,
} from "@/services/workoutSessionService";

import { startWorkoutExecution } from "@/services/workoutExecutionService";

import { WorkoutSession } from "@/types/workoutSession";

export function useWorkoutSession(workoutId: string) {
  const [session, setSession] = useState<WorkoutSession | null>(null);
  const [loading, setLoading] = useState(true);

  // Used only to force a re-render every second.
  const [tick, setTick] = useState(0);

  const running =
    session !== null && session.completed_at === null;

  /**
   * Restore active session
   */
  const restoreSession = useCallback(async (): Promise<boolean> => {
    if (!workoutId) {
      return false;
    }

    try {
      const activeSession =
        await getActiveWorkoutSession(workoutId);

      if (!activeSession) {
        return false;
      }

      setSession(activeSession);

      return true;
    } catch (error) {
      console.error(
        "Failed to restore workout session",
        error
      );

      return false;
    }
  }, [workoutId]);

  /**
   * Restore on mount
   */
  useEffect(() => {
    async function initialize() {
      setLoading(true);

      await restoreSession();

      setLoading(false);
    }

    initialize();
  }, [restoreSession]);

  /**
   * Timer
   */
  useEffect(() => {
    if (!running) {
      return;
    }

    const interval = setInterval(() => {
      setTick((previous) => previous + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  /**
   * Start Workout
   */
  const start = useCallback(async () => {
    if (!workoutId || running) {
      return;
    }

    try {
      // Restore an existing active session if one exists.
      const restored = await restoreSession();

      if (restored) {
        return;
      }

      // Otherwise create a brand-new workout execution.
      const newSession =
        await startWorkoutExecution(workoutId);

      setSession(newSession);
    } catch (error: unknown) {
      console.error("Failed to start workout");

      if (error instanceof Error) {
        console.error(error.message);
        console.error(error.stack);
      } else {
        console.error(JSON.stringify(error, null, 2));
        console.error(error);
      }
    }
  }, [running, workoutId, restoreSession]);

  /**
   * Calculate elapsed time from started_at
   */
  const elapsedSeconds = useMemo(() => {
    if (!session) {
      return 0;
    }

    const started = new Date(session.started_at).getTime();

    return Math.floor((Date.now() - started) / 1000);
  }, [session, tick]);

  /**
   * Finish Workout
   */
  const finish = useCallback(async () => {
    if (!session) {
      return;
    }

    try {
      const durationMinutes = Math.max(
        1,
        Math.round(elapsedSeconds / 60)
      );

      await completeWorkout(
        session.id,
        durationMinutes
      );

      setSession(null);
      setTick(0);
    } catch (error) {
      console.error(
        "Failed to finish workout",
        error
      );
    }
  }, [session, elapsedSeconds]);

  /**
   * Format timer
   */
  const formattedElapsedTime = useMemo(() => {
    const hours = Math.floor(elapsedSeconds / 3600);
    const minutes = Math.floor(
      (elapsedSeconds % 3600) / 60
    );
    const seconds = elapsedSeconds % 60;

    return [hours, minutes, seconds]
      .map((value) => value.toString().padStart(2, "0"))
      .join(":");
  }, [elapsedSeconds]);

  return {
    session,
    loading,
    running,
    elapsedSeconds,
    formattedElapsedTime,
    startWorkout: start,
    finishWorkout: finish,
  };
}
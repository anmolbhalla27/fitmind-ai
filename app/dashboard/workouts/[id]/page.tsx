"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/button";

import WorkoutDetails from "@/components/workouts/WorkoutDetails";
import ExerciseSearchDialog from "@/components/workout-builder/ExerciseSearchDialog";
import WorkoutExerciseForm from "@/components/workout-builder/WorkoutExerciseForm";
import WorkoutExerciseList from "@/components/workout-builder/WorkoutExerciseList";

import { getWorkout } from "@/services/workoutService";

import { Workout } from "@/types/workout";
import { Exercise } from "@/types/exercise";

import { WorkoutExerciseFormData } from "@/schemas/workoutExercise";

import { useWorkoutExercises } from "@/hooks/useWorkoutExercises";
import { useWorkoutSession } from "@/hooks/useWorkoutSession";

export default function WorkoutPage() {
  const params = useParams();

  const [loading, setLoading] = useState(true);
  const [workout, setWorkout] = useState<Workout | null>(null);

  const [searchOpen, setSearchOpen] = useState(false);
  const [exerciseToConfigure, setExerciseToConfigure] =
    useState<Exercise | null>(null);

  useEffect(() => {
    async function loadWorkout() {
      try {
        const data = await getWorkout(params.id as string);
        setWorkout(data);
      } finally {
        setLoading(false);
      }
    }

    loadWorkout();
  }, [params.id]);

  const {
    exercises,
    loading: exercisesLoading,
    addExercise,
    removeExercise,
  } = useWorkoutExercises(workout?.id ?? "");

  const {
    running,
    formattedElapsedTime,
    startWorkout,
    finishWorkout,
  } = useWorkoutSession(workout?.id ?? "");

  function handleExerciseSelect(exercise: Exercise) {
    setExerciseToConfigure(exercise);
    setSearchOpen(false);
  }

  async function handleSaveExercise(
    data: WorkoutExerciseFormData
  ) {
    if (!workout || !exerciseToConfigure) {
      return;
    }

    try {
      await addExercise({
        workout_id: workout.id,
        exercise_id: exerciseToConfigure.id,
        sets: data.sets,
        reps: data.reps,
        rest_seconds: data.rest_seconds,
        exercise_order: exercises.length + 1,
      });

      setExerciseToConfigure(null);
    } catch (error) {
      console.error("Failed to add exercise:", error);
    }
  }

  if (loading) {
    return (
      <div className="text-zinc-400">
        Loading workout...
      </div>
    );
  }

  if (!workout) {
    return (
      <div className="text-red-400">
        Workout not found.
      </div>
    );
  }

  return (
    <>
      <div className="space-y-8">
        <PageHeader
          title="Workout Details"
          description="View and manage your workout."
        />

        <WorkoutDetails workout={workout} />

        {/* Workout Session */}

        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white">
                Workout Session
              </h2>

              <p className="mt-2 text-sm text-zinc-400">
                Start this workout to begin tracking your time.
              </p>

              {running && (
                <p className="mt-3 text-lg font-semibold text-emerald-400">
                  {formattedElapsedTime}
                </p>
              )}
            </div>

            {running ? (
              <Button onClick={finishWorkout}>
                Finish Workout
              </Button>
            ) : (
              <Button onClick={startWorkout}>
                Start Workout
              </Button>
            )}
          </div>
        </div>

        {/* Exercises */}

        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">
              Exercises
            </h2>

            <Button onClick={() => setSearchOpen(true)}>
              Add Exercise
            </Button>
          </div>

          {exerciseToConfigure && (
            <div className="mt-6">
              <WorkoutExerciseForm
                exercise={exerciseToConfigure}
                onCancel={() => setExerciseToConfigure(null)}
                onSubmit={handleSaveExercise}
              />
            </div>
          )}

          <div className="mt-6">
            {exercisesLoading ? (
              <div className="text-center text-zinc-400">
                Loading exercises...
              </div>
            ) : (
              <WorkoutExerciseList
                exercises={exercises}
                onDelete={removeExercise}
              />
            )}
          </div>
        </div>
      </div>

      <ExerciseSearchDialog
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelect={handleExerciseSelect}
      />
    </>
  );
}
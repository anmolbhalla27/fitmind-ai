import { WorkoutSession } from "@/types/workoutSession";

import { startWorkout } from "./workoutSessionService";
import { getWorkoutExercises } from "./workoutExerciseService";
import { createWorkoutSessionExercise } from "./workoutSessionExerciseService";
import { createWorkoutSessionSet } from "./workoutSessionSetService";

export async function startWorkoutExecution(
  workoutId: string
): Promise<WorkoutSession> {
  try {
    // Create workout session
    const session = await startWorkout({
        workout_id: workoutId,
    });

    // Load workout template
    const workoutExercises = await getWorkoutExercises(workoutId);

    // Copy workout exercises into session
    for (const workoutExercise of workoutExercises) {
        const sessionExercise = await createWorkoutSessionExercise({
        session_id: session.id,
        workout_exercise_id: workoutExercise.id,
        exercise_order: workoutExercise.exercise_order,
        });

        // Create session sets
        for (
        let setNumber = 1;
        setNumber <= workoutExercise.sets;
        setNumber++
        ) {
        await createWorkoutSessionSet({
            session_exercise_id: sessionExercise.id,
            set_number: setNumber,
            target_reps: workoutExercise.reps,
            target_rest_seconds: workoutExercise.rest_seconds,
        });
        }
    }

    return session;
  } catch (error) {
    console.error("Workout execution failed", error);
    throw error;
  }
}
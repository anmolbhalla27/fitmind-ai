"use client";

import Link from "next/link";

import Button from "@/components/ui/button";
import DeleteWorkoutDialog from "./DeleteWorkoutDialog";

interface WorkoutActionsProps {
  workoutId: string;
}

export default function WorkoutActions({
  workoutId,
}: WorkoutActionsProps) {
  return (
    <div className="flex gap-3">
      <Link href={`/dashboard/workouts/${workoutId}/edit`}>
        <Button variant="outline">
          Edit Workout
        </Button>
      </Link>

      <DeleteWorkoutDialog
        workoutId={workoutId}
      />
    </div>
  );
}
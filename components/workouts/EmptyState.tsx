import Link from "next/link";

import Button from "@/components/ui/button";
import EmptyState from "@/components/ui/EmptyState";

export default function EmptyWorkoutState() {
  return (
    <EmptyState
      title="No workouts yet"
      description="Create your first workout to begin tracking your progress."
      action={
        <Link href="/dashboard/workouts/create">
          <Button>
            Create Workout
          </Button>
        </Link>
      }
    />
  );
}
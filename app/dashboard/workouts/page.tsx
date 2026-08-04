"use client";

import Link from "next/link";

import Button from "@/components/ui/button";
import PageHeader from "@/components/ui/PageHeader";

import WorkoutList from "@/components/workouts/WorkoutList";
import EmptyWorkoutState from "@/components/workouts/EmptyState";

import { useWorkouts } from "@/hooks/useWorkouts";

export default function WorkoutsPage() {
  const {
    workouts,
    loading,
  } = useWorkouts();

  return (
    <div className="space-y-8">
      <PageHeader
        title="Workouts"
        description="Manage your workout routines."
        action={
          <Link href="/dashboard/workouts/create">
            <Button>
              Create Workout
            </Button>
          </Link>
        }
      />

      {loading && (
        <div className="text-zinc-400">
          Loading workouts...
        </div>
      )}

      {!loading &&
        workouts.length === 0 && (
          <EmptyWorkoutState />
        )}

      {!loading &&
        workouts.length > 0 && (
          <WorkoutList workouts={workouts} />
        )}
    </div>
  );
}
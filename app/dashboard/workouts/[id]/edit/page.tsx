"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import Card from "@/components/ui/card";
import PageHeader from "@/components/ui/PageHeader";

import WorkoutForm from "@/components/workouts/WorkoutForm";

import {
  getWorkout,
  updateWorkout,
} from "@/services/workoutService";

import { Workout } from "@/types/workout";
import { WorkoutFormData } from "@/schemas/workout";

export default function EditWorkoutPage() {
  const params = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [workout, setWorkout] = useState<Workout | null>(null);

  useEffect(() => {
    async function loadWorkout() {
      try {
        const data = await getWorkout(params.id as string);
        setWorkout(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadWorkout();
  }, [params.id]);

  async function handleUpdate(data: WorkoutFormData) {
    await updateWorkout(params.id as string, data);

    router.push(`/dashboard/workouts/${params.id}`);
    router.refresh();
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
    <div className="mx-auto max-w-3xl space-y-8">
      <PageHeader
        title="Edit Workout"
        description="Update your workout."
      />

      <Card>
        <WorkoutForm
          defaultValues={{
            title: workout.title,
            description: workout.description ?? "",
          }}
          submitLabel="Update Workout"
          onSubmit={handleUpdate}
          redirectTo={`/dashboard/workouts/${params.id}`}
        />
      </Card>
    </div>
  );
}
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/button";
import { deleteWorkout } from "@/services/workoutService";

interface DeleteWorkoutDialogProps {
  workoutId: string;
}

export default function DeleteWorkoutDialog({
  workoutId,
}: DeleteWorkoutDialogProps) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    try {
      setLoading(true);

      await deleteWorkout(workoutId);

      router.push("/dashboard/workouts");
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Button
        variant="danger"
        onClick={() => setOpen(true)}
      >
        Delete
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-full max-w-md rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-xl font-semibold text-white">
              Delete Workout
            </h2>

            <p className="mt-3 text-zinc-400">
              Are you sure you want to delete this
              workout? This action cannot be undone.
            </p>

            <div className="mt-8 flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>

              <Button
                variant="danger"
                onClick={handleDelete}
                disabled={loading}
              >
                {loading
                  ? "Deleting..."
                  : "Delete"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
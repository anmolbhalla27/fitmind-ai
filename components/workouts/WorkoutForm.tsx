"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/Textarea";
import FormField from "@/components/ui/FormField";

import {
  workoutSchema,
  WorkoutFormInput,
  WorkoutFormData,
} from "@/schemas/workout";

import { createWorkout } from "@/services/workoutService";

interface WorkoutFormProps {
  defaultValues?: Partial<WorkoutFormInput>;
  submitLabel?: string;
  onSubmit?: (data: WorkoutFormData) => Promise<void>;
  redirectTo?: string;
}

export default function WorkoutForm({
  defaultValues,
  submitLabel = "Create Workout",
  onSubmit,
  redirectTo = "/dashboard/workouts",
}: WorkoutFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<
    WorkoutFormInput,
    unknown,
    WorkoutFormData
  >({
    resolver: zodResolver(workoutSchema),
    defaultValues,
  });

  async function handleFormSubmit(data: WorkoutFormData) {
    try {
      setLoading(true);

      if (onSubmit) {
        await onSubmit(data);
      } else {
        await createWorkout(data);
      }

      router.push(redirectTo);
      router.refresh();
    } catch (error) {
      console.error("Failed to save workout:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-8"
    >
      <FormField
        label="Workout Title"
        error={errors.title?.message}
      >
        <Input
          placeholder="e.g. Push Day"
          error={!!errors.title}
          {...register("title")}
        />
      </FormField>

      <FormField
        label="Description"
        error={errors.description?.message}
      >
        <Textarea
          rows={5}
          placeholder="Describe your workout..."
          error={!!errors.description}
          {...register("description")}
        />
      </FormField>

      <div className="flex justify-end gap-3 pt-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
          disabled={loading}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          disabled={loading}
        >
          {loading ? "Saving..." : submitLabel}
        </Button>
      </div>
    </form>
  );
}
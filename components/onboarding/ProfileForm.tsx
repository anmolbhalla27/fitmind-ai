"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { GENDERS } from "@/constants/genders";
import { GOALS } from "@/constants/goals";
import { ACTIVITY_LEVELS } from "@/constants/activity-levels";

import { profileSchema, ProfileFormData, ProfileFormInput } from "@/lib/validations/profile";

import { getProfile, updateProfile } from "@/services/profile.service";

export default function ProfileForm() {
  const router = useRouter();

  const [loadingProfile, setLoadingProfile] = useState(true);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormInput, any, ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      const profile = await getProfile();

      reset({
        full_name: profile.full_name ?? "",
        gender: profile.gender ?? "",
        age: profile.age ?? undefined,
        height_cm: profile.height_cm ?? undefined,
        weight_kg: profile.weight_kg ?? undefined,
        goal: profile.goal ?? "",
        activity_level: profile.activity_level ?? "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingProfile(false);
    }
  }

  async function onSubmit(data: ProfileFormData) {
    try {
      setServerError("");

      await updateProfile(data);

      router.replace("/dashboard");
    } catch (error: any) {
      setServerError(error.message);
    }
  }

  if (loadingProfile) {
    return (
      <div className="text-center text-zinc-400">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
      <h1 className="text-3xl font-bold text-white">
        Complete Your Profile
      </h1>

      <p className="mt-2 text-zinc-400">
        Help us personalize your workouts and nutrition.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-5"
      >
        <div>
          <Label>Full Name</Label>
          <Input {...register("full_name")} />
          {errors.full_name && (
            <p className="mt-1 text-sm text-red-500">
              {errors.full_name.message}
            </p>
          )}
        </div>

        <div>
          <Label>Gender</Label>

          <select
            {...register("gender")}
            className="mt-2 h-10 w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 text-white"
          >
            <option value="">Select Gender</option>

            {GENDERS.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>

          {errors.gender && (
            <p className="mt-1 text-sm text-red-500">
              {errors.gender.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label>Age</Label>
            <Input type="number" {...register("age")} />
          </div>

          <div>
            <Label>Height (cm)</Label>
            <Input type="number" {...register("height_cm")} />
          </div>

          <div>
            <Label>Weight (kg)</Label>
            <Input type="number" {...register("weight_kg")} />
          </div>
        </div>

        <div>
          <Label>Goal</Label>

          <select
            {...register("goal")}
            className="mt-2 h-10 w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 text-white"
          >
            <option value="">Select Goal</option>

            {GOALS.map((goal) => (
              <option key={goal} value={goal}>
                {goal}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label>Activity Level</Label>

          <select
            {...register("activity_level")}
            className="mt-2 h-10 w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 text-white"
          >
            <option value="">Select Activity Level</option>

            {ACTIVITY_LEVELS.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        {serverError && (
          <div className="rounded-md border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
            {serverError}
          </div>
        )}

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save Profile"}
        </Button>
      </form>
    </div>
  );
}
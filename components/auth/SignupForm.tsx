"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import AuthCard from "./AuthCard";
import AuthHeader from "./AuthHeader";

import {
  signupSchema,
  SignupFormData,
} from "@/lib/validations/auth";

import { useRouter } from "next/navigation";
import { signUp } from "@/services/auth.service";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const router = useRouter();
  const [authError, setAuthError] = useState("");

  const onSubmit = async (data: SignupFormData) => {
        try {
            setAuthError("");

            await signUp(
            data.name,
            data.email,
            data.password
            );

            router.push("/dashboard");
        } catch (error: any) {
            console.error(error);

            if (error.message?.includes("rate limit")) {
                setAuthError(
                "Too many signup attempts. Please wait a few minutes and try again."
                );
                return;
            }

            setAuthError(error.message || "Something went wrong.");
        }
    };

  return (
    <AuthCard>
      <AuthHeader
        title="Create your account"
        subtitle="Start your AI fitness journey today."
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div>
          <Label htmlFor="name">Full Name</Label>

          <Input
            id="name"
            placeholder="John Doe"
            className="mt-2"
            {...register("name")}
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email</Label>

          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            className="mt-2"
            {...register("email")}
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="password">Password</Label>

          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            className="mt-2"
            {...register("password")}
          />

          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="h-11 w-full bg-green-500 hover:bg-green-600"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-zinc-400">
        Already have an account?

        <Link
          href="/login"
          className="ml-2 text-green-400 hover:underline"
        >
          Sign In
        </Link>
      </p>
    </AuthCard>
  );
}
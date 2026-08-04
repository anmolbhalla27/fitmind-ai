"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import AuthCard from "./AuthCard";
import AuthHeader from "./AuthHeader";

import {
  loginSchema,
  LoginFormData,
} from "@/lib/validations/auth";

import { signIn } from "@/services/auth.service";

export default function LoginForm() {
  const router = useRouter();
  const [authError, setAuthError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setAuthError("");

      await signIn(
        data.email,
        data.password
      );

      router.push("/dashboard");
    } catch (error: any) {
      console.error(error);

      setAuthError(
        error.message || "Invalid email or password."
      );
    }
  };

  return (
    <AuthCard>
      <AuthHeader
        title="Welcome Back"
        subtitle="Sign in to continue your fitness journey."
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div>
          <Label htmlFor="email">
            Email
          </Label>

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
          <Label htmlFor="password">
            Password
          </Label>

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

        {authError && (
          <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
            {authError}
          </div>
        )}

        <Button
          type="submit"
          className="h-11 w-full bg-green-500 hover:bg-green-600"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing In..." : "Sign In"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-zinc-400">
        Don't have an account?

        <Link
          href="/signup"
          className="ml-2 text-green-400 hover:underline"
        >
          Create one
        </Link>
      </p>
    </AuthCard>
  );
}
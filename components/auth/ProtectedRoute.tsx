"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

import { useUser } from "@/hooks/useUser";
import { useProfile } from "@/hooks/useProfile";
import { isProfileComplete } from "@/lib/profile";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const router = useRouter();
  const pathname = usePathname();

  const { user, loading: userLoading } = useUser();
  const { profile, loading: profileLoading } = useProfile();

  useEffect(() => {
    if (userLoading) {
      return;
    }

    if (!user) {
      router.replace("/login");
      return;
    }

    if (profileLoading) {
      return;
    }

    const onboardingRoute = "/dashboard/onboarding";
    const profileComplete = isProfileComplete(profile);

    if (!profileComplete && pathname !== onboardingRoute) {
      router.replace(onboardingRoute);
      return;
    }

    if (profileComplete && pathname === onboardingRoute) {
      router.replace("/dashboard");
    }
  }, [user, userLoading, profile, profileLoading, pathname, router]);

  if (userLoading || profileLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-zinc-400">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}
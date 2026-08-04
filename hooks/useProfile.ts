"use client";

import { useEffect, useState } from "react";

import type { Profile } from "@/types/profile";
import { getProfile } from "@/services/profile.service";
import { useUser } from "@/hooks/useUser";

export function useProfile() {
  const { user, loading: userLoading } = useUser();

  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userLoading) {
      return;
    }

    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    loadProfile();
  }, [user, userLoading]);

  async function loadProfile() {
    try {
      setLoading(true);

      const data = await getProfile();

      setProfile(data);
    } catch (error) {
      console.error("Failed to load profile:", error);
    } finally {
      setLoading(false);
    }
  }

  return {
    profile,
    loading,
    refresh: loadProfile,
  };
}
import { supabase } from "@/lib/supabase/browser";
import type { ProfileFormData } from "@/lib/validations/profile";

export async function getProfile() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function updateProfile(profile: ProfileFormData) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not authenticated.");
  }

  const { error } = await supabase
    .from("profiles")
    .update(profile)
    .eq("id", user.id);

  if (error) {
    throw error;
  }
}
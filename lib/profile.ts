import { Profile } from "@/types/profile";

export function isProfileComplete(profile: Profile | null) {
  if (!profile) {
    return false;
  }

  return Boolean(
    profile.full_name &&
    profile.gender &&
    profile.age &&
    profile.height_cm &&
    profile.weight_kg &&
    profile.goal &&
    profile.activity_level
  );
}
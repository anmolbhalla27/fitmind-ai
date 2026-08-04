"use client";

import { useUser } from "@/hooks/useUser";

export default function DashboardHeader() {
  const { user } = useUser();

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  const name =
    user?.user_metadata?.name ||
    user?.email?.split("@")[0] ||
    "Athlete";

  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold text-white">
        {greeting}, {name} 👋
      </h1>

      <p className="mt-3 text-zinc-400">
        Here's your fitness summary for today.
      </p>
    </div>
  );
}
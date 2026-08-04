"use client";

import {
  Bot,
  Dumbbell,
  Home,
  Salad,
  Settings,
  TrendingUp,
} from "lucide-react";

import Logo from "./Logo";
import NavItem from "./NavItem";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-zinc-800 bg-black p-6">
      <Logo />

      <div className="mt-10 space-y-2">
        <NavItem
          href="/dashboard"
          label="Dashboard"
          icon={<Home size={20} />}
        />

        <NavItem
          href="/dashboard/workouts"
          label="Workout"
          icon={<Dumbbell size={20} />}
        />

        <NavItem
          href="/dashboard/nutrition"
          label="Nutrition"
          icon={<Salad size={20} />}
        />

        <NavItem
          href="/dashboard/ai-coach"
          label="AI Coach"
          icon={<Bot size={20} />}
        />

        <NavItem
          href="/dashboard/progress"
          label="Progress"
          icon={<TrendingUp size={20} />}
        />

        <NavItem
          href="/dashboard/settings"
          label="Settings"
          icon={<Settings size={20} />}
        />
      </div>
    </aside>
  );
}
import {
  Dumbbell,
  Flame,
  Sparkles,
  Trophy,
} from "lucide-react";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import WeeklyActivityChart from "@/components/dashboard/WeeklyActivityChart";
import WorkoutCard from "@/components/dashboard/WorkoutCard";
import AIRecommendationCard from "@/components/dashboard/AIRecommendationCard";
import AiCoachCard from "@/components/ai/AiCoachCard";

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Workouts"
          value="12"
          subtitle="Completed this month"
          icon={<Dumbbell size={22} />}
        />

        <StatCard
          title="Calories"
          value="2,140"
          subtitle="Today's target"
          icon={<Flame size={22} />}
        />

        <StatCard
          title="Current Streak"
          value="18 Days"
          subtitle="Keep it going!"
          icon={<Trophy size={22} />}
        />

        <StatCard
          title="AI Plans"
          value="4"
          subtitle="Generated this week"
          icon={<Sparkles size={22} />}
        />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <WeeklyActivityChart />
        </div>

        <WorkoutCard />
      </div>

      <div className="mt-8">
        <AiCoachCard />
      </div>

      <div className="mt-8">
        <AIRecommendationCard />
      </div>
    </>
  );
}
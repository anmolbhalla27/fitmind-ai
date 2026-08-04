import { Calendar, Dumbbell } from "lucide-react";

import Card from "@/components/ui/card";

import { Workout } from "@/types/workout";
import WorkoutActions from "./WorkoutActions";

interface WorkoutDetailsProps {
  workout: Workout;
}

export default function WorkoutDetails({
  workout,
}: WorkoutDetailsProps) {
  return (
    <Card className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-500/10 p-2">
              <Dumbbell
                className="text-emerald-400"
                size={20}
              />
            </div>

            <h1 className="text-3xl font-bold text-white">
              {workout.title}
            </h1>
          </div>

          <p className="mt-4 text-zinc-400">
            {workout.description || "No description"}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500">
            <Calendar size={16} />
            Created{" "}
            {new Date(workout.created_at).toLocaleDateString()}
          </div>
        </div>

        <WorkoutActions workoutId={workout.id} />
      </div>
    </Card>
  );
}
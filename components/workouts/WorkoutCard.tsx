import Link from "next/link";
import { ArrowRight, Dumbbell } from "lucide-react";

import Card from "@/components/ui/card";

import { Workout } from "@/types/workout";

interface Props {
  workout: Workout;
}

export default function WorkoutCard({
  workout,
}: Props) {
  return (
    <Card className="transition-all hover:border-emerald-500/30 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-500/10 p-2">
              <Dumbbell
                className="text-emerald-400"
                size={20}
              />
            </div>

            <h2 className="text-xl font-semibold text-white">
              {workout.title}
            </h2>
          </div>

          <p className="text-zinc-400">
            {workout.description || "No description"}
          </p>

          <p className="text-sm text-zinc-500">
            Created{" "}
            {new Date(
              workout.created_at
            ).toLocaleDateString()}
          </p>
        </div>

        <Link
          href={`/dashboard/workouts/${workout.id}`}
          className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
        >
          View
          <ArrowRight size={18} />
        </Link>
      </div>
    </Card>
  );
}
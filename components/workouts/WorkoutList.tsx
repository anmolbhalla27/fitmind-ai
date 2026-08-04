import { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";

interface Props {
  workouts: Workout[];
}

export default function WorkoutList({
  workouts,
}: Props) {
  return (
    <div className="grid gap-6">
      {workouts.map((workout) => (
        <WorkoutCard
          key={workout.id}
          workout={workout}
        />
      ))}
    </div>
  );
}
import Card from "@/components/ui/card";
import PageHeader from "@/components/ui/PageHeader";
import WorkoutForm from "@/components/workouts/WorkoutForm";

export default function CreateWorkoutPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <PageHeader
        title="Create Workout"
        description="Create a new workout routine."
      />

      <Card>
        <WorkoutForm />
      </Card>
    </div>
  );
}
import { Sparkles } from "lucide-react";

export default function AIRecommendationCard() {
  return (
    <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">
      <div className="flex items-center gap-3">
        <Sparkles className="text-green-400" />

        <h2 className="text-xl font-semibold text-white">
          AI Recommendation
        </h2>
      </div>

      <p className="mt-5 leading-7 text-zinc-300">
        Increase your protein intake by approximately
        <span className="font-semibold text-green-400">
          {" "}15 grams
        </span>
        today to support recovery after yesterday's workout.
      </p>
    </div>
  );
}
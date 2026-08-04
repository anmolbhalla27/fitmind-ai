import {
    Activity,
    Dumbbell,
    Flame,
    Sparkles,
} from "lucide-react";

export default function DashboardPreview() {
    return (
        <section className="-mt-24 px-6 pb-32">
            <div className="mx-auto max-w-6xl">

                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 shadow-2xl backdrop-blur">

                    <div className="grid gap-6 lg:grid-cols-3">

                        {/* Progress */}

                        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-green-500/30 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)]">

                            <Activity className="mb-4 h-8 w-8 text-green-400" />

                            <h3 className="text-lg font-semibold text-white">
                                Weekly Progress
                            </h3>

                            <p className="mt-3 text-5xl font-bold text-green-400">
                                82%
                            </p>

                            <div className="mt-6 h-3 overflow-hidden rounded-full bg-zinc-800">
                                <div className="h-full w-[82%] rounded-full bg-green-500" />
                            </div>

                        </div>

                        {/* Workout */}

                        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">

                            <Dumbbell className="mb-4 h-8 w-8 text-blue-400" />

                            <h3 className="text-lg font-semibold text-white">
                                Workout Score
                            </h3>

                            <p className="mt-3 text-5xl font-bold text-white">
                                92
                            </p>

                            <p className="mt-4 text-zinc-400">
                                Excellent consistency this week.
                            </p>

                        </div>

                        {/* Calories */}

                        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/30 hover:shadow-[0_0_40px_rgba(251,146,60,0.15)]">

                            <Flame className="mb-4 h-8 w-8 text-orange-400" />

                            <h3 className="text-lg font-semibold text-white">
                                Calories Burned
                            </h3>

                            <p className="mt-3 text-5xl font-bold text-white">
                                2,345
                            </p>

                            <p className="mt-4 text-zinc-400">
                                Today's calorie burn.
                            </p>

                        </div>

                    </div>

                    {/* AI Recommendation */}

                    <div className="mt-8 rounded-2xl border border-green-500/20 bg-gradient-to-r from-green-500/10 via-transparent to-blue-500/10 p-8">

                        <div className="flex items-center gap-3">

                            <Sparkles className="text-green-400" />

                            <h3 className="text-xl font-semibold text-white">
                                AI Recommendation
                            </h3>

                        </div>

                        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
                            Your upper body strength has improved by
                            <span className="font-semibold text-green-400"> 12% </span>
                            this month.
                            Increase your leg training volume by one extra session
                            and raise your daily protein intake by 15g to maximize
                            muscle growth.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}
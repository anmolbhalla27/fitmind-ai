import {
  Activity,
  Bot,
  Calendar,
  Flame,
  Salad,
  TrendingUp,
} from "lucide-react";

export default function ProductShowcase() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
            Product Preview
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Everything You Need
            <span className="text-green-400"> In One Dashboard</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            Monitor workouts, nutrition, calories, recovery and receive
            AI-powered recommendations from one modern dashboard.
          </p>

        </div>

        {/* Dashboard */}

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur">

          <div className="grid gap-6 lg:grid-cols-4">

            {/* Left Column */}

            <div className="space-y-5">

              <StatCard
                icon={<Activity className="text-green-400" />}
                title="Workout"
                value="18 Sessions"
              />

              <StatCard
                icon={<Flame className="text-orange-400" />}
                title="Calories"
                value="18,540"
              />

              <StatCard
                icon={<Salad className="text-emerald-400" />}
                title="Protein"
                value="145g"
              />

            </div>

            {/* Center */}

            <div className="lg:col-span-2 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">

              <div className="flex items-center justify-between">

                <h3 className="text-xl font-semibold text-white">
                  Weekly Activity
                </h3>

                <TrendingUp className="text-green-400" />

              </div>

              <div className="mt-10 flex h-64 items-end justify-between gap-3">

                {[45, 70, 60, 90, 55, 100, 82].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-xl bg-gradient-to-t from-green-500 to-emerald-300 transition-all duration-300 hover:scale-105"
                    style={{
                      height: `${height}%`,
                    }}
                  />
                ))}

              </div>

              <div className="mt-5 flex justify-between text-sm text-zinc-500">

                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>

              </div>

            </div>

            {/* Right */}

            <div className="space-y-5">

              <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-5">

                <div className="flex items-center gap-2">

                  <Bot className="text-green-400" />

                  <h3 className="font-semibold text-white">
                    AI Coach
                  </h3>

                </div>

                <p className="mt-4 text-sm leading-7 text-zinc-300">
                  Great consistency this week.
                  Increase tomorrow's protein intake by 15g and add one
                  extra leg exercise to maximize gains.
                </p>

              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">

                <div className="flex items-center gap-2">

                  <Calendar className="text-blue-400" />

                  <h3 className="font-semibold text-white">
                    Next Workout
                  </h3>

                </div>

                <p className="mt-4 text-zinc-400">
                  Leg Day
                </p>

                <p className="text-sm text-zinc-500">
                  Tomorrow • 7:00 AM
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

type StatCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

function StatCard({
  icon,
  title,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition-all duration-300 hover:border-green-500/30">

      <div className="mb-3">
        {icon}
      </div>

      <p className="text-sm text-zinc-400">
        {title}
      </p>

      <p className="mt-1 text-2xl font-bold text-white">
        {value}
      </p>

    </div>
  );
}
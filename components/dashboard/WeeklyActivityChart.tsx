"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "Mon", workouts: 1 },
  { day: "Tue", workouts: 2 },
  { day: "Wed", workouts: 1 },
  { day: "Thu", workouts: 3 },
  { day: "Fri", workouts: 2 },
  { day: "Sat", workouts: 1 },
  { day: "Sun", workouts: 2 },
];

export default function WeeklyActivityChart() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Weekly Activity
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#27272a" />

            <XAxis dataKey="day" stroke="#a1a1aa" />

            <YAxis stroke="#a1a1aa" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="workouts"
              stroke="#22c55e"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
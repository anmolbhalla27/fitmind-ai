import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:border-green-500/40 hover:bg-zinc-900">
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-400">
          {title}
        </p>

        <div className="text-green-400">
          {icon}
        </div>
      </div>

      <h2 className="mt-5 text-3xl font-bold text-white">
        {value}
      </h2>

      <p className="mt-2 text-sm text-zinc-500">
        {subtitle}
      </p>
    </div>
  );
}
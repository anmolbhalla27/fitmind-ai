import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/dashboard" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-xl font-bold text-black">
        F
      </div>

      <div>
        <p className="font-semibold text-white">
          FitMind AI
        </p>

        <p className="text-xs text-zinc-400">
          Fitness Coach
        </p>
      </div>
    </Link>
  );
}
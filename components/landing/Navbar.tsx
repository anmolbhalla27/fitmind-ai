"use client";

import Link from "next/link";
import { Dumbbell } from "lucide-react";
import Button from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-lg bg-green-500 p-2">
            <Dumbbell className="h-5 w-5 text-white" />
          </div>

          <span className="text-xl font-bold text-white">
            FitMind AI
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          <Link
            href="#features"
            className="transition hover:text-white"
          >
            Features
          </Link>

          <Link
            href="#how-it-works"
            className="transition hover:text-white"
          >
            How It Works
          </Link>

          <Link
            href="#about"
            className="transition hover:text-white"
          >
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost">
                Login
              </Button>
            </Link>

            <Link href="/signup">
              <Button className="bg-green-500 hover:bg-green-600">
                Get Started
              </Button>
            </Link>

        </div>
      </div>
    </header>
  );
}
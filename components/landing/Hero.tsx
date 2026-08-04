"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative">
            <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl flex-col items-center justify-center px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    {/* Badge */}

                    <div className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-sm font-medium text-green-300 backdrop-blur">
                        ✨ Trusted by Fitness Enthusiasts
                    </div>

                    {/* Heading */}

                    <h1 className="mt-8 max-w-5xl text-6xl font-extrabold leading-tight tracking-tight text-white md:text-8xl">

                        Your

                        <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-blue-400 bg-clip-text text-transparent">
                            {" "}AI Fitness{" "}
                        </span>

                        Coach

                    </h1>

                    {/* Description */}

                    <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
                        Personalized workouts, intelligent nutrition planning,
                        recovery insights, and real-time progress tracking —
                        all powered by artificial intelligence.
                    </p>

                    {/* Buttons */}

                    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

                        <Link href="/signup">
                            <Button
                                size="lg"
                                className="h-14 rounded-xl bg-green-500 px-8 text-base hover:bg-green-600"
                            >
                                Get Started
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>

                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 rounded-xl border-zinc-700 bg-zinc-900 px-8 text-base text-white hover:bg-zinc-800"
                        >
                            <PlayCircle className="mr-2 h-5 w-5" />
                            Watch Demo
                        </Button>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}
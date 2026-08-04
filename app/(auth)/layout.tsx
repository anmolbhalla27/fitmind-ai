export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen bg-zinc-950">
            <div className="grid min-h-screen lg:grid-cols-2">

                {/* Left Side */}

                <section className="hidden items-center justify-center border-r border-zinc-800 bg-gradient-to-br from-zinc-950 via-zinc-900 to-green-950 lg:flex">

                    <div className="max-w-md">

                        <h1 className="text-5xl font-bold text-white">
                            Welcome to
                            <span className="text-green-400">
                                {" "}FitMind AI
                            </span>
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-zinc-400">
                            Your AI-powered fitness coach that creates
                            personalized workouts, nutrition plans,
                            and tracks your progress.
                        </p>

                    </div>

                </section>

                {/* Right Side */}

                <section className="flex items-center justify-center px-6">
                    {children}
                </section>

            </div>
        </main>
    );
}
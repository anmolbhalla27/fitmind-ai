import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import DashboardPreview from "@/components/landing/DashboardPreview";
import BackgroundEffects from "@/components/landing/BackgroundEffects";
import ProductShowcase from "@/components/landing/ProductShowcase";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <DashboardPreview />
      <ProductShowcase />
    </main>
  );
}
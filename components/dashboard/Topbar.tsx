"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/button";
import { signOut } from "@/services/auth.service";
import { useUser } from "@/hooks/useUser";

export default function Topbar() {
  const router = useRouter();
  const { user } = useUser();

  async function handleLogout() {
    await signOut();
    router.replace("/login");
  }

  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-800 bg-zinc-950 px-8">
      <div>
        <h1 className="text-xl font-semibold text-white">
          Welcome back 👋
        </h1>

        <p className="text-sm text-zinc-400">
          {user?.email}
        </p>
      </div>

      <Button
        variant="outline"
        onClick={handleLogout}
        className="flex items-center gap-2"
      >
        <LogOut size={18} />
        Logout
      </Button>
    </header>
  );
}

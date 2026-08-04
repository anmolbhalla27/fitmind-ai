"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export default function NavItem({
  href,
  label,
  icon,
}: NavItemProps) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
        active
          ? "bg-green-500 text-black"
          : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
      }`}
    >
      {icon}

      <span>{label}</span>
    </Link>
  );
}
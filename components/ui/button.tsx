import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-lg font-medium transition-all disabled:pointer-events-none disabled:opacity-50",

        {
          // Variants
          "bg-emerald-600 text-white hover:bg-emerald-500":
            variant === "primary",

          "bg-zinc-800 text-white hover:bg-zinc-700":
            variant === "secondary",

          "border border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-800":
            variant === "outline",

          "bg-transparent text-zinc-300 hover:bg-zinc-800 hover:text-white":
            variant === "ghost",

          "bg-red-600 text-white hover:bg-red-500":
            variant === "danger",

          // Sizes
          "h-9 px-3 text-sm":
            size === "sm",

          "h-10 px-4 text-sm":
            size === "md",

          "h-12 px-6 text-base":
            size === "lg",
        },

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
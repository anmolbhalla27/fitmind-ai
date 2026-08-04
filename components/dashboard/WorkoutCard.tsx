import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger";
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50",
        {
          "bg-emerald-600 text-white hover:bg-emerald-500":
            variant === "primary",

          "bg-zinc-800 text-white hover:bg-zinc-700":
            variant === "secondary",

          "border border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-800":
            variant === "outline",

          "bg-red-600 text-white hover:bg-red-500":
            variant === "danger",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
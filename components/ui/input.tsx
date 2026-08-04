import clsx from "clsx";
import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => (
    <input
      ref={ref}
      className={clsx(
        "w-full rounded-lg border bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition",
        error
          ? "border-red-500"
          : "border-zinc-700 focus:border-emerald-500",
        className
      )}
      {...props}
    />
  )
);

Input.displayName = "Input";

export default Input;
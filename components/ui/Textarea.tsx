import clsx from "clsx";
import { forwardRef, TextareaHTMLAttributes } from "react";

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, className, ...props }, ref) => (
    <textarea
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

Textarea.displayName = "Textarea";

export default Textarea;
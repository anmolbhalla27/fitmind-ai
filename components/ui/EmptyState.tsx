interface EmptyStateProps {
  title: string;
  description: string;
  action?: React.ReactNode;
}

export default function EmptyState({
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="rounded-xl border border-dashed border-zinc-800 bg-zinc-900 p-12 text-center">
      <h2 className="text-xl font-semibold text-white">
        {title}
      </h2>

      <p className="mt-2 text-zinc-400">
        {description}
      </p>

      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}
    </div>
  );
}
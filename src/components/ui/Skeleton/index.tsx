function SkeletonRow() {
  return (
    <div className="flex items-start gap-3 px-4 py-3">
      <div className="mt-0.5 h-5 w-14 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
      <div className="min-w-0 flex-1 space-y-2 pt-0.5">
        <div className="h-4 w-2/3 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-3 w-1/3 animate-pulse rounded bg-zinc-100 dark:bg-zinc-700" />
      </div>
      <div className="h-4 w-12 animate-pulse rounded-full bg-zinc-100 dark:bg-zinc-700" />
    </div>
  );
}

export function IssueListSkeleton() {
  return (
    <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
      {Array.from({ length: 8 }).map((_, i) => (
        <SkeletonRow key={i} />
      ))}
    </div>
  );
}

export function IssueDetailSkeleton() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_260px]">
        <div className="space-y-6">
          <div className="h-8 w-3/4 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="flex gap-3">
            <div className="h-5 w-20 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-5 w-16 animate-pulse rounded-full bg-zinc-100 dark:bg-zinc-700" />
          </div>
          <div className="space-y-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-4 w-full animate-pulse rounded bg-zinc-100 dark:bg-zinc-700" />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="h-4 w-16 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-4 w-24 animate-pulse rounded bg-zinc-100 dark:bg-zinc-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

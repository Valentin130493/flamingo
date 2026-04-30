'use client';

import type { LoadMoreProps } from '../types';

export function LoadMore({ onLoadMore, isLoading, hasMore }: LoadMoreProps) {
  if (!hasMore) return null;

  return (
    <div className="flex justify-center py-4">
      <button
        onClick={onLoadMore}
        disabled={isLoading}
        className="cursor-pointer rounded-md border border-[#26263a] px-4 py-2 font-[family-name:var(--font-dm-mono)] text-xs text-[#7070a0] transition-colors hover:border-[#f06292]/40 hover:text-[#f06292] disabled:cursor-not-allowed disabled:opacity-40"
      >
        {isLoading ? 'Loading…' : 'Load more'}
      </button>
    </div>
  );
}

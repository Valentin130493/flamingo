'use client';

import Image from 'next/image';
import { useFragment } from 'react-relay';
import type { CommentItem_comment$key } from '@/__generated__/CommentItem_comment.graphql';
import { CommentItemFragment } from './api';

type CommentItemProps = {
  comment: CommentItem_comment$key;
};

export function CommentItem({ comment: commentRef }: CommentItemProps) {
  const comment = useFragment(CommentItemFragment, commentRef);

  const createdAt = new Date(comment.created_at as string).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="flex gap-3">
      {comment.users?.avatar_url ? (
        <Image
          src={comment.users.avatar_url}
          alt={comment.users.name ?? ''}
          width={32}
          height={32}
          className="mt-0.5 shrink-0 rounded-full ring-1 ring-[#26263a]"
        />
      ) : (
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1c1c2e] font-[family-name:var(--font-syne)] text-xs font-semibold text-[#f06292] ring-1 ring-[#26263a]">
          {comment.users?.name?.[0]?.toUpperCase() ?? '?'}
        </span>
      )}

      <div className="flex-1 space-y-1.5">
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-medium text-[#e4e4f4]">
            {comment.users?.name ?? 'Unknown'}
          </span>
          <span className="font-[family-name:var(--font-dm-mono)] text-xs text-[#7070a0]">
            {createdAt}
          </span>
        </div>
        <p className="whitespace-pre-wrap text-sm leading-relaxed text-[#c4c4d4]">
          {comment.body}
        </p>
      </div>
    </div>
  );
}

'use client';

import Image from 'next/image';
import { useFragment } from 'react-relay';
import type { fragmentCommentItem_CommentFragment$key } from '@/__generated__/fragmentCommentItem_CommentFragment.graphql';
import { CommentItemFragment } from './api';

type CommentItemProps = {
  comment: fragmentCommentItem_CommentFragment$key;
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
          className="mt-0.5 shrink-0 rounded-full"
        />
      ) : (
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-sm font-medium dark:bg-zinc-700">
          {comment.users?.name?.[0]?.toUpperCase() ?? '?'}
        </span>
      )}

      <div className="flex-1 space-y-1">
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {comment.users?.name ?? 'Unknown'}
          </span>
          <span className="text-xs text-zinc-400">{createdAt}</span>
        </div>
        <p className="text-sm whitespace-pre-wrap text-zinc-700 dark:text-zinc-300">
          {comment.body}
        </p>
      </div>
    </div>
  );
}

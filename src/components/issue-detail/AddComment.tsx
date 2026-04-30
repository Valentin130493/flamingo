'use client';

import { useCallback, useState } from 'react';
import { useMutation } from 'react-relay';
import type { CommentThreadAddCommentMutation as CommentThreadAddCommentMutationType } from '@/__generated__/CommentThreadAddCommentMutation.graphql';
import { useToast } from '@hooks/useToasts';
import { CommentThreadAddCommentMutation } from './api';

type AddCommentProps = {
  issueId: string;
  currentUserId: string;
  onAdded?: () => void;
};

export function AddComment({ issueId, currentUserId, onAdded }: AddCommentProps) {
  const [body, setBody] = useState('');
  const { showToast } = useToast();
  const [commitAdd, isInFlight] =
    useMutation<CommentThreadAddCommentMutationType>(CommentThreadAddCommentMutation);

  const handleSubmit = useCallback(
    (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      const trimmed = body.trim();
      if (!trimmed) return;

      commitAdd({
        variables: { issue_id: issueId, author_id: currentUserId, body: trimmed },
        onCompleted: () => {
          setBody('');
          onAdded?.();
        },
        onError: (err) => showToast(`Failed to post comment: ${err.message}`, 'error'),
      });
    },
    [body, issueId, currentUserId, commitAdd, onAdded, showToast],
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Add a comment…"
        rows={3}
        className="w-full rounded-lg border border-[#26263a] bg-[#131320] p-3 text-sm text-[#e4e4f4] outline-none transition-colors focus:border-[#f06292]/50 focus:ring-1 focus:ring-[#f06292]/20 placeholder:text-[#3c3c58]"
      />
      <button
        type="submit"
        disabled={isInFlight || !body.trim()}
        className="cursor-pointer rounded-md bg-[#f06292] px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#e91e73] disabled:cursor-not-allowed disabled:opacity-40"
      >
        {isInFlight ? 'Posting…' : 'Comment'}
      </button>
    </form>
  );
}

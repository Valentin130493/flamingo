'use client';

import { useCallback, useState } from 'react';
import { useMutation } from 'react-relay';
import type { mutationAddCommentMutation } from '@/__generated__/mutationAddCommentMutation.graphql';
import { useToast } from '@hooks/useToasts';
import { AddCommentMutationDoc } from './api';

type AddCommentProps = {
  issueId: string;
  currentUserId: string;
  onAdded?: () => void;
};

export function AddComment({ issueId, currentUserId, onAdded }: AddCommentProps) {
  const [body, setBody] = useState('');
  const { showToast } = useToast();
  const [commitAdd, isInFlight] = useMutation<mutationAddCommentMutation>(AddCommentMutationDoc);

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
        className="w-full rounded-lg border border-zinc-200 p-3 text-sm focus:border-blue-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
      />
      <button
        type="submit"
        disabled={isInFlight || !body.trim()}
        className="rounded-md bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {isInFlight ? 'Posting…' : 'Comment'}
      </button>
    </form>
  );
}

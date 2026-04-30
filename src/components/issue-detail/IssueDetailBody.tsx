'use client';

import { useCallback, useState } from 'react';
import { useFragment, useMutation } from 'react-relay';
import type { fragmentIssueDetailBody_IssueFragment$key } from '@/__generated__/fragmentIssueDetailBody_IssueFragment.graphql';
import type { mutationIssueDetailBodyUpdateMutation } from '@/__generated__/mutationIssueDetailBodyUpdateMutation.graphql';
import { useToast } from '@hooks/useToasts';
import { IssueDetailBodyFragment, mutationUpdateIssueBodyMutation } from './api';

interface IssueDetailBodyProps {
  issue: fragmentIssueDetailBody_IssueFragment$key;
}

export function IssueDetailBody({ issue: issueRef }: IssueDetailBodyProps) {
  const issue = useFragment(IssueDetailBodyFragment, issueRef);
  const { showToast } = useToast();

  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState('');

  const [commitUpdate] = useMutation<mutationIssueDetailBodyUpdateMutation>(
    mutationUpdateIssueBodyMutation,
  );

  const saveDescription = useCallback(() => {
    if (draft === (issue.description ?? '')) {
      setEditing(false);
      return;
    }
    commitUpdate({
      variables: { id: issue.id as string, description: draft },
      optimisticResponse: {
        updateissuesCollection: {
          records: [{ nodeId: issue.nodeId, id: issue.id, description: draft }],
        },
      },
      onCompleted: () => setEditing(false),
      onError: (err) => {
        showToast(`Failed to save description: ${err.message}`, 'error');
        setEditing(false);
      },
    });
  }, [issue, draft, commitUpdate, showToast]);

  if (editing) {
    return (
      <div className="space-y-2">
        <textarea
          autoFocus
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          rows={8}
          className="w-full rounded-lg border border-zinc-300 p-3 text-sm text-zinc-800 focus:border-blue-500 focus:outline-none dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200"
          placeholder="Add a description…"
        />
        <div className="flex gap-2">
          <button
            onClick={saveDescription}
            className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Save
          </button>
          <button
            onClick={() => setEditing(false)}
            className="rounded-md px-3 py-1.5 text-sm text-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => {
        setDraft(issue.description ?? '');
        setEditing(true);
      }}
      className="min-h-[80px] cursor-text rounded-lg p-3 text-sm text-zinc-700 ring-1 ring-transparent hover:bg-zinc-50 hover:ring-zinc-200 dark:text-zinc-300 dark:hover:bg-zinc-800/50"
      title="Click to edit description"
    >
      {issue.description ? (
        <p className="whitespace-pre-wrap">{issue.description}</p>
      ) : (
        <p className="text-zinc-400">No description. Click to add one.</p>
      )}
    </div>
  );
}

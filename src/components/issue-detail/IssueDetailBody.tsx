'use client';

import { useCallback, useState } from 'react';
import { useFragment, useMutation } from 'react-relay';
import type { IssueDetailBody_issue$key } from '@/__generated__/IssueDetailBody_issue.graphql';
import type { IssueDetailBodyUpdateMutation as IssueDetailBodyUpdateMutationType } from '@/__generated__/IssueDetailBodyUpdateMutation.graphql';
import { useToast } from '@hooks/useToasts';
import { IssueDetailBodyFragment, IssueDetailBodyUpdateMutation } from './api';

interface IssueDetailBodyProps {
  issue: IssueDetailBody_issue$key;
}

export function IssueDetailBody({ issue: issueRef }: IssueDetailBodyProps) {
  const issue = useFragment(IssueDetailBodyFragment, issueRef);
  const { showToast } = useToast();

  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState('');

  const [commitUpdate] =
    useMutation<IssueDetailBodyUpdateMutationType>(IssueDetailBodyUpdateMutation);

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
          className="w-full rounded-lg border border-[#26263a] bg-[#131320] p-3 text-sm text-[#e4e4f4] outline-none transition-colors focus:border-[#f06292]/50 focus:ring-1 focus:ring-[#f06292]/20 placeholder:text-[#3c3c58]"
          placeholder="Add a description…"
        />
        <div className="flex gap-2">
          <button
            onClick={saveDescription}
            className="cursor-pointer rounded-md bg-[#f06292] px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#e91e73]"
          >
            Save
          </button>
          <button
            onClick={() => setEditing(false)}
            className="cursor-pointer rounded-md px-3 py-1.5 text-sm text-[#7070a0] transition-colors hover:bg-[#1c1c2e] hover:text-[#e4e4f4]"
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
      className="min-h-[80px] cursor-text rounded-lg p-3 text-sm text-[#c4c4d4] ring-1 ring-transparent transition-all hover:bg-[#131320] hover:ring-[#26263a]"
      title="Click to edit description"
    >
      {issue.description ? (
        <p className="whitespace-pre-wrap leading-relaxed">{issue.description}</p>
      ) : (
        <p className="text-[#3c3c58]">No description. Click to add one.</p>
      )}
    </div>
  );
}

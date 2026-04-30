'use client';

import { useCallback, useMemo, useState } from 'react';
import { useFragment, useMutation } from 'react-relay';
import type { fragmentIssueLabels_IssueFragment$key } from '@/__generated__/fragmentIssueLabels_IssueFragment.graphql';
import type { mutationIssueLabelsAddMutation } from '@/__generated__/mutationIssueLabelsAddMutation.graphql';
import type { mutationIssueLabelsRemoveMutation } from '@/__generated__/mutationIssueLabelsRemoveMutation.graphql';
import { LabelBadge } from '@/components/ui/Badges';
import { useToast } from '@hooks/useToasts';
import { AddLabelMutation, IssueLabelsFragment, RemoveLabelMutation } from './api';

interface AllLabel {
  id: string;
  name: string;
  color: string;
}

interface IssueLabelsProps {
  issue: fragmentIssueLabels_IssueFragment$key;
  allLabels: AllLabel[];
}

export function IssueLabels({ issue: issueRef, allLabels }: IssueLabelsProps) {
  const issue = useFragment(IssueLabelsFragment, issueRef);
  const { showToast } = useToast();
  const [showPicker, setShowPicker] = useState(false);

  const [commitAdd] = useMutation<mutationIssueLabelsAddMutation>(AddLabelMutation);
  const [commitRemove] = useMutation<mutationIssueLabelsRemoveMutation>(RemoveLabelMutation);

  type ILEdge = { node: { label_id: unknown; labels: AllLabel | null } };
  const ilEdges = useMemo(
    () => issue.issue_labelsCollection?.edges as ILEdge[] | undefined,
    [issue.issue_labelsCollection?.edges],
  );

  const assignedLabelIds = useMemo(
    () => new Set(ilEdges?.map((e) => e.node.label_id as string)),
    [ilEdges],
  );

  const handleToggle = useCallback(
    (labelId: string) => {
      if (assignedLabelIds.has(labelId)) {
        commitRemove({
          variables: { issue_id: issue.id as string, label_id: labelId },
          onError: (err) => showToast(`Failed to remove label: ${err.message}`, 'error'),
        });
      } else {
        commitAdd({
          variables: { issue_id: issue.id as string, label_id: labelId },
          onError: (err) => showToast(`Failed to add label: ${err.message}`, 'error'),
        });
      }
    },
    [issue.id, assignedLabelIds, commitAdd, commitRemove, showToast],
  );

  const assignedLabels = ilEdges
    ?.map((e) => e.node.labels)
    .filter((l): l is AllLabel => l !== null);

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-1">
        {assignedLabels?.length === 0 && <span className="text-sm text-zinc-400">No labels</span>}
        {assignedLabels?.map((label) => (
          <LabelBadge key={label.id} name={label.name} color={label.color} />
        ))}
        {allLabels.length > 0 && (
          <button
            onClick={() => setShowPicker((v) => !v)}
            className="rounded-full px-2 py-0.5 text-xs text-zinc-400 ring-1 ring-zinc-200 hover:ring-zinc-400 dark:ring-zinc-700"
          >
            {showPicker ? 'Close' : '+ Edit'}
          </button>
        )}
      </div>

      {showPicker && (
        <div className="absolute top-8 left-0 z-10 w-48 rounded-lg border border-zinc-200 bg-white p-2 shadow-md dark:border-zinc-700 dark:bg-zinc-900">
          {allLabels.map((label) => (
            <button
              key={label.id}
              onClick={() => handleToggle(label.id)}
              className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800"
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: label.color }} />
              <span className="flex-1 text-left text-zinc-700 dark:text-zinc-300">
                {label.name}
              </span>
              {assignedLabelIds.has(label.id) && (
                <span className="text-xs text-emerald-500">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

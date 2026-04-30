'use client';

import { useCallback, useMemo, useState } from 'react';
import { useFragment, useMutation } from 'react-relay';
import type { IssueDetailLabels_issue$key } from '@/__generated__/IssueDetailLabels_issue.graphql';
import type { IssueDetailLabelsAddMutation as IssueDetailLabelsAddMutationType } from '@/__generated__/IssueDetailLabelsAddMutation.graphql';
import type { IssueDetailLabelsRemoveMutation as IssueDetailLabelsRemoveMutationType } from '@/__generated__/IssueDetailLabelsRemoveMutation.graphql';
import { LabelBadge } from '@/components/ui/Badges';
import { useToast } from '@hooks/useToasts';
import {
  IssueDetailLabelsFragment,
  IssueDetailLabelsAddMutation,
  IssueDetailLabelsRemoveMutation,
} from './api';

interface AllLabel {
  id: string;
  name: string;
  color: string;
}

interface IssueLabelsProps {
  issue: IssueDetailLabels_issue$key;
  allLabels: AllLabel[];
}

export function IssueLabels({ issue: issueRef, allLabels }: IssueLabelsProps) {
  const issue = useFragment(IssueDetailLabelsFragment, issueRef);
  const { showToast } = useToast();
  const [showPicker, setShowPicker] = useState(false);

  const [commitAdd] = useMutation<IssueDetailLabelsAddMutationType>(IssueDetailLabelsAddMutation);
  const [commitRemove] =
    useMutation<IssueDetailLabelsRemoveMutationType>(IssueDetailLabelsRemoveMutation);

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
      <div className="flex flex-wrap gap-1.5">
        {assignedLabels?.length === 0 && (
          <span className="font-[family-name:var(--font-dm-mono)] text-xs text-[#3c3c58]">
            No labels
          </span>
        )}
        {assignedLabels?.map((label) => (
          <LabelBadge key={label.id} name={label.name} color={label.color} />
        ))}
        {allLabels.length > 0 && (
          <button
            onClick={() => setShowPicker((v) => !v)}
            className="cursor-pointer rounded-md px-2 py-0.5 font-[family-name:var(--font-dm-mono)] text-xs text-[#7070a0] ring-1 ring-[#26263a] transition-colors hover:ring-[#f06292]/40 hover:text-[#f06292]"
          >
            {showPicker ? 'Close' : '+ Edit'}
          </button>
        )}
      </div>

      {showPicker && (
        <div className="absolute top-8 left-0 z-10 w-48 rounded-lg border border-[#26263a] bg-[#131320] p-1.5 shadow-xl shadow-black/40">
          {allLabels.map((label) => (
            <button
              key={label.id}
              onClick={() => handleToggle(label.id)}
              className="flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-[#1c1c2e]"
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: label.color }} />
              <span className="flex-1 text-left text-[#c4c4d4]">{label.name}</span>
              {assignedLabelIds.has(label.id) && (
                <span className="text-xs text-[#f06292]">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

'use client';

import { useCallback, useState } from 'react';
import { useFragment, useMutation } from 'react-relay';
import type { fragmentIssueDetailHeader_IssueFragment$key } from '@/__generated__/fragmentIssueDetailHeader_IssueFragment.graphql';
import type { mutationIssueDetailHeaderTitleMutation } from '@/__generated__/mutationIssueDetailHeaderTitleMutation.graphql';
import type { mutationIssueDetailHeaderStatusMutation } from '@/__generated__/mutationIssueDetailHeaderStatusMutation.graphql';
import type { mutationIssueDetailHeaderPriorityMutation } from '@/__generated__/mutationIssueDetailHeaderPriorityMutation.graphql';
import { PriorityBadge, StatusBadge } from '@/components/ui/Badges';
import { useToast } from '@hooks/useToasts';
import {
  IssueDetailHeaderFragment,
  UpdateIssueTitleMutation,
  UpdateIssueStatusMutation,
  UpdateIssuePriorityMutation,
} from './api';
import { PRIORITIES, STATUSES } from '../ui/Badges/constants';

interface IssueDetailHeaderProps {
  issue: fragmentIssueDetailHeader_IssueFragment$key;
}

export function IssueDetailHeader({ issue: issueRef }: IssueDetailHeaderProps) {
  const issue = useFragment(IssueDetailHeaderFragment, issueRef);
  const { showToast } = useToast();

  const [editingTitle, setEditingTitle] = useState(false);
  const [titleDraft, setTitleDraft] = useState('');

  const [commitTitle] =
    useMutation<mutationIssueDetailHeaderTitleMutation>(UpdateIssueTitleMutation);
  const [commitStatus] =
    useMutation<mutationIssueDetailHeaderStatusMutation>(UpdateIssueStatusMutation);
  const [commitPriority] = useMutation<mutationIssueDetailHeaderPriorityMutation>(
    UpdateIssuePriorityMutation,
  );

  const saveTitle = useCallback(() => {
    const trimmed = titleDraft.trim();
    if (!trimmed || trimmed === issue.title) {
      setEditingTitle(false);
      return;
    }
    commitTitle({
      variables: { id: issue.id as string, title: trimmed },
      optimisticResponse: {
        updateissuesCollection: {
          records: [{ nodeId: issue.nodeId, id: issue.id, title: trimmed }],
        },
      },
      onCompleted: () => setEditingTitle(false),
      onError: (err) => {
        showToast(`Failed to update title: ${err.message}`, 'error');
        setEditingTitle(false);
      },
    });
  }, [issue, titleDraft, commitTitle, showToast]);

  const handleStatusChange = useCallback(
    (status: string) => {
      commitStatus({
        variables: { id: issue.id as string, status },
        optimisticResponse: {
          updateissuesCollection: { records: [{ nodeId: issue.nodeId, id: issue.id, status }] },
        },
        onError: (err) => showToast(`Failed to update status: ${err.message}`, 'error'),
      });
    },
    [issue, commitStatus, showToast],
  );

  const handlePriorityChange = useCallback(
    (priority: string) => {
      commitPriority({
        variables: { id: issue.id as string, priority },
        optimisticResponse: {
          updateissuesCollection: { records: [{ nodeId: issue.nodeId, id: issue.id, priority }] },
        },
        onError: (err) => showToast(`Failed to update priority: ${err.message}`, 'error'),
      });
    },
    [issue, commitPriority, showToast],
  );

  const createdAt = new Date(issue.created_at as string).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="space-y-3">
      {editingTitle ? (
        <input
          autoFocus
          value={titleDraft}
          onChange={(e) => setTitleDraft(e.target.value)}
          onBlur={saveTitle}
          onKeyDown={(e) => {
            if (e.key === 'Enter') saveTitle();
            if (e.key === 'Escape') setEditingTitle(false);
          }}
          className="w-full rounded border border-zinc-300 px-2 py-1 text-2xl font-semibold text-zinc-900 focus:border-blue-500 focus:outline-none dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100"
        />
      ) : (
        <h1
          className="cursor-text text-2xl font-semibold text-zinc-900 hover:underline dark:text-zinc-100"
          onClick={() => {
            setTitleDraft(issue.title);
            setEditingTitle(true);
          }}
          title="Click to edit"
        >
          {issue.title}
        </h1>
      )}

      <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500">
        <span>Created {createdAt}</span>

        <div className="flex items-center gap-1.5">
          <select
            value={issue.status}
            onChange={(e) => handleStatusChange(e.target.value)}
            className="rounded border border-zinc-200 bg-white px-2 py-0.5 text-xs dark:border-zinc-700 dark:bg-zinc-900"
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s.replace('_', ' ')}
              </option>
            ))}
          </select>
          <StatusBadge status={issue.status} />
        </div>

        <div className="flex items-center gap-1.5">
          <select
            value={issue.priority}
            onChange={(e) => handlePriorityChange(e.target.value)}
            className="rounded border border-zinc-200 bg-white px-2 py-0.5 text-xs dark:border-zinc-700 dark:bg-zinc-900"
          >
            {PRIORITIES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          <PriorityBadge priority={issue.priority} />
        </div>
      </div>
    </div>
  );
}

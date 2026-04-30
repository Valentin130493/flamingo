'use client';

import { useCallback, useState } from 'react';
import { useFragment, useMutation } from 'react-relay';
import type { IssueDetailHeader_issue$key } from '@/__generated__/IssueDetailHeader_issue.graphql';
import type { IssueDetailHeaderUpdateTitleMutation } from '@/__generated__/IssueDetailHeaderUpdateTitleMutation.graphql';
import type { IssueDetailHeaderUpdateStatusMutation } from '@/__generated__/IssueDetailHeaderUpdateStatusMutation.graphql';
import type { IssueDetailHeaderUpdatePriorityMutation } from '@/__generated__/IssueDetailHeaderUpdatePriorityMutation.graphql';
import { PriorityBadge, StatusBadge } from '@/components/ui/Badges';
import { useToast } from '@hooks/useToasts';
import {
  IssueDetailHeaderFragment,
  IssueDetailHeaderUpdateTitleMutation as UpdateTitleMutation,
  IssueDetailHeaderUpdateStatusMutation as UpdateStatusMutation,
  IssueDetailHeaderUpdatePriorityMutation as UpdatePriorityMutation,
} from './api';
import { PRIORITIES, STATUSES } from '../ui/Badges/constants';

interface IssueDetailHeaderProps {
  issue: IssueDetailHeader_issue$key;
}

const selectClass =
  'rounded-md border border-[#26263a] bg-[#131320] px-2 py-0.5 font-[family-name:var(--font-dm-mono)] text-xs text-[#c4c4d4] outline-none transition-colors hover:border-[#3a3a54] focus:border-[#f06292]/50';

export function IssueDetailHeader({ issue: issueRef }: IssueDetailHeaderProps) {
  const issue = useFragment(IssueDetailHeaderFragment, issueRef);
  const { showToast } = useToast();

  const [editingTitle, setEditingTitle] = useState(false);
  const [titleDraft, setTitleDraft] = useState('');

  const [commitTitle] = useMutation<IssueDetailHeaderUpdateTitleMutation>(UpdateTitleMutation);
  const [commitStatus] = useMutation<IssueDetailHeaderUpdateStatusMutation>(UpdateStatusMutation);
  const [commitPriority] =
    useMutation<IssueDetailHeaderUpdatePriorityMutation>(UpdatePriorityMutation);

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
    <div className="space-y-4">
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
          className="w-full rounded-lg border border-[#26263a] bg-[#131320] px-3 py-2 font-[family-name:var(--font-syne)] text-2xl font-semibold text-[#e4e4f4] outline-none focus:border-[#f06292]/50 focus:ring-1 focus:ring-[#f06292]/20"
        />
      ) : (
        <h1
          className="cursor-text font-[family-name:var(--font-syne)] text-2xl font-semibold text-[#e4e4f4] transition-colors hover:text-white"
          onClick={() => {
            setTitleDraft(issue.title);
            setEditingTitle(true);
          }}
          title="Click to edit"
        >
          {issue.title}
        </h1>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <span className="font-[family-name:var(--font-dm-mono)] text-xs text-[#7070a0]">
          Created {createdAt}
        </span>

        <div className="flex items-center gap-1.5">
          <select
            value={issue.status}
            onChange={(e) => handleStatusChange(e.target.value)}
            className={selectClass}
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
            className={selectClass}
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

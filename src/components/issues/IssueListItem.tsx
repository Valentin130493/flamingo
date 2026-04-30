'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useFragment, useMutation } from 'react-relay';
import type { fragmentIssueListItem_IssueFragment$key } from '@/__generated__/fragmentIssueListItem_IssueFragment.graphql';
import type { mutationIssueListItemUpdateStatusMutation } from '@/__generated__/mutationIssueListItemUpdateStatusMutation.graphql';
import { LabelBadge, PriorityBadge, StatusBadge } from '@/components/ui/Badges';
import { routes } from '@/lib/routes';
import { useToast } from '@hooks/useToasts';
import type { IssueStatus } from '../ui/types';
import { STATUSES } from '../ui/Badges/constants';
import { UpdateStatusMutation, IssueListItemFragment } from './api';

interface IssueListItemProps {
  issue: fragmentIssueListItem_IssueFragment$key;
}

const STATUS_CYCLE: IssueStatus[] = STATUSES;

export function IssueListItem({ issue: issueRef }: IssueListItemProps) {
  const issue = useFragment(IssueListItemFragment, issueRef);
  const { showToast } = useToast();
  const router = useRouter();

  const [commitUpdateStatus, isUpdating] =
    useMutation<mutationIssueListItemUpdateStatusMutation>(UpdateStatusMutation);

  const handleStatusClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const currentIdx = STATUS_CYCLE.indexOf(issue.status as IssueStatus);
      const nextStatus = STATUS_CYCLE[(currentIdx + 1) % STATUS_CYCLE.length];

      commitUpdateStatus({
        variables: { id: issue.id, status: nextStatus },
        optimisticResponse: {
          updateissuesCollection: {
            records: [{ nodeId: issue.nodeId, id: issue.id, status: nextStatus }],
          },
        },
        onError(err) {
          showToast(`Failed to update status: ${err.message}`, 'error');
        },
      });
    },
    [issue, commitUpdateStatus, showToast],
  );

  type LabelNode = { id: string; name: string; color: string };
  type IssueEdge = { node: { labels: LabelNode | null } };
  const rawEdges = (issue.issue_labelsCollection?.edges as IssueEdge[] | undefined) ?? [];
  const issueLabels = rawEdges.map((e) => e.node.labels).filter((l): l is LabelNode => l !== null);

  const createdAt = new Date(issue.created_at as string).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  const handleClick = useCallback(() => {
    router.push(routes.issues.detail(issue.id as string));
  }, [router, issue.id]);

  return (
    <div
      onClick={handleClick}
      className="flex cursor-pointer items-start gap-3 px-4 py-3 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
    >
      <button
        onClick={handleStatusClick}
        disabled={isUpdating}
        className="mt-0.5 shrink-0 disabled:opacity-50"
        title="Click to advance status"
      >
        <StatusBadge status={issue.status} />
      </button>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="truncate font-medium text-zinc-900 dark:text-zinc-100">
            {issue.title}
          </span>
          {issueLabels.length > 0 && (
            <span className="flex shrink-0 gap-1">
              {issueLabels.map((label) => (
                <LabelBadge key={label.id} name={label.name} color={label.color} />
              ))}
            </span>
          )}
        </div>
        <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500">
          <span>{createdAt}</span>
          {issue.users && <span>· {issue.users.name}</span>}
        </div>
      </div>

      <div className="shrink-0">
        <PriorityBadge priority={issue.priority} />
      </div>
    </div>
  );
}

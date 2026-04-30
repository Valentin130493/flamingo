'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useFragment, useMutation } from 'react-relay';
import type { IssueListItem_issue$key } from '@/__generated__/IssueListItem_issue.graphql';
import type { IssueListItemUpdateStatusMutation as IssueListItemUpdateStatusMutationType } from '@/__generated__/IssueListItemUpdateStatusMutation.graphql';
import { LabelBadge, PriorityBadge, StatusBadge } from '@/components/ui/Badges';
import { routes } from '@/lib/routes';
import { useToast } from '@hooks/useToasts';
import type { IssueStatus } from '../ui/types';
import { STATUSES } from '../ui/Badges/constants';
import { IssueListItemFragment, IssueListItemUpdateStatusMutation } from './api';

interface IssueListItemProps {
  issue: IssueListItem_issue$key;
}

const STATUS_CYCLE: IssueStatus[] = STATUSES;

export function IssueListItem({ issue: issueRef }: IssueListItemProps) {
  const issue = useFragment(IssueListItemFragment, issueRef);
  const { showToast } = useToast();
  const router = useRouter();

  const [commitUpdateStatus, isUpdating] =
    useMutation<IssueListItemUpdateStatusMutationType>(IssueListItemUpdateStatusMutation);

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
      className="group flex cursor-pointer items-start gap-3 px-4 py-3.5 transition-colors duration-150 hover:bg-[#131320]"
    >
      <button
        onClick={handleStatusClick}
        disabled={isUpdating}
        className="mt-0.5 shrink-0 disabled:opacity-40 transition-opacity"
        title="Click to advance status"
      >
        <StatusBadge status={issue.status} />
      </button>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="truncate text-sm text-[#e4e4f4] group-hover:text-white transition-colors">
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
        <div className="mt-1 flex items-center gap-2 font-[family-name:var(--font-dm-mono)] text-xs text-[#7070a0]">
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

'use client';

import { Suspense } from 'react';
import { useLazyLoadQuery } from 'react-relay';
import type { queryIssueDetailQuery } from '@/__generated__/queryIssueDetailQuery.graphql';
import { IssueDetailSkeleton } from '@/components/ui/Skeleton';
import { IssueAssignee } from './IssueAssignee';
import { IssueDetailBody } from './IssueDetailBody';
import { IssueDetailHeader } from './IssueDetailHeader';
import { IssueLabels } from './IssueLabels';
import { CommentThread } from './CommentThread';
import { IssueDetailQueryDoc } from './api';

const DEMO_USER_ID = process.env.NEXT_PUBLIC_DEMO_USER_ID ?? '';

interface IssueDetailQueryProps {
  issueId: string;
}

function IssueDetailInner({ issueId }: IssueDetailQueryProps) {
  const data = useLazyLoadQuery<queryIssueDetailQuery>(
    IssueDetailQueryDoc,
    { id: issueId, issueId },
    { fetchPolicy: 'store-and-network' },
  );

  const issueEdge = data.issuesCollection?.edges[0];
  if (!issueEdge) {
    return <div className="py-16 text-center text-sm text-zinc-400">Issue not found.</div>;
  }

  const issue = issueEdge.node;

  type LabelRow = { id: unknown; name: string; color: string };
  const allLabels =
    data.labelsCollection?.edges.map(({ node }: { node: LabelRow }) => ({
      id: node.id as string,
      name: node.name,
      color: node.color,
    })) ?? [];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_260px]">
        <div className="space-y-6">
          <IssueDetailHeader issue={issue} />
          <IssueDetailBody issue={issue} />
          <hr className="border-zinc-200 dark:border-zinc-800" />
          <CommentThread queryRef={data} issueId={issueId} currentUserId={DEMO_USER_ID} />
        </div>

        <aside className="space-y-6">
          <section className="space-y-1.5">
            <h3 className="text-xs font-semibold tracking-wide text-zinc-500 uppercase">
              Assignee
            </h3>
            <IssueAssignee assignee={issue.users ?? null} />
          </section>

          <section className="space-y-1.5">
            <h3 className="text-xs font-semibold tracking-wide text-zinc-500 uppercase">Labels</h3>
            <IssueLabels issue={issue} allLabels={allLabels} />
          </section>
        </aside>
      </div>
    </div>
  );
}

export function IssueDetailQuery({ issueId }: IssueDetailQueryProps) {
  return (
    <Suspense fallback={<IssueDetailSkeleton />}>
      <IssueDetailInner issueId={issueId} />
    </Suspense>
  );
}

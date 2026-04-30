'use client';

import { usePaginationFragment } from 'react-relay';
import type { fragmentIssueList_IssueListFragment$key } from '@/__generated__/fragmentIssueList_IssueListFragment.graphql';
import { LoadMore } from '@/components/ui/LoadMore';
import { IssueListItem } from './IssueListItem';
import { IssueListFragment } from './api';
import { PAGINATION_SIZE } from '@/static/pagination';

interface IssueListProps {
  queryRef: fragmentIssueList_IssueListFragment$key;
}

export function IssueList({ queryRef }: IssueListProps) {
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment(
    IssueListFragment,
    queryRef,
  );

  const edges = data.issuesCollection?.edges ?? [];

  const handleLoadMore = () => {
    if (isLoadingNext || !hasNext) return;
    loadNext(PAGINATION_SIZE);
  };

  if (edges.length === 0) {
    return (
      <div className="py-16 text-center text-sm text-zinc-400">
        No issues match the current filters.
      </div>
    );
  }

  return (
    <div>
      <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
        {edges.map(({ node }) => (
          <IssueListItem key={node.nodeId} issue={node} />
        ))}
      </div>
      <LoadMore onLoadMore={handleLoadMore} isLoading={isLoadingNext} hasMore={hasNext} />
    </div>
  );
}

'use client';

import { usePaginationFragment } from 'react-relay';
import type { IssueList_query$key } from '@/__generated__/IssueList_query.graphql';
import { LoadMore } from '@/components/ui/LoadMore';
import { IssueListItem } from './IssueListItem';
import { IssueListFragment } from './api';
import { PAGINATION_SIZE } from '@/static/pagination';

interface IssueListProps {
  queryRef: IssueList_query$key;
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
      <div className="py-16 text-center font-[family-name:var(--font-dm-mono)] text-sm text-[#7070a0]">
        No issues match the current filters.
      </div>
    );
  }

  return (
    <div>
      <div className="divide-y divide-[#1e1e2c]">
        {edges.map(({ node }) => (
          <IssueListItem key={node.nodeId} issue={node} />
        ))}
      </div>
      <LoadMore onLoadMore={handleLoadMore} isLoading={isLoadingNext} hasMore={hasNext} />
    </div>
  );
}

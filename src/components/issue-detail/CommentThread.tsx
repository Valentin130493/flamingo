'use client';

import { useCallback } from 'react';
import { usePaginationFragment } from 'react-relay';
import { LoadMore } from '@/components/ui/LoadMore';
import { AddComment } from './AddComment';
import { CommentItem } from './CommentItem';
import { CommentThreadFragment } from './api';
import type { fragmentCommentThreadFragment$key } from '@/__generated__/fragmentCommentThreadFragment.graphql';

type CommentThreadProps = {
  queryRef: fragmentCommentThreadFragment$key;
  issueId: string;
  currentUserId: string;
};

export function CommentThread({ queryRef, issueId, currentUserId }: CommentThreadProps) {
  const { data, loadNext, hasNext, isLoadingNext, refetch } = usePaginationFragment(
    CommentThreadFragment,
    queryRef,
  );

  const handleCommentAdded = useCallback(() => {
    refetch({ issueId, first: 20 }, { fetchPolicy: 'network-only' });
  }, [refetch, issueId]);

  const edges = data.commentsCollection?.edges ?? [];

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-semibold tracking-wide text-zinc-500 uppercase">
        Comments {edges.length > 0 && `(${edges.length}${hasNext ? '+' : ''})`}
      </h2>

      {edges.length === 0 && <p className="text-sm text-zinc-400">No comments yet.</p>}

      <div className="space-y-4">
        {edges.map(
          ({
            node,
          }: {
            node: { nodeId: string } & Parameters<typeof CommentItem>[0]['comment'];
          }) => (
            <CommentItem key={node.nodeId} comment={node} />
          ),
        )}
      </div>

      <LoadMore onLoadMore={() => loadNext(20)} isLoading={isLoadingNext} hasMore={hasNext} />

      <div className="pt-2">
        <AddComment issueId={issueId} currentUserId={currentUserId} onAdded={handleCommentAdded} />
      </div>
    </div>
  );
}

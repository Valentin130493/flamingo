'use client';

import { useCallback } from 'react';
import { usePaginationFragment } from 'react-relay';
import { LoadMore } from '@/components/ui/LoadMore';
import { AddComment } from './AddComment';
import { CommentItem } from './CommentItem';
import { CommentThreadFragment } from './api';
import type { CommentThread_query$key } from '@/__generated__/CommentThread_query.graphql';

type CommentThreadProps = {
  queryRef: CommentThread_query$key;
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
    <div className="space-y-5">
      <h2 className="font-[family-name:var(--font-syne)] text-xs font-semibold uppercase tracking-widest text-[#7070a0]">
        Comments {edges.length > 0 && `(${edges.length}${hasNext ? '+' : ''})`}
      </h2>

      {edges.length === 0 && (
        <p className="font-[family-name:var(--font-dm-mono)] text-sm text-[#3c3c58]">
          No comments yet.
        </p>
      )}

      <div className="space-y-5">
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

      <div className="border-t border-[#1e1e2c] pt-4">
        <AddComment issueId={issueId} currentUserId={currentUserId} onAdded={handleCommentAdded} />
      </div>
    </div>
  );
}

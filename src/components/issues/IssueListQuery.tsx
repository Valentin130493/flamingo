'use client';

import { Suspense, useCallback, useEffect, useState } from 'react';
import { useLazyLoadQuery } from 'react-relay';
import { commitLocalUpdate } from 'relay-runtime';
import type { queryIssueListQuery } from '@/__generated__/queryIssueListQuery.graphql';
import { getRelayEnvironment } from '@/relay/environment';
import { supabase } from '@/lib/supabase';

import { IssueListSkeleton } from '@/components/ui/Skeleton';
import { IssueFilters } from './IssueFilters';
import { IssueList } from './IssueList';
import type { IssueFilterValues } from './types';
import { IssueListDocQuery } from './api/query';
import { PAGINATION_SIZE } from '@/static/pagination';

type IssuesFilter = {
  status?: { eq: string } | null;
  priority?: { eq: string } | null;
  id?: { in: string[] } | null;
};

function IssueListInner() {
  const environment = getRelayEnvironment();

  const [filters, setFilters] = useState<IssueFilterValues>({
    status: '',
    priority: '',
    labelIds: [],
  });

  const [queryVars, setQueryVars] = useState<{ filter: IssuesFilter; first: number }>({
    filter: {},
    first: PAGINATION_SIZE,
  });

  const handleFiltersChange = useCallback(async (next: IssueFilterValues) => {
    setFilters(next);
    const base: IssuesFilter = {};
    if (next.status) base.status = { eq: next.status };
    if (next.priority) base.priority = { eq: next.priority };

    if (next.labelIds.length === 0) {
      setQueryVars({ filter: base, first: PAGINATION_SIZE });
      return;
    }

    const { data } = await supabase
      .from('issue_labels')
      .select('issue_id')
      .in('label_id', next.labelIds);

    const ids = (data ?? []).map((r) => r.issue_id as string);
    setQueryVars({ filter: { ...base, id: { in: ids } }, first: PAGINATION_SIZE });
  }, []);

  const data = useLazyLoadQuery<queryIssueListQuery>(IssueListDocQuery, queryVars, {
    fetchPolicy: 'store-and-network',
  });

  const labels =
    data.labelsCollection?.edges.map(({ node }) => ({
      id: node.id as string,
      name: node.name,
      color: node.color,
    })) ?? [];

  useEffect(() => {
    const channel = supabase
      .channel('issues-realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'issues' }, (payload) => {
        if (payload.eventType === 'UPDATE') {
          const updated = payload.new as Record<string, unknown>;
          commitLocalUpdate(environment, (store) => {
            const nodeId = btoa(JSON.stringify(['public', 'issues', updated.id]));
            const record = store.get(nodeId);
            if (!record) return;
            if (typeof updated.status === 'string') record.setValue(updated.status, 'status');
            if (typeof updated.priority === 'string') record.setValue(updated.priority, 'priority');
            if (typeof updated.title === 'string') record.setValue(updated.title, 'title');
            if (typeof updated.description === 'string')
              record.setValue(updated.description, 'description');
          });
        }
        if (payload.eventType === 'INSERT' || payload.eventType === 'DELETE') {
          setQueryVars((v) => ({ ...v }));
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [environment]);

  return (
    <div className="flex flex-col">
      <IssueFilters value={filters} labels={labels} onChange={handleFiltersChange} />
      <IssueList queryRef={data} />
    </div>
  );
}

export function IssueListQuery() {
  return (
    <Suspense fallback={<IssueListSkeleton />}>
      <IssueListInner />
    </Suspense>
  );
}

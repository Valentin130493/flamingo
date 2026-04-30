'use client';

import Image from 'next/image';
import { useFragment } from 'react-relay';
import type { fragmentIssueAssignee_AssigneeFragment$key } from '@/__generated__/fragmentIssueAssignee_AssigneeFragment.graphql';
import { IssueAssigneeFragment } from './api';

type IssueAssigneeProps = {
  assignee: fragmentIssueAssignee_AssigneeFragment$key | null;
};

export function IssueAssignee({ assignee: assigneeRef }: IssueAssigneeProps) {
  const assignee = useFragment(IssueAssigneeFragment, assigneeRef);

  if (!assignee) {
    return <span className="text-sm text-zinc-400">Unassigned</span>;
  }

  return (
    <div className="flex items-center gap-2">
      {assignee.avatar_url ? (
        <Image
          src={assignee.avatar_url}
          alt={assignee.name}
          width={24}
          height={24}
          className="rounded-full"
        />
      ) : (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-200 text-xs font-medium dark:bg-zinc-700">
          {assignee.name[0]?.toUpperCase()}
        </span>
      )}
      <span className="text-sm text-zinc-700 dark:text-zinc-300">{assignee.name}</span>
    </div>
  );
}

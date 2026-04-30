'use client';

import Image from 'next/image';
import { useFragment } from 'react-relay';
import type { IssueAssignee_user$key } from '@/__generated__/IssueAssignee_user.graphql';
import { IssueAssigneeFragment } from './api';

type IssueAssigneeProps = {
  assignee: IssueAssignee_user$key | null;
};

export function IssueAssignee({ assignee: assigneeRef }: IssueAssigneeProps) {
  const assignee = useFragment(IssueAssigneeFragment, assigneeRef);

  if (!assignee) {
    return (
      <span className="font-[family-name:var(--font-dm-mono)] text-xs text-[#3c3c58]">
        Unassigned
      </span>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {assignee.avatar_url ? (
        <Image
          src={assignee.avatar_url}
          alt={assignee.name}
          width={24}
          height={24}
          className="rounded-full ring-1 ring-[#26263a]"
        />
      ) : (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1c1c2e] font-[family-name:var(--font-syne)] text-xs font-semibold text-[#f06292] ring-1 ring-[#26263a]">
          {assignee.name[0]?.toUpperCase()}
        </span>
      )}
      <span className="text-sm text-[#c4c4d4]">{assignee.name}</span>
    </div>
  );
}

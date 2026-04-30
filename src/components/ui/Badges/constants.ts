import { IssuePriority, IssueStatus } from '../types';

export const STATUS_CONFIG: Record<IssueStatus, { label: string; className: string }> = {
  open: {
    label: 'Open',
    className: 'ring-1 ring-inset ring-sky-400/30 bg-sky-500/10 text-sky-300',
  },
  in_progress: {
    label: 'In Progress',
    className: 'ring-1 ring-inset ring-amber-400/30 bg-amber-500/10 text-amber-300',
  },
  done: {
    label: 'Done',
    className: 'ring-1 ring-inset ring-emerald-400/30 bg-emerald-500/10 text-emerald-300',
  },
  cancelled: {
    label: 'Cancelled',
    className: 'ring-1 ring-inset ring-zinc-600/30 bg-zinc-500/10 text-zinc-500',
  },
};

export const PRIORITY_CONFIG: Record<
  IssuePriority,
  { label: string; className: string; dot: string }
> = {
  urgent: {
    label: 'Urgent',
    className: 'ring-1 ring-inset ring-red-400/30 bg-red-500/10 text-red-400',
    dot: 'bg-red-400',
  },
  high: {
    label: 'High',
    className: 'ring-1 ring-inset ring-orange-400/30 bg-orange-500/10 text-orange-400',
    dot: 'bg-orange-400',
  },
  medium: {
    label: 'Medium',
    className: 'ring-1 ring-inset ring-yellow-400/30 bg-yellow-500/10 text-yellow-400',
    dot: 'bg-yellow-400',
  },
  low: {
    label: 'Low',
    className: 'ring-1 ring-inset ring-zinc-600/30 bg-zinc-500/10 text-zinc-500',
    dot: 'bg-zinc-500',
  },
};

export const STATUSES: IssueStatus[] = Object.values(IssueStatus);
export const PRIORITIES: IssuePriority[] = Object.values(IssuePriority);

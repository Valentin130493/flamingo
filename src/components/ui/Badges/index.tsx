import type { BadgeProps } from './types';
import { PRIORITY_CONFIG, STATUS_CONFIG } from './constants';
import type { IssuePriority, IssueStatus } from '../types';

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 font-[family-name:var(--font-dm-mono)] text-xs ${className}`}
    >
      {children}
    </span>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const config = STATUS_CONFIG[status as IssueStatus] ?? {
    label: status,
    className: 'ring-1 ring-inset ring-zinc-600/30 bg-zinc-500/10 text-zinc-500',
  };
  return <Badge className={config.className}>{config.label}</Badge>;
}

export function PriorityBadge({ priority }: { priority: string }) {
  const config = PRIORITY_CONFIG[priority as IssuePriority] ?? {
    label: priority,
    className: 'ring-1 ring-inset ring-zinc-600/30 bg-zinc-500/10 text-zinc-500',
    dot: 'bg-zinc-500',
  };
  return (
    <Badge className={config.className}>
      <span className={`mr-1.5 h-1.5 w-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </Badge>
  );
}

export function LabelBadge({ name, color }: { name: string; color: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 font-[family-name:var(--font-dm-mono)] text-xs"
      style={{ backgroundColor: `${color}18`, color, boxShadow: `inset 0 0 0 1px ${color}40` }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
      {name}
    </span>
  );
}

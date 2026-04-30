import type { BadgeProps } from './types';
import { PRIORITY_CONFIG, STATUS_CONFIG } from './constants';
import type { IssuePriority, IssueStatus } from '../types';

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const config = STATUS_CONFIG[status as IssueStatus] ?? {
    label: status,
    className: 'bg-zinc-100 text-zinc-600',
  };
  return <Badge className={config.className}>{config.label}</Badge>;
}

export function PriorityBadge({ priority }: { priority: string }) {
  const config = PRIORITY_CONFIG[priority as IssuePriority] ?? {
    label: priority,
    className: 'bg-zinc-100 text-zinc-600',
    dot: 'bg-zinc-400',
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
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium"
      style={{ backgroundColor: `${color}20`, color }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
      {name}
    </span>
  );
}

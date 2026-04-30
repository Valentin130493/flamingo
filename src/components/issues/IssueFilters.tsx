'use client';

import { PRIORITIES, STATUSES } from '../ui/Badges/constants';
import type { IssuePriority, IssueStatus } from '../ui/types';
import { PRIORITY_LABELS, STATUS_LABELS, type IssueFiltersProps } from './types';

export function IssueFilters({ value, labels, onChange }: IssueFiltersProps) {
  function toggleLabel(id: string) {
    const next = value.labelIds.includes(id)
      ? value.labelIds.filter((l) => l !== id)
      : [...value.labelIds, id];
    onChange({ ...value, labelIds: next });
  }

  return (
    <div className="flex flex-wrap items-center gap-3 border-b border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950">
      <select
        value={value.status}
        onChange={(e) => onChange({ ...value, status: e.target.value as IssueStatus | '' })}
        className="rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
      >
        <option value="">All statuses</option>
        {STATUSES.map((s) => (
          <option key={s} value={s}>
            {STATUS_LABELS[s]}
          </option>
        ))}
      </select>

      <select
        value={value.priority}
        onChange={(e) => onChange({ ...value, priority: e.target.value as IssuePriority | '' })}
        className="rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
      >
        <option value="">All priorities</option>
        {PRIORITIES.map((p) => (
          <option key={p} value={p}>
            {PRIORITY_LABELS[p]}
          </option>
        ))}
      </select>

      {labels.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          {labels.map((label) => {
            const active = value.labelIds.includes(label.id);
            return (
              <button
                key={label.id}
                onClick={() => toggleLabel(label.id)}
                className="rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 transition-all ring-inset"
                style={{
                  backgroundColor: active ? `${label.color}20` : 'transparent',
                  color: active ? label.color : '#71717a',
                  borderColor: active ? label.color : '#d4d4d8',
                }}
              >
                {label.name}
              </button>
            );
          })}
        </div>
      )}

      {(value.status || value.priority || value.labelIds.length > 0) && (
        <button
          onClick={() => onChange({ status: '', priority: '', labelIds: [] })}
          className="ml-auto text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}

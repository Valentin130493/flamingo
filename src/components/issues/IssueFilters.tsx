'use client';

import { PRIORITIES, STATUSES } from '../ui/Badges/constants';
import type { IssuePriority, IssueStatus } from '../ui/types';
import { PRIORITY_LABELS, STATUS_LABELS, type IssueFiltersProps } from './types';

const selectClass =
  'rounded-md border border-[#26263a] bg-[#131320] px-3 py-1.5 font-[family-name:var(--font-dm-mono)] text-xs text-[#c4c4d4] outline-none transition-colors hover:border-[#3a3a54] focus:border-[#f06292]/50 focus:ring-1 focus:ring-[#f06292]/20';

export function IssueFilters({ value, labels, onChange }: IssueFiltersProps) {
  function toggleLabel(id: string) {
    const next = value.labelIds.includes(id)
      ? value.labelIds.filter((l) => l !== id)
      : [...value.labelIds, id];
    onChange({ ...value, labelIds: next });
  }

  return (
    <div className="flex flex-wrap items-center gap-3 border-b border-[#26263a] px-4 py-3">
      <select
        value={value.status}
        onChange={(e) => onChange({ ...value, status: e.target.value as IssueStatus | '' })}
        className={selectClass}
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
        className={selectClass}
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
                className="cursor-pointer rounded-md px-2.5 py-0.5 font-[family-name:var(--font-dm-mono)] text-xs transition-all"
                style={{
                  backgroundColor: active ? `${label.color}18` : 'transparent',
                  color: active ? label.color : '#7070a0',
                  boxShadow: active
                    ? `inset 0 0 0 1px ${label.color}50`
                    : 'inset 0 0 0 1px #26263a',
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
          className="ml-auto cursor-pointer font-[family-name:var(--font-dm-mono)] text-xs text-[#7070a0] transition-colors hover:text-[#f06292]"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}

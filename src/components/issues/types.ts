import type { IssuePriority, IssueStatus } from '@components/ui/types';

export interface IssueFilterValues {
  status: IssueStatus | '';
  priority: IssuePriority | '';
  labelIds: string[];
}

interface Label {
  id: string;
  name: string;
  color: string;
}

export interface IssueFiltersProps {
  value: IssueFilterValues;
  labels: Label[];
  onChange: (next: IssueFilterValues) => void;
}

export const STATUS_LABELS: Record<IssueStatus, string> = {
  open: 'Open',
  in_progress: 'In Progress',
  done: 'Done',
  cancelled: 'Cancelled',
};

export const PRIORITY_LABELS: Record<IssuePriority, string> = {
  urgent: 'Urgent',
  high: 'High',
  medium: 'Medium',
  low: 'Low',
};

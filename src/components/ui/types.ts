export type LoadMoreProps = {
  onLoadMore: () => void;
  isLoading: boolean;
  hasMore: boolean;
};

export type ToastVariant = 'success' | 'error' | 'info';

export type ToastType = {
  id: string;
  message: string;
  variant: ToastVariant;
};

export enum IssueStatus {
  Open = 'open',
  InProgress = 'in_progress',
  Done = 'done',
  Cancelled = 'cancelled',
}

export enum IssuePriority {
  Urgent = 'urgent',
  High = 'high',
  Medium = 'medium',
  Low = 'low',
}

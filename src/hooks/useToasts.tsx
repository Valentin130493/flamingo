import type { ToastContextValue } from '@/providers/toast';
import { ToastContext } from '@/providers/toast';
import { useContext } from 'react';

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used inside ToastProvider');
  return ctx;
}

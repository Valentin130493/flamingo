'use client';

import type { ToastType, ToastVariant } from '../types';

export function Toast({
  toast,
  handleClose,
}: {
  toast: ToastType;
  handleClose: (id: string) => void;
}) {
  const variantClasses: Record<ToastVariant, string> = {
    success: 'bg-emerald-600 text-white',
    error: 'bg-red-600 text-white',
    info: 'bg-zinc-800 text-white',
  };

  return (
    <div
      key={toast.id}
      className={`pointer-events-auto flex items-center gap-3 rounded-lg px-4 py-3 text-sm shadow-lg ${variantClasses[toast.variant]}`}
    >
      <span className="flex-1">{toast.message}</span>
      <button
        onClick={handleClose.bind(null, toast.id)}
        className="shrink-0 opacity-70 hover:opacity-100"
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  );
}

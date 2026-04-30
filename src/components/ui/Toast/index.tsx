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
    success: 'bg-emerald-500/15 text-emerald-300 ring-1 ring-inset ring-emerald-500/30',
    error: 'bg-red-500/15 text-red-300 ring-1 ring-inset ring-red-500/30',
    info: 'bg-[#1c1c2e] text-[#e4e4f4] ring-1 ring-inset ring-[#26263a]',
  };

  return (
    <div
      key={toast.id}
      className={`pointer-events-auto flex items-center gap-3 rounded-lg px-4 py-3 text-sm shadow-xl shadow-black/40 backdrop-blur-sm ${variantClasses[toast.variant]}`}
    >
      <span className="flex-1">{toast.message}</span>
      <button
        onClick={handleClose.bind(null, toast.id)}
        className="shrink-0 cursor-pointer opacity-50 transition-opacity hover:opacity-100"
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  );
}

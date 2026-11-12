import type { ReactNode } from "react";

type StatusLineProps = {
  className?: string;
  children: ReactNode;
};

export function StatusLine({ className = "", children }: StatusLineProps) {
  return (
    <p
      className={`flex items-start gap-2.5 text-sm font-medium text-muted ${className}`}
    >
      <span aria-hidden="true" className="flex h-lh flex-none items-center">
        <span className="relative size-2 rounded-full bg-status-dot ring-4 ring-status-dot/20 after:absolute after:inset-0 after:rounded-full after:bg-status-dot after:opacity-0 motion-ok:after:animate-ping-once" />
      </span>
      {children}
    </p>
  );
}

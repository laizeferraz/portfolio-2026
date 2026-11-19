import type { ReactNode } from "react";

/** A tech chip. Not interactive. Always render inside a TagList. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full bg-chip px-3 py-0.5 text-xs font-semibold text-ink">
      {children}
    </li>
  );
}

import {
  AVAILABILITY,
  JOB_TITLE,
  NAME,
  PORTRAIT_SRC,
  TAGLINE,
} from "@/content/site";
import { Portrait } from "./Portrait";
import { StatusLine } from "./StatusLine";

/*
 * The intro rises in three steps, 120ms apart, once, only if motion is
 * allowed. Tailwind's delay-* utilities set transition-delay, not
 * animation-delay, so these two need arbitrary values.
 */
const rise1 = "motion-ok:animate-rise";
const rise2 = "motion-ok:animate-rise motion-ok:[animation-delay:120ms]";
const rise3 = "motion-ok:animate-rise motion-ok:[animation-delay:240ms]";

export function SidebarIntro() {
  return (
    <>
      <div className={`flex items-center gap-3.5 ${rise1}`}>
        <Portrait src={PORTRAIT_SRC} />
        <p className="font-hand text-greeting font-semibold text-accent-text">
          <span lang="pt">Olá!</span> Hi there,
        </p>
      </div>

      <h1 className={`font-display text-name text-balance ${rise2}`}>{NAME}</h1>
      <p className={`text-lg font-semibold ${rise2}`}>{JOB_TITLE}</p>
      <p className={`max-w-95 text-pretty text-muted ${rise3}`}>{TAGLINE}</p>
      <StatusLine className={rise3}>{AVAILABILITY}</StatusLine>
    </>
  );
}

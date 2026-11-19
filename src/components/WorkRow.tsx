import { type RowProject, storyHref } from "@/content/projects";
import { LinkBase } from "./LinkBase";

/**
 * One More work row. It only becomes a link (with an arrow) once the
 * project's story is published; until then it's plain text, so there's
 * no link to nowhere and nothing extra to tab through.
 */
export function WorkRow({ project }: { project: RowProject }) {
  const href = storyHref(project);

  const text = (
    <span className="flex min-w-0 flex-col gap-0.5">
      <span className="font-bold text-ink group-hover:underline group-hover:underline-offset-5">
        {project.home.title}
        {project.personal && (
          <span className="ml-1.5 text-xs font-bold tracking-label text-muted uppercase">
            <span className="sr-only">, </span>
            Personal
          </span>
        )}
      </span>
      <span className="text-sm text-pretty text-muted">
        {project.home.line}
      </span>
    </span>
  );

  return (
    <li className="border-b border-line">
      {href ? (
        <LinkBase
          href={href}
          className="group flex items-center justify-between gap-4 py-4.5 no-underline"
        >
          {text}
          <span aria-hidden="true" className="text-lg text-accent-text">
            →
          </span>
        </LinkBase>
      ) : (
        <div className="py-4.5">{text}</div>
      )}
    </li>
  );
}

import type { ExperienceRole } from "@/content/experience";
import { Tag } from "./Tag";
import { TagList } from "./TagList";

/** Everything except the dates sits in the right-hand column when wide. */
const contentColumn = "@lg:col-start-2";

/**
 * One role in the Experience timeline.
 *
 * DOM order is title → dates → summary → tags, so someone jumping by
 * heading hears the role first and the dates straight after. Visually
 * the dates come first: on top when narrow, in a 150px left column once
 * the list is wide enough (an @lg container query on the <ol>). Nothing
 * here is focusable, so the reordering can't affect tab order.
 */
export function ExperienceItem({ item }: { item: ExperienceRole }) {
  return (
    <li className="-mx-5 grid gap-x-6 gap-y-2 rounded-xl p-5 hover:bg-card hover:shadow-card @lg:grid-cols-[9.375rem_minmax(0,1fr)] motion-ok:transition motion-ok:duration-250 motion-ok:ease-soft motion-ok:hover:-translate-y-0.5">
      <div
        className={`flex flex-wrap items-center gap-x-2.5 gap-y-1.5 ${contentColumn}`}
      >
        <h3 className="text-lg font-bold text-balance text-ink">
          {item.role} · {item.org}
        </h3>
        {item.badge && (
          <p className="rounded-full bg-mint px-2.5 text-xs font-bold text-mint-ink">
            {item.badge}
          </p>
        )}
      </div>

      <p className="order-first pt-0.75 text-xs font-semibold tracking-[0.04em] text-muted uppercase @lg:col-start-1 @lg:row-span-3 @lg:row-start-1">
        <time dateTime={item.start.iso}>{item.start.text}</time>
        <span aria-hidden="true"> – </span>
        <span className="sr-only"> to </span>
        <time dateTime={item.end.iso}>{item.end.text}</time>
      </p>

      <p className={`text-md text-pretty text-muted ${contentColumn}`}>
        {item.summary}
      </p>

      <div className={contentColumn}>
        <TagList label="Skills">
          {item.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagList>
      </div>
    </li>
  );
}

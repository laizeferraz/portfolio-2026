import type { ReactNode } from "react";
import {
  type FeaturedProject as FeaturedProjectData,
  storyHref,
} from "@/content/projects";
import { DemoPanel } from "./DemoPanel";
import { Tag } from "./Tag";
import { TagList } from "./TagList";
import { TextLink } from "./TextLink";

type FeaturedProjectProps = {
  project: FeaturedProjectData;
  /** The project's client-side demo. */
  demo: ReactNode;
};

/**
 * One Selected work card: text, a live demo and links.
 *
 * DOM order is text → demo → links, so heading navigation reaches the
 * project's H3 before its demo, and Tab goes demo → links. Once the
 * screen is 640px or wider (sm), the grid puts the demo in the
 * left column and the text and links on the right, vertically centred.
 * That keeps tab order left → right, so "Show focus order" stays honest.
 *
 * Not a container query: those turn on CSS style containment, which
 * restarts the counter behind "Show focus order", so every number inside
 * would read 1. From 640px up the content column is always 576px+ wide.
 */
export function FeaturedProject({ project, demo }: FeaturedProjectProps) {
  const headingId = `${project.slug}-heading`;
  const story = storyHref(project);
  const hasLinks = Boolean(project.liveSite || story);

  return (
    <article
      aria-labelledby={headingId}
      className="-mx-5 grid items-center gap-x-8 gap-y-6 rounded-2xl p-5 hover:bg-card hover:shadow-card sm:grid-cols-2 sm:grid-rows-[1fr_auto_auto_1fr] sm:gap-y-2.5 motion-ok:transition motion-ok:duration-250 motion-ok:ease-soft motion-ok:hover:-translate-y-0.5"
    >
      <div className="flex min-w-0 flex-col gap-2.5 sm:col-start-2 sm:row-start-2">
        <h3
          id={headingId}
          className="font-display text-display-sm text-balance text-ink"
        >
          {project.title}
        </h3>
        {/* Shown above the title, read after it. */}
        <p className="order-first text-xs font-semibold tracking-[0.04em] text-muted uppercase">
          {project.metaLine}
        </p>
        <p className="text-md text-pretty text-muted">{project.home.summary}</p>
        <TagList label="Tech used">
          {project.home.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagList>
      </div>

      <DemoPanel
        name={project.home.demoName}
        tint={project.tint}
        className="sm:col-start-1 sm:row-span-4 sm:row-start-1"
      >
        {demo}
      </DemoPanel>

      {hasLinks && (
        <div className="-mt-3.5 flex flex-col sm:col-start-2 sm:row-start-3 sm:mt-0">
          {project.liveSite && (
            <TextLink
              href={project.liveSite.href}
              external
              srText={`, ${project.title}`}
            >
              {project.liveSite.label}
            </TextLink>
          )}
          {story && (
            <TextLink href={story} arrow srText={` about ${project.title}`}>
              Read the story
            </TextLink>
          )}
        </div>
      )}
    </article>
  );
}

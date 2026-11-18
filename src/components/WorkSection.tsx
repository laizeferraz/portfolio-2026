import {
  CETA_STEPS,
  DANCEFIT_DIRECTIONS,
  FEATURED,
  GROK_QUIZ,
  MORE_WORK,
} from "@/content/projects";
import { CetaBraveStepsDemo } from "./demos/CetaBraveStepsDemo";
import { DanceFitDirectionsDemo } from "./demos/DanceFitDirectionsDemo";
import { GrokQuizDemo } from "./demos/GrokQuizDemo";
import { FeaturedProject } from "./FeaturedProject";
import { WorkRow } from "./WorkRow";

/** The body of the home page's Selected work section. */
export function WorkSection() {
  return (
    <>
      {/* Pulls the intro up under the H2 (6px gap, as in the design). */}
      <p className="-mt-3.5 text-pretty text-muted">
        Each project comes with a small live piece you can click, tab through
        and break.
      </p>

      <div className="mt-2 flex flex-col gap-7">
        <FeaturedProject
          project={FEATURED.grok}
          demo={<GrokQuizDemo {...GROK_QUIZ} />}
        />
        <FeaturedProject
          project={FEATURED.dancefit}
          demo={<DanceFitDirectionsDemo directions={DANCEFIT_DIRECTIONS} />}
        />
        <FeaturedProject
          project={FEATURED.ceta}
          demo={<CetaBraveStepsDemo {...CETA_STEPS} />}
        />
      </div>

      <div className="mt-2">
        {/* Hidden heading so the list is findable by heading, like the cards. */}
        <h3 className="sr-only">More work</h3>
        {/* role="list": Safari/VoiceOver drops list semantics without it. */}
        {/* biome-ignore lint/a11y/noRedundantRoles: see comment above */}
        {/* biome-ignore lint/a11y/useSemanticElements: it already is a <ul> */}
        <ul role="list" className="border-t border-line">
          {MORE_WORK.map((project) => (
            <WorkRow key={project.slug} project={project} />
          ))}
        </ul>
      </div>
    </>
  );
}

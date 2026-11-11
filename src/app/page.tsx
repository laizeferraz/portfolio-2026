// TEMPORARY: a showcase of the shared components for keyboard and
// VoiceOver testing. The Home layout ticket replaces this page.
import { Button } from "@/components/Button";
import { ContactPanel } from "@/components/ContactPanel";
import { SectionLabel } from "@/components/SectionLabel";
import { Tag } from "@/components/Tag";
import { TagList } from "@/components/TagList";
import { TextLink } from "@/components/TextLink";
import { RESUME_URL } from "@/content/site";

export default function Home() {
  return (
    <main
      id="content"
      className="mx-auto flex w-full max-w-page flex-col gap-12 px-[clamp(20px,5vw,48px)] py-12"
    >
      <h1 className="font-display text-name">Laize Ferraz</h1>

      <section aria-labelledby="labels" className="flex flex-col gap-3">
        <SectionLabel id="labels">Section label and tags</SectionLabel>
        <SectionLabel as="p">
          PALO IT · Insurtech · Sep 2021 – Apr 2022
        </SectionLabel>
        <TagList label="Tech used">
          <Tag>React</Tag>
          <Tag>TypeScript</Tag>
          <Tag>Storybook</Tag>
        </TagList>
      </section>

      <section aria-labelledby="buttons" className="flex flex-col gap-3">
        <SectionLabel id="buttons">Buttons</SectionLabel>
        <div className="flex flex-wrap gap-2.5">
          <Button
            href="https://groklearning.github.io/grok-web-components/"
            icon="external"
          >
            Open the live Storybook
          </Button>
          <Button href={RESUME_URL} variant="secondary">
            View résumé (PDF)
          </Button>
          <Button
            href="https://github.com/laizeferraz"
            variant="secondary"
            icon="external"
            newTab
          >
            View the code
          </Button>
        </div>
      </section>

      <section aria-labelledby="links" className="flex flex-col gap-3">
        <SectionLabel id="links">Text links</SectionLabel>
        <TextLink href="/#work" arrow srText=" about Grok Web Components">
          Read the story
        </TextLink>
        <TextLink href="https://dancefitsunshinecoast.com" external>
          Visit the live site
        </TextLink>
        <TextLink href="https://letmeask2-0.vercel.app/" external newTab>
          Try the live app
        </TextLink>
        <p className="max-w-reading text-pretty text-muted">
          An inline link sits inside a paragraph, like{" "}
          <TextLink href="https://github.com/laizeferraz" inline external>
            my GitHub
          </TextLink>
          , and keeps its underline.
        </p>
      </section>

      <ContactPanel
        heading="Hiring a frontend engineer?"
        text="I'm available now, based on the Sunshine Coast and happy to work remotely or hybrid."
      />
    </main>
  );
}

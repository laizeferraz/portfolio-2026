import type { ReactNode } from "react";
import { AboutContent } from "@/components/AboutContent";
import { ContactPanel } from "@/components/ContactPanel";
import { HomeSection } from "@/components/HomeSection";
import { Sidebar } from "@/components/Sidebar";
import { HOME_SECTIONS, type HomeSectionId } from "@/content/site";

/** What goes inside each home section, below its H2. */
const SECTION_CONTENT: Partial<Record<HomeSectionId, ReactNode>> = {
  about: <AboutContent />,
};

/**
 * Home: sidebar + content. One column on phones; the sidebar's two
 * blocks sit side by side from 640px; two columns from 960px (`split:`).
 */
export default function Home() {
  return (
    <div className="mx-auto w-full max-w-home px-[clamp(20px,5vw,48px)] split:grid split:grid-cols-[minmax(280px,360px)_minmax(0,1fr)] split:gap-x-[clamp(40px,5vw,72px)]">
      <Sidebar />

      <div className="flex min-w-0 flex-col gap-[clamp(72px,9vw,112px)] pt-[clamp(40px,7vw,96px)] pb-12">
        <main
          id="content"
          className="flex flex-col gap-[clamp(72px,9vw,112px)]"
        >
          {/* Experience and Work content lands in their own tickets. */}
          {HOME_SECTIONS.map((section) => (
            <HomeSection
              key={section.id}
              id={section.id}
              heading={section.heading}
            >
              {SECTION_CONTENT[section.id]}
            </HomeSection>
          ))}

          <ContactPanel
            heading="Hiring a frontend engineer?"
            text="I'm available now, based on the Sunshine Coast and happy to work remotely or hybrid."
          />
        </main>

        <footer className="max-w-130 text-sm text-muted">
          Designed and built by Laize Ferraz with Next.js and Tailwind CSS, to
          meet WCAG 2.2 AA.
        </footer>
      </div>
    </div>
  );
}

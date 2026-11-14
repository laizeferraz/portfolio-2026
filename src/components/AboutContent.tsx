import { DeskIllustration } from "./illustrations/DeskIllustration";

const strong = "font-semibold text-ink";

/**
 * The body of the home page's About section: three short paragraphs and
 * the desk illustration. The text wraps above the picture on narrow screens.
 */
export function AboutContent() {
  return (
    <div className="flex flex-wrap items-center gap-x-10 gap-y-7">
      <div className="flex min-w-0 flex-[1_1_21.25rem] flex-col gap-4 text-muted">
        <p className="text-pretty">
          I'm a frontend engineer who cares about the people on the other side
          of the screen. For 4+ years I've built{" "}
          <strong className={strong}>React and TypeScript</strong> interfaces
          across healthcare SaaS, edtech and consulting — lately with a focus on{" "}
          <strong className={strong}>
            component libraries and design systems
          </strong>
          .
        </p>
        <p className="text-pretty">
          Before code, I was a lawyer in Brazil. Law taught me to read
          requirements closely and argue for the user. Teaching at three coding
          bootcamps taught me to make complex things easy to understand.
        </p>
        <p className="text-pretty">
          Away from the keyboard, you'll usually find me in a dance class and on
          the volleyball court.
        </p>
      </div>

      <DeskIllustration className="mx-auto h-auto w-60 max-w-full flex-[0_1_15rem]" />
    </div>
  );
}

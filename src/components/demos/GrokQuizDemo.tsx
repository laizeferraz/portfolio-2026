"use client";

import { useId, useState } from "react";
import type { QuizAnswer } from "@/content/projects";

type GrokQuizDemoProps = {
  /** Question text before and after the inline code. */
  before: string;
  code: string;
  after: string;
  answers: QuizAnswer[];
  feedback: { correct: string; wrong: string };
};

/** Answer button colours: neutral until picked, then right or wrong. */
function answerTone(picked: boolean, correct: boolean) {
  if (!picked) return "border-line-strong bg-card text-ink";
  return correct
    ? "border-ok-ink bg-ok-bg text-ok-ink"
    : "border-no-ink bg-no-bg text-no-ink";
}

/**
 * A sketch of Grok's <grok-chat-bubble>: a teacher's question and three
 * answers. Right and wrong are shown with colour, a ✓ or ✗, and words in
 * a status message, which screen readers announce without moving focus.
 */
export function GrokQuizDemo({
  before,
  code,
  after,
  answers,
  feedback,
}: GrokQuizDemoProps) {
  const questionId = useId();
  const [pickedId, setPickedId] = useState<string | null>(null);
  const picked = answers.find((answer) => answer.id === pickedId);

  return (
    // biome-ignore lint/a11y/useSemanticElements: a <fieldset> would add a legend and border we don't want; role="group" names the set the same way.
    <div
      role="group"
      aria-labelledby={questionId}
      className="flex flex-col gap-3"
    >
      <div className="flex items-end gap-2.5">
        <span
          aria-hidden="true"
          className="grid size-7.5 flex-none place-items-center rounded-full bg-ink text-xs font-bold text-bg"
        >
          T
        </span>
        <p
          id={questionId}
          className="rounded-lg rounded-bl-sm bg-card px-3.5 py-3 text-sm text-ink"
        >
          {before}{" "}
          <code className="rounded-sm bg-chip px-1.25 font-mono text-xs">
            {code}
          </code>{" "}
          {after}
        </p>
      </div>

      <div className="flex flex-wrap justify-end gap-2">
        {answers.map((answer) => {
          const isPicked = answer.id === pickedId;
          return (
            <button
              key={answer.id}
              type="button"
              aria-pressed={isPicked}
              onClick={() => setPickedId(answer.id)}
              // 1.5px border: no scale class for it.
              className={`inline-flex min-h-11 items-center gap-1.5 rounded-full border-[1.5px] px-4 text-sm font-semibold ${answerTone(isPicked, answer.correct)} motion-ok:transition-colors motion-ok:duration-200`}
            >
              {isPicked && (
                <span aria-hidden="true">{answer.correct ? "✓" : "✗"}</span>
              )}
              {answer.label}
              {answer.srHint && (
                <span className="sr-only">{answer.srHint}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Always in the DOM, so the first message is announced too. */}
      {/* biome-ignore lint/a11y/useSemanticElements: <output> isn't announced reliably by Safari + VoiceOver; role="status" is. */}
      <div role="status">
        {picked && (
          <p
            className={`flex gap-2 rounded-md px-3.5 py-3 text-sm font-semibold ${picked.correct ? "bg-ok-bg text-ok-ink" : "bg-no-bg text-no-ink"}`}
          >
            <span aria-hidden="true">{picked.correct ? "✓" : "✗"}</span>
            {picked.correct ? feedback.correct : feedback.wrong}
          </p>
        )}
      </div>
    </div>
  );
}

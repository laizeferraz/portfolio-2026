import Image from "next/image";
import { NAME } from "@/content/site";

type PortraitProps = {
  src?: string;
};

const circle =
  "size-16 flex-none rounded-full bg-lav outline-3 outline-offset-2 outline-lav";

export function Portrait({ src }: PortraitProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={`Portrait of ${NAME}`}
        width={64}
        height={64}
        sizes="64px"
        className={`${circle} object-cover object-[50%_30%]`}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`${circle} grid place-items-center font-display text-[1.375rem] text-accent-text`}
    >
      LF
    </div>
  );
}

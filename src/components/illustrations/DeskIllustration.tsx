type DeskIllustrationProps = {
  className?: string;
};

/**
 * Fixed colours for the scene. Like the DanceFit preview colours, they
 * belong to this picture, not to the UI, so they stay the same in both
 * themes. Only the background blob follows the theme (`fill-lav`).
 */
const COLORS = {
  sun: "#FFD98A",
  shelf: "#E2DAF5",
  laptopFrame: "#2B2540",
  laptopBase: "#CFC4E8",
  screen: "#FFFFFF",
  screenBar: "#FFE1D3",
  screenCardA: "#EDE6FF",
  screenCardB: "#D6F5E8",
  screenButton: "#6F4FD6",
  pot: "#BFE8D6",
  leafLeft: "#8FD3B0",
  leafRight: "#7CC9A3",
  mug: "#FFC9B5",
  sparkle: "#FFB8CF",
} as const;

/**
 * The home page's one illustration (About section): a desk with a laptop,
 * a plant and a mug. It's informative, so it has role="img" and a label
 * that describes what is actually drawn. It never moves.
 */
export function DeskIllustration({ className }: DeskIllustrationProps) {
  return (
    <svg
      role="img"
      aria-label="Illustration of a cosy desk: a laptop showing a pastel interface, a plant, a mug and a small sun"
      viewBox="0 0 520 420"
      className={className}
    >
      <path
        className="fill-lav"
        d="M70 110C120 30 260 10 360 50s150 130 120 230-150 150-270 130S20 320 30 220 40 150 70 110Z"
      />
      <circle cx="430" cy="80" r="34" fill={COLORS.sun} />
      <rect x="20" y="384" width="480" height="14" rx="7" fill={COLORS.shelf} />

      {/* Laptop */}
      <rect
        x="128"
        y="168"
        width="264"
        height="176"
        rx="16"
        fill={COLORS.laptopFrame}
      />
      <rect
        x="140"
        y="180"
        width="240"
        height="152"
        rx="8"
        fill={COLORS.screen}
      />
      <rect
        x="152"
        y="192"
        width="216"
        height="18"
        rx="9"
        fill={COLORS.screenBar}
      />
      <rect
        x="152"
        y="220"
        width="104"
        height="70"
        rx="10"
        fill={COLORS.screenCardA}
      />
      <rect
        x="264"
        y="220"
        width="104"
        height="70"
        rx="10"
        fill={COLORS.screenCardB}
      />
      <rect
        x="152"
        y="300"
        width="70"
        height="20"
        rx="10"
        fill={COLORS.screenButton}
      />
      <path d="M104 344h312l-18 26H122z" fill={COLORS.laptopBase} />

      {/* Plant */}
      <rect x="58" y="320" width="50" height="64" rx="12" fill={COLORS.pot} />
      <path
        d="M83 322c-6-30-30-40-40-34 6 18 22 30 40 34Z"
        fill={COLORS.leafLeft}
      />
      <path
        d="M83 322c4-36 26-50 40-42-4 22-20 36-40 42Z"
        fill={COLORS.leafRight}
      />

      {/* Mug */}
      <rect x="420" y="332" width="48" height="52" rx="12" fill={COLORS.mug} />
      <path
        d="M468 344c16 0 16 26 0 26"
        fill="none"
        stroke={COLORS.mug}
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* Sparkle */}
      <path
        d="M300 52l5 13 13 5-13 5-5 13-5-13-13-5 13-5z"
        fill={COLORS.sparkle}
      />
    </svg>
  );
}

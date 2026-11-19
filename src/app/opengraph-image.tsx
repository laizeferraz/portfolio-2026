import { ImageResponse } from "next/og";
import {
  AVAILABILITY,
  JOB_TITLE,
  NAME,
  SITE_URL,
  TAGLINE,
} from "@/content/site";

// The 1,200×630 preview shown when the site is shared on LinkedIn, Slack,
// X and so on. Generated once at build time, not on each request.
// Story pages will get their own image when they ship; until then they
// fall back to this one.

export const alt = `${NAME}, ${JOB_TITLE}. ${TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ImageResponse renders outside the browser, so it can't read the CSS
// variables in tokens.css. These mirror the light theme values there;
// change both together.
const COLORS = {
  lav: "#ede6ff",
  ink: "#2b2540",
  muted: "#5a5470",
  accentText: "#5b3cc4",
  statusDot: "#2e9a6a",
};

const GREETING = "Olá! Hi there,";
const DOMAIN = new URL(SITE_URL).host;

/**
 * Fetches a Google font as TrueType, subset to the characters in `text`.
 * ImageResponse can't use next/font or WOFF2 files, so it needs the raw
 * font data. This runs at build time, like next/font's own download.
 */
async function loadGoogleFont(family: string, weight: number, text: string) {
  // Cached so the image can be prerendered at build time. Without it,
  // cacheComponents treats the fetch as request-time data and renders
  // the image again on every request.
  "use cache";
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const src = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/);
  if (!src) {
    throw new Error(
      `Couldn't load the ${family} ${weight} font for the OG image`,
    );
  }
  return (await fetch(src[1])).arrayBuffer();
}

export default async function OpengraphImage() {
  const bodyText = `${JOB_TITLE}${TAGLINE}${AVAILABILITY}${DOMAIN}`;

  const [youngSerif, caveat, figtree500, figtree600] = await Promise.all([
    loadGoogleFont("Young Serif", 400, NAME),
    loadGoogleFont("Caveat", 600, GREETING),
    loadGoogleFont("Figtree", 500, bodyText),
    loadGoogleFont("Figtree", 600, bodyText),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 88px",
        background: COLORS.lav,
        color: COLORS.ink,
        fontFamily: "Figtree",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontFamily: "Caveat",
            fontSize: 48,
            color: COLORS.accentText,
          }}
        >
          {GREETING}
        </div>
        <div
          style={{
            fontFamily: "Young Serif",
            fontSize: 104,
            lineHeight: 1.05,
            marginTop: 8,
          }}
        >
          {NAME}
        </div>
        <div style={{ fontSize: 40, fontWeight: 600, marginTop: 20 }}>
          {JOB_TITLE}
        </div>
        <div
          style={{
            fontSize: 34,
            fontWeight: 500,
            color: COLORS.muted,
            marginTop: 20,
            maxWidth: 940,
            lineHeight: 1.4,
          }}
        >
          {TAGLINE}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 26,
          fontWeight: 500,
          color: COLORS.muted,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: COLORS.statusDot,
            }}
          />
          {AVAILABILITY}
        </div>
        <div style={{ fontWeight: 600, color: COLORS.accentText }}>
          {DOMAIN}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Young Serif", data: youngSerif, weight: 400 },
        { name: "Caveat", data: caveat, weight: 600 },
        { name: "Figtree", data: figtree500, weight: 500 },
        { name: "Figtree", data: figtree600, weight: 600 },
      ],
    },
  );
}

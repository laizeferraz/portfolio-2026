import "./globals.css";
import type { Metadata } from "next";
import { Caveat, Figtree, Young_Serif } from "next/font/google";
import { DisplayPrefsScript } from "@/components/DisplayPrefsScript";
import { SkipLink } from "@/components/SkipLink";
import { HOME_DESCRIPTION, HOME_TITLE, NAME, SITE_URL } from "@/content/site";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const youngSerif = Young_Serif({
  variable: "--font-young-serif",
  subsets: ["latin"],
  weight: "400",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: "600",
});

// Site-wide defaults. Story pages set their own title (shown as
// "<title> | Laize Ferraz"), description and canonical URL.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${NAME}`,
  },
  description: HOME_DESCRIPTION,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the inline script sets data-theme, data-motion
    // and data-focus-map on <html> before React hydrates. It only covers
    // <html>'s own attributes, not its children.
    <html
      lang="en"
      className={`${figtree.variable} ${youngSerif.variable} ${caveat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.svg" />
        <DisplayPrefsScript />
      </head>
      <body className="min-h-full flex flex-col">
        <SkipLink />
        {children}
      </body>
    </html>
  );
}

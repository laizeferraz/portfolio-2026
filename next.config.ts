import type { NextConfig } from "next";
import { legacyRedirects } from "./src/content/redirects";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // Old site URLs (/profile, /projects, old project pages, old résumé
  // filenames). The list lives in src/content/redirects.ts.
  redirects: async () => legacyRedirects(),
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

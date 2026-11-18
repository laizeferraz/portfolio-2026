import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

// Served at /robots.txt. Lets every crawler in and points them at the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

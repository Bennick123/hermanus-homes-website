import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.onrusaccommodation.co.za/sitemap.xml",
    host: "https://www.onrusaccommodation.co.za",
  }
}

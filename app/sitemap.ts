import type { MetadataRoute } from "next"
import { getPropertySlugs } from "@/lib/properties"

const BASE_URL = "https://www.onrusaccommodation.co.za"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getPropertySlugs()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/stays`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/experiences`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/stays/area/onrus`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/stays/area/vermont`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/stays/area/sandbaai`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/stays/area/hermanus`, changeFrequency: "weekly", priority: 0.8 },
  ]

  const propertyRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${BASE_URL}/stays/${slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...propertyRoutes]
}

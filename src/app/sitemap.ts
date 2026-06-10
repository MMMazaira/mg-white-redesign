import type { MetadataRoute } from 'next'
import { SERVICES } from '@/data/servicesData'

const BASE_URL = 'https://mgwhiteservicellc.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/contacto`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    ...SERVICES.map(s => ({
      url: `${BASE_URL}/servicios/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}

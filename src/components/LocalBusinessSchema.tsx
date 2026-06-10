import { COMPANY } from '@/data/servicesData'

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY.name,
    description: COMPANY.sloganEs,
    url: 'https://mgwhiteservicellc.com',
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 30.2672, longitude: -97.7431 },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      opens: '07:00', closes: '19:00',
    }],
    priceRange: '$$',
    image: 'https://mgwhiteservicellc.com/images/og-image.jpg',
    sameAs: [COMPANY.socialMedia.facebook, COMPANY.socialMedia.instagram],
  }
  return (
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
  )
}

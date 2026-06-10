export interface Service {
  id: string
  slug: string
  title: string
  titleEs: string
  shortDesc: string
  shortDescEs: string
  description: string
  descriptionEs: string
  icon: string
  features: string[]
  featuresEs: string[]
  image: string
  cta: string
  ctaEs: string
}

export const SERVICES: Service[] = [
  {
    id: 'residential',
    slug: 'residencial',
    title: 'Residential Cleaning',
    titleEs: 'Limpieza Residencial',
    shortDesc: 'Spotless homes for a healthier, happier life.',
    shortDescEs: 'Espacios impecables para tu hogar.',
    description: 'We treat every home as if it were our own. Our residential cleaning service covers every corner using eco-friendly, family-safe products.',
    descriptionEs: 'Tratamos cada hogar como si fuera el nuestro. Cubrimos cada rincón con productos seguros para tu familia y mascotas.',
    icon: '🏠',
    features: ['Full home deep cleaning','Kitchen & appliance sanitization','Bathroom disinfection','Bedrooms & living areas','Eco-friendly products','Flexible scheduling'],
    featuresEs: ['Limpieza profunda completa','Sanitización de cocina y electrodomésticos','Desinfección de baños','Habitaciones y áreas de estar','Productos ecológicos','Horarios flexibles'],
    image: '/images/residential-cleaning.jpg',
    cta: 'Book Residential Cleaning',
    ctaEs: 'Agendar Limpieza',
  },
  {
    id: 'commercial',
    slug: 'comercial',
    title: 'Commercial Cleaning',
    titleEs: 'Limpieza Comercial',
    shortDesc: 'Clean workspaces that impress clients and energize teams.',
    shortDescEs: 'Ambientes limpios, negocios que brillan.',
    description: 'From offices and retail stores to medical facilities and restaurants, we deliver consistent commercial cleaning on your schedule.',
    descriptionEs: 'Desde oficinas y locales hasta instalaciones médicas y restaurantes — limpieza comercial consistente en tu horario.',
    icon: '🏢',
    features: ['Office & workspace cleaning','Retail & showroom upkeep','Medical facility sanitation','Restaurant & kitchen cleaning','Floor care & buffing','After-hours availability'],
    featuresEs: ['Limpieza de oficinas y espacios','Mantenimiento de locales','Sanitización de instalaciones médicas','Limpieza de restaurantes y cocinas','Cuidado y pulido de pisos','Disponibilidad nocturna'],
    image: '/images/commercial-cleaning.jpg',
    cta: 'Get Commercial Quote',
    ctaEs: 'Cotizar Servicio Comercial',
  },
  {
    id: 'remodeling',
    slug: 'remodelaciones',
    title: 'Remodeling',
    titleEs: 'Remodelaciones',
    shortDesc: 'Transform your space with quality craftsmanship.',
    shortDescEs: 'Transformamos tus espacios con calidad y estilo.',
    description: 'Our remodeling team handles kitchen and bathroom renovations, flooring, tile work, drywall, and more with transparent pricing.',
    descriptionEs: 'Nuestro equipo maneja renovaciones de cocinas y baños, pisos, azulejos, tablaroca y más con precios transparentes.',
    icon: '🔨',
    features: ['Kitchen remodeling','Bathroom renovation','Flooring installation','Tile & grout work','Drywall & plastering','Custom cabinetry'],
    featuresEs: ['Remodelación de cocinas','Renovación de baños','Instalación de pisos','Trabajo de azulejos','Tablaroca y yeso','Carpintería personalizada'],
    image: '/images/remodeling.jpg',
    cta: 'Start Your Remodel',
    ctaEs: 'Iniciar Remodelación',
  },
  {
    id: 'painting',
    slug: 'pintura',
    title: 'Painting',
    titleEs: 'Pintura',
    shortDesc: 'A fresh coat that transforms any room or exterior.',
    shortDescEs: 'Una mano de pintura que transforma cualquier espacio.',
    description: 'Interior and exterior painting with premium paints and a clean, professional finish every time.',
    descriptionEs: 'Pintura interior y exterior con pinturas premium y un acabado profesional e impecable siempre.',
    icon: '🖌️',
    features: ['Interior & exterior painting','Premium paint brands','Surface preparation & priming','Trim & detail work','Accent walls','Color consultation'],
    featuresEs: ['Pintura interior y exterior','Marcas de pintura premium','Preparación de superficies','Trabajo en molduras','Paredes de acento','Consulta de colores'],
    image: '/images/painting.jpg',
    cta: 'Get Painting Quote',
    ctaEs: 'Cotizar Pintura',
  },
]

// ─── SINGLE SOURCE OF TRUTH ───────────────────────────────────────────────
// Edita aquí para actualizar teléfonos, email y links en todo el sitio.
export const COMPANY = {
  name: 'MG White Service LLC',
  tagline: 'Cleaning · Remodeling · Painting',

  // Línea principal EN
  phone: '(512) 412-0574',
  phoneHref: 'tel:+15124120574',
  whatsappHref: 'https://wa.me/15124120574',

  // Línea en español
  phoneE: '(512) 214-0147',
  phoneEHref: 'tel:+15122140147',
  whatsappEHref: 'https://wa.me/15122140147',

  email: 'mgwhites22@gmail.com',

  address: 'Austin, TX',
  serviceArea: 'Austin, TX and Surrounding Areas',
  serviceAreaEs: 'Austin, TX y Áreas Circundantes',
  hours: 'Mon–Sat 7am–7pm',
  hoursEs: 'Lun–Sáb 7am–7pm',
  slogan: 'Excellence in every detail, trust in every service.',
  sloganEs: 'Excelencia en cada detalle, confianza en cada servicio.',

  socialMedia: {
    facebook: 'https://facebook.com/mgwhiteservicellc',
    instagram: 'https://instagram.com/mgwhiteservicellc',
  },
} as const

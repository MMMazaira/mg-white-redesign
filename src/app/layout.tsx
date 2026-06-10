import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import { LangProvider } from '@/context/LangContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import { COMPANY } from '@/data/servicesData'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
})
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | MG White Service LLC — Austin, TX',
    default: 'MG White Service LLC | Limpieza, Remodelaciones y Pintura — Austin, TX',
  },
  description: 'Servicios profesionales de limpieza, remodelaciones y pintura en Austin, TX. Licenciados, asegurados y comprometidos con la excelencia. Cotización gratis. Llama al (512) 412-0574.',
  keywords: ['limpieza Austin TX','house cleaning Austin','commercial cleaning Austin','remodeling Austin TX','painting services Austin','MG White Service LLC','limpieza residencial Austin','janitorial services Austin'],
  openGraph: {
    type: 'website', locale: 'es_US',
    url: 'https://mgwhiteservicellc.com',
    siteName: 'MG White Service LLC',
    title: 'MG White Service LLC | Limpieza, Remodelaciones y Pintura — Austin, TX',
    description: 'Servicios profesionales en Austin, TX y áreas circundantes. Cotización gratis.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'MG White Service LLC — Austin, TX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MG White Service LLC — Austin, TX',
    description: 'Limpieza · Remodelaciones · Pintura. Excelencia en cada detalle, confianza en cada servicio.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://mgwhiteservicellc.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <head><LocalBusinessSchema /></head>
      <body className="bg-white text-navy">
        <LangProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton href={COMPANY.whatsappHref} />
        </LangProvider>
      </body>
    </html>
  )
}

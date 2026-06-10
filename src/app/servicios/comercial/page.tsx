'use client'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import OtherServices from '@/components/OtherServices'
import { useLang } from '@/context/LangContext'
import { SERVICES, COMPANY } from '@/data/servicesData'

const SLUG = 'comercial'

export default function ServicePage() {
  const { lang } = useLang()
  const s = SERVICES.find(x => x.slug === SLUG)!
  const title    = lang === 'es' ? s.titleEs       : s.title
  const desc     = lang === 'es' ? s.descriptionEs : s.description
  const features = lang === 'es' ? s.featuresEs    : s.features
  const cta      = lang === 'es' ? s.ctaEs         : s.cta

  return (
    <>
      <section className="bg-navy pt-32 pb-20 px-5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-tag">{title}</span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mt-3 mb-5">
              {lang === 'es' ? <>Espacios Limpios que<br/><span className="text-gold">Impresionan Clientes.</span></> : <>Clean Spaces That<br/><span className="text-gold">Impress Clients.</span></>}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">{desc}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto" className="btn-gold">{cta}</Link>
              <a href={COMPANY.phoneHref} className="btn-outline-white">📞 {COMPANY.phone}</a>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-gold font-semibold mb-5 tracking-wide uppercase text-sm">
              {lang === 'es' ? 'Servicios Incluidos' : 'Services Included'}
            </h3>
            <ul className="flex flex-col gap-3">
              {features.map(f => (
                <li key={f} className="flex items-center gap-3 text-white/80 text-sm">
                  <span className="text-gold font-bold flex-shrink-0">✓</span>{f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">{lang === 'es' ? 'Industrias que Servimos' : 'Industries We Serve'}</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mt-3">
              {lang === 'es' ? 'Limpieza para Todo Tipo de Negocio' : 'Cleaning for Every Business Type'}
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {[
              { icon: '🏢', es: 'Oficinas', en: 'Offices' },
              { icon: '🏬', es: 'Locales Comerciales', en: 'Retail Stores' },
              { icon: '🏥', es: 'Clínicas Médicas', en: 'Medical Clinics' },
              { icon: '🍽️', es: 'Restaurantes', en: 'Restaurants' },
              { icon: '🏫', es: 'Escuelas', en: 'Schools' },
              { icon: '🏗️', es: 'Construcción', en: 'Construction' },
            ].map(item => (
              <div key={item.en} className="flex flex-col items-center gap-3 p-5 bg-gray-50 rounded-xl text-center border border-gray-100">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-sm font-medium text-navy">{lang === 'es' ? item.es : item.en}</span>
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-4 text-gray-600 leading-relaxed">
              <p>{desc}</p>
              <p>{lang === 'es'
                ? 'Ofrecemos horarios flexibles — antes, durante o después del horario laboral — para minimizar las interrupciones en tus operaciones.'
                : 'We offer flexible scheduling — before hours, after hours, or during the day — to minimize disruption to your operations.'}</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="font-display text-xl font-bold text-navy mb-6">
                {lang === 'es' ? 'Solicitar Cotización Comercial' : 'Request Commercial Quote'}
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <OtherServices currentSlug={SLUG} />
    </>
  )
}

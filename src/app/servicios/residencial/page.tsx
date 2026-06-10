'use client'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import OtherServices from '@/components/OtherServices'
import { useLang } from '@/context/LangContext'
import { SERVICES, COMPANY } from '@/data/servicesData'

const SLUG = 'residencial'

export default function ResidentialPage() {
  const { lang } = useLang()
  const s = SERVICES.find(x => x.slug === SLUG)!
  const title    = lang === 'es' ? s.titleEs    : s.title
  const desc     = lang === 'es' ? s.descriptionEs : s.description
  const features = lang === 'es' ? s.featuresEs : s.features
  const cta      = lang === 'es' ? s.ctaEs      : s.cta

  return (
    <>
      <section className="bg-navy pt-32 pb-20 px-5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-tag">{title}</span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mt-3 mb-5">
              {lang === 'es' ? <>Un Hogar Impecable,<br/><span className="text-gold">Cada Vez.</span></> : <>A Spotless Home,<br/><span className="text-gold">Every Time.</span></>}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">{desc}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto" className="btn-gold">{cta}</Link>
              <a href={COMPANY.phoneHref} className="btn-outline-white">📞 {COMPANY.phone}</a>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-gold font-semibold mb-5 tracking-wide uppercase text-sm">
              {lang === 'es' ? 'Lo que Incluye' : "What's Included"}
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
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <span className="section-tag">{lang === 'es' ? 'Nuestro Enfoque' : 'Our Approach'}</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mt-3 mb-5">
              {lang === 'es' ? 'Limpieza Residencial que Va Más Profundo' : 'Residential Cleaning That Goes Deeper'}
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>{desc}</p>
              <p>{lang === 'es'
                ? 'Nuestros paquetes están diseñados para adaptarse a tu horario y presupuesto. Personalizamos cada visita según tus prioridades.'
                : 'Our packages are designed to fit your schedule and budget. We customize every visit to your priorities.'}</p>
              <p>{lang === 'es'
                ? 'Todo nuestro equipo es capacitado, verificado y equipado con los mejores suministros ecológicos. Nosotros traemos todo — tú solo llegas a un espacio limpio y fresco.'
                : 'All our cleaners are trained, background-checked, and equipped with the best eco-friendly supplies. We bring everything — you just come home to a clean, fresh space.'}</p>
            </div>
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {(lang === 'es'
                ? [{ t: 'Limpieza Profunda', b: 'Para mudanzas o una renovación estacional completa.' }, { t: 'Mantenimiento Regular', b: 'Semanal, quincenal o mensual — siempre impecable.' }, { t: 'Post-Evento', b: 'Después de fiestas o reuniones, restauramos tu hogar rápidamente.' }]
                : [{ t: 'One-Time Deep Clean', b: 'Perfect for move-in/move-out or a thorough seasonal refresh.' }, { t: 'Regular Maintenance', b: 'Weekly, bi-weekly, or monthly — consistently clean.' }, { t: 'Post-Event Cleanup', b: 'After parties or gatherings, we restore your home quickly.' }]
              ).map(item => (
                <div key={item.t} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-navy mb-2 text-sm">{item.t}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.b}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="font-display text-xl font-bold text-navy mb-6">
              {lang === 'es' ? 'Agenda tu Limpieza' : 'Book Your Cleaning'}
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>

      <OtherServices currentSlug={SLUG} />
    </>
  )
}

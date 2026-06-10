'use client'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import OtherServices from '@/components/OtherServices'
import { useLang } from '@/context/LangContext'
import { SERVICES, COMPANY } from '@/data/servicesData'

const SLUG = 'pintura'

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
              {lang === 'es' ? <>Una Mano de Pintura que<br/><span className="text-gold">Cambia Todo.</span></> : <>A Fresh Coat That<br/><span className="text-gold">Changes Everything.</span></>}
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
          <div className="lg:col-span-2 space-y-4 text-gray-600 leading-relaxed">
            <span className="section-tag">{lang === 'es' ? 'Nuestro Servicio de Pintura' : 'Our Painting Service'}</span>
            <h2 className="font-display text-3xl font-bold text-navy mt-3 mb-4">
              {lang === 'es' ? 'Acabado Profesional, Siempre' : 'Professional Finish, Every Time'}
            </h2>
            <p>{desc}</p>
            <p>{lang === 'es'
              ? 'Trabajamos con todas las marcas de pintura premium y podemos ayudarte con la selección de colores. Líneas limpias y cobertura impecable.'
              : 'We work with all major premium paint brands and can help with color selection. Clean lines and flawless coverage.'}</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {(lang === 'es'
                ? [{ t: 'Pintura Interior', b: 'Habitaciones, pasillos, techos, molduras y puertas.' }, { t: 'Pintura Exterior', b: 'Exteriores, cercas, terrazas y garajes. Recubrimientos resistentes.' }, { t: 'Pintura Comercial', b: 'Oficinas y locales pintados fuera del horario laboral.' }, { t: 'Paredes de Acento', b: 'Acabados decorativos, texturas y paredes especiales.' }]
                : [{ t: 'Interior Painting', b: 'Rooms, hallways, ceilings, trim, cabinets, and doors.' }, { t: 'Exterior Painting', b: 'House exteriors, fences, decks, and garages.' }, { t: 'Commercial Painting', b: 'Offices and retail stores painted after hours.' }, { t: 'Accent Walls & Murals', b: 'Decorative finishes, texture painting, and custom feature walls.' }]
              ).map(item => (
                <div key={item.t} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-bold text-navy text-sm mb-1">{item.t}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.b}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="font-display text-xl font-bold text-navy mb-6">
              {lang === 'es' ? 'Cotizar Pintura' : 'Get a Painting Quote'}
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>

      <OtherServices currentSlug={SLUG} />
    </>
  )
}

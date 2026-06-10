'use client'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import OtherServices from '@/components/OtherServices'
import { useLang } from '@/context/LangContext'
import { SERVICES, COMPANY } from '@/data/servicesData'

const SLUG = 'remodelaciones'

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
              {lang === 'es' ? <>Transforma tu Espacio<br/><span className="text-gold">con Artesanía.</span></> : <>Transform Your Space<br/><span className="text-gold">With Craftsmanship.</span></>}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">{desc}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto" className="btn-gold">{cta}</Link>
              <a href={COMPANY.phoneHref} className="btn-outline-white">📞 {COMPANY.phone}</a>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-gold font-semibold mb-5 tracking-wide uppercase text-sm">
              {lang === 'es' ? 'Lo que Hacemos' : 'What We Do'}
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
            <span className="section-tag">{lang === 'es' ? 'Nuestro Proceso' : 'Our Process'}</span>
            <h2 className="font-display text-3xl font-bold text-navy mt-3 mb-4">
              {lang === 'es' ? 'Calidad que se Ve y se Siente' : 'Quality You Can See and Feel'}
            </h2>
            <p>{desc}</p>
            <p>{lang === 'es'
              ? 'Manejamos todo el proceso — desde el diseño y permisos hasta el acabado final — para que no tengas que coordinar múltiples contratistas.'
              : 'We handle the entire process — from design and permits to final finishing — so you don\'t have to coordinate multiple contractors.'}</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {(lang === 'es'
                ? [{ t: 'Remodelación de Cocinas', b: 'Desde instalación de gabinetes hasta renovaciones completas.' }, { t: 'Renovación de Baños', b: 'Duchas, lavabos, azulejos y transformaciones completas.' }, { t: 'Pisos', b: 'Madera, azulejo, laminado, LVP — instalación y acabado.' }, { t: 'Carpintería Personalizada', b: 'Gabinetes a medida, estanterías y carpintería de acabado.' }]
                : [{ t: 'Kitchen Remodeling', b: 'From cabinet installation to full gut renovations.' }, { t: 'Bathroom Renovation', b: 'Walk-in showers, vanities, tile work, and full transformations.' }, { t: 'Flooring', b: 'Hardwood, tile, laminate, LVP — installation and refinishing.' }, { t: 'Custom Carpentry', b: 'Built-ins, custom cabinetry, shelving, and trim work.' }]
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
              {lang === 'es' ? 'Cotizar Remodelación' : 'Get a Remodeling Quote'}
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>

      <OtherServices currentSlug={SLUG} />
    </>
  )
}

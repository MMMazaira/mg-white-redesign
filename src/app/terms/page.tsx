'use client'
import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import { COMPANY } from '@/data/servicesData'

export default function TermsPage() {
  const { lang } = useLang()
  return (
    <>
      <section className="bg-navy pt-32 pb-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl font-bold text-white">
            {lang === 'es' ? 'Términos de Servicio' : 'Terms of Service'}
          </h1>
          <p className="text-white/50 mt-3 text-sm">{lang === 'es' ? 'Última actualización: Enero 2025' : 'Last updated: January 2025'}</p>
        </div>
      </section>
      <section className="py-20 px-5 bg-white">
        <div className="max-w-3xl mx-auto prose prose-gray">
          {lang === 'es' ? (
            <>
              <h2>1. Servicios</h2>
              <p>MG White Service LLC proporciona servicios de limpieza, remodelación y pintura en el área de Austin, TX realizados por profesionales capacitados y verificados.</p>
              <h2>2. Estimaciones y Precios</h2>
              <p>Las cotizaciones gratuitas se proporcionan después de una visita in situ. El precio final se confirma por escrito antes de comenzar cualquier trabajo.</p>
              <h2>3. Cancelaciones</h2>
              <p>Solicitamos al menos 24 horas de aviso para cancelaciones o reprogramaciones.</p>
              <h2>4. Garantía de Satisfacción</h2>
              <p>Si no estás satisfecho, contáctanos dentro de las 24 horas y regresaremos a solucionar el problema sin costo adicional.</p>
              <h2>5. Contacto</h2>
              <p>Para preguntas: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> o <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>.</p>
            </>
          ) : (
            <>
              <h2>1. Services</h2>
              <p>MG White Service LLC provides cleaning, remodeling, and painting services in the Austin, TX area by trained, background-checked professionals.</p>
              <h2>2. Estimates & Pricing</h2>
              <p>Free estimates are provided following an on-site visit. Final pricing is confirmed in writing before any work begins.</p>
              <h2>3. Cancellation</h2>
              <p>We ask for at least 24 hours notice for cancellations or rescheduling.</p>
              <h2>4. Satisfaction Guarantee</h2>
              <p>If you are not satisfied, contact us within 24 hours and we will return to address the issue at no additional cost.</p>
              <h2>5. Contact</h2>
              <p>For questions: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>.</p>
            </>
          )}
        </div>
        <div className="max-w-3xl mx-auto mt-12">
          <Link href="/" className="text-gold hover:underline text-sm">← {lang === 'es' ? 'Volver al Inicio' : 'Back to Home'}</Link>
        </div>
      </section>
    </>
  )
}

'use client'
import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import { COMPANY } from '@/data/servicesData'

export default function PrivacyPage() {
  const { lang } = useLang()
  return (
    <>
      <section className="bg-navy pt-32 pb-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl font-bold text-white">
            {lang === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
          </h1>
          <p className="text-white/50 mt-3 text-sm">{lang === 'es' ? 'Última actualización: Enero 2025' : 'Last updated: January 2025'}</p>
        </div>
      </section>
      <section className="py-20 px-5 bg-white">
        <div className="max-w-3xl mx-auto prose prose-gray">
          {lang === 'es' ? (
            <>
              <h2>1. Información que Recopilamos</h2>
              <p>Cuando envías nuestro formulario de contacto, recopilamos tu nombre, correo electrónico, teléfono y los detalles de tu solicitud de servicio. Usamos esta información únicamente para responder a tu consulta y proporcionarte una cotización gratuita.</p>
              <h2>2. Cómo Usamos tu Información</h2>
              <ul><li>Para responder a tus solicitudes de cotización y programar servicios.</li><li>Para enviarte correos transaccionales relacionados con tu solicitud.</li></ul>
              <p>No vendemos ni compartimos tu información personal con terceros con fines de marketing.</p>
              <h2>3. Cookies</h2>
              <p>Este sitio web no utiliza cookies de seguimiento.</p>
              <h2>4. Tus Derechos</h2>
              <p>Puedes solicitar la eliminación de cualquier información personal en cualquier momento escribiendo a <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>
            </>
          ) : (
            <>
              <h2>1. Information We Collect</h2>
              <p>When you submit our contact form, we collect your name, email, phone number, and service request details. We use this information solely to respond to your inquiry and provide a free estimate.</p>
              <h2>2. How We Use Your Information</h2>
              <ul><li>To respond to your estimate requests and schedule services.</li><li>To send transactional emails related to your request.</li></ul>
              <p>We do not sell or share your personal information with third parties for marketing purposes.</p>
              <h2>3. Cookies</h2>
              <p>This website does not use tracking cookies.</p>
              <h2>4. Your Rights</h2>
              <p>You may request deletion of any personal information by emailing <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>
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

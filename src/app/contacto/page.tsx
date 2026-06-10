'use client'
import ContactForm from '@/components/ContactForm'
import { useLang } from '@/context/LangContext'
import { t } from '@/data/translations'
import { COMPANY } from '@/data/servicesData'

export default function ContactPage() {
  const { lang } = useLang()
  const T = t[lang]

  return (
    <>
      <section className="bg-navy pt-32 pb-20 px-5">
        <div className="max-w-7xl mx-auto text-center">
          <span className="section-tag">{T.contact.tag}</span>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mt-3 mb-4">{T.contact.h2}</h1>
          <p className="text-white/60 text-xl max-w-xl mx-auto">{T.contact.sub}</p>
        </div>
      </section>

      <section className="py-24 px-5 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-navy mb-3">
              {lang === 'es' ? 'Nos encantaría escucharte' : "We'd love to hear from you"}
            </h2>
            <div className="w-10 h-0.5 bg-gold mb-6"/>
            <p className="text-gray-500 text-base leading-relaxed mb-10">{T.contact.sub}</p>
            <div className="flex flex-col gap-6">
              {[
                { icon: '📞', title: lang === 'es' ? 'Teléfono (EN)' : 'Phone (EN)', content: COMPANY.phone, sub: lang === 'es' ? COMPANY.hoursEs : COMPANY.hours, href: COMPANY.phoneHref },
                { icon: '📞', title: lang === 'es' ? 'Teléfono (ES)' : 'Phone (ES)', content: COMPANY.phoneE, sub: 'Línea en Español', href: COMPANY.phoneEHref },
                { icon: '✉️', title: 'Email', content: COMPANY.email, sub: lang === 'es' ? 'Respuesta en 2 horas' : 'Reply within 2 hours', href: `mailto:${COMPANY.email}` },
                { icon: '💬', title: 'WhatsApp', content: lang === 'es' ? 'Chatea con nosotros' : 'Chat with us', sub: T.contact.fastest, href: COMPANY.whatsappHref },
                { icon: '📍', title: lang === 'es' ? 'Área de Servicio' : 'Service Area', content: lang === 'es' ? COMPANY.serviceAreaEs : COMPANY.serviceArea, sub: null, href: null },
              ].map(item => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-0.5">{item.title}</div>
                    {item.href
                      ? <a href={item.href} className="text-navy font-semibold hover:text-gold transition-colors">{item.content}</a>
                      : <span className="text-navy font-semibold">{item.content}</span>}
                    {item.sub && <p className="text-gray-400 text-sm">{item.sub}</p>}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-navy rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">📍</div>
              <p className="text-white font-semibold">Austin, TX</p>
              <p className="text-white/50 text-sm mt-1">{lang === 'es' ? 'y Áreas Circundantes' : 'and Surrounding Areas'}</p>
              <p className="text-gold text-sm mt-3 font-medium">Cedar Park · Round Rock · Pflugerville · Georgetown · Kyle</p>
            </div>
          </div>

          <div className="lg:col-span-3 bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-100">
            <h3 className="font-display text-xl font-bold text-navy mb-6">
              {lang === 'es' ? 'Envíanos un Mensaje' : 'Send Us a Message'}
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-5 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy text-center mb-12">{T.faq.h2}</h2>
          <div className="flex flex-col divide-y divide-gray-200">
            {T.faq.items.map((item, i) => (
              <div key={i} className="py-6">
                <h3 className="font-semibold text-navy mb-2 flex items-start gap-2">
                  <span className="text-gold mt-0.5 flex-shrink-0">Q.</span>{item.q}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed pl-5">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

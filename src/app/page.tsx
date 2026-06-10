'use client'
import Link from 'next/link'
import Hero from '@/components/Hero'
import ContactForm from '@/components/ContactForm'
import { useLang } from '@/context/LangContext'
import { t } from '@/data/translations'
import { SERVICES, COMPANY } from '@/data/servicesData'

export default function HomePage() {
  const { lang } = useLang()
  const T = t[lang]

  return (
    <>
      <Hero />

      {/* ── ABOUT ── */}
      <section className="py-24 px-5 bg-white" id="nosotros">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-navy/10 bg-gray-100">
              <img src="/images/imagen2.jpg" alt="MG White Service LLC team"
                className="w-full h-full object-cover"/>
            </div>
            {/* Gold accent corner */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-gold rounded-2xl -z-10"/>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gold/10 rounded-xl -z-10"/>
            {/* Badge */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <span className="text-white text-lg">📍</span>
              </div>
              <div>
                <p className="text-navy font-bold text-sm">Austin, TX</p>
                <p className="text-gold text-xs">{lang === 'es' ? '& Áreas Circundantes' : '& Surrounding Areas'}</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="section-tag">{T.about.tag}</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy leading-tight mt-3 mb-2">
              {T.about.h2.split(',')[0]},
            </h2>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gold leading-tight mb-5">
              {T.about.h2.split(',')[1]}
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-6"/>
            <p className="text-gray-500 text-lg leading-relaxed mb-4">{T.about.p1}</p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">{T.about.p2}</p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {T.about.values.map(v => (
                <div key={v.t} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="text-xl flex-shrink-0">{v.icon}</span>
                  <div>
                    <p className="font-bold text-navy text-sm">{v.t}</p>
                    <p className="text-gray-400 text-xs leading-snug mt-0.5">{v.b}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contacto" className="btn-gold">{T.about.cta1}</Link>
              <a href={COMPANY.whatsappHref} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-[#25d366] text-[#1a9e4f] font-semibold px-6 py-3.5 rounded-md hover:bg-[#25d366]/5 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {T.about.cta2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-5 bg-gray-50" id="servicios">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-tag">{T.services.tag}</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy mt-3 mb-4">{T.services.h2}</h2>
            <p className="text-gray-500 text-lg leading-relaxed">{T.services.sub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {T.services.items.map((svc, i) => (
              <div key={i} className="service-card group">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center text-3xl mb-5 group-hover:bg-gold/20 transition-colors">
                  {svc.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{svc.desc}</p>
                <ul className="flex flex-col gap-2 mb-6">
                  {svc.features.slice(0, 4).map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-gold font-bold flex-shrink-0">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href={`/servicios/${svc.slug}`}
                  className="inline-flex items-center gap-1.5 text-gold font-semibold text-sm hover:gap-3 transition-all">
                  {svc.cta} <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 px-5 bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <span className="section-tag">{T.why.tag}</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">{T.why.h2}</h2>
            <p className="text-white/55 text-lg">{T.why.sub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {T.why.items.map(item => (
              <div key={item.n}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-gold/40 transition-all duration-300">
                <div className="font-display text-5xl text-gold/40 font-bold leading-none mb-4">{item.n}</div>
                <h3 className="text-white font-semibold text-lg mb-3">{item.t}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 px-5 bg-white" id="proyectos">
        <div className="max-w-7xl mx-auto text-center">
          <span className="section-tag">{T.process.tag}</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy mt-3 mb-4">{T.process.h2}</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-16">{T.process.sub}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gold/20"/>
            {T.process.steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 rounded-full bg-navy text-white font-display text-2xl font-bold flex items-center justify-center mb-5 shadow-lg shadow-navy/20 ring-4 ring-white relative z-10">
                  {step.n}
                </div>
                <h3 className="font-semibold text-navy text-lg mb-2">{step.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-5 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="section-tag">{T.testimonials.tag}</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy mt-3">{T.testimonials.h2}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {T.testimonials.items.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-gold text-lg tracking-widest mb-4">{'★'.repeat(item.stars)}</div>
                <p className="text-gray-600 text-sm leading-relaxed italic mb-6">&ldquo;{item.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">{item.name}</div>
                    <div className="text-gray-400 text-xs">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-20 px-5 bg-gold">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">{T.cta.h2}</h2>
          <p className="text-white/80 text-lg max-w-md mx-auto mb-10">{T.cta.sub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto"
              className="bg-white text-gold font-bold px-8 py-4 rounded-md hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2">
              {T.cta.btn1}
            </Link>
            <a href={COMPANY.phoneHref}
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
              📞 {T.cta.btn2}
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="py-24 px-5 bg-white" id="contacto">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-tag">{T.contact.tag}</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy mt-3 mb-4">{T.contact.h2}</h2>
            <div className="w-12 h-0.5 bg-gold mb-6"/>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">{T.contact.sub}</p>
            <div className="flex flex-col gap-5">
              {[
                { icon: '📞', label: COMPANY.phone, sub: lang === 'es' ? COMPANY.hoursEs : COMPANY.hours, href: COMPANY.phoneHref },
                { icon: '📞', label: COMPANY.phoneE, sub: 'Línea en Español', href: COMPANY.phoneEHref },
                { icon: '✉️', label: COMPANY.email, sub: lang === 'es' ? 'Respuesta en 2 horas' : 'Reply within 2 hours', href: `mailto:${COMPANY.email}` },
                { icon: '💬', label: 'WhatsApp', sub: lang === 'es' ? T.contact.fastest : T.contact.fastest, href: COMPANY.whatsappHref },
                { icon: '📍', label: lang === 'es' ? COMPANY.serviceAreaEs : COMPANY.serviceArea, sub: null, href: null },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
                  <div>
                    {item.href
                      ? <a href={item.href} className="font-semibold text-navy hover:text-gold transition-colors">{item.label}</a>
                      : <span className="font-semibold text-navy">{item.label}</span>}
                    {item.sub && <p className="text-gray-400 text-sm mt-0.5">{item.sub}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Austin map card */}
            <div className="mt-10 bg-navy rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">📍</div>
              <p className="text-white font-semibold">Austin, TX</p>
              <p className="text-white/50 text-sm mt-1">{lang === 'es' ? 'y Áreas Circundantes' : 'and Surrounding Areas'}</p>
              <p className="text-gold text-sm mt-3 font-medium">Cedar Park · Round Rock · Pflugerville · Georgetown · Kyle</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="font-display text-xl font-bold text-navy mb-6">
              {lang === 'es' ? 'Envíanos un Mensaje' : 'Send Us a Message'}
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

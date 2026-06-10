'use client'
import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import { SERVICES } from '@/data/servicesData'

export default function OtherServices({ currentSlug }: { currentSlug: string }) {
  const { lang } = useLang()
  const others = SERVICES.filter(s => s.slug !== currentSlug)
  const heading = lang === 'es' ? 'Explora Nuestros Otros Servicios' : 'Explore Our Other Services'

  return (
    <section className="py-16 px-5 bg-navy">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-2xl font-bold text-white mb-8 text-center">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {others.map(s => (
            <Link key={s.id} href={`/servicios/${s.slug}`}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gold/40 hover:bg-white/8 transition-all group">
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="font-semibold text-white text-sm group-hover:text-gold transition-colors">
                {lang === 'es' ? s.titleEs : s.title}
              </div>
              <div className="text-white/40 text-xs mt-1">
                {lang === 'es' ? s.shortDescEs : s.shortDesc}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

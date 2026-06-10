'use client'
import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import { t } from '@/data/translations'
import { COMPANY, SERVICES } from '@/data/servicesData'

export default function Footer() {
  const { lang } = useLang()
  const T = t[lang].footer
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg width="44" height="44" viewBox="0 0 52 52" fill="none">
                <rect width="52" height="52" rx="6" fill="#b8953a"/>
                <path d="M26 10 L38 20 L38 38 L14 38 L14 20 Z" fill="none" stroke="white" strokeWidth="2"/>
                <path d="M22 38 L22 29 L30 29 L30 38" fill="white"/>
                <text x="26" y="23" textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="serif">MG</text>
              </svg>
              <div>
                <div className="font-display text-xl font-bold text-white">
                  MG <span className="text-gold">White</span> Service
                  <span className="text-white/40 text-sm font-normal"> LLC</span>
                </div>
                <p className="text-gold/80 text-xs font-medium tracking-widest uppercase">{T.tagline}</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">{T.desc}</p>
            <div className="flex flex-wrap gap-2">
              {T.badges.map(b => (
                <span key={b} className="text-xs px-3 py-1 border border-white/15 rounded-full text-white/50">{b}</span>
              ))}
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a href={COMPANY.socialMedia.facebook} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/80 transition-colors">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href={COMPANY.socialMedia.instagram} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/80 transition-colors">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path fill="#1a2744" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#1a2744" strokeWidth="2"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-5">{T.services}</h4>
            <ul className="flex flex-col gap-3">
              {SERVICES.map(s => (
                <li key={s.id}>
                  <Link href={`/servicios/${s.slug}`}
                    className="text-sm text-white/50 hover:text-gold transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0"/>
                    {lang === 'es' ? s.titleEs : s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-5">{T.contact}</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={COMPANY.phoneHref} className="text-sm text-white/50 hover:text-gold transition-colors flex items-center gap-2">
                  📞 {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={COMPANY.phoneEHref} className="text-sm text-white/50 hover:text-gold transition-colors flex items-center gap-2">
                  📞 {COMPANY.phoneE} <span className="text-[10px] text-gold/60">(ES)</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="text-sm text-white/50 hover:text-gold transition-colors flex items-center gap-2">
                  ✉️ {COMPANY.email}
                </a>
              </li>
              <li>
                <a href={COMPANY.whatsappHref} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-gold transition-colors flex items-center gap-2">
                  💬 WhatsApp
                </a>
              </li>
              <li className="text-sm text-white/50 flex items-center gap-2">
                📍 {lang === 'es' ? COMPANY.serviceAreaEs : COMPANY.serviceArea}
              </li>
              <li className="text-sm text-white/50 flex items-center gap-2">
                🕐 {lang === 'es' ? COMPANY.hoursEs : COMPANY.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>© {year} {COMPANY.name}. {T.rights}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold transition-colors">{T.privacy}</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">{T.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

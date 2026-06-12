import Link from 'next/link'
import { COMPANY, SERVICES } from '@/data/servicesData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white/60 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">

        {/* Top Grid — stacked mobile, 2-col tablet, 4-col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
              MG<span className="text-gold">White</span> Service
              <span className="text-white/40 text-sm sm:text-base font-body font-normal"> LLC</span>
            </div>
            <p className="text-gold/80 text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
              Cleaning · Remodeling · Painting
            </p>
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-xs mb-4 sm:mb-6">
              {COMPANY.slogan} Serving Austin, TX and surrounding areas since 2014.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Licensed', 'Insured', 'Eco-Friendly', 'Free Estimates'].map((b) => (
                <span key={b} className="text-xs px-2.5 py-1 border border-white/15 rounded-full text-white/50">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="text-xs sm:text-sm text-white/50 hover:text-gold transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-2.5 sm:gap-3">
              <li>
                <a href={COMPANY.phoneHref}
                  className="text-xs sm:text-sm text-white/50 hover:text-gold transition-colors flex items-center gap-2 min-h-[36px]">
                  📞 {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`}
                  className="text-xs sm:text-sm text-white/50 hover:text-gold transition-colors flex items-center gap-2 break-all min-h-[36px]">
                  ✉️ {COMPANY.email}
                </a>
              </li>
              <li>
                <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-white/50 hover:text-gold transition-colors flex items-center gap-2 min-h-[36px]">
                  💬 WhatsApp
                </a>
              </li>
              <li className="text-xs sm:text-sm text-white/50 flex items-start gap-2">
                📍 {COMPANY.serviceArea}
              </li>
              <li className="text-xs sm:text-sm text-white/50 flex items-center gap-2">
                🕐 {COMPANY.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs text-white/30">
          <p>© {year} {COMPANY.name}. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <Link href="/contacto" className="hover:text-gold transition-colors min-h-[36px] flex items-center">
              Privacy Policy
            </Link>
            <Link href="/contacto" className="hover:text-gold transition-colors min-h-[36px] flex items-center">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

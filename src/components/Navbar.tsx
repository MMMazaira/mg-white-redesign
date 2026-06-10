'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useLang } from '@/context/LangContext'
import { t } from '@/data/translations'
import { COMPANY } from '@/data/servicesData'

export default function Navbar() {
  const { lang, toggle } = useLang()
  const T = t[lang].nav
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { href: '/',            label: T.inicio },
    { href: '/#servicios', label: T.servicios },
    { href: '/#nosotros',  label: T.nosotros },
    { href: '/#proyectos', label: T.proyectos },
    { href: '/contacto',   label: T.contacto },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-20">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          {/* SVG logo inspired by the photo: MG monogram + house icon + wordmark */}
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Shield/hex background */}
            <rect width="52" height="52" rx="6" fill="#1a2744"/>
            {/* House shape */}
            <path d="M26 10 L38 20 L38 38 L14 38 L14 20 Z" fill="none" stroke="#b8953a" strokeWidth="2"/>
            <path d="M22 38 L22 29 L30 29 L30 38" fill="#b8953a"/>
            {/* MG letters */}
            <text x="26" y="23" textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="serif">MG</text>
          </svg>
          <div className="leading-tight">
            <div className="font-display text-[17px] font-bold text-navy tracking-wide">
              MG <span className="text-gold">WHITE</span>
            </div>
            <div className="text-[9px] tracking-[0.18em] text-navy/50 font-medium uppercase">Service LLC — Cleaning & Remodeling</div>
          </div>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="text-navy/75 hover:text-gold text-[13px] font-semibold tracking-wide uppercase transition-colors duration-200 relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full"/>
            </Link>
          ))}
        </nav>

        {/* ── Right: phone + lang + CTA ── */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Lang toggle */}
          <button onClick={toggle}
            className="flex items-center gap-1.5 text-xs font-bold text-navy/60 hover:text-gold border border-gray-200 rounded-full px-3 py-1.5 transition-colors">
            {lang === 'es' ? '🇺🇸 EN' : '🇲🇽 ES'}
          </button>

          <a href={COMPANY.phoneHref}
            className="flex items-center gap-2 bg-navy text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-navy-light transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            {COMPANY.phone}
          </a>
          <Link href="/contacto" className="btn-gold text-sm py-2.5 px-5">
            {T.cta}
          </Link>
        </div>

        {/* ── Mobile right ── */}
        <div className="lg:hidden flex items-center gap-3">
          <button onClick={toggle}
            className="text-xs font-bold text-navy/60 border border-gray-200 rounded-full px-2.5 py-1 transition-colors">
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú"
            className="flex flex-col gap-1.5 p-2">
            <span className={`block w-6 h-0.5 bg-navy transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
            <span className={`block w-6 h-0.5 bg-navy transition-all ${menuOpen ? 'opacity-0' : ''}`}/>
            <span className={`block w-6 h-0.5 bg-navy transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="px-5 pb-6 flex flex-col gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-navy/75 hover:text-gold py-3 text-sm font-semibold uppercase tracking-wide border-b border-gray-50 transition-colors">
              {l.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a href={COMPANY.phoneHref} className="btn-navy text-sm py-3 justify-center">
              📞 {COMPANY.phone}
            </a>
            <Link href="/contacto" onClick={() => setMenuOpen(false)} className="btn-gold text-sm py-3 justify-center">
              {T.cta}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

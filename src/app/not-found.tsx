'use client'
import Link from 'next/link'
import { useLang } from '@/context/LangContext'

export default function NotFound() {
  const { lang } = useLang()
  return (
    <section className="min-h-screen bg-navy flex items-center justify-center px-5 pt-20">
      <div className="text-center">
        <div className="font-display text-[140px] font-bold text-white/10 leading-none select-none">404</div>
        <h1 className="font-display text-4xl font-bold text-white mt-4 mb-4">
          {lang === 'es' ? 'Página no encontrada' : 'Page Not Found'}
        </h1>
        <p className="text-white/55 text-lg mb-10 max-w-md">
          {lang === 'es'
            ? 'La página que buscas no existe. Volvamos al inicio.'
            : "The page you're looking for doesn't exist. Let's get you back on track."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-gold">← {lang === 'es' ? 'Volver al Inicio' : 'Back to Home'}</Link>
          <Link href="/contacto"
            className="border-2 border-white/30 text-white font-medium px-8 py-3.5 rounded-md hover:border-white/70 hover:bg-white/5 transition-colors">
            {lang === 'es' ? 'Contáctanos' : 'Contact Us'}
          </Link>
        </div>
      </div>
    </section>
  )
}

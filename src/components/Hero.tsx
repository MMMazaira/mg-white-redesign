'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/context/LangContext'
import { t } from '@/data/translations'

export default function Hero() {
  const { lang } = useLang()
  const T = t[lang]

 return (
    <section className="relative w-full min-h-[85vh] bg-white overflow-hidden pt-20">

      {/* IMAGE BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-kitchen.jpg"
          alt="MG White Service LLC — Kitchen Remodeling Austin TX"
          fill
          priority
          className="object-cover object-center"
        />

        {/* overlay para legibilidad */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 flex items-center min-h-[85vh]">

        <div className="max-w-3xl text-white">

          {/* badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-0.5 bg-gold" />
            <span className="text-gold text-xs font-bold tracking-widest uppercase">
              {T.hero.badge}
            </span>
          </div>

          {/* title */}
          <h1 className="font-display font-bold leading-[1.05] mb-6">
            <span className="block text-4xl sm:text-5xl lg:text-[58px]">
              {T.hero.h1a}
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-[58px] text-gold mt-2">
              {T.hero.h1b}
            </span>
          </h1>

          {/* subtitle */}
          <p className="text-white/80 text-lg max-w-xl mb-8">
            {T.hero.sub}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#servicios"
              className="btn-navy px-6 py-4 rounded-none text-sm justify-center"
            >
              {T.hero.cta1}
            </Link>

            <Link
              href="/#servicios"
              className="btn-gold px-6 py-4 rounded-none text-sm justify-center"
            >
              {T.hero.cta2}
            </Link>
          </div>

        </div>
      </div>

    </section>
  )
}
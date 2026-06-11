'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

type Lang = 'es' | 'en'
interface LangCtx { lang: Lang; toggle: () => void }

const Ctx = createContext<LangCtx>({ lang: 'en', toggle: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <Ctx.Provider value={{ lang, toggle: () => setLang(l => l === 'es' ? 'en' : 'es') }}>
      {children}
    </Ctx.Provider>
  )
}

export const useLang = () => useContext(Ctx)

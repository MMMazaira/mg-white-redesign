'use client'
import { useState } from 'react'
import { useLang } from '@/context/LangContext'
import { t } from '@/data/translations'
import { SERVICES, COMPANY } from '@/data/servicesData'

// ── Reemplaza con tu endpoint de Formspree ─────────────────────────────────
// 1. Ve a https://formspree.io → New Form
// 2. Copia el endpoint: https://formspree.io/f/xabc1234
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
// ──────────────────────────────────────────────────────────────────────────

interface FormState {
  firstName: string; lastName: string; email: string
  phone: string; service: string; message: string
}
const INITIAL: FormState = { firstName:'', lastName:'', email:'', phone:'', service:'', message:'' }

export default function ContactForm() {
  const { lang } = useLang()
  const F = t[lang].contact.form
  const [form, setForm] = useState<FormState>(INITIAL)
  const [honeypot, setHoneypot] = useState('')
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [serverError, setServerError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function validate() {
    const e: Partial<FormState> = {}
    if (!form.firstName.trim()) e.firstName = F.errRequired
    if (!form.lastName.trim())  e.lastName  = F.errRequired
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = F.errEmail
    if (!form.phone.trim())   e.phone   = F.errRequired
    if (!form.service)        e.service = F.errService
    if (!form.message.trim()) e.message = F.errMessage
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setErrors(err => ({ ...err, [e.target.name]: undefined }))
    setServerError('')
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    if (honeypot) { setSubmitted(true); return }
    setLoading(true); setServerError('')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          email: form.email, phone: form.phone,
          service: form.service, message: form.message,
          _subject: `Nueva solicitud — ${form.service} — ${form.firstName} ${form.lastName}`,
        }),
      })
      if (res.ok) { setSubmitted(true); setForm(INITIAL) }
      else {
        const d = await res.json()
        setServerError(d?.error ?? 'Error al enviar. Por favor llámanos o usa WhatsApp.')
      }
    } catch { setServerError('Error de red. Por favor llámanos o usa WhatsApp.') }
    finally { setLoading(false) }
  }

  if (submitted) return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center">
      <div className="text-5xl mb-4">✅</div>
      <h3 className="font-display text-2xl font-bold text-navy mb-3">{F.successTitle}</h3>
      <p className="text-gray-600 mb-1">{F.successMsg}</p>
      <p className="text-gray-400 text-sm mb-6">{F.successSub}</p>
      <a href={COMPANY.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-gold">
        {F.successWa}
      </a>
    </div>
  )

  const serviceList = lang === 'es'
    ? SERVICES.map(s => ({ id: s.id, label: s.titleEs }))
    : SERVICES.map(s => ({ id: s.id, label: s.title }))

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Honeypot */}
      <div aria-hidden style={{ position:'absolute', left:'-9999px', opacity:0, pointerEvents:'none' }}>
        <input name="_gotcha" type="text" tabIndex={-1} autoComplete="off"
          value={honeypot} onChange={e => setHoneypot(e.target.value)} />
      </div>

      {serverError && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">{serverError}</div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-widest mb-1.5">{F.fname}</label>
          <input name="firstName" type="text" className={`input-field ${errors.firstName?'border-red-400':''}`}
            placeholder="María" value={form.firstName} onChange={handleChange}/>
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-widest mb-1.5">{F.lname}</label>
          <input name="lastName" type="text" className={`input-field ${errors.lastName?'border-red-400':''}`}
            placeholder="García" value={form.lastName} onChange={handleChange}/>
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy uppercase tracking-widest mb-1.5">{F.email}</label>
        <input name="email" type="email" className={`input-field ${errors.email?'border-red-400':''}`}
          placeholder="correo@email.com" value={form.email} onChange={handleChange}/>
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-widest mb-1.5">{F.phone}</label>
          <input name="phone" type="tel" className={`input-field ${errors.phone?'border-red-400':''}`}
            placeholder="(512) 000-0000" value={form.phone} onChange={handleChange}/>
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-widest mb-1.5">{F.service}</label>
          <select name="service" className={`input-field ${errors.service?'border-red-400':''}`}
            value={form.service} onChange={handleChange}>
            <option value="">{F.select}</option>
            {serviceList.map(s => <option key={s.id} value={s.label}>{s.label}</option>)}
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy uppercase tracking-widest mb-1.5">{F.message}</label>
        <textarea name="message" rows={4} className={`input-field resize-none ${errors.message?'border-red-400':''}`}
          placeholder={F.placeholder} value={form.message} onChange={handleChange}/>
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button type="submit" disabled={loading}
        className="btn-gold w-full justify-center py-4 text-sm font-bold disabled:opacity-60 disabled:cursor-not-allowed">
        {loading ? (
          <><svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>{F.sending}</>
        ) : F.btn}
      </button>
      <p className="text-center text-xs text-gray-400">{F.note}</p>
    </form>
  )
}

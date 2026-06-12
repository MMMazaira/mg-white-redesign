'use client'

import { useState } from 'react'
import { SERVICES, COMPANY } from '@/data/servicesData'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

interface FormState {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  message: string
}

const INITIAL: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')

  function validate(): boolean {
    const e: Partial<FormState> = {}
    if (!form.firstName.trim()) e.firstName = 'Required'
    if (!form.lastName.trim()) e.lastName = 'Required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Valid email required'
    if (!form.phone.trim()) e.phone = 'Required'
    if (!form.service) e.service = 'Please select a service'
    if (!form.message.trim()) e.message = 'Please describe your needs'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setErrors((err) => ({ ...err, [e.target.name]: undefined }))
    setServerError('')
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setServerError('')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      })

      if (res.ok) {
        setSubmitted(true)
        setForm(INITIAL)
      } else {
        setServerError('Something went wrong. Please try again or call us directly.')
      }
    } catch {
      setServerError('Network error. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 sm:p-10 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-navy mb-3">Request Sent!</h3>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Thank you! We'll contact you within 2 hours to discuss your project.
        </p>
        <a
          href={COMPANY.whatsappEHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex text-sm sm:text-base"
        >
          Or chat on WhatsApp now →
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">

      {/* Row: First + Last */}
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label htmlFor="firstName"
            className="block text-xs font-semibold text-navy tracking-widest uppercase mb-1.5 sm:mb-2">
            First Name
          </label>
          <input
            id="firstName" name="firstName" type="text"
            autoComplete="given-name"
            inputMode="text"
            className={`input-field ${errors.firstName ? 'border-red-400' : ''}`}
            placeholder="Maria"
            value={form.firstName} onChange={handleChange}
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName"
            className="block text-xs font-semibold text-navy tracking-widest uppercase mb-1.5 sm:mb-2">
            Last Name
          </label>
          <input
            id="lastName" name="lastName" type="text"
            autoComplete="family-name"
            inputMode="text"
            className={`input-field ${errors.lastName ? 'border-red-400' : ''}`}
            placeholder="Garcia"
            value={form.lastName} onChange={handleChange}
          />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email"
          className="block text-xs font-semibold text-navy tracking-widest uppercase mb-1.5 sm:mb-2">
          Email
        </label>
        <input
          id="email" name="email" type="email"
          autoComplete="email"
          inputMode="email"
          className={`input-field ${errors.email ? 'border-red-400' : ''}`}
          placeholder="maria@email.com"
          value={form.email} onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Phone + Service */}
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label htmlFor="phone"
            className="block text-xs font-semibold text-navy tracking-widest uppercase mb-1.5 sm:mb-2">
            Phone
          </label>
          <input
            id="phone" name="phone" type="tel"
            autoComplete="tel"
            inputMode="tel"
            className={`input-field ${errors.phone ? 'border-red-400' : ''}`}
            placeholder="(512) 000-0000"
            value={form.phone} onChange={handleChange}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="service"
            className="block text-xs font-semibold text-navy tracking-widest uppercase mb-1.5 sm:mb-2">
            Service
          </label>
          <select
            id="service" name="service"
            className={`input-field ${errors.service ? 'border-red-400' : ''}`}
            value={form.service} onChange={handleChange}
          >
            <option value="">Select...</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>{s.title}</option>
            ))}
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message"
          className="block text-xs font-semibold text-navy tracking-widest uppercase mb-1.5 sm:mb-2">
          Tell Us About Your Project
        </label>
        <textarea
          id="message" name="message" rows={4}
          className={`input-field resize-none ${errors.message ? 'border-red-400' : ''}`}
          placeholder="Describe your space, frequency, special requirements..."
          value={form.message} onChange={handleChange}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      {serverError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-600 text-sm">
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-navy w-full disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          'Send Free Estimate Request ✓'
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        No commitment required. We respond within 2 hours.
      </p>
    </form>
  )
}

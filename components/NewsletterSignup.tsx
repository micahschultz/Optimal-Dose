'use client'

import { FormEvent, useState } from 'react'

interface NewsletterSignupProps {
  compact?: boolean
}

export default function NewsletterSignup({ compact = false }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) return

    setStatus('loading')

    const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_URL
    if (!endpoint) {
      await new Promise((r) => setTimeout(r, 800))
      setStatus('success')
      setEmail('')
      return
    }

    try {
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={`text-center ${compact ? 'py-4' : 'py-8'}`}>
        <p className="text-brand-accent font-bold text-lg mb-1">
          You&apos;re in.
        </p>
        <p className="text-brand-text-muted text-sm">
          Check your inbox for a confirmation. Welcome to the dose.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? '' : 'max-w-md mx-auto'}>
      <div className="flex flex-col sm:flex-row gap-3">
        <label htmlFor={compact ? 'email-compact' : 'email-main'} className="sr-only">
          Email address
        </label>
        <input
          id={compact ? 'email-compact' : 'email-main'}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-3 rounded-lg bg-brand-bg border border-brand-border text-white placeholder:text-brand-text-muted/40 focus:outline-none focus:border-brand-accent focus:shadow-[0_0_0_3px_rgba(0,191,99,0.15)] transition-all duration-200"
          aria-label="Email address for newsletter"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 rounded-lg bg-brand-accent text-brand-bg font-bold text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-brand-accent/20 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-bg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap glow-hover"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-red-400 text-sm mt-2">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  )
}

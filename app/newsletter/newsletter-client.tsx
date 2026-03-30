'use client'

import AnimatedSection from '@/components/AnimatedSection'
import NewsletterSignup from '@/components/NewsletterSignup'

export default function NewsletterClient() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Your weekly dose, delivered.
          </h1>
          <p className="text-lg text-brand-text/70 max-w-xl mx-auto">
            One email per week with evidence-based fitness science. That&apos;s it. No
            spam. No upsells. Unsubscribe anytime.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="rounded-xl border border-brand-accent/20 bg-brand-accent/5 p-8 md:p-12 mb-12">
          <div className="max-w-md mx-auto">
            <NewsletterSignup />
          </div>
          <p className="text-center text-brand-text-muted/50 text-sm mt-4 font-mono">
            Join 500+ evidence-based lifters
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <h2 className="text-2xl font-bold text-white tracking-tight mb-6">
          What you&apos;ll get
        </h2>
        <ul className="space-y-4">
          {[
            {
              title: 'Research breakdowns',
              desc: 'Complex studies translated into practical, actionable takeaways you can use immediately.',
            },
            {
              title: 'Myth busting',
              desc: 'Popular fitness "facts" held up against what the evidence actually shows.',
            },
            {
              title: 'Industry analysis',
              desc: 'The business behind supplements, trends, and wellness marketing — follow the money.',
            },
            {
              title: 'Training tips',
              desc: 'Small, evidence-based adjustments that compound over time into real results.',
            },
            {
              title: 'No affiliate links',
              desc: 'Just honest information. No hidden sponsorships, no products to push.',
            },
          ].map((item) => (
            <li
              key={item.title}
              className="flex gap-4 p-4 rounded-xl border border-brand-border bg-brand-card"
            >
              <span className="text-brand-accent mt-0.5 shrink-0" aria-hidden="true">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <div>
                <p className="font-semibold text-white">{item.title}</p>
                <p className="text-sm text-brand-text-muted">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection delay={0.3} className="mt-16">
        <div className="text-center">
          <p className="text-brand-text-muted text-sm font-mono">
            Published weekly. Built with science, not supplements.
          </p>
        </div>
      </AnimatedSection>
    </div>
  )
}

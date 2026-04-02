'use client'

import AnimatedSection from '@/components/AnimatedSection'
import NewsletterSignup from '@/components/NewsletterSignup'

export default function NewsletterClient() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      {/* Hero — asymmetric */}
      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-widest text-brand-accent mb-4">
              Newsletter
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 leading-[0.95]">
              <span className="font-editorial text-white" style={{ fontStyle: 'italic' }}>Your weekly dose,</span>
              <br />
              <span className="font-sans font-bold text-brand-accent">delivered.</span>
            </h1>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-lg text-brand-text-muted">
              One email per week with evidence-based fitness science. That&apos;s it. No
              spam. No upsells. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Signup form */}
      <AnimatedSection delay={0.1}>
        <div className="rounded-xl border border-brand-accent/20 bg-brand-accent/[0.03] p-8 md:p-12 mb-16">
          <div className="max-w-md mx-auto">
            <NewsletterSignup />
          </div>
          <p className="text-center text-brand-text-muted/40 text-xs mt-6 font-mono tracking-wider">
            Join 500+ evidence-based lifters
          </p>
        </div>
      </AnimatedSection>

      {/* Thin divider */}
      <div className="h-px bg-brand-border mb-16" />

      {/* What you'll get */}
      <AnimatedSection delay={0.2}>
        <p className="font-mono text-xs uppercase tracking-widest text-brand-accent mb-4">
          What you get
        </p>
        <h2 className="text-3xl md:text-4xl tracking-tight mb-10">
          <span className="font-editorial text-white" style={{ fontStyle: 'italic' }}>Every week,</span>{' '}
          <span className="font-sans font-bold text-white">straight to your inbox</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <div
              key={item.title}
              className="p-6 rounded-xl border border-brand-border bg-brand-card"
            >
              <div className="w-8 h-0.5 bg-brand-accent mb-4" />
              <p className="font-bold text-white mb-1">{item.title}</p>
              <p className="text-sm text-brand-text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.3} className="mt-20">
        <div className="text-center">
          <p className="text-brand-text-muted/40 text-xs font-mono tracking-wider">
            Published weekly. Built with science, not supplements.
          </p>
        </div>
      </AnimatedSection>
    </div>
  )
}

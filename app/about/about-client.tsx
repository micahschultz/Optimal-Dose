'use client'

import AnimatedSection from '@/components/AnimatedSection'
import NewsletterSignup from '@/components/NewsletterSignup'
import { CATEGORIES, CategoryKey } from '@/lib/constants'

const pillars = (Object.keys(CATEGORIES) as CategoryKey[]).map((key) => ({
  key,
  ...CATEGORIES[key],
}))

export default function AboutClient() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      {/* Hero-style intro — asymmetric */}
      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-widest text-brand-accent mb-4">
              About
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight mb-8 leading-[0.95]">
              <span className="font-editorial text-white" style={{ fontStyle: 'italic' }}>About</span>
              <br />
              <span className="font-sans font-bold text-brand-accent">optimaldose.</span>
            </h1>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-lg text-brand-text-muted leading-relaxed">
              I got tired of seeing the same recycled fitness advice with zero
              sources. So I started reading the actual papers.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Thin green divider */}
      <div className="h-px bg-brand-accent/20 mb-16" />

      {/* Body copy */}
      <AnimatedSection>
        <div className="max-w-2xl">
          <div className="space-y-6">
            <p className="text-lg text-brand-text/80 leading-relaxed">
              Every Instagram infographic confidently stating &ldquo;facts&rdquo; that
              were either outdated, cherry-picked, or completely made up. Every
              supplement ad promising results that no study has ever demonstrated.
            </p>
            <p className="text-lg text-brand-text/80 leading-relaxed">
              So I started reading the actual papers. Not the abstracts — the full
              studies. The meta-analyses. The systematic reviews. And I realized
              something: the truth is usually more nuanced, more practical, and
              more useful than the simplified rules the fitness industry sells you.
            </p>

            {/* Pull quote — massive serif italic */}
            <blockquote className="my-12 py-8 border-l-4 border-brand-accent pl-8">
              <p className="font-editorial text-3xl md:text-4xl text-brand-accent leading-snug" style={{ fontStyle: 'italic' }}>
                There&apos;s an optimal dose for everything. Not the maximum. Not the
                minimum for survival.
              </p>
            </blockquote>

            <p className="text-lg text-brand-text/80 leading-relaxed">
              <strong className="text-white font-bold">optimaldose.</strong> is what came
              out of that. It&apos;s a place where fitness meets actual science, where
              popular advice gets fact-checked, and where the answer to &ldquo;how
              much?&rdquo; is always &ldquo;here&apos;s what the evidence says.&rdquo;
            </p>
            <p className="text-lg text-brand-text/80 leading-relaxed">
              The name is the philosophy: the dose that gives
              you the most return for the least cost — in training volume,
              nutrition, supplementation, and even information consumption.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Content Pillars */}
      <AnimatedSection className="mt-20">
        <div className="h-px bg-brand-border mb-12" />
        <p className="font-mono text-xs uppercase tracking-widest text-brand-accent mb-4">
          Content pillars
        </p>
        <h2 className="text-3xl md:text-4xl tracking-tight mb-10">
          <span className="font-editorial text-white" style={{ fontStyle: 'italic' }}>What we</span>{' '}
          <span className="font-sans font-bold text-brand-accent">cover</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.key}
              className="p-6 rounded-xl border border-brand-border bg-brand-card"
            >
              <div className="w-8 h-0.5 bg-brand-accent mb-4" />
              <h3 className="font-bold text-white mb-2">{pillar.label}</h3>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* What this is NOT */}
      <AnimatedSection className="mt-20">
        <div className="h-px bg-brand-border mb-12" />
        <h2 className="text-3xl md:text-4xl tracking-tight mb-8">
          <span className="font-editorial text-white" style={{ fontStyle: 'italic' }}>What this is</span>{' '}
          <span className="font-sans font-bold text-brand-accent">not</span>
        </h2>
        <div className="max-w-2xl space-y-4">
          <p className="text-brand-text/80 text-lg leading-relaxed">
            This isn&apos;t a coaching service. I&apos;m not selling you a program (yet).
            I&apos;m not a doctor, and nothing here is medical advice.
          </p>
          <p className="text-brand-text/80 text-lg leading-relaxed">
            This is a place where fitness meets actual science, and bad advice
            gets called out. Where &ldquo;because a jacked guy on TikTok said so&rdquo;
            isn&apos;t good enough. Where we read the boring papers so you can get
            the interesting takeaways.
          </p>
          <p className="text-brand-text/80 text-lg leading-relaxed">
            If you&apos;re looking for someone to confirm what you already believe,
            this probably isn&apos;t it. If you&apos;re looking for the truth — even when
            it&apos;s inconvenient — welcome in.
          </p>
        </div>
      </AnimatedSection>

      {/* Newsletter CTA */}
      <AnimatedSection className="mt-20">
        <div className="rounded-xl border border-brand-accent/20 bg-brand-accent/[0.03] p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl tracking-tight mb-2">
                <span className="font-editorial text-white" style={{ fontStyle: 'italic' }}>Stay in the</span>{' '}
                <span className="font-sans font-bold text-brand-accent">loop.</span>
              </h3>
              <p className="text-brand-text-muted">
                Get evidence-based fitness content delivered weekly. No spam, no fluff.
              </p>
            </div>
            <div>
              <NewsletterSignup compact />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      {/* Intro */}
      <AnimatedSection>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
          About Optimal Dose
        </h1>

        <div className="prose-od space-y-6">
          <p className="text-lg text-brand-text/80 leading-relaxed">
            I got tired of seeing the same recycled fitness advice with zero
            sources. Every Instagram infographic confidently stating &ldquo;facts&rdquo; that
            were either outdated, cherry-picked, or completely made up. Every
            supplement ad promising results that no study has ever demonstrated.
          </p>
          <p className="text-lg text-brand-text/80 leading-relaxed">
            So I started reading the actual papers. Not the abstracts — the full
            studies. The meta-analyses. The systematic reviews. And I realized
            something: the truth is usually more nuanced, more practical, and
            more useful than the simplified rules the fitness industry sells you.
          </p>
          <p className="text-lg text-brand-text/80 leading-relaxed">
            <strong className="text-white">Optimal Dose</strong> is what came
            out of that. It&apos;s a place where fitness meets actual science, where
            popular advice gets fact-checked, and where the answer to &ldquo;how
            much?&rdquo; is always &ldquo;here&apos;s what the evidence says.&rdquo;
          </p>
          <p className="text-lg text-brand-text/80 leading-relaxed">
            The name is the philosophy: there&apos;s an optimal dose for everything.
            Not the maximum. Not the minimum for survival. The dose that gives
            you the most return for the least cost — in training volume,
            nutrition, supplementation, and even information consumption.
          </p>
        </div>
      </AnimatedSection>

      {/* Content Pillars */}
      <AnimatedSection className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-8">
          What we cover
        </h2>
        <div className="space-y-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.key}
              className="flex gap-4 p-5 rounded-xl border border-brand-border bg-brand-card"
            >
              <span className="text-2xl shrink-0" aria-hidden="true">
                {pillar.icon}
              </span>
              <div>
                <h3 className="font-bold text-white mb-1">{pillar.label}</h3>
                <p className="text-sm text-brand-text-muted">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* What this is NOT */}
      <AnimatedSection className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">
          What this is <span className="text-brand-accent">not</span>
        </h2>
        <div className="prose-od space-y-4">
          <p className="text-brand-text/80">
            This isn&apos;t a coaching service. I&apos;m not selling you a program (yet).
            I&apos;m not a doctor, and nothing here is medical advice.
          </p>
          <p className="text-brand-text/80">
            This is a place where fitness meets actual science, and bad advice
            gets called out. Where &ldquo;because a jacked guy on TikTok said so&rdquo;
            isn&apos;t good enough. Where we read the boring papers so you can get
            the interesting takeaways.
          </p>
          <p className="text-brand-text/80">
            If you&apos;re looking for someone to confirm what you already believe,
            this probably isn&apos;t it. If you&apos;re looking for the truth — even when
            it&apos;s inconvenient — welcome in.
          </p>
        </div>
      </AnimatedSection>

      {/* Newsletter CTA */}
      <AnimatedSection className="mt-16">
        <div className="rounded-xl border border-brand-accent/20 bg-brand-accent/5 p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            Stay in the loop.
          </h3>
          <p className="text-brand-text-muted mb-6">
            Get evidence-based fitness content delivered weekly. No spam, no
            fluff.
          </p>
          <NewsletterSignup compact />
        </div>
      </AnimatedSection>
    </div>
  )
}

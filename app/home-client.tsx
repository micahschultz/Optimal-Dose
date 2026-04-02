'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import ArticleCard from '@/components/ArticleCard'
import PillarCard from '@/components/PillarCard'
import NewsletterSignup from '@/components/NewsletterSignup'
import type { Article } from '@/lib/mdx'

interface PillarData {
  key: string
  label: string
  color: string
  description: string
  href: string
}

interface HomeClientProps {
  featuredArticle: Article
  recentArticles: Article[]
  pillars: PillarData[]
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function HomeClient({
  featuredArticle,
  recentArticles,
  pillars,
}: HomeClientProps) {
  return (
    <>
      {/* Hero Section — asymmetric, editorial */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Subtle green accent line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32 relative w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
          >
            {/* Left: oversized headline */}
            <div className="lg:col-span-8">
              <motion.p
                variants={fadeUp}
                className="font-mono text-brand-accent text-xs mb-6 tracking-widest uppercase"
              >
                Fitness science without the BS
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight mb-8 leading-[0.95]"
              >
                <span className="font-editorial text-white" style={{ fontStyle: 'italic' }}>Your gym bro is</span>
                <br />
                <span className="font-sans font-bold text-brand-accent">wrong.</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-lg md:text-xl text-brand-text-muted mb-10 max-w-lg"
              >
                The right dose of training, nutrition, and industry truth — backed
                by evidence, not bro science.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a
                  href="/articles"
                  className="inline-flex items-center px-7 py-3.5 rounded-lg bg-brand-accent text-brand-bg font-bold text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-brand-accent/20 transition-all duration-200 glow-hover"
                >
                  Read the latest
                </a>
                <a
                  href="#newsletter"
                  className="inline-flex items-center px-7 py-3.5 rounded-lg border border-brand-accent/30 text-brand-accent font-bold text-sm uppercase tracking-wider hover:bg-brand-accent/5 transition-all duration-200"
                >
                  Subscribe
                </a>
              </motion.div>
            </div>

            {/* Right: large decorative number / stat */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-4 hidden lg:flex flex-col items-end text-right"
            >
              <span className="font-editorial text-[10rem] leading-none text-brand-accent/10" style={{ fontStyle: 'italic' }}>
                &amp;
              </span>
              <p className="font-mono text-xs text-brand-text-muted/50 tracking-widest uppercase mt-2">
                 <a href="https://instagram.com/micahschultz_" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">By Micah Schultz</a>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom green line */}
        <div className="absolute bottom-0 left-8 right-8 h-px bg-brand-accent/10" />
      </section>

      {/* Featured Article — full width, dramatic */}
      {featuredArticle && (
        <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-brand-accent/20" />
            <p className="font-mono text-xs uppercase tracking-widest text-brand-accent shrink-0">
              Featured
            </p>
            <div className="h-px flex-1 bg-brand-accent/20" />
          </div>
          <ArticleCard
            title={featuredArticle.frontmatter.title}
            excerpt={featuredArticle.frontmatter.excerpt}
            category={featuredArticle.frontmatter.category}
            date={featuredArticle.frontmatter.date}
            slug={featuredArticle.slug}
            readingTime={featuredArticle.readingTime}
            featured
          />
        </AnimatedSection>
      )}

      {/* Content Pillars — asymmetric layout */}
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: section header, left-aligned with dramatic whitespace */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <p className="font-mono text-xs uppercase tracking-widest text-brand-accent mb-4">
              What we cover
            </p>
            <h2 className="text-3xl md:text-4xl tracking-tight mb-4">
              <span className="font-editorial text-white" style={{ fontStyle: 'italic' }}>Four pillars.</span>
              <br />
              <span className="font-sans font-bold text-brand-accent">Zero fluff.</span>
            </h2>
            <p className="text-brand-text-muted text-base max-w-sm">
              Every piece of content falls into one of four categories — each
              designed to give you a different edge.
            </p>
          </div>

          {/* Right: pillar cards in a staggered 2-col grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.key} delay={i * 0.1}>
                <div className={i % 2 === 1 ? 'sm:mt-8' : ''}>
                  <PillarCard
                    title={pillar.label}
                    description={pillar.description}
                    href={pillar.href}
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Recent Articles */}
      {recentArticles.length > 0 && (
        <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 mb-24">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="text-2xl md:text-3xl tracking-tight">
              <span className="font-editorial text-white" style={{ fontStyle: 'italic' }}>Recent</span>{' '}
              <span className="font-sans font-bold text-white">articles</span>
            </h2>
            <a
              href="/articles"
              className="text-brand-accent text-sm font-bold uppercase tracking-wider underline-hover"
            >
              View all
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article, i) => (
              <AnimatedSection key={article.slug} delay={i * 0.1}>
                <ArticleCard
                  title={article.frontmatter.title}
                  excerpt={article.frontmatter.excerpt}
                  category={article.frontmatter.category}
                  date={article.frontmatter.date}
                  slug={article.slug}
                  readingTime={article.readingTime}
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      )}

      {/* Newsletter CTA — editorial, dramatic */}
      <section id="newsletter" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent/[0.03]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-brand-accent/20" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-accent/20" />

        <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-widest text-brand-accent mb-4">
                Newsletter
              </p>
              <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
                <span className="font-editorial text-white" style={{ fontStyle: 'italic' }}>Get your</span>
                <br />
                <span className="font-sans font-bold text-brand-accent">weekly dose.</span>
              </h2>
              <p className="text-brand-text-muted text-base">
                One email per week. Real research. Zero bro science.
                Unsubscribe anytime.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="max-w-md lg:ml-auto">
                <NewsletterSignup />
                <p className="text-brand-text-muted/40 text-xs mt-4 font-mono tracking-wider">
                  Join 500+ evidence-based lifters
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}

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
  icon: string
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
    transition: { staggerChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function HomeClient({
  featuredArticle,
  recentArticles,
  pillars,
}: HomeClientProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="font-mono text-brand-accent text-sm mb-4 tracking-wider uppercase"
            >
              Fitness science without the BS
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.05]"
            >
              Your gym bro is wrong.{' '}
              <span className="text-brand-accent">Here&apos;s what the research actually says.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-brand-text/70 mb-8 max-w-2xl"
            >
              The right dose of training, nutrition, and industry truth — backed
              by evidence, not bro science.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="/articles"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-brand-accent text-brand-bg font-semibold hover:bg-brand-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-brand-accent/20"
              >
                Read the latest
              </a>
              <a
                href="#newsletter"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-brand-border text-white font-semibold hover:border-brand-accent/40 hover:text-brand-accent transition-all duration-200"
              >
                Subscribe
              </a>
            </motion.div>
          </motion.div>

          {/* Floating molecules decoration */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none" aria-hidden="true">
            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" className="opacity-20">
              <circle cx="150" cy="100" r="4" fill="#00D4AA" className="animate-glow-pulse" />
              <circle cx="200" cy="150" r="3" fill="#00D4AA" className="animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
              <circle cx="120" cy="180" r="5" fill="#00D4AA" className="animate-glow-pulse" style={{ animationDelay: '1s' }} />
              <circle cx="180" cy="220" r="3" fill="#00D4AA" className="animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
              <circle cx="250" cy="120" r="4" fill="#00D4AA" className="animate-glow-pulse" style={{ animationDelay: '0.7s' }} />
              <circle cx="100" cy="130" r="3" fill="#00D4AA" className="animate-glow-pulse" style={{ animationDelay: '1.2s' }} />
              <line x1="150" y1="100" x2="200" y2="150" stroke="#00D4AA" strokeWidth="0.5" opacity="0.4" />
              <line x1="200" y1="150" x2="180" y2="220" stroke="#00D4AA" strokeWidth="0.5" opacity="0.4" />
              <line x1="120" y1="180" x2="180" y2="220" stroke="#00D4AA" strokeWidth="0.5" opacity="0.4" />
              <line x1="150" y1="100" x2="250" y2="120" stroke="#00D4AA" strokeWidth="0.5" opacity="0.4" />
              <line x1="100" y1="130" x2="150" y2="100" stroke="#00D4AA" strokeWidth="0.5" opacity="0.4" />
              <line x1="100" y1="130" x2="120" y2="180" stroke="#00D4AA" strokeWidth="0.5" opacity="0.4" />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
          <p className="font-mono text-xs uppercase tracking-wider text-brand-text-muted mb-6">
            Featured
          </p>
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

      {/* Content Pillars */}
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Four pillars. Zero fluff.
          </h2>
          <p className="text-brand-text-muted text-lg max-w-2xl mx-auto">
            Every piece of content falls into one of four categories — each designed
            to give you a different edge.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.key} delay={i * 0.1}>
              <PillarCard
                title={pillar.label}
                description={pillar.description}
                icon={pillar.icon}
                color={pillar.color}
                href={pillar.href}
              />
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      {/* Recent Articles */}
      {recentArticles.length > 0 && (
        <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Recent articles
            </h2>
            <a
              href="/articles"
              className="text-brand-accent text-sm font-medium hover:underline underline-offset-4"
            >
              View all articles &rarr;
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

      {/* Newsletter CTA */}
      <section id="newsletter" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent/5 border-y border-brand-accent/10" />
        <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 py-20 relative">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Get your weekly dose.
            </h2>
            <p className="text-brand-text-muted text-lg mb-8">
              One email per week. Real research. Zero bro science. Unsubscribe
              anytime.
            </p>
            <NewsletterSignup />
            <p className="text-brand-text-muted/50 text-sm mt-4 font-mono">
              Join 500+ evidence-based lifters
            </p>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}

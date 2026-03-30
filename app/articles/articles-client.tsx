'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import ArticleCard from '@/components/ArticleCard'
import AnimatedSection from '@/components/AnimatedSection'
import { CATEGORIES, CategoryKey } from '@/lib/constants'
import type { Article } from '@/lib/mdx'

interface ArticlesClientProps {
  articles: Article[]
}

const categoryKeys = Object.keys(CATEGORIES) as CategoryKey[]

export default function ArticlesClient({ articles }: ArticlesClientProps) {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category') as CategoryKey | null
  const [activeCategory, setActiveCategory] = useState<CategoryKey | 'all'>(
    initialCategory && categoryKeys.includes(initialCategory)
      ? initialCategory
      : 'all'
  )
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = articles.filter((article) => {
    const matchesCategory =
      activeCategory === 'all' || article.frontmatter.category === activeCategory
    const matchesSearch =
      !searchQuery ||
      article.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.frontmatter.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <AnimatedSection>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Articles
        </h1>
        <p className="text-brand-text-muted text-lg mb-10 max-w-2xl">
          Research-backed takes on training, nutrition, and the business of
          wellness. No fluff. No bro science.
        </p>
      </AnimatedSection>

      {/* Filters */}
      <AnimatedSection delay={0.1} className="mb-10">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
            <button
              role="tab"
              aria-selected={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-brand-accent text-brand-bg'
                  : 'bg-brand-card border border-brand-border text-brand-text-muted hover:text-white hover:border-brand-accent/30'
              }`}
            >
              All
            </button>
            {categoryKeys.map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={activeCategory === key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === key
                    ? 'bg-brand-accent text-brand-bg'
                    : 'bg-brand-card border border-brand-border text-brand-text-muted hover:text-white hover:border-brand-accent/30'
                }`}
              >
                {CATEGORIES[key].label}
              </button>
            ))}
          </div>
          <div className="relative">
            <label htmlFor="article-search" className="sr-only">
              Search articles
            </label>
            <input
              id="article-search"
              type="search"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 px-4 py-2 pl-10 rounded-lg bg-brand-card border border-brand-border text-white placeholder:text-brand-text-muted/50 focus:outline-none focus:border-brand-accent focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)] transition-all text-sm"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
        </div>
      </AnimatedSection>

      {/* Article Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory + searchQuery}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article) => (
                <ArticleCard
                  key={article.slug}
                  title={article.frontmatter.title}
                  excerpt={article.frontmatter.excerpt}
                  category={article.frontmatter.category}
                  date={article.frontmatter.date}
                  slug={article.slug}
                  readingTime={article.readingTime}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-brand-text-muted text-lg">
                No articles found. Try a different filter or search term.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

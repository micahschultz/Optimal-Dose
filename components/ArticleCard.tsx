import Link from 'next/link'
import CategoryTag from './CategoryTag'
import { CategoryKey } from '@/lib/constants'

interface ArticleCardProps {
  title: string
  excerpt: string
  category: CategoryKey
  date: string
  slug: string
  readingTime: string
  featured?: boolean
}

export default function ArticleCard({
  title,
  excerpt,
  category,
  date,
  slug,
  readingTime,
  featured = false,
}: ArticleCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  if (featured) {
    return (
      <Link href={`/articles/${slug}`} className="group block">
        <article className="relative overflow-hidden rounded-2xl border border-brand-border bg-brand-card p-8 md:p-12 transition-all duration-300 hover:border-brand-accent/30 hover:shadow-lg hover:shadow-brand-accent/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <CategoryTag category={category} size="md" />
              <span className="text-sm font-mono text-brand-text-muted">
                {formattedDate}
              </span>
              <span className="text-sm font-mono text-brand-text-muted">
                {readingTime}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight group-hover:text-brand-accent transition-colors duration-300">
              {title}
            </h2>
            <p className="text-lg text-brand-text/70 mb-6 max-w-2xl">
              {excerpt}
            </p>
            <span className="inline-flex items-center text-brand-accent font-medium group-hover:gap-3 gap-2 transition-all duration-300">
              Read more
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/articles/${slug}`} className="group block">
      <article className="h-full rounded-xl border border-brand-border bg-brand-card p-6 transition-all duration-300 hover:border-brand-accent/30 hover:shadow-lg hover:shadow-brand-accent/5 hover:-translate-y-1">
        <div className="flex items-center gap-3 mb-3">
          <CategoryTag category={category} />
          <span className="text-xs font-mono text-brand-text-muted">
            {readingTime}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-brand-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-brand-text/60 mb-4 line-clamp-3">{excerpt}</p>
        <span className="text-xs font-mono text-brand-text-muted">{formattedDate}</span>
      </article>
    </Link>
  )
}

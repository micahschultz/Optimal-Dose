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
        <article className="relative overflow-hidden rounded-xl border border-brand-border bg-brand-card p-8 md:p-12 transition-all duration-300 hover:border-brand-accent/30 glow-hover">
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <CategoryTag category={category} size="md" />
              <span className="text-sm font-mono text-brand-text-muted">
                {formattedDate}
              </span>
              <span className="text-sm font-mono text-brand-text-muted">
                {readingTime}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-white mb-4 leading-tight group-hover:text-brand-accent transition-colors duration-300 font-editorial" style={{ fontStyle: 'italic' }}>
              {title}
            </h2>
            <p className="text-lg text-brand-text-muted mb-8 max-w-2xl">
              {excerpt}
            </p>
            <span className="inline-flex items-center text-brand-accent font-bold text-sm uppercase tracking-wider group-hover:gap-3 gap-2 transition-all duration-300">
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
      <article className="h-full rounded-xl border border-brand-border bg-brand-card p-6 transition-all duration-300 hover:border-brand-accent/30 hover:-translate-y-1 glow-hover">
        <div className="flex items-center gap-3 mb-4">
          <CategoryTag category={category} />
          <span className="text-xs font-mono text-brand-text-muted">
            {readingTime}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-brand-accent transition-colors duration-300 underline-hover pb-0.5">
          {title}
        </h3>
        <p className="text-sm text-brand-text-muted mb-4 line-clamp-3">{excerpt}</p>
        <span className="text-xs font-mono text-brand-text-muted/60">{formattedDate}</span>
      </article>
    </Link>
  )
}

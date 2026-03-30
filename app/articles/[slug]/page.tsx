import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { getArticleBySlug, getArticleSlugs } from '@/lib/mdx'
import { CATEGORIES, SITE_NAME, SITE_URL } from '@/lib/constants'
import CategoryTag from '@/components/CategoryTag'
import ReadingProgressBar from '@/components/ReadingProgressBar'
import TableOfContents from '@/components/TableOfContents'
import NewsletterSignup from '@/components/NewsletterSignup'
import CalloutBox from '@/components/CalloutBox'
import AnimatedSection from '@/components/AnimatedSection'
import ShareButtons from './share-buttons'

interface ArticlePageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  try {
    const article = getArticleBySlug(params.slug)
    const category = CATEGORIES[article.frontmatter.category]
    return {
      title: article.frontmatter.title,
      description: article.frontmatter.excerpt,
      openGraph: {
        title: article.frontmatter.title,
        description: article.frontmatter.excerpt,
        type: 'article',
        publishedTime: article.frontmatter.date,
        authors: [article.frontmatter.author],
        tags: [category?.label],
        url: `${SITE_URL}/articles/${params.slug}`,
      },
      twitter: {
        card: 'summary_large_image',
        title: article.frontmatter.title,
        description: article.frontmatter.excerpt,
      },
    }
  } catch {
    return { title: 'Article Not Found' }
  }
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const mdxComponents = {
  CalloutBox,
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = slugify(String(children))
    return (
      <h2 id={id} {...props}>
        {children}
      </h2>
    )
  },
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = slugify(String(children))
    return (
      <h3 id={id} {...props}>
        {children}
      </h3>
    )
  },
}

export default function ArticlePage({ params }: ArticlePageProps) {
  let article
  try {
    article = getArticleBySlug(params.slug)
  } catch {
    notFound()
  }

  const allSlugs = getArticleSlugs()
  const currentIndex = allSlugs.indexOf(params.slug)
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null
  const nextSlug =
    currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null

  const prevArticle = prevSlug ? getArticleBySlug(prevSlug) : null
  const nextArticle = nextSlug ? getArticleBySlug(nextSlug) : null

  const formattedDate = new Date(article.frontmatter.date).toLocaleDateString(
    'en-US',
    { month: 'long', day: 'numeric', year: 'numeric' }
  )

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.frontmatter.title,
    description: article.frontmatter.excerpt,
    datePublished: article.frontmatter.date,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgressBar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="flex gap-12">
          {/* Main content */}
          <article className="flex-1 min-w-0 max-w-[680px] mx-auto xl:mx-0">
            {/* Header */}
            <AnimatedSection>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <CategoryTag
                    category={article.frontmatter.category}
                    size="md"
                  />
                  <span className="text-sm font-mono text-brand-text-muted">
                    {formattedDate}
                  </span>
                  <span className="text-sm font-mono text-brand-text-muted">
                    {article.readingTime}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
                  {article.frontmatter.title}
                </h1>
                <p className="text-lg text-brand-text/60">
                  {article.frontmatter.excerpt}
                </p>
              </div>
              <hr className="border-brand-border mb-10" />
            </AnimatedSection>

            {/* MDX Content */}
            <AnimatedSection delay={0.1}>
              <div className="prose-od">
                <MDXRemote
                  source={article.content}
                  components={mdxComponents}
                />
              </div>
            </AnimatedSection>

            {/* Share buttons */}
            <AnimatedSection delay={0.2}>
              <ShareButtons
                title={article.frontmatter.title}
                slug={article.slug}
              />
            </AnimatedSection>

            {/* Prev / Next */}
            <nav
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4"
              aria-label="Article navigation"
            >
              {prevArticle && (
                <Link
                  href={`/articles/${prevArticle.slug}`}
                  className="group p-4 rounded-xl border border-brand-border bg-brand-card hover:border-brand-accent/30 transition-all"
                >
                  <p className="text-xs font-mono text-brand-text-muted mb-1">
                    &larr; Previous
                  </p>
                  <p className="text-sm font-semibold text-white group-hover:text-brand-accent transition-colors line-clamp-2">
                    {prevArticle.frontmatter.title}
                  </p>
                </Link>
              )}
              {nextArticle && (
                <Link
                  href={`/articles/${nextArticle.slug}`}
                  className="group p-4 rounded-xl border border-brand-border bg-brand-card hover:border-brand-accent/30 transition-all sm:text-right sm:col-start-2"
                >
                  <p className="text-xs font-mono text-brand-text-muted mb-1">
                    Next &rarr;
                  </p>
                  <p className="text-sm font-semibold text-white group-hover:text-brand-accent transition-colors line-clamp-2">
                    {nextArticle.frontmatter.title}
                  </p>
                </Link>
              )}
            </nav>

            {/* Newsletter CTA */}
            <AnimatedSection className="mt-16">
              <div className="rounded-xl border border-brand-accent/20 bg-brand-accent/5 p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Enjoyed this? Get your weekly dose.
                </h3>
                <p className="text-brand-text-muted mb-6">
                  One email per week. Real research. Zero bro science.
                </p>
                <NewsletterSignup compact />
              </div>
            </AnimatedSection>
          </article>

          {/* Table of Contents sidebar */}
          <aside className="hidden xl:block w-64 shrink-0">
            <TableOfContents />
          </aside>
        </div>
      </div>
    </>
  )
}

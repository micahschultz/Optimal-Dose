import { Suspense } from 'react'
import { getAllArticles } from '@/lib/mdx'
import type { Metadata } from 'next'
import ArticlesClient from './articles-client'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Evidence-based fitness articles covering myth busting, training programming, supplement industry analysis, and practical tips.',
}

export default function ArticlesPage() {
  const articles = getAllArticles()
  return (
    <Suspense>
      <ArticlesClient articles={articles} />
    </Suspense>
  )
}

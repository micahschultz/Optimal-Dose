import { getAllArticles } from '@/lib/mdx'
import { CATEGORIES, CategoryKey } from '@/lib/constants'
import HomeClient from './home-client'

export default function HomePage() {
  const articles = getAllArticles()
  const featuredArticle = articles.find((a) => a.frontmatter.featured) || articles[0]
  const recentArticles = articles.filter((a) => a.slug !== featuredArticle?.slug).slice(0, 6)

  const pillars = (Object.keys(CATEGORIES) as CategoryKey[]).map((key) => ({
    key,
    ...CATEGORIES[key],
    href: `/articles?category=${key}`,
  }))

  return (
    <HomeClient
      featuredArticle={featuredArticle}
      recentArticles={recentArticles}
      pillars={pillars}
    />
  )
}

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { CategoryKey } from './constants'

const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles')

export interface ArticleFrontmatter {
  title: string
  date: string
  category: CategoryKey
  excerpt: string
  author: string
  featured?: boolean
}

export interface Article {
  slug: string
  frontmatter: ArticleFrontmatter
  readingTime: string
  content: string
}

export function getArticleSlugs(): string[] {
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

export function getArticleBySlug(slug: string): Article {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const stats = readingTime(content)

  return {
    slug,
    frontmatter: data as ArticleFrontmatter,
    readingTime: stats.text,
    content,
  }
}

export function getAllArticles(): Article[] {
  const slugs = getArticleSlugs()
  return slugs
    .map((slug) => getArticleBySlug(slug))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )
}

export function getArticlesByCategory(category: CategoryKey): Article[] {
  return getAllArticles().filter(
    (article) => article.frontmatter.category === category
  )
}

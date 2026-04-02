export const SITE_NAME = 'optimaldose.'
export const SITE_TAGLINE = 'The right dose of fitness science.'
export const SITE_DESCRIPTION =
  'Fitness science without the BS — the right dose of training, nutrition, and industry truth.'
export const SITE_URL = 'https://optimaldose.co'

export const CATEGORIES = {
  'myth-busting': {
    label: 'Myth Busting',
    color: '#00BF63',
    description: 'We read the studies so you don\'t have to.',
  },
  programming: {
    label: 'Programming',
    color: '#00BF63',
    description: 'Evidence-based training that actually works.',
  },
  'industry-intel': {
    label: 'Industry Intel',
    color: '#00BF63',
    description: 'Following the money in wellness.',
  },
  'daily-dose': {
    label: 'Daily Dose',
    color: '#00BF63',
    description: 'Quick, practical tips that compound.',
  },
} as const

export type CategoryKey = keyof typeof CATEGORIES

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/articles', label: 'Articles' },
  { href: '/about', label: 'About' },
  { href: '/newsletter', label: 'Newsletter' },
] as const

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/optimaldose',
  instagram: 'https://instagram.com/optimal-dose',
} as const

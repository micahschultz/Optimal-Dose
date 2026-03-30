export const SITE_NAME = 'Optimal Dose'
export const SITE_TAGLINE = 'The right dose of fitness science.'
export const SITE_DESCRIPTION =
  'Fitness science without the BS — the right dose of training, nutrition, and industry truth.'
export const SITE_URL = 'https://optimaldose.co'

export const CATEGORIES = {
  'myth-busting': {
    label: 'Myth Busting',
    color: '#FF6B6B',
    description: 'We read the studies so you don\'t have to.',
    icon: '🔬',
  },
  programming: {
    label: 'Programming',
    color: '#4ECDC4',
    description: 'Evidence-based training that actually works.',
    icon: '📊',
  },
  'industry-intel': {
    label: 'Industry Intel',
    color: '#FFE66D',
    description: 'Following the money in wellness.',
    icon: '💰',
  },
  'daily-dose': {
    label: 'Daily Dose',
    color: '#A78BFA',
    description: 'Quick, practical tips that compound.',
    icon: '⚡',
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
  instagram: 'https://instagram.com/optimaldose',
} as const

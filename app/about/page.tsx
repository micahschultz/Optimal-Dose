import type { Metadata } from 'next'
import AboutClient from './about-client'

export const metadata: Metadata = {
  title: 'About',
  description:
    'The story behind Optimal Dose — why we started, what we believe, and what this is (and isn\'t).',
}

export default function AboutPage() {
  return <AboutClient />
}

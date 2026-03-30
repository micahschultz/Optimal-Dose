import type { Metadata } from 'next'
import NewsletterClient from './newsletter-client'

export const metadata: Metadata = {
  title: 'Newsletter',
  description:
    'Subscribe to Optimal Dose — a weekly newsletter delivering evidence-based fitness science straight to your inbox.',
}

export default function NewsletterPage() {
  return <NewsletterClient />
}

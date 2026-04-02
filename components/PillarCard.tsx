'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface PillarCardProps {
  title: string
  description: string
  href: string
}

export default function PillarCard({
  title,
  description,
  href,
}: PillarCardProps) {
  return (
    <Link href={href} className="group block">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="h-full rounded-xl border border-brand-border bg-brand-card p-6 transition-all duration-300 hover:border-brand-accent/30 glow-hover"
      >
        {/* Thin green accent line at top */}
        <div className="w-8 h-0.5 bg-brand-accent mb-5" />
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-brand-text-muted leading-relaxed">
          {description}
        </p>
      </motion.div>
    </Link>
  )
}

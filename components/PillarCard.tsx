'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface PillarCardProps {
  title: string
  description: string
  icon: string
  color: string
  href: string
}

export default function PillarCard({
  title,
  description,
  icon,
  color,
  href,
}: PillarCardProps) {
  return (
    <Link href={href} className="group block">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="h-full rounded-xl border border-brand-border bg-brand-card p-6 transition-colors duration-300 hover:border-opacity-40"
        style={{ '--pillar-color': color } as React.CSSProperties}
      >
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4"
          style={{ backgroundColor: `${color}15` }}
          aria-hidden="true"
        >
          {icon}
        </div>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:transition-colors group-hover:duration-300" style={{ color: undefined }}>
          <span className="group-hover:text-brand-accent transition-colors duration-300">{title}</span>
        </h3>
        <p className="text-sm text-brand-text-muted leading-relaxed">
          {description}
        </p>
      </motion.div>
    </Link>
  )
}

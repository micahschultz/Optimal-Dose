'use client'

import { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <>
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          id="main-content"
          className="flex-1 pt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}

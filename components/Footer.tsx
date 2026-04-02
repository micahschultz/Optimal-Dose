import Link from 'next/link'
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-brand-border mt-24" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-brand-accent text-xl tracking-tight">
              <span className="font-editorial" style={{ fontStyle: 'italic' }}>optimal</span>
              <span className="font-sans font-bold">dose.</span>
            </Link>
            <p className="text-brand-text-muted text-sm mt-3 max-w-xs">
              Fitness science without the BS. The right dose of training,
              nutrition, and industry truth.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-brand-text-muted mb-4">
              Navigate
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-text/60 hover:text-brand-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-brand-text-muted mb-4">
              Follow
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-text/60 hover:text-brand-accent transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-text/60 hover:text-brand-accent transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Thin green divider */}
        <div className="mt-12 mb-8 h-px bg-brand-accent/20" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-text-muted/60">
            &copy; {new Date().getFullYear()} optimaldose. All rights reserved.
          </p>
          <p className="text-xs text-brand-text-muted/40 font-mono">
            Built with science, not supplements.
          </p>
        </div>
      </div>
    </footer>
  )
}

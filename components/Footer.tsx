import Link from 'next/link'
import { SITE_NAME, SITE_TAGLINE, NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-brand-border mt-24" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-white font-bold text-lg tracking-tight">
              {SITE_NAME}
            </Link>
            <p className="text-brand-text-muted text-sm mt-2">{SITE_TAGLINE}</p>
          </div>

          {/* Links */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-brand-text-muted mb-3">
              Navigate
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-text/70 hover:text-brand-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-brand-text-muted mb-3">
              Follow
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-text/70 hover:text-brand-accent transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-text/70 hover:text-brand-accent transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-text-muted">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-brand-text-muted/60 font-mono">
            Built with science, not supplements.
          </p>
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-mono text-brand-accent text-sm mb-4">404</p>
        <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
          Page not found
        </h1>
        <p className="text-brand-text-muted mb-8">
          This page doesn&apos;t exist. Maybe the dose was too high.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-brand-accent text-brand-bg font-semibold hover:bg-brand-accent/90 transition-all"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}

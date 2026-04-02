import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-mono text-brand-accent text-xs tracking-widest uppercase mb-6">404</p>
        <h1 className="text-6xl md:text-8xl tracking-tight mb-6">
          <span className="font-editorial text-white" style={{ fontStyle: 'italic' }}>Page not</span>
          <br />
          <span className="font-sans font-bold text-brand-accent">found.</span>
        </h1>
        <p className="text-brand-text-muted mb-10 max-w-sm mx-auto">
          This page doesn&apos;t exist. Maybe the dose was too high.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-7 py-3.5 rounded-lg bg-brand-accent text-brand-bg font-bold text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-brand-accent/20 transition-all glow-hover"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}

'use client'

interface ShareButtonsProps {
  title: string
  slug: string
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  return (
    <div className="mt-12 pt-8 border-t border-brand-border">
      <p className="font-mono text-xs uppercase tracking-widest text-brand-text-muted mb-4">
        Share this article
      </p>
      <div className="flex gap-3">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            title
          )}&url=${encodeURIComponent(
            `https://optimaldose.co/articles/${slug}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-card border border-brand-border text-sm text-brand-text-muted hover:text-brand-accent hover:border-brand-accent/30 transition-all"
        >
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Share on X
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText(window.location.href)
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-card border border-brand-border text-sm text-brand-text-muted hover:text-brand-accent hover:border-brand-accent/30 transition-all"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-3.061a4.5 4.5 0 00-1.242-7.244l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757"
            />
          </svg>
          Copy link
        </button>
      </div>
    </div>
  )
}

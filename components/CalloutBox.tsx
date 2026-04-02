import { ReactNode } from 'react'

interface CalloutBoxProps {
  type?: 'takeaway' | 'warning' | 'tip'
  children: ReactNode
}

const styles = {
  takeaway: {
    border: 'border-brand-accent/40',
    bg: 'bg-brand-accent/5',
    label: 'Key Takeaway',
    labelColor: 'text-brand-accent',
  },
  warning: {
    border: 'border-brand-accent/30',
    bg: 'bg-brand-accent/[0.03]',
    label: 'Watch Out',
    labelColor: 'text-brand-accent',
  },
  tip: {
    border: 'border-brand-accent/30',
    bg: 'bg-brand-accent/[0.03]',
    label: 'Pro Tip',
    labelColor: 'text-brand-accent',
  },
}

export default function CalloutBox({ type = 'takeaway', children }: CalloutBoxProps) {
  const s = styles[type]

  return (
    <aside
      className={`my-8 rounded-xl border ${s.border} ${s.bg} p-6`}
      role="note"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
        <span className={`font-mono font-bold text-xs uppercase tracking-widest ${s.labelColor}`}>
          {s.label}
        </span>
      </div>
      <div className="text-brand-text/90 text-base leading-relaxed">
        {children}
      </div>
    </aside>
  )
}

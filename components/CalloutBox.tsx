import { ReactNode } from 'react'

interface CalloutBoxProps {
  type?: 'takeaway' | 'warning' | 'tip'
  children: ReactNode
}

const styles = {
  takeaway: {
    border: 'border-brand-accent',
    bg: 'bg-brand-accent/5',
    icon: '💡',
    label: 'Key Takeaway',
    labelColor: 'text-brand-accent',
  },
  warning: {
    border: 'border-yellow-500/40',
    bg: 'bg-yellow-500/5',
    icon: '⚠️',
    label: 'Watch Out',
    labelColor: 'text-yellow-400',
  },
  tip: {
    border: 'border-blue-400/40',
    bg: 'bg-blue-400/5',
    icon: '📌',
    label: 'Pro Tip',
    labelColor: 'text-blue-400',
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
        <span className="text-lg" aria-hidden="true">{s.icon}</span>
        <span className={`font-mono font-semibold text-sm uppercase tracking-wider ${s.labelColor}`}>
          {s.label}
        </span>
      </div>
      <div className="text-brand-text/90 text-base leading-relaxed">
        {children}
      </div>
    </aside>
  )
}

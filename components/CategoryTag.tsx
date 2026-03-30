import { CATEGORIES, CategoryKey } from '@/lib/constants'

interface CategoryTagProps {
  category: CategoryKey
  size?: 'sm' | 'md'
}

export default function CategoryTag({ category, size = 'sm' }: CategoryTagProps) {
  const cat = CATEGORIES[category]
  if (!cat) return null

  return (
    <span
      className={`inline-flex items-center font-mono font-medium rounded-full border ${
        size === 'sm' ? 'text-xs px-2.5 py-0.5' : 'text-sm px-3 py-1'
      }`}
      style={{
        color: cat.color,
        borderColor: `${cat.color}33`,
        backgroundColor: `${cat.color}11`,
      }}
    >
      {cat.label}
    </span>
  )
}

import { FilterType } from '../App'

interface TaskFilterProps {
  activeFilter: FilterType
  setFilter: (filter: FilterType) => void
}

export default function TaskFilter({ activeFilter, setFilter }: TaskFilterProps) {
  const filters: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
  ]
  
  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => setFilter(filter.value)}
          className={`
            px-3 py-1.5 text-sm font-medium
            ${filter.value === 'all' ? 'rounded-l-md' : ''}
            ${filter.value === 'completed' ? 'rounded-r-md' : ''}
            ${activeFilter === filter.value 
              ? 'bg-primary-500 text-white hover:bg-primary-600 z-10' 
              : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'}
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1
            transition-colors duration-200
          `}
          aria-current={activeFilter === filter.value ? 'page' : undefined}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}
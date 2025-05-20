import { Task } from '../App'
import TaskItem from './TaskItem'
import { motion, AnimatePresence } from 'framer-motion'

interface TaskListProps {
  tasks: Task[]
  onDelete: (id: string) => void
  onToggle: (id: string) => void
  onEdit: (id: string, newText: string) => void
}

export default function TaskList({ tasks, onDelete, onToggle, onEdit }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 dark:text-gray-400">No tasks to display</p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
          Add a new task to get started
        </p>
      </div>
    )
  }

  return (
    <ul className="space-y-3">
      <AnimatePresence initial={false}>
        {tasks.map((task) => (
          <motion.li
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            layout
          >
            <TaskItem
              task={task}
              onDelete={onDelete}
              onToggle={onToggle}
              onEdit={onEdit}
            />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  )
}
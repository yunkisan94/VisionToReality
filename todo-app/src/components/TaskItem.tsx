import { useState, useRef, useEffect, KeyboardEvent } from 'react'
import { Check, Trash2, Edit, X } from 'lucide-react'
import { Task } from '../App'
import { motion } from 'framer-motion'

interface TaskItemProps {
  task: Task
  onDelete: (id: string) => void
  onToggle: (id: string) => void
  onEdit: (id: string, newText: string) => void
}

export default function TaskItem({ task, onDelete, onToggle, onEdit }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(task.text)
  const inputRef = useRef<HTMLInputElement>(null)
  
  // Focus input when editing mode is activated
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])
  
  const handleEdit = () => {
    setIsEditing(true)
    setEditText(task.text)
  }
  
  const handleSave = () => {
    if (editText.trim() && editText !== task.text) {
      onEdit(task.id, editText)
    } else {
      setEditText(task.text)
    }
    setIsEditing(false)
  }
  
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      setIsEditing(false)
      setEditText(task.text)
    }
  }
  
  // Format date in a readable format
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  return (
    <div className={`
      todo-item
      ${task.completed ? 'border-l-4 border-l-green-500 dark:border-l-green-600' : ''}
    `}>
      <div className="flex items-start gap-3">
        {/* Checkbox */}
        <div className="pt-1">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => onToggle(task.id)}
            className={`
              flex h-6 w-6 items-center justify-center rounded-full border-2 
              ${task.completed
                ? 'border-green-500 bg-green-500 text-white dark:border-green-600 dark:bg-green-600'
                : 'border-gray-300 dark:border-gray-600'}
              hover:border-primary-500 dark:hover:border-primary-400
              focus-ring
              transition-colors
            `}
            aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
          >
            {task.completed && <Check className="h-4 w-4" />}
          </motion.button>
        </div>
        
        {/* Task Content */}
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={handleSave}
                className="input w-full"
                aria-label="Edit task"
              />
              <button 
                onClick={handleSave}
                className="p-1.5 rounded-full bg-green-500 text-white hover:bg-green-600 focus-ring"
                aria-label="Save edits"
              >
                <Check className="h-4 w-4" />
              </button>
              <button 
                onClick={() => {
                  setIsEditing(false)
                  setEditText(task.text)
                }}
                className="p-1.5 rounded-full bg-gray-500 text-white hover:bg-gray-600 focus-ring"
                aria-label="Cancel editing"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <>
              <p className={`
                text-gray-900 dark:text-gray-100 break-words
                ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}
              `}>
                {task.text}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {formatDate(task.createdAt)}
              </p>
            </>
          )}
        </div>
        
        {/* Actions */}
        {!isEditing && (
          <div className="flex space-x-1">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleEdit}
              className="p-1.5 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-300 focus-ring"
              aria-label="Edit task"
            >
              <Edit className="h-4 w-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onDelete(task.id)}
              className="p-1.5 rounded-full text-red-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/30 dark:hover:text-red-400 focus-ring"
              aria-label="Delete task"
            >
              <Trash2 className="h-4 w-4" />
            </motion.button>
          </div>
        )}
      </div>
    </div>
  )
}
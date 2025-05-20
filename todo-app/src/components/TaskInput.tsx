import { useState, KeyboardEvent } from 'react'
import { Plus } from 'lucide-react'
import { motion } from 'framer-motion'

interface TaskInputProps {
  onAddTask: (text: string) => void
}

export default function TaskInput({ onAddTask }: TaskInputProps) {
  const [text, setText] = useState('')
  
  const handleSubmit = () => {
    if (text.trim()) {
      onAddTask(text)
      setText('')
    }
  }
  
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }
  
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="input block w-full pr-12 shadow-md dark:shadow-gray-900/30"
        aria-label="Add a new task"
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSubmit}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-primary-500 p-1.5 text-white hover:bg-primary-600 focus-ring transition-colors"
        aria-label="Add task"
        disabled={!text.trim()}
      >
        <Plus className="h-4 w-4" />
      </motion.button>
    </div>
  )
}
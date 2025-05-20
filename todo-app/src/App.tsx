import { useState, useEffect } from 'react'
import { ThemeProvider } from './components/ThemeProvider'
import Header from './components/Header'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'

// Define the Task type
export interface Task {
  id: string
  text: string
  completed: boolean
  createdAt: Date
}

// Filter types
export type FilterType = 'all' | 'active' | 'completed'

function App() {
  // State for tasks, filtered tasks, and current filter
  const [tasks, setTasks] = useState<Task[]>(() => {
    // Load tasks from localStorage on initial render
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      return JSON.parse(savedTasks).map((task: any) => ({
        ...task,
        createdAt: new Date(task.createdAt)
      }))
    }
    return []
  })
  
  const [filter, setFilter] = useState<FilterType>('all')
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks)
  
  // Update localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    
    // Filter tasks based on the current filter
    switch (filter) {
      case 'active':
        setFilteredTasks(tasks.filter(task => !task.completed))
        break
      case 'completed':
        setFilteredTasks(tasks.filter(task => task.completed))
        break
      default:
        setFilteredTasks(tasks)
    }
  }, [tasks, filter])
  
  // Add a new task
  const addTask = (text: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
      createdAt: new Date()
    }
    setTasks([newTask, ...tasks])
  }
  
  // Delete a task
  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  
  // Toggle task completion status
  const toggleTask = (id: string) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }
  
  // Edit a task
  const editTask = (id: string, newText: string) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, text: newText.trim() } : task
      )
    )
  }
  
  // Sort tasks by completion status or creation time
  const sortTasks = (sortBy: 'status' | 'time') => {
    let sortedTasks: Task[] = []
    
    if (sortBy === 'status') {
      // Sort by completion status (incomplete first)
      sortedTasks = [...tasks].sort((a, b) => {
        if (a.completed === b.completed) {
          return b.createdAt.getTime() - a.createdAt.getTime()
        }
        return a.completed ? 1 : -1
      })
    } else {
      // Sort by creation time (newest first)
      sortedTasks = [...tasks].sort((a, b) => 
        b.createdAt.getTime() - a.createdAt.getTime()
      )
    }
    
    setTasks(sortedTasks)
  }

  return (
    <ThemeProvider defaultTheme="light" storageKey="todo-theme">
      <div className="min-h-screen pb-8 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <Header />
        
        <main className="container max-w-md mx-auto pt-12 px-4">
          <TaskInput onAddTask={addTask} />
          
          <div className="mt-6 flex justify-between items-center">
            <TaskFilter 
              activeFilter={filter} 
              setFilter={setFilter} 
            />
            <div className="flex space-x-2">
              <button
                onClick={() => sortTasks('time')}
                className="btn btn-secondary text-xs px-2 py-1"
                aria-label="Sort by time"
              >
                Sort by Time
              </button>
              <button
                onClick={() => sortTasks('status')}
                className="btn btn-secondary text-xs px-2 py-1"
                aria-label="Sort by status"
              >
                Sort by Status
              </button>
            </div>
          </div>
          
          <div className="mt-4">
            <TaskList 
              tasks={filteredTasks} 
              onDelete={deleteTask}
              onToggle={toggleTask}
              onEdit={editTask}
            />
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
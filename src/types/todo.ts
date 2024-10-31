export interface ApiTodo {
  id: number
  todo: string
  userId: number
  completed: boolean
  status?: string
}

export interface Task {
  id: number
  title: string
  description?: string
  status: TaskStatus
  assignedUser: number | undefined
  messageCount: number
}

export type AccessLevel = "limited" | "private" | "public"

export type TaskStatus = "To Do" | "In Progress" | "Completed"

export type UpdateTaskPayload = {
  todo: string
  completed: boolean
  status?: TaskStatus
}

export interface TaskCounts {
  all: number
  todo: number
  inProgress: number
  completed: number
}
export interface TaskCardProps {
  task: Task
  onDelete: (id: number) => void
  onUpdate: (task: Task) => void
  onView: (task: Task) => void
  isDeleting: boolean
}
export interface TaskNavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  taskCounts: TaskCounts
  onNewTask: () => void
}
export interface UpdateTaskModalProps {
  isOpen: boolean
  onClose: () => void
  task: Task | null
  onUpdate: (id: number, updatedTask: UpdateTaskPayload) => void
  isUpdating: boolean
}

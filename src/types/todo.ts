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
  assignedUser: number
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

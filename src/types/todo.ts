export interface ApiTodo {
  id: number
  todo: string
  userId: number
  completed: boolean
  status?: string
}

export interface FormattedTodo {
  id: number
  title: string
  description: string
  status: "To Do" | "In Progress" | "Completed"
  messageCount: number
  assignedUser: number
}

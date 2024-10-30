import { create } from "zustand"

interface Task {
  id: number
  title: string
  description: string
  status: "To Do" | "In Progress" | "Completed"
  messageCount?: number
  assignedUser?: number
}

interface TaskStore {
  tasks: Task[]
  setTasks: (tasks: Task[]) => void
  addTask: (task: Omit<Task, "id">) => void
  updateTask: (id: number, updatedTask: Partial<Task>) => void
  deleteTask: (id: number) => void
  getTaskById: (id: number) => Task | undefined
}

export const tasksStore = create<TaskStore>((set, get) => ({
  tasks: [],

  setTasks: (tasks) => set({ tasks }),

  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, { ...task, id: Math.max(0, ...state.tasks.map((t) => t.id)) + 1 }],
    })),

  updateTask: (id, updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)),
    })),

  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),

  getTaskById: (id) => get().tasks.find((task) => task.id === id),
}))

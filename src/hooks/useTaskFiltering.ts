import { Task, TaskCounts } from "../types/todo"

export const useTaskFiltering = (tasks: Task[]) => {
  const getFilteredTasks = (activeTab: string) => {
    switch (activeTab) {
      case "todo":
        return tasks.filter((task) => task.status === "To Do")
      case "inProgress":
        return tasks.filter((task) => task.status === "In Progress")
      case "completed":
        return tasks.filter((task) => task.status === "Completed")
      default:
        return tasks
    }
  }

  const getTaskCounts = (): TaskCounts => ({
    all: tasks.length,
    todo: tasks.filter((task) => task.status === "To Do").length,
    inProgress: tasks.filter((task) => task.status === "In Progress").length,
    completed: tasks.filter((task) => task.status === "Completed").length,
  })

  return {
    getFilteredTasks,
    getTaskCounts,
  }
}

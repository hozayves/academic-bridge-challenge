import { keepPreviousData, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { tasksStore } from "../zustand"

// Add type definitions
interface ApiTodo {
  id: number
  todo: string
  userId: number
  completed: boolean
  status?: string
}

interface FormattedTodo {
  id: number
  title: string
  description: string
  status: "To Do" | "In Progress" | "Completed"
  messageCount: number
  assignedUser: number
}

export const useGetTodo = () => {
  const setTasks = tasksStore((state) => state.setTasks)

  const getRandomStatus = (): "To Do" | "In Progress" | "Completed" => {
    const statuses = ["To Do", "In Progress", "Completed"]
    return statuses[Math.floor(Math.random() * statuses.length)] as
      | "To Do"
      | "In Progress"
      | "Completed"
  }

  return useQuery({
    queryKey: ["todos"],
    queryFn: async (): Promise<FormattedTodo[]> => {
      try {
        const { data } = await axios.get<{ todos: ApiTodo[] }>(
          import.meta.env.VITE_API_BASE_URL + "/todos"
        )

        const formattedTasks = data.todos.map((item: ApiTodo) => ({
          id: item.id,
          title: item.todo,
          description: "Landing page UI",
          status: getRandomStatus(),
          messageCount: Math.floor(Math.random() * 15),
          assignedUser: Math.floor(Math.random() * 4) + 2,
        }))
        setTasks(formattedTasks)
        console.log(formattedTasks)
        return formattedTasks
      } catch (error) {
        console.error("Error fetching todos:", error)
        throw error
      }
    },
    staleTime: 20 * 1000,
    placeholderData: keepPreviousData,
  })
}

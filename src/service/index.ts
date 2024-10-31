import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
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
          assignedUser: Math.floor(Math.random() * 2) + 2,
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
// Delete mutation hook
export const useDeleteTodo = () => {
  const queryClient = useQueryClient()
  const deleteTask = tasksStore((state) => state.deleteTask)

  return useMutation({
    mutationFn: async (id: number) => {
      const { data } = await axios.delete<ApiTodo & { isDeleted: boolean; deletedOn: string }>(
        `${import.meta.env.VITE_API_BASE_URL}/todos/${id}`
      )

      if (data.isDeleted) {
        return id
      } else {
        throw new Error("Failed to delete todo")
      }
    },
    onSuccess: (deletedId) => {
      // Update Zustand store
      deleteTask(deletedId)

      // Update React Query cache
      queryClient.setQueryData(["todos"], (oldData: FormattedTodo[] | undefined) => {
        return oldData ? oldData.filter((todo) => todo.id !== deletedId) : []
      })

      // Show toast
      const toast = document.createElement("div")
      toast.innerHTML = `
                <div class="toast">
                    <div class="alert alert-info">
                        <span>Task deleted successfully!</span>
                    </div>
                </div>
            `
      document.body.appendChild(toast)

      // Remove toast after 3 seconds
      setTimeout(() => {
        toast.remove()
      }, 3000)
    },
    onError: (error) => {
      console.error("Delete failed:", error)

      // Show error toast
      const toast = document.createElement("div")
      toast.innerHTML = `
                <div class="toast">
                    <div class="alert alert-error">
                        <span>Failed to delete task</span>
                    </div>
                </div>
            `
      document.body.appendChild(toast)

      // Remove toast after 3 seconds
      setTimeout(() => {
        toast.remove()
      }, 3000)
    },
  })
}

// Update mutation hook
export const useUpdateTodo = () => {
  const queryClient = useQueryClient()
  const updateTask = tasksStore((state) => state.updateTask)

  return useMutation({
    mutationFn: async ({
      id,
      updatedTodo,
    }: {
      id: number
      updatedTodo: Partial<FormattedTodo>
    }) => {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/todos/${id}`,
        updatedTodo
      )
      return { id, updatedTodo: data }
    },
    onSuccess: ({ id, updatedTodo }) => {
      // Update Zustand store
      updateTask(id, updatedTodo)
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] })
    },
  })
}

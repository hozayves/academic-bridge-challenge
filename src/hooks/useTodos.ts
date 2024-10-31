import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { tasksStore } from "../zustand"
import { showToast } from "../utils/toast"
import { Task } from "../types/todo"
import { todoApi } from "../service/todoApi"

export const useGetTodo = () => {
  const setTasks = tasksStore((state) => state.setTasks)

  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      try {
        const formattedTasks = await todoApi.getTodos()
        setTasks(formattedTasks)
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

export const useDeleteTodo = () => {
  const queryClient = useQueryClient()
  const deleteTask = tasksStore((state) => state.deleteTask)

  return useMutation({
    mutationFn: async (id: number) => {
      const data = await todoApi.deleteTodo(id)
      if (data.isDeleted) return id
      throw new Error("Failed to delete todo")
    },
    onSuccess: (deletedId) => {
      deleteTask(deletedId)
      queryClient.setQueryData(["todos"], (oldData: Task[] | undefined) => {
        return oldData ? oldData.filter((todo) => todo.id !== deletedId) : []
      })
      showToast("Task deleted successfully!", "info")
    },
    onError: () => {
      showToast("Failed to delete task", "error")
    },
  })
}

export const useUpdateTodo = () => {
  const queryClient = useQueryClient()
  const updateTask = tasksStore((state) => state.updateTask)

  return useMutation({
    mutationFn: async ({ id, updatedTodo }: { id: number; updatedTodo: Partial<Task> }) => {
      const data = await todoApi.updateTodo(id, updatedTodo)
      return { id, updatedTodo: data }
    },
    onSuccess: ({ id, updatedTodo }) => {
      updateTask(id, updatedTodo)
      queryClient.invalidateQueries({ queryKey: ["todos"] })
      showToast("Task updated successfully!", "success")
    },
    onError: () => {
      showToast("Failed to update task", "error")
    },
  })
}

export const useCreateTodo = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (newTodo: { todo: string; userId: number; completed: boolean }) => {
      return await todoApi.createTodo(newTodo)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] })
      showToast("Task created successfully!", "success")
    },
    onError: () => {
      showToast("Failed to create task", "error")
    },
  })
}

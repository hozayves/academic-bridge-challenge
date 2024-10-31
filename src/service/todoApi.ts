import axios from "axios"
import { ApiTodo, Task } from "../types/todo"
import { getRandomStatus } from "../utils/status"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const todoApi = {
  getTodos: async () => {
    const { data } = await axios.get<{ todos: ApiTodo[] }>(`${API_BASE_URL}/todos`)
    return data.todos.map((item: ApiTodo) => ({
      id: item.id,
      title: item.todo,
      description: "Landing page UI",
      status: getRandomStatus(),
      messageCount: Math.floor(Math.random() * 15),
      assignedUser: Math.floor(Math.random() * 2) + 2,
    }))
  },

  deleteTodo: async (id: number) => {
    const { data } = await axios.delete<ApiTodo & { isDeleted: boolean; deletedOn: string }>(
      `${API_BASE_URL}/todos/${id}`
    )
    return data
  },

  updateTodo: async (id: number, updatedTodo: Partial<Task>) => {
    const { data } = await axios.put(`${API_BASE_URL}/todos/${id}`, updatedTodo)
    return data
  },

  createTodo: async (newTodo: { todo: string; userId: number; completed: boolean }) => {
    const { data } = await axios.post(`${API_BASE_URL}/todos/add`, newTodo)
    return data
  },
}

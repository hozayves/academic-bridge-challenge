import { useState } from "react"
import { useGetTodo, useDeleteTodo, useUpdateTodo } from "../hooks/useTodos"
import { useTaskFiltering } from "../hooks/useTaskFiltering"
import { tasksStore } from "../zustand"
import { Task, AccessLevel, UpdateTaskPayload } from "../types/todo"
import { TaskCard } from "../components/todo/TaskCard"
import { CreateTaskModal } from "../components/todo/CreateTaskModal"
import { UpdateTaskModal } from "../components/todo/UpdateTaskModal"
import { TaskHeader } from "../components/todo/TaskHeader"
import { TaskNavigation } from "../components/todo/TaskNavigation"
import { ViewTaskModal } from "../components/todo/ViewTaskModal"
import Skeletonx from "../components/todo/Skeletonx"

export default function Todo() {
  const [access, setAccess] = useState<AccessLevel>("limited")
  const [activeTab, setActiveTab] = useState("all")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)

  const tasks = tasksStore((state) => state.tasks as Task[])
  const { isLoading, error } = useGetTodo()
  const { mutate: deleteTask, isPending: isDeleting } = useDeleteTodo()
  const { mutate: updateTask, isPending: isUpdating } = useUpdateTodo()
  const { getFilteredTasks, getTaskCounts } = useTaskFiltering(tasks)

  const handleDelete = (id: number) => {
    deleteTask(id)
  }

  const handleUpdate = (id: number, updatedTask: UpdateTaskPayload) => {
    updateTask({ id, updatedTodo: updatedTask })
    setIsUpdateModalOpen(false)
    setSelectedTask(null)
  }

  if (isLoading) return <Skeletonx />
  if (error) return <div className="text-center py-5">Error loading tasks</div>

  return (
    <div className="relative h-screen overflow-hidden">
      <div className={`transition-all duration-300 h-full flex flex-col`}>
        <div className="flex-1 overflow-auto p-2 md:px-5 md:py-0 bg-indigo-50 dark:bg-dark">
          <div className="bg-indigo-50 dark:bg-dark text-gray-400 flex-shrink-0">
            <TaskHeader access={access} setAccess={setAccess} />

            <TaskNavigation
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              taskCounts={getTaskCounts()}
              onNewTask={() => setIsModalOpen(true)}
            />
          </div>
          <div className="columns-1 md:columns-3 lg:columns-4 gap-3 py-3">
            {getFilteredTasks(activeTab).map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDelete={handleDelete}
                onUpdate={(task) => {
                  setSelectedTask(task)
                  setIsUpdateModalOpen(true)
                }}
                onView={(task) => {
                  setSelectedTask(task)
                  setIsViewModalOpen(true)
                }}
                isDeleting={isDeleting}
              />
            ))}
          </div>
        </div>

        <CreateTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        <UpdateTaskModal
          isOpen={isUpdateModalOpen}
          onClose={() => {
            setIsUpdateModalOpen(false)
            setSelectedTask(null)
          }}
          task={selectedTask}
          onUpdate={handleUpdate}
          isUpdating={isUpdating}
        />
      </div>

      <ViewTaskModal
        isOpen={isViewModalOpen}
        onClose={() => {
          setIsViewModalOpen(false)
          setSelectedTask(null)
        }}
        task={selectedTask}
      />
    </div>
  )
}

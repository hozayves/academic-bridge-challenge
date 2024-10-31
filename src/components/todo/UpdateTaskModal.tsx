import { useState, useEffect } from "react"
import { Task, UpdateTaskPayload } from "../../types/todo"

interface UpdateTaskModalProps {
  isOpen: boolean
  onClose: () => void
  task: Task | null
  onUpdate: (id: number, updatedTask: UpdateTaskPayload) => void
  isUpdating: boolean
}

export const UpdateTaskModal = ({
  isOpen,
  onClose,
  task,
  onUpdate,
  isUpdating,
}: UpdateTaskModalProps) => {
  const [formData, setFormData] = useState({
    todo: "",
    completed: false,
  })

  useEffect(() => {
    if (task) {
      setFormData({
        todo: task.title || "",
        completed: task.status === "Completed",
      })
    }
  }, [task])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (task?.id) {
      const updatedTask: UpdateTaskPayload = {
        ...formData,
        status: formData.completed
          ? "Completed"
          : task.status === "In Progress"
            ? "In Progress"
            : "To Do",
      }
      await onUpdate(task.id, updatedTask)
    }
  }

  return (
    <dialog className="modal" open={isOpen}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Update Task</h3>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="text"
            placeholder="Task title"
            className="input input-bordered w-full"
            value={formData.todo}
            onChange={(e) => setFormData({ ...formData, todo: e.target.value })}
          />
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="checkbox"
              checked={formData.completed}
              onChange={(e) => setFormData({ ...formData, completed: e.target.checked })}
            />
            <span>Mark as completed</span>
          </div>
          <div className="modal-action">
            <button type="submit" className="btn btn-primary" disabled={isUpdating}>
              {isUpdating ? "Updating..." : "Update"}
            </button>
            <button type="button" className="btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  )
}

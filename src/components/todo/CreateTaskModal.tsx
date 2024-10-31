import { useState } from "react"
import { useCreateTodo } from "../../hooks/useTodos"

interface CreateTaskModalProps {
  isOpen: boolean
  onClose: () => void
}

export const CreateTaskModal = ({ isOpen, onClose }: CreateTaskModalProps) => {
  const [formData, setFormData] = useState({
    todo: "",
    userId: 1,
    completed: false,
  })

  const createTodo = useCreateTodo()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await createTodo.mutateAsync(formData)
    onClose()
  }

  return (
    <dialog className="modal" open={isOpen}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Create New Task</h3>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="text"
            placeholder="Task title"
            className="input input-bordered w-full"
            value={formData.todo}
            onChange={(e) => setFormData({ ...formData, todo: e.target.value })}
          />
          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Create
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
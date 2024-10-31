import { useState, useEffect } from "react"
import { UpdateTaskPayload, UpdateTaskModalProps } from "../../types/todo"
import { useTranslation } from "react-i18next"

export const UpdateTaskModal = ({
  isOpen,
  onClose,
  task,
  onUpdate,
  isUpdating,
}: UpdateTaskModalProps) => {
  const { t } = useTranslation()
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
        <h3 className="font-bold text-lg">{t("updateTask.title")}</h3>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="text"
            placeholder={t("updateTask.taskPlaceholder")}
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
            <span>{t("updateTask.markCompleted")}</span>
          </div>
          <div className="modal-action">
            <button type="submit" className="btn btn-primary" disabled={isUpdating}>
              {isUpdating ? t("updateTask.updating") : t("updateTask.updateButton")}
            </button>
            <button type="button" className="btn" onClick={onClose}>
              {t("updateTask.cancel")}
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

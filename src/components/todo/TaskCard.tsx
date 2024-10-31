import { Task } from "../../types/todo"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FiEdit2 } from "react-icons/fi"
import { RiDeleteBinLine } from "react-icons/ri"
import { AiOutlineMessage } from "react-icons/ai"
import imagex from "../../assets/images/taskImg.jpg"
import { useTranslation } from "react-i18next"

interface TaskCardProps {
  task: Task
  onDelete: (id: number) => void
  onUpdate: (task: Task) => void
  onView: (task: Task) => void
  isDeleting: boolean
}

export const TaskCard = ({ task, onDelete, onUpdate, onView, isDeleting }: TaskCardProps) => {
  const { t } = useTranslation()
  const getStatusColor = (status: string) => {
    switch (status) {
      case "To Do":
        return "bg-orange-100 text-orange-800"
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      case "Completed":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div
      onClick={() => onView(task)}
      className="break-inside-avoid mb-3 overflow-hidden rounded-xl bg-white dark:bg-dark border dark:border-dark-border shadow p-4 flex flex-col gap-4 cursor-pointer hover:shadow-lg transition-shadow">
      {task.status === "In Progress" && (
        <div className="rounded-xl">
          <img className="rounded-xl w-full h-48 object-cover" src={imagex} alt="task" />
        </div>
      )}
      <div className="flex justify-between items-center">
        <span
          className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)} mb-2`}>
          {task.status}
        </span>
        <div className="dropdown dropdown-end" onClick={(e) => e.stopPropagation()}>
          <button
            tabIndex={0}
            className="rounded-full p-1 hover:bg-indigo-50 hover:text-dark dark:hover:bg-dark-bg hover:dark:text-white">
            <BsThreeDotsVertical />
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 dark:bg-dark dark:border-dark-bg border dark:text-white">
            <li>
              <button onClick={() => onUpdate(task)} className="flex items-center gap-2">
                <FiEdit2 size={16} />
                {t("actionx.update")}
              </button>
            </li>
            <li>
              <button
                onClick={() => onDelete(task.id)}
                disabled={isDeleting}
                className="flex items-center gap-2">
                <RiDeleteBinLine size={16} />
                {t("actionx.delete")}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col border-b border-gray-100 dark:border-dark-border pb-3">
        <h1 className="text-gray-900 dark:text-white text-lg font-bold line-clamp-1">
          {task.title}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{task.description}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="avatar-group -space-x-3 rtl:space-x-reverse">
          {[...Array(task.assignedUser)].map((_, i) => (
            <div className="avatar" key={i}>
              <div className="w-12">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="avatar"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <AiOutlineMessage size={20} />
          <span>{task.messageCount}</span>
        </div>
      </div>
    </div>
  )
}

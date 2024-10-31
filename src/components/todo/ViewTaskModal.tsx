import { Task } from "../../types/todo"
import { MdOutlineKeyboardVoice } from "react-icons/md"
import imagex from "../../assets/images/taskImg.jpg"
import { useState } from "react"
import { messages, teamMembers } from "../../constants/task"

interface ViewTaskModalProps {
  isOpen: boolean
  onClose: () => void
  task: Task | null
}

export const ViewTaskModal = ({ isOpen, onClose, task }: ViewTaskModalProps) => {
  const [message, setMessage] = useState("")

  if (!isOpen || !task) return null

  return (
    <div
      className={`fixed right-0 top-0 h-full md:w-[400px] w-full bg-white dark:bg-dark shadow-xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-50 overflow-y-auto text-dark`}>
      <div className="flex flex-col h-full relative ">
        <div className="p-4 top-0 sticky bg-white dark:bg-dark border-b dark:border-dark-border flex justify-between items-center">
          <h2 className="text-xl font-bold dark:text-white">Project Overview</h2>
          <button onClick={onClose} className="btn btn-sm btn-ghost dark:text-light">
            ✕
          </button>
        </div>
        <div className="p-6 border-b dark:border-dark-border">
          <div className="bg-gray-50 dark:bg-dark-bg rounded-lg p-4 space-y-4">
            {task.status === "In Progress" && (
              <div className="mb-2">
                <img className="rounded-xl w-full h-48 object-cover" src={imagex} alt="task" />
              </div>
            )}

            <div className="flex flex-col items-start gap-2 dark:text-white">
              <h3 className="text-xl font-bold dark:text-white">{task.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{task.description}</p>
              <div className="flex items-center gap-2 md:gap-8">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor">
                  <path
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Timeline:</span>
                  <span>Apr 14 - May 7</span>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-8">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor">
                  <path
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Team:</span>
                  <div className="avatar-group -space-x-3 rtl:space-x-reverse">
                    {teamMembers.map((member) => (
                      <div className="avatar" key={member.id}>
                        <div className="w-8">
                          <img src={member.image} alt="team member" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-8">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor">
                  <path
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Status:</span>
                  <span>{task.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="p-4">
            <h3 className="font-semibold mb-4 dark:text-white">Team Chat</h3>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.align === "right" ? "flex-row-reverse" : ""}`}>
                  <img src={message.avatar} alt={message.user} className="w-8 h-8 rounded-full" />
                  <div className={`flex flex-col ${message.align === "right" ? "items-end" : ""}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium dark:text-white">{message.user}</span>
                      <span className="text-sm text-gray-500">{message.time}</span>
                    </div>
                    <div className="bg-gray-100 dark:bg-dark-bg rounded-lg p-3 dark:text-white">
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 border-t dark:border-dark-border mt-auto">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-gray-100 dark:bg-dark-bg dark:text-white rounded-lg px-4 py-2 focus:outline-none"
            />
            <div className="flex justify-center items-center">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-dark-bg rounded-full">
                <MdOutlineKeyboardVoice size={20} />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-dark-bg rounded-full">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor">
                  <path
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

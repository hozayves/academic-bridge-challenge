import { CiUnlock } from "react-icons/ci"
import { IoIosArrowDown } from "react-icons/io"
import { FaPlus } from "react-icons/fa6"
import { IoLinkSharp } from "react-icons/io5"
import { IoGridOutline } from "react-icons/io5"
import { CiGrid2H } from "react-icons/ci"
import { CiLock } from "react-icons/ci"
import { MdPublic } from "react-icons/md"
import { useState, useEffect } from "react"
import { BiSort } from "react-icons/bi"
import { NavLink } from "react-router-dom"
import imagex from "../assets/images/erick.jpeg"
import { BsThreeDotsVertical } from "react-icons/bs"
import { AiOutlineMessage } from "react-icons/ai"
import { tasksStore } from "../zustand"
import { useGetTodo, useDeleteTodo, useCreateTodo, useUpdateTodo } from "../hooks/useTodos"
import { FiEdit2 } from "react-icons/fi"
import { RiDeleteBinLine } from "react-icons/ri"

// Add this type definition near the top of the file
type Task = {
  id: number
  title: string
  description?: string
  status: string
  assignedUser: number
  messageCount: number
}

// Add this type above the component
type AccessLevel = "limited" | "private" | "public"

// Add this type near the top with other type definitions
type TaskStatus = "To Do" | "In Progress" | "Completed"

type UpdateTaskPayload = {
  todo: string
  completed: boolean
  status?: TaskStatus
}

export default function Todo() {
  // Add this state near the top of the component
  const [access, setAccess] = useState<AccessLevel>("limited")
  // Add new state for active tab
  const [activeTab, setActiveTab] = useState("all")
  const tasks = tasksStore((state) => state.tasks)
  const { isLoading, error } = useGetTodo() // Add this to trigger the API fetch
  const { mutate: deleteTask, isPending: isDeleting } = useDeleteTodo()
  const { mutate: updateTask, isPending: isUpdating } = useUpdateTodo()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  const handleDelete = (id: number) => {
    deleteTask(id)
  }

  const handleUpdate = (id: number, updatedTask: UpdateTaskPayload) => {
    updateTask({ id, updatedTodo: updatedTask })
    setIsUpdateModalOpen(false)
    setSelectedTask(null)
  }

  // Add loading state
  if (isLoading) {
    return <div>Loading...</div>
  }

  // Add error handling
  if (error) {
    return <div>Error loading tasks</div>
  }

  // Add this function to filter tasks based on activeTab
  const getFilteredTasks = () => {
    switch (activeTab) {
      case "todo":
        return tasks.filter((task) => task.status === "To Do")
      case "inProgress":
        return tasks.filter((task) => task.status === "In Progress")
      case "completed":
        return tasks.filter((task) => task.status === "Completed")
      default:
        return tasks
    }
  }

  // Replace the static taskCounts with a computed version
  const taskCounts = {
    all: tasks.length,
    todo: tasks.filter((task) => task.status === "To Do").length,
    inProgress: tasks.filter((task) => task.status === "In Progress").length,
    completed: tasks.filter((task) => task.status === "Completed").length,
  }

  // Helper function to get icon and text based on access level
  const getAccessInfo = (level: AccessLevel) => {
    switch (level) {
      case "limited":
        return { icon: <CiUnlock size={20} />, text: "Limited access" }
      case "private":
        return { icon: <CiLock size={20} />, text: "Private" }
      case "public":
        return { icon: <MdPublic size={20} />, text: "Public" }
    }
  }
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

  const CreateTaskModal = () => {
    const [formData, setFormData] = useState({
      todo: "",
      userId: 1,
      completed: false,
    })

    const createTodo = useCreateTodo()

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      await createTodo.mutateAsync(formData)
      setIsModalOpen(false)
    }

    return (
      <dialog className="modal" open={isModalOpen}>
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
              <button type="button" className="btn" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setIsModalOpen(false)}>close</button>
        </form>
      </dialog>
    )
  }

  const UpdateTaskModal = () => {
    const [formData, setFormData] = useState({
      todo: selectedTask?.title || "",
      completed: selectedTask?.status === "Completed",
    })

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      if (selectedTask?.id) {
        const updatedTask: UpdateTaskPayload = {
          ...formData,
          status: formData.completed
            ? "Completed"
            : selectedTask.status === "In Progress"
              ? "In Progress"
              : "To Do",
        }
        await handleUpdate(selectedTask.id, updatedTask)
      }
    }

    useEffect(() => {
      if (selectedTask) {
        setFormData({
          todo: selectedTask.title || "",
          completed: selectedTask.status === "Completed",
        })
      }
    }, [selectedTask])

    return (
      <dialog className="modal" open={isUpdateModalOpen}>
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
              <button
                type="button"
                className="btn"
                onClick={() => {
                  setIsUpdateModalOpen(false)
                  setSelectedTask(null)
                }}>
                Cancel
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button
            onClick={() => {
              setIsUpdateModalOpen(false)
              setSelectedTask(null)
            }}>
            close
          </button>
        </form>
      </dialog>
    )
  }

  return (
    <div className="p-2 md:p-5 h-auto bg-indigo-50 dark:bg-dark text-gray-400">
      <div className="flex justify-between items-center rounded-lg w-full">
        <div className="flex flex-col gap-3">
          {/* Breadcrumb */}
          <div className="breadcrumbs text-xs md:text-sm">
            <ul>
              <li>
                <a>Workspace</a>
              </li>
              <li>
                <a>Creative</a>
              </li>
              <li className="text-gray-900 dark:text-white">Creative Website</li>
            </ul>
          </div>
          <h1 className="text-gray-900 dark:text-white md:text-4xl text-2xl font-bold">
            Website Design
          </h1>
        </div>
        <div className="flex-col items-end self-start gap-3 h-full hidden md:flex">
          <p className="font-bold text-gray-900 dark:text-white text-sm">From 21 April</p>
          <span className="text-gray-500 dark:text-gray-400 text-xs flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            Updated 12 min ago
          </span>
        </div>
      </div>
      <div className="mt-6 flex justify-between md:items-center items-start">
        <div className="flex items-center justify-between md:justify-start w-full gap-4">
          <div className="dropdown dropdown-left dropdown-right">
            <button tabIndex={0} role="button" className="flex items-center gap-1">
              {getAccessInfo(access).icon}
              <span className="text-gray-900 text-sm dark:text-white">
                {getAccessInfo(access).text}
              </span>
              <IoIosArrowDown size={20} />
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-indigo-50 text-dark rounded-box z-50 w-52 p-2 shadow border border-transparent dark:bg-dark dark:text-white dark:border-dark-border dark:border">
              <li
                onClick={(e) => {
                  setAccess("private")
                  ;(e.target as HTMLElement).blur()
                }}>
                <a className={access === "private" ? "active bg-indigo-100 dark:bg-dark-bg" : ""}>
                  <CiLock />
                  Private
                </a>
              </li>
              <li
                onClick={(e) => {
                  setAccess("public")
                  ;(e.target as HTMLElement).blur()
                }}>
                <a className={access === "public" ? "active bg-indigo-100 dark:bg-dark-bg" : ""}>
                  <MdPublic />
                  Public
                </a>
              </li>
              <li
                onClick={(e) => {
                  setAccess("limited")
                  ;(e.target as HTMLElement).blur()
                }}>
                <a className={access === "limited" ? "active bg-indigo-100 dark:bg-dark-bg" : ""}>
                  <CiUnlock />
                  Limited
                </a>
              </li>
            </ul>
          </div>
          <div className="border-l border-gray-300 dark:border-dark-border md:px-2 pr-0 pl-2 flex justify-center items-center gap-7">
            {/* Avatar group */}
            <div className="avatar-group -space-x-3 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="bg-indigo-300 text-white dark:bg-dark-border w-12">
                  <span>+2</span>
                </div>
              </div>
            </div>
            {/* Plus button */}
            <div className="border border-transparent rounded-full w-9 h-9 bg-indigo-600 text-white flex justify-center items-center dark:bg-dark-bg hover:dark:bg-transparent hover:dark:border-dark-border hover:dark:text-indigo-500 transition-all ease-in-out delay-100 cursor-pointer">
              <button>
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex hidden items-center md:self-center gap-3">
          <button className="flex items-center gap-2 relative group">
            <IoLinkSharp size={18} className="rotate-45 h-6 w-6 md:h-5 md:w-5" />
            <div className="absolute hidden md:flex invisible group-hover:visible -top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-white text-sm rounded whitespace-nowrap after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:border-4 after:border-transparent after:border-t-indigo-600">
              Copy link
            </div>
          </button>
          <div className="flex items-center gap-2 border-l border-gray-300 dark:border-dark-border px-2">
            <button className="rounded-md p-2">
              <CiGrid2H />
            </button>
            <button className="rounded-md bg-indigo-600 p-2 text-white flex items-center justify-center">
              <IoGridOutline />
            </button>
          </div>
        </div>
      </div>
      <div className="flex-col mt-5 md:flex">
        {/* Updated wrapper and nav styles */}
        <div className="flex justify-between gap-0 md:gap-0 bg-white dark:bg-dark-bg rounded-xl md:p-4 px-1 py-2">
          <div className="flex md:gap-2 gap-1 items-center">
            <NavLink
              to="/todo"
              onClick={() => setActiveTab("all")}
              className={`md:px-1 lg:px-3 px-1 md:text-sm text-[10px] gap-[1px] md:gap-1 flex items-center font-medium relative rounded-full 
                            hover:after:content-[''] hover:after:absolute hover:after:bottom-[-16px] hover:after:left-0 hover:after:w-full hover:after:h-[5px] hover:after:bg-indigo-600 hover:after:rounded-t-full 
                            ${
                              activeTab === "all"
                                ? "text-indigo-600 dark:text-indigo-400 after:content-[''] after:absolute after:bottom-[-16px] after:left-0 after:w-full after:h-[5px] after:bg-indigo-600 after:rounded-t-full"
                                : "text-gray-500 dark:text-gray-400"
                            }`}>
              All Tasks{" "}
              <span
                className={`px-1 py-[2px] hidden md:flex rounded-md leading-none ${activeTab === "all" ? "text-indigo-400 bg-indigo-50 dark:text-indigo-500 dark:bg-indigo-200" : "dark:text-gray-600 dark:bg-gray-400 text-gray-400 bg-gray-200"}`}>
                {taskCounts.all}
              </span>
            </NavLink>
            <NavLink
              to="/todo"
              onClick={() => setActiveTab("todo")}
              className={`md:px-1 lg:px-3 px-1 md:text-sm text-[10px] gap-[1px] md:gap-1 flex items-center font-medium relative rounded-full 
                                hover:after:content-[''] hover:after:absolute hover:after:bottom-[-16px] hover:after:left-0 hover:after:w-full hover:after:h-[5px] hover:after:bg-indigo-600 hover:after:rounded-t-full
                                ${
                                  activeTab === "todo"
                                    ? "text-indigo-600 dark:text-indigo-400 after:content-[''] after:absolute after:bottom-[-16px] after:left-0 after:w-full after:h-[5px] after:bg-indigo-600 after:rounded-t-full"
                                    : "text-gray-500 dark:text-gray-400"
                                }`}>
              To Do{" "}
              <span
                className={`px-1 py-[2px] hidden md:flex rounded-md leading-none ${activeTab === "todo" ? "text-indigo-400 bg-indigo-50 dark:text-indigo-500 dark:bg-indigo-200" : "dark:text-gray-600 dark:bg-gray-400 text-gray-400 bg-gray-200"}`}>
                {taskCounts.todo}
              </span>
            </NavLink>
            <NavLink
              to="/todo"
              onClick={() => setActiveTab("inProgress")}
              className={`md:px-1 lg:px-3 px-1 md:text-sm text-[10px] gap-[1px] md:gap-1 flex items-center font-medium relative rounded-full 
                                hover:after:content-[''] hover:after:absolute hover:after:bottom-[-16px] hover:after:left-0 hover:after:w-full hover:after:h-[5px] hover:after:bg-indigo-600 hover:after:rounded-t-full 
                                ${
                                  activeTab === "inProgress"
                                    ? "text-indigo-600 dark:text-indigo-400 after:content-[''] after:absolute after:bottom-[-16px] after:left-0 after:w-full after:h-[5px] after:bg-indigo-600 after:rounded-t-full"
                                    : "text-gray-500 dark:text-gray-400"
                                }`}>
              In Progress{" "}
              <span
                className={`px-1 py-[2px] hidden md:flex rounded-md leading-none ${activeTab === "inProgress" ? "text-indigo-400 bg-indigo-50 dark:text-indigo-500 dark:bg-indigo-200" : "dark:text-gray-600 dark:bg-gray-400 text-gray-400 bg-gray-200"}`}>
                {taskCounts.inProgress}
              </span>
            </NavLink>
            <NavLink
              to="/todo"
              onClick={() => setActiveTab("completed")}
              className={`md:px-1 lg:px-3 px-1 md:text-sm text-[10px] gap-[1px] md:gap-1 flex items-center font-medium relative rounded-full 
                                hover:after:content-[''] hover:after:absolute hover:after:bottom-[-16px] hover:after:left-0 hover:after:w-full hover:after:h-[5px] hover:after:bg-indigo-600 hover:after:rounded-t-full 
                                ${
                                  activeTab === "completed"
                                    ? "text-indigo-600 dark:text-indigo-400 after:content-[''] after:absolute after:bottom-[-16px] after:left-0 after:w-full after:h-[5px] after:bg-indigo-600 after:rounded-t-full"
                                    : "text-gray-500 dark:text-gray-400"
                                }`}>
              completed{" "}
              <span
                className={`px-1 py-[2px] hidden md:flex rounded-md leading-none ${activeTab === "completed" ? "text-indigo-400 bg-indigo-50 dark:text-indigo-500 dark:bg-indigo-200" : "dark:text-gray-600 dark:bg-gray-400 text-gray-400 bg-gray-200"}`}>
                {taskCounts.completed}
              </span>
            </NavLink>
          </div>
          <div className="flex gap-4 md:text-sm text-xs md:font-medium">
            <button className="rounded-md md:flex hidden border border-gray-300 p-1 px-2 gap-1 justify-center items-center hover:bg-gray-200 dark:bg-dark-bg hover:dark:text-light dark:border-dark-border dark:border-2 hover:dark:bg-transparent">
              <BiSort className="rotate-90" />
              <span>Filter & Sort</span>
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-md border border-gray-300 p-1 md:px-2 flex gap-1 justify-center items-center hover:bg-gray-200 dark:bg-dark-bg hover:dark:text-light dark:border-dark-border dark:border-2 hover:dark:bg-transparent">
              <FaPlus />
              <span>New</span> <span className="hidden md:flex">Task</span>
            </button>
          </div>
        </div>
        <div className="mt-5 my-5 columns-1 md:columns-3 lg:columns-4 gap-3 py-3">
          {getFilteredTasks().map((task) => (
            // Task Card
            <div
              key={task.id}
              className={`break-inside-avoid mb-3 overflow-hidden rounded-xl bg-white dark:bg-dark border dark:border-dark-border shadow p-4 flex flex-col gap-4`}>
              {/* Task Image */}
              {task.status === "In Progress" && (
                <div className="rounded-xl">
                  <img className="rounded-xl w-full h-48 object-cover" src={imagex} alt="avatar" />
                </div>
              )}
              {/* Task Status */}
              <div className="flex justify-between items-center">
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    task.status
                  )} mb-2`}>
                  {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                </span>
                <div className="dropdown dropdown-end">
                  <button
                    tabIndex={0}
                    className=" rounded-full p-1 hover:bg-indigo-50 hover:text-dark dark:hover:bg-dark-bg hover:dark:text-white">
                    <BsThreeDotsVertical />
                  </button>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 dark:bg-dark dark:border-dark-bg border dark:text-white">
                    <li>
                      <button
                        type="button"
                        className="flex items-center gap-2"
                        onClick={() => {
                          setSelectedTask(task)
                          setIsUpdateModalOpen(true)
                        }}>
                        <FiEdit2 size={16} />
                        Update
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => handleDelete(task.id)}
                        disabled={isDeleting}
                        className="text-red-500 flex items-center gap-2">
                        <RiDeleteBinLine size={16} />
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Task Body */}
              <div className="flex flex-col border-b border-gray-100 dark:border-dark-border pb-3">
                <h1 className="text-gray-900 dark:text-white text-lg font-bold line-clamp-1">
                  {task.title}
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{task.description}</p>
              </div>
              <div className="flex justify-between items-center">
                {/* Avatar group */}
                <div className="avatar-group -space-x-3 rtl:space-x-reverse">
                  {[...Array(task.assignedUser)].map((_, i) => (
                    <div className="avatar">
                      <div className="w-12" key={i}>
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
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
          ))}
        </div>
      </div>
      <CreateTaskModal />
      <UpdateTaskModal />
    </div>
  )
}

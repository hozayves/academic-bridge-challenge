import { CiUnlock } from "react-icons/ci"
import { IoIosArrowDown } from "react-icons/io"
import { FaPlus } from "react-icons/fa6"
import { IoLinkSharp } from "react-icons/io5"
import { IoGridOutline } from "react-icons/io5"
import { CiGrid2H } from "react-icons/ci"
import { CiLock } from "react-icons/ci"
import { MdPublic } from "react-icons/md"
import { useState } from "react"
import { BiSort } from "react-icons/bi"
import { NavLink } from "react-router-dom"
import imagex from "../assets/images/erick.jpeg"
import { BsThreeDotsVertical } from "react-icons/bs"
import { AiOutlineMessage } from "react-icons/ai"

// Add this type above the component
type AccessLevel = "limited" | "private" | "public"

export default function Todo() {
  // Add this state near the top of the component
  const [access, setAccess] = useState<AccessLevel>("limited")
  // Add new state for active tab
  const [activeTab, setActiveTab] = useState("all")

  // Add mock counts (replace with actual data later)
  const taskCounts = {
    all: 12,
    todo: 2,
    inProgress: 4,
    completed: 3,
  }
  const tasks = [
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
      status: "To Do",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description 2",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Task 3",
      description: "Description 3",
      status: "In Progress",
    },
    {
      id: 4,
      title: "Task 4",
      description: "Description 4",
      status: "Completed",
    },
    {
      id: 5,
      title: "Task 5",
      description: "Description 5",
      status: "To Do",
    },
    {
      id: 6,
      title: "Task 6",
      description: "Description 6",
      status: "In Progress",
    },
    {
      id: 7,
      title: "Task 7",
      description: "Description 7",
      status: "Completed",
    },
    {
      id: 8,
      title: "Task 8",
      description: "Description 8",
      status: "In Progress",
    },
    {
      id: 9,
      title: "Task 9",
      description: "Description 9",
      status: "To Do",
    },
    {
      id: 10,
      title: "Task 10",
      description: "Description 10",
      status: "In Progress",
    },
    {
      id: 11,
      title: "Task 11",
      description: "Description 11",
      status: "In Progress",
    },
    {
      id: 12,
      title: "Task 12",
      description: "Description 12",
      status: "Completed",
    },
    {
      id: 13,
      title: "Task 13",
      description: "Description 13",
      status: "In Progress",
    },
  ]

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
            <button className="rounded-md border border-gray-300 p-1 md:px-2 flex gap-1 justify-center items-center hover:bg-gray-200 dark:bg-dark-bg hover:dark:text-light dark:border-dark-border dark:border-2 hover:dark:bg-transparent">
              <FaPlus />
              <span>New</span> <span className="hidden md:flex">Task</span>
            </button>
          </div>
        </div>
        <div className="mt-5 my-5 columns-1 md:columns-3 lg:columns-4 gap-3 py-3">
          {tasks.map((task) => (
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
                <button>
                  <BsThreeDotsVertical />
                </button>
              </div>
              {/* Task Body */}
              <div className="flex flex-col border-b border-gray-100 dark:border-dark-border pb-3">
                <h1 className="text-gray-900 dark:text-white text-lg font-bold">{task.title}</h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{task.description}</p>
              </div>
              <div className="flex justify-between items-center">
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
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineMessage size={20} />
                  <span>12</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

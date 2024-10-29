import { CiUnlock } from "react-icons/ci"
import { IoIosArrowDown } from "react-icons/io"
import { FaPlus } from "react-icons/fa6"
import { IoLinkSharp } from "react-icons/io5"
import { IoGridOutline } from "react-icons/io5"
import { CiGrid2H } from "react-icons/ci"
import { CiLock } from "react-icons/ci"
import { MdPublic } from "react-icons/md"
import { useState } from "react"

// Add this type above the component
type AccessLevel = "limited" | "private" | "public"

export default function Todo() {
  // Add this state near the top of the component
  const [access, setAccess] = useState<AccessLevel>("limited")

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

  return (
    <div className="p-6 h-screen bg-indigo-50 dark:bg-dark text-gray-400">
      <div className="flex justify-between items-center rounded-lg">
        <div className="flex flex-col gap-3">
          {/* Breadcrumb */}
          <div className="breadcrumbs text-sm">
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
          <h1 className="text-gray-900 dark:text-white text-4xl font-bold">Website Design</h1>
        </div>
        <div className="flex flex-col items-end self-start gap-3 h-full">
          <p className="font-bold text-gray-900 dark:text-white text-sm">From 21 April</p>
          <span className="text-gray-500 dark:text-gray-400 text-xs flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            Updated 12 min ago
          </span>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
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
          <div className="border-l border-gray-300 dark:border-dark-border px-2 flex justify-center items-center gap-7">
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
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 relative group">
            <IoLinkSharp size={18} className="rotate-45" />
            <div className="absolute invisible group-hover:visible -top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-white text-sm rounded whitespace-nowrap after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:border-4 after:border-transparent after:border-t-indigo-600">
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
    </div>
  )
}

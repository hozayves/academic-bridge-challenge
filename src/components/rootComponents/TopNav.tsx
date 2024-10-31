import { RiMoonLine } from "react-icons/ri"
import { MdOutlineNotificationsNone } from "react-icons/md"
import { FiSearch } from "react-icons/fi"
import { IoMdSunny } from "react-icons/io"
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

export default function TopNav() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme")
      return savedTheme === "dark"
    }
    return false
  })
  const { t } = useTranslation()

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <div
      role="navigation"
      className="bg-light dark:bg-dark h-16 w-full sticky top-0 flex justify-between md:gap-5 gap-2 items-center px-2 md:px-5 py-2 text-dark dark:text-light dark:border-b-1 dark:border-dark-border dark:border-b z-10">
      <div className="rounded-xl flex bg-gray-100 py-2 px-3 w-45 md:w-80 h-9 justify-center items-center dark:bg-dark-bg">
        <input
          type="text"
          placeholder={t("nav.search")}
          className="bg-gray-100 flex-1 outline-none text-gray-600 dark:bg-dark-bg dark:text-dark-text"
        />
        <FiSearch size={20} />
      </div>
      <div className="flex justify-center items-center gap-2 md:gap-4 text-gray-500 dark:text-light">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="rounded-md p-2 bg-gray-100 dark:bg-dark-bg hover:dark:border-dark-hover hover:dark:border border border-transparent hover:dark:bg-transparent flex justify-center items-center hover:bg-gray-200 transition-all ease-linear cursor-pointer hover:dark:text-indigo-600">
          {isDarkMode ? <IoMdSunny size={18} /> : <RiMoonLine size={18} />}
        </button>
        <button className="rounded-md p-2 bg-gray-100 dark:bg-dark-bg hover:dark:border-dark-hover hover:dark:border border border-transparent hover:dark:bg-transparent flex justify-center items-center hover:bg-gray-200 transition-all ease-linear cursor-pointer hover:dark:text-indigo-600">
          <div className="relative">
            <MdOutlineNotificationsNone size={19} />
            <div className="absolute top-[2px] right-[2px] bg-red-700 w-[7px] h-[7px] rounded-full"></div>
          </div>
        </button>
      </div>
    </div>
  )
}

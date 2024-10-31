import { TaskCounts } from "../../types/todo"
import { NavLink } from "react-router-dom"
import { BiSort } from "react-icons/bi"
import { FaPlus } from "react-icons/fa6"
import { useTranslation } from "react-i18next"

interface TaskNavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  taskCounts: TaskCounts
  onNewTask: () => void
}

export const TaskNavigation = ({
  activeTab,
  setActiveTab,
  taskCounts,
  onNewTask,
}: TaskNavigationProps) => {
  const { t } = useTranslation()

  return (
    <div className="flex justify-between gap-0 md:gap-0 bg-white dark:bg-dark-bg rounded-xl md:p-4 px-1 py-2 mt-5">
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
          {t("todo.allTasks")}
          <span
            className={`px-1 py-[2px] hidden md:flex rounded-md leading-none 
                        ${
                          activeTab === "all"
                            ? "text-indigo-400 bg-indigo-50 dark:text-indigo-500 dark:bg-indigo-200"
                            : "dark:text-gray-600 dark:bg-gray-400 text-gray-400 bg-gray-200"
                        }`}>
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
          {t("todo.toDo")}
          <span
            className={`px-1 py-[2px] hidden md:flex rounded-md leading-none 
                        ${
                          activeTab === "todo"
                            ? "text-indigo-400 bg-indigo-50 dark:text-indigo-500 dark:bg-indigo-200"
                            : "dark:text-gray-600 dark:bg-gray-400 text-gray-400 bg-gray-200"
                        }`}>
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
          {t("todo.inProgress")}
          <span
            className={`px-1 py-[2px] hidden md:flex rounded-md leading-none 
                        ${
                          activeTab === "inProgress"
                            ? "text-indigo-400 bg-indigo-50 dark:text-indigo-500 dark:bg-indigo-200"
                            : "dark:text-gray-600 dark:bg-gray-400 text-gray-400 bg-gray-200"
                        }`}>
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
          {t("todo.completed")}
          <span
            className={`px-1 py-[2px] hidden md:flex rounded-md leading-none 
                        ${
                          activeTab === "completed"
                            ? "text-indigo-400 bg-indigo-50 dark:text-indigo-500 dark:bg-indigo-200"
                            : "dark:text-gray-600 dark:bg-gray-400 text-gray-400 bg-gray-200"
                        }`}>
            {taskCounts.completed}
          </span>
        </NavLink>
      </div>

      <div className="flex gap-4 md:text-sm text-xs md:font-medium">
        <button className="rounded-md md:flex hidden border border-gray-300 p-1 px-2 gap-1 justify-center items-center hover:bg-gray-200 dark:bg-dark-bg hover:dark:text-light dark:border-dark-border dark:border-2 hover:dark:bg-transparent">
          <BiSort className="rotate-90" />
          <span>{t("todo.filterAndSort")}</span>
        </button>
        <button
          onClick={onNewTask}
          className="rounded-md border border-gray-300 p-1 md:px-2 flex gap-1 justify-center items-center hover:bg-gray-200 dark:bg-dark-bg hover:dark:text-light dark:border-dark-border dark:border-2 hover:dark:bg-transparent">
          <FaPlus />
          <span>{t("todo.new")}</span>
          <span className="hidden md:flex">{t("todo.task")}</span>
        </button>
      </div>
    </div>
  )
}

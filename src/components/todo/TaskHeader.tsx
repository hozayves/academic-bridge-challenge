import { CiUnlock, CiLock } from "react-icons/ci"
import { IoLinkSharp, IoGridOutline } from "react-icons/io5"
import { IoIosArrowDown } from "react-icons/io"
import { FaPlus } from "react-icons/fa"
import { MdPublic } from "react-icons/md"
import { CiGrid2H } from "react-icons/ci"
import { useTranslation } from "react-i18next"

type AccessLevel = "limited" | "private" | "public"
interface TaskHeaderProps {
  access: AccessLevel
  setAccess: (access: AccessLevel) => void
}

export const TaskHeader = ({ access, setAccess }: TaskHeaderProps) => {
  const { t } = useTranslation()

  const getAccessInfo = (level: AccessLevel) => {
    switch (level) {
      case "limited":
        return { icon: <CiUnlock size={20} />, text: t("access.limited") }
      case "private":
        return { icon: <CiLock size={20} />, text: t("access.private") }
      case "public":
        return { icon: <MdPublic size={20} />, text: t("access.public") }
    }
  }

  return (
    <>
      <div className="flex justify-between items-center rounded-lg w-full pt-3">
        <div className="flex flex-col gap-3">
          {/* Breadcrumb */}
          <div className="breadcrumbs text-xs md:text-sm">
            <ul>
              <li>
                <a>{t("breadcrumb.workspace")}</a>
              </li>
              <li>
                <a>{t("breadcrumb.creative")}</a>
              </li>
              <li className="text-gray-900 dark:text-white">{t("breadcrumb.creativeWebsite")}</li>
            </ul>
          </div>
          <h1 className="text-gray-900 dark:text-white md:text-4xl text-2xl font-bold">
            {t("header.websiteDesign")}
          </h1>
        </div>

        <div className="flex-col items-end self-start gap-3 h-full hidden md:flex pt-1">
          <p className="font-bold text-gray-900 dark:text-white text-sm">
            {t("date.from", { date: "21 April" })}
          </p>
          <span className="text-gray-500 dark:text-gray-400 text-xs flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            {t("status.updated", { time: "12 min" })}
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
              <li onClick={() => setAccess("private")}>
                <a className={access === "private" ? "active bg-indigo-100 dark:bg-dark-bg" : ""}>
                  <CiLock />
                  {t("access.private")}
                </a>
              </li>
              <li onClick={() => setAccess("public")}>
                <a className={access === "public" ? "active bg-indigo-100 dark:bg-dark-bg" : ""}>
                  <MdPublic />
                  {t("access.public")}
                </a>
              </li>
              <li onClick={() => setAccess("limited")}>
                <a className={access === "limited" ? "active bg-indigo-100 dark:bg-dark-bg" : ""}>
                  <CiUnlock />
                  {t("access.limited")}
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
              {t("actions.copyLink")}
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
    </>
  )
}

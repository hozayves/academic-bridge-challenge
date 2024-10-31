import { FC, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { TopNav, Sidebar } from "../components"
import { useTranslation } from "react-i18next"

export const RootLayout: FC = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem("language", lng)
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage)
    }
  }, [i18n])
  return (
    <div className="flex w-full h-auto dark:bg-dark bg-indigo-50">
      <Sidebar />
      <div className="flex flex-col w-full">
        <TopNav />
        <main className="flex-1 w-full bg-indigo-50 dark:bg-dark overflow-auto">{<Outlet />}</main>
        <div className="w-full flex p-2 bg-indigo-50 dark:bg-dark z-10 border-t dark:border-gray-800">
          <div className="w-full flex justify-center items-center p-4 bg-indigo-50 dark:bg-dark z-10">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Your App Name. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
              className="py-1 px-2 border rounded-md bg-indigo-50 border-dark-border dark:bg-dark-bg dark:text-light">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

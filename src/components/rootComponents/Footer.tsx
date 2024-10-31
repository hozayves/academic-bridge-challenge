import { useEffect } from "react"
import { useTranslation } from "react-i18next"
export default function Footer() {
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
    <footer
      role="contentinfo"
      className="footer w-full flex p-2 bg-indigo-50 dark:bg-dark z-10 border-t dark:border-gray-800 items-center px-5">
      <div className="w-full flex justify-center items-center p-2 bg-indigo-50 dark:bg-dark z-10">
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
    </footer>
  )
}

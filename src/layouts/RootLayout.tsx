import { FC } from "react"
import { Outlet } from "react-router-dom"
import { TopNav, Sidebar } from "../components"

export const RootLayout: FC = () => {
  return (
    <div className="flex w-full h-auto dark:bg-dark bg-indigo-50">
      <Sidebar />
      <div className="flex flex-col w-full">
        <TopNav />
        <main className="flex-1 w-full bg-indigo-50 dark:bg-dark overflow-auto">{<Outlet />}</main>
      </div>
    </div>
  )
}

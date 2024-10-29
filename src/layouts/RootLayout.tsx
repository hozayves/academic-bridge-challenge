import { FC } from "react"
import { Outlet } from "react-router-dom"
import { TopNav, Sidebar } from "../components"

export const RootLayout: FC = () => {
  return (
    <div className="flex w-full h-screen justify- bg-slate-100">
      <Sidebar />
      <div className="flex flex-col w-full">
        <TopNav />
        <main className="bg-gray-100 overflow-auto">{<Outlet />}</main>
      </div>
    </div>
  )
}

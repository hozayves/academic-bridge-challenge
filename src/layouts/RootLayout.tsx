import { FC } from "react";
import { Outlet } from "react-router-dom";
import { TopNav, Sidebar } from "../components";

export const RootLayout: FC = () => {
    return (
        <div className="flex bg-slate-100">
            <Sidebar />
            <div className="flex flex-col w-full bg-violet-300">
                <TopNav />
                <main className="bg-violet-200">{<Outlet />}</main>
            </div>
        </div>
    )
};
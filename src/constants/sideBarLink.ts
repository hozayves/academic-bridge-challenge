import { GoHome } from "react-icons/go";
import { LuMessageSquare } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";
import { HiOutlineFolderRemove } from "react-icons/hi";
import { BsCupStraw } from "react-icons/bs";

type SideBarLink = {
    path: string;
    icon: React.ComponentType<{ className?: string }>;
    name: string;
}

export const sideBarLinks: SideBarLink[] = [
    {
        path: "/",
        icon: GoHome,
        name: "Home"
    },
    {
        path: "/messages",
        icon: LuMessageSquare,
        name: "Messages"
    },
    {
        path: "/contacts",
        icon: HiOutlineFolderRemove,
        name: "Contacts"
    },
    {
        path: "/todo",
        icon: LuClipboardList,
        name: "Todo"
    },
    {
        path: "/about",
        icon: BsCupStraw,
        name: "About"
    }
];

import { GoHome } from "react-icons/go"
import { LuMessageSquare } from "react-icons/lu"
import { LuClipboardList } from "react-icons/lu"
import { HiOutlineFolderRemove } from "react-icons/hi"
import { BsCupStraw } from "react-icons/bs"
import { FiUser } from "react-icons/fi"
import { MdOutlineSettings } from "react-icons/md"

type SideBarLink = {
  path: string
  icon: React.ComponentType<{ className?: string; size?: number }>
  name: string
}

export const sideBarLinks: SideBarLink[] = [
  {
    path: "/",
    icon: GoHome,
    name: "Home",
  },
  {
    path: "/messages",
    icon: LuMessageSquare,
    name: "Messages",
  },
  {
    path: "/contacts",
    icon: HiOutlineFolderRemove,
    name: "Contacts",
  },
  {
    path: "/todo",
    icon: LuClipboardList,
    name: "Todo",
  },
  {
    path: "/about",
    icon: BsCupStraw,
    name: "About",
  },
]

export const userLinks: SideBarLink[] = [
  {
    path: "/settings",
    icon: MdOutlineSettings,
    name: "Settings",
  },
  {
    path: "/profile",
    icon: FiUser,
    name: "Profile",
  },
]

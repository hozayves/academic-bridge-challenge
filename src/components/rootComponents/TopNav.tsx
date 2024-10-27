import { RiMoonLine } from "react-icons/ri";
import { HiOutlineSun } from "react-icons/hi";
import { MdOutlineNotificationsNone } from "react-icons/md";

export default function TopNav() {
    return (
        <div className="bg-white h-16 w-full sticky top-0 flex justify-between gap-5 items-center p-5 px-2 md:px-5 py-8 text-gray-500">
            <div className="rounded-xl flex bg-gray-100 p-2 w-64 md:w-80 h-9 justify-center items-center">
                <input type="text" className="bg-gray-100 flex-1 outline-none text-gray-600" />
                <HiOutlineSun size={20} />
            </div>
            <div className="flex justify-center items-center gap-2">
                <div className="rounded-md p-2 bg-gray-100 flex justify-center items-center hover:bg-gray-200 transition-all ease-linear cursor-pointer">
                    <RiMoonLine size={18} />
                </div>
                <div className="rounded-md p-2 bg-gray-100 flex justify-center items-center hover:bg-gray-200 transition-all ease-linear cursor-pointer">
                    <div className="relative">
                        <MdOutlineNotificationsNone size={20} />
                        <div className="absolute top-[2px] right-[2px] bg-red-700 w-[7px] h-[7px] rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

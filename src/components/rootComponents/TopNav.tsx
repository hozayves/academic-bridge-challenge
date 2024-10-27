import { RiMoonLine } from "react-icons/ri";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FiSearch } from "react-icons/fi";


export default function TopNav() {
    return (
        <div className="bg-white h-16 w-full sticky top-0 flex justify-between md:gap-5 gap-2 items-center p-5 px-2 md:px-5 py-8 text-gray-500">
            <div className="rounded-xl flex bg-gray-100 p-2 px-3 w-64 md:w-80 h-9 justify-center items-center">
                <input type="text" placeholder="Search" className="bg-gray-100 flex-1 outline-none text-gray-600" />
                <FiSearch size={20} />
            </div>
            <div className="flex justify-center items-center gap-2 md:gap-4">
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

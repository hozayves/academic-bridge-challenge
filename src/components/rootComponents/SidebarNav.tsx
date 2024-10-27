import { FC } from "react";
import { NavLink, Link } from "react-router-dom";
import { sideBarLink } from "../../constants";
import { IoLogoSlack } from "react-icons/io5";
import Avatar from "boring-avatars";
import { FaPlus } from "react-icons/fa6";

export const SidebarNav: FC = () => {
    return (
        <div className="bg-white h-screen w-[75px] sticky top-0 left-0 flex flex-col border border-r-gray-200">
            <div className=" h-16 py-4 flex justify-center items-center">
                <Link to="/" className="">
                    <IoLogoSlack className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
                </Link>
            </div>
            <div className="border-b py-3 pb-10 border-b-1">
                {sideBarLink.sideBarLinks.map((link) => (
                    <div className="relative group overflow-hidden" key={link.path}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                `w-full p-3 flex flex-col justify-center items-center transition-all ease-linear relative z-10 ${isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <link.icon size={22} />
                                    <div className={`absolute top-0 left-0 w-1 h-full bg-indigo-600 rounded-r-3xl z-20 transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                                    <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-100 to-transparent z-10 transition-all duration-300 ease-out transform ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0'}`}></div>
                                </>
                            )}
                        </NavLink>
                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-start items-center h-auto  py-5 pb-10 border-b gap-2">
                {[1, 2, 3].map((_, index) => (
                    <div key={index} className="w-[35px] rounded-full h-[35px]">
                        <div className="w-[35px] bg-white">
                            <img className="rounded-full" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                ))}
                <div className="rounded-full p-[6px] border-2 border-dashed border-gray-300">
                    <FaPlus size={15} className="text-gray-400" />
                </div>
            </div>
            <div className="flex flex-col justify-end h-[140px]">

                {sideBarLink.userLinks.map((link) => (
                    <div className="relative group overflow-hidden" key={link.path}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                `w-full p-3 flex flex-col justify-center items-center transition-all ease-linear relative z-10 ${isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <div className="w-[22px] h-[22px]">
                                        <link.icon size={22} />
                                    </div>
                                    <div className={`absolute top-0 left-0 w-1 h-full bg-indigo-600 rounded-r-3xl z-20 transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                                    <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-100 to-transparent z-10 transition-all duration-300 ease-out transform ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0'}`}></div>
                                </>
                            )}
                        </NavLink>
                    </div>
                ))}

            </div>
        </div>
    );
};

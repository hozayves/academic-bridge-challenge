import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function Skeletonx() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className={`transition-all duration-300 h-full flex flex-col`}>
        <div className="flex-1 overflow-auto p-2 md:px-5 md:py-0 bg-indigo-50 dark:bg-dark">
          <div className="bg-indigo-50 dark:bg-dark text-gray-400 flex-shrink-0">
            <div className="flex justify-between items-center rounded-lg w-full pt-3">
              <div className="flex flex-col gap-3">
                <div className="breadcrumbs text-xs md:text-sm">
                  <ul>
                    <li>
                      <Skeleton height={20} width={50} />
                    </li>
                    <li>
                      <Skeleton height={20} width={50} />
                    </li>
                    <li>
                      <Skeleton height={20} width={50} />
                    </li>
                  </ul>
                </div>
                <h1 className="text-gray-900 dark:text-white md:text-4xl text-2xl font-bold">
                  <Skeleton height={30} width={200} />
                </h1>
              </div>
              <div className="flex-col items-end self-start gap-3 h-full hidden md:flex pt-1">
                <p className="font-bold text-gray-900 dark:text-white text-sm">
                  <Skeleton height={20} width={100} />
                </p>
                <span className="text-gray-500 dark:text-gray-400 text-xs flex items-center gap-2">
                  <Skeleton height={20} width={100} />
                </span>
              </div>
            </div>
            <div className="mt-6 flex justify-between md:items-center items-start">
              <div className="flex items-center justify-between md:justify-start w-full gap-4">
                <div className="dropdown dropdown-left dropdown-right">
                  <button tabIndex={0} role="button" className="flex items-center gap-1">
                    <Skeleton height={20} width={20} />
                    <span className="text-gray-900 text-sm dark:text-white">
                      <Skeleton height={20} width={100} />
                    </span>
                  </button>
                </div>
                <div className="border-l border-gray-300 dark:border-dark-border md:px-2 pr-0 pl-2 flex justify-center items-center gap-7">
                  {/* Avatar group */}
                  <div className="avatar-group -space-x-3 rtl:space-x-reverse">
                    <div className="avatar">
                      <Skeleton width={30} height={30} circle={true} />
                    </div>
                    <div className="avatar">
                      <Skeleton width={30} height={30} circle={true} />
                    </div>
                    <div className="avatar">
                      <Skeleton width={30} height={30} circle={true} />
                    </div>
                  </div>
                  {/* Plus button */}
                  <div className="border border-transparent rounded-full w-9 h-9 text-white flex justify-center items-center dark:bg-dark-bg hover:dark:bg-transparent hover:dark:border-dark-border transition-all ease-in-out delay-100 cursor-pointer">
                    <button>
                      <Skeleton width={30} height={30} circle={true} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:flex hidden items-center md:self-center gap-3">
                <div className="flex items-center gap-2 border-gray-300 dark:border-dark-border px-2">
                  <Skeleton width={100} height={30} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-0 md:gap-0 bg-white dark:bg-dark-bg rounded-xl md:p-4 px-2 py-2 mt-5">
            <div className="flex md:gap-2 gap-3 items-center justify-between">
              <div>
                <Skeleton width={90} height={30} />
              </div>
              <div>
                <Skeleton width={90} height={30} />
              </div>
              <div>
                <Skeleton width={90} height={30} />
              </div>
              <div className="hidden md:flex">
                <Skeleton width={90} height={30} />
              </div>
            </div>
          </div>
          <div className="columns-1 md:columns-3 lg:columns-4 gap-3 py-3">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="break-inside-avoid mb-3 overflow-hidden rounded-xl bg-white dark:bg-dark border dark:border-dark-border shadow p-4 flex flex-col gap-4 cursor-pointer hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-center">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2`}>
                    <Skeleton width={50} height={10} />
                  </span>
                  <div className="dropdown dropdown-end">
                    <button
                      tabIndex={0}
                      className="rounded-full p-1 hover:bg-indigo-50 hover:text-dark dark:hover:bg-dark-bg hover:dark:text-white">
                      <Skeleton width={10} height={5} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col border-b border-gray-100 dark:border-dark-border pb-3">
                  <h1 className="text-gray-900 dark:text-white text-lg font-bold line-clamp-1">
                    <Skeleton width={100} height={20} />
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    <Skeleton width={130} height={20} />
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="avatar-group -space-x-3 rtl:space-x-reverse">
                    {[...Array(4)].map((_, i) => (
                      <div className="" key={i}>
                        <div className="w-12">
                          <Skeleton circle={true} width={30} height={30} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <Skeleton width={30} height={30} circle={true} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skeletonx

import { createBrowserRouter, Link } from "react-router-dom"
import { rootLayout } from "../layouts"
import Todo from "../pages/Todo"
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <rootLayout.RootLayout />,
    children: [
      {
        index: true,
        element: (
          <div className="md:text-3xl text-sm font-base md:font-bold mt-4 items-center gap-5 text-black flex flex-col dark:text-white  ">
            <span>Welcome to Todo App challenge</span>
            <Link to="/todo" className="btn w-32 text-sm md:text-lg">
              Go to Tasks
            </Link>
          </div>
        ),
      },
      {
        path: "todo",
        element: <Todo />,
      },
      {
        path: "*",
        element: (
          <div className="text-3xl font-bold text-center text-black dark:text-red-500">
            Not Found
          </div>
        ),
      },
    ],
  },
])

import { createBrowserRouter } from "react-router-dom"
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
          <div className="text-3xl font-bold mt-4 items-center gap-5 text-black flex flex-col dark:text-white  ">
            <span>Welcome to Todo App challenge</span>
            <a href="/todo" className="btn w-32">
              Go to Tasks
            </a>
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

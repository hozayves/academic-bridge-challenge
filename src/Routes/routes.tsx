import { createBrowserRouter } from "react-router-dom";
import { rootLayout } from '../layouts'
export const routes = createBrowserRouter([
    {
        path: "/",
        element: <rootLayout.RootLayout />,
        children: [
            {
                index: true,
                element: <div className="text-3xl font-bold text-center">Home</div>,
            },
            {
                path: "todo",
                element: <div className="text-3xl font-bold text-center">Todo</div>,
            },
            {
                path: "*",
                element: <div className="text-3xl font-bold text-center">Not Found</div>,
            }
        ],
    },
]);
import { lazy } from "react";
import { PUBLIC_ROUTES } from "./paths";

export const publicRoutes = [
    {
        path: PUBLIC_ROUTES.HOME,
        Component: lazy(() => import("@pages/Home"))
    },
    {
        path: PUBLIC_ROUTES.SEARCH,
        Component: lazy(() => import("@pages/Search"))
    },
    {
        path: PUBLIC_ROUTES.NOPAGE,
        Component: lazy(() => import("@pages/NOPAGE"))
    }
]
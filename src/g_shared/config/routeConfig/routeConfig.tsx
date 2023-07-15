import AboutPage from "c_pages/AboutPage/ui/AboutPage"
import MainPage from "c_pages/MainPage/ui/MainPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes,string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: 'about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    }
}
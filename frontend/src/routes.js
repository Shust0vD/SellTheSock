import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ADS_ROUTE} from "./utils/consts";
import Ads from "./pages/Ads";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
]

export const publicRoutes = [
    {
        path: ADS_ROUTE,
        Component: Ads
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
]

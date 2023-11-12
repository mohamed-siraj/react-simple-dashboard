import { RouteObject } from "react-router-dom";
import DashboardPage from "../pages/dashboard/Dashboard.page";
import AuthGuard from "./guard/auth.guard";


const AUTH_ROUTE: RouteObject[] = [
    {
        path: '/',
        element: <AuthGuard auth={true}><DashboardPage /></AuthGuard>,
    }
];

export default AUTH_ROUTE;
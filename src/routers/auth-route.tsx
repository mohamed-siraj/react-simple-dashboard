import { RouteObject } from "react-router-dom";
import DashboardPage from "../pages/dashboard/Dashboard.page";


const AUTH_ROUTE : RouteObject[] = [
    {
        path: '/',
        element: <DashboardPage/>,
    }
];

export default AUTH_ROUTE;
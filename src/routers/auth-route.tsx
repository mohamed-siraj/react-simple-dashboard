import React from "react";
import { RouteObject } from "react-router-dom";
import AuthGuard from "./guard/auth.guard";

/**
 * lazy loading
 */

const DashboardPage = React.lazy(() => import('../pages/dashboard/Dashboard.page'));


const AUTH_ROUTE: RouteObject[] = [
    {
        path: '/',
        element: <AuthGuard auth={true}><DashboardPage /></AuthGuard>,
    }
];

export default AUTH_ROUTE;
import React from "react";
import { RouteObject } from "react-router-dom";
import NoAuthGuard from "./guard/no-auth.guard";

/**
 * lazy loading
 */

const LoginPage = React.lazy(() => import('../pages/login/Login.page'));
const RegisterPage = React.lazy(() => import('../pages/register/Register.page'));

const WITHOUT_AUTH_ROUTE: RouteObject[] = [
    {
        path: '/react-simple-dashboard/login',
        element: <NoAuthGuard auth={false}><LoginPage initLoading={false} /></NoAuthGuard>,
    },
    {
        path: '/react-simple-dashboard/register',
        element: <NoAuthGuard auth={false}><RegisterPage /></NoAuthGuard>,
    }
];

export default WITHOUT_AUTH_ROUTE;
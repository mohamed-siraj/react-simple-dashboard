import { RouteObject } from "react-router-dom";
import LoginPage from "../pages/login/Login.page";
import RegisterPage from "../pages/register/Register.page";

const WITHOUT_AUTH_ROUTE : RouteObject[] = [
    {
        path: '/login',
        element: <LoginPage/>,
    },
    {
        path: '/register',
        element: <RegisterPage/>,
    }
];

export default WITHOUT_AUTH_ROUTE;
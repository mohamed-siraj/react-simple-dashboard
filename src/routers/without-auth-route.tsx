import { RouteObject } from "react-router-dom";
import LoginPage from "../pages/login/Login.page";

const WITHOUT_AUTH_ROUTE : RouteObject[] = [
    {
        path: '/login',
        element: <LoginPage/>,
    }
];

export default WITHOUT_AUTH_ROUTE;
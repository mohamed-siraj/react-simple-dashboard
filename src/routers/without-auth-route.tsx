import { RouteObject } from "react-router-dom";
import LoginPage from "../login/LoginPage";

const WITHOUT_AUTH_ROUTE : RouteObject[] = [
    {
        path: '/',
        element: <LoginPage/>,
    }
];

export default WITHOUT_AUTH_ROUTE;
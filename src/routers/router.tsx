import {
    createBrowserRouter,
  } from "react-router-dom";
  
import WITHOUT_AUTH_ROUTE from "./without-auth-route";

const ROUTE = createBrowserRouter([
    ...WITHOUT_AUTH_ROUTE,
]);

export default ROUTE;
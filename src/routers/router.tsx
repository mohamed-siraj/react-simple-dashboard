import {
    createBrowserRouter,
  } from "react-router-dom";

import WITHOUT_AUTH_ROUTE from "./without-auth-route";
import AUTH_ROUTE from "./auth-route";
import PUBLIC_ROUTE from "./public-route";

const ROUTE = createBrowserRouter([
    ...WITHOUT_AUTH_ROUTE,
    ...AUTH_ROUTE,
    ...PUBLIC_ROUTE
]);

export default ROUTE;
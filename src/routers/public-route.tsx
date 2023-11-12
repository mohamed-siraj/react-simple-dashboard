import React from "react";
import { RouteObject } from "react-router-dom";

/**
 * lazy loading
 */
const NotFoundPage = React.lazy(() => import('../pages/404/404.page'));

const PUBLIC_ROUTE : RouteObject[] = [
    {
        path: '*',
        element: <NotFoundPage />,
    }
];

export default PUBLIC_ROUTE;
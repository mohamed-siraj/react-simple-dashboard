import React, { ReactNode } from "react";
import StorageService from "../../services/Storage.service";
import { useNavigate } from "react-router-dom";

type TAuthGuard = {
    children?: ReactNode;
    auth: boolean;
}

const NoAuthGuard: React.FunctionComponent<TAuthGuard> = ({ children, auth }) => {

    /**
     * route manage
     */
    const navigate = useNavigate();

    (async function () {

        //storage 
        const STORE = new StorageService();
        const token = await STORE.getItem('token');

        /**
         * if has token
         */
        if (token && !auth) {
            navigate('/');
        }

    })();


    return (<>{children}</>);
};

export default NoAuthGuard;
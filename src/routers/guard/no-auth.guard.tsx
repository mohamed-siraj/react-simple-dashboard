import React, { ReactNode, Suspense } from "react";
import StorageService from "../../services/storage/Storage.service";
import { useNavigate } from "react-router-dom";
import { Rings } from 'react-loader-spinner';

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
            navigate('/react-simple-dashboard');
        }

    })();


    return (<><Suspense fallback={<div className="flex flex-row justify-center mt-[20rem]"><Rings
        height="80"
        width="80"
        color="#4fa94d"
        radius="20"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
    /></div>}>{children} </Suspense></>);
};

export default NoAuthGuard;
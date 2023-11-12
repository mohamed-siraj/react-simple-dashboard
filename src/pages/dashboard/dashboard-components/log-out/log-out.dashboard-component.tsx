import React from "react";
import { SirajPng } from "../../../../assets";
import { useNavigate } from "react-router-dom";
import StorageService from "../../../../services/Storage.service";

const LogOutDashboardComponent: React.FunctionComponent = () => {
    /**
     * route manage
     */
    const navigate = useNavigate();

    const logOut = async () => {

        /**
         * remove token
         */
        const STORE = new StorageService();
        await STORE.removeItem('token');
        navigate('/login');
    }

    return (<>
        <div className="flex flex-row-reverse">
            <div className="flex flex-col">
                <div className="ml-4 font-bold text-xl mt-2">
                    Mohamed Siraj
                </div>
                <div className="ml-4 font-bold text-md text-yellow-800 cursor-pointer" onClick={logOut}>
                    LogOut
                </div>
            </div>
            <img src={SirajPng} className=" rounded-full w-14" alt="Mohamed Siraj" />
        </div>
    </>)

};

export default LogOutDashboardComponent;
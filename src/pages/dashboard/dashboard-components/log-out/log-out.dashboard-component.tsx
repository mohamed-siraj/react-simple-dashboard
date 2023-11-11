import React from "react";
import { SirajPng } from "../../../../assets";

class LogOutDashboardComponent extends React.Component {

    render(): React.ReactNode {
        return (<>
            <div className="flex flex-row-reverse">
                <div className="flex flex-col">
                    <div className="ml-4 font-bold text-xl mt-2">
                        Mohamed Siraj
                    </div>
                    <div className="ml-4 font-bold text-md text-yellow-800">
                        LogOut
                    </div>
                </div>
                <img src={SirajPng} className=" rounded-full w-14" alt="Mohamed Siraj" />
            </div>
        </>)
    }

};

export default LogOutDashboardComponent;
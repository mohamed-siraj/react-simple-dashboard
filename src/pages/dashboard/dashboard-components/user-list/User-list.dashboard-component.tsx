import React from "react";
import { AnimatePulseUserListComponent } from "./user-list.components";

const UserListDashboardComponent: React.FunctionComponent = () => {

    return (<>
        <div
            className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 m-10 ">
            <h5
                className="mb-4 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Mohamed Siraj
            </h5>
            <div className="flex space-x-6">
                <img
                    className="h-20 w-20 rounded-full"
                    src="https://mdbootstrap.com/img/new/textures/small/148.jpg"
                    alt="" />
                <div className="flex-1">
                    <div>sdf</div>
                    <div>sdf</div>
                </div>
            </div>
        </div>
        <AnimatePulseUserListComponent />
        
    </>);
};

export default UserListDashboardComponent;
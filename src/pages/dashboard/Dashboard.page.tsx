import React from "react";
import { UserCreateUpdateDashboardComponent, UserListDashboardComponent } from "./dashboard-components";


class DashboardPage extends React.Component {

    render(): React.ReactNode {
        return (<>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
                <div className="bg-yellow-800 m-5 h-[58rem] rounded-2xl shadow-2x overflow-x-scroll no-scrollbar">
                    <UserListDashboardComponent/>
                </div>

                <div className="bg-gray-800 m-5 h-[58rem] rounded-2xl shadow-2xl">
                    <UserCreateUpdateDashboardComponent/>
                </div>
            </div>
        </>);
    }
};

export default DashboardPage;
import React from "react";
import { UserListComponent } from "./dashboard-components";


class DashboardPage extends React.Component {

    render(): React.ReactNode {
        return (<>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
                <div className="bg-yellow-800 m-5 h-[58rem] rounded-2xl shadow-2xl">
                    <UserListComponent/>
                </div>

                <div className="bg-gray-800 m-5 h-[58rem] rounded-2xl shadow-2xl">
                    <h5>2</h5>
                </div>
            </div>
        </>);
    }
};

export default DashboardPage;
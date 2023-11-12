import React from "react";

const UserCreateUpdateDashboardComponent: React.FunctionComponent = () => {

    return (<>
        <div
            className="m-10 block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)">
            <form>
                <div className="grid grid-cols-1 ">
                    <div className="mt-4 mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Username
                        </label>
                        <input className={`border-rose-600 shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} type="text" placeholder="Enter your name" />
                    </div>
                    <div className="mt-4 mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Job
                        </label>
                        <input className={`border-rose-600 shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} type="text" placeholder="Enter your job" />
                    </div>
                    <div className="mt-3 mb-3 text-end">
                        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-[12rem]">
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </>);
};

export default UserCreateUpdateDashboardComponent;
import React from "react";

class LoginPage extends React.Component {

    render(): React.ReactNode {
        return (<>
            <div className="flex flex-row justify-center py-72">
                <div className="bg-white w-96 h-96 rounded-2xl shadow-2xl">
                    <div className="mt-10 text-center text-2xl font-bold">
                        <h1>Login Form</h1>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="text" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }
};

export default LoginPage;
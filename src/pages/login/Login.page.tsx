import React from "react";

class LoginPage extends React.Component {
    
    render(): React.ReactNode {
        return (<>
            <div className="flex flex-row justify-center py-64">
                <div className="bg-white w-96 h-[29rem] rounded-2xl shadow-2xl">
                    <div className="mt-10 text-center text-2xl font-bold">
                        <h1>Login Form</h1>
                    </div>
                    <div className="flex flex-row justify-center">
                        <div className="flex flex-col">
                            <div className="mt-4 mb-3 w-80">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Email address
                                </label>
                                <input className={`border-rose-600 shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} type="email" placeholder="Email address" />
                            </div>
                            <div className="mt-3 mb-3 w-80">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Password
                                </label>
                                <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} type="password" placeholder="Password" />
                            </div>
                            <div className="mt-3 mb-3 w-80">
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>)
    }
};

export default LoginPage;
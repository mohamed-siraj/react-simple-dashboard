import React, { useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TLoginForm } from "../../_types/_forms/login-page.form-type";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginPageFormSchema } from "../../schema/form";
import { Link } from "react-router-dom";



const LoginPage: React.FunctionComponent = () => {

    /**
     * form declaration
     */
    const { register, handleSubmit, formState: { errors }, } = useForm<TLoginForm>({
        resolver: yupResolver(LoginPageFormSchema)
    });

    const onSubmit: SubmitHandler<TLoginForm> = useCallback((values) => {

    }, []);

    return (<>
        <div className="flex flex-row justify-center py-64">
            <div className="bg-white w-96 h-[29rem] rounded-2xl shadow-2xl">
                <div className="mt-10 text-center text-2xl font-bold">
                    <h1>Login</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-row justify-center">
                        <div className="flex flex-col">
                            <div className="mt-4 mb-3 w-80">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Email address
                                </label>
                                <input className={`${errors.email ? `border-rose-600` : ''} shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} type="email" {...register('email', { required: true })} placeholder="Email address" />
                                {errors.email && <div className="text-rose-600 font-bold text-sm mt-[0.1rem]">{errors.email.message}</div>}
                            </div>
                            <div className="mt-3 mb-3 w-80">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Password
                                </label>
                                <input className={`${errors.password ? `border-rose-600` : ''} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} {...register('password', { required: true })} type="password" placeholder="Password" />
                                {errors.password && <div className="text-rose-600 font-bold text-sm mt-[0.1rem]">{errors.password.message}</div>}
                            </div>
                            <div className="mt-3 mb-3 w-80">
                                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
                                    Login
                                </button>
                            </div>
                            <div className="mt-3 mb-3 w-80">
                                <Link to="/register" preventScrollReset={true} >
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                                        Register
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </>)
};

export default LoginPage;
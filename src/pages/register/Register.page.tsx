import { yupResolver } from "@hookform/resolvers/yup";
import React, { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { TRegisterForm } from "../../_types/_forms/login-page.form-type";
import { RegisterPageFormSchema } from "../../schema/form";

const RegisterPage: React.FunctionComponent = () => {

    /**
     * route manage
     */
    const navigate = useNavigate();

    /**
     * local state management
     */
    const [loading, setLoading] = useState<boolean>(false);

    /**
     * form declaration
     */
    const { register, handleSubmit, formState: { errors }, } = useForm<TRegisterForm>({
        resolver: yupResolver(RegisterPageFormSchema)
    });

    const onSubmit: SubmitHandler<TRegisterForm> = useCallback((values) => {

    }, []);

    return (<>
        <div className="flex flex-row justify-center py-40">
            <div className="bg-white w-96 h-[38rem] rounded-2xl shadow-2xl">
                <div className="mt-10 text-center text-2xl font-bold">
                    <h1>Registration</h1>
                </div>
                <div className="flex flex-row justify-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col">
                            <div className="mt-4 mb-3 w-80">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Email address
                                </label>
                                <input {...register('email', {required: true})} className={`${errors.password ? `border-rose-600` : ''} shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} type="email"  placeholder="Email address" />
                                {errors.email && <div className="text-rose-600 font-bold text-sm mt-[0.1rem]">{errors.email.message}</div>}
                            </div>
                            <div className="mt-3 mb-3 w-80">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Password
                                </label>
                                <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} type="password" placeholder="Password" />
                            </div>
                            <div className="mt-3 mb-3 w-80">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Confirm Password
                                </label>
                                <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} type="password" placeholder="Password" />
                            </div>
                            <div className="mt-3 mb-3 w-80">
                                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
                                    Register
                                </button>
                            </div>
                            <div className="mt-3 mb-3 w-80">
                                <Link to={'/react-simple-dashboard/login'}>
                                    <button className="bg-black text-white font-bold py-2 px-4 rounded w-full">
                                        Back
                                    </button>
                                </Link>
                            </div>
                            <div className="mt-3 mb-3 w-80">
                                <div className="text-left text-xl font-bold">
                                    <h1>Demo Register Credentials</h1>
                                </div>
                                <div className=" text-sm font-bold">username : mohamedsiraj@siraj.lk</div>
                                <div className=" text-sm font-bold">password : followme</div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </>);

};

export default RegisterPage;
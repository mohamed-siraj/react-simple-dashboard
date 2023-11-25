import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { TLoginForm } from "../../_types/_forms/login-page.form-type";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginPageFormSchema } from "../../schema/form";
import { Link } from "react-router-dom";
import { SirajPng } from "../../assets";
import LoadingComponent from "../components/loading/loading.component";
import { toast } from 'react-toastify';
import ApiService from "../../services/api/Api.service";
import { TLoginRequest } from "../../_types/_request/_request-type";
import StorageService from "../../services/storage/Storage.service";
import LabelFormComponent from "../components/form/label/Label.form.component";
import InputFormComponent from "../components/form/Input/Input.form.component";

type TLoginPage = {
    mockOnSubmit?: () => void
};

const LoginPage: React.FunctionComponent<TLoginPage> = ({ mockOnSubmit }) => {

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
    const { register, handleSubmit, formState: { errors }, } = useForm<TLoginForm>({
        resolver: yupResolver(LoginPageFormSchema)
    });

    const onSubmit: SubmitHandler<TLoginForm> = useCallback(async (values) => {

        /**
         * test if function is work
         */
        if (mockOnSubmit) {
            mockOnSubmit();
        }

        /**
         * check demo credentials
         */
        if (values.email !== 'mohamedsiraj@siraj.lk' || values.password !== 'followme') {
            toast.warning('Please use demo credentials');
            return;
        }

        //start loading
        setLoading(true);

        //payload create
        const PAYLOAD: TLoginRequest = {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        }

        //api call
        const API_SERVICE = new ApiService();
        const result = await API_SERVICE.login(PAYLOAD);

        /**
         * store token
         */
        const STORE = new StorageService();
        await STORE.setItem('token', result?.data.token);

        setLoading(false);

        toast.success('Welcome to My Dashboard', {
            position: 'top-center'
        });

        navigate('/react-simple-dashboard');

    }, [mockOnSubmit, navigate]);

    return (<>
        <div className="flex flex-row justify-center mt-16">
            <img src={SirajPng} className=" rounded-full w-32" alt="Mohamed Siraj" />
            <div className="flex flex-col ml-5 mt-2">
                <div className=" text-xl font-bold">Mohamed Siraj</div>
                <div className=" text-md font-bold">Full Stack Software Engineer</div>
                <Link to={`mailto:amsiraj94@gmail.com`}><div className=" text-md font-bold">amsiraj94@gmail.com</div></Link>
                <Link to={`tel:+94756595269`}><div className=" text-md font-bold">+94756595269</div></Link>
            </div>
        </div>

        <div className="flex flex-row justify-center py-20">
            <div className="bg-white w-96 h-[34rem] rounded-2xl shadow-2xl">
                <div className="mt-10 text-center text-2xl font-bold">
                    <h1>Login</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-row justify-center">
                        <div className="flex flex-col">
                            <div className="mt-4 mb-3 w-80">
                                <LabelFormComponent text={"Email address"} error={errors.email} />
                                <InputFormComponent error={errors.email} name={"email"} placeholder={"Email Address"} type={"EMAIL"} register={register} />
                            </div>
                            <div className="mt-3 mb-3 w-80">
                                <LabelFormComponent text={"Password"} error={errors.password} />
                                <InputFormComponent error={errors.password} name={"password"} placeholder={"Password"} type={"PASSWORD"} register={register} />
                            </div>
                            <div className="mt-3 mb-3 w-80">
                                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
                                    {!loading ? 'Login' : <LoadingComponent color="green" textColor="white" />}
                                </button>
                            </div>
                            <div className="mt-3 mb-3 w-80">
                                <Link to="/react-simple-dashboard/register">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                                        Register
                                    </button>
                                </Link>
                            </div>
                            <div className="mt-3 mb-3 w-80">
                                <div className="text-left text-xl font-bold">
                                    <h1>Demo Credentials</h1>
                                </div>
                                <div className=" text-sm font-bold">username : mohamedsiraj@siraj.lk</div>
                                <div className=" text-sm font-bold">password : followme</div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </>)
};

export default LoginPage;
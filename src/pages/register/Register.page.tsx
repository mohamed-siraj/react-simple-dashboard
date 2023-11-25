import { yupResolver } from "@hookform/resolvers/yup";
import React, { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { TRegisterForm } from "../../_types/_forms/login-page.form-type";
import { RegisterPageFormSchema } from "../../schema/form";
import LabelFormComponent from "../components/form/label/Label.form.component";
import InputFormComponent from "../components/form/Input/Input.form.component";
import LoadingComponent from "../components/loading/loading.component";
import { toast } from "react-toastify";
import ApiService from "../../services/api/Api.service";

type TRegisterPage = {
    mockOnSUbmit?: () => void;
}

const RegisterPage: React.FunctionComponent<TRegisterPage> = ({ mockOnSUbmit }) => {

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

    const onSubmit: SubmitHandler<TRegisterForm> = useCallback(async (values) => {

        if (mockOnSUbmit) {
            mockOnSUbmit();
        }

        if (values.email !== 'mohamedsiraj@siraj.lk' && values.password !== 'followme') {
            toast.warning('Please use demo credentials');
            return;
        }

        setLoading(true);

        const payload = {
            email: 'eve.holt@reqres.in',
            password: 'pistol'
        };

        const apiService = new ApiService();
        await apiService.register(payload);

        setLoading(false);

        toast.success('Registration successfully completed', {
            position: 'top-center'
        });

        navigate('/react-simple-dashboard/login');

    }, [mockOnSUbmit, navigate]);

    return (<>
        <div className="flex flex-row justify-center py-40">
            <div className="bg-white w-96 h-[40rem] rounded-2xl shadow-2xl">
                <div className="mt-10 text-center text-2xl font-bold">
                    <h1>Registration</h1>
                </div>
                <div className="flex flex-row justify-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                <LabelFormComponent text={"Confirm Password"} error={errors.confirmPassword} />
                                <InputFormComponent error={errors.confirmPassword} name={"confirmPassword"} placeholder={"Confirm Password"} type={"PASSWORD"} register={register} />
                            </div>
                            <div className="mt-3 mb-3 w-80">
                                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
                                    {!loading ? 'Register' : <LoadingComponent color="green" textColor="white" />}
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